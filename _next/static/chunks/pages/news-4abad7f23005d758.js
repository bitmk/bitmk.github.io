(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{2616:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(3019)}])},8962:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var s=n(5893),a=n(7922),i=n(5515);function r(e){let{dateString:t}=e;if(null==t||""==t)return"";{let e=(0,a.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,i.Z)(e,"yyyy-MM-dd kk:mm")})}}function l(e){let{tag:t}=e;return(0,s.jsx)("span",{class:"text-primary",children:(0,s.jsx)("a",{href:"tag/"+t,children:(0,s.jsx)("b",{children:t})})})}function o(e){let{tags:t}=e,n=t.split(",");return(0,s.jsx)("span",{children:n.map(e=>(0,s.jsx)(l,{tag:e}))})}function c(e){let{author:t}=e;return(0,s.jsx)("span",{class:"text-primary",children:(0,s.jsx)("a",{href:t,children:(0,s.jsx)("i",{children:t})})})}function d(e){let{authors:t}=e,n=t.split(",");return(0,s.jsx)("span",{children:n.map(e=>(0,s.jsx)(c,{author:e}))})}function m(e){let{article:t,home:n}=e;return(0,s.jsx)("div",{className:"container-fluid p-0",children:(0,s.jsx)("section",{className:"p-3 p-lg-5 d-flex d-column",children:(0,s.jsx)("div",{class:"my-auto",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h4",{class:"mb-2",children:(0,s.jsx)("span",{class:"text-primary",children:t.title})}),(0,s.jsxs)("span",{class:"text-primary",children:[(0,s.jsx)(d,{authors:t.authors}),(0,s.jsx)(o,{tags:t.tags}),(0,s.jsx)(r,{dateString:t.posted})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})})})}function h(e){let{articles:t,home:n}=e;return(0,s.jsx)("div",{children:t.map(e=>(0,s.jsx)(m,{article:e}))})}},5697:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),a=n(9008),i=n.n(a);let r="BIT.mk";function l(e){let{children:t,home:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"BIT.mk"}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(r),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:r}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,s.jsx)("main",{children:t})]})}},4617:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var s=n(5893),a=n(7294),i=n(9986),r=n(523),l=n.n(r),o=n(1581),c=n.n(o);let d=e=>e.children;class m extends a.Component{componentDidMount(){l().polyfill()}handleClick(e){e.preventDefault();let t=0,n=!0,{type:s,element:a,offset:i,timeout:r}=this.props;if(s&&a)switch(s){case"class":n=!!(t=document.getElementsByClassName(a)[0]);break;case"id":n=!!(t=document.getElementById(a))}n?this.scrollTo(t,i,r):console.log("Element not found: ".concat(a))}scrollTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout(()=>{window.scroll({top:s+t,left:0,behavior:"smooth"})},n):window.scroll({top:s+t,left:0,behavior:"smooth"})}render(){return(0,s.jsx)(d,{children:"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):(0,s.jsx)("span",{onClick:this.handleClick,children:this.props.children})})}constructor(){super(),this.handleClick=this.handleClick.bind(this)}}m.propTypes={type:c().string,element:c().string,offset:c().number,timeout:c().number,children:c().node.isRequired};var h=n(8142),u=n.n(h);class p extends a.Component{toggleNavbar(){this.setState({isCollapsed:!this.state.isCollapsed})}render(){let{tabs:e,isCollapsed:t}=this.state;return(0,s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[(0,s.jsxs)("a",{className:"navbar-brand",href:"#page-top",children:[(0,s.jsxs)("span",{className:"d-block d-lg-none",children:[u().firstName," ",u().lastName]}),(0,s.jsx)("span",{className:"d-none d-lg-block",children:(0,s.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"/images/profile.jpg",alt:""})})]}),(0,s.jsx)("button",{className:"navbar-toggler navbar-toggler-right ".concat(t?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar,children:(0,s.jsx)("span",{className:"navbar-toggler-icon"})}),(0,s.jsx)("div",{className:"collapse navbar-collapse ".concat(t?"":"show"),id:"navbarSupportedContent",children:(0,s.jsx)(i.Z,{items:e.map(e=>e.href),currentClassName:"active",offset:-300,className:"navbar-nav",children:e.map((e,t)=>{let{href:n,content:a}=e;return(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(m,{type:"id",element:n,children:(0,s.jsx)("a",{className:"nav-link",href:"#".concat(n),children:a})})},n)})})})]})}constructor(e){super(e),this.state={tabs:[],isCollapsed:!0},this.toggleNavbar=this.toggleNavbar.bind(this)}}var g=p},8142:function(e){"use strict";e.exports={siteTitle:"BIT.mk",siteDescription:"desc...",manifestName:"BIT",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",socialLinks:[],email:"goran@bit.mk",address:"Bitola, Republic of Macedonia"}},3019:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return o}});var s=n(5893);n(7294);var a=n(5697),i=n(4617);n(8142);var r=n(8962),l=!0;function o(e){let{allPostsData:t}=e;return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(r.Z,{articles:t})]})}}},function(e){e.O(0,[139,268,888,774,179],function(){return e(e.s=2616)}),_N_E=e.O()}]);