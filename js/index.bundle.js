var e
e=function(){"use strict"
const e=new Map
var t={set(t,n,r){e.has(t)||e.set(t,new Map)
const o=e.get(t)
o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return
const r=e.get(t)
r.delete(n),0===r.size&&e.delete(t)}}
const n="transitionend",r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),o=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),i=e=>o(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(r(e)):null,s=e=>{if(!o(e)||0===e.getClientRects().length)return!1
const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])")
if(!n)return t
if(n!==e){const t=e.closest("summary")
if(t&&t.parentNode!==n)return!1
if(null===t)return!1}return t},a=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),c=()=>{},l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,u=[],f=()=>"rtl"===document.documentElement.dir,d=e=>{var t
t=()=>{const t=l()
if(t){const n=e.NAME,r=t.fn[n]
t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}},"loading"===document.readyState?(u.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of u)e()})),u.push(t)):t()},p=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,m=(e,t,r=!0)=>{if(!r)return void p(e)
const o=(e=>{if(!e)return 0
let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e)
const r=Number.parseFloat(t),o=Number.parseFloat(n)
return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5
let i=!1
const s=({target:r})=>{r===t&&(i=!0,t.removeEventListener(n,s),p(e))}
t.addEventListener(n,s),setTimeout((()=>{i||t.dispatchEvent(new Event(n))}),o)},h=(e,t,n,r)=>{const o=e.length
let i=e.indexOf(t)
return-1===i?!n&&r?e[o-1]:e[0]:(i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))])},g=/[^.]*(?=\..*)\.|.*/,b=/\..*/,v=/::\d+$/,y={}
let w=1
const _={mouseenter:"mouseover",mouseleave:"mouseout"},x=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"])
function O(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function E(e){const t=O(e)
return e.uidEvent=t,y[t]=y[t]||{},y[t]}function A(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function j(e,t,n){const r="string"==typeof t,o=r?n:t||n
let i=L(e)
return x.has(i)||(i=e),[r,o,i]}function C(e,t,n,r,o){if("string"!=typeof t||!e)return
let[i,s,a]=j(t,n,r)
if(t in _){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)}
s=e(s)}const c=E(e),l=c[a]||(c[a]={}),u=A(l,s,i?n:null)
if(u)return void(u.oneOff=u.oneOff&&o)
const f=O(s,t.replace(g,"")),d=i?function(e,t,n){return function r(o){const i=e.querySelectorAll(t)
for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const a of i)if(a===s)return T(o,{delegateTarget:s}),r.oneOff&&k.off(e,o.type,t,n),n.apply(s,[o])}}(e,n,s):function(e,t){return function n(r){return T(r,{delegateTarget:e}),n.oneOff&&k.off(e,r.type,t),t.apply(e,[r])}}(e,s)
d.delegationSelector=i?n:null,d.callable=s,d.oneOff=o,d.uidEvent=f,l[f]=d,e.addEventListener(a,d,i)}function S(e,t,n,r,o){const i=A(t[n],r,o)
i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function D(e,t,n,r){const o=t[n]||{}
for(const[i,s]of Object.entries(o))i.includes(r)&&S(e,t,n,s.callable,s.delegationSelector)}function L(e){return e=e.replace(b,""),_[e]||e}const k={on(e,t,n,r){C(e,t,n,r,!1)},one(e,t,n,r){C(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return
const[o,i,s]=j(t,n,r),a=s!==t,c=E(e),l=c[s]||{},u=t.startsWith(".")
if(void 0===i){if(u)for(const n of Object.keys(c))D(e,c,n,t.slice(1))
for(const[n,r]of Object.entries(l)){const o=n.replace(v,"")
a&&!t.includes(o)||S(e,c,s,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return
S(e,c,s,i,o?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null
const r=l()
let o=null,i=!0,s=!0,a=!1
t!==L(t)&&r&&(o=r.Event(t,n),r(e).trigger(o),i=!o.isPropagationStopped(),s=!o.isImmediatePropagationStopped(),a=o.isDefaultPrevented())
const c=T(new Event(t,{bubbles:i,cancelable:!0}),n)
return a&&c.preventDefault(),s&&e.dispatchEvent(c),c.defaultPrevented&&o&&o.preventDefault(),c}}
function T(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function N(e){if("true"===e)return!0
if("false"===e)return!1
if(e===Number(e).toString())return Number(e)
if(""===e||"null"===e)return null
if("string"!=typeof e)return e
try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function I(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const P={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${I(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${I(t)}`)},getDataAttributes(e){if(!e)return{}
const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")))
for(const r of n){let n=r.replace(/^bs/,"")
n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=N(e.dataset[r])}return t},getDataAttribute:(e,t)=>N(e.getAttribute(`data-bs-${I(t)}`))}
class ${static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=o(t)?P.getDataAttribute(t,"config"):{}
return{...this.constructor.Default,..."object"==typeof n?n:{},...o(t)?P.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,i]of Object.entries(t)){const t=e[r],s=o(t)?"element":null==(n=t)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase()
if(!new RegExp(i).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`)}var n}}class M extends ${constructor(e,n){super(),(e=i(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),k.off(this._element,this.constructor.EVENT_KEY)
for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){m(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(i(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const q=e=>{let t=e.getAttribute("data-bs-target")
if(!t||"#"===t){let n=e.getAttribute("href")
if(!n||!n.includes("#")&&!n.startsWith("."))return null
n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return r(t)},B={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[]
let r=e.parentNode.closest(t)
for(;r;)n.push(r),r=r.parentNode.closest(t)
return n},prev(e,t){let n=e.previousElementSibling
for(;n;){if(n.matches(t))return[n]
n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling
for(;n;){if(n.matches(t))return[n]
n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",")
return this.find(t,e).filter((e=>!a(e)&&s(e)))},getSelectorFromElement(e){const t=q(e)
return t&&B.findOne(t)?t:null},getElementFromSelector(e){const t=q(e)
return t?B.findOne(t):null},getMultipleElementsFromSelector(e){const t=q(e)
return t?B.find(t):[]}},W=".bs.tab",R=`hide${W}`,H=`hidden${W}`,V=`show${W}`,F=`shown${W}`,K=`click${W}`,Y=`keydown${W}`,U=`load${W}`,z="ArrowLeft",Q="ArrowRight",J="ArrowUp",X="ArrowDown",G="active",Z="fade",ee="show",te=":not(.dropdown-toggle)",ne='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',re=`.nav-link${te}, .list-group-item${te}, [role="tab"]${te}, ${ne}`,oe=`.${G}[data-bs-toggle="tab"], .${G}[data-bs-toggle="pill"], .${G}[data-bs-toggle="list"]`
class ie extends M{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),k.on(this._element,Y,(e=>this._keydown(e))))}static get NAME(){return"tab"}show(){const e=this._element
if(this._elemIsActive(e))return
const t=this._getActiveElem(),n=t?k.trigger(t,R,{relatedTarget:e}):null
k.trigger(e,V,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(G),this._activate(B.getElementFromSelector(e)),this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),k.trigger(e,F,{relatedTarget:t})):e.classList.add(ee)}),e,e.classList.contains(Z)))}_deactivate(e,t){e&&(e.classList.remove(G),e.blur(),this._deactivate(B.getElementFromSelector(e)),this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),k.trigger(e,H,{relatedTarget:t})):e.classList.remove(ee)}),e,e.classList.contains(Z)))}_keydown(e){if(![z,Q,J,X].includes(e.key))return
e.stopPropagation(),e.preventDefault()
const t=[Q,X].includes(e.key),n=h(this._getChildren().filter((e=>!a(e))),e.target,t,!0)
n&&(n.focus({preventScroll:!0}),ie.getOrCreateInstance(n).show())}_getChildren(){return B.find(re,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist")
for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e)
const t=this._elemIsActive(e),n=this._getOuterElement(e)
e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=B.getElementFromSelector(e)
t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e)
if(!n.classList.contains("dropdown"))return
const r=(e,r)=>{const o=B.findOne(e,n)
o&&o.classList.toggle(r,t)}
r(".dropdown-toggle",G),r(".dropdown-menu",ee),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(G)}_getInnerElement(e){return e.matches(re)?e:B.findOne(re,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each((function(){const t=ie.getOrCreateInstance(this)
if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`)
t[e]()}}))}}k.on(document,K,ne,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),a(this)||ie.getOrCreateInstance(this).show()})),k.on(window,U,(()=>{for(const e of B.find(oe))ie.getOrCreateInstance(e)})),d(ie)
var se="top",ae="bottom",ce="right",le="left",ue="auto",fe=[se,ae,ce,le],de="start",pe="end",me="clippingParents",he="viewport",ge="popper",be="reference",ve=fe.reduce((function(e,t){return e.concat([t+"-"+de,t+"-"+pe])}),[]),ye=[].concat(fe,[ue]).reduce((function(e,t){return e.concat([t,t+"-"+de,t+"-"+pe])}),[]),we="beforeRead",_e="read",xe="afterRead",Oe="beforeMain",Ee="main",Ae="afterMain",je="beforeWrite",Ce="write",Se="afterWrite",De=[we,_e,xe,Oe,Ee,Ae,je,Ce,Se]
function Le(e){return e?(e.nodeName||"").toLowerCase():null}function ke(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function Te(e){return e instanceof ke(e).Element||e instanceof Element}function Ne(e){return e instanceof ke(e).HTMLElement||e instanceof HTMLElement}function Ie(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ke(e).ShadowRoot||e instanceof ShadowRoot)}var Pe={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
Ne(o)&&Le(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
Ne(r)&&Le(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function $e(e){return e.split("-")[0]}var Me=Math.max,qe=Math.min,Be=Math.round
function We(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function Re(){return!/^((?!chrome|android).)*safari/i.test(We())}function He(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),o=1,i=1
t&&Ne(e)&&(o=e.offsetWidth>0&&Be(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Be(r.height)/e.offsetHeight||1)
var s=(Te(e)?ke(e):window).visualViewport,a=!Re()&&n,c=(r.left+(a&&s?s.offsetLeft:0))/o,l=(r.top+(a&&s?s.offsetTop:0))/i,u=r.width/o,f=r.height/i
return{width:u,height:f,top:l,right:c+u,bottom:l+f,left:c,x:c,y:l}}function Ve(e){var t=He(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Fe(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&Ie(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function Ke(e){return ke(e).getComputedStyle(e)}function Ye(e){return["table","td","th"].indexOf(Le(e))>=0}function Ue(e){return((Te(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return"html"===Le(e)?e:e.assignedSlot||e.parentNode||(Ie(e)?e.host:null)||Ue(e)}function Qe(e){return Ne(e)&&"fixed"!==Ke(e).position?e.offsetParent:null}function Je(e){for(var t=ke(e),n=Qe(e);n&&Ye(n)&&"static"===Ke(n).position;)n=Qe(n)
return n&&("html"===Le(n)||"body"===Le(n)&&"static"===Ke(n).position)?t:n||function(e){var t=/firefox/i.test(We())
if(/Trident/i.test(We())&&Ne(e)&&"fixed"===Ke(e).position)return null
var n=ze(e)
for(Ie(n)&&(n=n.host);Ne(n)&&["html","body"].indexOf(Le(n))<0;){var r=Ke(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function Xe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ge(e,t,n){return Me(e,qe(t,n))}function Ze(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function et(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var tt={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=$e(n.placement),c=Xe(a),l=[le,ce].indexOf(a)>=0?"height":"width"
if(i&&s){var u=function(e,t){return Ze("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:et(e,fe))}(o.padding,n),f=Ve(i),d="y"===c?se:le,p="y"===c?ae:ce,m=n.rects.reference[l]+n.rects.reference[c]-s[c]-n.rects.popper[l],h=s[c]-n.rects.reference[c],g=Je(i),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[d],w=b-f[l]-u[p],_=b/2-f[l]/2+v,x=Ge(y,_,w),O=c
n.modifiersData[r]=((t={})[O]=x,t.centerOffset=x-_,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&Fe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function nt(e){return e.split("-")[1]}var rt={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function ot(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,s=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=e.isFixed,d=s.x,p=void 0===d?0:d,m=s.y,h=void 0===m?0:m,g="function"==typeof u?u({x:p,y:h}):{x:p,y:h}
p=g.x,h=g.y
var b=s.hasOwnProperty("x"),v=s.hasOwnProperty("y"),y=le,w=se,_=window
if(l){var x=Je(n),O="clientHeight",E="clientWidth"
x===ke(n)&&"static"!==Ke(x=Ue(n)).position&&"absolute"===a&&(O="scrollHeight",E="scrollWidth"),(o===se||(o===le||o===ce)&&i===pe)&&(w=ae,h-=(f&&x===_&&_.visualViewport?_.visualViewport.height:x[O])-r.height,h*=c?1:-1),o!==le&&(o!==se&&o!==ae||i!==pe)||(y=ce,p-=(f&&x===_&&_.visualViewport?_.visualViewport.width:x[E])-r.width,p*=c?1:-1)}var A,j=Object.assign({position:a},l&&rt),C=!0===u?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1
return{x:Be(n*o)/o||0,y:Be(r*o)/o||0}}({x:p,y:h},ke(n)):{x:p,y:h}
return p=C.x,h=C.y,c?Object.assign({},j,((A={})[w]=v?"0":"",A[y]=b?"0":"",A.transform=(_.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A)):Object.assign({},j,((t={})[w]=v?h+"px":"",t[y]=b?p+"px":"",t.transform="",t))}var it={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,l={placement:$e(t.placement),variation:nt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ot(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ot(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},st={passive:!0},at={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,s=r.resize,a=void 0===s||s,c=ke(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,st)})),a&&c.addEventListener("resize",n.update,st),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,st)})),a&&c.removeEventListener("resize",n.update,st)}},data:{}},ct={left:"right",right:"left",bottom:"top",top:"bottom"}
function lt(e){return e.replace(/left|right|bottom|top/g,(function(e){return ct[e]}))}var ut={start:"end",end:"start"}
function ft(e){return e.replace(/start|end/g,(function(e){return ut[e]}))}function dt(e){var t=ke(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pt(e){return He(Ue(e)).left+dt(e).scrollLeft}function mt(e){var t=Ke(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function ht(e){return["html","body","#document"].indexOf(Le(e))>=0?e.ownerDocument.body:Ne(e)&&mt(e)?e:ht(ze(e))}function gt(e,t){var n
void 0===t&&(t=[])
var r=ht(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=ke(r),s=o?[i].concat(i.visualViewport||[],mt(r)?r:[]):r,a=t.concat(s)
return o?a:a.concat(gt(ze(s)))}function bt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function vt(e,t,n){return t===he?bt(function(e,t){var n=ke(e),r=Ue(e),o=n.visualViewport,i=r.clientWidth,s=r.clientHeight,a=0,c=0
if(o){i=o.width,s=o.height
var l=Re();(l||!l&&"fixed"===t)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:i,height:s,x:a+pt(e),y:c}}(e,n)):Te(t)?function(e,t){var n=He(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):bt(function(e){var t,n=Ue(e),r=dt(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=Me(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Me(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+pt(e),c=-r.scrollTop
return"rtl"===Ke(o||n).direction&&(a+=Me(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:c}}(Ue(e)))}function yt(e,t,n,r){var o="clippingParents"===t?function(e){var t=gt(ze(e)),n=["absolute","fixed"].indexOf(Ke(e).position)>=0&&Ne(e)?Je(e):e
return Te(n)?t.filter((function(e){return Te(e)&&Fe(e,n)&&"body"!==Le(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),s=i[0],a=i.reduce((function(t,n){var o=vt(e,n,r)
return t.top=Me(o.top,t.top),t.right=qe(o.right,t.right),t.bottom=qe(o.bottom,t.bottom),t.left=Me(o.left,t.left),t}),vt(e,s,r))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function wt(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?$e(o):null,s=o?nt(o):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2
switch(i){case se:t={x:a,y:n.y-r.height}
break
case ae:t={x:a,y:n.y+n.height}
break
case ce:t={x:n.x+n.width,y:c}
break
case le:t={x:n.x-r.width,y:c}
break
default:t={x:n.x,y:n.y}}var l=i?Xe(i):null
if(null!=l){var u="y"===l?"height":"width"
switch(s){case de:t[l]=t[l]-(n[u]/2-r[u]/2)
break
case pe:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function _t(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,s=void 0===i?e.strategy:i,a=n.boundary,c=void 0===a?me:a,l=n.rootBoundary,u=void 0===l?he:l,f=n.elementContext,d=void 0===f?ge:f,p=n.altBoundary,m=void 0!==p&&p,h=n.padding,g=void 0===h?0:h,b=Ze("number"!=typeof g?g:et(g,fe)),v=d===ge?be:ge,y=e.rects.popper,w=e.elements[m?v:d],_=yt(Te(w)?w:w.contextElement||Ue(e.elements.popper),c,u,s),x=He(e.elements.reference),O=wt({reference:x,element:y,strategy:"absolute",placement:o}),E=bt(Object.assign({},y,O)),A=d===ge?E:x,j={top:_.top-A.top+b.top,bottom:A.bottom-_.bottom+b.bottom,left:_.left-A.left+b.left,right:A.right-_.right+b.right},C=e.modifiersData.offset
if(d===ge&&C){var S=C[o]
Object.keys(j).forEach((function(e){var t=[ce,ae].indexOf(e)>=0?1:-1,n=[se,ae].indexOf(e)>=0?"y":"x"
j[e]+=S[n]*t}))}return j}function xt(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?ye:c,u=nt(r),f=u?a?ve:ve.filter((function(e){return nt(e)===u})):fe,d=f.filter((function(e){return l.indexOf(e)>=0}))
0===d.length&&(d=f)
var p=d.reduce((function(t,n){return t[n]=_t(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[$e(n)],t}),{})
return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}var Ot={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name
if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,l=n.padding,u=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,h=n.allowedAutoPlacements,g=t.options.placement,b=$e(g),v=c||(b!==g&&m?function(e){if($e(e)===ue)return[]
var t=lt(e)
return[ft(e),t,ft(t)]}(g):[lt(g)]),y=[g].concat(v).reduce((function(e,n){return e.concat($e(n)===ue?xt(t,{placement:n,boundary:u,rootBoundary:f,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,_=t.rects.popper,x=new Map,O=!0,E=y[0],A=0;A<y.length;A++){var j=y[A],C=$e(j),S=nt(j)===de,D=[se,ae].indexOf(C)>=0,L=D?"width":"height",k=_t(t,{placement:j,boundary:u,rootBoundary:f,altBoundary:d,padding:l}),T=D?S?ce:le:S?ae:se
w[L]>_[L]&&(T=lt(T))
var N=lt(T),I=[]
if(i&&I.push(k[C]<=0),a&&I.push(k[T]<=0,k[N]<=0),I.every((function(e){return e}))){E=j,O=!1
break}x.set(j,I)}if(O)for(var P=function(e){var t=y.find((function(t){var n=x.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return E=t,"break"},$=m?3:1;$>0&&"break"!==P($);$--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function Et(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function At(e){return[se,ce,ae,le].some((function(t){return e[t]>=0}))}var jt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=_t(t,{elementContext:"reference"}),a=_t(t,{altBoundary:!0}),c=Et(s,r),l=Et(a,o,i),u=At(c),f=At(l)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}},Ct={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,s=ye.reduce((function(e,n){return e[n]=function(e,t,n){var r=$e(e),o=[le,se].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=i[0],a=i[1]
return s=s||0,a=(a||0)*o,[le,ce].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,i),e}),{}),a=s[t.placement],c=a.x,l=a.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=s}},St={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=wt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Dt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,f=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,g=_t(t,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),b=$e(t.placement),v=nt(t.placement),y=!v,w=Xe(b),_="x"===w?"y":"x",x=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,A="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,j="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0}
if(x){if(i){var D,L="y"===w?se:le,k="y"===w?ae:ce,T="y"===w?"height":"width",N=x[w],I=N+g[L],P=N-g[k],$=p?-E[T]/2:0,M=v===de?O[T]:E[T],q=v===de?-E[T]:-O[T],B=t.elements.arrow,W=p&&B?Ve(B):{width:0,height:0},R=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=R[L],V=R[k],F=Ge(0,O[T],W[T]),K=y?O[T]/2-$-F-H-j.mainAxis:M-F-H-j.mainAxis,Y=y?-O[T]/2+$+F+V+j.mainAxis:q+F+V+j.mainAxis,U=t.elements.arrow&&Je(t.elements.arrow),z=U?"y"===w?U.clientTop||0:U.clientLeft||0:0,Q=null!=(D=null==C?void 0:C[w])?D:0,J=N+Y-Q,X=Ge(p?qe(I,N+K-Q-z):I,N,p?Me(P,J):P)
x[w]=X,S[w]=X-N}if(a){var G,Z="x"===w?se:le,ee="x"===w?ae:ce,te=x[_],ne="y"===_?"height":"width",re=te+g[Z],oe=te-g[ee],ie=-1!==[se,le].indexOf(b),ue=null!=(G=null==C?void 0:C[_])?G:0,fe=ie?re:te-O[ne]-E[ne]-ue+j.altAxis,pe=ie?te+O[ne]+E[ne]-ue-j.altAxis:oe,me=p&&ie?function(e,t,n){var r=Ge(e,t,n)
return r>n?n:r}(fe,te,pe):Ge(p?fe:re,te,p?pe:oe)
x[_]=me,S[_]=me-te}t.modifiersData[r]=S}},requiresIfExists:["offset"]}
function Lt(e,t,n){void 0===n&&(n=!1)
var r,o,i=Ne(t),s=Ne(t)&&function(e){var t=e.getBoundingClientRect(),n=Be(t.width)/e.offsetWidth||1,r=Be(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),a=Ue(t),c=He(e,s,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0}
return(i||!i&&!n)&&(("body"!==Le(t)||mt(a))&&(l=(r=t)!==ke(r)&&Ne(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:dt(r)),Ne(t)?((u=He(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=pt(a))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function kt(e){var t=new Map,n=new Set,r=[]
function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Tt={placement:"bottom",modifiers:[],strategy:"absolute"}
function Nt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function It(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Tt:o
return function(e,t,n){void 0===n&&(n=i)
var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tt,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n
f(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:Te(e)?gt(e):e.contextElement?gt(e.contextElement):[],popper:gt(t)}
var s,l,d=function(e){var t=kt(e)
return De.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,a.options.modifiers),l=s.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))))
return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:a,name:t,instance:u,options:r}),s=function(){}
c.push(i||s)}})),u.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,n=e.popper
if(Nt(t,n)){a.rects={reference:Lt(t,Je(n),"fixed"===a.options.strategy),popper:Ve(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var o=a.orderedModifiers[r],i=o.fn,s=o.options,c=void 0===s?{}:s,f=o.name
"function"==typeof i&&(a=i({state:a,options:c,name:f,instance:u})||a)}else a.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){f(),l=!0}}
if(!Nt(e,t))return u
function f(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Pt=It(),$t=It({defaultModifiers:[at,St,it,Pe]}),Mt=It({defaultModifiers:[at,St,it,Pe,Ct,Ot,Dt,tt,jt]}),qt=Object.freeze({__proto__:null,popperGenerator:It,detectOverflow:_t,createPopperBase:Pt,createPopper:Mt,createPopperLite:$t,top:se,bottom:ae,right:ce,left:le,auto:ue,basePlacements:fe,start:de,end:pe,clippingParents:me,viewport:he,popper:ge,reference:be,variationPlacements:ve,placements:ye,beforeRead:we,read:_e,afterRead:xe,beforeMain:Oe,main:Ee,afterMain:Ae,beforeWrite:je,write:Ce,afterWrite:Se,modifierPhases:De,applyStyles:Pe,arrow:tt,computeStyles:it,eventListeners:at,flip:Ot,hide:jt,offset:Ct,popperOffsets:St,preventOverflow:Dt})
const Bt="dropdown",Wt=".bs.dropdown",Rt=".data-api",Ht="ArrowUp",Vt="ArrowDown",Ft=`hide${Wt}`,Kt=`hidden${Wt}`,Yt=`show${Wt}`,Ut=`shown${Wt}`,zt=`click${Wt}${Rt}`,Qt=`keydown${Wt}${Rt}`,Jt=`keyup${Wt}${Rt}`,Xt="show",Gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Zt=`${Gt}.${Xt}`,en=".dropdown-menu",tn=f()?"top-end":"top-start",nn=f()?"top-start":"top-end",rn=f()?"bottom-end":"bottom-start",on=f()?"bottom-start":"bottom-end",sn=f()?"left-start":"right-start",an=f()?"right-start":"left-start",cn={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ln={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"}
class un extends M{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=B.next(this._element,en)[0]||B.prev(this._element,en)[0]||B.findOne(en,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return cn}static get DefaultType(){return ln}static get NAME(){return Bt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(a(this._element)||this._isShown())return
const e={relatedTarget:this._element}
if(!k.trigger(this._element,Yt,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))k.on(e,"mouseover",c)
this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Xt),this._element.classList.add(Xt),k.trigger(this._element,Ut,e)}}hide(){if(a(this._element)||!this._isShown())return
const e={relatedTarget:this._element}
this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!k.trigger(this._element,Ft,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))k.off(e,"mouseover",c)
this._popper&&this._popper.destroy(),this._menu.classList.remove(Xt),this._element.classList.remove(Xt),this._element.setAttribute("aria-expanded","false"),P.removeDataAttribute(this._menu,"popper"),k.trigger(this._element,Kt,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!o(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${Bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
return e}_createPopper(){if(void 0===qt)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
let e=this._element
"parent"===this._config.reference?e=this._parent:o(this._config.reference)?e=i(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference)
const t=this._getPopperConfig()
this._popper=Mt(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Xt)}_getPlacement(){const e=this._parent
if(e.classList.contains("dropend"))return sn
if(e.classList.contains("dropstart"))return an
if(e.classList.contains("dropup-center"))return"top"
if(e.classList.contains("dropdown-center"))return"bottom"
const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()
return e.classList.contains("dropup")?t?nn:tn:t?on:rn}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config
return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]}
return(this._inNavbar||"static"===this._config.display)&&(P.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...p(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>s(e)))
n.length&&h(n,t,e===Vt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=un.getOrCreateInstance(this,e)
if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`)
t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return
const t=B.find(Zt)
for(const n of t){const t=un.getInstance(n)
if(!t||!1===t._config.autoClose)continue
const r=e.composedPath(),o=r.includes(t._menu)
if(r.includes(t._element)||"inside"===t._config.autoClose&&!o||"outside"===t._config.autoClose&&o)continue
if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue
const i={relatedTarget:t._element}
"click"===e.type&&(i.clickEvent=e),t._completeHide(i)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,r=[Ht,Vt].includes(e.key)
if(!r&&!n)return
if(t&&!n)return
e.preventDefault()
const o=this.matches(Gt)?this:B.prev(this,Gt)[0]||B.next(this,Gt)[0]||B.findOne(Gt,e.delegateTarget.parentNode),i=un.getOrCreateInstance(o)
if(r)return e.stopPropagation(),i.show(),void i._selectMenuItem(e)
i._isShown()&&(e.stopPropagation(),i.hide(),o.focus())}}k.on(document,Qt,Gt,un.dataApiKeydownHandler),k.on(document,Qt,en,un.dataApiKeydownHandler),k.on(document,zt,un.clearMenus),k.on(document,Jt,un.clearMenus),k.on(document,zt,Gt,(function(e){e.preventDefault(),un.getOrCreateInstance(this).toggle()})),d(un),document.addEventListener("DOMContentLoaded",(function(){if(document.getElementById("prism-css").media="all",document.getElementById("toggle-offcanvas").addEventListener("click",(function(){document.body.classList.toggle("offcanvas-open")})),0!=document.querySelectorAll(".demo").length&&!document.getElementById("select-theme")){var e=window.themes||["bootstrap5","bootstrap4","default"],t={bootstrap5:"Bootstrap 5",bootstrap4:"Bootstrap 4",default:"Default"},n=localStorage.getItem("theme");-1==e.indexOf(n)&&(n="bootstrap5")
var r=document.createElement("input")
r.classList.add("theme-selector-input")
var o=document.getElementById("main-container")
document.querySelectorAll(".demo-mini").length||(o.insertBefore(r,o.firstChild),new TomSelect(r,{maxItems:1,controlInput:"<input>",plugins:["no_backspace_delete"],options:e.map((n=>-1!=e.indexOf(n)&&{text:t[n],value:n})),items:[n],render:{item:(e,t)=>"<div>Theme: "+t(e.text)+"</div>"},onChange:e=>{i(e)}})),i(n),document.addEventListener("click",(e=>{var t=e.target.closest(".opensandbox")
if(t){var n,r=t.closest(".demo")
function l(e){var t=r.querySelector(e)
return t&&t.textContent||""}var o=`<div class="p-4">${r.querySelector("textarea").value||""}</div>`,i=l("style"),s=l("script"),a=[`https://cdn.jsdelivr.net/npm/tom-select@2.2.4/dist/css/tom-select.${localStorage.getItem("theme")||"bootstrap4"}.min.css`,"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"]
"bootstrap4"==localStorage.getItem("theme")?a.push("https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css"):a.push("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css")
var c=["https://cdn.jsdelivr.net/npm/tom-select@2.2.4/dist/js/tom-select.complete.min.js"]
r.classList.contains("demo-jquery")&&(c.push("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"),c.push("https://cdn.jsdelivr.net/npm/jquery-ui-dist@1.12.1/jquery-ui.js")),n={html:o,js:s,css:i,js_external:c.join(";"),css_external:a.join(";")},r.querySelector(".codepen").value=JSON.stringify(n),r.querySelector(".jsfiddle-html").value=o,r.querySelector(".jsfiddle-js").value=s,r.querySelector(".jsfiddle-css").value=i,r.querySelector(".jsfiddle-resources").value=c.join(",")+","+a.join(","),setTimeout((()=>{t.nextElementSibling.submit()}),50)}}))}function i(t){if(-1!=e.indexOf(t)){localStorage.setItem("theme",t)
var n=document.getElementById("select-theme")
n&&n.parentNode.removeChild(n),(n=document.createElement("link")).id="select-theme",n.setAttribute("rel","stylesheet"),n.setAttribute("href","/css/tom-select."+t+".css"),document.getElementsByTagName("head")[0].appendChild(n)}}}))},"function"==typeof define&&define.amd?define(e):e()
//# sourceMappingURL=index.bundle.js.map
