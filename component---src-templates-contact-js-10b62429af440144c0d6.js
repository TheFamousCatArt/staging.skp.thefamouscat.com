"use strict";(self.webpackChunkthefamouscat_artist=self.webpackChunkthefamouscat_artist||[]).push([[949],{7417:function(e,t,n){n.d(t,{g:function(){return l}});var o=n(3761),r=n(7294),i=n(1597),a=n(9529),l=function(e){var t=e.artwork,n=e.contact;if((0,a.le)(t))return r.createElement(r.Fragment,null);var l,c,s=t.title,u=t.year,d=t.color,p=t.medium,f=t.height,m=t.width;return r.createElement(r.Fragment,null,r.createElement("div",{className:"artwork-title"},(c="h"+(n?"2":"1"),r.createElement(c,null,s,r.createElement("span",{style:{color:"var(--primary)"}},".")))),r.createElement("div",{className:"artwork-type"},(l="h"+(n?"3":"2"),r.createElement(l,null,d.map((function(e,t){return e.name+(t<d.length-1?" and ":"")}))," ","on ",p.name,", ",u))),r.createElement("div",{className:"artwork-size artwork-details"},r.createElement(r.Fragment,null,f," x ",m," cm / ",Math.round(f/2.54)," x ",Math.round(m/2.54)," in")),r.createElement("div",{className:"artwork-classification artwork-details"},"This is a unique work."),r.createElement("div",{className:"artwork-price"},r.createElement("div",{className:"banner__btns"},r.createElement(r.Fragment,null,r.createElement("h3",null,t.getPrice()," €",r.createElement("span",{style:{color:"var(--primary)"}},".")),r.createElement("div",null,t.isSold()&&r.createElement(o.Z,{text:"This work is already sold"}),n||t.isSold()?r.createElement(r.Fragment,null):r.createElement(o.Z,{className:"btn",text:"Contact Us",as:i.rU,to:"/contact?type=artwork&slug="+t.slug}))))),r.createElement("div",{className:"artwork-description artwork-details"},"This work includes a certificate of authenticity."))}},1045:function(e,t,n){n.r(t),n.d(t,{default:function(){return st}});var o=n(7294),r=n.t(o,2),i=n(8706),a=n(3761),l=n(3587).default.section.withConfig({displayName:"ContactStyles",componentId:"sc-2kzxdh-0"})(['max-width:750px;box-sizing:content-box;margin-left:auto;margin-right:auto;input{height:calc(var(--gap));margin-bottom:var(--gap);}input,textarea{margin-bottom:8px;background-color:#000;color:#fff;border:none;outline:2px solid rgba(255,255,255,0.15);border-radius:6px;width:100%;font-size:var(--p);font-weight:100;font-family:"Heebo",sans-serif;padding:4px 8px;transition:outline 0.3s ease;&:focus{outline:2px solid var(--primary);}&:invalid{outline:2px solid var(--alert);}&::-webkit-input-placeholder{color:var(--inActive);}&::-moz-placeholder{color:var(--inActive);}&:-ms-input-placeholder{color:var(--inActive);}&:-moz-placeholder{color:var(--inActive);}}textarea{margin-bottom:var(--gap);}']),c=n(9529);function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t){!function(e){return function(t){return e((function(e){return Object.assign({},e,t)}))}}(e)(t)}function p(e,t,n,o,r,i){e.preventDefault();for(var a,l=document.getElementById(r),u=s(t);!(a=u()).done;){var p=a.value;l.elements[p].setCustomValidity("")}var f=[];if(function(e,t,n,o,r){(0,c.le)(r)&&(r=function(e,t){return!0});for(var i=0;i<e.length;i++){var a=e[i];t[a]&&r(a,t[a])||(console.log("Validation of required field "+a+" failed"),n.push({msg:o(a),field:a}))}}(t,n,f,(function(e){return r+".field."+e+".missing"}),(function(e,t){return"email"!==e||(0,c.vV)(t)})),d(o,{errors:f,success:!1}),f.length>0){for(var m,v=s(f);!(m=v()).done;){var h=m.value;l.elements[h.field].setCustomValidity(h.msg)}return!1}console.log("Sending form");for(var g={},b=0;b<l.elements.length;b++){var y=l.elements[b];g[encodeURIComponent(y.name)]=encodeURIComponent(y.value)}return d(o,{success:!0}),i(n,g),!0}var f=function(e){var t=e.textareaTemplate,n=e.onSuccess,r=(0,o.useState)({email:"",name:"",message:t,errors:[],success:!1}),i=r[0],c=r[1],s=["message","name","email"];function u(e){var t;d(c,((t={})[e.target.name]=e.target.value,t))}return o.createElement(l,null,o.createElement("form",{name:"contact",id:"contact-form"},o.createElement("input",{placeholder:"Your name...",type:"text",name:"name",onChange:u}),o.createElement("input",{placeholder:"Your email...",type:"email",name:"email",onChange:u}),o.createElement("textarea",{placeholder:"Your message...",name:"message",rows:"5",defaultValue:t||"",onChange:u}),o.createElement(a.Z,{text:"Send Message",onClick:function(e){return p(e,s,i,c,"contact-form",n)}})))},m=n(3370),v=n(3900),h=n(7630),g=n(396),b=n(7417),y=function(){function e(){}return e.prototype.send=function(e){return fetch("https://api.skp-art.com/post",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})},e}(),x=n(170),w=n.n(x),S=n(4942),Z=n(5245),E=n(7462),R=n(5505),M=n(9408),k=n(7663),C=n(5630),z=n(1158),T=n(6550).Z,j=n(278),N=n(2194);function I(e){return(0,j.Z)("MuiPaper",e)}(0,N.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var A=n(5893),P=["className","component","elevation","square","variant"],L=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},V=(0,C.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,E.Z)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&(0,E.Z)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,k.Fq)("#fff",L(n.elevation)),", ").concat((0,k.Fq)("#fff",L(n.elevation)),")")}))})),F=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiPaper"}),o=n.className,r=n.component,i=void 0===r?"div":r,a=n.elevation,l=void 0===a?1:a,c=n.square,s=void 0!==c&&c,u=n.variant,d=void 0===u?"elevation":u,p=(0,Z.Z)(n,P),f=(0,E.Z)({},n,{component:i,elevation:l,square:s,variant:d}),m=function(e){var t=e.square,n=e.elevation,o=e.variant,r=e.classes,i={root:["root",o,!t&&"rounded","elevation"===o&&"elevation".concat(n)]};return(0,M.Z)(i,I,r)}(f);return(0,A.jsx)(V,(0,E.Z)({as:i,ownerState:f,className:(0,R.Z)(m.root,o),ref:t},p))}));function O(e){return(0,j.Z)("MuiAlert",e)}var B=(0,N.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),D=n(885);function q(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var U=function(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(n){q(e,n),q(t,n)}}),[e,t])},_="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var H,W=function(e){var t=o.useRef(e);return _((function(){t.current=e})),o.useCallback((function(){return t.current.apply(void 0,arguments)}),[])},Y=!0,K=!1,X={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function $(e){e.metaKey||e.altKey||e.ctrlKey||(Y=!0)}function J(){Y=!1}function G(){"hidden"===this.visibilityState&&K&&(Y=!0)}function Q(e){var t,n,o,r=e.target;try{return r.matches(":focus-visible")}catch(i){}return Y||(n=(t=r).type,!("INPUT"!==(o=t.tagName)||!X[n]||t.readOnly)||"TEXTAREA"===o&&!t.readOnly||!!t.isContentEditable)}var ee=function(){var e=o.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",$,!0),t.addEventListener("mousedown",J,!0),t.addEventListener("pointerdown",J,!0),t.addEventListener("touchstart",J,!0),t.addEventListener("visibilitychange",G,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!Q(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(K=!0,window.clearTimeout(H),H=window.setTimeout((function(){K=!1}),100),t.current=!1,!0)},ref:e}},te=n(2982);function ne(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var oe=n(1721),re=o.createContext(null);function ie(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function ae(e,t,n){return null!=n[t]?n[t]:e.props[t]}function le(e,t,n){var r=ie(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var l={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var s=r[c][o];l[r[c][o]]=n(s)}l[c]=n(c)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}(t,r);return Object.keys(i).forEach((function(a){var l=i[a];if((0,o.isValidElement)(l)){var c=a in t,s=a in r,u=t[a],d=(0,o.isValidElement)(u)&&!u.props.in;!s||c&&!d?s||!c||d?s&&c&&(0,o.isValidElement)(u)&&(i[a]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:u.props.in,exit:ae(l,"exit",e),enter:ae(l,"enter",e)})):i[a]=(0,o.cloneElement)(l,{in:!1}):i[a]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:ae(l,"exit",e),enter:ae(l,"enter",e)})}})),i}var ce=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},se=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,oe.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,ie(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:ae(e,"appear",n),enter:ae(e,"enter",n),exit:ae(e,"exit",n)})}))):le(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=ie(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,E.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,Z.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=ce(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(re.Provider,{value:i},a):o.createElement(re.Provider,{value:i},o.createElement(t,r,a))},t}(o.Component);se.defaultProps={component:"div",childFactory:function(e){return e}};var ue=se,de=(n(5743),n(7411),n(7154),n(5706),n(6419));r.useInsertionEffect?r.useInsertionEffect:o.useLayoutEffect;function pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,de.O)(t)}var fe=function(){var e=pe.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var me=function(e){var t=e.className,n=e.classes,r=e.pulsate,i=void 0!==r&&r,a=e.rippleX,l=e.rippleY,c=e.rippleSize,s=e.in,u=e.onExited,d=e.timeout,p=o.useState(!1),f=(0,D.Z)(p,2),m=f[0],v=f[1],h=(0,R.Z)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),g={width:c,height:c,top:-c/2+l,left:-c/2+a},b=(0,R.Z)(n.child,m&&n.childLeaving,i&&n.childPulsate);return s||m||v(!0),o.useEffect((function(){if(!s&&null!=u){var e=setTimeout(u,d);return function(){clearTimeout(e)}}}),[u,s,d]),(0,A.jsx)("span",{className:h,style:g,children:(0,A.jsx)("span",{className:b})})};var ve,he,ge,be,ye,xe,we,Se,Ze=(0,N.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ee=["center","classes","className"],Re=fe(ye||(ye=ve||(ve=ne(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),Me=fe(xe||(xe=he||(he=ne(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),ke=fe(we||(we=ge||(ge=ne(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),Ce=(0,C.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ze=(0,C.ZP)(me,{name:"MuiTouchRipple",slot:"Ripple"})(Se||(Se=be||(be=ne(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),Ze.rippleVisible,Re,550,(function(e){return e.theme.transitions.easing.easeInOut}),Ze.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),Ze.child,Ze.childLeaving,Me,550,(function(e){return e.theme.transitions.easing.easeInOut}),Ze.childPulsate,ke,(function(e){return e.theme.transitions.easing.easeInOut})),Te=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiTouchRipple"}),r=n.center,i=void 0!==r&&r,a=n.classes,l=void 0===a?{}:a,c=n.className,s=(0,Z.Z)(n,Ee),u=o.useState([]),d=(0,D.Z)(u,2),p=d[0],f=d[1],m=o.useRef(0),v=o.useRef(null);o.useEffect((function(){v.current&&(v.current(),v.current=null)}),[p]);var h=o.useRef(!1),g=o.useRef(null),b=o.useRef(null),y=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var x=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;f((function(e){return[].concat((0,te.Z)(e),[(0,A.jsx)(ze,{classes:{ripple:(0,R.Z)(l.ripple,Ze.ripple),rippleVisible:(0,R.Z)(l.rippleVisible,Ze.rippleVisible),ripplePulsate:(0,R.Z)(l.ripplePulsate,Ze.ripplePulsate),child:(0,R.Z)(l.child,Ze.child),childLeaving:(0,R.Z)(l.childLeaving,Ze.childLeaving),childPulsate:(0,R.Z)(l.childPulsate,Ze.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:r},m.current)])})),m.current+=1,v.current=i}),[l]),w=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=t.pulsate,r=void 0!==o&&o,a=t.center,l=void 0===a?i||t.pulsate:a,c=t.fakeElement,s=void 0!==c&&c;if("mousedown"===e.type&&h.current)h.current=!1;else{"touchstart"===e.type&&(h.current=!0);var u,d,p,f=s?null:y.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(l||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(m.width/2),d=Math.round(m.height/2);else{var v=e.touches?e.touches[0]:e,w=v.clientX,S=v.clientY;u=Math.round(w-m.left),d=Math.round(S-m.top)}if(l)(p=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(p+=1);else{var Z=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,E=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(Z,2)+Math.pow(E,2))}e.touches?null===b.current&&(b.current=function(){x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){b.current&&(b.current(),b.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[i,x]),S=o.useCallback((function(){w({},{pulsate:!0})}),[w]),M=o.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&b.current)return b.current(),b.current=null,void(g.current=setTimeout((function(){M(e,t)})));b.current=null,f((function(e){return e.length>0?e.slice(1):e})),v.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:S,start:w,stop:M}}),[S,w,M]),(0,A.jsx)(Ce,(0,E.Z)({className:(0,R.Z)(l.root,Ze.root,c),ref:y},s,{children:(0,A.jsx)(ue,{component:null,exit:!0,children:p})}))})),je=Te;function Ne(e){return(0,j.Z)("MuiButtonBase",e)}var Ie,Ae=(0,N.Z)("MuiButtonBase",["root","disabled","focusVisible"]),Pe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Le=(0,C.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,t){return t.root}})((Ie={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,S.Z)(Ie,"&.".concat(Ae.disabled),{pointerEvents:"none",cursor:"default"}),(0,S.Z)(Ie,"@media print",{colorAdjust:"exact"}),Ie)),Ve=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiButtonBase"}),r=n.action,i=n.centerRipple,a=void 0!==i&&i,l=n.children,c=n.className,s=n.component,u=void 0===s?"button":s,d=n.disabled,p=void 0!==d&&d,f=n.disableRipple,m=void 0!==f&&f,v=n.disableTouchRipple,h=void 0!==v&&v,g=n.focusRipple,b=void 0!==g&&g,y=n.LinkComponent,x=void 0===y?"a":y,w=n.onBlur,S=n.onClick,k=n.onContextMenu,C=n.onDragLeave,T=n.onFocus,j=n.onFocusVisible,N=n.onKeyDown,I=n.onKeyUp,P=n.onMouseDown,L=n.onMouseLeave,V=n.onMouseUp,F=n.onTouchEnd,O=n.onTouchMove,B=n.onTouchStart,q=n.tabIndex,_=void 0===q?0:q,H=n.TouchRippleProps,Y=n.touchRippleRef,K=n.type,X=(0,Z.Z)(n,Pe),$=o.useRef(null),J=o.useRef(null),G=U(J,Y),Q=ee(),te=Q.isFocusVisibleRef,ne=Q.onFocus,oe=Q.onBlur,re=Q.ref,ie=o.useState(!1),ae=(0,D.Z)(ie,2),le=ae[0],ce=ae[1];p&&le&&ce(!1),o.useImperativeHandle(r,(function(){return{focusVisible:function(){ce(!0),$.current.focus()}}}),[]);var se=o.useState(!1),ue=(0,D.Z)(se,2),de=ue[0],pe=ue[1];o.useEffect((function(){pe(!0)}),[]);var fe=de&&!m&&!p;function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h;return W((function(o){return t&&t(o),!n&&J.current&&J.current[e](o),!0}))}o.useEffect((function(){le&&b&&!m&&de&&J.current.pulsate()}),[m,b,le,de]);var ve=me("start",P),he=me("stop",k),ge=me("stop",C),be=me("stop",V),ye=me("stop",(function(e){le&&e.preventDefault(),L&&L(e)})),xe=me("start",B),we=me("stop",F),Se=me("stop",O),Ze=me("stop",(function(e){oe(e),!1===te.current&&ce(!1),w&&w(e)}),!1),Ee=W((function(e){$.current||($.current=e.currentTarget),ne(e),!0===te.current&&(ce(!0),j&&j(e)),T&&T(e)})),Re=function(){var e=$.current;return u&&"button"!==u&&!("A"===e.tagName&&e.href)},Me=o.useRef(!1),ke=W((function(e){b&&!Me.current&&le&&J.current&&" "===e.key&&(Me.current=!0,J.current.stop(e,(function(){J.current.start(e)}))),e.target===e.currentTarget&&Re()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&Re()&&"Enter"===e.key&&!p&&(e.preventDefault(),S&&S(e))})),Ce=W((function(e){b&&" "===e.key&&J.current&&le&&!e.defaultPrevented&&(Me.current=!1,J.current.stop(e,(function(){J.current.pulsate(e)}))),I&&I(e),S&&e.target===e.currentTarget&&Re()&&" "===e.key&&!e.defaultPrevented&&S(e)})),ze=u;"button"===ze&&(X.href||X.to)&&(ze=x);var Te={};"button"===ze?(Te.type=void 0===K?"button":K,Te.disabled=p):(X.href||X.to||(Te.role="button"),p&&(Te["aria-disabled"]=p));var Ie=U(re,$),Ae=U(t,Ie);var Ve=(0,E.Z)({},n,{centerRipple:a,component:u,disabled:p,disableRipple:m,disableTouchRipple:h,focusRipple:b,tabIndex:_,focusVisible:le}),Fe=function(e){var t=e.disabled,n=e.focusVisible,o=e.focusVisibleClassName,r=e.classes,i={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,M.Z)(i,Ne,r);return n&&o&&(a.root+=" ".concat(o)),a}(Ve);return(0,A.jsxs)(Le,(0,E.Z)({as:ze,className:(0,R.Z)(Fe.root,c),ownerState:Ve,onBlur:Ze,onClick:S,onContextMenu:he,onFocus:Ee,onKeyDown:ke,onKeyUp:Ce,onMouseDown:ve,onMouseLeave:ye,onMouseUp:be,onDragLeave:ge,onTouchEnd:we,onTouchMove:Se,onTouchStart:xe,ref:Ae,tabIndex:p?-1:_,type:K},Te,X,{children:[l,fe?(0,A.jsx)(je,(0,E.Z)({ref:G,center:a},H)):null]}))})),Fe=Ve;function Oe(e){return(0,j.Z)("MuiIconButton",e)}var Be=(0,N.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),De=["edge","children","className","color","disabled","disableFocusRipple","size"],qe=(0,C.ZP)(Fe,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat(T(n.color))],n.edge&&t["edge".concat(T(n.edge))],t["size".concat(T(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,E.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:t.palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:(0,k.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t=e.theme,n=e.ownerState;return(0,E.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,E.Z)({color:t.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:(0,k.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,S.Z)({},"&.".concat(Be.disabled),{backgroundColor:"transparent",color:t.palette.action.disabled}))})),Ue=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiIconButton"}),o=n.edge,r=void 0!==o&&o,i=n.children,a=n.className,l=n.color,c=void 0===l?"default":l,s=n.disabled,u=void 0!==s&&s,d=n.disableFocusRipple,p=void 0!==d&&d,f=n.size,m=void 0===f?"medium":f,v=(0,Z.Z)(n,De),h=(0,E.Z)({},n,{edge:r,color:c,disabled:u,disableFocusRipple:p,size:m}),g=function(e){var t=e.classes,n=e.disabled,o=e.color,r=e.edge,i=e.size,a={root:["root",n&&"disabled","default"!==o&&"color".concat(T(o)),r&&"edge".concat(T(r)),"size".concat(T(i))]};return(0,M.Z)(a,Oe,t)}(h);return(0,A.jsx)(qe,(0,E.Z)({className:(0,R.Z)(g.root,a),centerRipple:!0,focusRipple:!p,disabled:u,ref:t,ownerState:h},v,{children:i}))}));function _e(e){return(0,j.Z)("MuiSvgIcon",e)}(0,N.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var He=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],We=(0,C.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat(T(n.color))],t["fontSize".concat(T(n.fontSize))]]}})((function(e){var t,n,o,r,i,a,l,c,s,u,d,p,f,m,v,h,g,b=e.theme,y=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=b.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(o=b.transitions)||null==(r=o.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(i=b.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(l=b.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(s=b.typography)||null==(u=s.pxToRem)?void 0:u.call(s,35))||"2.1875"}[y.fontSize],color:null!=(d=null==(p=b.palette)||null==(f=p[y.color])?void 0:f.main)?d:{action:null==(m=b.palette)||null==(v=m.action)?void 0:v.active,disabled:null==(h=b.palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[y.color]}})),Ye=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiSvgIcon"}),o=n.children,r=n.className,i=n.color,a=void 0===i?"inherit":i,l=n.component,c=void 0===l?"svg":l,s=n.fontSize,u=void 0===s?"medium":s,d=n.htmlColor,p=n.inheritViewBox,f=void 0!==p&&p,m=n.titleAccess,v=n.viewBox,h=void 0===v?"0 0 24 24":v,g=(0,Z.Z)(n,He),b=(0,E.Z)({},n,{color:a,component:c,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:h}),y={};f||(y.viewBox=h);var x=function(e){var t=e.color,n=e.fontSize,o=e.classes,r={root:["root","inherit"!==t&&"color".concat(T(t)),"fontSize".concat(T(n))]};return(0,M.Z)(r,_e,o)}(b);return(0,A.jsxs)(We,(0,E.Z)({as:c,className:(0,R.Z)(x.root,r),ownerState:b,focusable:"false",color:d,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},y,g,{children:[o,m?(0,A.jsx)("title",{children:m}):null]}))}));Ye.muiName="SvgIcon";var Ke=Ye;function Xe(e,t){var n=function(n,o){return(0,A.jsx)(Ke,(0,E.Z)({"data-testid":"".concat(t,"Icon"),ref:o},n,{children:e}))};return n.muiName=Ke.muiName,o.memo(o.forwardRef(n))}var $e,Je=Xe((0,A.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Ge=Xe((0,A.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Qe=Xe((0,A.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),et=Xe((0,A.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),tt=Xe((0,A.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),nt=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],ot=(0,C.ZP)(F,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(T(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode?k._j:k.$n,r="light"===t.palette.mode?k.$n:k._j,i=n.color||n.severity;return(0,E.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===n.variant&&(0,S.Z)({color:o(t.palette[i].light,.6),backgroundColor:r(t.palette[i].light,.9)},"& .".concat(B.icon),{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"outlined"===n.variant&&(0,S.Z)({color:o(t.palette[i].light,.6),border:"1px solid ".concat(t.palette[i].light)},"& .".concat(B.icon),{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main})})),rt=(0,C.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),it=(0,C.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),at=(0,C.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),lt={success:(0,A.jsx)(Je,{fontSize:"inherit"}),warning:(0,A.jsx)(Ge,{fontSize:"inherit"}),error:(0,A.jsx)(Qe,{fontSize:"inherit"}),info:(0,A.jsx)(et,{fontSize:"inherit"})},ct=o.forwardRef((function(e,t){var n=(0,z.Z)({props:e,name:"MuiAlert"}),o=n.action,r=n.children,i=n.className,a=n.closeText,l=void 0===a?"Close":a,c=n.color,s=n.icon,u=n.iconMapping,d=void 0===u?lt:u,p=n.onClose,f=n.role,m=void 0===f?"alert":f,v=n.severity,h=void 0===v?"success":v,g=n.variant,b=void 0===g?"standard":g,y=(0,Z.Z)(n,nt),x=(0,E.Z)({},n,{color:c,severity:h,variant:b}),w=function(e){var t=e.variant,n=e.color,o=e.severity,r=e.classes,i={root:["root","".concat(t).concat(T(n||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,M.Z)(i,O,r)}(x);return(0,A.jsxs)(ot,(0,E.Z)({role:m,elevation:0,ownerState:x,className:(0,R.Z)(w.root,i),ref:t},y,{children:[!1!==s?(0,A.jsx)(rt,{ownerState:x,className:w.icon,children:s||d[h]||lt[h]}):null,(0,A.jsx)(it,{ownerState:x,className:w.message,children:r}),null!=o?(0,A.jsx)(at,{className:w.action,children:o}):null,null==o&&p?(0,A.jsx)(at,{ownerState:x,className:w.action,children:(0,A.jsx)(Ue,{size:"small","aria-label":l,title:l,color:"inherit",onClick:p,children:$e||($e=(0,A.jsx)(tt,{fontSize:"small"}))})}):null]}))})),st=function(e){var t=e.pageContext.artist,n=(0,o.useState)({success:!1}),r=n[0],a=n[1],l=v.xh.registerFromContentful(t),s=(0,c.ce)("type"),u=(0,c.ce)("slug"),d=null,p=null,x="";return"artwork"===s&&(d=l.artworkBySlug(u),p=(0,g.d)(d.gatsbyImage),x="I have a question about the work '"+d.title+"' by "+l.name+"..."),o.createElement(o.Fragment,null,o.createElement(m.Z,{title:"Contact Us",artist:l}),o.createElement(i.Z,null,o.createElement(h.Z,{title:"Contact Us",subTitle:o.createElement(b.g,{artwork:d,contact:!0}),bgImage:p},r.success?o.createElement(ct,{severity:"success"},"Thank you very much for reaching out to us. We will get back to you as soon as possible!"):o.createElement(f,{textareaTemplate:x,onSuccess:function(e,t){(new y).send(t).catch((function(t){w().setContext(JSON.stringify(e)),w().notify(t)})),a({success:!0})}}))))}}}]);
//# sourceMappingURL=component---src-templates-contact-js-10b62429af440144c0d6.js.map