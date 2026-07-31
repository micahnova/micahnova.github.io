(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_21_0__articulate_design-system-to-50ba03"],{49473(Oi){var yt="Expected a function",ca=NaN,Qa="[object Symbol]",xt=/^\s+|\s+$/g,Hn=/^[-+]0x[0-9a-f]+$/i,wo=/^0b[01]+$/i,Sr=/^0o[0-7]+$/i,kt=parseInt,za=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,wt=typeof self=="object"&&self&&self.Object===Object&&self,Ct=za||wt||Function("return this")(),Jr=Object.prototype,Se=Jr.toString,At=Math.max,Vn=Math.min,ze=function(){return Ct.Date.now()};function Ge(lr,Fr,Ea){var ve,q,Wr,_a,ua,ha,_e=0,zt=!1,Ta=!1,c=!0;if(typeof lr!="function")throw new TypeError(yt);Fr=Co(Fr)||0,Ee(Ea)&&(zt=!!Ea.leading,Ta="maxWait"in Ea,Wr=Ta?At(Co(Ea.maxWait)||0,Fr):Wr,c="trailing"in Ea?!!Ea.trailing:c);function h(zr){var Fa=ve,Ie=q;return ve=q=void 0,_e=zr,_a=lr.apply(Ie,Fa),_a}function Ye(zr){return _e=zr,ua=setTimeout(Te,Fr),zt?h(zr):_a}function Ao(zr){var Fa=zr-ha,Ie=zr-_e,Et=Fr-Fa;return Ta?Vn(Et,Wr-Ie):Et}function qe(zr){var Fa=zr-ha,Ie=zr-_e;return ha===void 0||Fa>=Fr||Fa<0||Ta&&Ie>=Wr}function Te(){var zr=ze();if(qe(zr))return So(zr);ua=setTimeout(Te,Ao(zr))}function So(zr){return ua=void 0,c&&ve?h(zr):(ve=q=void 0,_a)}function Wn(){ua!==void 0&&clearTimeout(ua),_e=0,ve=ha=q=ua=void 0}function s(){return ua===void 0?_a:So(ze())}function zo(){var zr=ze(),Fa=qe(zr);if(ve=arguments,q=this,ha=zr,Fa){if(ua===void 0)return Ye(ha);if(Ta)return ua=setTimeout(Te,Fr),h(ha)}return ua===void 0&&(ua=setTimeout(Te,Fr)),_a}return zo.cancel=Wn,zo.flush=s,zo}function Ee(lr){var Fr=typeof lr;return!!lr&&(Fr=="object"||Fr=="function")}function St(lr){return!!lr&&typeof lr=="object"}function Un(lr){return typeof lr=="symbol"||St(lr)&&Se.call(lr)==Qa}function Co(lr){if(typeof lr=="number")return lr;if(Un(lr))return ca;if(Ee(lr)){var Fr=typeof lr.valueOf=="function"?lr.valueOf():lr;lr=Ee(Fr)?Fr+"":Fr}if(typeof lr!="string")return lr===0?lr:+lr;lr=lr.replace(xt,"");var Ea=wo.test(lr);return Ea||Sr.test(lr)?kt(lr.slice(2),Ea?2:8):Hn.test(lr)?ca:+lr}Oi.exports=Ge},63771(Oi,yt,ca){"use strict";ca.r(yt),ca.d(yt,{Arc:()=>zf,ArcAbstractFlexLayouts:()=>Fr,ArcAbstractGapSizes:()=>St,ArcAbstractIconSizes:()=>Ee,ArcAbstractOrientations:()=>Ea,ArcAbstractPopoverActions:()=>Ge,ArcAbstractPopoverModes:()=>ze,ArcAbstractTextLayouts:()=>lr,ArcAbstractTextOverflows:()=>Co,ArcAbstractTextSizes:()=>Un,ArcAvatar:()=>uc,ArcAvatarColors:()=>ts,ArcAvatarColorsReserved:()=>cu,ArcAvatarOverflow:()=>c0,ArcAvatarOverflowSizes:()=>hu,ArcAvatarPile:()=>Du,ArcAvatarPileSizes:()=>uu,ArcAvatarSizes:()=>iu,ArcAvatarText:()=>hc,ArcAvatarTextGapSizes:()=>su,ArcAvatarTextOverflows:()=>lu,ArcAvatarTextSizes:()=>du,ArcBadge:()=>x0,ArcBadgeColors:()=>g0,ArcBadgeContrasts:()=>b0,ArcBadgeCount:()=>j0,ArcBadgeCountColors:()=>p0,ArcBadgeCountContrasts:()=>_0,ArcBadgeCountShapes:()=>T0,ArcBadgeCountSizes:()=>z0,ArcBadgeCountVariants:()=>E0,ArcBadgeLayouts:()=>m0,ArcBadgeSizes:()=>f0,ArcBadgeVariants:()=>$0,ArcBanner:()=>q0,ArcBannerActionPlacements:()=>V0,ArcBannerAlignments:()=>U0,ArcBannerDefaults:()=>fe,ArcBannerDensities:()=>N0,ArcBannerLayouts:()=>H0,ArcBannerSchemes:()=>W0,ArcBannerVariants:()=>G0,ArcButton:()=>xr,ArcButtonDeprecatedVariants:()=>Os,ArcButtonHierarchies:()=>Eh,ArcButtonLayouts:()=>Ch,ArcButtonPopoverActions:()=>_h,ArcButtonSchemes:()=>Sh,ArcButtonShadows:()=>zh,ArcButtonShapes:()=>kh,ArcButtonSizes:()=>wh,ArcButtonVariants:()=>Ah,ArcCheckbox:()=>Zs,ArcCheckboxBar:()=>lv,ArcCheckboxBarLayouts:()=>cv,ArcCheckboxBarOption:()=>sv,ArcCheckboxBarSizes:()=>iv,ArcCheckboxLayouts:()=>ev,ArcCheckboxSizes:()=>ov,ArcCheckboxVariants:()=>tv,ArcColorAllTools:()=>Xs,ArcColorPalette:()=>mn,ArcColorPaletteAddFlows:()=>hv,ArcColorPicker:()=>Ve,ArcColorPickerDefaults:()=>$e,ArcColorPickerModes:()=>dv,ArcColorSimpleTools:()=>Js,ArcColorSwatch:()=>ti,ArcColorSwatchKinds:()=>uv,ArcColorValueFormats:()=>Bf,ArcDropdownMenu:()=>$i,ArcIcon:()=>cr,ArcIconText:()=>Qr,ArcIconTextVariants:()=>nh,ArcInputAction:()=>od,ArcLabel:()=>me,ArcLabelContent:()=>Oe,ArcLabelLayouts:()=>X0,ArcLink:()=>rp,ArcLinkVariants:()=>Qg,ArcModal:()=>xp,ArcModalAlert:()=>wp,ArcModalAlertDefaults:()=>ie,ArcModalAlertVariants:()=>tp,ArcModalBackdropColors:()=>np,ArcModalBodyPaddings:()=>cp,ArcModalCloseReasons:()=>sp,ArcModalCommonDefaults:()=>na,ArcModalCommonVariants:()=>ep,ArcModalConfirm:()=>dd,ArcModalConfirmDefaults:()=>we,ArcModalConfirmVariants:()=>op,ArcModalSchemes:()=>ap,ArcModalSizes:()=>ip,ArcPopover:()=>oe,ArcPopoverActions:()=>Fu,ArcPopoverAnchors:()=>pc,ArcPopoverBoundaries:()=>fc,ArcPopoverButton:()=>Uo,ArcPopoverDefaults:()=>sa,ArcPopoverDensities:()=>gs,ArcPopoverModes:()=>vc,ArcPopoverSchemes:()=>gc,ArcPopoverVariants:()=>vs,ArcPopoverVariantsWithOutline:()=>Nu,ArcRadio:()=>ud,ArcRadioBar:()=>Ip,ArcRadioBarLayouts:()=>Ep,ArcRadioBarOption:()=>Tp,ArcRadioBarSizes:()=>_p,ArcRadioLayouts:()=>Ap,ArcRadioSizes:()=>Sp,ArcSearch:()=>yd,ArcSearchLayouts:()=>Gp,ArcSearchSizes:()=>Yp,ArcSearchVariants:()=>qp,ArcSelect:()=>sf,ArcSelectLayouts:()=>Qp,ArcSelectSizes:()=>rf,ArcSelectVariants:()=>af,ArcSwitch:()=>hf,ArcSwitchLabelPositions:()=>bo,ArcSwitchSizes:()=>lf,ArcSwitchStates:()=>Or,ArcSystemAIGradients:()=>At,ArcSystemAlignments:()=>wt,ArcSystemColors:()=>Se,ArcSystemGradients:()=>Vn,ArcSystemHierarchies:()=>kt,ArcSystemLayouts:()=>za,ArcSystemLineHeights:()=>Ct,ArcSystemSchemes:()=>Qa,ArcSystemShadows:()=>xt,ArcSystemShapes:()=>wo,ArcSystemSizes:()=>Jr,ArcSystemSurfaces:()=>Hn,ArcSystemVariants:()=>Sr,ArcTextAlignments:()=>xf,ArcTextBodyElements:()=>Ad,ArcTextBodySizes:()=>$f,ArcTextBodyVariants:()=>yf,ArcTextElements:()=>Sd,ArcTextHeadingElements:()=>Cd,ArcTextHeadingSizes:()=>ff,ArcTextHeadingVariants:()=>bf,ArcTextInput:()=>_n,ArcTextInputLayouts:()=>zg,ArcTextInputSizes:()=>Eg,ArcTextInputTypes:()=>Tg,ArcTextInputVariants:()=>_g,ArcTextKinds:()=>vf,ArcTextLineHeights:()=>kf,ArcTextSchemes:()=>gf,ArcTextSubheadingSizes:()=>mf,ArcTextTitleSizes:()=>pf,ArcToast:()=>Vd,ArcToastDefaults:()=>Bd,ArcToastPlacements:()=>Md,ArcToastPopoverActions:()=>_f,ArcToastPopoverModes:()=>Pd,ArcToastProgressBarVariants:()=>Tf,ArcToastSchemes:()=>Id,ArcToastSeverities:()=>jd,ArcToastSizes:()=>Rd,ArcToastVariants:()=>Ld,ArcTooltip:()=>qt,ArcTooltipDefaults:()=>ja,SVGLogoArticulate:()=>ec,SVGLogoProductAI:()=>oc,SVGLogoProductPeek:()=>tc,SVGLogoProductReach:()=>nc,SVGLogoProductReview:()=>cc,SVGLogoProductRise:()=>ic,SVGLogoProductStoryline:()=>sc,SVGLogoProductStudio:()=>lc,StorageType:()=>$t,adoptStyles:()=>ir,adoptThemeTokens:()=>eu,anchorNameRegistry:()=>Mo,assignRef:()=>_a,bindDelegatedEvents:()=>Ms,canonicalizeToHsv:()=>gn,clamp:()=>ua,clampIt:()=>G,colorValueEquals:()=>pn,compositeRgbaOver:()=>il,createEmptyRect:()=>Df,css:()=>s,cssFeatures:()=>bc,didElementRectChange:()=>zt,extractTextFromReactNode:()=>Lo,formatAlphaCss:()=>hn,formatAlphaPercent:()=>ho,formatAnchorName:()=>$c,getArcColorAs:()=>pl,getArcColorData:()=>He,getArcColorParts:()=>gl,getArcColorValue:()=>fl,getArcContrastColor:()=>ei,getColorName:()=>vn,getCssColor:()=>fa,getPreferredAnchorForTooltipId:()=>zc,getSelectedColorMeta:()=>oi,getShadowRootOrDocument:()=>Ta,handlePopover:()=>ms,handleToast:()=>Dd,hasMatchingColorValue:()=>ai,hasNativeAnchorPositioning:()=>mc,hslToRgbaData:()=>el,hsvDeltaOK:()=>qc,hsvToRgbaData:()=>Pa,isDifferent:()=>ha,isHexLike:()=>ll,isHsvLike:()=>ul,isObject:()=>As,isRgbaLike:()=>dl,isSame:()=>_e,isSelectedColorMatch:()=>bl,isString:()=>Mt,joinArray:()=>Po,logError:()=>rh,logMessage:()=>Qu,logWarning:()=>zs,makeHtmlId:()=>Ou,makeRandomColor:()=>ml,mapDeprecated:()=>ve,noTailAnchors:()=>ps,normalizeAnchorName:()=>Bo,normalizeByte:()=>Hr,normalizeColorValue:()=>vo,normalizeHue:()=>rl,normalizeUnit:()=>al,oklchToRgbaData:()=>nl,parseAlphaInput:()=>hl,parseByte:()=>Qo,parseCssColorToRgba:()=>Er,parseHexStringToRgba:()=>sl,pickFromList:()=>q,pickFromListByKeys:()=>Wr,relativeLuminance:()=>cl,resolveTailMetrics:()=>fs,rgbaBytesEqual:()=>Gc,rgbaDeltaOK:()=>un,rgbaEchoDeltaOK:()=>Yc,rgbaToHslData:()=>ol,rgbaToHsvData:()=>rt,rgbaToOklchData:()=>tl,roundIt:()=>dn,shareAdoptedStyles:()=>au,snapIt:()=>Qs,splitString:()=>Ss,syncAnchorName:()=>bs,toHEX:()=>ka,toHSL:()=>Qc,toLinearChannel:()=>Fe,toOKLCH:()=>ri,toRGB:()=>Ne,unbindDelegatedEvents:()=>yh,useIsoLayoutEffect:()=>Rt,useStableId:()=>Tr,useStorage:()=>Mf});const Qa=["auto","light","dark","inverse"],xt=["none","sm","md","lg","xl"],Hn=["primary","secondary","inset","raised","floating"],wo=["circle","square","narrow"],Sr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],kt=["primary","secondary","tertiary","plain","link-style"],za=["hug","fill","icon","gutter","inline"],wt=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Ct=["inherit","tight","standard","loose"],Jr=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Se=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],At=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Vn=[...At],ze=["","auto","manual"],Ge=["toggle","show","hide"],Ee=["inherit","xl","lg","md","sm","xs"],St=["inherit","lg","md","sm"],Un=["inherit","md","sm"],Co=["inherit","wrap","truncate"],lr=["gutter","inline"],Fr=["hug","fill"],Ea=["horizontal","vertical"],ve=(r,a)=>a[r]||r,q=(r,a)=>r.filter(e=>a.includes(e)),Wr=(r,a)=>a.filter(e=>r.includes(e)),_a=(r,a)=>{r&&(typeof r=="function"?r(a):r.current=a)},ua=(r,a=0,e=100)=>Math.min(Math.max(r,a),e),ha=(r,a)=>r!==a,_e=(r,a)=>r===a,zt=({a:r,b:a})=>ha(r?.top,a?.top)||ha(r?.left,a?.left)||ha(r?.width,a?.width)||ha(r?.height,a?.height);function Ta(r){if(!(r instanceof Node))return null;const a=r.getRootNode();return a instanceof ShadowRoot||a instanceof Document?a:null}var c=ca(44062),h=ca(9608);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,Ao=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol(),Te=new WeakMap;class So{constructor(a,e,o){if(this._$cssResult$=!0,o!==qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o;const e=this.t;if(Ao&&a===void 0){const o=e!==void 0&&e.length===1;o&&(a=Te.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),o&&Te.set(e,a))}return a}toString(){return this.cssText}}const Wn=r=>new So(typeof r=="string"?r:r+"",void 0,qe),s=(r,...a)=>{const e=r.length===1?r[0]:a.reduce(((o,t,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1]),r[0]);return new So(e,r,qe)},zo=(r,a)=>{if(Ao)r.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of a){const o=document.createElement("style"),t=Ye.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=e.cssText,r.appendChild(o)}},zr=Ao?r=>r:r=>r instanceof CSSStyleSheet?(a=>{let e="";for(const o of a.cssRules)e+=o.cssText;return Wn(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fa,defineProperty:Ie,getOwnPropertyDescriptor:Et,getOwnPropertyNames:Wd,getOwnPropertySymbols:Kd,getPrototypeOf:Gd}=Object,_t=globalThis,Fi=_t.trustedTypes,Yd=Fi?Fi.emptyScript:"",qd=_t.reactiveElementPolyfillSupport,Eo=(r,a)=>r,Kn={toAttribute(r,a){switch(a){case Boolean:r=r?Yd:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,a){let e=r;switch(a){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ni=(r,a)=>!Fa(r,a),Hi={attribute:!0,type:String,converter:Kn,reflect:!1,useDefault:!1,hasChanged:Ni};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;class Ze extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=Hi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(a,o,e);t!==void 0&&Ie(this.prototype,a,t)}}static getPropertyDescriptor(a,e,o){const{get:t,set:i}=Et(this.prototype,a)??{get(){return this[e]},set(n){this[e]=n}};return{get:t,set(n){const l=t?.call(this);i?.call(this,n),this.requestUpdate(a,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Hi}static _$Ei(){if(this.hasOwnProperty(Eo("elementProperties")))return;const a=Gd(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(Eo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Eo("properties"))){const e=this.properties,o=[...Wd(e),...Kd(e)];for(const t of o)this.createProperty(t,e[t])}const a=this[Symbol.metadata];if(a!==null){const e=litPropertyMetadata.get(a);if(e!==void 0)for(const[o,t]of e)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);t!==void 0&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const e=[];if(Array.isArray(a)){const o=new Set(a.flat(1/0).reverse());for(const t of o)e.unshift(zr(t))}else a!==void 0&&e.push(zr(a));return e}static _$Eu(a,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(a.set(o,this[o]),delete this[o]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zo(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,e,o){this._$AK(a,o)}_$ET(a,e){const o=this.constructor.elementProperties.get(a),t=this.constructor._$Eu(a,o);if(t!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Kn).toAttribute(e,o.type);this._$Em=a,i==null?this.removeAttribute(t):this.setAttribute(t,i),this._$Em=null}}_$AK(a,e){const o=this.constructor,t=o._$Eh.get(a);if(t!==void 0&&this._$Em!==t){const i=o.getPropertyOptions(t),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Kn;this._$Em=t;const l=n.fromAttribute(e,i.type);this[t]=l??this._$Ej?.get(t)??l,this._$Em=null}}requestUpdate(a,e,o){if(a!==void 0){const t=this.constructor,i=this[a];if(o??=t.getPropertyOptions(a),!((o.hasChanged??Ni)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(a)&&!this.hasAttribute(t._$Eu(a,o))))return;this.C(a,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:o,reflect:t,wrapped:i},n){o&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,n??e??this[a]),i!==!0||n!==void 0)||(this._$AL.has(a)||(this.hasUpdated||o||(e=void 0),this._$AL.set(a,e)),t===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,i]of o){const{wrapped:n}=i,l=this[t];n!==!0||this._$AL.has(t)||l===void 0||this.C(t,void 0,i,l)}}let a=!1;const e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw a=!1,this._$EM(),o}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(a){}firstUpdated(a){}}Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[Eo("elementProperties")]=new Map,Ze[Eo("finalized")]=new Map,qd?.({ReactiveElement:Ze}),(_t.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gn=globalThis,Tt=Gn.trustedTypes,Vi=Tt?Tt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Yn="$lit$",re=`lit$${Math.random().toFixed(9).slice(2)}$`,qn="?"+re,Zd=`<${qn}>`,je=document,_o=()=>je.createComment(""),To=r=>r===null||typeof r!="object"&&typeof r!="function",Zn=Array.isArray,Ui=r=>Zn(r)||typeof r?.[Symbol.iterator]=="function",Xn=`[ 	
\f\r]`,Io=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wi=/-->/g,Ki=/>/g,Re=RegExp(`>|${Xn}(?:([^\\s"'>=/]+)(${Xn}*=${Xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gi=/'/g,Yi=/"/g,qi=/^(?:script|style|textarea|title)$/i,Jn=r=>(a,...e)=>({_$litType$:r,strings:a,values:e}),Ff=Jn(1),Nf=Jn(2),Hf=Jn(3),Xe=Symbol.for("lit-noChange"),Lr=Symbol.for("lit-nothing"),Zi=new WeakMap,Le=je.createTreeWalker(je,129);function Xi(r,a){if(!Zn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vi!==void 0?Vi.createHTML(a):a}const Ji=(r,a)=>{const e=r.length-1,o=[];let t,i=a===2?"<svg>":a===3?"<math>":"",n=Io;for(let l=0;l<e;l++){const d=r[l];let u,v,p=-1,g=0;for(;g<d.length&&(n.lastIndex=g,v=n.exec(d),v!==null);)g=n.lastIndex,n===Io?v[1]==="!--"?n=Wi:v[1]!==void 0?n=Ki:v[2]!==void 0?(qi.test(v[2])&&(t=RegExp("</"+v[2],"g")),n=Re):v[3]!==void 0&&(n=Re):n===Re?v[0]===">"?(n=t??Io,p=-1):v[1]===void 0?p=-2:(p=n.lastIndex-v[2].length,u=v[1],n=v[3]===void 0?Re:v[3]==='"'?Yi:Gi):n===Yi||n===Gi?n=Re:n===Wi||n===Ki?n=Io:(n=Re,t=void 0);const m=n===Re&&r[l+1].startsWith("/>")?" ":"";i+=n===Io?d+Zd:p>=0?(o.push(u),d.slice(0,p)+Yn+d.slice(p)+re+m):d+re+(p===-2?l:m)}return[Xi(r,i+(r[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),o]};class jo{constructor({strings:a,_$litType$:e},o){let t;this.parts=[];let i=0,n=0;const l=a.length-1,d=this.parts,[u,v]=Ji(a,e);if(this.el=jo.createElement(u,o),Le.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(t=Le.nextNode())!==null&&d.length<l;){if(t.nodeType===1){if(t.hasAttributes())for(const p of t.getAttributeNames())if(p.endsWith(Yn)){const g=v[n++],m=t.getAttribute(p).split(re),b=/([.?@])?(.*)/.exec(g);d.push({type:1,index:i,name:b[2],strings:m,ctor:b[1]==="."?rs:b[1]==="?"?as:b[1]==="@"?es:Ro}),t.removeAttribute(p)}else p.startsWith(re)&&(d.push({type:6,index:i}),t.removeAttribute(p));if(qi.test(t.tagName)){const p=t.textContent.split(re),g=p.length-1;if(g>0){t.textContent=Tt?Tt.emptyScript:"";for(let m=0;m<g;m++)t.append(p[m],_o()),Le.nextNode(),d.push({type:2,index:++i});t.append(p[g],_o())}}}else if(t.nodeType===8)if(t.data===qn)d.push({type:2,index:i});else{let p=-1;for(;(p=t.data.indexOf(re,p+1))!==-1;)d.push({type:7,index:i}),p+=re.length-1}i++}}static createElement(a,e){const o=je.createElement("template");return o.innerHTML=a,o}}function Pe(r,a,e=r,o){if(a===Xe)return a;let t=o!==void 0?e._$Co?.[o]:e._$Cl;const i=To(a)?void 0:a._$litDirective$;return t?.constructor!==i&&(t?._$AO?.(!1),i===void 0?t=void 0:(t=new i(r),t._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=t:e._$Cl=t),t!==void 0&&(a=Pe(r,t._$AS(r,a.values),t,o)),a}class Qi{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:e},parts:o}=this._$AD,t=(a?.creationScope??je).importNode(e,!0);Le.currentNode=t;let i=Le.nextNode(),n=0,l=0,d=o[0];for(;d!==void 0;){if(n===d.index){let u;d.type===2?u=new Je(i,i.nextSibling,this,a):d.type===1?u=new d.ctor(i,d.name,d.strings,this,a):d.type===6&&(u=new os(i,this,a)),this._$AV.push(u),d=o[++l]}n!==d?.index&&(i=Le.nextNode(),n++)}return Le.currentNode=je,t}p(a){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(a,o,e),e+=o.strings.length-2):o._$AI(a[e])),e++}}class Je{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,o,t){this.type=2,this._$AH=Lr,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=Pe(this,a,e),To(a)?a===Lr||a==null||a===""?(this._$AH!==Lr&&this._$AR(),this._$AH=Lr):a!==this._$AH&&a!==Xe&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Ui(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==Lr&&To(this._$AH)?this._$AA.nextSibling.data=a:this.T(je.createTextNode(a)),this._$AH=a}$(a){const{values:e,_$litType$:o}=a,t=typeof o=="number"?this._$AC(a):(o.el===void 0&&(o.el=jo.createElement(Xi(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(e);else{const i=new Qi(t,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(a){let e=Zi.get(a.strings);return e===void 0&&Zi.set(a.strings,e=new jo(a)),e}k(a){Zn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,t=0;for(const i of a)t===e.length?e.push(o=new Je(this.O(_o()),this.O(_o()),this,this.options)):o=e[t],o._$AI(i),t++;t<e.length&&(this._$AR(o&&o._$AB.nextSibling,t),e.length=t)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){const o=a.nextSibling;a.remove(),a=o}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}}class Ro{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,o,t,i){this.type=1,this._$AH=Lr,this._$AN=void 0,this.element=a,this.name=e,this._$AM=t,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Lr}_$AI(a,e=this,o,t){const i=this.strings;let n=!1;if(i===void 0)a=Pe(this,a,e,0),n=!To(a)||a!==this._$AH&&a!==Xe,n&&(this._$AH=a);else{const l=a;let d,u;for(a=i[0],d=0;d<i.length-1;d++)u=Pe(this,l[o+d],e,d),u===Xe&&(u=this._$AH[d]),n||=!To(u)||u!==this._$AH[d],u===Lr?a=Lr:a!==Lr&&(a+=(u??"")+i[d+1]),this._$AH[d]=u}n&&!t&&this.j(a)}j(a){a===Lr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class rs extends Ro{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===Lr?void 0:a}}class as extends Ro{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==Lr)}}class es extends Ro{constructor(a,e,o,t,i){super(a,e,o,t,i),this.type=5}_$AI(a,e=this){if((a=Pe(this,a,e,0)??Lr)===Xe)return;const o=this._$AH,t=a===Lr&&o!==Lr||a.capture!==o.capture||a.once!==o.once||a.passive!==o.passive,i=a!==Lr&&(o===Lr||t);t&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class os{constructor(a,e,o){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(a){Pe(this,a)}}const Vf={M:Yn,P:re,A:qn,C:1,L:Ji,R:Qi,D:Ui,V:Pe,I:Je,H:Ro,N:as,U:es,B:rs,F:os},Xd=Gn.litHtmlPolyfillSupport;Xd?.(jo,Je),(Gn.litHtmlVersions??=[]).push("3.3.1");const Jd=(r,a,e)=>{const o=e?.renderBefore??a;let t=o._$litPart$;if(t===void 0){const i=e?.renderBefore??null;o._$litPart$=t=new Je(a.insertBefore(_o(),i),i,void 0,e??{})}return t._$AI(r),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=globalThis;class It extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=Jd(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xe}}It._$litElement$=!0,It.finalized=!0,Qn.litElementHydrateSupport?.({LitElement:It});const Qd=Qn.litElementPolyfillSupport;Qd?.({LitElement:It});const Uf={_$AK:(r,a,e)=>{r._$AK(a,e)},_$AL:r=>r._$AL};(Qn.litElementVersions??=[]).push("4.2.1");const ru=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(to right top, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(to right top, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(to right top, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(to right top, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(to right top, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(to right top, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(to right top, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static tokens (primitive colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
  }
  [arc-gradient][arc-icon] {
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - temporary shadow mappings */
  --arc-shadow-light-none: var(--arc-shadow-none);
  --arc-shadow-light-sm: var(--arc-shadow-sm);
  --arc-shadow-light-md: var(--arc-shadow-md);
  --arc-shadow-light-lg: var(--arc-shadow-lg);
  --arc-shadow-light-xl: var(--arc-shadow-xl);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,rc={};function ir(r,a){if(typeof document<"u"&&a?.styleSheet){const e=rc[r];rc[r]=a.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==e),a.styleSheet]}}function au(r){const a=Object.values(rc),e=document.adoptedStyleSheets.filter(o=>a.includes(o));if(r.adoptedStyleSheets){const o=e.filter(t=>!r.adoptedStyleSheets.includes(t));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...o]}}function eu(r){if(typeof CSSStyleSheet<"u"){const a=new CSSStyleSheet;a.replaceSync(ru),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(a)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,a]))}}const ou=r=>r?.trim().charAt(0)??void 0,tu=(r,a)=>{let e=0;const o=Math.min(r.length,50);for(let t=0;t<o;t+=1)e=(e+r.charCodeAt(t))%(a??33);return e},nu=(r,a,e)=>a?.length?r?.trim()===""?e||a[0]:a[tu(r,a.length)]||e||a[0]:e,ts=q(Se,["blue","orange","mint","red","yellow","green","maroon","purple"]),cu=q(Se,["neutral","white","black"]),jt=q(Jr,["lg","md","sm","xs"]),iu=[...jt,"profile-sm","profile-md","profile-lg"],su=St,lu=Co,du=jt,uu=jt,hu=jt,j=s`--arc•input•mask`,f=s`--arc•size`,E=s`--arc•space`,hr=s`--arc•avatar`,Pr=s`${hr}•chars`,ac=s`

  &[data-size=lg] {
    ${hr}•font•size: var(${f}•16);
    ${hr}•size: 2.5em; /* target: 40px @ 100% */
    ${Pr}•1: var(${f}•16);
    ${Pr}•2: var(${f}•14);
    ${Pr}•3: var(${f}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${hr}•font•size: var(${f}•14);
    ${hr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${Pr}•1: var(${f}•14);
    ${Pr}•2: var(${f}•12);
    ${Pr}•3: var(${f}•10);
  }

  &[data-size=sm] {
    ${hr}•font•size: var(${f}•12);
    ${hr}•size: 2em; /* target: 24px @ 100% */
    ${Pr}•1: var(${f}•12);
    ${Pr}•2: var(${f}•10);
    ${Pr}•3: var(${f}•8);
  }

  &[data-size=xs] {
    ${hr}•font•size: var(${f}•10);
    ${hr}•size: 2em; /* target: 20px @ 100% */
    ${Pr}•1: var(${f}•10);
    ${Pr}•2: var(${f}•8);
    ${Pr}•3: var(${f}•6);
  }

`,vu=s`

  &[data-size=profile-lg] {
    ${hr}•font•size: var(${f}•40);
    ${hr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${hr}•font•size: var(${f}•32);
    ${hr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${hr}•font•size: var(${f}•28);
    ${hr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,ns=s`

  [arc-avatar] {
    ${hr}•font•size: inherit;
    ${hr}•size: inherit;
    ${Pr}•1: inherit;
    ${Pr}•2: inherit;
    ${Pr}•3: inherit;
  }

`,Me=s`${hr}•fg`,ia=s`${hr}•bg`,gu=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${Me}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${ia}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${ia}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${ia}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${ia}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${ia}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${ia}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${ia}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${ia}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${Me}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${ia}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${Me}: var(--arc-color-fg-secondary);
      ${ia}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${Me}: var(--arc-color-mono-black);
      ${ia}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${ac}
    ${vu}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${hr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${hr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${Pr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${Pr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${Pr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${hr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${ia}));
      --arc-button-color: var(--arc-avatar-color, var(${Me}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${hr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${Me}: transparent;
        ${ia}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${ia});
      color: var(${Me});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${hr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${hr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,pu=({children:r,initial:a,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"initial","data-color":e,children:r||a}),fu=({isLoaded:r,hasError:a,onLoad:e,onError:o,...t})=>{const i=!r&&""||void 0,n=a&&""||void 0,l=!r||a||void 0;return(0,c.jsx)("img",{...t,hidden:l,"data-element":"image","data-not-loaded":i,"data-has-error":n,onLoad:e,onError:o})},ec=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),oc=r=>(0,c.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,c.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),tc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),nc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),cc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),ic=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),sc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),lc=r=>(0,c.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var mu;const bu="fa-width-auto",cs="fa-fw",$u="arc-fw",is="arc-aw",yu=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,xu={"arc-svg logo-articulate":(0,c.jsx)(ec,{}),"arc-svg product-ai":(0,c.jsx)(oc,{}),"arc-svg product-peek":(0,c.jsx)(tc,{}),"arc-svg product-reach":(0,c.jsx)(nc,{}),"arc-svg product-review":(0,c.jsx)(cc,{}),"arc-svg product-rise":(0,c.jsx)(ic,{}),"arc-svg product-storyline":(0,c.jsx)(sc,{}),"arc-svg product-studio":(0,c.jsx)(lc,{})},Gf=r=>r&&r.length>0&&r?.includes("arc-svg")?xu[r]:mu("span",{className:r}),ss=r=>{const a=r.includes(bu),e=r.includes(cs),o=r.includes($u),t=r.includes(is);return{hasFaAutoWidth:a,hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}},ls=r=>((0,h.isValidElement)(r)&&r.type===cr?r.props.icon:r)??void 0,dc=r=>{const a=ls(r);if(typeof a!="string")return a;const{hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}=ss(a);return!e&&!o&&!t?`${a} ${is}`:a},ku=r=>{const a=ls(r);if(typeof a!="string")return a;let e=a;const{hasArcFixedWidth:o,hasFaFixedWidth:t}=ss(e);return o&&!t&&(e=`${e} ${cs}`),e},wu=s`--arc•icon`,ae=s`${wu}•fg`,Cu=s`
@layer arc-components {

[arc-icon] {
  ${ae}: currentcolor;

  color: var(--arc-icon-color, var(${ae}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${ae}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${ae}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${ae}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${ae}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${ae}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${ae}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${ae}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Au=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Su=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),zu=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Eu=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),_u=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Tu=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Iu=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),ju=r=>(0,c.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),cr=({children:r,icon:a="fa-regular fa-circle-dashed",color:e,size:o,style:t,gradient:i,...n})=>{const l={...t,"--arc-icon-size":yu(o),"--arc-icon-color":e},d=!!(n["aria-label"]||n["aria-labelledby"]),u=ku(a),v=typeof u=="string"&&u.length>0?(0,c.jsx)("span",{className:u}):u;return(0,c.jsx)("span",{"aria-hidden":!d||void 0,...n,"arc-icon":"",style:l,"arc-gradient":i,children:r||v})};ir("ArcIcon",Cu),cr.Articulate=Au,cr.AI=Su,cr.Peek=zu,cr.Reach=Eu,cr.Review=_u,cr.Rise=Tu,cr.Storyline=Iu,cr.Studio=ju,cr.SVGArticulate=ec,cr.SVGAI=oc,cr.SVGPeek=tc,cr.SVGReach=nc,cr.SVGReview=cc,cr.SVGRise=ic,cr.SVGStoryline=sc,cr.SVGStudio=lc;const Ru=({children:r,icon:a,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:r||(0,c.jsx)(cr,{icon:a})}),ds="blue",us="neutral",Lu="fa-solid fa-user arc-aw",uc=(0,h.forwardRef)(({children:r,size:a,color:e,isActive:o=!0,isAnonymous:t,alt:i,src:n,name:l,email:d,...u},v)=>{const[p,g]=(0,h.useState)(!1),[m,b]=(0,h.useState)(!1),$=B=>{g(!0),b(!1),u.onLoad?.(B)},k=B=>{g(!1),b(!0),u.onError?.(B)},T=ou(l||d),x=!!T,z=t||(!p||m)&&!x,y=!z&&!!n&&!m||void 0,A=(z&&us||void 0)??(e||void 0)??nu(String(d||l||void 0),ts,ds)??ds,D={src:n,alt:i,isLoaded:p,hasError:m,onLoad:$,onError:k};return(0,h.useEffect)(()=>{z&&g(!1)},[z]),(0,c.jsx)("span",{...u,ref:v,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":a,"aria-label":(u.title??l??d)||void 0,children:r||(z?(0,c.jsx)(Ru,{icon:Lu,color:us}):(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)(fu,{...D}),x&&(0,c.jsx)(pu,{initial:T,color:A})]}))})});ir("ArcAvatar",gu);const Kr=s`${hr}•text`,Be=s`${hr}•subtext`,Qe=s`${hr}•gap`,Pu=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Kr}•font•size: var(${f}•14);
    ${Be}•font•size: var(${f}•12);
    ${Qe}: var(${f}•8);

    ${Kr}•overflow: unset;
    ${Kr}•text•overflow: unset;
    ${Kr}•white•space: unset;

    &[data-overflow=truncate] {
      ${Kr}•overflow: hidden;
      ${Kr}•text•overflow: ellipsis;
      ${Kr}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Kr}•font•size: 1em;
      ${Be}•font•size: 0.875em;
      ${Qe}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Kr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Kr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Kr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Kr}•font•size: var(--arc-font-size-12);
      ${Be}•font•size: var(--arc-font-size-12);
      ${Qe}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${Qe}: var(${f}•12); }
    &[data-gap=sm] { ${Qe}: var(${f}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Kr}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${Qe});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${Be}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Kr}•overflow);
      text-overflow: var(${Kr}•text•overflow);
      white-space: var(${Kr}•white•space);
    }
  }

}
`,Mu="Anonymous",hc=({children:r,avatar:a={},subtext:e,size:o,gapSize:t,overflow:i,isStrong:n,...l})=>{const d=a.anonymousName||Mu,u=a.name||a.email||a.src,v=a.name||a.email,p=a.isAnonymous||!u,g=r||p?d:v,m=t!=="inherit"?t:void 0,b=i!=="inherit"?i:void 0;return(0,c.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":m,"data-overflow":b,"is-strong":n?"":void 0,children:[(0,c.jsx)(uc,{...a,isAnonymous:p,size:o}),(0,c.jsxs)("span",{"data-element":"text",children:[g,e&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};ir("ArcAvatarText",Pu);const Bu=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${ac}
    ${ns}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Du=({size:r="md",...a})=>(0,c.jsx)("div",{...a,"arc-avatar-pile":"","data-size":r});ir("ArcAvatarPile",Bu);const Lo=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Lo).join(""):(0,h.isValidElement)(r)?Lo(r.props.children):"",hs={},Ou=(r="id")=>{const a=(hs[r]??0)+1;return hs[r]=a,`${r}-${a}`},Tr=(r,a="id")=>{const e=(0,h.useId)();return r??`${a}-${e}`},vc=[...ze],gc=[...Qa],Fu=[...Ge],vs=q(Sr,["common"]),Nu=q(Sr,["ai","brand"]),pc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],fc=["ignore","flip"],gs=["compact","comfortable"],Po=(r,a=1/0,e=" ")=>[...r].flat(a)?.filter(Boolean)?.join(e),sa={popover:vc[0],anchorAt:pc[13],boundary:fc[0],tryFallbacks:!1,variant:vs[0],scheme:gc[0],density:gs[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},mc=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),Hu=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),bc={canAnchor:mc(),canAnchoredContainers:Hu()},ps=["center","nw-corner","ne-corner","se-corner","sw-corner"],fs=({canHaveTail:r,tailSize:a})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const e=Math.abs(Number(a||sa.tailSize)),o=e>0?e:sa.tailSize;return{cssTailVar:o===sa.tailSize?"":`${o}px`,floatingTailPx:o}},Rt=typeof window>"u"?h.useEffect:h.useLayoutEffect,ms=(r,a="toggle",e=document)=>{const o=e.getElementById(r);({toggle:()=>o?.togglePopover(),show:()=>o?.showPopover(),hide:()=>o?.hidePopover()})[a]()},Mo=new WeakMap,$c=r=>{const a=String(r??"").trim();if(a==="none")return"none";let e=a.replace(/[^\w-]/g,"-");for(;e.startsWith("-");)e=e.slice(1);for(;e.endsWith("-");)e=e.slice(0,-1);return e?`--${e}`:"--"},Bo=r=>{const a=$c(r);return a==="none"?null:a},bs=(r,a)=>{const e=Bo(a);if(!e)return()=>{};let o=Mo.get(r);return o||(o=new Set,Mo.set(r,o)),o.has(e)?()=>{}:(o.add(e),r.style.setProperty("anchor-name",Po([...o],1/0,", ")),()=>{const t=Mo.get(r);if(t){if(t.delete(e),t.size===0){Mo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Po([...t],1/0,", "))}})},$s=r=>r==="start"||r==="end"?r:"center",Vu=r=>{const a=r.split("-")[0];return a==="top"||a==="right"||a==="bottom"||a==="left"?a:null},ys=r=>{const a=Vu(r),e=$s(r.split("-")[1]);switch(a){case"top":return{block:"start",inline:e};case"bottom":return{block:"end",inline:e};case"left":return{block:e,inline:"start"};case"right":return{block:e,inline:"end"};default:return{block:"center",inline:"center"}}},xs=(r,a)=>r!=="center"&&a!=="center"&&r!==a,ks=(r,a)=>{const e=ys(r),o=ys(a),t=xs(e.block,o.block),i=xs(e.inline,o.inline);return t&&i?"flip-block-inline":t?"flip-block":i?"flip-inline":""},Uu={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},ws=r=>{r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("position"),r.style.removeProperty("margin"),delete r.dataset.fallbacks},Wu=[{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("top"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("bottom"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("bottom")&&e.includes("top"),value:1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("left"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("right"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("right")&&e.includes("left"),value:1}],Cs=(r,a,e)=>Wu.find(o=>o.test(r,a,e))?.value||0,Ku=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,offsetPx:t,tailSizePx:i,hasTail:n,isOpen:l})=>{Rt(()=>{if(!(l&&!mc()&&!!r&&!!a)){a&&ws(a);return}const u=r,v=a,p=Uu[e];let g=!0,m;return(async()=>{try{const{autoUpdate:k,computePosition:T,flip:x,offset:z}=await ca.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(ca.bind(ca,40153));if(!g)return;const y=n?Math.max(0,i)*(Math.sqrt(2)/2):0,A=[z(t)];o&&A.push(x({fallbackStrategy:"bestFit"}));const D=async()=>{try{const B=await T(u,v,{placement:p,strategy:"fixed",middleware:A}),O=B.x+y*Cs("x",B.placement,p),I=B.y+y*Cs("y",B.placement,p);if(v.style.left=`${O}px`,v.style.top=`${I}px`,!n||!o){delete v.dataset.fallbacks;return}const C=ks(p,B.placement);C?v.dataset.fallbacks=C:delete v.dataset.fallbacks}catch{}};m=k(u,v,D),await D()}catch{}})(),()=>{g=!1,m?.(),ws(v)}},[e,r,n,l,t,a,i,o])},Lt=1,ro=2,Gu=[{test:(r,a)=>a.top>=r.bottom+Lt,value:"bottom"},{test:(r,a)=>a.bottom<=r.top-Lt,value:"top"},{test:(r,a)=>a.left>=r.right+Lt,value:"right"},{test:(r,a)=>a.right<=r.left-Lt,value:"left"}],Do=r=>{delete r.dataset.fallbacks};let yc;const Yu=()=>(yc||(yc=ca.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(ca.bind(ca,40153))),yc),Pt=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),qu=(r,a,e,o)=>{const t=Pt(a),i=Pt(e);if(r==="top"||r==="bottom"){const u=Math.abs(o==="rtl"?e.right-a.right:e.left-a.left),v=Math.abs(o==="rtl"?e.left-a.left:e.right-a.right),p=Math.abs(i.x-t.x);return Math.abs(u-v)<=ro&&p<=ro||p+ro<Math.min(u,v)?"center":u<=v?"start":"end"}const n=Math.abs(e.top-a.top),l=Math.abs(e.bottom-a.bottom),d=Math.abs(i.y-t.y);return Math.abs(n-l)<=ro&&d<=ro||d+ro<Math.min(n,l)?"center":n<=l?"start":"end"},Zu=(r,a,e,o)=>{const t=Gu.find(d=>d.test(a,e));let i;if(t)i=t.value;else{const d=Pt(a),u=Pt(e),v=u.y-d.y,p=u.x-d.x,g=Math.min(a.height,e.height)*.1;Math.abs(v)>g?i=v>=0?"bottom":"top":i=p>=0?"right":"left"}if($s(r.split("-")[1])==="center")return i;const l=qu(i,a,e,o);return`${i}-${l}`},Xu=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,isOpen:t,hasTail:i})=>{Rt(()=>{if(!a||!bc.canAnchor)return;if(!i||!o||!t||bc.canAnchoredContainers||!r){Do(a);return}const n=e;if(n==="center"||n.includes("corner")){Do(a);return}const l=r,d=a;let u=!0,v;const p=()=>{const m=l.getBoundingClientRect(),b=d.getBoundingClientRect(),$=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",k=Zu(n,m,b,$),T=ks(n,k);n===k?Do(d):T?d.dataset.fallbacks=T:Do(d)};return(async()=>{try{const{autoUpdate:b}=await Yu();if(!u)return;v=b(l,d,p),p()}catch{}})(),()=>{u=!1,v?.(),Do(d)}},[e,r,i,t,a,o])},Mt=r=>typeof r=="string",As=r=>r!==null&&typeof r=="object",Ss=(r,a=" ")=>r.split(a).map(e=>e.trim()).filter(Boolean),Ju=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,xc=(0,h.forwardRef)(({progress:r,...a},e)=>(0,c.jsxs)("svg",{...a,ref:e,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,c.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,c.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));xc.displayName="ArcSpinner",ir("ArcSpinner",Ju);const Qu=(...r)=>console.log(...r),zs=(...r)=>console.warn(...r),rh=(...r)=>console.error(...r),ao=s`--arc•icon•text`,Oo=s`${ao}•font•size`,Es=s`${ao}•icon`,kc=s`${ao}•text`,_s=s`${ao}•subtext`,Ia=s`${ao}•fg`,ee=s`${ao}•gap`,ge=s`${Es}•size`,Bt=s`${Es}•vertical•align`,Fo=s`${kc}•overflow`,Dt=s`${kc}•text•overflow`,Ot=s`${kc}•white•space`,Ft=s`${_s}•font•size`,Ts=s`${_s}•fg`,ah=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${Ia}: currentcolor;
  }

  &[data-variant=primary] {
    ${Ia}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${Ia}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${Ia}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${Ia}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${Ia}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${Ia}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${Ia}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${Ia}: var(--arc-color-fg-critical-mid);
  }

`,eh=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Oo}: 1em;
    ${Ft}: 0.75em;
    ${ge}: 1em;
    ${ee}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Oo}: var(--arc-font-size-14);
    ${Ft}: var(--arc-font-size-12);
    ${ee}: var(${E}•3);
  }

  &[data-size=sm] {
    ${Oo}: var(--arc-font-size-12);
    ${Ft}: var(--arc-font-size-12);
    ${ee}: var(${E}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${ee}: var(${E}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${ee}: var(${E}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${ee}: var(${E}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${ge}: var(${f}•24); }
  &[icon-size=lg] { ${ge}: var(${f}•20); }
  &[icon-size=md] { ${ge}: var(${f}•16); }
  &[icon-size=sm] { ${ge}: var(${f}•14); }
  &[icon-size=xs] { ${ge}: var(${f}•12); }
`,oh=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Ts}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${Ia}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${ge}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Fo}: unset;
    ${Dt}: unset;
    ${Ot}: unset;

    ${Bt}: calc((var(${ge}) - var(${Oo})) / -2);

    &:has(svg) { ${Bt}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Fo}: visible;
    ${Dt}: unset;
    ${Ot}: normal;

    &[data-overflow=truncate] {
      ${Fo}: hidden;
      ${Dt}: ellipsis;
      ${Ot}: nowrap;
    }
  }

`,th=s`
@layer arc-components {

  [arc-icon-text] {
    ${ah}
    ${eh}
    ${oh}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Oo}));
    color: var(--arc-icon-text-text-color, var(${Ia}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${ee}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Fo}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Ft}));
        color: var(--arc-icon-text-subtext-color, var(${Ts}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Fo}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Dt}));
        white-space: var(--arc-icon-text-white-space, var(${Ot}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${Bt}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${ee})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${ee})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${Bt}: text-bottom;
      }
    }
  }
}

`,nh=q(Sr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Qr=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="span",icon:i,iconTooltip:n,text:l,subtext:d,gradient:u,overflow:v,iconSize:p,gapSize:g,isFlipped:m=!1,isStrong:b=!1,...$})=>{const k=r||l,T=!!i,x=!!k,z=a==="gutter",y=a==="inline",A=T&&(!m||z),D=T&&x&&m&&y,B=!!p&&p!=="inherit",O=B&&Ee.includes(p)?p:void 0,I=B&&!Ee.includes(p)?p:void 0,C=g!=="inherit"?g:void 0,U=v!=="inherit"?v:void 0,H=dc(i),rr=typeof H=="string"?(0,c.jsx)(cr,{icon:H,size:I,gradient:u}):H,W=n?(0,c.jsx)(qt,{text:n,children:rr}):rr;return(0,c.jsxs)(t,{...$,"arc-icon-text":"","data-variant":o,"data-layout":a,"data-overflow":U,"data-size":e,"data-gap":C,"icon-size":O,"is-flipped":m?"":void 0,"is-strong":b?"":void 0,children:[A&&(0,c.jsx)("span",{"data-element":"icon",children:W}),x&&(0,c.jsxs)("span",{"data-element":"text",children:[k,!!d&&(z?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:d})]}):(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)("span",{"data-element":"subtext",children:d})]}))]}),D&&(0,c.jsx)("span",{"data-element":"icon",children:W})]})};ir("ArcIconText",th);const ja={...sa,popover:vc[2],anchorAt:pc[2],boundary:fc[1],tryFallbacks:!0,scheme:gc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Nt=new WeakSet,ch=100,ih=100;let wc=!0,Cc=null;const sh=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),lh=r=>r instanceof Element?sh?r.matches(":focus-visible")===!0:wc:!1,Ac=new WeakMap,Sc=new WeakMap,No=new Set,Ht=(r,a)=>{const e=r.get(a);e!=null&&(clearTimeout(e),r.delete(a))},Is=(r,a,e,o)=>{const t=window.setTimeout(()=>{o(),r.delete(a)},e);r.set(a,t)},js="[aria-describedby]",dh=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,Rs=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&dh(r),uh=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),hh=r=>r?.match(/\S+/g)??[],zc=(r,a)=>{const e=Ta(a??document.documentElement);if(!e)return null;const o=e.querySelector(`[aria-describedby~="${r}"]`);return o?o.closest("label,[arc-label]")??o:null},vh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.(js);if(a){const o=a.getAttribute("aria-describedby")??"";if(o)return{anchor:a.closest?.("label,[arc-label]")??a,tooltipId:o}}let e=r;for(;e;){if(uh(e)){const o=e.querySelector?.(js),t=o?.getAttribute?.("aria-describedby")??"";if(o&&t)return{anchor:e,tooltipId:t}}e=e.parentElement}return null},gh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.('[role="tooltip"][popover]')??null;return a instanceof HTMLElement?a:null},ph=r=>r?.id?zc(r.id,r):null,fh=r=>{const a=gh(r),e=vh(r);if(!e&&a){const d=ph(a);return!d||!a.id?null:{anchor:d,tooltip:a}}if(!e)return null;const{anchor:o,tooltipId:t}=e;if(!t)return null;const i=Ta(r);if(!i)return null;const n=hh(t),l=a??n.map(d=>i.getElementById(d)).find(d=>Rs(d))??null;return Rs(l)?{anchor:o,tooltip:l}:null},mh=(r,a,e)=>{const o=e instanceof Element?e:null;if(!o)return!1;const t=r===o||r.contains(o),i=a===o||a.contains(o);return t||i},Ls=r=>{r.isConnected&&(r.showPopover?.(),No.add(r))},Ps=r=>{r.isConnected&&(r.hidePopover?.(),No.delete(r))},bh=(r,a)=>{if(Ht(Sc,r),Ht(Ac,r),!a){Ls(r);return}Is(Ac,r,ch,()=>Ls(r))},Ec=(r,a)=>{if(Ht(Ac,r),Ht(Sc,r),!a){Ps(r);return}Is(Sc,r,ih,()=>Ps(r))},$h=()=>{No.forEach(r=>{Ec(r,!1)})},Ho=(r,a,e,o)=>{const t=fh(a);if(!t)return;const{anchor:i,tooltip:n}=t;if(r){bh(n,o);return}mh(i,n,e)||Ec(n,o)};let Vt=null,Ut=null,Wt=null,Kt=null,Gt=null,Yt=null,eo=null,Vo=null;const Ms=r=>{if(!r&&typeof document>"u")return;const a=r?Ta(r):document;if(!a||Nt.has(a))return;Yt=o=>{wc=!1,Cc=o.target},eo=()=>{Cc=null},Vt=o=>Ho(!0,o.target,void 0,!0),Wt=o=>Ho(!1,o.target,o.relatedTarget,!0),Ut=o=>{lh(o.target)&&Ho(!0,o.target,void 0,!1)},Kt=o=>{const t=o.relatedTarget??Cc;Ho(!1,o.target,t,!1)},Gt=o=>{o.key==="Tab"&&(wc=!0),o.key==="Escape"&&(No.size>0&&o.preventDefault(),Ho(!1,o.target,void 0,!1),No.forEach(t=>Ec(t,!1)))},Vo=o=>{if(o.newState!=="open")return;const{target:t}=o;if(t instanceof HTMLElement&&t.getAttribute("role")!=="tooltip"&&t.getAttribute("popover")!=="manual"){try{if(!t.matches("[popover]:popover-open"))return}catch{return}$h()}},[["pointerdown",Yt],["pointerup",eo],["pointercancel",eo],["pointerover",Vt],["focusin",Ut],["pointerout",Wt],["focusout",Kt],["keydown",Gt]].forEach(([o,t])=>{a.addEventListener(o,t)}),a.addEventListener("toggle",Vo,!0),Nt.add(a)},yh=()=>{if(!Nt.has(document)||typeof document>"u")return;[["pointerdown",Yt],["pointerup",eo],["pointercancel",eo],["pointerover",Vt],["focusin",Ut],["pointerout",Wt],["focusout",Kt],["keydown",Gt]].forEach(([a,e])=>{e&&document.removeEventListener(a,e)}),Vo&&document.removeEventListener("toggle",Vo,!0),Vt=null,Ut=null,Wt=null,Kt=null,Gt=null,Yt=null,eo=null,Vo=null,Nt.delete(document)},Ra=s`--arc•tooltip`,Bs=s`${Ra}•subtext`,Ds=s`${Ra}•slot`,xh=s`
@layer arc-components {
  [arc-tooltip] {
    ${Ra}•width: max-content;
    ${Ra}•max•width: 20em;
    ${Ra}•font•size: var(${f}•12);
    ${Ra}•padding: var(${E}•10);
    ${Bs}•spacing: var(${E}•6);
    ${Ds}•margin•top: var(${E}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${Ra}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${Ra}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${Ra}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${Ra}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${Ra}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${Bs}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${Ds}•margin•top));
    }
  }
}
`,qt=(0,h.forwardRef)(({id:r,children:a,slot:e,isEnabled:o=ja.isEnabled,popover:t=ja.popover,variant:i=ja.variant,anchorAt:n=ja.anchorAt,alternateAnchor:l,boundary:d=ja.boundary,tryFallbacks:u=ja.tryFallbacks,hasTail:v=ja.hasTail,offset:p=ja.offset,scheme:g=ja.scheme,isStrong:m=ja.isStrong,text:b,subtext:$,icon:k,isFlipped:T,...x},z)=>{const y=Tr(r,"arc-tooltip"),A=(0,h.useRef)(null);(0,h.useImperativeHandle)(z,()=>A.current);const D=H=>typeof H=="object"&&H!==null&&"tabIndex"in H,B=a,O=!!l;let I=null;(0,h.isValidElement)(B)?I=o?(0,h.cloneElement)(B,{"aria-describedby":y,...D(B.props)&&B.props.tabIndex!=null?{}:{tabIndex:0}}):B:!O&&typeof console<"u"&&zs("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const C=(0,h.useMemo)(()=>()=>zc(y,A.current),[y]),U=g==="auto"?void 0:g;return(0,h.useEffect)(()=>{if(o)try{Ms(A.current)}catch{}},[o]),(0,c.jsxs)(c.Fragment,{children:[I,o&&(0,c.jsxs)(oe,{...x,"arc-tooltip":"",scheme:x?.isInverse?"inverse":U,role:"tooltip",id:y,ref:A,popover:t,anchorAt:n,tryFallbacks:u??d==="flip",variant:i,hasTail:v,offset:p,hidePopoverButton:!0,alternateAnchor:l??C,tag:x?.tag??"span",contentTag:x?.contentTag??"span",children:[b&&(0,c.jsx)(Qr,{"arc-tooltip-content":"",text:b,subtext:$,icon:k,isFlipped:T,isStrong:m,size:"inherit",variant:"inherit"}),e&&(0,c.jsx)("span",{"arc-tooltip-slot-content":"",children:e})]})]})});ir("ArcTooltip",xh);const kh=q(wo,["circle","square","narrow"]),wh=q(Jr,["xxl","xl","lg","md","sm"]),Ch=q(za,["hug","fill","icon"]),Ah=q(Sr,["common","ai","critical","alpha"]),Sh=[...Qa],zh=[...xt],Os=q(Sr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Eh=q(kt,["primary","secondary","tertiary","plain","link-style"]),_h=[...Ge],Th=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* common-secondary variant floating button */
  --arc-button-common-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-common-secondary-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));
  --arc-button-common-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-common-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* critical-secondary variant floating button */
  --arc-button-critical-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-secondary-floating-bg-active: var(--arc-color-bg-critical-muted);
  --arc-button-critical-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-critical-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* ai-secondary variant floating button */
  --arc-button-ai-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-ai-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-ai-secondary-floating-bg-focus: var(--arc-color-bg-primary);
}
`,Ih=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,jh=s`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,Rh=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
  --arc-banner-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
  --arc-banner-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
}
`,S=s`--arc•button`,L=s`${S}•fg`,w=s`${S}•bg`,tr=s`${S}•edge`,ra=s`${S}•border`,oo=s`${S}•outline`,ur=s`${S}•spinner`,Gr=s`${S}•icon`,Lh=s`
  &[data-size=xxl] {
    ${S}•font•size: var(${f}•16);
    ${ur}•size: var(${f}•32);
    ${Gr}•size: var(${f}•20);
    ${Gr}•size•large: var(${f}•24);
    ${S}•height: var(${f}•56);
    ${S}•gap: var(${f}•10);
    ${S}•padding•inline: var(${f}•32);
  }

  &[data-size=xl] {
    ${S}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${Gr}•size: var(${f}•16);
    ${Gr}•size•large: var(${f}•20);
    ${S}•height: var(${f}•48);
    ${S}•gap: var(${f}•8);
    ${S}•padding•inline: var(${f}•32);
  }

  &[data-size=lg] { /** @default */
    ${S}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${Gr}•size: var(${f}•16);
    ${Gr}•size•large: var(${f}•20);
    ${S}•height: var(${f}•40);
    ${S}•gap: var(${f}•8);
    ${S}•padding•inline: var(${f}•20);
  }

  &[data-size=inherit] {
    ${S}•font•size: 1em;
    ${ur}•size: 1em;
    ${Gr}•size: 1em;
    ${Gr}•size•large: 1.25em;
    ${S}•gap: 0.5em;
    ${S}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${S}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${Gr}•size: var(${f}•14);
    ${Gr}•size•large: var(${f}•20);
    ${S}•height: var(${f}•32);
    ${S}•gap: var(${f}•6);
    ${S}•padding•inline: var(${f}•16);
  }

  &[data-size=sm] {
    ${S}•font•size: var(${f}•12);
    ${ur}•size: var(${f}•14);
    ${Gr}•size: var(${f}•12);
    ${Gr}•size•large: var(${f}•14);
    ${S}•height: var(${f}•24);
    ${S}•gap: var(${f}•4);
    ${S}•padding•inline: var(${f}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${S}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${Gr}•size: var(${f}•16);
    ${Gr}•size•large: var(${f}•20);
    ${S}•gap: var(${f}•8);
    ${S}•padding•inline: var(${f}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,Ph=s`
  &[data-layout=hug] {
    ${S}•width: auto;
    ${S}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${S}•display: flex;
    ${S}•width: 100%;
    ${S}•content•width: 0;
  }

  &[data-layout=icon] {
    ${S}•aspect•ratio: 1 / 1;
    ${S}•flex: none;
    ${S}•min•width: min-content;
    ${S}•max•width: none;
    ${S}•padding•inline: var(${f}•0);

    &[data-shape=narrow] {
      ${S}•aspect•ratio: auto;
      ${S}•padding•inline: var(${f}•2);
    }
  }

`,Mh=s`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${L}: inherit;
    ${w}: transparent;
    ${tr}: transparent;
    ${L}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${L}: var(--arc-color-fg-on-theme-heavy);
    ${w}: var(--arc-color-bg-theme-heavy);
    ${tr}: transparent;

    ${L}•active: var(--arc-color-fg-on-theme-mid);
    ${L}•processing: var(--arc-color-fg-on-theme-stark);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-theme-stark);
    ${w}•active: var(--arc-color-bg-theme-mid);
    ${w}•processing: var(--arc-color-bg-theme-stark);
    ${w}•disabled: var(--arc-color-bg-disabled);

    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${L}: var(--arc-color-fg-primary);
    ${tr}: var(--arc-color-border-theme-heavy);

    ${L}•active: var(--arc-color-fg-secondary);
    ${L}•processing: var(--arc-color-fg-secondary);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${tr}•active: var(--arc-color-border-theme-mid);
    ${tr}•processing: var(--arc-color-border-theme-subtle);
    ${tr}•disabled: var(--arc-color-border-disabled);

    &[data-layout=icon] {
      ${tr}: var(--arc-color-border-mid);
      ${tr}•hover: var(--arc-color-border-stark);
      ${tr}•focus: var(--arc-color-border-mid);
    }

    &[data-hierarchy=secondary] {
      ${w}: transparent;
      ${w}•hover: var(--arc-color-bg-neutral-muted);
      ${w}•active: var(--arc-color-bg-neutral-subtle);
      ${w}•processing: transparent;
      ${w}•disabled: transparent;
      ${w}•focus: var(--arc-color-alpha-white-3);
    }
  }

  &[data-variant=secondary]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${w}: var(--arc-color-mono-white);
    ${w}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-white);
    ${w}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-white);
    ${w}•processing: var(--arc-color-mono-white);
    ${w}•disabled: var(--arc-color-mono-white);
    ${w}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-white);
  }

  &[data-variant=secondary-inverse]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${w}: var(--arc-color-mono-black);
    ${w}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-black);
    ${w}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-black);
    ${w}•processing: var(--arc-color-mono-black);
    ${w}•disabled: var(--arc-color-mono-black);
    ${w}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-black);
  }

  /* "floating" button mitigation */
  &:is([data-variant=secondary], [data-variant=secondary-inverse])[arc-shadow] {
    ${w}: var(--arc-button-common-secondary-floating-bg);
    ${w}•hover: var(--arc-button-common-secondary-floating-bg-hover);
    ${w}•active: var(--arc-button-common-secondary-floating-bg-active);
    ${w}•processing: var(--arc-button-common-secondary-floating-bg-processing);
    ${w}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
    ${w}•focus: var(--arc-button-common-secondary-floating-bg-focus);
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${L}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•active: var(--arc-color-fg-secondary);
    ${L}•processing: var(--arc-color-fg-secondary);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-neutral-muted);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-neutral-muted);
    ${w}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${L}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•hover: var(--arc-color-alpha-heavy);
    ${L}•active: var(--arc-color-alpha-heavy);
    ${L}•processing: var(--arc-color-alpha-heavy);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: transparent;
    ${w}•active: transparent;
    ${w}•processing: transparent;
  }

`,Bh=s`
  &[data-variant=ai-primary] {
    ${L}: var(--arc-color-fg-on-theme-stark);
    ${w}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${ur}•base•color: var(--arc-color-alpha-white-30);

    ${L}•active: var(--arc-color-fg-neutral-mid);
    ${L}•processing: var(--arc-color-fg-on-theme-heavy);
    ${L}•hover: var(--arc-color-fg-on-theme-heavy);

    ${w}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${w}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${w}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${L}: var(--arc-color-fg-primary);
    ${w}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${L}•active: var(--arc-color-fg-neutral-stark);
    ${L}•processing: var(--arc-color-fg-primary);

    ${w}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${w}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•disabled: var(--arc-color-bg-disabled);
    ${w}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${w}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${w}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${w}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${tr}: transparent;

    ${L}•disabled: var(--arc-color-fg-disabled);
    ${tr}•disabled: var(--arc-color-border-disabled);
  }

`,Dh=s`
  &[data-variant=alpha-primary] {
    ${L}: var(--arc-color-mono-black);
    ${w}: var(--arc-color-mono-white);
    ${tr}: transparent;

    ${L}•focus: var(--arc-color-mono-black);
    ${L}•active: var(--arc-color-alpha-black-60);
    ${L}•processing: var(--arc-color-mono-black);
    ${L}•disabled: var(--arc-color-alpha-black-60);

    ${w}•hover: var(--arc-color-alpha-white-70);
    ${w}•focus: var(--arc-color-mono-white);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-40);
    ${w}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${L}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: var(--arc-color-alpha-white-80);

    ${L}•active: var(--arc-color-alpha-white-80);
    ${L}•processing: var(--arc-color-alpha-white-95);
    ${L}•disabled: var(--arc-color-alpha-white-50);

    ${w}•hover: var(--arc-color-alpha-white-20);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-25);
    ${w}•disabled: transparent;

    ${tr}•hover: var(--arc-color-alpha-white-100);
    ${tr}•focus: var(--arc-color-alpha-white-80);
    ${tr}•active: var(--arc-color-alpha-white-50);
    ${tr}•processing: transparent;
    ${tr}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${L}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•active: var(--arc-color-alpha-black-60);
    ${L}•processing: var(--arc-color-alpha-white-95);
    ${L}•disabled: var(--arc-color-alpha-white-50);

    ${w}•hover: var(--arc-color-alpha-white-20);
    ${w}•focus: var(--arc-color-alpha-white-5);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-20);
    ${w}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${L}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•hover: var(--arc-color-alpha-white-60);
    ${L}•active: var(--arc-color-alpha-white-40);
    ${L}•processing: var(--arc-color-alpha-white-95);
    ${L}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }
`,Oh=s`
  &[data-variant=link-style] {
    ${L}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•hover: var(--arc-color-alpha-heavy);
    ${L}•active: var(--arc-color-alpha-heavy);
    ${L}•processing: var(--arc-color-alpha-heavy);
    ${L}•disabled: var(--arc-color-fg-disabled);
  }
`,Fh=s`
  &[data-variant=critical-primary] {
    ${L}: var(--arc-color-fg-on-stark);
    ${w}: var(--arc-color-bg-critical-stark);
    ${tr}: transparent;

    ${L}•active: var(--arc-color-fg-critical-subtle);
    ${L}•processing: var(--arc-color-fg-on-heavy);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-critical-heavy);
    ${w}•active: var(--arc-color-bg-critical-heavy);
    ${w}•processing: var(--arc-color-bg-critical-heavy);
    ${w}•disabled: var(--arc-color-bg-disabled);

    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${L}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: var(--arc-color-border-critical-stark);

    ${L}•active: var(--arc-color-fg-critical-subtle);
    ${L}•processing: var(--arc-color-fg-critical-stark);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-button-critical-bg-hover);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-critical-muted);
    ${w}•disabled: transparent;

    ${tr}•active: var(--arc-color-border-critical-subtle);
    ${tr}•processing: var(--arc-color-border-critical-stark);
    ${tr}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${w}: var(--arc-button-critical-secondary-floating-bg);
      ${w}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${w}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${w}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${w}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${w}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${L}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•active: var(--arc-color-fg-critical-subtle);
    ${L}•processing: var(--arc-color-fg-critical-stark);
    ${L}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-button-critical-bg-hover);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-critical-subtle);
    ${w}•processing: var(--arc-color-bg-critical-muted);
    ${w}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${L}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: transparent;

    ${L}•hover: var(--arc-color-fg-critical-mid);
    ${L}•active: var(--arc-color-fg-critical-subtle);
    ${L}•processing: var(--arc-color-fg-critical-stark);
    ${L}•disabled: var(--arc-color-fg-disabled);
  }

`,Nh=s`
  ${S}•color: var(${L});
  ${S}•background: var(${w});
  ${S}•font•weight: var(--arc-font-weight-600);
  ${S}•padding: 0 var(${S}•padding•inline);
  ${S}•content•opacity: 1;
  ${S}•cursor: var(--arc-button-cursor, pointer);
  ${S}•transition: 0.2s ease-out;

  ${ra}•color: var(${tr});
  ${ra}: var(--arc-border-width-sm) solid var(${ra}•color, transparent);

  ${oo}: var(--arc-border-width-md) solid var(${oo}•color, transparent);
  ${oo}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${ur}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${ur}•circle•color: var(--arc-button-color, var(${ur}•base•color, var(--arc-color-alpha-mid)));
  ${ur}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${S}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${ra}: var(--arc-border-width-md) solid var(${ra}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${ra}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${ra}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${S}•padding: unset;
    ${S}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${ra}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${S}•font•weight: inherit;
    ${S}•text•decoration: none;

    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${Gr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Gr}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${ur}•size);
  --arc-spinner-progress-color: var(${ur}•progress•color);
  --arc-spinner-circle-color: var(${ur}•circle•color);
  --arc-spinner-circle-opacity: var(${ur}•circle•opacity);
  --arc-spinner-position: var(${ur}•position, absolute);
  --arc-spinner-inset: var(${ur}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${ur}•translate, -50% -50%);

`,Hh=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${S}•position: relative;
  }

  &[is-disabled] {
    ${S}•color: var(${L}•disabled, var(${L}));
    ${S}•background: var(${w}•disabled, var(${w}));
    ${ra}•color: var(${tr}•disabled, var(${tr}));
    ${S}•opacity: var(--arc-button-disabled-opacity, unset);
    ${S}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${S}•color: var(${L}•hover, var(${L}));
      ${S}•background: var(${w}•hover, var(${w}));
      ${ra}•color: var(${tr}•hover, var(${tr}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${S}•color: var(${L}•active, var(${L}));
      ${S}•background: var(${w}•active, var(${w}));
      ${ra}•color: var(${tr}•active, var(${tr}));
    }
  }

  &[is-processing] {
    ${S}•content•visibility: hidden;
    ${S}•content•opacity: 0;

    /* spinner svg position controls */
    ${ur}•position: absolute;
    ${ur}•inset: 50% auto auto 50%;
    ${ur}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${S}•content•visibility: visible;

    /* spinner svg position controls */
    ${ur}•position: relative;
    ${ur}•inset: 0;
    ${ur}•translate: 0;
    ${ur}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${S}•opacity: var(--arc-button-processing-opacity, unset);
    ${S}•cursor: var(--arc-button-processing-cursor, default);

    ${S}•color: var(${L}•processing, var(${L}));
    ${S}•background: var(${w}•processing, var(${w}));
    ${ra}•color: var(${tr}•processing, var(${tr}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${ur}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${S}•color: var(${L}•focus, var(${L}));
    ${S}•background: var(${w}•focus, var(${w}));
    ${ra}•color: var(${tr}•focus, var(${tr}));
    ${oo}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Vh=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Th}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${Lh}

    /* LAYOUTS -----------------------------------------------------• */
    ${Ph}

    /* VARIANTS ----------------------------------------------------• */
    ${Mh}
    ${Oh}
    ${Bh}
    ${Dh}
    ${Fh}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Nh}
    ${Hh}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${S}•cursor));
    position: var(--arc-button-position, var(${S}•position, unset));
    transition: var(--arc-button-transition, var(${S}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${S}•font•weight));
    font-size: var(--arc-button-font-size, var(${S}•font•size, inherit));
    padding: var(--arc-button-padding, var(${S}•padding));

    width: var(--arc-button-width, var(${S}•width, auto));
    min-width: var(--arc-button-min-width, var(${S}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${S}•max•width, 100%));

    height: var(--arc-button-height, var(${S}•height, auto));
    min-height: var(--arc-button-min-height, var(${S}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${S}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${S}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${S}•color));
    background: var(--arc-button-background, var(${S}•background));
    border: var(--arc-button-border, var(${ra}));
    border-radius: var(--arc-button-border-radius, var(${ra}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${oo}));
    outline-offset: var(--arc-button-outline-offset, var(${oo}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    /* "floating" button mitigation */
    &[arc-shadow] {
      backdrop-filter: blur(0.5em);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(${S}•gap));

      opacity: var(--arc-button-content-opacity, var(${S}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${S}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${S}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${S}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${S}•opacity));
      transition: var(--arc-button-label-transition, var(${S}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${S}•opacity));
      transition: var(--arc-button-icon-transition, var(${S}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${S}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Fs=(0,c.jsx)(xc,{}),xr=(0,h.forwardRef)(({children:r,disabled:a,...e},o)=>{const t=(0,h.useRef)(null),{iconEnd:i,iconStart:n,icon:l,text:d,isActive:u,isDisabled:v,isProcessing:p,isProcessingWithText:g,hasLargeIcon:m,tag:b,href:$,type:k,title:T,layout:x,shape:z,size:y="lg",variant:A="common",hierarchy:D="primary",isInverse:B=!1,scheme:O="auto",shadow:I,_isCustom:C,...U}=e,H=b??($?"a":"button"),rr=H==="button"?k||"button":void 0,W=x==="icon",or=g||p||v||a,nr=U?.["aria-disabled"]||or||void 0,vr=!W&&(r||d),M=g&&Fs||n||l,F=!W&&(g&&!(n||l)?void 0:i),N=(p||g&&W)&&Fs,R=A&&Os.includes(A),er=(()=>{if(R)return A;const he=D||"primary";if(A==="ai"){const Of=["primary","secondary"].includes(he)?he:"primary";return`${A}-${Of}`}return he==="link-style"?A==="critical"||A==="alpha"?`${A}-${he}`:"link-style":A==="common"?he:A==="alpha"||A==="critical"?`${A}-${he}`:A})(),Z=O==="auto"?void 0:O,K=er?.endsWith("-inverse")?"inverse":void 0,_=B?"inverse":Z??K,X=I===!0?"lg":I,{tooltip:dr,...$r}=U,Vr=Mt(dr)?dr:void 0,Oa=e.tooltip??Vr,Ur=!!Oa,Za=Mt(Oa)?{text:Oa}:Oa,Cr=U["aria-describedby"],Sa=(0,h.useRef)(void 0),de=Tr(void 0,"arc-tooltip"),Ce=e.id?`${e.id}-tooltip`:de;Ur&&!Sa.current&&(Sa.current=Ce);const ue=Ur?Po([Cr,Sa.current]):Cr,{anchorName:Fn,style:xo,popoverTarget:Ke,popoverTargetAction:Xa,...J}=$r,Ar=Ke?Bo(String(Fn||e?.id)):void 0,Zr=Ur?Bo(String(Ce)):void 0,Xr=As(xo)?xo:void 0,Ja=Xr&&"anchorName"in Xr&&Xr.anchorName,Ae=[...(Mt(Ja)?Ss(Ja,", "):[]).map(Bo),...Ar?[Ar]:[],...Zr?[Zr]:[]],Nn=Po(Ae,1/0,", "),Di={...Xr??{},...Nn?{anchorName:Nn}:{}};let Ud={popoverTarget:Ke||void 0,popoverTargetAction:Xa||void 0};return h.version.startsWith("18")&&(Ud={popovertarget:Ke||void 0,popovertargetaction:Xa||void 0}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(H,{...J,...Ud,ref:he=>{t.current=he,_a(o,he)},"arc-button":C?"custom":"","arc-scheme":_,"arc-shadow":X||void 0,disabled:!$&&or||void 0,href:$||void 0,title:Ur?void 0:T||void 0,type:rr,"data-layout":x,"data-shape":C?void 0:z,"data-size":C?void 0:y,"data-variant":C?void 0:er,"data-hierarchy":D||void 0,"has-large-icon":m?"":void 0,"is-active":u?"":void 0,"is-processing":p||g&&W?"":void 0,"is-processing-with-text":g&&!W?"":void 0,"is-disabled":or||nr?"":void 0,"aria-disabled":nr,"aria-describedby":ue||void 0,style:Di,children:[(0,c.jsxs)("span",{"arc-button-content":"",children:[M&&typeof M=="string"?(0,c.jsx)(cr,{"arc-button-icon":"",icon:M}):M&&(0,c.jsx)("span",{"arc-button-icon":"",children:M}),!!vr&&(0,c.jsx)("span",{"arc-button-label":"",children:vr}),F&&typeof F=="string"?(0,c.jsx)(cr,{"arc-button-icon":"",icon:F}):F&&(0,c.jsx)("span",{"arc-button-icon":"",children:F})]}),N]}),Ur&&(0,c.jsx)(qt,{...Za,id:Sa.current,alternateAnchor:Za?.alternateAnchor??(()=>t.current),anchorName:Zr})]})});xr.displayName="ArcButton",ir("ArcButton",Vh);const Uo=(0,h.forwardRef)((r,a)=>(0,c.jsx)(xr,{...r,ref:a,"arc-popover-button":""})),Ns=({isInverse:r=!1,isOpen:a,...e})=>(0,c.jsx)(xr,{icon:"fa-regular fa-xmark",text:"Dismiss",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),Uh=({isInverse:r=!1,...a})=>(0,c.jsx)(xr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),Wh=({children:r,isSticky:a,showDivider:e,showDismiss:o,dismissProps:t,showGoBack:i,goBackProps:n,headerSlotEnd:l,tag:d="header",...u})=>(0,c.jsx)(d,{...u,"arc-popover-header":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,c.jsxs)("div",{"arc-popover-display":"",children:[(0,c.jsxs)("div",{"arc-popover-header-slot":"start",children:[i&&(0,c.jsx)(Uh,{...n}),r]}),(0,c.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,o&&(0,c.jsx)(Ns,{...t})]})]})}),Kh=({children:r,tag:a="article",...e})=>(0,c.jsx)(a,{...e,"arc-popover-body":"",children:(0,c.jsx)("div",{"arc-popover-display":"",children:r})}),Gh=({children:r,isSticky:a,showDivider:e,tag:o="footer",...t})=>(0,c.jsx)(o,{...t,"arc-popover-footer":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,c.jsx)("div",{"arc-popover-display":"",children:r})});Uo.displayName="ArcPopoverButton";const P=s`--arc-popover`,Nr=s`--arc•popover`,Q=s`--arc•trail•mix`,_c=s`${Nr}•radius`,Yh=s`${Nr}•content`,Zt=s`${Nr}•outline`,aa=s`${Nr}•offset`,Na=s`${Nr}•header`,qh=s`${Nr}•body`,Tc=s`${Nr}•divider`,Xt=s`${Nr}•footer`,La=s`${Nr}•tail`,gr=s`${La}•top`,pr=s`${La}•left`,Wo=s`${La}•size`,va=s`${La}•x`,ga=s`${La}•y`,Ic=s`${Nr}•font•size`,Jt=s`${Nr}•padding`,ea=s`${Nr}•margin`,to=s`${Na}•padding`,ba=s`${qh}•padding`,Ha=s`${Xt}•padding`,Hs=s`${Nr}•fg`,Qt=s`${Nr}•bg`,rn=s`${Yh}•bg`,an=s`${La}•fill•a`,en=s`${La}•fill•b`,on=s`${La}•edge•a`,tn=s`${La}•edge•b`,Zh=s`

  ${Nr}•fallback: none;
  ${Zt}: var(${P}-outline-size, var(--arc-border-width-md));
  ${_c}: var(${P}-border-radius, var(--arc-border-radius-lg));
  ${aa}: var(${P}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${Jt}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${Q}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${va}: var(${P}-tail-x, 1.75em);
  ${ga}: var(${P}-tail-y, 1.125em);
  ${Wo}: 0px;

  &:where([has-tail]) {
    ${Wo}: var(${P}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${aa}: calc(var(${P}-offset, var(--js•offset, 0px)) + var(${Wo}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${Jt}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ba}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ba}•block•end: 0; }
  }

`,Xh=s`

  /* default variant: common */
  &[variant] {
    ${Hs}: var(--arc-color-fg-primary);
    ${Qt}: var(${P}-background, var(--arc-color-bg-mono)) border-box;
    ${rn}: var(${P}-background, var(--arc-color-bg-mono)) padding-box;
    ${an}: var(${P}-background, var(--arc-color-bg-mono));
    ${en}: var(${P}-background, var(--arc-color-bg-mono));
    ${on}: var(${P}-background, var(--arc-color-bg-mono));
    ${tn}: var(${P}-background, var(--arc-color-bg-mono));
    ${Nr}•shadow: var(--arc-shadow-lg);
    ${Tc}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${Qt}: var(--arc-color-border-brand-mid) border-box;
    ${rn}: var(--arc-color-bg-brand-muted) padding-box;
    ${an}: var(--arc-color-bg-brand-muted);
    ${en}: var(--arc-color-bg-brand-muted);
    ${on}: var(--arc-color-border-brand-mid);
    ${tn}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${Qt}: var(--arc-gradient-ai-200) border-box;
    ${rn}: var(--arc-gradient-ai-50) padding-box;
    ${an}: var(${P}-ai-purple-50);
    ${en}: var(${P}-ai-blue-50);
    ${on}: var(${P}-ai-purple-200);
    ${tn}: var(${P}-ai-blue-200);
  }

`,Jh=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Ic}: 0.75em;
    ${Na}•gap: 0.75em;
    ${to}•block: 0.75em;
    ${to}•inline: 0.75em;

    ${ba}•block: 0.75em;
    ${ba}•inline: 0.75em;

    ${Xt}•gap: 0.75em;
    ${Ha}•inline: 0.75em;
    ${Ha}•block•start: 0.75em;
    ${Ha}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Ic}: 0.875em;
    ${Na}•gap: 1.125em;
    ${to}•block: 1em;
    ${to}•inline: 1.25em;

    ${ba}•block: 1.25em;
    ${ba}•inline: 1.25em;

    ${Xt}•gap: 1.125em;
    ${Ha}•inline: 1.25em;
    ${Ha}•block•start: 1em;
    ${Ha}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${Jt}: 1.25em;
    }
  }

