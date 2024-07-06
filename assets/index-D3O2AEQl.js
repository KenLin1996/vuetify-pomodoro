import{g as R,o as U,a as V,n as G,u as w,b as I,r as T,w as M,c as _,p as D,m as W,d as q,e as z,f as $,h as H,i as J,j as K,k as X,l as Q,q as Y,s as Z,t as ee,v as te,x as ne,y as oe,z as se,A as re,B as ae,C as ie,D as le,E as d,F as A,G as ue,H as ce,I as h,V as de,J as P,K as F,L as E,M as N}from"./index-BX3XSOQv.js";import{u as fe}from"./list-CHHSpReH.js";import{u as me}from"./settings-D52BQDyo.js";import{V as b,a as ve}from"./VRow-B6nD96uR.js";function O(e){return R()?(U(e),!0):!1}function k(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const s=()=>t(o);return O(s),{off:s}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(s=>s(...o)))}}function B(e){return typeof e=="function"?e():w(e)}const pe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ge=Object.prototype.toString,he=e=>ge.call(e)==="[object Object]",ye=()=>{};function Se(e){return I()}function Ce(e,t=!0,n){Se()?V(e,n):t?e():G(e)}function be(e){var t;const n=B(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=pe?window:void 0;function ke(...e){let t,n,a,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,o]=e,t=L):[t,n,a,o]=e,!t)return ye;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const s=[],r=()=>{s.forEach(l=>l()),s.length=0},v=(l,u,c,f)=>(l.addEventListener(u,c,f),()=>l.removeEventListener(u,c,f)),g=M(()=>[be(t),B(o)],([l,u])=>{if(r(),!l)return;const c=he(u)?{...u}:u;s.push(...n.flatMap(f=>a.map(y=>v(l,f,y,c))))},{immediate:!0,flush:"post"}),p=()=>{g(),r()};return O(p),p}function we(){const e=T(!1),t=I();return t&&V(()=>{e.value=!0},t),e}function Te(e){const t=we();return _(()=>(t.value,!!e()))}function xe(e={}){const{window:t=L,requestPermissions:n=!0}=e,a=e,o=Te(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),s=T(o.value&&"permission"in Notification&&Notification.permission==="granted"),r=T(null),v=async()=>{if(o.value)return!s.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(s.value=!0),s.value},{on:g,trigger:p}=k(),{on:l,trigger:u}=k(),{on:c,trigger:f}=k(),{on:y,trigger:C}=k(),x=async i=>{if(!o.value||!s.value)return;const m=Object.assign({},a,i);return r.value=new Notification(m.title||"",m),r.value.onclick=p,r.value.onshow=u,r.value.onerror=f,r.value.onclose=C,r.value},S=()=>{r.value&&r.value.close(),r.value=null};if(n&&Ce(v),O(S),o.value&&t){const i=t.document;ke(i,"visibilitychange",m=>{m.preventDefault(),i.visibilityState==="visible"&&S()})}return{isSupported:o,notification:r,ensurePermissions:v,permissionGranted:s,show:x,close:S,onClick:g,onShow:l,onError:c,onClose:y}}const Pe=D({color:String,...W(),...q(),...z(),...$(),...H(),...J(),...K(),...X(),...Q()},"VSheet"),Ne=Y()({name:"VSheet",props:Pe(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=Z(e),{backgroundColorClasses:o,backgroundColorStyles:s}=ee(te(e,"color")),{borderClasses:r}=ne(e),{dimensionStyles:v}=oe(e),{elevationClasses:g}=se(e),{locationStyles:p}=re(e),{positionClasses:l}=ae(e),{roundedClasses:u}=ie(e);return le(()=>d(e.tag,{class:["v-sheet",a.value,o.value,r.value,g.value,l.value,u.value,e.class],style:[s.value,v.value,p.value,e.style]},n)),{}}}),_e={style:{backgroundColor:"#FFFFFF",width:"100px",padding:"4px",fontSize:"24px",border:"1px solid black",borderRadius:"5px"},class:""},Ve={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=T(t.STOP),a=fe(),{currentItem:o,items:s,timeleft:r}=A(a),{setCurrentItem:v,countdown:g,setFinishItem:p}=a,l=me(),{selectedAlarmFile:u}=A(l);let c=0;const f=()=>{n.value===t.STOP&&s.value.length>0&&v(),n.value=t.COUNTING,c=setInterval(()=>{g(),r.value===0&&C()},1e3)},y=()=>{n.value=t.PAUSE,clearInterval(c)},C=()=>{clearInterval(c),n.value=t.STOP;const i=new Audio;i.src=u.value,i.play();const{show:m,isSupported:j}=xe({title:"事項完成",body:o.value,icon:new URL(""+new URL("pomodoroTechnique-BcA594Xx.png",import.meta.url).href,import.meta.url).href});j.value&&m(),p(),s.value.length>0&&f()},x=_(()=>o.value.length>0?o.value:s.value.length>0?"點擊開始":"沒有事項"),S=_(()=>{const i=Math.floor(r.value/60).toString().padStart(2,"0"),m=(r.value%60).toString().padStart(2,"0");return i+":"+m});return(i,m)=>(ue(),ce(de,{class:"d-flex align-center pa-5 h-100"},{default:h(()=>[d(ve,null,{default:h(()=>[d(b,{cols:"12",class:"d-flex justify-center mb-4"},{default:h(()=>[P("h1",{style:E({color:i.$vuetify.theme.themes.light.secondary})},"目前事項 "+F(x.value),5)]),_:1}),d(Ne,{color:"#F3E5F5",width:900,height:200,elevation:"4",rounded:"",class:"mx-auto d-flex align-center justify-center flex-wrap text-center"},{default:h(()=>[d(b,{cols:"12",class:"text-center"},{default:h(()=>[P("h1",{style:E({color:i.$vuetify.theme.themes.light.secondary,fontSize:"24px"})},"剩餘時間",4)]),_:1}),d(b,{cols:"12",class:"d-flex justify-center"},{default:h(()=>[P("div",_e,F(S.value),1)]),_:1}),d(b,{cols:"12",class:"text-center"},{default:h(()=>[d(N,{icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||w(o).length===0&&w(s).length===0},null,8,["disabled"]),d(N,{icon:"mdi-pause",onClick:y,disabled:n.value!==t.COUNTING,class:"mx-3"},null,8,["disabled"]),d(N,{icon:"mdi-skip-next",onClick:C,disabled:w(o).length===0},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Ve as default};
