_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,a=t.hasQuery,i=void 0!==a&&a;return n||r&&i}},"7W2i":function(t,e,n){var o=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=u,e.default=void 0;var o,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=o?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),l=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(r.type){case"title":case"base":e.has(r.type)?a=!1:e.add(r.type);break;case"meta":for(var l=0,s=p.length;l<s;l++){var c=p[l];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=r.props[c],f=o[c]||new Set;f.has(u)?a=!1:(f.add(u),o[c]=f)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(l.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:d,headManager:o,inAmpMode:(0,s.isInAmpMode)(n)},e)}h.rewind=function(){};var m=h;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var o;e.__esModule=!0,e.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});e.HeadManagerContext=r},Fxm3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!e&&r<e+o?(clearTimeout(n),n=setTimeout((function(){e=r,t()}),o)):(e=r,t())}};e.default=o},Ijbi:function(t,e,n){var o=n("WkPL");t.exports=function(t){if(Array.isArray(t))return o(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},RIqP:function(t,e,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return o(t)||r(t)||a(t)||i()}},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return M}));var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),l=r.a.createElement;function s(t){var e=t.children;t.home;return l("div",null,l(i.a,null,l("link",{rel:"icon",href:"/favicon.ico"}),l("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),l("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI("Next.js Sample Website"),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),l("meta",{name:"og:title",content:"Next.js Sample Website"}),l("meta",{name:"twitter:card",content:"summary_large_image"})),l("main",null,e))}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?p(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=n("YIkO"),b=n.n(g),w=n("dwco"),_=n.n(w),S=r.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}var x=function(t){return t.children},C=function(t){h(n,t);var e=k(n);function n(){var t;return c(this,n),(t=e.call(this)).handleClick=t.handleClick.bind(p(t)),t}return f(n,[{key:"componentDidMount",value:function(){_.a.polyfill()}},{key:"handleClick",value:function(t){t.preventDefault();var e=0,n=!0,o=this.props,r=o.type,a=o.element,i=o.offset,l=o.timeout;if(r&&a)switch(r){case"class":n=!!(e=document.getElementsByClassName(a)[0]);break;case"id":n=!!(e=document.getElementById(a))}n?this.scrollTo(e,i,l):console.log("Element not found: ".concat(a))}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=t?t.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+e,left:0,behavior:"smooth"})}),n):window.scroll({top:o+e,left:0,behavior:"smooth"})}},{key:"render",value:function(){return S(x,null,"object"===typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):S("span",{onClick:this.handleClick},this.props.children))}}]),n}(r.a.Component),E=n("obyI"),N=n.n(E),O=r.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}var T=function(t){h(n,t);var e=P(n);function n(t){var o;return c(this,n),(o=e.call(this,t)).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}],isCollapsed:!0},o.toggleNavbar=o.toggleNavbar.bind(p(o)),o}return f(n,[{key:"toggleNavbar",value:function(){this.setState({isCollapsed:!this.state.isCollapsed})}},{key:"render",value:function(){var t=this.state,e=t.tabs,n=t.isCollapsed;return O("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},O("a",{className:"navbar-brand",href:"#page-top"},O("span",{className:"d-block d-lg-none"},N.a.firstName," ",N.a.lastName),O("span",{className:"d-none d-lg-block"},O("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"/images/profile.jpg",alt:""}))),O("button",{className:"navbar-toggler navbar-toggler-right ".concat(n?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},O("span",{className:"navbar-toggler-icon"})),O("div",{className:"collapse navbar-collapse ".concat(n?"":"show"),id:"navbarSupportedContent"},O(b.a,{items:e.map((function(t){return t.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(t,e){var n=t.href,o=t.content;return O("li",{className:"nav-item",key:n},O(C,{type:"id",element:n},O("a",{className:"nav-link",href:"#".concat(n)},o)))})))))}}]),n}(o.Component),j=r.a.createElement;function M(t){t.allPostsData;return j(s,null,j(T,null),j("div",{className:"container-fluid p-0"},j("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},j("div",{className:"w-100"},j("h1",{className:"mb-0"},"Coming soon..."),j("p",{className:"lead mb-5"})))))}},SksO:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},TSYQ:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&t.push(i)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&t.push(l)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},Xuae:function(t,e,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),s=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}e.__esModule=!0,e.default=void 0;var u=n("q1tI"),f=function(t){i(n,t);var e=c(n);function n(t){var a;return r(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);e.default=f},YIkO:function(t,e,n){"use strict";var o=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("pVnL")),a=o(n("lSNA")),i=o(n("RIqP")),l=o(n("lwsE")),s=o(n("a1gu")),c=o(n("Nsbk")),u=o(n("PJYZ")),f=o(n("W8MJ")),p=o(n("7W2i")),d=o(n("17x9")),h=o(n("q1tI")),m=o(n("TSYQ")),v=o(n("Fxm3"));var y=function(t){function e(t){var n;return(0,l.default)(this,e),(n=(0,s.default)(this,(0,c.default)(e).call(this,t))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,p.default)(e,t),(0,f.default)(e,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(e,[{key:"_initSpyTarget",value:function(t){return t.map((function(t){return document.getElementById(t)}))}},{key:"_fillArray",value:function(t,e){for(var n=[],o=0,r=t.length;o<r;o++)n[o]=e;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var t=document,e=this.props.rootEl;return{scrollTop:e?t.querySelector(e).scrollTop:t.documentElement.scrollTop||t.body.parentNode.scrollTop||t.body.scrollTop,scrollHeight:e?t.querySelector(e).scrollHeight:t.documentElement.scrollHeight||t.body.parentNode.scrollHeight||t.body.scrollHeight}}},{key:"_getElemsViewState",value:function(t){for(var e=[],n=[],o=[],r=t||this.state.targetItems,a=!1,l=0,s=r.length;l<s;l++){var c=r[l],u=!a&&this._isInView(c);u?(a=!0,e.push(c)):n.push(c);var f=l===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(n.pop(),n.push.apply(n,(0,i.default)(e)),e=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:e,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(t){if(!t)return!1;var e,n=this.props,o=n.rootEl,r=n.offset;o&&(e=document.querySelector(o).getBoundingClientRect());var a=t.getBoundingClientRect(),i=o?e.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+i,c=o?a.top+l-e.top+r:a.top+l+r,u=c+t.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var t=this.props.rootEl,e=this._getScrollDimension(),n=e.scrollTop,o=e.scrollHeight;return n+(t?document.querySelector(t).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(t){if(!t.some((function(t){return t})))return t;var e=!1;return t.map((function(t){return t&&!e?(e=!0,!1):!e}))}},{key:"_spy",value:function(t){var e=this,n=this._getElemsViewState(t),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){e._update(o)}))}},{key:"_update",value:function(t){var e,n;(e=this.state.inViewState,n=t,e.length===n.length&&e.every((function(t,e){return t===n[e]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var t=this._initSpyTarget(this.props.items);this.setState({targetItems:t}),this._spy(t)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var t=this,e=this.props.componentTag,n=this.props,o=n.children,i=n.className,l=n.scrolledPastClassName,s=n.style,c=0,u=h.default.Children.map(o,(function(e,n){var o;if(!e)return null;var i=e.type,s=l&&t.state.isScrolledPast[n],u=(0,m.default)((o={},(0,a.default)(o,"".concat(e.props.className),e.props.className),(0,a.default)(o,"".concat(t.props.currentClassName),t.state.inViewState[n]),(0,a.default)(o,"".concat(t.props.scrolledPastClassName),s),o));return h.default.createElement(i,(0,r.default)({},e.props,{className:u,key:c++}),e.props.children)})),f=(0,m.default)((0,a.default)({},"".concat(i),i));return h.default.createElement(e,{className:f,style:s},u)}}]),e}(h.default.Component);e.default=y},ZhPi:function(t,e,n){var o=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},a1gu:function(t,e,n){var o=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},dwco:function(t,e,n){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n,o=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==e.body?(h.call(this,n,n.scrollLeft+a.left-o.left,n.scrollTop+a.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function s(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function u(e,n){var o=t.getComputedStyle(e,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(t){var e=c(t,"Y")&&u(t,"Y"),n=c(t,"X")&&u(t,"X");return e||n}function p(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function d(e){var n,o,r,i,l=(a()-e.startTime)/468;i=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*i)),o=e.startX+(e.x-e.startX)*n,r=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,r),o===e.x&&r===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(n,o,i){var s,c,u,f,p=a();n===e.body?(s=t,c=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,f=l),d({scrollable:s,method:f,startTime:p,startX:c,startY:u,x:o,y:i})}}}}()},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var o;e.__esModule=!0,e.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});e.AmpStateContext=r},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},obyI:function(t,e){t.exports={siteTitle:"Goran Kolevski",siteDescription:"desc...",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",firstName:"Goran",lastName:"Kolevski",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/gorank"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/gorankolevski/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/goran_kolevski"},{icon:"fa-facebook-f",name:"Facebook",url:"https://www.facebook.com/goran.kolevski/"}],email:"goran@bit.mk",address:"Bitola, Republic of Macedonia"}},pVnL:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);