`,Ko={TOP:s`
    &[anchor-at*='top-'] {
      ${ea}: 0 0 var(${aa}) 0;
      ${gr}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${Q}: 95%;
      ${pr}: calc(0% + var(${va}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${Q}: 75%;
      ${pr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${Q}: 53.5%;
      ${pr}: calc(100% - var(${va}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${ea}: 0 0 0 var(${aa});
      ${pr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${Q}: 53.5%;
      ${gr}: calc(0% + var(${ga}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${Q}: 75%;
      ${gr}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${Q}: 95%;
      ${gr}: calc(100% - var(${ga}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${ea}: var(${aa}) 0 0 0;
      ${gr}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${Q}: 5%;
      ${pr}: calc(100% - var(${va}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${Q}: 25%;
      ${pr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${Q}: 47.5%;
      ${pr}: calc(0% + var(${va}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${ea}: 0 var(${aa}) 0 0;
      ${pr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${Q}: 47.5%;
      ${gr}: calc(100% - var(${ga}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${Q}: 25%;
      ${gr}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${Q}: 5%;
      ${gr}: calc(0% + var(${ga}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${La}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${ea}: 0; }
    &[anchor-at*='corner'] { ${ea}: var(${aa}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},no={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${ea}: 0 0 var(${aa}) 0; }
    &[anchor-at='top-start']::before { ${Q}: 47.5%; ${gr}: 0%; }
    &[anchor-at='top-center']::before { ${Q}: 25%; ${gr}: 0%; }
    &[anchor-at='top-end']::before { ${Q}: 5%; ${gr}: 0%; }

    &[anchor-at='right-start']::before { ${Q}: 95%; ${gr}: calc(100% - var(${ga})); }
    &[anchor-at='right-end']::before { ${Q}: 53.5%; ${gr}: calc(0% + var(${ga})); }

    &[anchor-at*='bottom-'] { ${ea}: var(${aa}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${Q}: 53.5%; ${gr}: 100%; }
    &[anchor-at='bottom-center']::before { ${Q}: 75%; ${gr}: 100%; }
    &[anchor-at='bottom-start']::before { ${Q}: 95%; ${gr}: 100%; }

    &[anchor-at='left-end']::before { ${Q}: 5%; ${gr}: calc(0% + var(${ga})); }
    &[anchor-at='left-start']::before { ${Q}: 47.5%; ${gr}: calc(100% - var(${ga})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${Q}: 53.5%; ${pr}: calc(100% - var(${va})); }
    &[anchor-at='top-end']::before { ${Q}: 95%; ${pr}: calc(0% + var(${va})); }

    &[anchor-at*='right-'] { ${ea}: 0 var(${aa}) 0 0; }
    &[anchor-at='right-start']::before { ${Q}: 5%; ${pr}: 100%; }
    &[anchor-at='right-center']::before { ${Q}: 25%; ${pr}: 100%; }
    &[anchor-at='right-end']::before { ${Q}: 47.5%; ${pr}: 100%; }

    &[anchor-at='bottom-end']::before { ${Q}: 47.5%; ${pr}: calc(0% + var(${va})); }
    &[anchor-at='bottom-start']::before { ${Q}: 5%; ${pr}: calc(100% - var(${va})); }

    &[anchor-at*='left-'] { ${ea}: 0 0 0 var(${aa}); }
    &[anchor-at='left-end']::before { ${Q}: 95%; ${pr}: 0%; }
    &[anchor-at='left-center']::before { ${Q}: 75%; ${pr}: 0%; }
    &[anchor-at='left-start']::before { ${Q}: 53.5%; ${pr}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${ea}: 0 0 var(${aa}) 0; }
    &[anchor-at='top-start']::before { ${Q}: 5%; ${gr}: 0%; ${pr}: calc(100% - var(${va})); }
    &[anchor-at='top-end']::before { ${Q}: 47.5%; ${gr}: 0%; ${pr}: calc(0% + var(${va})); }

    &[anchor-at*='right-'] { ${ea}: 0 var(${aa}) 0 0; }
    &[anchor-at='right-start']::before { ${Q}: 47.5%; ${gr}: calc(100% - var(${ga})); ${pr}: 100%; }
    &[anchor-at='right-end']::before { ${Q}: 5%; ${gr}: calc(0% + var(${ga})); ${pr}: 100%; }

    &[anchor-at*='bottom-'] { ${ea}: var(${aa}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${Q}: 95%; ${gr}: 100%; ${pr}: calc(0% + var(${va})); }
    &[anchor-at='bottom-start']::before { ${Q}: 53.5%; ${gr}: 100%; ${pr}: calc(100% - var(${va})); }

    &[anchor-at*='left-'] { ${ea}: 0 0 0 var(${aa}); }
    &[anchor-at='left-end']::before { ${Q}: 53.5%; ${gr}: calc(0% + var(${ga})); ${pr}: 0%; }
    &[anchor-at='left-start']::before { ${Q}: 95%; ${gr}: calc(100% - var(${ga})); ${pr}: 0%; }
  `},Qh=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${ea});

    container-type: anchored;
    position-anchor: var(${P}-anchor-name, var(--js•anchor));

    ${Ko.TOP}
    ${Ko.RIGHT}
    ${Ko.BOTTOM}
    ${Ko.LEFT}
    ${Ko.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${no.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${no.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${no.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${no.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${no.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${no.FLIP_BLOCK_INLINE}
        }
      }
    }
`,co={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${P}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${P}-flex, 1);
      position: relative;
      display: var(${P}-content-display, flex);
      flex-direction: var(${P}-content-flex-direction, column);
      gap: var(${P}-content-gap, 0);

      overflow: var(${P}-overflow, auto);
      overscroll-behavior: var(${P}-overscroll-behavior, contain);

      color: var(${P}-color, var(${Hs}));
      padding: var(${P}-padding, var(${Jt}));
      margin: var(${P}-margin, unset);
      background: var(${P}-content-background, var(${rn}));
      border-radius: calc(var(${_c}) - var(${Zt}));
      border: var(${P}-border, none);

      height: var(${P}-height, auto);
      min-height: var(${P}-min-height, auto);
      max-height: var(${P}-max-height, 65vh);
      resize: var(${P}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${P}-header-flex, none);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, space-between);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-gap, var(${Na}•gap));

      padding: var(${P}-header-padding,
        var(${to}•block)
        var(${to}•inline)
      );

      color: var(${P}-header-color, inherit);
      background: var(${P}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-header-z-index, 2);
        top: var(${P}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${P}-header-border-bottom, var(${Tc}));
      }

      :where([arc-button]) {
        margin: var(${P}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Na}•slot•flex: 1;
      ${Na}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Na}•slot•flex: none;
      ${Na}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Na}•slot•flex);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, unset);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-slot-gap, var(${Na}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      inset: var(${P}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${P}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${P}-body-flex, 1);
      display: var(${P}-body-display, block);
      flex-direction: var(${P}-body-flex-direction, unset);

      padding: var(${P}-body-padding,
        var(${ba}•block•start, var(${ba}•block))
        var(${ba}•inline)
        var(${ba}•block•end, var(${ba}•block))
        var(${ba}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${P}-footer-flex, none);
      display: var(${P}-footer-display, flex);
      flex-direction: var(${P}-footer-flex-direction, row-reverse);
      justify-content: var(${P}-footer-justify-content, space-between);
      align-items: var(${P}-footer-align-items, center);
      gap: var(${P}-footer-gap, var(${Xt}•gap));

      padding: var(${P}-footer-padding,
        var(${Ha}•block•start)
        var(${Ha}•inline)
        var(${Ha}•block•end)
        var(${Ha}•inline)
      );

      background: var(${P}-footer-background, none);
      color: var(${P}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-footer-z-index, 2);
        bottom: var(${P}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${P}-footer-border-top, var(${Tc}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${La}•display, block);

      inset: auto;
      top: var(${gr}, auto);
      left: var(${pr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Wo});
      height: var(${Wo});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${an}) var(${Q}),
        var(${en}) clamp(0%, 100% - var(${Q}), 100%)
      );

      border: var(${Zt}) solid color-mix(in srgb,
        var(${on}) var(${Q}),
        var(${tn}) clamp(0%, 100% - var(${Q}), 100%)
      );
    }
  `},r0=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${P}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${P}-background, var(${Qt}));
    border: var(${Zt}) solid transparent;
    border-radius: var(${_c});
    box-shadow: var(${P}-shadow, var(${Nr}•shadow));
    width: var(${P}-width, auto);
    height: var(${P}-height, auto);
    min-width: var(${P}-min-width, auto);
    min-height: var(${P}-min-height, auto);
    max-width: var(${P}-max-width, 100vw);
    max-height: var(${P}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${P}-font-size, var(${Ic}));
  }

  ${co.CONTENT}
  ${co.HEADER}
  ${co.BODY}
  ${co.FOOTER}
  ${co.TAIL}
  ${co.BACKDROP}
`,Go={SETUP:Zh,ANCHORS:Qh,VARIANTS:Xh,DENSITIES:Jh,ELEMENT:r0},a0=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${jh}

  [arc-popover] {
    ${Go.SETUP}
    ${Go.VARIANTS}
    ${Go.DENSITIES}
  }

  ${Go.ANCHORS}
  ${Go.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,Vs=(0,h.forwardRef)(({children:r,popover:a=sa.popover,anchorAt:e=sa.anchorAt,anchorName:o,anchorProps:t,alternateAnchorId:i,alternateAnchor:n,boundary:l=sa.boundary,tryFallbacks:d=sa.tryFallbacks,density:u=sa.density,variant:v=sa.variant,scheme:p=sa.scheme,isInverse:g,hasTail:m,tailSize:b=sa.tailSize,offset:$=sa.offset,hidePopoverButton:k,headerSlot:T,showHeaderDivider:x,isHeaderSticky:z,showDismiss:y,dismissProps:A,showGoBack:D,goBackProps:B,headerSlotEnd:O,footerSlot:I,isFooterSticky:C,showFooterDivider:U,tag:H="div",contentTag:rr="div",onToggle:W,...or},nr)=>{const vr=(0,h.useRef)(null),M=(0,h.useRef)(null),F=(0,h.useRef)(null),N=(0,h.useRef)(W);(0,h.useImperativeHandle)(nr,()=>M.current);const[R,er]=(0,h.useState)(!1),Z=(0,h.useMemo)(()=>p==="auto"?void 0:g?"inverse":p,[g,p]),ar=(0,h.useCallback)(()=>{if(typeof document>"u")return vr.current??null;const Cr=Ta(vr.current)??document;return i?Cr.getElementById(i):typeof n=="string"?Cr.getElementById(n):n instanceof HTMLElement?n:typeof n=="function"?n():n&&typeof n=="object"&&"current"in n?n.current:vr.current??null},[n,i]),K=d||l==="flip",_=!!m&&!ps.includes(e),X=fs({canHaveTail:_,tailSize:b}),dr=(0,h.useMemo)(()=>{const Cr=o||i||(typeof n=="string"?n:void 0)||t?.id||or.id||void 0;return $c(String(Cr))},[o,t?.id,or.id,n,i]),$r=(0,h.useMemo)(()=>({popoverTarget:or.id,"aria-haspopup":!0,"aria-controls":or.id,"aria-expanded":R}),[or.id,R]),Vr=(0,h.useMemo)(()=>({isOpen:R,"aria-label":"Dismiss",...$r,...A}),[A,R,$r]),Da=(0,h.useMemo)(()=>({ref:vr,...$r,...t,tooltip:R?void 0:t?.tooltip,anchorName:dr||""}),[t,$r,dr,R]),Oa=(0,h.useMemo)(()=>({"--js\u2022anchor":Da?.anchorName||"","--js\u2022offset":Number($)===0?"":`${$}px`,"--js\u2022tail":X.cssTailVar}),[Da?.anchorName,$,X.cssTailVar]);Rt(()=>{const Cr=ar();if(F.current=Cr,!!Cr)return bs(Cr,Da.anchorName)},[ar,Da.anchorName,R]),(0,h.useEffect)(()=>{N.current=W},[W]),(0,h.useEffect)(()=>{const Cr=M.current;if(!Cr)return;const Sa=de=>{const{newState:Ce}=de,ue=Ce==="open";er(ue),ue&&(F.current=ar()),N.current?.(de)};return Cr.addEventListener("toggle",Sa),()=>Cr.removeEventListener("toggle",Sa)},[ar]),Ku({anchorEl:F.current,popoverEl:M.current,anchorAt:e,tryFallbacks:K,offsetPx:Number($)||0,tailSizePx:X.floatingTailPx,hasTail:_,isOpen:R}),Xu({anchorEl:F.current,popoverEl:M.current,anchorAt:e,tryFallbacks:K,hasTail:_,isOpen:R});const Ur=!!(T||D||O),Za=!!I;return(0,c.jsxs)(c.Fragment,{children:[!((i||n)&&k)&&(0,c.jsx)(Uo,{...Da}),(0,c.jsxs)(H,{...or,ref:M,"arc-popover":"","arc-scheme":Z,"anchor-at":e,"try-fallbacks":K?"":void 0,popover:a,variant:v,density:u,"has-tail":_?"":void 0,role:or.role??"dialog",style:{...or.style,...Oa},children:[(0,c.jsxs)(rr,{"arc-popover-content":"",children:[Ur&&(0,c.jsx)(Wh,{showDivider:x,showGoBack:D,goBackProps:B,headerSlotEnd:O,showDismiss:y,dismissProps:Vr,isSticky:z,children:T}),Ur||Za?(0,c.jsx)(Kh,{children:r}):(0,c.jsx)(rr,{"arc-popover-display":"",children:r}),Za&&(0,c.jsx)(Gh,{showDivider:U,isSticky:C,children:I})]}),y&&!Ur&&(0,c.jsx)(Ns,{...Vr})]})]})});Vs.displayName="ArcPopover";const jc=Vs;jc.handlePopover=ms,jc.Button=Uo;const oe=jc;ir("ArcPopover",a0);const e0=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${f}•4) var(${f}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${f}•6);
      padding: var(${f}•4) var(${f}•8);
    }

    ${ac}
    ${ns}
  }

}
`,o0=r=>(0,c.jsx)("ul",{...r,"data-element":"list"}),t0=r=>(0,c.jsx)("li",{...r,"data-element":"list-item"}),n0=({count:r,anchorId:a,overflowId:e,shouldShowOverflow:o,...t})=>(0,c.jsx)(uc,{title:`+${r}`,children:(0,c.jsx)(oe.Button,{...t,id:a,popoverTarget:e,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),c0=({children:r,id:a,size:e="sm",overflowCount:o=0,shouldShowOverflow:t=!1,anchorAt:i="bottom-end",tryFallbacks:n=!0,...l})=>{const d=Math.min(o,999),u=Tr(a,"arc-avatar-overflow"),v=(0,h.useMemo)(()=>`${u}-anchor`,[u]),p=(0,h.useMemo)(()=>h.Children.toArray(r),[r]);return(0,c.jsxs)(c.Fragment,{children:[d>0&&(0,c.jsx)(n0,{count:d,anchorId:v,overflowId:u,shouldShowOverflow:t}),t&&d>0&&(0,c.jsx)(oe,{...l,scheme:"inverse","arc-avatar-overflow":"",id:u,anchorAt:i,tryFallbacks:n,alternateAnchorId:v,hidePopoverButton:!0,variant:"common","data-size":e,children:(0,c.jsx)(o0,{children:p.map((g,m)=>(0,c.jsx)(t0,{children:g},m))})})]})};ir("ArcAvatarOverflow",e0);const Us=({fg:r,bg:a})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${a}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${a}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${a}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${a}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${a}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${a}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${a}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${a}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${a}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${a}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${a}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${a}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${a}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${a}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${a}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${a}•low: var(--arc-color-alpha-black-40);
  }
`,Ws=({fg:r,bg:a})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${a}: var(${a}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${a}: var(${a}•low);
  }
`,V=s`--arc•badge`,Rc=s`${V}•fg`,Lc=s`${V}•bg`,i0=Us({fg:Rc,bg:Lc}),s0=Ws({fg:Rc,bg:Lc}),l0=s`
  &:has(>[data-size=lg]) {
    ${V}•font•size: var(${f}•14);
    ${V}•font•size•caps: var(${f}•12);
    ${V}•size: var(${f}•24);
    ${V}•min•size: var(${f}•30);
    ${V}•padding•inline: var(${f}•8);
    ${V}•border•radius: var(${f}•4);
    ${V}•gap: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${V}•font•size: var(${f}•12);
    ${V}•font•size•caps: var(${f}•10);
    ${V}•size: var(${f}•20);
    ${V}•min•size: var(${f}•24);
    ${V}•padding•inline: var(${f}•6);
    ${V}•border•radius: var(${f}•4);
    ${V}•gap: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${V}•font•size: var(${f}•10);
    ${V}•font•size•caps: var(${f}•8);
    ${V}•size: var(${f}•16);
    ${V}•min•size: var(${f}•18);
    ${V}•padding•inline: var(${f}•4);
    ${V}•border•radius: var(${f}•4);
    ${V}•gap: var(${f}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${V}•font•size: 1em;
    ${V}•font•size•text: 0.75em;
    ${V}•font•size•caps: 0.625em;
    ${V}•size: 1.25em;
    ${V}•min•size: 1.5em;
    ${V}•padding•inline: 0.375em;
    ${V}•border•radius: 0.25em;
    ${V}•gap: 0.25em;
  }
`,d0=s`
  &:has(>[data-layout=fill]) {
    ${V}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${V}•display: flex;
    ${V}•min•width: var(${V}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${V}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${V}•display: inline-flex;
    ${V}•min•width: min-content;
  }
`,u0=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${i0}
    ${s0}
    ${l0}
    ${d0}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${V}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${V}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${V}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${V}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${V}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${V}•flex);
    display: var(${V}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${V}•size);
    padding-inline: var(${V}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${Rc}));
    background: var(--arc-badge-background, var(${Lc}));
    border-radius: var(${V}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${V}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${V}•font•size•caps);
    }
  }

}
`,Ks=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],h0=["brand",...Ks.filter(r=>r!=="brand")],v0=["neutral",...Ks.filter(r=>r!=="neutral")],g0=Wr(Se,h0),p0=Wr(Se,v0),f0=Wr(Jr,["inherit","lg","md","sm"]),m0=Wr(za,["hug","fill"]),b0=["high","low"],$0=Wr(Sr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),y0={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},x0=({children:r,icon:a,text:e,isFlipped:o,isFlexible:t,isUppercase:i,color:n,variant:l,size:d="inherit",layout:u="hug",contrast:v="high",...p})=>{const g=n??y0[l??"brand-blue"],m=r||(0,c.jsx)(Qr,{icon:a,text:e,isFlipped:o,layout:"gutter"}),b=u==="fill"&&t;return(0,c.jsx)("span",{...p,"arc-badge-wrapper":"",children:(0,c.jsx)("span",{"arc-badge":"","data-contrast":v,"data-color":g,"data-layout":u,"data-size":d,"data-is-flexible":b?"":void 0,"data-is-uppercase":i?"":void 0,children:m})})};ir("ArcBadge",u0);const kr=s`--arc•badge•count`,Pc=s`${kr}•fg`,Mc=s`${kr}•bg`,k0=Us({fg:Pc,bg:Mc}),w0=Ws({fg:Pc,bg:Mc}),C0=s`
  &:has(>[data-size=lg]) {
    ${kr}•font•size: var(${f}•14);
    ${kr}•size: var(${f}•24);
    ${kr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${kr}•font•size: var(${f}•12);
    ${kr}•size: var(${f}•20);
    ${kr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${kr}•font•size: var(${f}•10);
    ${kr}•size: var(${f}•16);
    ${kr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${kr}•font•size: 1em;
    ${kr}•font•size•text: 0.75em;
    ${kr}•size: 1.25em;
    ${kr}•padding•inline: 0.25em;
  }
`,A0=s`
  &:has(>[data-shape=square]) {
    ${kr}•border•radius: var(${f}•4);
  }

  &:has(>[data-shape=circle]) {
    ${kr}•border•radius: var(--arc-border-radius-pill);
  }
`,S0=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${k0}
  ${w0}
  ${C0}
  ${A0}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${kr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${kr}•size);
  min-width: var(${kr}•size);
  padding-inline: var(${kr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Pc}));
  background: var(--arc-badge-count-background, var(${Mc}));
  border-radius: var(${kr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${kr}•font•size•text, 1em);
  }
}

`,z0=Wr(Jr,["inherit","lg","md","sm"]),E0=Wr(Sr,["neutral","brand","critical","warning","success","inverse"]),_0=["low","high"],T0=Wr(wo,["square","circle"]),I0={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},j0=({children:r,text:a,color:e,variant:o,contrast:t,size:i="inherit",shape:n="square",...l})=>{const d=r||(0,c.jsx)("span",{"data-element":"text",children:a}),u=e??I0[o??"neutral"],v=o==="critical"?"high":t??"low";return(0,c.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,c.jsx)("span",{"arc-badge-count":"","data-color":u,"data-contrast":v,"data-shape":n,"data-size":i,children:d})})};ir("ArcBadgeCount",S0);const $a=s`--arc•banner`,oa=s`${$a}•bg`,Yr=s`${$a}•fg`,pa=s`${$a}•columns`,te=s`${$a}•border`,Bc=s`${$a}•border•radius`,Yo=s`${$a}•padding`,De=s`${$a}•min•height`,nn=s`${$a}•body`,io=s`${nn}•font•size`,cn=s`${nn}•gap`,Gs=s`${nn}•flex•direction`,Ys=s`${nn}•min•width`,Dc=s`${$a}•icon`,so=s`${Dc}•font•size`,Oc=s`${Dc}•padding`,pe=s`${Dc}•color`,qs=s`${$a}•action`,Fc=s`${qs}•justify`,Nc=s`${qs}•gap`,qo=s`${$a}•column•gap`,Hc=s`${$a}•row•gap`,R0=s`
  &:where([variant=ai]) {
    ${Yr}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${oa}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${te}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Yr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-brand-mid);
    ${oa}: var(--arc-color-bg-blue-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Yr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-critical-mid);
    ${oa}: var(--arc-color-bg-critical-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Yr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-info-mid);
    ${oa}: var(--arc-color-bg-info-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Yr}: var(--arc-color-fg-secondary);
    ${pe}: var(--arc-color-fg-secondary);
    ${oa}: var(--arc-color-alpha-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Yr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-success-mid);
    ${oa}: var(--arc-color-bg-success-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Yr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-warning-mid);
    ${oa}: var(--arc-color-bg-warning-muted);
    ${te}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,L0=s`
  &:where([variant=ai]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${oa}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    ${oa}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    ${oa}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    ${oa}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    ${oa}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Yr}: var(--arc-color-fg-on-stark);
    ${oa}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Yr}: var(--arc-color-fg-on-mid);
    ${oa}: var(--arc-color-bg-warning-mid);
  }
`,P0=s`
  ${cn}: 0.375em;
  ${Gs}: column;
  ${Ys}: 7em;
  ${Nc}: 0.75em;
  ${qo}: 0.75em;
  ${Hc}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${R0}

    ${Yo}: 0 0.75em 0 1em;
    ${Bc}: var(--arc-border-radius-lg);
    ${cn}: 0.125em;
    ${Oc}: 0.0625em;
    ${qo}: 0.625em;

    ${De}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${De}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${De}: 3.5em;
        ${Hc}: 0.25em;

        &:has([arc-banner-actions]) {
          ${De}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Fc}: flex-start;

      &[density=compact] {
        ${Yo}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${io});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${L0}

    ${De}: 4em;
    ${Yo}: 0 0.75em 0 1em;
    ${te}: none;
    ${Bc}: 0;
    ${cn}: 0.125em;
    ${qo}: 1em;
    ${Fc}: flex-end;
    ${Oc}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${so}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${io});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${so}: 1em;
    ${io}: 0.875em;
  }

  &[density=compact] {
    ${De}: 2em;
    ${Yo}: 0 0.25em 0 0.5em;
    ${io}: 0.75em;
    ${Nc}: 0.5em;
    ${qo}: 0.5em;

    &[action-placement=inline] {
      ${so}: 1em;
    }

    &[action-placement=bottom] {
      ${so}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${pe}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${pe}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${so});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,M0=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,B0=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${io});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,D0=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${pa}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${pa}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${pa}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${pa}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${pa}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${pa}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${pa}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${pa}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${pa}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${pa}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${pa}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${pa}: 1fr;
    }
  }
`,O0=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${te}));
  background: var(--arc-banner-background, var(${oa}));
  border-radius: var(--arc-banner-border-radius, var(${Bc}));
  padding: var(--arc-banner-padding, var(${Yo}));
  min-height: var(--arc-banner-min-height, var(${De}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${D0}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Yr}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${pa});
    column-gap: var(${qo});
    row-gap: var(${Hc});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Yr}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${Ys}));

    display: flex;
    flex-direction: var(${Gs});
    gap: var(${cn});
  }

  [arc-banner-icon] {
    font-size: var(${so});
    padding-inline: var(${Oc});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${io});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Fc}));
    gap: var(--arc-banner-action-gap, var(${Nc}));
  }

`,F0=s`
@layer arc-components {
  ${Rh}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${P0}

    /* CORE STYLES --------------------------------------------------• */
    ${O0}

    /* INSET LAYOUT -------------------------------------------------• */
    ${M0}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${B0}
  }

}
`,N0=["comfortable","compact"],H0=["inset","bleed"],V0=["inline","bottom"],U0=["left","center"],W0=[...Qa],K0=[...Sr,"announcement"],G0=Wr(K0,["ai","announcement","critical","info","neutral","success","warning"]),fe={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},Y0=r=>r==="critical"||r==="warning"?"alert":"status",q0=({children:r,id:a,icon:e,dismissProps:o,heading:t,density:i=fe.density,layout:n=fe.layout,actionPlacement:l=fe.actionPlacement,alignment:d=fe.alignment,actionSlot:u,showDismiss:v=fe.showDismiss,message:p,variant:g=fe.variant,onClose:m,...b})=>{const $=Tr(a,"arc-banner"),k=dc(e),T=d==="center",x=n==="bleed",z=n==="inset",y=i==="compact",A=l==="inline",D=!!k,O=z&&g==="ai"?"ai-200":void 0,I={variant:g,layout:n,density:i,alignment:d,"action-placement":l},C=()=>(0,c.jsx)(cr,{icon:k,gradient:O}),U=()=>(0,c.jsx)(c.Fragment,{children:!!u&&(0,c.jsx)("span",{"arc-banner-actions":"",children:u})}),H=()=>(0,c.jsx)("div",{"arc-banner-dismiss":"",children:(0,c.jsx)(xr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:z||x&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:y?"sm":"md",...o,onClick:or=>{o?.onClick?.(or),m?.()}})}),rr=({showActions:or=!0})=>(0,c.jsx)("div",{"arc-banner-body":"",children:r||(0,c.jsxs)(Qr,{icon:(0,c.jsx)(C,{}),children:[!!t&&(0,c.jsx)("strong",{children:t})," ",p," ",or&&u]})}),W=()=>(0,c.jsxs)(c.Fragment,{children:[D&&(0,c.jsx)("span",{"arc-banner-icon":"",children:(0,c.jsx)(C,{})}),(0,c.jsx)("div",{"arc-banner-body":"",children:r||(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)("strong",{"arc-banner-heading":"",children:t}),p&&(0,c.jsx)("span",{"arc-banner-message":"",children:p})]})})]});return(0,c.jsx)("div",{role:Y0(g??fe.variant),...b,...I,"arc-banner":"",id:$,children:(0,c.jsxs)("div",{"arc-banner-grid":"",children:[T?(0,c.jsx)(rr,{}):(0,c.jsxs)(c.Fragment,{children:[y&&A?(0,c.jsx)(rr,{showActions:!1}):(0,c.jsx)(W,{}),(0,c.jsx)(U,{})]}),v&&(0,c.jsx)(H,{})]})})};ir("ArcBanner",F0);const ne=s`--arc•label`,Zo=s`${ne}•cursor`,Xo=s`${ne}•opacity`,Z0=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${Xo}: var(--arc-label-opacity, unset);
    ${Xo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${ne}•display: var(--arc-label-display, inline-flex);
    ${ne}•gap: var(--arc-label-gap, var(${f}•8));
    ${ne}•align•items: var(--arc-label-align-items, baseline);

    ${Zo}: var(--arc-label-cursor, pointer);
    ${Zo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Zo}: var(${Zo}•disabled);
      ${Xo}: var(${Xo}•disabled);
    }

    &[data-layout=fill] {
      ${ne}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${ne}•display);
    align-items: var(${ne}•align•items);
    gap: var(${ne}•gap);
    cursor: var(${Zo});
  }

}
`,X0=q(za,["hug","fill"]),me=({layout:r,...a})=>(0,c.jsx)("label",{...a,"arc-label":"","data-layout":r});ir("ArcLabel",Z0);const J0=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${Xo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Oe=r=>(0,c.jsx)("span",{...r,"arc-label-content":""});ir("LabelContent",J0);const Q0={checkbox:"checkbox",radio:"radio",switch:"radio"},Jo=({id:r,indeterminate:a,type:e,onChange:o,...t})=>{const i=e==="checkbox"&&!!a,n=(0,h.useRef)(null),l=Tr(r,`arc-${e}`),d=u=>v=>{if(!(v?.target instanceof HTMLInputElement))return;const p={checked:v?.target.checked,indeterminate:v?.target?.indeterminate,name:v?.target?.name,value:t?.value};u?.(p,v)};return(0,h.useEffect)(()=>{n.current?.type==="checkbox"&&(n.current.indeterminate=!!a)},[a]),(0,c.jsx)("input",{...t,id:l,ref:n,type:Q0[e],"arc-input-type":e,"aria-disabled":t?.disabled||void 0,"data-is-disabled":t?.disabled||void 0,"data-is-checked":t?.checked||void 0,"data-is-indeterminate":i||void 0,onChange:d(o)})},rv=s`
@layer arc-components {

  [arc-input-mask] {
    ${j}•border•width: var(--arc-border-width-sm);
    ${j}•border: var(${j}•border•width) solid var(${j}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${j}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${j}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${j}•outline: var(${j}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${j}•width);
    height: var(${j}•height);
    opacity: var(${j}•opacity, var(--arc-alpha-100));

    color: var(${j}•color, transparent);
    background: var(${j}•background);
    border: var(${j}•border);
    border-radius: var(${j}•border•radius);
    translate: var(${j}•translate, unset);

    outline: var(${j}•outline, none);
    outline-offset: var(${j}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${j}•border•width) * -1);
      cursor: var(${j}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${j}•z•index, unset);
    }
  }

}
`,sn=({type:r,...a})=>(0,c.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,c.jsx)("span",{...a,"arc-input-mask":r})});ir("ArcBooleanInputMask",rv);const Mr=s`--arc•checkbox`,av=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Mr}•font•size: 1em;
      ${Mr}•icon•size: 0.625em;
      ${Mr}•size: 1.125em;
      ${Mr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Mr}•font•size: var(${f}•14);
      ${Mr}•icon•size: var(${f}•10);
      ${Mr}•size: var(${f}•18);
      ${Mr}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Mr}•font•size: var(${f}•12);
      ${Mr}•icon•size: var(${f}•10);
      ${Mr}•size: var(${f}•16);
      ${Mr}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${j}•border•radius: var(${f}•4);
    ${j}•size: var(${Mr}•size);
    ${j}•icon•size: var(${Mr}•icon•size);
    ${j}•width: var(${Mr}•size);
    ${j}•height: var(${Mr}•size);
    ${j}•translate: 0 var(${f}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${Mr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${Mr}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${j}•color: transparent;
      ${j}•border•color: var(--arc-color-border-stark);
      ${j}•background: transparent;

      &:hover {
        ${j}•border•color: var(--arc-color-border-theme-heavy);
        ${j}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${j}•border•color: var(--arc-color-border-disabled);
        ${j}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${j}•color: var(--arc-color-fg-on-theme-heavy);
        ${j}•border•color: transparent;
        ${j}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${j}•color: var(--arc-color-fg-on-theme-stark);
          ${j}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${j}•color: var(--arc-color-fg-on-theme-mid);
          ${j}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${j}•color: var(--arc-color-fg-theme-heavy);
        ${j}•border•color: var(--arc-color-border-theme-heavy);
        ${j}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${j}•color: var(--arc-color-fg-theme-stark);
          ${j}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${j}•color: var(--arc-color-fg-theme-subtle);
          ${j}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,ev=q(za,["hug","fill"]),ov=q(Jr,["inherit","md","sm"]),tv=q(Sr,["primary","secondary"]),Zs=({children:r,label:a,layout:e,size:o="md",variant:t="primary",useMask:i=!0,...n})=>{const{className:l,title:d,...u}=n,v={className:l,title:d},p=r??a,g=(0,c.jsx)(Jo,{...u,type:"checkbox"}),m=i&&(0,c.jsxs)(sn,{type:"checkbox",children:[g,(0,c.jsx)(cr,{icon:u?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!p&&(0,c.jsxs)(me,{layout:e,children:[m||g,(0,c.jsx)(Oe,{children:p})]});return(0,c.jsx)("span",{...v,"arc-checkbox":"","data-size":o,"data-variant":t,children:b||m||g})};ir("ArcCheckbox",av);const ya=s`--arc•cb`,wr=s`${ya}•o`,xa=s`${wr}•border`,Vc=s`${wr}•icon`,Uc=s`${wr}•text`,nv=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${ya}•font•size: var(${f}•14);
    ${ya}•border•radius: var(${f}•6);
    ${ya}•background: var(--arc-color-alpha-black-0);
    ${ya}•padding: 0px;
    ${ya}•gap: var(${f}•2);

    ${wr}•color: var(--arc-color-fg-secondary);
    ${wr}•background: var(--arc-color-alpha-white-0);

    ${xa}•color: var(--arc-color-alpha-black-0);
    ${xa}•width: var(${f}•1);
    ${xa}•radius: var(${f}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${wr}•size: var(${f}•40);
      ${wr}•line•height: var(${f}•38); /* • -2px to account for border-width (top/bottom) */
      ${Vc}•padding: var(${f}•8);
      ${Uc}•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${wr}•size: var(${f}•32);
      ${wr}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${Vc}•padding: var(${f}•6);
      ${Uc}•padding: var(${f}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${ya}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${ya}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${wr}•color: var(--arc-color-fg-on-hover-default);
        ${wr}•background: var(--arc-color-bg-hover-default);
        ${xa}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${wr}•color: var(--arc-color-fg-primary);
      ${wr}•background: var(--arc-color-bg-secondary);
      ${xa}•color: var(--arc-color-alpha-black-0);
      ${wr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${wr}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${wr}•outline: var(${xa}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${ya}•font•size));
    display: var(${ya}•display);
    gap: var(${ya}•gap);
    background: var(${ya}•background);
    border-radius: var(${xa}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${xa}•radius);
      outline: var(${wr}•outline, none);
      outline-offset: var(${xa}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${wr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${wr}•size);
      min-width: var(${wr}•size);

      border-radius: var(${xa}•radius);
      border: var(${xa}•width) solid var(${xa}•color);
      background: var(${wr}•background);
      color: var(${wr}•color);
      font-weight: var(${wr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Uc}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Vc}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,cv=q(za,["hug","fill"]),iv=q(Jr,["lg","md"]),sv=({children:r,label:a,icon:e,...o})=>{const t=r||(0,c.jsx)(Qr,{icon:e,text:a});return(0,c.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(Zs,{...o,label:t,layout:"fill",useMask:!1})})},lv=({children:r,size:a="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":a,"data-layout":e,role:"group",children:r});ir("ArcCheckboxBar",nv);const dv=["normal","simple","add"],uv=["swatch","color-stop","thumbnail"],hv=["standalone","embedded"],Xs=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],Js=["eye-dropper","alpha-slider","hex-input","palettes"],vv=1e-10,Wc=1e-6,ln=1e-4,G=(r,a,e)=>Math.min(e,Math.max(a,r)),dn=(r,a)=>{const e=10**a;return Math.round(r*e)/e},Qs=(r,a=Wc)=>Math.abs(r)<a?0:Math.abs(1-r)<a?1:r,Qo=r=>parseInt(r,16),Hr=r=>G(dn(r,0),0,255),rl=r=>dn((r%360+360)%360,2),al=(r,a)=>Qs(dn(G(r,0,1),a)),Pa=r=>{const a=(r.h%360+360)%360,e=G(r.s,0,1),o=G(r.v,0,1),t=G(r.a,0,1),i=o*e,n=i*(1-Math.abs(a/60%2-1)),l=o-i;let d=0,u=0,v=0;return a<60?[d,u,v]=[i,n,0]:a<120?[d,u,v]=[n,i,0]:a<180?[d,u,v]=[0,i,n]:a<240?[d,u,v]=[0,n,i]:a<300?[d,u,v]=[n,0,i]:[d,u,v]=[i,0,n],{r:(d+l)*255,g:(u+l)*255,b:(v+l)*255,a:t}},rt=(r,a)=>{const e=G(r.r,0,255)/255,o=G(r.g,0,255)/255,t=G(r.b,0,255)/255,i=Math.max(e,o,t),n=Math.min(e,o,t),l=i-n,d=i===0?0:l/i,u=i;let v=a??0;return l>vv?(i===e?v=60*((o-t)/l%6):i===o?v=60*((t-e)/l+2):v=60*((e-o)/l+4),v<0&&(v+=360)):v=(v%360+360)%360,{h:v,s:d,v:u,a:G(r.a,0,1)}},el=r=>{const a=(r.h%360+360)%360,{s:e}=r,{l:o}=r,t=(1-Math.abs(2*o-1))*e,i=t*(1-Math.abs(a/60%2-1)),n=o-t/2;let l=0,d=0,u=0;return a<60?[l,d,u]=[t,i,0]:a<120?[l,d,u]=[i,t,0]:a<180?[l,d,u]=[0,t,i]:a<240?[l,d,u]=[0,i,t]:a<300?[l,d,u]=[i,0,t]:[l,d,u]=[t,0,i],{r:(l+n)*255,g:(d+n)*255,b:(u+n)*255,a:r.a}},ol=r=>{const a=r.r/255,e=r.g/255,o=r.b/255,t=Math.max(a,e,o),i=Math.min(a,e,o),n=t-i;let l=0;n!==0&&(t===a?l=60*((e-o)/n%6):t===e?l=60*((o-a)/n+2):l=60*((a-e)/n+4)),l<0&&(l+=360);const d=(t+i)/2,u=n===0?0:n/(1-Math.abs(2*d-1));return{h:l,s:u,l:d,a:r.a}},tl=r=>{const a=Fe(r.r),e=Fe(r.g),o=Fe(r.b),t=.4122214708*a+.5363325363*e+.0514459929*o,i=.2119034982*a+.6806995451*e+.1073969566*o,n=.0883024619*a+.2817188376*e+.6299787005*o,l=Math.cbrt(t),d=Math.cbrt(i),u=Math.cbrt(n),v=.2104542553*l+.793617785*d-.0040720468*u,p=1.9779984951*l-2.428592205*d+.4505937099*u,g=.0259040371*l+.7827717662*d-.808675766*u,m=Math.sqrt(p*p+g*g);let b=Math.atan2(g,p)*180/Math.PI;return b<0&&(b+=360),{L:G(v,0,1),C:m,h:b,a:G(r.a,0,1)}},nl=r=>{const a=G(r.L,0,1),e=r.h*Math.PI/180,o=r.C*Math.cos(e),t=r.C*Math.sin(e),i=a+.3963377774*o+.2158037573*t,n=a-.1055613458*o-.0638541728*t,l=a-.0894841775*o-1.291485548*t,d=i*i*i,u=n*n*n,v=l*l*l,p=4.0767416621*d-3.3077115913*u+.2309699292*v,g=-1.2684380046*d+2.6097574011*u-.3413193965*v,m=-.0041960863*d-.7034186147*u+1.707614701*v,b=$=>{const k=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(G(k,0,1)*255)};return{r:b(p),g:b(g),b:b(m),a:G(r.a,0,1)}},Fe=r=>{const a=Hr(r)/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4},cl=r=>{const a=Fe(r.r),e=Fe(r.g),o=Fe(r.b);return .2126*a+.7152*e+.0722*o},il=(r,a)=>{const e=r.a+a.a*(1-r.a);if(e<=0)return{r:0,g:0,b:0,a:0};const o=r.a/e,t=a.a*(1-r.a)/e;return{r:Hr(r.r*o+a.r*t),g:Hr(r.g*o+a.g*t),b:Hr(r.b*o+a.b*t),a:al(e,2)}},at=(r,a,e,o)=>{const t=o?o(r):r,i=o?o(a):a;return Math.abs(t-i)<=e},lo=(r,a,e)=>at(r,a,e,Math.round),Kc=(r,a,e)=>at(r,a,e),un=(r,a)=>!a||!r?!1:lo(r.r,a.r,1)&&lo(r.g,a.g,1)&&lo(r.b,a.b,1)&&Kc(r.a,a.a,1/255+Wc),Gc=(r,a)=>!r||!a?!1:Hr(r.r)===Hr(a.r)&&Hr(r.g)===Hr(a.g)&&Hr(r.b)===Hr(a.b)&&Math.abs(r.a-a.a)<Wc,Yc=(r,a)=>!a||!r?!1:lo(r.r,a.r,3)&&lo(r.g,a.g,3)&&lo(r.b,a.b,3)&&Kc(r.a,a.a,.02),qc=(r,a)=>at(r.h,a.h,ln)&&at(r.s,a.s,ln)&&at(r.v,a.v,ln)&&Kc(r.a,a.a,ln),gv=/^[0-9a-f]+$/i,pv=500,uo=new Map,Zc=r=>({...r}),fv=(r,a)=>{if(uo.size>=pv){const e=uo.keys().next().value;e&&uo.delete(e)}uo.set(r,a?Zc(a):null)},mv=r=>r.split("").map(a=>a+a).join(""),sl=r=>{const a=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(a.length))return null;const e=a.length<=4?mv(a):a;if(!gv.test(e))return null;const o=Qo(e.slice(0,2)),t=Qo(e.slice(2,4)),i=Qo(e.slice(4,6)),n=e.length===8?Qo(e.slice(6,8))/255:1;return[o,t,i,n].some(l=>Number.isNaN(l))?null:{r:o,g:t,b:i,a:G(n,0,1)}},Va=r=>{const a=Number(r.trim());return Number.isFinite(a)?a:null},Xc=r=>{const a=r.trim();if(a.endsWith("%")){const o=Va(a.slice(0,-1));return o==null?null:G(o/100*255,0,255)}const e=Va(a);return e==null?null:G(e,0,255)},et=r=>{const a=r.trim();if(a.endsWith("%")){const o=Va(a.slice(0,-1));return o==null?null:G(o/100,0,1)}const e=Va(a);return e==null?null:G(e,0,1)},Jc=(r,a)=>{const o=r.trim().toLowerCase().match(a);if(!o)return null;const t=o[1].trim(),[i,n]=t.split("/").map(u=>u.trim()),l=i.includes(",")?i.split(",").map(u=>u.trim()):i.split(/\s+/).filter(Boolean),d=n&&n.length?n:null;return{body:t,channels:l,alphaPart:d}},bv=r=>{const a=Jc(r,/^rgba?\((.*)\)$/);if(!a)return null;const{body:e,channels:o,alphaPart:t}=a;if(o.length!==3)return null;const i=Xc(o[0]),n=Xc(o[1]),l=Xc(o[2]);if(i==null||n==null||l==null)return null;let d=1;if(t){const u=et(t);if(u==null)return null;d=u}else{const u=e.includes(",")?e.split(",").map(v=>v.trim()):null;if(u&&u.length===4){const v=et(u[3]);if(v==null)return null;d=v}}return{r:i,g:n,b:l,a:d}},$v=r=>{const a=Jc(r,/^hsla?\((.*)\)$/);if(!a)return null;const{body:e,channels:o,alphaPart:t}=a;if(o.length!==3)return null;const i=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const g=Va(p.slice(0,-1));return g==null?null:g/100},l=i(o[0]),d=n(o[1]),u=n(o[2]);if(!Number.isFinite(l)||d==null||u==null)return null;let v=1;if(t){const p=et(t);if(p==null)return null;v=p}else{const p=e.includes(",")?e.split(",").map(g=>g.trim()):null;if(p&&p.length===4){const g=et(p[3]);if(g==null)return null;v=g}}return el({h:l,s:d,l:u,a:v})},yv=r=>{const a=Jc(r,/^oklch\((.*)\)$/);if(!a)return null;const{channels:e,alphaPart:o}=a;if(e.length!==3)return null;const t=v=>{const p=v.trim();if(p.endsWith("%")){const m=Va(p.slice(0,-1));return m!=null?G(m/100,0,1):null}const g=Va(p);return g!=null?G(g,0,1):null},i=v=>{const p=v.trim();if(p.endsWith("%")){const m=Va(p.slice(0,-1));return m!=null&&m>=0?m/100*.4:null}const g=Va(p);return g!=null&&g>=0?g:null},n=t(e[0]),l=i(e[1]),d=Va(e[2].trim());if(n==null||l==null||d==null||!Number.isFinite(d))return null;let u=1;if(o){const v=et(o);if(v==null)return null;u=v}return nl({L:n,C:l,h:d,a:u})},Er=r=>{if(!r||typeof r!="string")return null;const a=r.toLowerCase().trim();if(uo.has(a)){const o=uo.get(a);return o?Zc(o):null}let e=null;return a.startsWith("#")?e=sl(a):a.startsWith("rgb")?e=bv(a):a.startsWith("hsl")?e=$v(a):a.startsWith("oklch")&&(e=yv(a)),fv(a,e),e?Zc(e):null},ll=r=>{if(!r||typeof r!="string")return!1;const a=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(a)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(a)},dl=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.r=="number"&&typeof a.g=="number"&&typeof a.b=="number"&&typeof a.a=="number"},ul=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.h=="number"&&typeof a.s=="number"&&typeof a.v=="number"&&typeof a.a=="number"},ho=r=>String(Math.round(G(r,0,1)*100)),hl=r=>{const a=r.trim();if(!a)return null;if(a.endsWith("%")){const o=Number(a.slice(0,-1).trim());return Number.isFinite(o)?G(o/100,0,1):null}if(a.startsWith(".")||a.includes(".")){const o=Number(a);return Number.isFinite(o)?G(o,0,1):null}const e=Number(a);return Number.isFinite(e)?G(e/100,0,1):null},hn=r=>G(Number(r.toFixed(2)),0,1).toString(),ka=(r,a=!1)=>{const e=l=>G(Math.round(l),0,255).toString(16).padStart(2,"0"),o=e(r.r),t=e(r.g),i=e(r.b),n=e(G(r.a,0,1)*255);return a?`#${o}${t}${i}${n}`:`#${o}${t}${i}`},Qc=r=>{const a=ol(r),e=Math.round(a.h),o=Math.round(a.s*100),t=Math.round(a.l*100);return`hsl(${e} ${o}% ${t}% / ${hn(G(a.a,0,1))})`},Ne=r=>{const a=G(Math.round(r.r),0,255),e=G(Math.round(r.g),0,255),o=G(Math.round(r.b),0,255),t=G(r.a,0,1);return t<1?`rgb(${a} ${e} ${o} / ${hn(t)})`:`rgb(${a} ${e} ${o})`},ri=r=>{const a=tl(r),e=Math.round(a.L*1e3)/10,o=Math.round(a.C/.4*1e3)/10,t=Math.round(a.h),i=G(a.a,0,1);return i<1?`oklch(${e}% ${o}% ${t} / ${hn(i)})`:`oklch(${e}% ${o}% ${t})`},vl={auto:r=>r.a<1?Ne(r):ka({...r,a:1},!1),hex:r=>ka({...r,a:1},!1),hexa:r=>ka(r,!0),rgb:r=>Ne(r),hsl:r=>Qc(r),oklch:r=>ri(r)},xv=(r,a)=>(vl[r]??vl.hex)(a),fa=r=>typeof r=="string"?r:r.color,vn=(r,a)=>typeof r!="string"&&r.name?r.name:a??void 0,gl=r=>{const a=fa(r),e=Er(a),o=!!e&&e.a<1&&e.a>.01,t=!!e&&e.a===0;return{cssColor:a,rgba:e,isTranslucent:o,isTransparent:t,opaqueHex:e?ka({...e,a:1},!1):null}},gn=(r,a)=>{if(ul(r))return r;const e=(dl(r)?r:null)??Er(r)??Er(a)??{r:0,g:0,b:0,a:1};return rt(e)},He=(r,a)=>{const e=a?.fallbackHex??"#000000",o=a?.format??"hex",t=gn(r,e),i={h:(t.h%360+360)%360,s:G(t.s,0,1),v:G(t.v,0,1),a:G(t.a,0,1)},n=Pa(i),l={r:Hr(n.r),g:Hr(n.g),b:Hr(n.b),a:i.a},d=xv(o,l);let u,v,p,g,m;const b=l.a<1?"rgb":"hex",$=l.a<1?Ne(l):ka({...l,a:1},!1);return{format:o,value:d,alpha:l.a,autoFormat:b,autoValue:$,hsv:i,rgba:l,get hex(){return u??=ka({...l,a:1},!1)},get hexa(){return v??=ka(l,!0)},get rgb(){return p??=Ne(l)},get hsl(){return g??=Qc(l)},get oklch(){return m??=ri(l)}}},pl=(r,a)=>({...He(r.hsv,{format:a}),name:r.name}),fl=(r,a)=>({color:fa(r),name:vn(r,a)}),ml=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),vo=r=>fa(r).trim().toLowerCase(),pn=(r,a)=>{if(vo(r)===vo(a))return!0;const e=Er(fa(r)),o=Er(fa(a));return!!e&&!!o&&un(e,o)},ai=(r,a,e)=>{const o=e?.skipIndex;return r.some((t,i)=>i!==o?pn(t,a):!1)},kv=r=>{let a=null;try{a=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(a==null)return null;const e=window.getComputedStyle(a);return Er(e?.backgroundColor)},ei=(r,a)=>{const e=Er(fa(r));if(!e)return a?.useScheme?"auto":"inherit";const{darkColor:o,lightColor:t,contrastBias:i,bgColor:n,bgElement:l}=a??{},d=a?.useScheme?"light":o??"#000000",u=a?.useScheme?"dark":t??"#ffffff",v=G(i??-4,-7,7);let p=e;if(e.a<1){const $=Er(n??""),k=$?null:kv(l);p=il(e,$??k??{r:255,g:255,b:255,a:1})}const g=cl(p),m=(g+.05)/.05,b=1.05/(g+.05);return m+v>=b?d:u},oi=r=>r==null?null:{comparisonKey:vo(r),selectedRgba:Er(fa(r))},bl=(r,a)=>{if(!a)return!1;if(vo(r)===a.comparisonKey)return!0;if(!a.selectedRgba)return!1;const e=Er(fa(r));return!!e&&un(e,a.selectedRgba)},wv=s`--arc•button•bar`,ot=s`${wv}•axis`,Cv=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${ot}: row;

    &[is-flipped] {
      ${ot}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${ot}: column;

    &[is-flipped] {
      ${ot}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${ot}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${E}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,fn=({children:r,...a})=>{const{Element:e="menu",orientation:o="horizontal",isFlipped:t=!1,...i}=a;return(0,c.jsx)(e,{...i,"arc-button-bar":o,"is-flipped":t?"":void 0,role:i.role??"group",children:r})};ir("ArcButtonBar",Cv);const Av=({activeColor:r})=>{const[a,e]=(0,h.useState)(r),o=r!=null,t=o?r:a;(0,h.useEffect)(()=>{r!=null&&e(r)},[r]);const i=(0,h.useCallback)(n=>{o||e(n)},[o]);return{isSelectionControlled:o,activeSelectedColor:t,setUncontrolledSelectedColor:e,selectColor:i}},$l=(r,a)=>ai(r,a)?r:[...r,a],yl=(r,a)=>{const e=$l(r.colors??[],a);return e===r.colors?r:{...r,colors:e}},xl=(r,a)=>{const e=r.colors??[],o=e.filter(t=>!pn(t,a));return o.length===e.length?r:{...r,colors:o}},kl=(r,a,e)=>r.map(o=>o.id===a.id?yl(o,e):o),wl=(r,a,e)=>r.map(o=>o.id===a.id?xl(o,e):o),Sv=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return kl(r,a,e)}return yl(r,a)},zv=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return wl(r,a,e)}return xl(r,a)},Ev=(r,a,e)=>{const o=r.find(t=>t.id===a);return o?kl(r,o,e):r},_v=(r,a,e)=>{const o=r.find(t=>t.id===a);return o?wl(r,o,e):r},Tv=({palette:r,isSelectionControlled:a,onAddColor:e,emitColorChange:o,setLocalColors:t,setUncontrolledSelectedColor:i,initialColorValue:n,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:u,hidePopover:v})=>{const p=(0,h.useCallback)(()=>n??ml(),[n]),[g,m]=(0,h.useState)(null),[b,$]=(0,h.useState)(p),k=(0,h.useCallback)(()=>{m(null),$(p())},[p]),T=(0,h.useCallback)(I=>{t(C=>$l(C,I))},[t]),x=(0,h.useCallback)((I,C)=>{e?.(r,I,C),o(I),a||i(I)},[o,a,e,r,i]),z=(0,h.useCallback)((I,C)=>{T(I),x(I,C??void 0)},[T,x]),y=(0,h.useCallback)(()=>{if(g!=null)return;const I=p();let C=-1;t(U=>(C=U.length,[...U,I])),m(C),$(I),d?.(!0),l&&u()},[g,p,d,t,l,u]),A=(0,h.useCallback)(I=>{g!=null&&$(I)},[g]),D=(0,h.useCallback)(I=>{I?.preventDefault(),I?.stopPropagation(),g!=null&&t(C=>C.filter((U,H)=>H!==g)),k(),d?.(!1),l&&v()},[g,v,d,k,t,l]),B=(0,h.useCallback)((I,C)=>{const H=(or=>typeof or?.preventDefault=="function")(I)?I:C;if(H?.preventDefault(),H?.stopPropagation(),g==null||b==null){d?.(!1),l&&v();return}const W=(r.colors??[]).map((or,nr)=>nr===g?b:or);t(W),x(b,H??void 0),k(),d?.(!1),l&&v()},[g,b,x,v,d,r.colors,k,t,l]),O=(0,h.useCallback)((I,C)=>{C?.preventDefault(),C?.stopPropagation(),z(I,C??void 0)},[z]);return{draftColorIndex:g,draftColorValue:b,startAddDraft:y,updateDraftColor:A,cancelDraftColor:D,saveDraftColor:B,saveCurrentColor:O}},ma=s`--arc-popover`,go=s`--arc•color•picker`,Ir=s`${go}•thumb`,tt=s`${go}•tools`,Ua=s`${go}•dropper`,Cl=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,Al={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${ma}-width: 14em; /* 224px */
    ${ma}-min-width: 10.5em; /* 140px */
    ${ma}-max-width: 15.75em; /* 252px */
    ${ma}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${ma}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${ma}-padding: 0;

    ${ma}-header-padding: 0.75em 1em;
    ${ma}-header-background: var(--arc-color-bg-mono);
    ${ma}-header-align-items: center;

    ${ma}-body-padding: 0;

    ${ma}-footer-padding: 1em;
    ${ma}-footer-background: var(--arc-color-bg-mono);


    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }

    &:has([arc-color-picker=simple]) {
      ${ma}-width: 12.25em; /* 196px */
    }
  `,PICKER:s`
    ${Ir}•shadow: 0 0 0 0.25em var(--arc-color-alpha-white-95), 0 0 0.375em 0.1875em var(--arc-color-alpha-black-30);
    ${Ir}•size: 0.625em;
    ${Ir}•transition: 200ms ease-out;

    ${go}•padding: 1em;
    &[is-inline] { ${go}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Ua}•align•self: end;
      ${tt}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},Iv=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Ir}•transition), top var(${Ir}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Ir}•size);
    height: var(${Ir}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Ir}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      background var(${Ir}•transition),
      left var(${Ir}•transition),
      top var(${Ir}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,jv=s`

  [arc-color-slider] {
    display: grid;
    gap: 0.375em;

    [arc-label] {
      font-size: 0.75em;
    }

    [arc-color-surface] {
      position: relative;
      display: flex;
      border-radius: var(--arc-border-radius-pill);
      height: 0.875em;
      align-items: center;

      &[arc-color-surface=hue] {
        ${Ir}•bg: var(--js•hue);

        background-image:
          linear-gradient(
            to right,
            #f00 0%,
            #ff0 16.66%,
            #0f0 33.33%,
            #0ff 50%,
            #00f 66.66%,
            #f0f 83.33%,
            #f00 100%
          );
      }

      &[arc-color-surface=alpha] {
        ${Ir}•bg: var(--js•rgb);
        ${Cl}
      }

      &:has(input[type=range]:focus:focus-visible) {
        ::-webkit-slider-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }

        ::-moz-range-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }
      }
    }

    input[type=range] {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      appearance: none;
      outline: none;
      cursor: pointer;
      font: inherit;

      /* Track */
      &::-webkit-slider-runnable-track { display: flex; align-items: center; }
      &::-moz-range-track { display: flex; align-items: center; }

      /* Thumb */
      &::-webkit-slider-thumb {
        appearance: none;
        width: var(${Ir}•size);
        height: var(${Ir}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Ir}•shadow);
        background: var(${Ir}•bg);
      }

      &::-moz-range-thumb {
        appearance: none;
        width: var(${Ir}•size);
        height: var(${Ir}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Ir}•shadow);
        background: var(${Ir}•bg);
      }
    }
  }

`,Sl=s`3.75em`,Rv=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${Sl};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${Sl} 1fr;
    }

    [arc-color-input=alpha] {
      --arc-input-text-align: end;
    }

    [arc-color-input=hex] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }

