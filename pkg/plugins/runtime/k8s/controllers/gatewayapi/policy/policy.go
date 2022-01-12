package policy

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	kube_schema "k8s.io/apimachinery/pkg/runtime/schema"
	kube_client "sigs.k8s.io/controller-runtime/pkg/client"
	gatewayapi "sigs.k8s.io/gateway-api/apis/v1alpha2"
)

var httpRouteGK = kube_schema.GroupKind{Group: gatewayapi.GroupName, Kind: "HTTPRoute"}

type PolicyReference struct {
	from        gatewayapi.ReferencePolicyFrom
	toNamespace gatewayapi.Namespace
	to          gatewayapi.ReferencePolicyTo
}

func (pr *PolicyReference) ToNamespace() string {
	return string(pr.toNamespace)
}

func FromHTTPRouteIn(namespace string) gatewayapi.ReferencePolicyFrom {
	return gatewayapi.ReferencePolicyFrom{
		Kind:      gatewayapi.Kind(httpRouteGK.Kind),
		Group:     gatewayapi.Group(httpRouteGK.Group),
		Namespace: gatewayapi.Namespace(namespace),
	}
}

func PolicyReferenceBackend(from gatewayapi.ReferencePolicyFrom, to gatewayapi.BackendObjectReference) PolicyReference {
	ns := from.Namespace
	if to.Namespace != nil {
		ns = *to.Namespace
	}
	return PolicyReference{
		from: from,
		to: gatewayapi.ReferencePolicyTo{
			Kind:  *to.Kind,
			Group: *to.Group,
			Name:  &to.Name,
		},
		toNamespace: ns,
	}
}

func PolicyReferenceSecret(from gatewayapi.ReferencePolicyFrom, to gatewayapi.SecretObjectReference) PolicyReference {
	ns := from.Namespace
	if to.Namespace != nil {
		ns = *to.Namespace
	}
	return PolicyReference{
		from: from,
		to: gatewayapi.ReferencePolicyTo{
			Kind:  *to.Kind,
			Group: *to.Group,
			Name:  &to.Name,
		},
		toNamespace: ns,
	}
}

// IsReferencePermitted returns whether the given reference is permitted with respect
// to ReferencePolicies.
func IsReferencePermitted(
	ctx context.Context,
	client kube_client.Client,
	reference PolicyReference,
) (bool, error) {
	if reference.from.Namespace == reference.toNamespace {
		return true, nil
	}

	policies := &gatewayapi.ReferencePolicyList{}
	if err := client.List(ctx, policies, kube_client.InNamespace(reference.toNamespace)); err != nil {
		return false, errors.Wrap(err, "failed to list ReferencePolicies")
	}

	for _, policy := range policies.Items {
		if !someFromMatches(reference.from, policy.Spec.From) {
			continue
		}

		if someToMatches(reference.to, policy.Spec.To) {
			return true, nil
		}
	}

	return false, nil
}

func someFromMatches(from gatewayapi.ReferencePolicyFrom, permitted []gatewayapi.ReferencePolicyFrom) bool {
	for _, permittedFrom := range permitted {
		if reflect.DeepEqual(permittedFrom, from) {
			return true
		}
	}
	return false
}

func someToMatches(to gatewayapi.ReferencePolicyTo, permitted []gatewayapi.ReferencePolicyTo) bool {
	for _, permittedTo := range permitted {
		if permittedTo.Group == to.Group &&
			permittedTo.Kind == to.Kind &&
			(permittedTo.Name == nil || *permittedTo.Name == "" || *permittedTo.Name == *to.Name) {
			return true
		}
	}
	return false
}
