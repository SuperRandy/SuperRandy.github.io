import{ap as p,aq as h,ar as o,as as f,o as d,at as g,au as n,l as c,al as m}from"./vidstack-sKeoTFgw-3f-yAPJq.js";import{H as k}from"./vidstack-html-llY7hLDt.js";import"./app-o4WN8hHk.js";import"./vidstack-4jGm7oeB-6UU_n1Lb.js";class P{constructor(t,e){this.m=t,this.b=e,t.textTracks.onaddtrack=this.Wc.bind(this),d(this.cd.bind(this))}Wc(t){const e=t.track;if(!e||I(this.m,e))return;const i=new g({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[n.T]={track:e},i[n.M]=2,i[n.te]=!0;let s=0;const u=l=>{if(e.cues)for(let a=s;a<e.cues.length;a++)i.addCue(e.cues[a],l),s++};u(t),e.oncuechange=u,this.b.textTracks.add(i,t),i.setMode(e.mode,t)}cd(){var t;this.m.textTracks.onaddtrack=null;for(const e of this.b.textTracks){const i=(t=e[n.T])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function I(r,t){return Array.from(r.children).find(e=>e.track===t)}class T{constructor(t,e){this.m=t,this.a=e,this.B=(i,s)=>{this.a.delegate.c("picture-in-picture-change",i,s)},c(this.m,"enterpictureinpicture",this.Jg.bind(this)),c(this.m,"leavepictureinpicture",this.Kg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return o(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Jg(t){this.B(!0,t)}Kg(t){this.B(!1,t)}}class b{constructor(t,e){this.m=t,this.a=e,this.I="inline",c(this.m,"webkitpresentationmodechanged",this.Ua.bind(this))}get Se(){return h(this.m)}async kc(t){this.I!==t&&this.m.webkitSetPresentationMode(t)}Ua(t){var i;const e=this.I;this.I=this.m.webkitPresentationMode,(i=this.a.player)==null||i.dispatch(new m("video-presentation-change",{detail:this.I,trigger:t})),["fullscreen","picture-in-picture"].forEach(s=>{(this.I===s||e===s)&&this.a.delegate.c(`${s}-change`,this.I===s,t)})}}class x{constructor(t){this.fa=t}get active(){return this.fa.I==="fullscreen"}get supported(){return this.fa.Se}async enter(){this.fa.kc("fullscreen")}async exit(){this.fa.kc("inline")}}class v{constructor(t){this.fa=t}get active(){return this.fa.I==="picture-in-picture"}get supported(){return this.fa.Se}async enter(){this.fa.kc("picture-in-picture")}async exit(){this.fa.kc("inline")}}class S extends k{constructor(t,e){super(t),this.$$PROVIDER_TYPE="VIDEO",p(()=>{if(h(t)){const i=new b(t,e);this.fullscreen=new x(i),this.pictureInPicture=new v(i)}else o(t)&&(this.pictureInPicture=new T(t,e))},this.scope)}get type(){return"video"}setup(t){super.setup(t),f(this.video)&&new P(this.video,t),t.textRenderers.Fe(this.video),d(()=>{t.textRenderers.Fe(null)}),this.type==="video"&&t.delegate.c("provider-setup",this)}get video(){return this.a}}export{S as VideoProvider};