`,Lv=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  [arc-color-tools] {
    display: grid;
    gap: var(${tt}•gap, 0.5em);
    grid-template-columns: var(${tt}•columns, auto 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${tt}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Ua}•align•self, center);
    justify-self: var(${Ua}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Ua}•align•self: end;
    ${Ua}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Ua}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Ua}•justify•self: start;
      ${tt}•columns: 1fr auto;
      ${Ua}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Ua}•column, 2);
      grid-row: var(${Ua}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${Iv}
  ${jv}
  ${Rv}

`,Pv=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${Al.POPOVER}
  }

  [arc-color-picker] {
    ${Al.PICKER}

     [arc-color-picker-section] {
      padding: var(${go}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Lv}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,ta=s`--arc•color•chip`,Mv=s`
@layer arc-components {

  [arc-color-chip=add-color] {
    ${ta}•radius: var(--arc-border-radius-circle);
    ${ta}•width: var(${f}•24);
    ${ta}•height: var(${f}•24);
  }

  [arc-color-chip=swatch] {
    ${ta}•radius: var(--arc-border-radius-circle);
    ${ta}•width: var(${f}•24);
    ${ta}•height: var(${f}•24);
  }

  [arc-color-chip=color-stop] {
    ${ta}•radius: var(--arc-border-radius-md);
    ${ta}•width: var(${f}•24);
    ${ta}•height: var(${f}•24);
  }

  [arc-color-chip=thumbnail] {
    ${ta}•radius: var(--arc-border-radius-md);
    ${ta}•width: var(${f}•28);
    ${ta}•height: var(${f}•42);
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•color);
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(${ta}•width);
    --arc-button-height: var(${ta}•height);
    --arc-button-border-radius: var(${ta}•radius);
    --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${f}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Cl}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &[is-selected] {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,zl=(0,h.memo)(({color:r,name:a,kind:e,isDraft:o,isSelected:t,contrastBias:i,contrastBgColor:n,canRemoveColor:l,icon:d,text:u,tooltip:v,onClick:p,style:g,...m})=>{const{cssColor:b,isTranslucent:$,isTransparent:k,opaqueHex:T}=(0,h.useMemo)(()=>gl(r??""),[r]),x=vn(r??"",a),z=u??x??b,y=(0,h.useMemo)(()=>ei(b,{contrastBias:i,bgColor:n}),[b,i,n]),[A,D]=(0,h.useState)(!1),[B,O]=(0,h.useState)(!1),[I,C]=(0,h.useState)(!1),[U,H]=(0,h.useState)(!1),[rr,W]=(0,h.useState)(!1);(0,h.useEffect)(()=>{const _=$r=>{($r.metaKey||$r.key==="Meta")&&(D(!0),C(!0))},X=$r=>{const Vr=$r.metaKey;D(Vr),C(Vr)},dr=()=>{D(!1),C(!1)};return window.addEventListener("keydown",_),window.addEventListener("keyup",X),window.addEventListener("blur",dr),()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",X),window.removeEventListener("blur",dr)}},[]);const nr=e==="swatch"&&!!l&&(U&&A||(A||I)&&B),vr=nr||rr,M=vr?"fa-regular fa-xmark":d??"fa-solid fa-check",F=vr?"Remove color":v??x??(ll(b)?b.toUpperCase():b);(0,h.useEffect)(()=>{nr&&W(!0)},[nr]),(0,h.useEffect)(()=>{!nr&&t&&!o&&W(!1)},[o,nr,t]);const N=(0,h.useCallback)(_=>{const X=nr||_.metaKey?"remove":"select",dr={...He(b,{format:"auto",fallbackHex:b}),name:x};p?.({colorData:dr,action:X,source:e,shouldClosePicker:!1},_)},[nr,p,b,x,e]),R=(0,h.useCallback)(_=>{_.preventDefault(),_.stopPropagation(),N(_)},[N]),er=(0,h.useCallback)(_=>{_.metaKey&&(_.preventDefault(),_.stopPropagation(),N(_))},[N]),Z=(0,h.useCallback)(_=>{const X=_.propertyName??"";!(X==="color"||X.includes("color"))||nr||W(!1)},[nr]),ar=(0,h.useCallback)(_=>{_.key!=="Enter"||!nr||(_.preventDefault(),_.stopPropagation(),_.currentTarget.click())},[nr]),K=(0,h.useMemo)(()=>({...g??{},"--js\u2022hex":k?"transparent":$&&(T??b)||"","--js\u2022color":b,"--js\u2022fg":t&&!o||nr?y:""}),[g,k,$,T,b,t,o,nr,y]);return(0,c.jsx)(xr,{...m,_isCustom:!0,"arc-color-chip":e,layout:"icon",shape:"circle",size:"sm",hierarchy:"secondary",tooltip:F,text:z,icon:M,"is-draft":o?"":void 0,"is-selected":!o&&t?"":void 0,"is-translucent":$?"":void 0,"is-transparent":k?"":void 0,style:K,onClick:R,onContextMenu:er,onMouseEnter:_=>{O(!0),C(_.metaKey)},onMouseMove:_=>{C(_.metaKey)},onMouseLeave:()=>{O(!1),C(!1),W(!1)},onFocus:()=>H(!0),onBlur:()=>{H(!1),W(!1)},onKeyDown:ar,onTransitionEnd:Z})});zl.displayName="ArcColorSwatch";const ti=zl;ti.getColorData=He,ir("ArcColorSwatch",Mv);const Bv=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${E}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${E}•4);
      font-size: var(${f}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${E}•4);
      max-width: calc((var(${f}•24) + var(${E}•4)) * 7 + var(${E}•24));
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${E}•8);
      padding-top: var(${E}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${E}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${E}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${f}•10);
    }
  }

}
`,mn=({children:r,id:a,heading:e,showHeading:o=!0,colors:t=[],activeColor:i,format:n=$e.format,canAddColor:l=!1,canRemoveColor:d=!1,contrastBgColor:u,addColorFlow:v="standalone",sharedSwatchProps:p,onSwatchClick:g,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:k,...T})=>{const x=v==="embedded",z=Tr(void 0,"add-color-anchor"),y=Tr(void 0,"add-color-popover"),[A,D]=(0,h.useState)(t),[B,O]=(0,h.useState)(!1),{isSelectionControlled:I,activeSelectedColor:C,setUncontrolledSelectedColor:U,selectColor:H}=Av({activeColor:i}),rr=(0,h.useMemo)(()=>oi(C),[C]),W=(0,h.useMemo)(()=>A.map(J=>({normalized:vo(J),rgba:Er(fa(J))})),[A]),or=(0,h.useMemo)(()=>W.map(J=>rr?J.normalized===rr.comparisonKey?!0:!!rr.selectedRgba&&!!J.rgba&&un(J.rgba,rr.selectedRgba):!1),[W,rr]),nr=(0,h.useMemo)(()=>or.some(Boolean),[or]),vr=!x&&nr?void 0:C;(0,h.useEffect)(()=>{D(t)},[t]);const M=(0,h.useCallback)(J=>{if(typeof J=="object"&&J!==null&&"hsv"in J){$?.(J);return}const Ar=fa(J),Zr=vn(J),Xr=He(Ar,{format:n});$?.({...Xr,name:Zr})},[$,n]),F=(0,h.useCallback)(J=>{O(J),k?.(a,J)},[a,k]),N=(0,h.useCallback)(()=>oe?.handlePopover?.(y,"show"),[y]),R=(0,h.useCallback)(()=>oe?.handlePopover?.(y,"hide"),[y]),er=(0,h.useMemo)(()=>({id:a,heading:e,showHeading:o,colors:A,activeColor:i,format:n,canAddColor:l,canRemoveColor:d,contrastBgColor:u,addColorFlow:v,sharedSwatchProps:p,onSwatchClick:g,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:k}),[a,e,o,A,i,n,l,d,u,v,p,g,m,b,$,k]),{draftColorIndex:Z,draftColorValue:ar,startAddDraft:K,updateDraftColor:_,cancelDraftColor:X,saveDraftColor:dr,saveCurrentColor:$r}=Tv({palette:er,isSelectionControlled:I,onAddColor:m,emitColorChange:M,setLocalColors:D,setUncontrolledSelectedColor:U,initialColorValue:vr,shouldOpenPopover:!x,notifyAddColorToggle:F,showPopover:N,hidePopover:R}),Vr=(0,h.useMemo)(()=>A.map((J,Ar)=>Z===Ar&&ar!=null?ar:J),[Z,ar,A]),Da=(0,h.useMemo)(()=>{if(Z==null||ar==null||rr==null||Z<0||Z>=or.length)return or;const J=[...or];return J[Z]=bl(ar,rr),J},[or,Z,ar,rr]),Oa=(0,h.useMemo)(()=>oi(ar),[ar]),Ur=(0,h.useMemo)(()=>Z==null||Oa==null?!1:ai(A,ar,{skipIndex:Z}),[Z,Oa,ar,A]),Za=(0,h.useCallback)((J,Ar)=>{if(!J?.colorData)return;const Zr={color:J.colorData.value,name:J.colorData.name};if(J.action==="remove"&&d){D(Xr=>{const Ja=Xr.filter(ko=>!pn(ko,Zr));return Ja.length===Xr.length?Xr:Ja}),b?.(er,Zr,Ar);return}H(Zr),g?.({...J,source:"swatch",shouldClosePicker:!1},Ar),M(J.colorData)},[d,M,b,g,er,H]),Cr=(0,h.useCallback)(J=>Z===J&&ar!=null,[Z,ar]);(0,h.useEffect)(()=>{!x||Z==null||C==null||_(C)},[C,Z,x,_]);const Sa=(0,h.useCallback)(J=>{const Ar=J?.newState==="open";O(Ar),k?.(a,Ar)},[a,k]),de=(0,h.useCallback)(J=>{const Ar=C??$e.color;$r(Ar,J)},[C,$r]),Ce=(0,h.useCallback)(J=>{J.key!=="Escape"||!B||X(J)},[X,B]),ue=!C||x&&!B&&nr,xo=x&&B?"Cancel":x?"Add Current Color":"Add Color",Ke=x||!B;let Xa=de;return x||(Xa=B?X:K),(0,c.jsxs)("div",{...T,"arc-color-palette":a,"is-adding-color":B?"":void 0,children:[o&&e&&(0,c.jsx)("header",{"arc-color-palette-header":"",children:typeof e=="string"?(0,c.jsx)("strong",{children:e}):(0,c.jsx)(Qr,{...e,layout:"inline",isStrong:!0})}),(0,c.jsxs)("div",{"arc-color-palette-set":"",id:z,children:[Vr?.map((J,Ar)=>(0,h.createElement)(ti,{...p,key:`${fa(J)}-${Ar}`,color:J,kind:"swatch",isDraft:Cr(Ar),isSelected:Da[Ar],canRemoveColor:d&&!(x&&Cr(Ar)),contrastBgColor:u,tooltip:x&&Cr(Ar)?"Save Color":void 0,onClick:x&&Cr(Ar)?dr:Za})),l&&Ke&&(0,c.jsx)(xr,{"arc-add-color":"",popoverTarget:y,icon:"fa-regular fa-plus",layout:"icon",shape:"circle",size:"sm",hierarchy:"secondary",tooltip:xo,onClick:Xa,isDisabled:ue})]}),l&&!x&&(0,c.jsx)(Ve,{mode:"add",heading:"",color:ar??$e.color,format:n,onChange:J=>_(J.value),popoverProps:{id:y,popover:"manual",anchorAt:"right-center",alternateAnchorId:z,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Sa,onKeyDown:Ce,footerSlot:(0,c.jsxs)(fn,{"arc-color-picker-button-bar":"",children:[(0,c.jsx)(xr,{"arc-color-picker-button":"cancel",text:"Cancel",hierarchy:"secondary",size:"sm",onClick:X}),(0,c.jsx)(xr,{"arc-color-picker-button":"save",text:"Save",size:"sm",onClick:dr,isDisabled:Ur})]})}}),r&&(0,c.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};mn.addColor=Sv,mn.removeColor=zv,ir("ArcColorPalette",Bv);const Dv=(0,h.memo)(function({palette:a,canAddColor:e,canRemoveColor:o,activePaletteColor:t,contrastBgColor:i,onSwatchClick:n,onAddColor:l,onRemoveColor:d}){const u=(0,h.useCallback)((v,p)=>{n(v,p,a.id)},[a.id,n]);return(0,c.jsx)(mn,{...a,canAddColor:e??a.canAddColor,canRemoveColor:o,addColorFlow:"embedded",activeColor:t,contrastBgColor:i,onAddColor:l,onRemoveColor:d,onSwatchClick:u})}),El=({palettes:r=[],canAddColor:a,canRemoveColor:e,activePaletteColor:o,contrastBgColor:t,selectedNameRef:i,hsvRef:n,popoverId:l,onAddColor:d,onRemoveColor:u,commitLocalHsv:v,...p})=>{const g=(0,h.useRef)(r);g.current=r;const m=(0,h.useCallback)(($,k,T)=>{const x=g.current.find(y=>y.id===T);if(!x)return;if(k?.preventDefault(),k?.stopPropagation(),$?.action==="remove"&&(e??x.canRemoveColor)){x.onSwatchClick?.($,k);return}$?.colorData&&(i.current=$.colorData.name,v($.colorData.hsv));try{x.onSwatchClick?.($,k)}catch{}if(($?.shouldClosePicker??!0)&&l)try{oe.handlePopover(l,"hide")}catch{}},[e,v,l,i]),b=(0,h.useCallback)(($,k,T)=>{d?.($,k,T)},[d]);return r.length?(0,c.jsx)("div",{...p,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map($=>(0,c.jsx)(Dv,{palette:$,canAddColor:a,canRemoveColor:!!(e??$.canRemoveColor),activePaletteColor:o,contrastBgColor:t,onSwatchClick:m,onAddColor:b,onRemoveColor:u},$.id))}):null},_l=1,Tl="Please enter six hex digits \u2192 A1B2C3",Ov="Use six hex digits (RGB only). Opacity is not editable in this picker.",Fv=/^[0-9A-Fa-f]{3}$/,Nv=/^[0-9A-Fa-f]{4}$/,Hv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Vv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Uv=0,Wv=255,be=r=>r.replace(/#/g,"").trim(),Il=r=>r.length===3?`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:r,nt=r=>ka({...r,a:1},!1).replace(/^#/,""),Kv=r=>Math.min(Wv,Math.max(Uv,Math.round(r))),jl=r=>{if(Fv.test(r))return{kind:"three",expanded:Il(r)};if(Nv.test(r)){const a=Er(`#${r}`);if(a)return{kind:"four",shorthand:r,expanded:nt(a),alphaPercent:Math.round(a.a*100)}}return null},Gv=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:Tl,Yv=(r,a,e)=>{const o=be(r),t=jl(o),i=o.length>0&&(!e&&o.length===8||!a&&o.length!==6&&o.length!==8||Er(`#${o}`)===null),l=!a&&o.length>0&&o.length!==6&&o.length!==8||!e&&o.length===8?Gv(t):Tl,d=!e&&o.length===8?Ov:l;let u="Apply expanded six-digit hex";return t?.kind==="four"?u=`Apply #${t.expanded.toUpperCase()} and ${t.alphaPercent}% opacity`:t?.kind==="three"&&(u=`Apply expanded hex ${t.expanded.toUpperCase()}`),{isInvalid:i,errorAid:{tooltip:d,ariaLabel:u,fix:t}}},Rl=(r,a,e)=>{const o=Er(`#${r}`);o&&(a(r,{applyHexAlpha:!0}),e(nt(o)))},qv=(r,a,e,o)=>{if(a){Rl(r,e,o);return}const t=Er(`#${r}`);if(t){const i=nt(t);o(i),e(i)}},Zv=(r,a,e,o)=>{if(a)Rl(r,e,o);else{const t=r.slice(0,6);o(t),e(t)}},Xv=(r,a,e,o)=>{r.kind==="three"?(e(r.expanded),a(r.expanded)):o?(a(r.shorthand,{applyHexAlpha:!0}),e(r.expanded)):(e(r.expanded),a(r.expanded))},Jv=r=>{const a=be(r);return a.length>6?a.slice(0,6):r},Qv=(r,a,e,o,t)=>{const i=Er(`#${r}`)??a,n={...i,[e]:Kv(i[e]+o*t)};return nt(n)},rg=(r,a,e,o)=>{if(!e&&(r.length===8||o?.applyHexAlpha===!0))return!1;if(!a&&r.length>0){const t=r.length===6||r.length===8,i=o?.applyHexAlpha===!0&&r.length===4;if(!t&&!i)return!1}return!0},ag=(r,a,e)=>{const o=Er(`#${r}`);return o?e?.applyHexAlpha===!0&&(r.length===4||r.length===8)?o:{...o,a:a.a}:null},po=r=>(0,c.jsx)(c.Fragment,{children:!!r.children&&(0,c.jsx)("span",{...r})}),eg=r=>(0,c.jsx)(c.Fragment,{children:!!r.children&&(0,c.jsx)("span",{...r})}),ni=({children:r,...a})=>(0,c.jsx)(c.Fragment,{children:!!r&&(0,c.jsx)(me,{...a,children:(0,c.jsx)(Oe,{children:r})})}),og=({children:r,layout:a,size:e,variant:o,tag:t="span",...i})=>(0,c.jsx)(t,{...i,"data-layout":a,"data-size":e,"data-variant":o,children:r}),tg=()=>(0,c.jsx)("span",{"input-element":"spacer"}),ng=r=>(0,c.jsx)(po,{...r,"input-element":"header"}),cg=r=>(0,c.jsx)(ni,{...r,"input-element":"header-label"}),ig=r=>(0,c.jsx)(po,{...r,"input-element":"header-slot"}),sg=r=>(0,c.jsx)(po,{...r,"input-element":"body"}),lg=r=>(0,c.jsx)(ni,{...r,"input-element":"input-prefix"}),dg=r=>(0,c.jsx)(ni,{...r,"input-element":"input-suffix"}),ug=r=>(0,c.jsx)(eg,{...r,"input-element":"input-action"}),hg=r=>(0,c.jsx)(po,{...r,"input-element":"footer"}),vg=r=>(0,c.jsx)(po,{...r,"input-element":"footer-caption"}),gg=r=>(0,c.jsx)(po,{...r,"input-element":"footer-slot"}),pg=r=>a=>{if(!(a?.target instanceof HTMLInputElement))return;const e={name:a?.target?.name,value:a?.target?.value};r?.(e,a)},fr=s`--arc•input`,ce=s`${fr}•fg`,bn=s`${ce}•disabled`,$n=s`${ce}•readonly`,yn=s`${ce}•invalid`,wa=s`${fr}•bg`,xn=s`${wa}•hover`,kn=s`${wa}•disabled`,wn=s`${wa}•readonly`,Cn=s`${wa}•invalid`,fg=s`${fr}•align`,Ll=s`${fg}•items`,mg=s`${fr}•flex`,bg=s`${mg}•direction`,Pl=s`${fr}•header`,An=s`${Pl}•label•color`,Ml=s`${Pl}•slot•color`,Bl=s`${fr}•footer`,ci=s`${Bl}•caption•color`,Dl=s`${Bl}•slot•color`,ii=s`${fr}•border`,si=s`${ii}•radius`,$g=s`${ii}•width`,Ca=s`${ii}•color`,li=s`${fr}•outline`,Ol=s`${li}•size`,Fl=s`${li}•offset`,Nl=s`${li}•color`,ct=s`${fr}•height`,yg=s`${fr}•padding`,Sn=s`${yg}•inline`,di=s`${Sn}•end`,Hl=s`${fr}•slot`,ui=s`${Hl}•gap`,hi=s`${Hl}•font•size`,zn=s`${Ca}•hover`,En=s`${Ca}•disabled`,vi=s`${Ca}•readonly`,it=s`${Ca}•invalid`,xg=s`${fr}•action•max•height`,Vl=s`${fr}•gap`,gi=s`${fr}•font•size`,kg=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${ct}: var(${f}•48);
    ${di}: var(${E}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${ct}: var(${f}•40);
  }

  &[data-size=md] {
    ${ct}: var(${f}•32);
    ${si}: var(${f}•4);
    ${xg}: 80%;
  }

  &:has(select) {
    ${Sn}: 0;
    ${Ll}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${gi}: var(${f}•14);
    ${hi}: var(${f}•12);

    ${ct}: var(${f}•40); /* default size */
    ${Vl}: var(${E}•6);
    ${ui}: var(${E}•4);
    ${Sn}: var(${E}•12);
    ${di}: var(${E}•3);
    ${si}: var(${f}•8);
    ${$g}: var(${f}•1);
    ${Ol}: var(${f}•2);
    ${Fl}: var(${f}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${fr}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${gi}: 0.875em; /* 14px at 100% */
      ${hi}: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${ce}: var(--arc-color-fg-primary);
    ${An}: inherit;
    ${Ml}: var(--arc-color-fg-secondary);
    ${ci}: var(--arc-color-fg-secondary);
    ${Dl}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${wa}: var(--arc-color-bg-primary);
      ${xn}: var(--arc-color-bg-primary);
      ${Ca}: var(--arc-color-border-mid);
      ${zn}: var(--arc-color-border-heavy);

      ${bn}: var(--arc-color-fg-disabled);
      ${kn}: var(--arc-color-bg-secondary);
      ${En}: var(--arc-color-border-mid);

      ${$n}: var(--arc-color-fg-primary);
      ${wn}: var(--arc-color-bg-disabled);
      ${vi}: var(--arc-color-border-mid);

      ${yn}: var(--arc-color-fg-critical-mid);
      ${Cn}: var(--arc-color-bg-primary);
      ${it}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${wa}: var(--arc-color-bg-secondary);
      ${xn}: var(--arc-color-bg-hover-default);
      ${Ca}: transparent;
      ${zn}: var(--arc-color-border-stark);

      ${yn}: var(--arc-color-fg-critical-mid);
      ${Cn}: var(--arc-color-bg-critical-muted);
      ${it}: transparent;

      ${bn}: var(--arc-color-fg-disabled);
      ${kn}: var(--arc-color-bg-disabled);
      ${En}: transparent;

      ${$n}: var(--arc-color-fg-primary);
      ${wn}: var(--arc-color-bg-disabled);
      ${it}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${wa}: transparent;
      ${xn}: var(--arc-color-bg-hover-default);
      ${Ca}: transparent;
      ${zn}: transparent;

      ${yn}: var(--arc-color-fg-critical-mid);
      ${Cn}: transparent;
      ${it}: var(--arc-color-fg-critical-mid);

      ${bn}: var(--arc-color-fg-disabled);
      ${kn}: transparent;
      ${En}: transparent;

      ${$n}: var(--arc-color-fg-primary);
      ${wn}: var(--arc-color-bg-disabled);
      ${vi}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${fr}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${Ca}: var(--arc-input-border-color-hover, var(${zn}));
      ${wa}: var(--arc-input-background-hover, var(${xn}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Nl}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${fr}•cursor: default;
    ${ce}: var(${$n});
    ${wa}: var(${wn});
    ${Ca}: var(${vi});
  }

  &:has(input:disabled, select:disabled) {
    ${fr}•cursor: not-allowed;
    ${ce}: var(${bn});
    ${wa}: var(${kn});
    ${Ca}: var(${En});
    ${An}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${wa}: var(${Cn});
    ${An}: var(${ce});
    ${Ca}: var(${it});
    ${ci}: var(${yn});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${fr}•display: flex;
  }

  &[data-layout=hug] {
    ${fr}•display: inline-flex;
  }

  & {
    ${fr}•border: var(--arc-border-width-sm) solid var(${Ca});
    ${fr}•outline: var(${Ol}) solid var(${Nl}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${fr}•display, flex);
  flex-direction: var(${bg}, column);
  gap: var(${ui});
  color: var(--arc-input-color, var(${ce}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${hi}));
    gap: var(${ui});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${An}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Ml}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${ci}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Dl}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${Ll}, center);
    gap: var(--arc-input-gap, var(${Vl}));
    height: var(${ct});
    font-size: var(${gi});

    color: var(--arc-input-color, var(${ce}));
    background-color: var(--arc-input-background, var(${wa}));
    border: var(--arc-input-border, var(${fr}•border));
    border-radius: var(--arc-input-border-radius, var(${si}));
    outline: var(${fr}•outline, none);
    outline-offset: var(${Fl});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${fr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Sn}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${di});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${fr}•action•max•height, unset);
    }
  }
}

}
`,wg={onChangeHandler:pg,Wrapper:og,Spacer:tg,Header:ng,HeaderLabel:cg,HeaderSlot:ig,InputBody:sg,InputPrefix:lg,InputSuffix:dg,InputAction:ug,Footer:hg,FooterCaption:vg,FooterSlot:gg};ir("ArcInput",kg);const yr=wg,Cg="[input-element=body]",Ag=100;function Sg({inputRef:r,onChange:a,enabled:e,deltaPerStep:o=Ag}){const t=(0,h.useRef)(a);t.current=a,(0,h.useEffect)(()=>{if(!e||o<=0)return;let i=0;const n=()=>r.current,l=()=>{const b=n()?.closest(Cg);return b instanceof HTMLElement?b:null},d=(m,b)=>{const $=t.current;if(!$)return;const k={name:m.name,value:b};$(k,{target:m,currentTarget:m})},u=()=>{i=0},v=m=>{const b=n();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;m.preventDefault(),m.stopPropagation();const $=Number(b.step)||1,k=Number(b.min),T=Number(b.max),x=Number.isFinite(k)?k:void 0,z=Number.isFinite(T)?T:void 0;let y=Number(b.value);if(!Number.isFinite(y))return;i+=m.deltaY;const A=o,D=()=>{const I=Math.max(x??-1/0,y-$);return I===y?!1:(y=I,d(b,String(I)),!0)},B=()=>{const I=Math.min(z??1/0,y+$);return I===y?!1:(y=I,d(b,String(I)),!0)};for(;i>=A;){if(!D()){i=0;break}i-=A}for(;i<=-A;){if(!B()){i=0;break}i+=A}},p=l(),g=n();if(!(!p||!g||g.type!=="number"))return g.addEventListener("blur",u),p.addEventListener("wheel",v,{passive:!1}),()=>{g.removeEventListener("blur",u),p.removeEventListener("wheel",v)}},[e,o,r])}const pi=q(za,["fill","hug"]),fi=q(Jr,["inherit","xl","lg","md"]),Ul=q(Sr,["outline","solid","plain"]),zg=pi,Eg=fi,_g=q(Ul,["outline","solid"]),Tg=["text","number","password","email","url"],_n=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",inputProps:o,headerLabel:t,headerSlot:i,inputPrefix:n,inputAction:l,inputSuffix:d,footerCaption:u,footerSlot:v,numberInputWheel:p,...g},m)=>{const{id:b,onChange:$,...k}=o,T="arc-search"in g,x=T?"search":k?.type||"text",z=k?.disabled||void 0,y=k?.readOnly||void 0,A=k?.required||void 0,D=!!(t||i),B=!!(u||v),O=(0,h.useRef)(null),I=(0,h.useCallback)(C=>{O.current=C,_a(m,C)},[m]);return Sg({inputRef:O,onChange:$,enabled:x==="number"&&p!==!1,...typeof p=="object"&&typeof p.deltaPerStep=="number"&&{deltaPerStep:p.deltaPerStep}}),(0,c.jsxs)(yr.Wrapper,{...g,"arc-text-input":"","arc-input":x,layout:r,size:a,variant:e,children:[D&&(0,c.jsxs)(yr.Header,{children:[(0,c.jsx)(yr.HeaderLabel,{htmlFor:b,children:t}),!!i&&(0,c.jsx)(yr.Spacer,{}),(0,c.jsx)(yr.HeaderSlot,{children:i})]}),(0,c.jsxs)(yr.InputBody,{children:[(0,c.jsx)(yr.InputPrefix,{htmlFor:b,children:n}),(0,c.jsx)("input",{...k,...T?{type:x}:{},ref:I,id:b,"arc-input-type":x,onChange:yr.onChangeHandler($),"aria-disabled":z,"aria-readonly":y,"aria-required":A}),(0,c.jsx)(yr.InputSuffix,{htmlFor:b,children:d}),(0,c.jsx)(yr.InputAction,{children:l})]}),B&&(0,c.jsxs)(yr.Footer,{children:[(0,c.jsx)(yr.FooterCaption,{children:u}),!!v&&(0,c.jsx)(yr.Spacer,{}),(0,c.jsx)(yr.FooterSlot,{children:v})]})]})}),Wl=({commitDraft:r,setIsEditing:a,onRevert:e})=>{const o=(0,h.useCallback)(()=>{a(!0)},[a]),t=(0,h.useCallback)(()=>{a(!1),r()},[a,r]),i=(0,h.useCallback)(n=>{if(n.key==="Enter"){n.preventDefault(),a(!1),r(),n.currentTarget.blur();return}n.key==="Escape"&&(n.preventDefault(),a(!1),e(),n.currentTarget.blur())},[a,r,e]);return{onFocus:o,onBlur:t,onKeyDown:i}},Kl=({hsv:r,draftValue:a,label:e="Hex",showLabel:o=!0,setIsEditing:t,commitDraft:i,setDraftValue:n,expandHexShorthand:l=!1,hasAlphaTools:d=!0})=>{const u=Tr(void 0,"hex-input"),v=(0,h.useRef)(null),p=nt(Pa(r)),[g,m]=(0,h.useState)(!1),{isInvalid:b,errorAid:$}=(0,h.useMemo)(()=>Yv(a,l,d),[a,l,d]),{onFocus:k,onBlur:T,onKeyDown:x}=Wl({commitDraft:i,setIsEditing:t,onRevert:()=>n(p)}),z=(0,h.useCallback)(()=>{m(!0);const C=be(a);if(C.length===8){Zv(C,d,i,n),T();return}if(l&&C.length===3){const U=Il(C);n(U),i(U),t(!1),T();return}l&&C.length===4&&qv(C,d,i,n),T()},[a,l,d,n,i,t,T]),y=(0,h.useCallback)(C=>{if(C.key!=="ArrowUp"&&C.key!=="ArrowDown")return;const U=C.key==="ArrowUp"?_l:-_l,H=C.altKey?"r":C.metaKey?"g":"b",rr=C.shiftKey?16:1,W=Qv(be(a),Pa(r),H,U,rr);n(W),i(W),C.preventDefault()},[a,r,n,i]),A=(0,h.useCallback)(C=>{if(y(C),!C.defaultPrevented){if(C.key==="Enter"){C.preventDefault(),t(!1),C.currentTarget.blur();return}C.key==="Escape"&&x(C)}},[y,t,x]),D=({value:C})=>{const U=C??"",H=d?U:Jv(U);n(H),i(H)},B=b&&g,O=B?$.tooltip:void 0,I=(0,h.useCallback)(()=>{const C=jl(be(a));C&&Xv(C,i,n,d),queueMicrotask(()=>{v.current?.focus()})},[a,i,n,d]);return(0,c.jsx)(_n,{ref:v,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:o?e:void 0,inputPrefix:"#",inputAction:B?(0,c.jsx)(xr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:$.tooltip,"aria-label":$.ariaLabel,onClick:I}):void 0,inputProps:{id:u,placeholder:"...",value:a,pattern:d?Hv:Vv,maxLength:d?8:6,title:O,"aria-invalid":B?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:k,onBlur:z,onKeyDown:A,onChange:D}})},mi=typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",Gl=mi?window.EyeDropper:void 0,Yl=Gl?new Gl:void 0,ql=({onColorPicked:r,...a})=>{const[e,o]=(0,h.useState)(!1),t=async()=>{if(!(!mi||!Yl||e)){o(!0);try{const{sRGBHex:i}=await Yl.open();if(typeof r=="function"){const n=Pa(gn(i,"#000000"));r(ka({...n,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(i){i instanceof DOMException&&i.name==="AbortError"||console.error("EyeDropper failed:",i)}finally{o(!1)}}};return mi?(0,c.jsx)("div",{"arc-color-eye-dropper":"",children:(0,c.jsx)(xr,{...a,onClick:t,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:"Dropper",tooltip:"Pick a color"})}):null},bi=({id:r,kind:a,label:e,value:o,max:t,min:i=0,step:n=1,isDisabled:l=!1,showLabel:d=!1,showTooltip:u=!1,tooltipText:v,onChange:p})=>{const g=Tr(void 0,r),m=t>1&&Number.isInteger(n)&&n>=1?Math.round(o):o,b=G(m,i,t),$=b.toFixed(n.toString().split(".")[1]?.length??0),k=(0,h.useRef)(null),T=t-i,z=`${(T<=0?0:(b-i)/T)*100}%`,y=D=>{const B=D.currentTarget.valueAsNumber,O=Number.isFinite(B)?B:i;p(G(O,i,t))},A=(0,c.jsx)("input",{id:g,type:"range",min:i,max:t,step:n,value:$,disabled:l??void 0,onChange:y,"aria-label":e});return(0,c.jsxs)("div",{"arc-color-slider":a,"data-disabled":l??void 0,children:[d&&!!e&&(0,c.jsx)(me,{htmlFor:g,children:(0,c.jsx)("strong",{children:e})}),(0,c.jsx)("div",{"arc-color-surface":a,children:u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{ref:k,"aria-hidden":!0,style:{position:"absolute",left:z,top:"50%",transform:"translate(-50%, -50%)",width:1,height:1,pointerEvents:"none"}}),(0,c.jsx)(qt,{alternateAnchor:k,text:v??$,scheme:"light",isStrong:!1,hasTail:!1,offset:11,children:A})]}):A})]})},Ig=196.6,jg=(r,a)=>{const e=r.getContext("2d",{alpha:!1});if(!e)return;const{width:o,height:t}=r;if(!o||!t)return;const i=e.createImageData(o,t),n=i.data;let l=0;for(let d=0;d<t;d+=1){const u=1-(t<=1?0:d/(t-1));for(let v=0;v<o;v+=1){const p=o<=1?0:v/(o-1),g=Pa({h:a,s:p,v:u,a:1});n[l++]=Hr(g.r),n[l++]=Hr(g.g),n[l++]=Hr(g.b),n[l++]=255}}e.putImageData(i,0,0)},Rg=({value:r,label:a="Color Saturation and Value",step:e=.01,stepLarge:o=.1,isDisabled:t=!1,showLabel:i=!1,onChange:n})=>{const l=Tr(void 0,"color-field"),d=(0,h.useRef)(null),u=(0,h.useRef)(null),v=(0,h.useRef)(null),p=(0,h.useRef)(null),g=(0,h.useRef)(null),m=(0,h.useRef)(null),b=(0,h.useRef)(null),[$,k]=(0,h.useState)(!1),[T,x]=(0,h.useState)(null),z=G(r.saturation,0,1),y=G(r.value,0,1),A=Math.round(z*100),D=Math.round(y*100),B=(0,h.useMemo)(()=>{const M=r.hue;return typeof M=="number"&&Number.isFinite(M)?M:Ig},[r.hue]),O=(0,h.useMemo)(()=>rl(B),[B]),I=(0,h.useCallback)((M,F)=>{n({hue:B,saturation:G(M,0,1),value:G(F,0,1)})},[B,n]),C=(0,h.useCallback)((M,F,N)=>{const R=G((M-N.left)/N.width,0,1),er=G((F-N.top)/N.height,0,1);I(R,1-er)},[I]),U=(0,h.useCallback)(M=>{if(t)return;const{clientX:F,clientY:N,pointerId:R,currentTarget:er}=M,Z=er.getBoundingClientRect();p.current=R,v.current=Z,g.current={clientX:F,clientY:N},m.current=null,b.current=null,er.focus(),er.setPointerCapture(R),k(!0),C(F,N,Z)},[t,C]),H=(0,h.useCallback)(M=>{if(t)return;const{clientX:F,clientY:N,currentTarget:R,pointerId:er}=M;if(p.current!==er)return;const Z=v.current??R.getBoundingClientRect();if(M.shiftKey){const ar=g.current;if(ar){if(m.current===null){const dr=Math.abs(F-ar.clientX),$r=Math.abs(N-ar.clientY);m.current=dr>=$r?"s":"v",b.current={clientX:F,clientY:N}}const K=b.current??ar,_=m.current==="s"?F:K.clientX,X=m.current==="v"?N:K.clientY;C(_,X,Z);return}}else m.current=null,b.current=null;C(F,N,Z)},[t,C]),rr=(0,h.useCallback)(()=>{p.current=null,v.current=null,g.current=null,m.current=null,b.current=null,k(!1)},[]),W=(0,h.useCallback)(M=>{if(t)return;const F=M.shiftKey?o:e;let N=z,R=y;switch(M.key){case"ArrowLeft":N=z-F;break;case"ArrowRight":N=z+F;break;case"ArrowUp":R=y+F;break;case"ArrowDown":R=y-F;break;case"Home":N=0,R=1;break;case"End":N=1,R=0;break;default:return}M.preventDefault(),I(N,R)},[t,e,o,I,z,y]),or=(0,h.useCallback)(M=>{if(t||!M.key.startsWith("Arrow"))return;const F=M.shiftKey?o:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-F:F;M.preventDefault(),I(z+N,y)},[t,e,o,I,z,y]),nr=(0,h.useCallback)(M=>{if(t||!M.key.startsWith("Arrow"))return;const F=M.shiftKey?o:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-F:F;M.preventDefault(),I(z,y+N)},[t,e,o,I,z,y]),vr=(0,h.useMemo)(()=>({"--js\u2022s":String(z),"--js\u2022v":String(1-y)}),[z,y]);return(0,h.useLayoutEffect)(()=>{const M=d.current,F=u.current;if(!M||!F)return;const N=()=>{const Z=M.getBoundingClientRect(),ar=Math.max(1,Math.round(Z.width)),K=Math.max(1,Math.round(Z.height)),_=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),X=Math.max(1,Math.round(ar*_)),dr=Math.max(1,Math.round(K*_));F.width!==X&&(F.width=X),F.height!==dr&&(F.height=dr),jg(F,O)};N();const R=new ResizeObserver(()=>{N()});R.observe(M);const er=()=>{N()};return F.addEventListener("contextrestored",er),()=>{R.disconnect(),F.removeEventListener("contextrestored",er)}},[O]),(0,c.jsxs)("div",{"arc-color-field":"","is-disabled":t?"":void 0,"is-interacting":$?"":void 0,"sr-focus":T??void 0,children:[i&&!!a&&(0,c.jsx)("label",{htmlFor:l,children:a}),(0,c.jsxs)("div",{id:l,ref:d,"arc-color-surface":"field",style:vr,tabIndex:t?-1:0,role:"application","aria-label":a,"aria-describedby":`${l}-readout`,onPointerDown:U,onPointerMove:H,onPointerUp:rr,onPointerCancel:rr,onKeyDown:W,children:[(0,c.jsx)("canvas",{ref:u,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,c.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,c.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":T==="saturation"?"":void 0,"aria-hidden":"true"}),(0,c.jsx)("div",{"arc-color-field-slice":"value","has-focus":T==="value"?"":void 0,"aria-hidden":"true"})]}),(0,c.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,c.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:t?-1:0,"aria-label":"Saturation","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":A,onKeyDown:or,onFocus:()=>x("saturation"),onBlur:()=>x(null)}),(0,c.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:t?-1:0,"aria-label":"Value","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":D,onKeyDown:nr,onFocus:()=>x("value"),onBlur:()=>x(null)})]}),(0,c.jsxs)("div",{id:`${l}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:["Saturation ",A,"%. Value ",D,"%."]})]})},Lg=({hsv:r,draftValue:a,label:e="Opacity",showLabel:o=!1,setIsEditing:t,commitDraft:i,setDraftValue:n})=>{const l=Tr(void 0,"alpha-input"),{onFocus:d,onBlur:u,onKeyDown:v}=Wl({commitDraft:i,setIsEditing:t,onRevert:()=>n(ho(r.a))}),p=({value:g})=>{const m=String(g??1);n(m),i(m)};return(0,c.jsx)(_n,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:o?e:void 0,numberInputWheel:{deltaPerStep:24},inputProps:{id:l,"aria-label":e,placeholder:"...",value:a,type:"number",min:0,max:100,step:1,onFocus:d,onBlur:u,onKeyDown:v,onChange:p}})},Zl=r=>ka({...r,a:1},!1).replace(/^#/,""),Pg=()=>typeof window<"u"&&"EyeDropper"in window,Xl=({color:r,hsv:a,isSimpleMode:e,selectedNameRef:o,hsvRef:t,commitLocalHsv:i,tools:n,expandHexShorthand:l,...d})=>{const u=(0,h.useRef)(!1),[v,p]=(0,h.useState)(()=>{const R=Er(fa(r));return R?Zl(R):"000000"}),[g,m]=(0,h.useState)(ho(a.a)),[b,$]=(0,h.useState)(!1),k=(0,h.useCallback)(R=>{o.current=void 0;const Z={...t.current,...R};i(Z)},[i,t,o]),T=(0,h.useCallback)(R=>k({s:R.saturation,v:R.value}),[k]),x=R=>{const er=gn(R,"#000000");i(er)},z=(0,h.useMemo)(()=>!n||n.includes("color-field"),[n]),y=(0,h.useMemo)(()=>!n||n.includes("hue-slider"),[n]),A=(0,h.useMemo)(()=>!n||n.includes("alpha-slider"),[n]),D=(0,h.useMemo)(()=>!n||n.includes("hex-input"),[n]),B=(0,h.useMemo)(()=>!n||n.includes("alpha-input"),[n]),O=(0,h.useMemo)(()=>!n||n.includes("eye-dropper")&&Pg(),[n]),I=(0,h.useMemo)(()=>A||B,[A,B]),C=(R,er)=>{o.current=void 0;const Z=be(R??v);if(!rg(Z,l??!1,I,er))return;const ar=Pa(t.current),K=ag(Z,ar,er);if(!K||Gc(K,ar))return;const _=rt(K,t.current.h);i(_)},U=R=>{o.current=void 0;const er=hl(R??g);er!=null&&(k({a:er}),m(ho(er)))},H=(0,h.useCallback)(R=>{p(be(R))},[]),rr=(0,h.useCallback)(R=>{m(R)},[]),W=(0,h.useCallback)(R=>{u.current=R},[]),or=(0,h.useCallback)(R=>{$(R),R&&m(ho(t.current.a))},[t]);(0,h.useEffect)(()=>{if(u.current)return;const R=Pa(a),er=Zl(R);p(Z=>{if(Z===er)return Z;if(!l){const ar=be(Z);if(ar.length===3||ar.length===4||ar.length===8){const K=Er(`#${ar}`);if(K){const _={...K,a:R.a};if(Gc(_,R))return Z}}}return er})},[a,l]);const nr=(0,h.useMemo)(()=>b?g:ho(a.a),[b,g,a.a]),vr=(0,h.useMemo)(()=>({hue:a.h,saturation:a.s,value:a.v}),[a]),M=(0,h.useMemo)(()=>G(Math.round(a.a*100),0,100),[a.a]),F=(0,h.useMemo)(()=>`${M.toString()}%`,[M]),N=(0,h.useMemo)(()=>`${Math.round(a.h).toString()}\xB0`,[a.h]);return(0,c.jsx)("div",{...d,"arc-color-tools":e?"simple":"","arc-color-picker-section":"tools",children:e?(0,c.jsxs)(c.Fragment,{children:[D&&(0,c.jsx)(Kl,{hsv:a,draftValue:v,setIsEditing:W,commitDraft:C,setDraftValue:H,expandHexShorthand:l,hasAlphaTools:I}),O&&(0,c.jsx)(ql,{onColorPicked:x}),A&&(0,c.jsx)(bi,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!0,showTooltip:!0,tooltipText:F,onChange:R=>k({a:R/100})})]}):(0,c.jsxs)(c.Fragment,{children:[z&&(0,c.jsx)(Rg,{value:vr,onChange:T}),O&&(0,c.jsx)(ql,{onColorPicked:x}),(y||A)&&(0,c.jsxs)("div",{"arc-color-sliders":"",children:[y&&(0,c.jsx)(bi,{kind:"hue",value:a.h,min:0,max:360,step:1,id:"hue-slider",label:"Hue",showLabel:!1,showTooltip:!0,tooltipText:`Hue: ${N}`,onChange:R=>k({h:R})}),A&&(0,c.jsx)(bi,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!1,showTooltip:!0,tooltipText:`Opacity: ${F}`,onChange:R=>k({a:R/100})})]}),(D||B)&&(0,c.jsxs)("div",{"arc-color-inputs":"",children:[D&&(0,c.jsx)(Kl,{hsv:a,draftValue:v,setIsEditing:W,commitDraft:C,setDraftValue:H,expandHexShorthand:l,hasAlphaTools:I}),B&&(0,c.jsx)(Lg,{hsv:a,showLabel:!D,draftValue:nr,setIsEditing:or,commitDraft:U,setDraftValue:rr})]})]})})},Jl=({heading:r,showGoBack:a,goBackProps:e,...o})=>(0,c.jsx)(oe,{...o,variant:"common","arc-color-picker-wrapper":"",showGoBack:a,goBackProps:e,headerSlot:!!r&&(0,c.jsx)(Qr,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});Jl.displayName="ArcColorPickerWrapper";const $e={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},Mg={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"circle",size:"md"},Bg=(r,a)=>r===void 0?!0:a?r.includes("hex-input")||r.includes("eye-dropper")||r.includes("alpha-slider"):r.includes("color-field")||r.includes("eye-dropper")||r.includes("hue-slider")||r.includes("alpha-slider")||r.includes("hex-input")||r.includes("alpha-input"),Ve=({children:r,mode:a=$e.mode,color:e=$e.color,format:o=$e.format,heading:t=$e.heading,tools:i,omitTools:n,isInline:l=!1,showGoBack:d=!1,goBackProps:u,palettes:v,popoverProps:p,onChange:g,onAddColor:m,onRemoveColor:b,expandHexShorthand:$,...k})=>{const T=(0,h.useMemo)(()=>fl(e).color,[e]),x=Tr(p?.id??void 0,"color-picker"),z=(0,h.useMemo)(()=>a==="simple",[a]),[y,A]=(0,h.useState)(()=>{const _=Er(T);return _?rt(_):{h:0,s:0,v:0,a:1}}),D=(0,h.useRef)(y),B=(0,h.useRef)(T),O=(0,h.useRef)(null),I=(0,h.useRef)(void 0);(0,h.useEffect)(()=>{D.current=y},[y]);const C=(0,h.useCallback)(_=>{if(g)try{const X=He(_,{format:o});B.current=X.value,O.current=X.rgba,g({...X,name:I.current})}catch{}},[g,o]),U=(0,h.useCallback)(_=>{qc(_,D.current)||(D.current=_,A(_),C(_))},[C]),H=(0,h.useMemo)(()=>{const _=z?"":"manual";return p?.popover??_},[p?.popover,z]),rr=(0,h.useMemo)(()=>{const _=Pa(y);return{"--js\u2022hue":`hsl(${y.h} 100% 50%)`,"--js\u2022hex":ka({..._,a:1},!1),"--js\u2022rgb":Ne(_)}},[y]),W=(0,h.useMemo)(()=>Ne(Pa(y)),[y]),or=(0,h.useMemo)(()=>v?.map(_=>({..._,canAddColor:!1,canRemoveColor:!1}))??[],[v]),nr=(0,h.useRef)(null),vr=(0,h.useCallback)(()=>{const _=nr.current;if(!_)return;const X=z?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';_.querySelector(X)?.focus()},[z]),M=p?.onToggle,F=(0,h.useCallback)(_=>{_?.newState==="open"&&setTimeout(vr,0),M?.(_)},[vr,M]);(0,h.useEffect)(()=>{if(T!==B.current){B.current=T;try{const _=Er(T)??{r:0,g:0,b:0,a:1},X=O.current;if(X&&Yc(_,X))return;const dr=Pa(D.current);if(Yc(_,dr))return;I.current=void 0;const $r=rt(_,D.current.h);if(qc($r,D.current))return;D.current=$r,A($r)}catch{}}},[T]);const N=(0,h.useMemo)(()=>{const _=i===void 0?[...z?Js:Xs]:[...i];if(!n?.length)return _;const X=new Set(n);return _.filter(dr=>!X.has(dr))},[i,z,n]),R=(0,h.useMemo)(()=>Bg(N,z),[N,z]),er=(0,h.useMemo)(()=>N.includes("palettes"),[N]),Z=(0,c.jsxs)("div",{...k,ref:nr,"arc-color-picker":z?"simple":"","is-inline":l?"":void 0,style:rr,children:[z?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(El,{palettes:er?or:void 0,activePaletteColor:W,commitLocalHsv:U,selectedNameRef:I,hsvRef:D,popoverId:x,onAddColor:m??(()=>{}),onRemoveColor:b}),R&&(0,c.jsx)(Xl,{color:T,hsv:y,hsvRef:D,selectedNameRef:I,commitLocalHsv:U,isSimpleMode:z,tools:N,expandHexShorthand:$})]}):(0,c.jsxs)(c.Fragment,{children:[R&&(0,c.jsx)(Xl,{color:T,hsv:y,selectedNameRef:I,hsvRef:D,commitLocalHsv:U,tools:N,expandHexShorthand:$}),(0,c.jsx)(El,{palettes:er?v:void 0,activePaletteColor:W,commitLocalHsv:U,selectedNameRef:I,hsvRef:D,popoverId:x,onAddColor:m??(()=>{}),onRemoveColor:b,"has-divider":R?"top":void 0})]}),r&&(0,c.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(l)return Z;const ar=p?.anchorProps??Mg,K=z?{...p,anchorAt:p?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...p,heading:t??void 0,showGoBack:d??void 0,goBackProps:u??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,c.jsx)(Jl,{...K,popover:H,anchorProps:ar,id:x,onToggle:F,children:Z})};Ve.getColorAs=pl,Ve.getColorData=He,Ve.getContrastColor=ei,Ve.addColor=Ev,Ve.removeColor=_v,ir("ArcColorPicker",Pv);const Dg=s`--arc•menu`,ye=s`${Dg}•item`,Og=s`
@layer arc-components {

  [arc-menu] {
    ${ye}•gap: var(${f}•8);
    ${ye}•fg: inherit;
    ${ye}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${f}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${f}•2));
    padding: var(--arc-menu-padding, var(${f}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ye}•gap));

    background: var(--arc-menu-item-background, var(${ye}•bg));
    color: var(--arc-menu-item-color, var(${ye}•fg));
    padding: var(--arc-menu-item-padding, var(${f}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${ye}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${f}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ye}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`;var Fg;const Ng=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Hg={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Ue={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Vg=({icon:r,onClick:a,...e})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:e}),Ql=(r,a)=>{const{icon:e,itemProps:o}=Vg(a);switch(r){case"divider":return(0,c.jsx)("hr",{});case"section-label":return(0,c.jsx)(Qr,{...o,...Ue,icon:e,size:"sm",isStrong:!0});case"icon-text":return(0,c.jsx)(Qr,{...o,...Ue,icon:e});case"icon-text-detail":return(0,c.jsx)(Qr,{...o,...Ue,icon:e,isStrong:!0});case"text":return(0,c.jsx)(Qr,{...o,...Ue});case"text-detail":return(0,c.jsx)(Qr,{...o,...Ue,subtext:o.subtext??"sub",isStrong:!0});case"user":return(0,c.jsx)(hc,{...o,...Ue,size:"sm"});case"user-detail":return(0,c.jsx)(hc,{...o,...Ue,size:"md",isStrong:!0});default:return r}},Xf=r=>Object.fromEntries(Fg.map(a=>[a,Ql(a,r)])),Ug=(r,a,e,o)=>{if(o||e==="divider"||!!!(a.href||a.onClick))return;r.currentTarget.closest("[arc-popover]")?.hidePopover?.()},Wg=r=>r?.role??Hg[st(r)]??"menuitem",st=r=>Ng(r)?.find(({test:a})=>a())?.value??"text",rd=r=>a=>Ql(r,a),Kg=(r,a,e,o)=>{let t=1,i=r;const n=d=>d>=e?0:d+1,l=d=>d<=0?e:d-1;for(;t<=e;){const d=n(i),u=l(i),v={previous:a==="previous"?u:i,actual:i,next:a==="next"?d:i}[a];if(o(v))return v;i=v,t+=1}return-1},Gg=({items:r,filterText:a,renderItem:e,isVisible:o,keepMenuOpen:t,...i})=>{const n=(0,h.useRef)(null),l=(0,h.useRef)([]),[d,u]=(0,h.useState)(-1),[v,p]=(0,h.useState)(!1);(0,h.useEffect)(()=>{o&&n.current&&(l.current=Array.from(n.current.querySelectorAll("[arc-button=custom]")))},[o,r]);const g=(0,h.useCallback)(y=>l.current[y]||null,[]),m=(0,h.useMemo)(()=>a?r.filter(y=>Object.values(y).some(A=>A===a)):r,[r,a]),b=Math.max(m.length-1,0),$=(0,h.useCallback)((y,A)=>{const D=Kg(y,A,b,g);u(D),g(D)?.focus()},[b,g]),k=(0,h.useCallback)((y,A)=>()=>{!v&&A&&$(y,"actual")},[v,$]),T={ArrowUp:y=>$(y,"previous"),ArrowDown:y=>$(y,"next"),Home:()=>$(0,"actual"),End:()=>$(b,"actual")},x=y=>A=>{Object.keys(T).includes(A.key)&&(p(!0),A.stopPropagation(),A.preventDefault(),T[A.key](y))},z=(0,h.useMemo)(()=>m.map((y,A)=>{const{itemId:D,role:B,keepMenuOpen:O,...I}=y,C=st(y)||"",U=B||Wg(y)||"menuitem",H=A===d;return(0,c.jsx)("li",{"arc-menu-item":C,role:U,onMouseEnter:k(A,!!(y.href||y.onClick)),onClick:rr=>Ug(rr,y,C,O??t),children:e?.(I,A,{filterText:a,isCurrent:H,itemId:D,role:B,keepMenuOpen:O??t})},D??A)}),[d,a,m,t,e,k]);return(0,h.useEffect)(()=>{o&&$(-1,"next")},[o,$]),(0,c.jsx)("ul",{...i,ref:n,"arc-menu":"",role:"menu",onKeyDown:x(d),onMouseLeave:()=>u(-1),onMouseMove:()=>p(!1),tabIndex:o?0:-1,children:z})};ir("ArcMenu",Og);const ad=r=>{const{startSlot:a,endSlot:e,onClick:o,href:t,target:i,containerProps:n,isDisabled:l,"aria-disabled":d,tooltip:u,...v}=r,p=st(v),g=(0,h.useMemo)(()=>rd(p),[p]),m=d??l,b=p==="divider",$=!!(t||o),k=!b,T=k&&a?"":void 0,x=k&&e?"":void 0,z=(0,h.useMemo)(()=>({...n,onClick:o,tooltip:u,href:t,target:i}),[n,o,u,t,i]),y=(0,h.useMemo)(()=>({...n}),[n]);return $?(0,c.jsxs)(xr,{...z,"aria-disabled":m?"true":void 0,isDisabled:!!m,_isCustom:!0,"arc-dropdown-item":p??"","has-start-slot":T,"has-end-slot":x,children:[k&&a,(0,c.jsx)(g,{...v,"is-item-content":"interactive"}),k&&e]}):(0,c.jsxs)("div",{...y,"arc-dropdown-item":p??"","has-start-slot":T,"has-end-slot":x,children:[k&&a,(0,c.jsx)(g,{...v,"is-item-content":"inert"}),k&&e]})},Yg=s`--arc•dropdown`,qg=s`${Yg}•menu`,qr=s`${qg}•item`,Zg=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${qr}•padding: var(${E}•8) var(${E}•12);
    ${qr}•min•height: var(${f}•36);
    ${qr}•gap: var(${E}•8);

    &[arc-dropdown-item=text-detail] {
      ${qr}•min•height: var(${f}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${qr}•min•height: var(${f}•32);
    }

    &[arc-dropdown-item=user] {
      ${qr}•min•height: var(${f}•40);

      &:not([has-start-slot]) {
        ${qr}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${qr}•min•height: var(${f}•48);

      &:not([has-start-slot]) {
        ${qr}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${qr}•min•height: var(${f}•8);
      ${qr}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${qr}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${qr}•gap);
    text-align: start;
    min-height: var(${qr}•min•height);

    &:not([arc-button]) {
      padding: var(${qr}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${qr}•padding);
      --arc-button-min-height: var(${f}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,ed=(0,h.forwardRef)((r,a)=>(0,c.jsx)(Uo,{...r,ref:a,"arc-dropdown-menu-button":""})),$i=r=>{const{items:a,renderItem:e,keepMenuOpen:o,...t}=r,[i,n]=(0,h.useState)(!1),l=(0,h.useCallback)((...u)=>{const[v]=u;return e?.(...u)??(0,c.jsx)(ad,{...v})},[e]),d=u=>{n(u.newState==="open"),r?.onToggle?.(u)};return(0,c.jsx)(oe,{...t,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,c.jsx)(Gg,{"arc-dropdown-menu":"",items:a??[],renderItem:l,isVisible:i,keepMenuOpen:o})})};ed.displayName="ArcDropdownButton",$i.Button=ed,$i.Item=ad,ir("ArcDropdownMenu",Zg);const od=r=>(0,c.jsx)(xr,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),Tn=s`--arc•link`,Wa=s`${Tn}•fg`,lt=s`${Wa}•hover`,dt=s`${Wa}•disabled`,yi=s`${Tn}•outline`,td=s`${yi}•size`,xi=s`${yi}•offset`,Xg=s`${Tn}•cursor`,ut=s`${Tn}•focus•color`,Jg=s`
@layer arc-components {
${Ih}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Wa}: currentcolor;
    ${lt}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${dt}: color-mix(in srgb, currentcolor, transparent 70%);

    ${ut}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Wa}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-secondary);
    ${dt}: var(--arc-color-fg-disabled);
    ${ut}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Wa}: var(--arc-color-fg-secondary);
    ${lt}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-disabled);
    ${ut}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Wa}: var(--arc-color-fg-on-mono-inverse);
    ${lt}: var(--arc-link-fg-hover-inverse);
    ${dt}: var(--arc-link-fg-disabled-inverse);
    ${ut}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${td}: 0.125em; /* 2px */
    ${xi}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Wa}: var(--arc-link-color-hover, var(${lt}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${yi}: var(${td}) solid var(--arc-link-color-focus, var(${ut}));
    ${xi}: var(${xi});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Wa}: var(--arc-link-color-disabled, var(${dt}));
    ${Xg}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Wa}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Wa}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Qg=q(Sr,["inherit","primary","secondary","inverse"]),rp=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="a",href:i,icon:n,text:l,overflow:d,iconSize:u,gapSize:v,isFlipped:p,isDisabled:g,...m})=>(0,c.jsx)(t,{...m,href:g?void 0:i,"arc-link":"","data-variant":o,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,c.jsx)(Qr,{icon:n,text:l,overflow:d,iconSize:u,gapSize:v,size:e,layout:a,isFlipped:p})});ir("ArcLink",Jg);const ap=[...Qa],ep=q(Sr,["common"]),op=q(Sr,["common","critical"]),tp=q(Sr,["common","brand","info","success","warning","error","processing"]),np=["auto","dark","light","none"],cp=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],ip=q(Jr,["xl","lg","md","sm","custom","fullscreen"]),sp=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],ki=r=>r?.matches(":modal"),wi=(r,a)=>a.target===r,lp=(r,a)=>a.clientX<r.left||a.clientX>r.right||a.clientY<r.top||a.clientY>r.bottom,ht=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onCloseOverride:o=void 0})=>(t,i)=>n=>{if(n?.preventDefault?.(),n?.stopPropagation?.(),!r?.current){i?.(n);return}if(o){o(t,n,r.current),i?.(n);return}if(a&&t!=="confirm:discard"){e?.(!0);return}r.current?.close(t),e?.(!1),i?.(n)},Ci=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onClose:o,onToggle:t})=>{(0,h.useEffect)(()=>{const i=r.current;if(!i)return;const n=d=>{ki(i)&&wi(i,d)&&(a?(d.preventDefault(),d.stopPropagation(),e?.(!0)):o?.("outside",d))},l=d=>{wi(i,d)&&(e?.(!1),o?.(i.returnValue,d),t?.(!1,d))};return i.addEventListener("close",l),i.addEventListener("cancel",n),()=>{i.removeEventListener("close",l),i.removeEventListener("cancel",n)}},[r,a,e,o,t])},Ai=({modalRef:r,isOpen:a,isTopLayer:e})=>{(0,h.useEffect)(()=>{const o=r.current;o&&(a&&!o.open&&(e?o.showModal():o.show()),!a&&o.open&&o.close())},[a,e])},Si=({modalRef:r,isOpen:a,autoFocusId:e})=>{(0,h.useEffect)(()=>{const o=r.current;if(!o||!e||!a)return;const t=o.querySelector(`#${e}`);if(!t||!(t instanceof HTMLElement))return;const i=setTimeout(()=>{t.focus()},0);return()=>clearTimeout(i)},[r,e,a])},nd=(r,a)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(a)||r.target instanceof Node&&a.contains(r.target),cd=({modalRef:r,isOpen:a=!1,closeOnBackdrop:e=!1,attemptCloseModal:o})=>{(0,h.useEffect)(()=>{const t=r.current;if(!t||!a||!e||!ki(t))return;let i=!1;const n=d=>{i=nd(d,t)},l=d=>{if(i||nd(d,t))return;const u=t.getBoundingClientRect();lp(u,d)&&o("outside")(d)};return document.documentElement?.addEventListener("pointerdown",n,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",n,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,o,a,e])},id=({modalRef:r,isOpen:a=!1,closeOnEsc:e=!1,closedBy:o="closerequest",attemptCloseModal:t})=>{(0,h.useEffect)(()=>{const i=r.current;if(!i||!a||!e||!ki(i))return;const n=l=>{if(l.key==="Escape"&&wi(i,l)){if(o==="none"){l.stopPropagation(),l.preventDefault();return}t("escape")(l)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[r,t,a,e,o])},zi=r=>(0,c.jsx)(xr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),dp=r=>(0,c.jsx)(xr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),In=(0,h.forwardRef)(({inert:r,...a},e)=>(0,c.jsx)("div",{...a,ref:e,"arc-modal-content":"",inert:r}));In.displayName="ModalContent";const sd=({showDivider:r,...a})=>(0,c.jsx)("header",{...a,"arc-modal-header":"","has-divider":r?"":void 0}),up=({glyph:r,variant:a="common"})=>(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)(cr,{icon:r,"arc-modal-glyph":"","arc-icon-status":a})}),Ei=r=>{const{titleContent:a,TitleElement:e="h2",...o}=r;return(0,c.jsx)(c.Fragment,{children:a&&(0,c.jsx)(e,{...o,"arc-modal-title":"",children:typeof a=="string"?a:(0,c.jsx)(Qr,{...a})})})},hp=({message:r,...a})=>(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)("p",{...a,"arc-modal-message":"",children:r})}),_i=({tag:r="section",padding:a,...e})=>(0,c.jsx)(r,{...e,"arc-modal-body":"","data-padding":a==="auto"?void 0:a}),Ti=({showDivider:r,...a})=>(0,c.jsx)("footer",{...a,"arc-modal-footer":"","has-divider":r?"":void 0}),vp=r=>a=>{if(a.key==="Escape"){if(r==="none"){a.stopPropagation(),a.preventDefault();return}return"escape"}},Y=s`--arc•modal`,vt=s`${Y}•layout`,gp=s`${Y}•header`,jn=s`${Y}•body`,gt=s`${Y}•footer`,ld=s`${Y}•fg`,Rn=s`${Y}•bg`,Ka=s`${Y}•backdrop`,xe=s`${Y}•scale`,fo=s`${gp}•padding`,br=s`${jn}•padding`,ke=s`${gt}•padding`,pp=s`
  ${Y}•font•size: var(${f}•14);
  ${Y}•gap: var(${E}•16);

  ${vt}•rows: auto 1fr auto;
  ${vt}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${vt}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${vt}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${vt}•rows: auto;
  }

  ${ld}: var(--arc-color-fg-primary);
  ${Rn}: var(--arc-color-bg-primary);
  ${Y}•border: none;
  ${Y}•border•radius: var(--arc-border-radius-lg);
  ${Y}•divider: var(${f}•1) solid var(--arc-color-border-mid);

  ${Y}•max•width: calc(100vw - var(${E}•32));
  ${Y}•min•width: unset;
  ${Y}•width: auto;

  ${Y}•max•height: calc(100vh - var(${E}•32));
  ${Y}•min•height: unset;
  ${Y}•height: max-content;

  ${xe}: 1;
  ${xe}•start: 0.95;

  ${jn}•text•align: unset;
  ${gt}•justify•content: flex-end;

  ${Ka}•bg: var(--arc-color-overlay-stark);
  ${Ka}•pointer•events: none;
  ${Ka}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Ka}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Ka}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Ka}•bg: transparent;
  }
