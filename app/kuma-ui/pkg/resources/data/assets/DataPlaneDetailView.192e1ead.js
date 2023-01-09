import{d as R,s as _,e as U,o as e,i as a,u as m,c as B,m as fe,b as n,K as ve,t as h,G as H,h as de,w as r,n as z,cm as te,j as s,a as y,F as T,M as Te,cn as ne,A as M,D as ae,E as se,L as De,S as Be,r as I,f as $,k as K,cA as we,cz as Ae,cB as be,y as Pe,cI as Ce,cC as Ee,cD as ke,cJ as Oe,cE as Qe,cw as Ge,N as Ie,z as ze,cl as Ue,q as Se}from"./index.7a1b9f3b.js";import{j as ie}from"./index.58caa11d.js";import{_ as Me}from"./CodeBlock.vue_vue_type_style_index_0_lang.9bb3d75c.js";import{T as ee}from"./TagList.84f5f0a1.js";import{_ as ye}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.9d4cddf8.js";import{E as me}from"./ErrorBlock.471a1209.js";import{_ as he}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.4715809d.js";import{_ as Re,E as Z}from"./EnvoyData.7f1e22a2.js";import{_ as le}from"./LabelList.vue_vue_type_style_index_0_lang.2f98ab4d.js";import{S as Le}from"./StatusBadge.3c5db700.js";import{T as xe}from"./TabsWidget.c3964153.js";import{_ as Ye}from"./YamlView.vue_vue_type_script_setup_true_lang.6cc595be.js";import{a as Ne,S as He}from"./SubscriptionHeader.00f9ecee.js";import{W as qe}from"./WarningsWidget.074ddfaf.js";import"./_commonjsHelpers.f037b798.js";const Fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAVFBMVEXa2tra2tra2tra2tra2tra2tr////a2toAfd6izPLvzPnRfvDYteSKr86zas0Aar4AhODY6vr3+Prx8v2Kv+9aqOk3muUOj+N5t+211vXhqfW01fXvn55GAAAABnRSTlMC9s/Hbhsvz/I3AAABVklEQVRo3u3b3Y6CMBCG4SJYhnV/KD+K7v3f57bN7AFJTcDUmZB+74lH5EmMA5hmjK+pq1awqm5M6HxqxTudPSzssmxM06rUmDp8DFawIYi1qYRdlisTeCtcMAGnAgwYMGDAgJ8GGPDB4B8frepnl9cZH5d1374E7GmX1WVuA0xzTvixA+5zwpc0/OXrVgU5N/yx6tMHGDBgwIABvxmeiBZhmF3fPMjDFLuOSjDdnBJMvVOAb1G+y8PjlUKdOGyHOcpLJniiDfEVC/FYZYA3unxFx2OVAd7sTjZ073msRGB2Yy7KvcsC2z05Hitx2P6PVTEwf9W/h/5xvTBOB76ByN8ydzRRzofELln1schjVNCrTxyjsl5vtV7ol7L+tAEGDLhMWOAw5ADHPxIHXmpHfAWepgJOBBgwYMCAAT8NMGDAgJOw2hKO2tqR2qKV1mqZ3jKd2vrgH/W3idgykdWgAAAAAElFTkSuQmCC",je="data:image/png;base64,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",Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEj0lEQVRoBe1aS28TVxT+7ngydhwnPGISTBKHEB6iUtOWHTvWqCtKqQhISC2vBbCpRDf9BUgsgAWbdlGppWqlSl1UXfMLCmXRqgXUxmCclOCWxI4Tv4Zz7s00BntmLh4rTCSfxJ4755458333fHfuTTQCZFOHTo+ijCs2cAi2nWJfaE2InABuw8Lle7e/eCwYvL2CXwF7a2hBtwQm8iKKdwwe+Y0HnhnRgBN2Q8qmJcPwOxm7EXrNe40jzVfDq38j9HUJvOkqdSvQrUDAEeiIhGaPH8bsyfe1oWQuTuPxhePa8V6BplenTl85tQ2l9A7YMUsnHMsTIyjtm9CK1QkKXIHC3nEI2l3RgqhzPzw/sB/g+A5ZYAKlPTsVFMnCH1Xx3f26XP2TUUQgAuXhJKr9fQqQRgVYPpUtA7IANvQq5sciEIHi7jHKb5OE9DQh5SOvoGs6pKNABJYn06tAaDQ1SLB82DoFnnO1TaA8NIhqIo7IQkFLDI58zPx/WvEMTsfaJlAiPbPF789oiWHxPTX6A3f/kPGdmQEBKlCaGJUE+oiANJ9JvEAEeOL23/ldHvVmjUrt9d1WBSrJLaiRfMzCEqzcU8pPcDzmAMunSk8f699FxP7KqngvVK/R19ZKvDy+Qy5cvQ8z8la2xuhzII8+m9foF9+axOz0YRm3/dbP6PvtoWy7fZm1iIV6tAd1i4+W3BLUrR7Y1Jb+1T7eKqg41ccajj94JPPy4DskaoleZM8cRYmeUGyO1hm0Q6DRz5XMnj2KpV1jTcSYyOTnNzjc1Uw1eCwBpQIFhNWqfvhKCZDPZbCQoGK5eVhz82uJKYjBPDp/DFwhBswZnEcmT3YlnzV/jRbBzKVplFNDTeDXEnu3TLNeBpb44x3o20vksh8fQYU2d1GaF+nr3yBCc6SVOaQyl05gxYm/9rWMf1VCra5v9LU1BxoT/N+mCpSHB2HNzmP05neu4J14ltZKKqnIroLnPta8n2ycHHzsHAGqgPXPM4x8+QOBLzXeo6ntSMsiGaYbwDcFajg6QiA6k0M9EQM/NSJFb/CMqe/PDD0QTKrU976V8uMg3j74ifOg8IsNZX9bC1mYmHQJvOlqBJ7EcUPgw8EELFq5vn1WQKHmPaX6IwIXhzdJ3jfmnmPRJ95vgAJJqJfAf0Tgx3pMpGn7cW5oExIE0M0Y/GepzdgT65EfbrPvVZuKW7g6vlV+uO1lYurgWTtmGHIEo7QYxYhSlM6jlJf9UT6nNvtiBFj5+SjUNeRbrNWpLTBmRSiOc6h8bjfOlquya8TyEQDdN1+t4dOZvFsqXsjU3ob/rqVfMv5iGaijbdORO2ihUlshiqdu5RZ4Uqnix3wRBsWcSiawj/8/xAEqGSd8ye4vV8DS4e3EheEBWYmXAl7zJJTrAMvm1LaEpPLV0wLu8V7NxUJJwAVrS3egSdwy4zo7uwTWecCbbtetQNOQrLPDoOd1bp3v2bnbEXZaN+nFiQ1qjJ3WfFymZdN9rQ4tOcJM2CNzf/+ysH33gVuiLlIkpyTh7Q8tZgbGr9sI8RO9qfIBv27zAiEVYZQrGIvuAAAAAElFTkSuQmCC",Je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAFt0lEQVRoBe1aa2xTVRz/3d7bBytdXddtbIN1sId7IG4yHhGICxluMohOAkGChhiMih/8IiSERImRaBD9YGIkGg0xypwo8YkajGyikxqemziyDbbhBoyN7kHLStfb6zm3u01v1zvaritrwn9Zz+Pec87v//j9z2lzGBBZYHpyttMt7IWAcgFCOu2brsKAuQoG9TqO2dFkO9zNjIE/JwiCabqCDoaLYRgbUeJB1qgu2E/ALw720jTvm8ELSOdo2EhAy6vKpKpiWf/zSdmzUMbIBgQ0IpnPN4ZgV033mA/QV9ak2Jk8wxOCrDfOGqo4wzsObtwrwMWahD4CjtlysuvHvQfukXgcq2LcEfchxPkbTIlQgcTzHzOV9VDwxL0HYkLiIn0qNqQVoyDBjMN9/+Kr3hZ4yF80ZEoVeNiYRYAXYb4+TcQ6KnigZlS44OjD25cb0eUcnLQOUVeAAlxlysH61PmYo0sUAbbeuoG63vM4MXwZm2YtwMa0B+Ahynx+rRm115rAkyNxpMI8t/6NoKMjIW4Cq8YnhY/DrNaLeKzDPfiytxnn7L0yfLkzkvCKZQVo2T4ygH1df5DSJnsnsKFE6KiSOJHViOA7SGhsbfkOuy7+Og48BUZBv3Thexy4ehYW4qX3C9ZgS3pJIOaQ2lELoXlJGWB5Hh/kVOH4UBf6k41ovdGNo5dOTQjEojNiZ/Yjojd2tB/F6ZtXJnw/8OGkPVCanovd5c9g76qtMOuN4vxqqGBzDuP5smq8Vv400vT3Ba7ra3c5h3Bs4JLY1rOybcn3zkSVSSmwMCMPu1ZsQq4pEz+2/Y2OQW+scwyL2uZj2Nd4CFnGVLxT+SJW5yl/7XZ5vClVzYSvgGyEElGCEZr8vAGDJkE0zusNn5Jw6YFWxYptTuW1y4nuFvxzvRPPllaS/ypkJprx0akj4wzqJhmJCsswsmeh4AnbA2pwWKbOx079Wrg9vLigATps1C0FJ3jtwZFUKondNYL3rN+IihSnZEvdspIXvPPQFByuyDwQzNKBE27Xr4ZJNRNnRzt9CrgYD7JYM+7nvL+JccQ7geLi3ZA8E/iMbnBU/BWn7VDwhK1ykkqPQ04rPnM2+hTwEAXedfyEi+7rsPOjyCb5vTI5h2LwCfUWq2BhXvBuRSzhTrgStgI8sZa080khxJHs4Sb76ZBwC3s6GnDT7cL2rOV4M6cCKWM8cXvcYMc44g/SwGlRYpgldmnGuOP//E51xe/ESu7jySGMI2mSytBth1hWzC1Fu60HDpcTS/hivNrWgOq0HKwx5+Pjghp8eOUkTl5pQx7JVpKka2diXUoRHkvOF8lPw6hjRPlspERodmHxyt3SpP5lZ3vwDaVcU4hOTx+6+BsYdNpBSVqZW4aKeQ/hmt2GW3YnEqDFFwNn0ESOEKWGdPFsZOQZ7G/5DSZWi22zF+HlOUtRSE6pThJa9IS6p+P3CY8T2bkZ/vB89bB34s26ZSjiMvDt7dOwjl4UJ0qbacK2RWtRnGLBn/+dx4HTv8AljIpK9Qz2YzGXhJqUAtBYl4h63eXA1wT4kf42jHhGfYDCrYStAM3/yzX5qNaUoJPvQ91tKzQkqCxsMpKyTNi8oIIA5UnGYaHjNOi+2Ye3jtfBTFLsC5llUBEiU+D1to5JnUIlRcNWQBqYTFLpBt0SzGVTCHwWAx4H6px/waZ1YkvJo9CrdWR3tpLYb5WGTEkpU0CJKEqEpohKOQv5ZHDO3UXoLeWn6GANBY9sI4tk2TME+N0UmQfuJpBI1w57I4t0oakaF/cKKO7EoVoskOBKxJPmC/d9aZxSGfceuEdiJdfGqj/uQ0i2kd2JgNSq0SZhJPP5j1GJdw9i5e8or0OxM/mJNQfJVYOnojx3TKYj9yVqVfTWB704EZMVo7jI2GWPHWzvSMtwpr7oIL04QVxiJmsYorhO1KcSw4ZhfiCGX0ev2/wPquz9nGykU2YAAAAASUVORK5CYII=",_e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB5CAYAAADyOOV3AAAFOklEQVR4Ae2dP2tUQRTFp7S385MofgRFiGBhKr9GuqBiI9iktwosCAnRLo0g8Q+ojSaNBomumESTIAqSLiPTTc4k7+bmztudu3sCAztv7p137/nNebtuREMIIXz9eXBluLO/NNzZe8sxCRrsL23tHlxObMP33b3ZzeHO0edv25FjcjRITBPbsPXj12+CnRywOcvENtC9kwk3gU5sQ048vf7775DDsQbIswAc+eNaAQJ2jU8unoBljVxHELBrfHLxBCxr5DqCgF3jk4snYFkj1xEE7BqfXDwByxq5jiBg1/jk4glY1sh1BAG7xicXT8CyRq4jCNg1Prl4ApY1ch1BwK7xycUTsKyR6wgCdo1PLp6AZY1cRxCwa3xy8QQsa+Q6goBd45OLJ2BZI9cRBOwan1w8AcsauY4gYNf45OIJWNbIdQQBu8YnF0/AskauIwjYNT65eAKWNXIdUQD+c2sm5iPemY2mIcnD/bsVMuqTs0yvQ7wQYtXRXb79XtxfpSEB4wH3foCgHwIGQSS+5qeddAOsxzgPOwsLMR9xsBhNQ2qA+3crZNQnZ5le89/o6Jbb3WrxKRovuOuIBR9TAHnSwcfk8T8hYP8MOzsg4E55/C8SsH+GnR0QcKc8/hcJ2D/Dzg4IuFMe/4sE7J9hZwcE3CmP/8WpAzz7cCnm48bdQaw58r3T63H/TB3gcG0+jnIQ8IgVGCXcdK9x/9DBPTuagEesADr43uBFrDlwf217+B5unV+fX4z5mPjfJiGA95vbsebA/bWAMb/6HJ/Z2gJbj0fBasJNe+H+Wj0wv/qcgG2ORiAErFXAGI8AWnfwo5U30TLmHq/GfPA92PiejAdIex4x33oAl9c+xnwQMAFrz2Rb8bUdgg7D/bXdYz7ur53n7k2v6WA6WHsm24qv7RB0FO6v7R7zcX/tnA42OhYFR0AErFXAGI8AEJB1jvtry8V8az2Fg/PvLdNr63ehmK9tuHZ8bQERAO6vrR/zcX/tvACMN6g91zZcOx770QomxeP+2voxX7qftE7A0/YejCeo9lx7omvHYz+SA7TruL+2fszX3h/jCwfn31um15bvQVMuFqxtGN/DrXOsBwWxznF/bb+Yb62nAIwXrDfAgq0N437WubU/zMd6rP3i/to58gx4QbshxtduGPezzrFe6xzrIWBBARSs9twKFPOxPqG9YhnzcX/tHA3bvIOtnwkwXyuYFI+ACoLCBcyX7ietuwMsNTTudQQk8CyWMd/aDwFP25+Dkbj1BOGJLI6scAHzrfX0nY/1Cu0Vy5hvrRd5Nv8ebG2473wEVBAULmC+tV4C5iO6rb9Gaj3RfeejAwXDFsuYb62XDqaD6WCNi9CBhUWFC5ivufdJsXQwHUwHn+SM066hAwXDFsuYf9p9znqdDqaD6zpY+/vc2if6rCf/vHFY77j7HbmDUQDt/LzCjypP248Ub62bgHt+REsApXUCrgzIKqgETLturad3B+PvX61za8N951v7w3xrvb0DthbIfNuHXAJu7BFf+0ATMAHbHhG1TyT30/Ggg+lg3Ymhw9rSiw6mg9s6kXxC6HjQwXSw7sTQYW3pRQfTwW2dSD4hdDzoYDpYd2LosLb0ooPp4LZOJJ8QOh50MB2sOzF0WFt60cF0cFsnkk8IHQ86mA7WnRg6rC296OBpd/Dqu0+Rw68GhYNXXq4f4UXOj//fQ171SGzD8tr60GsDrFs6iOvDcPP+k5mnrzYOKZYklq/1xDSxDWHmwcWr84NLz15v3H7+4csch38NEsvENLH9DwLs1co+Fv2iAAAAAElFTkSuQmCC",We=""+new URL("Retry.8b2ec896.png",import.meta.url).href,Ve=""+new URL("Timeout.dcabf0f7.jpg",import.meta.url).href,ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAABYklEQVRoBe2av0oDQRDGZxbRxhfwDRI0NhKtRAhWPkM6Ex9KTOczWElArBRsAuEeIS+QRpvJfJdcqkWRLWYH5or7s7N797v59j4Odph2m4hw//xywsT3JHQqJMddrIajcq2Jaalcs2bx+cTMAi7Grn9xfSI/388kMsJ19RvznA+Pxs3X+yoh867gkV1NNJjBzr3BcKpT5rH6rOcAmR5SO+dzQQdtYE/4YB2w5hGVPdXmNnnSfCvYUz7kpzVewFor9woc/DeDb/OXX4fcjO728b/67jsWnLhXgHtnw/anqCAJpkPdKxAvYDp/9OHhQtYKhAtZKxAuZK1AuJC1AuFC1gqEC1krEC5krUC4kLUC4ULWCoQLWSsQLmStQLhQKFCYAaxSrgvvYTYc7AnL92YEpQ9WdqxSzkrvYzUe7Lwt8rh6dVMn0WVL6yWaxcdtQtUHCidIG7pY9cddsUfL3sF6LbfZAN5wf/+tIkpkAAAAAElFTkSuQmCC",re="data:image/png;base64,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",Xe="data:image/png;base64,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",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD4/042AAAEs0lEQVRoBe1azWtUVxQ/781HkslHzQwpDfkQUUpdaHZtaUtTuhACYtC/wI22FHd+bMSlFNSdIhjcddFNKW0pZlfS0BayEdSFqAjRJMbGfBgTZ+JM8p7nd27ezMvkvsy7yUucAS+898479+P8zj3n3nvembGIy8xMttOhwiVy6RuX3HbwqrVYZE2SRUM2Jc5lMqlxaxX8Hdd109UKWofLsqxZVqLHxszXGngoBMzAbsNtdBrWBI+x29Xu8xtNJLDbGzWohbr3CrxrK8W3A4BtW9SYqqdEQg1fKCzT6+wSOY4bubjIFQD41g+ayLZL3hmrS1KSlZmbX4xciZKUiOYGMw/wfz/M0ldXnsgFGjzURV2sfRceF+3KhwPxCYdDQslhml+ImVq54KKlVwv6v7Pd9GFzXIA/f7Ui/T5qidE/Z3bT1MIyfXn5qfRBhb9/ptGmvv11dOLzFCVi0i3ULe560mVEBr/6lN4igW/+Nr5hRU+u8/TlfdlXqychr9QO8tQUTGcd+ul2TmT98EVK31nDtaamX1aWqukYxGpuaqB69nm4zfk/Xkizi0faqPfjFC29ydPCIoPUlH9H83T61gKlUzbdOt6qaaFnRa6AbhFDtOM4FRfxpzdmxNgj32X0aDXcyHchbJXYbTa1jTIa0502cgXUbLuBrqKZxCJrhffEgP2i2Kac2BYFyoWEfmc0pguyqhRwePusaQu4cW9bDW0z2hYLbDYWcmOmDkTRK6DbRsPGQuJC4SdfWm5bLDQ4sURdv07KBbpSLDT8f55c9oc0hxQmxciFCg7RtUdZ+v1ZnqbfOBIz+WMn0HePdhFCtpMjczSe4w6r9NixdprnffLA4CxzAlwlZlF/d530CXszUuDq4yzdfLqkgh+eKMDwLzuhA+ImAEIc5LCfl3YaNFajtNXZ1N+epFN7w8dBGNNIgd+m8gJgoKeFvs4k0H9daeZEDcrAZ61iBY/GcxfX3T8UPkxAn0rFKBb6ZHhW3OZBbzAI3SIGiDCxUCWwunojCzichPHZXzeefHFtOhbSjrgx00gBHDRhCgK6oLA5TH+TNkYKYAFWWzFSgOSory4VjBRQFgjnRjulptGxJ8FWiA9u7ET4tEy3NssFGrytlO9fLNLMynoXNlOAW1daB942iu/iGKdScIFWuaLNK/FnNk/fTr4kPP3FSIG2es7Gs9P99brgH2MN7eWFBl/lqOv+hFygK8VCawYJeIEFYAm/NYwOsh/ncnR9PldMo3hhgHpCqkWjB7uoPRkX4OMFlRfq5ETP2P4Omswv0557Y3IYKoywiAolpDe/+tNQHi1pm7KpznDcdDHdaBZKnNnVwPGMS78s5mlqhUMGBDUiX7mGCFKkwld+R/PVSwDzrQSf3ZPfMaQKRvCCrBEz+Mm/jaHLumJkgXW9NQwvLwS3OTmByJPjoo409bU0bJgX0gy1htX5RI0F5uFUUmYfVjDaRteMGPCCLDQSuQA81tJRbIVYCHVbKZ7bQAGvRK7AlvJCHirN0z/r/urIXcg/+E7QZWt7J0RGK+O9AtHOp/loHKHwfw9qtAC7zefDUI3i5wOOhmr/zx74ywr+9cE5nZ9rwZ2AEViBGdjfAhPs4mowdpbkAAAAAElFTkSuQmCC",Ze=""+new URL("VirtualOutbound.3bb05b70.png",import.meta.url).href,$e={class:"policy-type-tag"},et=["src"],tt=R({__name:"PolicyTypeTag",props:{policyType:{type:String,required:!0}},setup(l){const o=l,O=_(),D={CircuitBreaker:{iconUrl:Fe},FaultInjection:{iconUrl:je},HealthCheck:{iconUrl:Ke},MeshAccessLog:{iconUrl:ce},MeshGateway:{iconUrl:null},MeshGatewayRoute:{iconUrl:null},MeshTrace:{iconUrl:ue},MeshTrafficPermission:{iconUrl:re},ProxyTemplate:{iconUrl:Je},RateLimit:{iconUrl:_e},Retry:{iconUrl:We},Timeout:{iconUrl:Ve},TrafficLog:{iconUrl:ce},TrafficPermission:{iconUrl:re},TrafficRoute:{iconUrl:Xe},TrafficTrace:{iconUrl:ue},VirtualOutbound:{iconUrl:Ze}},v=U(()=>{const d=O.state.policies.map(p=>{var c;const w=(c=D[p.name])!=null?c:{iconUrl:null};return[p.name,w]});return Object.fromEntries(d)}),g=U(()=>v.value[o.policyType]);return(d,p)=>(e(),a("span",$e,[m(g).iconUrl!==null?(e(),a("img",{key:0,class:"policy-type-tag-icon",src:m(g).iconUrl,alt:""},null,8,et)):(e(),B(m(fe),{key:1,icon:"brain",size:"24"})),n(),ve(d.$slots,"default",{},()=>[n(h(o.policyType),1)],!0)]))}});const nt=H(tt,[["__scopeId","data-v-3abf1379"]]),at={class:"policy-type-heading"},st={class:"policy-list"},ot={key:0,class:"origin-list"},At=R({__name:"PolicyTypeEntryList",props:{id:{type:String,required:!1,default:"entry-list"},policyTypeEntries:{type:Object,required:!0}},setup(l){const o=l,O=[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origins",key:"origins"}];function D({headerKey:v}){return{class:`cell-${v}`}}return(v,g)=>{const d=de("router-link");return e(),B(ne,{"initially-open":[],"multiple-open":""},{default:r(()=>[(e(!0),a(T,null,z(o.policyTypeEntries,(p,w)=>(e(),B(te,{key:w},{"accordion-header":r(()=>[s("h3",at,[y(nt,{"policy-type":p.type},{default:r(()=>[n(h(p.type)+" ("+h(p.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":r(()=>[s("div",st,[y(m(Te),{class:"policy-type-table",fetcher:()=>({data:p.connections,total:p.connections.length}),headers:O,"cell-attrs":D,"disable-pagination":"","is-clickable":""},{sourceTags:r(({rowValue:c})=>[Array.isArray(c)&&c.length>0?(e(),B(ee,{key:0,class:"tag-list",tags:c},null,8,["tags"])):(e(),a(T,{key:1},[n(`
                \u2014
              `)],64))]),destinationTags:r(({rowValue:c})=>[Array.isArray(c)&&c.length>0?(e(),B(ee,{key:0,class:"tag-list",tags:c},null,8,["tags"])):(e(),a(T,{key:1},[n(`
                \u2014
              `)],64))]),name:r(({rowValue:c})=>[c!==null?(e(),a(T,{key:0},[n(h(c),1)],64)):(e(),a(T,{key:1},[n(`
                \u2014
              `)],64))]),origins:r(({rowValue:c})=>[c.length>0?(e(),a("div",ot,[(e(!0),a(T,null,z(c,(b,L)=>(e(),B(d,{key:`${w}-${L}`,to:b.route},{default:r(()=>[n(h(b.name),1)]),_:2},1032,["to"]))),128))])):(e(),a(T,{key:1},[n(`
                \u2014
              `)],64))]),config:r(({rowValue:c,rowKey:b})=>[c!==null?(e(),B(Me,{key:0,id:`${o.id}-${w}-${b}-code-block`,code:c,language:"yaml","show-copy-button":!1},null,8,["id","code"])):(e(),a(T,{key:1},[n(`
                \u2014
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}});const pe=H(At,[["__scopeId","data-v-2f69c024"]]),ge=l=>(ae("data-v-2179bbec"),l=l(),se(),l),it=ge(()=>s("h2",{class:"visually-hidden"},`
    Policies
  `,-1)),lt={key:0,class:"mt-2"},ct=ge(()=>s("h2",null,"Rules",-1)),rt=R({__name:"SidecarDataplanePolicyList",props:{dppName:{type:String,required:!0},policyTypeEntries:{type:Object,required:!0},policyTypeEntriesFromRules:{type:Array,required:!0}},setup(l){const o=l;return(O,D)=>(e(),a(T,null,[it,n(),y(pe,{id:"policies","policy-type-entries":o.policyTypeEntries},null,8,["policy-type-entries"]),n(),l.policyTypeEntriesFromRules.length>0?(e(),a("div",lt,[ct,n(),y(pe,{id:"rules","policy-type-entries":o.policyTypeEntriesFromRules},null,8,["policy-type-entries"])])):M("",!0)],64))}});const ut=H(rt,[["__scopeId","data-v-2179bbec"]]),q=l=>(ae("data-v-ee401b9a"),l=l(),se(),l),pt={class:"mesh-gateway-policy-list"},dt=q(()=>s("h3",null,"Gateway policies",-1)),yt={key:0,class:"policy-list"},mt=q(()=>s("h3",{class:"mt-6"},`
      Listeners
    `,-1)),ht=q(()=>s("b",null,"Host",-1)),gt=q(()=>s("h4",{class:"mt-2"},`
              Routes
            `,-1)),ft={class:"dataplane-policy-header"},vt=q(()=>s("b",null,"Route",-1)),Tt=q(()=>s("b",null,"Service",-1)),Dt={key:0,class:"badge-list"},Bt={class:"policy-list mt-1"},wt=R({__name:"MeshGatewayDataplanePolicyList",props:{meshGatewayDataplane:{type:Object,required:!0},meshGatewayListenerEntries:{type:Array,required:!0},meshGatewayRoutePolicies:{type:Array,required:!0}},setup(l){const o=l;return(O,D)=>{const v=de("router-link");return e(),a("div",pt,[dt,n(),l.meshGatewayRoutePolicies.length>0?(e(),a("ul",yt,[(e(!0),a(T,null,z(l.meshGatewayRoutePolicies,(g,d)=>(e(),a("li",{key:d},[s("span",null,h(g.type),1),n(`:

        `),y(v,{to:g.route},{default:r(()=>[n(h(g.name),1)]),_:2},1032,["to"])]))),128))])):M("",!0),n(),mt,n(),s("div",null,[(e(!0),a(T,null,z(o.meshGatewayListenerEntries,(g,d)=>(e(),a("div",{key:d},[s("div",null,[s("div",null,[ht,n(": "+h(g.hostName)+":"+h(g.port)+" ("+h(g.protocol)+`)
          `,1)]),n(),g.routeEntries.length>0?(e(),a(T,{key:0},[gt,n(),y(ne,{"initially-open":[],"multiple-open":""},{default:r(()=>[(e(!0),a(T,null,z(g.routeEntries,(p,w)=>(e(),B(te,{key:w},De({"accordion-header":r(()=>[s("div",ft,[s("div",null,[s("div",null,[vt,n(": "),y(v,{to:p.route},{default:r(()=>[n(h(p.routeName),1)]),_:2},1032,["to"])]),n(),s("div",null,[Tt,n(": "+h(p.service),1)])]),n(),p.policies.length>0?(e(),a("div",Dt,[(e(!0),a(T,null,z(p.policies,(c,b)=>(e(),B(m(Be),{key:`${d}-${b}`},{default:r(()=>[n(h(c.type),1)]),_:2},1024))),128))])):M("",!0)])]),_:2},[p.policies.length>0?{name:"accordion-content",fn:r(()=>[s("ul",Bt,[(e(!0),a(T,null,z(p.policies,(c,b)=>(e(),a("li",{key:`${d}-${b}`},[n(h(c.type)+`:

                      `,1),y(v,{to:c.route},{default:r(()=>[n(h(c.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):M("",!0)])]))),128))])])}}});const bt=H(wt,[["__scopeId","data-v-ee401b9a"]]),Pt={key:2,class:"policies-list"},Ct={key:3,class:"policies-list"},Et=R({__name:"DataplanePolicies",props:{dataPlane:{type:Object,required:!0}},setup(l){const o=l,O=_(),D=I(null),v=I([]),g=I([]),d=I([]),p=I([]),w=I(!0),c=I(null);$(()=>o.dataPlane.name,function(){b()}),b();async function b(){var t,A;c.value=null,w.value=!0,v.value=[],g.value=[],d.value=[],p.value=[];try{if(((A=(t=o.dataPlane.networking.gateway)==null?void 0:t.type)==null?void 0:A.toUpperCase())==="BUILTIN")D.value=await K.getMeshGatewayDataplane({mesh:o.dataPlane.mesh,name:o.dataPlane.name}),d.value=L(D.value),p.value=J(D.value.policies);else{const{items:i}=await K.getSidecarDataplanePolicies({mesh:o.dataPlane.mesh,name:o.dataPlane.name});v.value=V(i!=null?i:[]);const{items:f}=await K.getDataplaneRules({mesh:o.dataPlane.mesh,name:o.dataPlane.name});g.value=C(f!=null?f:[])}}catch(u){u instanceof Error?c.value=u:console.error(u)}finally{w.value=!1}}function L(t){const A=[];for(const u of t.listeners)for(const i of u.hosts)for(const f of i.routes){const P=[];for(const G of f.destinations){const S=J(G.policies),k={routeName:f.route,route:{name:"meshgatewayroutes",params:{mesh:t.gateway.mesh},query:{ns:f.route}},service:G.tags["kuma.io/service"],policies:S};P.push(k)}A.push({protocol:u.protocol,port:u.port,hostName:i.hostName,routeEntries:P})}return A}function J(t){if(t===void 0)return[];const A=[];for(const u of Object.values(t)){const i=O.state.policiesByType[u.type];A.push({type:u.type,name:u.name,route:{name:i.path,params:{mesh:u.mesh},query:{ns:u.name}}})}return A}function V(t){const A=new Map;for(const i of t){const{type:f,service:P}=i,G=typeof P=="string"&&P!==""?[{label:"kuma.io/service",value:P}]:null,S=f==="inbound"||f==="outbound"?i.name:null;for(const[k,x]of Object.entries(i.matchedPolicies)){A.has(k)||A.set(k,{type:k,connections:[]});const Y=A.get(k),N=O.state.policiesByType[k];for(const oe of x){const Q=X(oe,N,i,G,S);Y.connections.push(...Q)}}}const u=Array.from(A.values());return u.sort((i,f)=>i.type.localeCompare(f.type)),u}function X(t,A,u,i,f){const P=t.conf&&Object.keys(t.conf).length>0?ie(JSON.stringify(t.conf,null,2)):null,S=[{name:t.name,route:{name:A.path,query:{ns:t.name},params:{mesh:t.mesh}}}],k=[];if(u.type==="inbound"&&Array.isArray(t.sources))for(const{match:x}of t.sources){const N={sourceTags:[{label:"kuma.io/service",value:x["kuma.io/service"]}],destinationTags:i,name:f,config:P,origins:S};k.push(N)}else{const Y={sourceTags:null,destinationTags:i,name:f,config:P,origins:S};k.push(Y)}return k}function C(t){const A=new Map;for(const i of t){A.has(i.policyType)||A.set(i.policyType,{type:i.policyType,connections:[]});const f=A.get(i.policyType),P=O.state.policiesByType[i.policyType],G=E(i,P);f.connections.push(...G)}const u=Array.from(A.values());return u.sort((i,f)=>i.type.localeCompare(f.type)),u}function E(t,A){const{type:u,service:i,subset:f,conf:P}=t,G=f?Object.entries(f):[];let S,k;if(u==="clientSubset"){const Q=G.length>0?G:[["kuma.io/service","*"]];S=Q.length>0?Q.map(([F,j])=>({label:F,value:j})):null}else S=null;if(typeof i=="string"&&i!==""){const Q=[["kuma.io/service",i]];k=Q.length>0?Q.map(([F,j])=>({label:F,value:j})):null}else if(u==="destinationSubset"){const Q=G.length>0?G:[["kuma.io/service","*"]];k=Q.length>0?Q.map(([F,j])=>({label:F,value:j})):null}else k=null;const x=u==="clientSubset"||u==="destinationSubset"||i?t.name:null,Y=P&&Object.keys(P).length>0?ie(JSON.stringify(P,null,2)):null,N=[];for(const Q of t.origins)N.push({name:Q.name,route:{name:A.path,query:{ns:Q.name},params:{mesh:Q.mesh}}});return[{sourceTags:S,destinationTags:k,name:x,config:Y,origins:N}]}return(t,A)=>w.value?(e(),B(he,{key:0})):c.value!==null?(e(),B(me,{key:1,error:c.value},null,8,["error"])):v.value.length>0?(e(),a("div",Pt,[y(ut,{"dpp-name":l.dataPlane.name,"policy-type-entries":v.value,"policy-type-entries-from-rules":g.value},null,8,["dpp-name","policy-type-entries","policy-type-entries-from-rules"])])):d.value.length>0&&D.value!==null?(e(),a("div",Ct,[y(bt,{"mesh-gateway-dataplane":D.value,"mesh-gateway-listener-entries":d.value,"mesh-gateway-route-policies":p.value},null,8,["mesh-gateway-dataplane","mesh-gateway-listener-entries","mesh-gateway-route-policies"])])):(e(),B(ye,{key:4}))}});const kt=H(Et,[["__scopeId","data-v-91c758e1"]]),W=l=>(ae("data-v-fb28ea97"),l=l(),se(),l),Ot={class:"entity-heading"},Qt={key:0},Gt=W(()=>s("h4",null,"Status",-1)),It={key:1},zt=W(()=>s("h4",null,"Reason",-1)),Ut={key:0},St=W(()=>s("h4",null,"Tags",-1)),Mt={key:1},Rt=W(()=>s("h4",null,"Versions",-1)),Lt={class:"config-wrapper"},xt={key:0},Yt=["href"],Nt=R({__name:"DataPlaneDetails",props:{dataPlane:{type:Object,required:!0},dataPlaneOverview:{type:Object,required:!0}},setup(l){const o=l,O=_(),D=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"DPP Insights"},{hash:"#dpp-policies",title:"Policies"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"},{hash:"#mtls",title:"Certificate Insights"},{hash:"#warnings",title:"Warnings"}],v=I([]),g=U(()=>{const{type:C,name:E,mesh:t}=o.dataPlane;return{type:C,name:E,mesh:t}}),d=U(()=>we(o.dataPlane,o.dataPlaneOverview.dataplaneInsight)),p=U(()=>Ae(o.dataPlane)),w=U(()=>be(o.dataPlaneOverview.dataplaneInsight)),c=U(()=>Pe(o.dataPlane)),b=U(()=>Ce(o.dataPlaneOverview)),L=U(()=>{var E,t;const C=Array.from((t=(E=o.dataPlaneOverview.dataplaneInsight)==null?void 0:E.subscriptions)!=null?t:[]);return C.reverse(),C}),J=U(()=>{const C=O.getters["config/getKumaDocsVersion"];return C!==null?C:"latest"}),V=U(()=>v.value.length===0?D.filter(C=>C.hash!=="#warnings"):D);function X(){var A,u;const C=(u=(A=o.dataPlaneOverview.dataplaneInsight)==null?void 0:A.subscriptions)!=null?u:[];if(C.length===0||!("version"in C[0]))return;const E=C[0].version;if(E&&E.kumaDp&&E.envoy){const i=Ee(E);i.kind!==ke&&i.kind!==Oe&&v.value.push(i)}O.getters["config/getMulticlusterStatus"]&&E&&Ae(o.dataPlane).find(P=>P.label===Qe)&&typeof E.kumaDp.kumaCpCompatible=="boolean"&&!E.kumaDp.kumaCpCompatible&&v.value.push({kind:Ge,payload:{kumaDp:E.kumaDp.version}})}return X(),(C,E)=>(e(),B(xe,{tabs:m(V),"initial-tab-override":"overview"},{tabHeader:r(()=>[s("h1",Ot,`
        DPP: `+h(l.dataPlane.name),1)]),overview:r(()=>[y(le,null,{default:r(()=>[s("div",null,[s("ul",null,[(e(!0),a(T,null,z(m(g),(t,A)=>(e(),a("li",{key:A},[s("h4",null,h(A),1),n(),s("div",null,h(t),1)]))),128)),n(),m(d).status?(e(),a("li",Qt,[Gt,n(),s("div",null,[y(Le,{status:m(d).status},null,8,["status"])])])):M("",!0),n(),m(d).reason.length>0?(e(),a("li",It,[zt,n(),s("div",null,[(e(!0),a(T,null,z(m(d).reason,(t,A)=>(e(),a("div",{key:A,class:"reason"},h(t),1))),128))])])):M("",!0)])]),n(),s("div",null,[s("ul",null,[m(p).length>0?(e(),a("li",Ut,[St,n(),y(ee,{tags:m(p)},null,8,["tags"])])):M("",!0),n(),m(w)?(e(),a("li",Mt,[Rt,n(),s("p",null,[(e(!0),a(T,null,z(m(w),(t,A)=>(e(),a("span",{key:A,class:"tag-cols"},[s("span",null,h(A)+`:
                  `,1),n(),s("span",null,h(t),1)]))),128))])])):M("",!0)])])]),_:1}),n(),s("div",Lt,[y(Ye,{id:"code-block-data-plane",content:m(c),"is-searchable":""},null,8,["content"])])]),insights:r(()=>[y(Re,{"is-empty":m(L).length===0},{default:r(()=>[y(m(Ie),{"border-variant":"noBorder"},{body:r(()=>[y(ne,{"initially-open":0},{default:r(()=>[(e(!0),a(T,null,z(m(L),(t,A)=>(e(),B(te,{key:A},{"accordion-header":r(()=>[y(Ne,{details:t},null,8,["details"])]),"accordion-content":r(()=>[y(He,{details:t,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["is-empty"])]),"dpp-policies":r(()=>[y(kt,{"data-plane":l.dataPlane},null,8,["data-plane"])]),"xds-configuration":r(()=>[y(Z,{"data-path":"xds",mesh:l.dataPlane.mesh,"dpp-name":l.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-stats":r(()=>[y(Z,{"data-path":"stats",mesh:l.dataPlane.mesh,"dpp-name":l.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),"envoy-clusters":r(()=>[y(Z,{"data-path":"clusters",mesh:l.dataPlane.mesh,"dpp-name":l.dataPlane.name,"query-key":"envoy-data-data-plane"},null,8,["mesh","dpp-name"])]),mtls:r(()=>[y(le,null,{default:r(()=>[m(b)!==null?(e(),a("ul",xt,[(e(!0),a(T,null,z(m(b),(t,A)=>(e(),a("li",{key:A},[s("h4",null,h(t.label),1),n(),s("p",null,h(t.value),1)]))),128))])):(e(),B(m(ze),{key:1,appearance:"danger"},{alertMessage:r(()=>[n(`
            This data plane proxy does not yet have mTLS configured \u2014
            `),s("a",{href:`https://kuma.io/docs/${m(J)}/policies/mutual-tls/`,class:"external-link",target:"_blank"},`
              Learn About Certificates in `+h(m(Ue)),9,Yt)]),_:1}))]),_:1})]),warnings:r(()=>[y(qe,{warnings:v.value},null,8,["warnings"])]),_:1},8,["tabs"]))}});const Ht=H(Nt,[["__scopeId","data-v-fb28ea97"]]),qt={class:"component-frame"},on=R({__name:"DataPlaneDetailView",setup(l){const o=Se(),O=_(),D=I(null),v=I(null),g=I(!0),d=I(null);async function p(){d.value=null,g.value=!0;const w=o.params.mesh,c=o.params.dataPlane;try{D.value=await K.getDataplaneFromMesh({mesh:w,name:c}),v.value=await K.getDataplaneOverviewFromMesh({mesh:w,name:c})}catch(b){D.value=null,b instanceof Error?d.value=b:console.error(b)}finally{g.value=!1}}return $(()=>o.params.mesh,function(){o.name==="data-plane-detail-view"&&p()}),$(()=>o.params.dataPlane,function(){o.name==="data-plane-detail-view"&&p()}),p(),O.dispatch("updatePageTitle",o.params.dataPlane),(w,c)=>(e(),a("div",qt,[g.value?(e(),B(he,{key:0})):d.value!==null?(e(),B(me,{key:1,error:d.value},null,8,["error"])):D.value===null||v.value===null?(e(),B(ye,{key:2})):(e(),B(Ht,{key:3,"data-plane":D.value,"data-plane-overview":v.value},null,8,["data-plane","data-plane-overview"]))]))}});export{on as default};