`,fp=s`
  &[data-size=sm] {
    ${Y}•width: 28em;
  }

  &[data-size=md] {
    ${Y}•width: 40em;
  }

  &[data-size=lg] {
    ${Y}•width: 50em;
  }

  &[data-size=xl] {
    ${Y}•width: 64em;
  }

  &[data-size=custom] {
    ${Y}•width: auto;
    ${Y}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${Y}•width: 100vw;
    ${Y}•height: 100vh;
    ${Y}•min•width: 100vw;
    ${Y}•min•height: 100vh;
    ${Y}•max•width: 100vw;
    ${Y}•max•height: 100vh;
    ${Y}•border•radius: var(--arc-border-radius-none);

    ${xe}: 1;
    ${xe}•start: 1.125;
  }
`,mp=s`
  &[is-confirm] {
    ${gt}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${jn}•text•align: center;
    ${gt}•justify•content: center;

    ${br}•block•start: var(${E}•40);
    ${br}•block•end: var(${E}•20);

    ${ke}•block•start: var(${E}•12);
    ${ke}•block•end: var(${E}•40);

    ${Y}•glyph•size: var(${f}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${Y}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${Y}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${E}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,bp=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${br}•block•start: var(${E}•10);
    }

    &:has([arc-modal-footer]) {
      ${br}•block•end: var(${E}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${fo}•block•end: var(${E}•20);
      ${br}•block•start: var(${E}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${br}•block•end: var(${E}•20);
      ${ke}•block•start: var(${E}•12);
      ${ke}•block•end: var(${E}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${br}•inline•start: 0;
      ${br}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${br}•block•start: 0;
      ${br}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${br}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${br}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${br}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${br}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${br}•block•start: var(${E}•20);
      ${br}•inline•end: var(${E}•24);
      ${br}•block•end: var(${E}•20);
      ${br}•inline•start: var(${E}•24);
    }

    &:has([arc-modal-go-back]) {
      ${fo}•inline•start: var(${E}•20);
    }

    ${fo}:
      var(${E}•20)
      var(${E}•24)
      var(${fo}•block•end, var(${E}•10))
      var(${fo}•inline•start, var(${E}•24));

    ${br}:
      var(${br}•block•start, var(${E}•20))
      var(${br}•inline•end, var(${E}•24))
      var(${br}•block•end, var(${E}•20))
      var(${br}•inline•start, var(${E}•24));

    ${ke}:
      var(${ke}•block•start, var(${E}•10))
      var(${E}•24)
      var(${ke}•block•end, var(${E}•20))
      var(${E}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${br}: 0;
    }
  }
`,$p=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,yp=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${xe}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${xe}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Ii=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${pp}
    ${fp}
    ${mp}
    ${bp}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${xe}: 1;
      ${xe}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${ld}));
    background: var(--arc-modal-background, var(${Rn}));
    border: var(--arc-modal-border, var(${Y}•border));
    border-radius: var(--arc-modal-border-radius, var(${Y}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${Y}•width));
    height: var(--arc-modal-height, var(${Y}•height));
    min-width: var(--arc-modal-min-width, var(${Y}•min•width));
    min-height: var(--arc-modal-min-height, var(${Y}•min•height));
    max-width: var(--arc-modal-max-width, var(${Y}•max•width));
    max-height: var(--arc-modal-max-height, var(${Y}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Ka}•bg));
      pointer-events: var(${Ka}•pointer•events, none);
      cursor: var(${Ka}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${Y}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${Y}•gap));

      padding: var(${fo});
      background: var(--arc-modal-header-background, var(${Rn}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${Y}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${E}•4m) var(${E}•8m) var(${E}•4m) var(${E}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${E}•4m) 0 var(${E}•4m) var(${E}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${E}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${E}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${br});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${jn}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${gt}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${Y}•gap));

      background: var(--arc-modal-footer-background, var(${Rn}));
      padding: var(--arc-modal-footer-padding, var(${ke}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${Y}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${E}•16) var(${E}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Ka}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${E}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${$p}
  ${yp}
`,we={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},dd=({children:r,headerProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,h.useRef)(null),{isOpen:n,autoFocusId:l,isTopLayer:d=we.isTopLayer,isInverse:u=we.isInverse,scheme:v=we.scheme,backdropColor:p=we.backdropColor,variant:g=we.variant,message:m=we.message,onCloseOverride:b=we.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:k,contentRef:T,...x}=t,{slotStart:z,TitleElement:y,titleContent:A,slotEnd:D,...B}=a||{},{primaryButton:O,secondaryButton:I,...C}=o||{},U=!!(A||z||D),H=v==="auto"?void 0:v,rr=!!b,W=M=>rr?b?.("confirm:discard",M,i.current??void 0):$?.("confirm:discard",M),or=M=>rr?b?.("confirm:cancel",M,i.current??void 0):k?.("confirm:cancel",M);Ci({modalRef:i,onClose:b}),Ai({modalRef:i,isOpen:n,isTopLayer:d}),Si({modalRef:i,isOpen:n,autoFocusId:l});const nr=M=>{or(M),I?.onClick?.(M)},vr=M=>{W(M),O?.onClick?.(M)};return(0,c.jsx)("dialog",{...x,ref:i,"arc-modal":"","arc-scheme":u?"inverse":H,"is-confirm":g||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:"none",onKeyDown:vp("none"),children:(0,c.jsxs)(In,{ref:T,children:[U&&(0,c.jsxs)(sd,{...B,children:[z&&(0,c.jsx)("div",{"header-slot":"start",children:z}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Ei,{TitleElement:y,titleContent:A})}),D&&(0,c.jsx)("div",{"header-slot":"end",children:D})]}),(0,c.jsx)(_i,{...e,children:r||m&&(0,c.jsx)("p",{style:{margin:0},children:m})}),(0,c.jsx)(Ti,{...C,children:(0,c.jsxs)(fn,{children:[(0,c.jsx)(xr,{...I,text:I?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:u,onClick:nr}),(0,c.jsx)(xr,{...O,text:O?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:u,onClick:vr})]})})]})})};ir("ArcModalConfirm",Ii);const na={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},xp=({children:r,confirmProps:a,headerProps:e,bodyProps:o,dismissProps:t,footerProps:i,...n})=>{const l=(0,h.useRef)(null),[d,u]=(0,h.useState)(!1),{isOpen:v,autoFocusId:p,isTopLayer:g=na.isTopLayer,isInverse:m=na.isInverse,scheme:b=na.scheme,backdropColor:$=na.backdropColor,hasConfirmFlow:k=na.hasConfirmFlow,hasUnsavedChanges:T=na.hasUnsavedChanges,onCloseOverride:x=na.onCloseOverride,bypassConfirmWhen:z=na.bypassConfirmWhen??{},size:y=na.size,closeOnBackdrop:A=na.closeOnBackdrop,closeOnEsc:D=na.closeOnEsc,showDismiss:B=na.showDismiss,onActionError:O,onClose:I,onToggle:C,width:U,height:H,style:rr,contentRef:W,...or}=n,{showGoBack:nr,goBackProps:vr,slotStart:M,TitleElement:F,titleContent:N,slotEnd:R,showDivider:er=na.headerProps?.showDivider,...Z}=e??{},{slotStart:ar,primaryButton:K,secondaryButton:_,tertiaryButton:X,showDivider:dr=na.footerProps?.showDivider,...$r}=i??{},Vr=!!(nr||N||M||R),Da=!!(K||_||X),Oa=!!(Da||ar),Ur=!!(k&&T),Za=D?"closerequest":"none",Cr=b==="auto"?void 0:b,{didPressEscapeKey:Sa,didClickBackdrop:de,didClickGoBackButton:Ce,didClickDismissButton:ue,didClickPrimaryButton:Fn,didClickSecondaryButton:xo,didClickTertiaryButton:Ke}=z,Xa=ht({modalRef:l,shouldConfirm:Ur,setIsConfirming:u,onCloseOverride:x});Ci({modalRef:l,shouldConfirm:Ur,setIsConfirming:u,onClose:I,onToggle:C}),Ai({modalRef:l,isOpen:v,isTopLayer:g}),Si({modalRef:l,isOpen:v,autoFocusId:p}),cd({modalRef:l,isOpen:v,closeOnBackdrop:A,attemptCloseModal:de?ht({modalRef:l,shouldConfirm:Ur&&!de,setIsConfirming:u}):Xa}),id({modalRef:l,isOpen:v,closeOnEsc:D,closedBy:Za,attemptCloseModal:Sa?ht({modalRef:l,shouldConfirm:Ur&&!Sa,setIsConfirming:u}):Xa});const J=()=>u(!1),Ar=(Xr,Ja)=>Xa(Xr)(Ja),Zr=(Xr,Ja,ko)=>async Ae=>{Ae?.preventDefault?.(),Ae?.stopPropagation?.();const Nn=()=>Ja?ht({modalRef:l,shouldConfirm:Ur&&!Ja,setIsConfirming:u})(Xr,ko?.onCloseCallback)(Ae):Xa(Xr,ko?.onCloseCallback)(Ae);try{await ko?.onClick?.(Ae),Nn()}catch(Di){O?.(Di,{reason:Xr,event:Ae})}};return(0,c.jsxs)("dialog",{...or,ref:l,"arc-modal":"","arc-scheme":m?"inverse":Cr,"is-inverse":m?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":y,closedby:Za,style:{"--arc-modal-width":U??"","--arc-modal-height":H??"",...rr},children:[!Vr&&B&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(zi,{...t,isInverse:m,onClick:Zr("button:dismiss",ue,t)})}),(0,c.jsxs)(In,{ref:W,inert:d?"":void 0,children:[Vr&&(0,c.jsxs)(sd,{...Z,showDivider:er,children:[nr&&(0,c.jsx)("div",{"header-slot":"go-back",children:(0,c.jsx)(dp,{...vr,isInverse:m,onClick:Zr("button:back",Ce,vr)})}),M&&(0,c.jsx)("div",{"header-slot":"start",children:M}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Ei,{TitleElement:F,titleContent:N})}),R&&(0,c.jsx)("div",{"header-slot":"end",children:R}),B&&(0,c.jsx)("div",{"header-slot":"dismiss",children:(0,c.jsx)(zi,{...t,isInverse:m,onClick:Zr("button:dismiss",ue,t)})})]}),(0,c.jsx)(_i,{...o,children:r}),Oa&&(0,c.jsxs)(Ti,{...$r,showDivider:dr,children:[ar&&(0,c.jsx)("div",{"footer-slot":"content",children:ar}),Da&&(0,c.jsxs)(fn,{children:[X&&(0,c.jsx)(xr,{...X,text:X?.text||"Button",isInverse:m,variant:"common",hierarchy:"tertiary",onClick:Zr("button:tertiary",Ke,X)}),_&&(0,c.jsx)(xr,{..._,text:_?.text||"Cancel",isInverse:m,variant:"common",hierarchy:"secondary",onClick:Zr("button:secondary",xo,_)}),K&&(0,c.jsx)(xr,{...K,text:K?.text||"Action",isInverse:m,variant:"common",hierarchy:"primary",onClick:Zr("button:primary",Fn,K)})]})]})]}),k&&(0,c.jsx)(dd,{isOpen:d,isInverse:m,isTopLayer:g,backdropColor:$,...a,onConfirmDiscard:Ar,onConfirmCancel:J})]})};ir("ArcModal",Ii);const ie={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},kp={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,c.jsx)(xc,{"arc-modal-spinner":""})},wp=({children:r,dismissProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,h.useRef)(null),{isOpen:n,autoFocusId:l,isTopLayer:d=ie.isTopLayer,isInverse:u=ie.isInverse,scheme:v=ie.scheme,backdropColor:p=ie.backdropColor,closeOnBackdrop:g=ie.closeOnBackdrop,closeOnEsc:m=ie.closeOnEsc,variant:b=ie.variant,icon:$,TitleElement:k,titleContent:T,message:x,showDismiss:z,onCloseOverride:y=ie.onCloseOverride,onClose:A,onToggle:D,contentRef:B,...O}=t,{primaryButton:I,...C}=o??{},U=$||kp[b],H=m?"closerequest":"none",rr=v==="auto"?void 0:v,W=ht({modalRef:i,onCloseOverride:y});return Ci({modalRef:i,onClose:A,onToggle:D}),Ai({modalRef:i,isOpen:n,isTopLayer:d}),Si({modalRef:i,isOpen:n,autoFocusId:l}),cd({modalRef:i,isOpen:n,closeOnBackdrop:g,attemptCloseModal:W}),id({modalRef:i,isOpen:n,closeOnEsc:m,closedBy:H,attemptCloseModal:W}),(0,c.jsxs)("dialog",{...O,ref:i,"arc-modal":"","arc-scheme":u?"inverse":rr,"is-alert":b||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:H,children:[z&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(zi,{...a,isInverse:u,onClick:W("button:dismiss",a?.onClick)})}),(0,c.jsxs)(In,{ref:B,children:[(0,c.jsx)(_i,{...e,children:r||(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(up,{glyph:U,variant:b}),(0,c.jsx)(Ei,{TitleElement:k,titleContent:T}),(0,c.jsx)(hp,{message:x})]})}),(0,c.jsx)(Ti,{...C,children:(0,c.jsx)(fn,{orientation:"vertical",children:(0,c.jsx)(xr,{...I,text:I?.text||"Close",variant:"common",hierarchy:"primary",isInverse:u,onClick:W("button:primary",I?.onClick)})})})]})]})};ir("ArcModalAlert",Ii);const Br=s`--arc•radio`,Cp=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Br}•font•size: 1em;
      ${Br}•icon•size: 0.625em;
      ${Br}•size: 1.125em;
      ${Br}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Br}•font•size: var(${f}•14);
      ${Br}•icon•size: var(${f}•10);
      ${Br}•size: var(${f}•18);
      ${Br}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Br}•font•size: var(${f}•12);
      ${Br}•icon•size: var(${f}•10);
      ${Br}•size: var(${f}•16);
      ${Br}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${j}•border•radius: var(--arc-border-radius-circle);
    ${j}•size: var(${Br}•size);
    ${j}•icon•size: var(${Br}•icon•size);
    ${j}•width: var(${Br}•size);
    ${j}•height: var(${Br}•size);
    ${j}•translate: 0 var(${f}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${Br}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${Br}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${j}•color: transparent;
      ${j}•background: transparent;
      ${j}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${j}•background: var(--arc-color-bg-theme-subtle);
        ${j}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${j}•background: var(--arc-color-bg-disabled);
        ${j}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${j}•color: var(--arc-color-fg-on-theme-heavy);
      ${j}•background: var(--arc-color-bg-theme-heavy);
      ${j}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${j}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${j}•color: var(--arc-color-fg-on-theme-mid);
        ${j}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Ap=q(za,["hug","fill"]),Sp=q(Jr,["inherit","md","sm"]),ud=({children:r,label:a,layout:e,size:o="md",useMask:t=!0,...i})=>{const{className:n,title:l,...d}=i,u={className:n,title:l},v=r??a,p=(0,c.jsx)(Jo,{...d,type:"radio"}),g=t&&(0,c.jsxs)(sn,{type:"radio",children:[p,(0,c.jsx)(cr,{icon:"fa-solid fa-circle-small arc-fw"})]}),m=!!v&&(0,c.jsxs)(me,{layout:e,children:[g||p,(0,c.jsx)(Oe,{children:v})]});return(0,c.jsx)("span",{...u,"arc-radio":"","data-size":o,children:m||g||p})};ir("ArcRadio",Cp);const la=s`--arc•rb`,sr=s`${la}•o`,zp=s`
@layer arc-components {

  [arc-radio-bar] {
    ${la}•font•size: var(${f}•14);
    ${la}•border•radius: var(${f}•8);
    ${la}•background: var(--arc-color-bg-secondary);
    ${la}•padding: var(${f}•4);
    ${la}•gap: var(${f}•2);

    ${sr}•color: var(--arc-color-fg-secondary);
    ${sr}•background: var(--arc-color-alpha-black-0);
    ${sr}•border•color: var(--arc-color-alpha-black-0);
    ${sr}•border•width: var(${f}•1);
    ${sr}•border•radius: var(${f}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${sr}•size: var(${f}•32);
      ${sr}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${sr}•icon•padding: var(${f}•8);
      ${sr}•text•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${sr}•size: var(${f}•24);
      ${sr}•line•height: var(${f}•22); /* • -2px to account for border-width (top/bottom) */
      ${sr}•icon•padding: var(${f}•6);
      ${sr}•text•padding: var(${f}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${la}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${la}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${sr}•color: var(--arc-color-fg-on-hover-default);
        ${sr}•background: var(--arc-color-bg-hover-default);
        ${sr}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${sr}•color: var(--arc-color-mono-black);
      ${sr}•background: var(--arc-color-mono-white);
      ${sr}•border•color: var(--arc-color-border-stark);
      ${sr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${sr}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${sr}•outline: var(${sr}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${la}•font•size));
    display: var(${la}•display);
    gap: var(${la}•gap);
    border-radius: var(${la}•border•radius);
    background: var(${la}•background);
    padding: var(${la}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${sr}•border•radius);
      outline: var(${sr}•outline, none);
      outline-offset: var(${sr}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${sr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${sr}•size);
      min-width: var(${sr}•size);

      border-radius: var(${sr}•border•radius);
      border: var(${sr}•border•width) solid var(${sr}•border•color);
      background: var(${sr}•background);
      color: var(${sr}•color);
      font-weight: var(${sr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${sr}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${sr}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Ep=q(za,["hug","fill"]),_p=q(Jr,["lg","md"]),Tp=({children:r,label:a,icon:e,...o})=>{const t=r||(0,c.jsx)(Qr,{icon:e,text:a});return(0,c.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(ud,{...o,label:t,layout:"fill",useMask:!1})})},Ip=({children:r,size:a="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-radio-bar":"","data-size":a,"data-layout":e,role:"radiogroup",children:r});ir("ArcRadioBar",zp);var hd=ca(49473),Dr,_r,Ma,se;function jp(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[a,e]=Dr(r),o=_r(()=>{e(!0)},[]),t=_r(()=>{e(!1)},[]),i=_r(()=>{e(n=>!n)},[]);return{value:a,setValue:e,setTrue:o,setFalse:t,toggle:i}}var Ba=typeof window<"u"?h.useLayoutEffect:h.useEffect;function Aa(r,a,e,o){const t=(0,h.useRef)(a);Ba(()=>{t.current=a},[a]),(0,h.useEffect)(()=>{const i=e?.current??window;if(!(i&&i.addEventListener))return;const n=l=>{t.current(l)};return i.addEventListener(r,n,o),()=>{i.removeEventListener(r,n,o)}},[r,e,o])}function Jf(r){Aa("click",a=>{r(a)})}function Qf(){const[r,a]=Dr(null),e=_r(async o=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),a(o),!0}catch(t){return console.warn("Copy failed",t),a(null),!1}},[]);return[r,e]}function Rp(r){const[a,e]=Dr(r??0),o=_r(()=>{e(n=>n+1)},[]),t=_r(()=>{e(n=>n-1)},[]),i=_r(()=>{e(r??0)},[r]);return{count:a,increment:o,decrement:t,reset:i,setCount:e}}function Lp(r,a){const e=Ma(r);Ba(()=>{e.current=r},[r]),se(()=>{if(a===null)return;const o=setInterval(()=>{e.current()},a);return()=>{clearInterval(o)}},[a])}function rm({countStart:r,countStop:a=0,intervalMs:e=1e3,isIncrement:o=!1}){const{count:t,increment:i,decrement:n,reset:l}=Rp(r),{value:d,setTrue:u,setFalse:v}=jp(!1),p=_r(()=>{v(),l()},[v,l]),g=_r(()=>{if(t===a){v();return}o?i():n()},[t,a,n,i,o,v]);return Lp(g,d?e:null),[t,{startCountdown:u,stopCountdown:v,resetCountdown:p}]}function Ln(r){const a=(0,h.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Ba(()=>{a.current=r},[r]),(0,h.useCallback)((...e)=>{var o;return(o=a.current)==null?void 0:o.call(a,...e)},[a])}var ji=typeof window>"u";function Ri(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,h.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),i=(0,h.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),n=(0,h.useCallback)(()=>{const g=a instanceof Function?a():a;if(ji)return g;try{const m=window.localStorage.getItem(r);return m?i(m):g}catch(m){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,m),g}},[a,r,i]),[l,d]=(0,h.useState)(()=>o?n():a instanceof Function?a():a),u=Ln(g=>{ji&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=g instanceof Function?g(n()):g;window.localStorage.setItem(r,t(m)),d(m),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(m){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,m)}}),v=Ln(()=>{ji&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=a instanceof Function?a():a;window.localStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,h.useEffect)(()=>{d(n())},[r]);const p=(0,h.useCallback)(g=>{g.key&&g.key!==r||d(n())},[r,n]);return Aa("storage",p),Aa("local-storage",p),[l,u,v]}var Pp=typeof window>"u";function vd(r,{defaultValue:a=!1,initializeWithValue:e=!0}={}){const o=l=>Pp?a:window.matchMedia(l).matches,[t,i]=Dr(()=>e?o(r):a);function n(){i(o(r))}return Ba(()=>{const l=window.matchMedia(r);return n(),l.addListener?l.addListener(n):l.addEventListener("change",n),()=>{l.removeListener?l.removeListener(n):l.removeEventListener("change",n)}},[r]),t}var Mp="(prefers-color-scheme: dark)",Bp="usehooks-ts-dark-mode";function am(r={}){const{defaultValue:a,localStorageKey:e=Bp,initializeWithValue:o=!0}=r,t=vd(Mp,{initializeWithValue:o,defaultValue:a}),[i,n]=Ri(e,a??t??!1,{initializeWithValue:o});return Ba(()=>{t!==i&&n(t)},[t]),{isDarkMode:i,toggle:()=>{n(l=>!l)},enable:()=>{n(!0)},disable:()=>{n(!1)},set:l=>{n(l)}}}function gd(r){const a=(0,h.useRef)(r);a.current=r,(0,h.useEffect)(()=>()=>{a.current()},[])}function Pn(r,a=500,e){const o=(0,h.useRef)();gd(()=>{o.current&&o.current.cancel()});const t=(0,h.useMemo)(()=>{const i=hd(r,a,e),n=(...l)=>i(...l);return n.cancel=()=>{i.cancel()},n.isPending=()=>!!o.current,n.flush=()=>i.flush(),n},[r,a,e]);return(0,h.useEffect)(()=>{o.current=hd(r,a,e)},[r,a,e]),t}function em(r,a,e){const o=e?.equalityFn??((u,v)=>u===v),t=r instanceof Function?r():r,[i,n]=Dr(t),l=Ma(t),d=Pn(n,a,e);return o(l.current,t)||(d(t),l.current=t),[i,d]}function om(r,a={}){const{preserveTitleOnUnmount:e=!0}=a,o=Ma(null);Ba(()=>{o.current=window.document.title},[]),Ba(()=>{window.document.title=r},[r]),gd(()=>{!e&&o.current&&(window.document.title=o.current)})}function tm(r){const[a,e]=Dr(!1),o=()=>{e(!0)},t=()=>{e(!1)};return Aa("mouseenter",o,r),Aa("mouseleave",t,r),a}function nm({threshold:r=0,root:a=null,rootMargin:e="0%",freezeOnceVisible:o=!1,initialIsIntersecting:t=!1,onChange:i}={}){var n;const[l,d]=Dr(null),[u,v]=Dr(()=>({isIntersecting:t,entry:void 0})),p=Ma();p.current=i;const g=((n=u.entry)==null?void 0:n.isIntersecting)&&o;se(()=>{if(!l||!("IntersectionObserver"in window)||g)return;let $;const k=new IntersectionObserver(T=>{const x=Array.isArray(k.thresholds)?k.thresholds:[k.thresholds];T.forEach(z=>{const y=z.isIntersecting&&x.some(A=>z.intersectionRatio>=A);v({isIntersecting:y,entry:z}),p.current&&p.current(y,z),y&&o&&$&&($(),$=void 0)})},{threshold:r,root:a,rootMargin:e});return k.observe(l),()=>{k.disconnect()}},[l,JSON.stringify(r),a,e,g,o]);const m=Ma(null);se(()=>{var $;!l&&(($=u.entry)!=null&&$.target)&&!o&&!g&&m.current!==u.entry.target&&(m.current=u.entry.target,v({isIntersecting:t,entry:void 0}))},[l,u.entry,o,g,t]);const b=[d,!!u.isIntersecting,u.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function cm(){const[r,a]=Dr(!1);return se(()=>{a(!0)},[]),r}function Dp(){const r=Ma(!1);return se(()=>(r.current=!0,()=>{r.current=!1}),[]),_r(()=>r.current,[])}function im(r=new Map){const[a,e]=Dr(new Map(r)),o={set:_r((t,i)=>{e(n=>{const l=new Map(n);return l.set(t,i),l})},[]),setAll:_r(t=>{e(()=>new Map(t))},[]),remove:_r(t=>{e(i=>{const n=new Map(i);return n.delete(t),n})},[]),reset:_r(()=>{e(()=>new Map)},[])};return[a,o]}function sm(r,a,e="mousedown",o={}){Aa(e,t=>{const i=t.target;if(!i||!i.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(i)):r.current&&!r.current.contains(i))&&a(t)},void 0,o)}var pd=typeof window>"u";function lm(r,a={}){let{initializeWithValue:e=!0}=a;pd&&(e=!1);const o=_r(d=>{if(a.deserializer)return a.deserializer(d);if(d==="undefined")return;let u;try{u=JSON.parse(d)}catch(v){return console.error("Error parsing JSON:",v),null}return u},[a]),t=_r(()=>{if(pd)return null;try{const d=window.localStorage.getItem(r);return d?o(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,o]),[i,n]=Dr(()=>{if(e)return t()});se(()=>{n(t())},[r]);const l=_r(d=>{d.key&&d.key!==r||n(t())},[r,t]);return Aa("storage",l),Aa("local-storage",l),i}var fd={width:void 0,height:void 0};function dm(r){const{ref:a,box:e="content-box"}=r,[{width:o,height:t},i]=Dr(fd),n=Dp(),l=Ma({...fd}),d=Ma(void 0);return d.current=r.onResize,se(()=>{if(!a.current||typeof window>"u"||!("ResizeObserver"in window))return;const u=new ResizeObserver(([v])=>{const p=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=md(v,p,"inlineSize"),m=md(v,p,"blockSize");if(l.current.width!==g||l.current.height!==m){const $={width:g,height:m};l.current.width=g,l.current.height=m,d.current?d.current($):n()&&i($)}});return u.observe(a.current,{box:e}),()=>{u.disconnect()}},[e,a,n]),{width:o,height:t}}function md(r,a,e){return r[a]?Array.isArray(r[a])?r[a][0][e]:r[a][e]:a==="contentBoxSize"?r.contentRect[e==="inlineSize"?"width":"height"]:void 0}var bd=typeof window>"u";function um(r={}){let{initializeWithValue:a=!0}=r;bd&&(a=!1);const e=()=>{if(!bd)return window.screen},[o,t]=Dr(()=>{if(a)return e()}),i=Pn(t,r.debounceDelay);function n(){const l=e(),d=r.debounceDelay?i:t;if(l){const{width:u,height:v,availHeight:p,availWidth:g,colorDepth:m,orientation:b,pixelDepth:$}=l;d({width:u,height:v,availHeight:p,availWidth:g,colorDepth:m,orientation:b,pixelDepth:$})}}return Aa("resize",n),Ba(()=>{n()},[]),o}var Mn=new Map;function Op(r){const a=document.querySelector(`script[src="${r}"]`),e=a?.getAttribute("data-status");return{node:a,status:e}}function hm(r,a){const[e,o]=Dr(()=>!r||a?.shouldPreventLoad?"idle":typeof window>"u"?"loading":Mn.get(r)??"loading");return se(()=>{if(!r||a?.shouldPreventLoad)return;const t=Mn.get(r);if(t==="ready"||t==="error"){o(t);return}const i=Op(r);let n=i.node;if(n)o(i.status??t??"loading");else{n=document.createElement("script"),n.src=r,n.async=!0,a?.id&&(n.id=a.id),n.setAttribute("data-status","loading"),document.body.appendChild(n);const d=u=>{const v=u.type==="load"?"ready":"error";n?.setAttribute("data-status",v)};n.addEventListener("load",d),n.addEventListener("error",d)}const l=d=>{const u=d.type==="load"?"ready":"error";o(u),Mn.set(r,u)};return n.addEventListener("load",l),n.addEventListener("error",l),()=>{n&&(n.removeEventListener("load",l),n.removeEventListener("error",l)),n&&a?.removeOnUnmount&&(n.remove(),Mn.delete(r))}},[r,a?.shouldPreventLoad,a?.removeOnUnmount,a?.id]),e}var Fp=typeof window>"u";function vm(r={}){const{autoLock:a=!0,lockTarget:e,widthReflow:o=!0}=r,[t,i]=Dr(!1),n=Ma(null),l=Ma(null),d=()=>{if(n.current){const{overflow:v,paddingRight:p}=n.current.style;if(l.current={overflow:v,paddingRight:p},o){const g=n.current===document.body?window.innerWidth:n.current.offsetWidth,m=parseInt(window.getComputedStyle(n.current).paddingRight,10)||0,b=g-n.current.scrollWidth;n.current.style.paddingRight=`${b+m}px`}n.current.style.overflow="hidden",i(!0)}},u=()=>{n.current&&l.current&&(n.current.style.overflow=l.current.overflow,o&&(n.current.style.paddingRight=l.current.paddingRight)),i(!1)};return Ba(()=>{if(!Fp)return e&&(n.current=typeof e=="string"?document.querySelector(e):e),n.current||(n.current=document.body),a&&d(),()=>{u()}},[a,e,o]),{isLocked:t,lock:d,unlock:u}}var Li=typeof window>"u";function Np(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,h.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),i=(0,h.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),n=(0,h.useCallback)(()=>{const g=a instanceof Function?a():a;if(Li)return g;try{const m=window.sessionStorage.getItem(r);return m?i(m):g}catch(m){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,m),g}},[a,r,i]),[l,d]=(0,h.useState)(()=>o?n():a instanceof Function?a():a),u=Ln(g=>{Li&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=g instanceof Function?g(n()):g;window.sessionStorage.setItem(r,t(m)),d(m),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(m){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,m)}}),v=Ln(()=>{Li&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=a instanceof Function?a():a;window.sessionStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,h.useEffect)(()=>{d(n())},[r]);const p=(0,h.useCallback)(g=>{g.key&&g.key!==r||d(n())},[r,n]);return Aa("storage",p),Aa("session-storage",p),[l,u,v]}function gm(r){const[a,e]=Dr(1),o=a+1<=r,t=a-1>0,i=_r(u=>{const v=u instanceof Function?u(a):u;if(v>=1&&v<=r){e(v);return}throw new Error("Step not valid")},[r,a]),n=_r(()=>{o&&e(u=>u+1)},[o]),l=_r(()=>{t&&e(u=>u-1)},[t]),d=_r(()=>{e(1)},[]);return[a,{goToNextStep:n,goToPrevStep:l,canGoToNextStep:o,canGoToPrevStep:t,setStep:i,reset:d}]}var Hp="(prefers-color-scheme: dark)",Vp="usehooks-ts-ternary-dark-mode";function pm({defaultValue:r="system",localStorageKey:a=Vp,initializeWithValue:e=!0}={}){const o=vd(Hp,{initializeWithValue:e}),[t,i]=Ri(a,r,{initializeWithValue:e});return{isDarkMode:t==="dark"||t==="system"&&o,ternaryDarkMode:t,setTernaryDarkMode:i,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];i(u=>{const v=(d.indexOf(u)+1)%d.length;return d[v]})}}}function fm(r,a){const e=Ma(r);Ba(()=>{e.current=r},[r]),se(()=>{if(!a&&a!==0)return;const o=setTimeout(()=>{e.current()},a);return()=>{clearTimeout(o)}},[a])}function mm(r){const[a,e]=Dr(!!r),o=_r(()=>{e(t=>!t)},[]);return[a,o,e]}var Up=typeof window>"u";function bm(r={}){let{initializeWithValue:a=!0}=r;Up&&(a=!1);const[e,o]=Dr(()=>a?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),t=Pn(o,r.debounceDelay);function i(){(r.debounceDelay?t:o)({width:window.innerWidth,height:window.innerHeight})}return Aa("resize",i),Ba(()=>{i()},[]),e}const Wp=(r,a)=>{const e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;e?e.call(r,a):r.value=a,r.dispatchEvent(new Event("input",{bubbles:!0}))},Kp=({defaultValue:r="",value:a,debounceMs:e,inputElementRef:o,onClear:t,onKeyDown:i,onSearch:n})=>{const l=a!==void 0,d=n!==void 0&&e!==void 0,[u,v]=(0,h.useState)(r),p=l?a??"":u,g=(0,h.useRef)(!1),m=Pn(x=>{n?.(x)},e??0),b=(0,h.useCallback)(()=>{m.cancel()},[m]),$=(0,h.useCallback)(x=>{l||v(x)},[l]);(0,h.useEffect)(()=>b,[b]),(0,h.useEffect)(()=>{if(d){if(!g.current){g.current=!0;return}b(),m(p)}},[b,m,p,d]);const k=(0,h.useCallback)(()=>{b();const x=o.current;if(x){Wp(x,""),t?.(),x.focus();return}l||v(""),t?.()},[b,o,l,t]),T=(0,h.useCallback)(x=>{i?.(x),!(x.defaultPrevented||x.key!=="Enter"||!n)&&(b(),n(p))},[b,i,n,p]);return{resolvedValue:p,handleValueChange:$,handleClear:k,handleKeyDown:T}},Gp=pi,Yp=fi,qp=q(Ul,["outline","solid"]),$d="Search",Zp="Clear search",Pi={layout:"hug",size:"inherit",variant:"outline"},Xp=({canClear:r,isDisabled:a,onClear:e})=>{if(r)return(0,c.jsx)(od,{"aria-label":Zp,disabled:a,icon:"fa-regular fa-xmark",onClick:e})},Jp=({ariaLabel:r,ariaLabelledBy:a,headerLabel:e})=>r??(!e&&!a?$d:void 0),yd=(0,h.forwardRef)(({debounceMs:r,inputProps:a,layout:e=Pi.layout,onClear:o,onSearch:t,size:i=Pi.size,variant:n=Pi.variant,headerLabel:l,headerSlot:d,footerCaption:u,footerSlot:v,onChange:p,...g},m)=>{const{id:b,value:$,defaultValue:k="",onChange:T,onKeyDown:x,placeholder:z=$d,disabled:y,readOnly:A,required:D,"aria-label":B,"aria-labelledby":O,...I}=a,C=Tr(b,"arc-search"),U=(0,h.useRef)(null),{resolvedValue:H,handleValueChange:rr,handleClear:W,handleKeyDown:or}=Kp({defaultValue:k,value:$,debounceMs:r,inputElementRef:U,onClear:o,onKeyDown:x,onSearch:t}),nr=!y&&!A&&H.length>0,vr=Jp({ariaLabel:B,ariaLabelledBy:O,headerLabel:l}),M=Xp({canClear:nr,isDisabled:y,onClear:W}),F=R=>{U.current=R,_a(m,R)},N=(R,er)=>{rr(er.target.value),T?.(R,er)};return(0,c.jsx)(_n,{...g,"arc-search":"",layout:e,size:i,variant:n,ref:F,onChange:p,headerLabel:l,headerSlot:d,inputPrefix:(0,c.jsx)(cr,{icon:"fa-regular fa-search"}),inputAction:M,footerCaption:u,footerSlot:v,inputProps:{...I,id:C,value:H,disabled:y,placeholder:z,readOnly:A,required:D,onChange:N,onKeyDown:or,"aria-disabled":y||void 0,"aria-label":vr,"aria-labelledby":O,"aria-readonly":A||void 0,"aria-required":D||void 0}})});yd.displayName="ArcSearch";const Qp=pi,rf=fi,af=q(Sr,["outline","solid","plain"]),xd=s`--arc•select`,da=s`${xd}•picker`,kd=s`${da}•fg`,wd=s`${da}•bg`,Mi=s`${xd}•option`,Bn=s`${Mi}•fg`,Dn=s`${Mi}•bg`,mo=s`${Mi}•icon`,ef=s`
  ${kd}: currentcolor;
  ${wd}: var(--arc-color-bg-mono);

  ${da}•width: auto;
  ${da}•min•width: 3em;
  ${da}•border•radius: var(--arc-border-radius-lg);
  ${da}•shadow: var(--arc-shadow-lg);

  ${Bn}: currentcolor;
  ${Dn}: transparent;

  ${mo}•display: none;
  ${mo}•color: var(${Bn});
`,of=s`
  &[data-layout=fill] {
    ${da}•width: 100%; /* fallback */
    ${da}•width: anchor-size(inline);
  }
`,tf=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,nf=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,cf=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${ef}
    ${of}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${da}•display, none);
      flex-direction: column;
      gap: var(${E}•4);
      border: none;
      color: var(${kd});
      width: var(--arc-select-picker-width, var(${da}•width));
      min-width: var(--arc-select-picker-min-width, var(${da}•min•width));
      margin: var(--arc-select-picker-margin, var(${E}•4) 0);
      padding: var(--arc-select-picker-padding, var(${E}•4));
      background: var(--arc-select-picker-background, var(${wd}));
      border-radius: var(--arc-select-picker-border-radius, var(${da}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${da}•shadow));
    }

    ::picker(select):popover-open {
      ${da}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${f}•12);
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${f}•24);
      --arc-avatar-initial-font-size: var(${f}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [data-element=selected-icon] {
        display: none;
      }
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
      min-width: 0;

      color: var(${Bn});
      background: var(--arc-select-option-background, var(${Dn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${E}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${Dn}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${Dn}: var(--arc-color-bg-selected-default);
        ${mo}•display: flex;
        ${mo}•color: var(--arc-select-option-selected-icon-color, var(${Bn}));
      }

      [data-element=selected-icon] {
        display: var(${mo}•display, none);
        color: var(${mo}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }
    }
  }

  ${tf}
  ${nf}

}
`,sf=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",items:o,renderItem:t,headerLabel:i,headerSlot:n,footerCaption:l,footerSlot:d,readOnly:u,id:v,onChange:p,onBlur:g,onFocus:m,onKeyDown:b,onKeyUp:$,onInput:k,onInvalid:T,onClick:x,name:z,value:y,defaultValue:A,required:D,disabled:B,autoComplete:O,autoFocus:I,form:C,...U},H)=>{const rr=Tr(v,"arc-select"),W=e==="plain"&&r==="fill"?"hug":r,or=B||void 0,nr=u||void 0,vr=D||void 0,M=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),F=e!=="plain"&&!!(i||n),N=e!=="plain"&&!!(l||d),R=o?.filter(K=>K?.variant!=="divider"&&K?.variant!=="section-label")??[],er=K=>{const _=dr=>typeof dr=="string"&&dr.trim().length>0;return[K?.text,K?.avatar?.name,K?.["aria-label"]].find(_)??"Anonymous"},Z=(K,_)=>{if(t)return t(K,_);const X=st(K),dr=rd(X),{itemId:$r,...Vr}=K;return dr(Vr)},ar=nr&&(y!=null||A!=null)?String(y??A):void 0;return(0,c.jsxs)(yr.Wrapper,{...U,"arc-select":"","arc-input":"select",layout:W,size:a,variant:e,children:[F&&(0,c.jsxs)(yr.Header,{children:[(0,c.jsx)(yr.HeaderLabel,{htmlFor:rr,children:i}),!!n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(yr.Spacer,{}),(0,c.jsx)(yr.HeaderSlot,{children:n})]})]}),(0,c.jsx)(yr.InputBody,{children:(0,c.jsxs)("select",{name:z,value:y,defaultValue:A,required:D,disabled:B,autoComplete:O,autoFocus:I,form:C,ref:H,id:rr,onChange:p,onBlur:g,onFocus:m,onKeyDown:b,onKeyUp:$,onInput:k,onInvalid:T,onClick:x,"aria-disabled":or,"aria-required":vr,"data-readonly":nr,children:[(0,c.jsxs)("button",{children:[(0,c.jsx)("selectedcontent",{}),(0,c.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,c.jsx)(cr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),R.map((K,_)=>{const X=K["aria-disabled"]===!0||K.disabled===!0,dr=String(K?.value??K?.itemId??_),$r=st(K),Vr=er(K);return(0,c.jsx)("option",{value:dr,disabled:X||ar!==void 0&&dr!==ar||void 0,"arc-select-option":"","arc-select-option-role":$r,children:M?(0,c.jsxs)(c.Fragment,{children:[Z(K,_),(0,c.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,c.jsx)(cr,{icon:"fa-regular fa-check arc-fw"})})]}):Vr},K.itemId??_)})]})}),N&&(0,c.jsxs)(yr.Footer,{children:[(0,c.jsx)(yr.FooterCaption,{children:l}),!!d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(yr.Spacer,{}),(0,c.jsx)(yr.FooterSlot,{children:d})]})]})]})});ir("ArcSelect",cf);const lf=q(Jr,["inherit","md","sm"]),Or={On:"on",Off:"off"},bo={Before:"before",After:"after"},df=({disabled:r,id:a,name:e,size:o="md",value:t,labelOff:i,labelOn:n,onChange:l,...d})=>{const u=Tr(e,"arc-switch-name"),v=Tr(a?`${a}-off`:void 0,"arc-switch-off"),p=Tr(a?`${a}-on`:void 0,"arc-switch-on"),g=x=>{if(x.code==="Space"){x.preventDefault(),x.stopPropagation();const z=t===Or.On?Or.Off:Or.On;l?.({value:z},x)}},m=x=>{const z={on:Lo(n),off:Lo(i)};return z?.on&&z?.off?z[x]:!z?.on&&z?.off?`${z?.off}: ${x}`:z?.on&&!z?.off?`${z?.on}: ${x}`:z[x]},b=(0,c.jsxs)(sn,{type:"switch",onKeyDown:g,children:[(0,c.jsx)(Jo,{type:"switch",name:u,id:v,value:Or.Off,checked:t===Or.Off,disabled:r,"aria-label":m(Or.Off)?.trim(),onChange:l}),(0,c.jsx)(Jo,{type:"switch",name:u,id:p,value:Or.On,checked:t===Or.On,disabled:r,"aria-label":m(Or.On)?.trim(),onChange:l}),(0,c.jsx)("span",{"data-element":"mask"})]}),$=!n&&t===Or.Off?p:v,k=!i&&t===Or.On?v:p,T=!!(n||i)&&(0,c.jsxs)(c.Fragment,{children:[!!i&&(0,c.jsx)(me,{htmlFor:$,"arc-switch-label":n?Or.Off:"",children:(0,c.jsx)(Oe,{children:i})}),b,!!n&&(0,c.jsx)(me,{htmlFor:k,"arc-switch-label":i?Or.On:"",children:(0,c.jsx)(Oe,{children:n})})]});return(0,c.jsx)("span",{...d,"arc-switch":"","data-state":t,"data-size":o,role:"radiogroup",children:T||b})},Rr=s`--arc•switch`,mr=s`${Rr}•knob`,uf=s`
@layer arc-components {

  [arc-switch] {
    ${Rr}•background: var(--arc-color-alpha-white-100);
    ${mr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${Rr}•background: var(--arc-color-alpha-white-70);
      ${mr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${j}•background: var(--arc-color-bg-neutral-subtle);
      ${j}•border•color: var(--arc-color-border-stark);
      ${mr}•border•color: var(--arc-color-border-on-stark);
      ${mr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${j}•border•color: var(--arc-color-border-heavy);
        ${mr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${j}•background: var(--arc-color-bg-disabled);
        ${j}•border•color: var(--arc-color-border-disabled);
        ${mr}•border•color: var(--arc-color-border-on-stark);
        ${mr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${j}•background: var(--arc-color-bg-theme-heavy);
      ${j}•border•color: var(--arc-color-border-theme-heavy);
      ${mr}•border•color: var(--arc-color-border-theme-heavy);
      ${mr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${j}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${j}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${Rr}•font•size: 1em;
      ${Rr}•width: 2.5em;
      ${Rr}•height: 1.5em;
      ${Rr}•gap: 0.5em;
      ${mr}•size: 1.5em;
      ${mr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${Rr}•font•size: var(${f}•14);
      ${Rr}•width: var(${f}•40);
      ${Rr}•height: var(${f}•24);
      ${Rr}•gap: var(${f}•8);
      ${mr}•x•shift: var(${f}•4);
      ${mr}•size: var(${f}•24);
    }

    &[data-size=sm] {
      ${Rr}•font•size: var(${f}•12);
      ${Rr}•width: var(${f}•30);
      ${Rr}•height: var(${f}•14);
      ${Rr}•gap: var(${f}•8);
      ${mr}•x•shift: var(${f}•1);
      ${mr}•size: var(${f}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${j}•border•radius: var(--arc-border-radius-pill);
    ${j}•width: var(${Rr}•width);
    ${j}•height: var(${Rr}•height);
    ${j}•x•shift: var(${mr}•x•shift);
    ${j}•size: var(${mr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${mr}•translate: calc(-100% + var(${mr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${mr}•translate: calc(0% - var(${mr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${Rr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${Rr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${j}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${mr}•translate);

      display: inline-flex;
      width: var(${mr}•size);
      height: var(${mr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${mr}•color);
      box-shadow: var(${mr}•shadow);
      border: var(${j}•border•width) solid var(${mr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,hf=({disabled:r,id:a,name:e,size:o="md",value:t,label:i,labelPosition:n=bo.After,onChange:l,labelOff:d,labelOn:u,...v})=>{const p=Tr(e,"arc-switch-name"),g=Tr(a,"arc-switch"),m=(k,T)=>{const x=k.checked?Or.On:Or.Off;l?.({...k,value:x},T)};!i&&(u||d)&&(i=u||d,n=u?bo.After:bo.Before);const b=(0,c.jsxs)(sn,{type:"checkbox",children:[(0,c.jsx)(Jo,{type:"checkbox",name:p,id:g,checked:t===Or.On,disabled:r,role:"switch","aria-checked":t===Or.On,"aria-label":i?void 0:"Toggle switch",tabIndex:0,onChange:m}),(0,c.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,c.jsx)(me,{htmlFor:g,"arc-switch-label":n,children:(0,c.jsx)(Oe,{children:i})});return d&&u?(0,c.jsx)(df,{...v,disabled:r,id:a,name:e,labelOff:d,labelOn:u,size:o,value:t,onChange:l}):(0,c.jsxs)("span",{...v,"arc-switch":"","data-state":t,"data-size":o,"data-label-position":n,role:"presentation","aria-live":"off",children:[i&&n===bo.Before&&$,b,i&&n===bo.After&&$]})};ir("ArcSwitch",uf);const vf=["title","heading","subheading","body"],Cd=["h1","h2","h3","h4","h5","h6"],Ad=["code","div","li","p","pre","span"],Sd=[...Cd,...Ad],gf=[...Qa],pf=["title-inherit","title-lg","title-md","title-sm"],ff=["heading-inherit","heading-lg","heading-md","heading-sm"],mf=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],bf=q(Sr,["inherit","primary","primary-inverse"]),$f=["body-inherit","body-lg","body-md","body-sm","body-xs"],yf=Wr(Sr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),xf=q(wt,["inherit","start","center","justify","end"]),kf=q(Ct,["inherit","loose","standard","tight"]),wf={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},Cf=r=>{const{align:a,lineHeight:e,size:o,variant:t,scheme:i="auto",isMonospace:n,tag:l,...d}=r,u=wf?.[l]??"body",v=o?.includes("inherit")?o?.split("-")?.[0]:o,p=t?.endsWith("-inverse");let g;return i!=="auto"?g=i:p&&(g=void 0),{...d,"arc-text":v||u,"arc-scheme":g,"data-is-monospace":n?"":void 0,"data-align":a?.includes("inherit")?void 0:a,"data-variant":t?.includes("inherit")?void 0:t,"data-line-height":e?.includes("inherit")?void 0:e}},le=s`--arc•text`,Bi=s`${le}•font`,$o=s`${le}•align`,Ga=s`${le}fg`,zd=s`${le}•flex`,Ed=s`${le}•hyphens`,pt=s`${le}•letterspacing`,Ya=s`${le}•lineheight`,_d=s`${le}•opacity`,Td=s`${le}•whitespace`,We=s`${Bi}•family`,jr=s`${Bi}•size`,yo=s`${Bi}•weight`,Af=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${$o}: unset;
  ${Ga}: unset;
  ${zd}: unset;
  ${Ed}: auto;
  ${pt}: unset;
  ${Ya}: unset;
  ${_d}: unset;
  ${Td}: unset;

  ${We}: unset;
  ${jr}: unset;
  ${yo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${Ya}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${Ya}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${Ya}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${$o}: start;
  }

  &[data-align=center] {
    ${$o}: center;
  }

  &[data-align=justify] {
    ${$o}: justify;
  }

  &[data-align=end] {
    ${$o}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${Ga}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${Ga}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${Ga}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${Ga}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${Ga}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${Ga}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${Ga}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${Ga}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${We}: var(--arc-font-family-title);
  ${yo}: var(--arc-font-weight-title);
  ${pt}: var(--arc-letter-spacing-title);
  ${Ya}: var(--arc-line-height-title);

  ${jr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${jr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${jr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${jr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${We}: var(--arc-font-family-heading);
  ${yo}: var(--arc-font-weight-heading);
  ${pt}: var(--arc-letter-spacing-heading);
  ${Ya}: var(--arc-line-height-heading);

  ${jr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${jr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${jr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${jr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${We}: var(--arc-font-family-subheading);
  ${yo}: var(--arc-font-weight-subheading);
  ${pt}: unset;
  ${Ya}: var(--arc-line-height-subheading);

  ${jr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${jr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${jr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${jr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${We}: var(--arc-font-family-body);
  ${yo}: var(--arc-font-weight-body);
  ${Ya}: var(--arc-line-height-body);
  ${jr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${jr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${jr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${jr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${jr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${jr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${We}: var(--arc-font-family-mono);
  ${Ya}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${zd}));
  hyphens: var(--arc-text-hyphens, var(${Ed})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${_d}));
  text-align: var(--arc-text-align, var(${$o}));
  white-space: var(--arc-text-white-space, var(${Td}));

  color: var(--arc-text-color, var(${Ga}));

  font-size: var(--arc-text-font-size, var(${jr}));
  font-family: var(--arc-text-font-family, var(${We}));
  font-weight: var(--arc-text-font-weight, var(${yo}));
  line-height: var(--arc-text-line-height, var(${Ya}));
  letter-spacing: var(--arc-text-letter-spacing, var(${pt}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Sf=r=>(0,h.forwardRef)((a,e)=>(0,h.createElement)(r,{...Cf({...a,tag:r}),ref:e})),zf=[...Sd].reduce((r,a)=>({...r,[a]:Sf(a)}),{});ir("Arc",Af);const Ef=q(Sr,["common","ai","critical"]),Id=[...Qa],jd=["default","success","warning","error"],Rd=q(Jr,["inherit","md"]),Ld=q(Sr,["common"]),Pd=[...ze],_f=[...Ge],Md=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Tf=Ef.filter(r=>r!=="critical"),Bd={size:Rd[1],variant:Ld[0],scheme:Id[2],popover:Pd[2],placement:Md[4],severity:jd[0],showDismiss:!0},Dd=(r,a="toggle")=>{const e=document.getElementById(r);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[a]()},Od=s`--arc•progress`,If=s`${Od}•bar`,jf=s`${Od}•value`,Fd=s`${If}•bg`,ft=s`${jf}•bg`,Rf=s`
@layer arc-components {
[arc-progress-bar] {
  ${Fd}: var(--arc-color-alpha-subtle);
  ${ft}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${ft}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${ft}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${f}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${Fd}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${ft}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${ft}));
  }
}

}
`,Lf=({progress:r=0,variant:a="common",...e})=>(0,c.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":a,value:r,max:e.max||100,"aria-valuenow":r,"aria-valuemax":e.max||100,children:[r,"% "]});ir("ArcProgressBar",Rf);const qa=s`--arc•toast`,On=s`${qa}•content`,Nd=s`${qa}•color`,Hd=s`${qa}•background`,mt=s`${qa}•icon•color`,bt=s`${qa}•transition`,Pf=s`
@layer arc-components {

  [arc-toast] {
    ${On}•gap: var(${E}•2);
    ${bt}•duration: 300ms;
    ${mt}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${qa}•font•size: var(${f}•16);
      ${On}•font•size: var(${f}•14);
    }

    &[data-size=inherit] {
      ${qa}•font•size: 1em;
      ${On}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${mt}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${mt}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${mt}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${Hd}: var(--arc-color-bg-mono);
      ${Nd}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${E}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${qa}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Nd}));
    background-color: var(--arc-toast-background, var(${Hd}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${E}•12) var(${E}•12) var(${E}•12) var(${E}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${qa}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${qa}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${E}•8) var(${E}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${E}•8);
      padding: var(${E}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${mt}));

      height: 1lh;
      padding: 0 var(${E}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${On}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${E}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${bt}•duration) allow-discrete,
      overlay var(${bt}•duration) allow-discrete,
      content-visibility var(${bt}•duration) allow-discrete,
      opacity var(${bt}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,Vd=({id:r,children:a,icon:e,heading:o,subtext:t,dismissProps:i,showDismiss:n=!0,onClose:l,actionSlot:d,size:u="md",variant:v="common",scheme:p=Bd.scheme,placement:g="bottom-left",getToastId:m,progressBarProps:b,severity:$,...k})=>{const T=()=>{l?.()},x=p==="auto"?void 0:p,z=!!d||n,y=Tr(r,"arc-toast"),{variant:A,hierarchy:D,...B}=i||{};(0,h.useEffect)(()=>{m?.(y)},[m,y]);const O=dc(e);return(0,c.jsx)("div",{...k,"arc-toast":"","arc-scheme":x,"data-size":u,"data-variant":v,"data-placement":g,"data-severity":$||void 0,id:y,children:(0,c.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,c.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,c.jsx)(cr,{icon:O,"arc-toast-icon":""}),(0,c.jsx)("div",{"arc-toast-content":"",children:a||(0,c.jsxs)(c.Fragment,{children:[o&&(0,c.jsx)("header",{"arc-toast-heading":"",children:(0,c.jsx)("strong",{children:o})}),t&&(0,c.jsx)("p",{"arc-toast-subtext":"",children:t})]})})]}),z&&(0,c.jsxs)("div",{"arc-toast-actions":"",children:[d,n&&(0,c.jsx)(xr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...B,popoverTarget:y,onClick:T})]}),b&&(0,c.jsx)(Lf,{...b,variant:$==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};Vd.handleToast=Dd,ir("ArcToast",Pf);var $t;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})($t||($t={}));const Mf=(r,a,e)=>{const[o,t]=(0,h.useState)(a),[i,n]=Np(r,a),[l,d]=Ri(r,a);return e===$t.Temporary?[i,n]:e===$t.Persistent?[l,d]:[o,t]},Bf=["auto","hex","hexa","rgb","hsl","oklch"],Df=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
