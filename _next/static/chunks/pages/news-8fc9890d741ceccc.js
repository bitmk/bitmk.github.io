(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{2616:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(693)}])},9956:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var s=n(5893),a=n(7922),r=n(5515);function i(e){let{dateString:t}=e;if(null==t||""==t)return"";{let e=(0,a.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(e,"yyyy-MM-dd kk:mm")})}}function o(e){let{tag:t}=e;return(0,s.jsx)("span",{class:"text-primary",children:(0,s.jsx)("a",{href:"tag/"+t,children:(0,s.jsx)("b",{children:t})})})}function c(e){let{tags:t}=e;if(!t)return;let n=t.split(",");return(0,s.jsx)("span",{children:n.map(e=>(0,s.jsx)(o,{tag:e}))})}function l(e){let{author:t}=e;return(0,s.jsx)("span",{class:"text-primary",children:(0,s.jsx)("a",{href:t,children:(0,s.jsx)("i",{children:t})})})}function d(e){let{authors:t}=e;if(!t)return;let n=t.split(",");return(0,s.jsx)("span",{children:n.map(e=>(0,s.jsx)(l,{author:e}))})}function h(e){let{article:t,home:n}=e;return(0,s.jsx)("div",{className:"container-fluid p-0",children:(0,s.jsx)("section",{className:"p-3 p-lg-3 d-flex d-column",children:(0,s.jsx)("div",{class:"my-auto",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h4",{class:"mb-2",children:(0,s.jsx)("span",{class:"text-primary",children:t.title})}),(0,s.jsxs)("span",{class:"text-primary",children:[(0,s.jsx)(d,{authors:t.authors}),(0,s.jsx)(c,{tags:t.tags}),(0,s.jsx)(i,{dateString:t.posted})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})})})}},9611:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893),a=n(9956);function r(e){let{articles:t,home:n}=e;return(0,s.jsx)("div",{children:t.map(e=>(0,s.jsx)(a.Z,{article:e}))})}},5697:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=n(9008),r=n.n(a);let i="BIT.mk";function o(e){let{children:t,home:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"BIT.mk"}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(i),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:i}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,s.jsx)("main",{children:t})]})}},4617:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(5893),a=n(7294),r=n(9986),i=n(523),o=n.n(i),c=n(1581),l=n.n(c);let d=e=>e.children;class h extends a.Component{componentDidMount(){o().polyfill()}handleClick(e){e.preventDefault();let t=0,n=!0,{type:s,element:a,offset:r,timeout:i}=this.props;if(s&&a)switch(s){case"class":n=!!(t=document.getElementsByClassName(a)[0]);break;case"id":n=!!(t=document.getElementById(a))}n?this.scrollTo(t,r,i):console.log("Element not found: ".concat(a))}scrollTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout(()=>{window.scroll({top:s+t,left:0,behavior:"smooth"})},n):window.scroll({top:s+t,left:0,behavior:"smooth"})}render(){return(0,s.jsx)(d,{children:"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):(0,s.jsx)("span",{onClick:this.handleClick,children:this.props.children})})}constructor(){super(),this.handleClick=this.handleClick.bind(this)}}h.propTypes={type:l().string,element:l().string,offset:l().number,timeout:l().number,children:l().node.isRequired},n(8142);class p extends a.Component{toggleNavbar(){this.setState({isCollapsed:!this.state.isCollapsed})}render(){let{tabs:e,isCollapsed:t}=this.state;return(0,s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[(0,s.jsxs)("a",{className:"navbar-brand",href:"#page-top",children:[(0,s.jsx)("span",{id:"siteName",className:"d-block d-lg-none",children:"BIT.mk"}),(0,s.jsx)("span",{className:"d-none d-lg-block",children:(0,s.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"/images/profile.jpg",alt:""})})]}),(0,s.jsx)("button",{className:"navbar-toggler navbar-toggler-right ".concat(t?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar,children:(0,s.jsx)("span",{className:"navbar-toggler-icon"})}),(0,s.jsx)("div",{className:"collapse navbar-collapse ".concat(t?"":"show"),id:"navbarSupportedContent",children:(0,s.jsx)(r.Z,{items:e.map(e=>e.href),currentClassName:"active",offset:-300,className:"navbar-nav",children:e.map((e,t)=>{let{href:n,content:a}=e;return(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(h,{type:"id",element:n,children:(0,s.jsx)("a",{className:"nav-link",href:"#".concat(n),children:a})})},n)})})})]})}constructor(e){super(e),this.state=e.topics||{tabs:[]},this.toggleNavbar=this.toggleNavbar.bind(this)}}var u=p},8142:function(e){"use strict";e.exports={siteTitle:"BIT.mk",siteDescription:"desc...",manifestName:"BIT",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",socialLinks:[],email:"goran@bit.mk",address:"Bitola, Republic of Macedonia"}},693:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return h}});var s=n(5893);n(7294);var a=n(5697),r=n(4617);n(8142),n(9611);var i=n(9956);function o(e){let{topics:t,home:n}=e;return(0,s.jsxs)("div",{className:"container-fluid-paddings",children:[(0,s.jsx)("br",{}),t.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"p-3 p-lg-3",children:(0,s.jsx)("h3",{className:"topic-title",children:e.topic})}),e.articles.map(e=>(0,s.jsx)(i.Z,{article:e}))]}))]})}var c=JSON.parse('[{"topic":"Сакам да кажам","articles":[{"title":"ОСТАНА НЕДОВРШЕН ПАТОТ ОКОЛУ ВИКЕНД НАСЕЛБАТА НА ПОПОВА ШАПКА, А ДЕЛОВИ ОДНЕСОА ДОЖДОВИТЕ","content":"Кога во октомври минатата година започна реконструкцијата на патната инфраструктура во викенд населбата на Попова Шапка, градоначалникот на Општина Тетово, Билал Касами, најави дека набрзо ќе започне и изградба на пат околу населбата, за да се олесни движењето на моторни возила посебно во зимскиот период. Помина речиси една година, а овој обиколен пат не е изграден. Извршено е само пробивање на трасата, но не и асфалтирање. Во меѓувреме, од дождовите на неколку места се појавија свлечишта кои однесоа делови од патот.","authors":"З. Андонов","tags":"Насловна, обиколница, Попова Шапка, Тетово"},{"title":"СЕ ГРАДИ ЗАШТИТЕН ЅИД НА ОБИКОЛНИЦАТА НАД БИТОЛА","content":"Почна изградбата на заштитен ѕид на обиколницата над Битола која е дел од регионалниот пат Прилеп-Ресен , а минува низ дивата ромска населба.","posted":"2024-09-25 02:00","authors":"Ж. Здравковска","tags":"Дописна мрежа, Наташа Петровска, обиколница"},{"title":"СОВЕТНИЦИТЕ НА ВЛАСТА ВО КУМАНОВО ГЛАСАА ПРОТИВ РАСПРАВА ЗА ПОТРОШЕНИТЕ НАД 2,2 МИЛИОНИ ЕВРА ЗА РЕКОНСТРУКЦИЈА НА СПОРТСКАТА САЛА, МАЛИОТ ПЛОШТАД И СОКОЛАНСКИ ПАРК","posted":"2024-09-25 01:14","content":"Советниците на ЗНАМ и ВМРО-ДПМНЕ, заедно со гласовите на ГРОМ, Алијанса на Албанците, Беса и Алтернатива, денеска не ги прифатија предлозите на советниците од опозицијата Благојче Јаќимовиќ и Миле Андоновски од коалицијата на СДСМ, да се расправа за потрошените средства за семафорот во спортската сала, за реконструкцијата на малиот плоштад и за соколанскиот парк во Куманово. Ова деновиве е топ тема во градот бидејќи се потрошени многу пари, а објектите не се изработени квалитетно.","authors":"С. Николиќ","tags":"Дописна мрежа, гласање, Куманово, расправа, реконструкција, совет"},{"title":"КРИВИЧНА ПРИЈАВА ЗА ИНВЕСТИТОРИТЕ КОИ КУЌАТА СО ИСТОРИСКО ЗНАЧЕЊЕ ЗА АНТИФАШИСТИЧКАТА БОРБА ВО ОХРИД ЈА НАДГРАДИЛЕ И ДОГРАДИЛЕ ВО МОДЕРЕН ОБЈЕКТ","content":"Основното јавно обвинителство Охрид по спроведена истражна постапка поднесе обвинение против две лица за кривично дело „Бесправно градење“ согласно член 244-а став 1 од Кривичниот законик. Осомничените, на возраст од 49 и 48 години, како соизвршители на 27.07.2023 година започнале да градат објект на нивно земјиште, без одобрение за градба издадено од надлежен орган.","authors":"С. Вренцовска","posted":"2024-09-25 11:28","tags":"Дописна мрежа, антифашистичка, борва, значење, историско, кривична пријава, куќа, Охрид"}]},{"topic":"МКД","articles":[{"title":"Видевски, обвинетиот во случајот со убиството на малолетната Вања, во сериозна здравствена состојба е на Клиниката за нефрологија","content":"Во сериозна здравствена состојба викендов во Клиниката за нефрологоја во Скопје е префрлен Боре Видевски, еден од обвинетите за учество во грабнувањето и убиството на 14-годишната Вања Ѓорчевска од Скопје и 74-годишниот Панче Жежовски од Велес. Од Кривичниот суд ја потврдија оваа информација и додадоа дека ги чекаат официјалните информации од лекарите. Наредното судење во овој случај е закажано за 7 октомври."},{"title":"Костов: Се намалува возраста на луѓето со срцеви заболувања","content":"Се намалува возраста на луѓето со срцеви заболувања, неопходно е да се дејствува превентивно и врз работи на кои може да се влијае, истакна денеска Јорго Костов од Македонското здружение по кардиологија на одбележувањето на Денот на срцето, одговарајќи на новинарски прашања."},{"title":"Владата и СОНК бараат долгорочно решение за вработените во образованието, науката и културата","posted":"2024-09-25 01:14","content":"Премиерот Христијан Мицкоски, министрите за финансии, за образование и наука и за економија и труд Гордана Димитриеска Кочоска, Весна Јаневска и Бесар Дурмиши денеска остварија средба со раководството на Самостојниот синдикат за образование, наука и култура – СОНК."},{"title":"Жестоко ќе одговориме, рече Тошковски по пораките на ДУИ","content":"За секој предизвик насочен кон дестабилизација жестоко ќе одговориме, изјави денеска министерот за внатрешни работи Панче Тошковски откако пред два дена опозциската ДУИ по партиски состанок во Мала Речица го испрати прашањето „Подготвени ли сте?“, а одговорот на членството бил „Команданте, ние сме подготвени“."}]},{"topic":"topic","articles":[{"title":"OpenAI’s chief research officer has left following CTO Mira Murati’s exit","content":"OpenAI’s chief research officer, Bob McGrew, and a research VP, Barret Zoph, left the company on Wednesday, hours after OpenAI CTO Mira Murati announced she would be departing.","authors":"Kyle Wiggers","tags":"AI, OpenAI"},{"title":"Meta Connect 2024: Orion glasses, Quest 3S headset, Meta AI upgrades, Ray-Ban Meta real-time video, and more","content":"Meta Connect 2024 is a developer-centric event featuring a keynote from CEO Mark Zuckerberg. He showcased new hardware and software to support two of Meta’s big ambitions: AI and the metaverse. This included everything from new Quest headsets, updates to Meta’s Llama AI model, and even a new fully AR glasses prototype.","posted":"2024-09-25 02:00","authors":"Cody Corrall, Morgan Little","tags":"AI, Hardware, Llama, Meta, meta ai, meta connect, meta connect 2024, meta quest 3s, Orion, Social"},{"title":"Zuckerberg chats with AI clone as human creator looks on in year’s weirdest demo","posted":"2024-09-25 01:14","content":"AI has already given us some weird demos. And friends, it’s only going to get weirder from here. As the tech world runs screaming head first into the uncanny valley, lines will blur and everything will continue getting stranger.","authors":"Brian Heater","tags":"AI, AI chatbots, Apps, Mark Zuckerberg, Meta, meta connect, meta connect 2024"},{"title":"Meta teases Orion, brain-powered true AR glasses in a tiny package","content":"At Wednesday’s Meta Connect event, CEO Mark Zuckerberg announced Orion, which he described as “the most advanced glasses the world has ever seen.”","authors":"Brian Heater","posted":"2024-09-25 11:28","tags":"Hardware, Meta, meta connect, meta connect 2024, Orion"}]}]'),l=JSON.parse('{"tabs":[{"content":"Tech","href":"tech"},{"content":"Sports","href":"sports"},{"content":"Bitcoin","href":"bitcoin"},{"content":"Crypto","href":"crypto"},{"content":"Finance","href":"finance"},{"content":"Кирилица","href":"kirilica"},{"content":"Македонија","href":"makedonija"},{"content":"Битола","href":"bitola"}],"isCollapsed":true}'),d=!0;function h(e){let{allPostsData:t}=e;return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r.Z,{topics:l}),(0,s.jsx)(o,{topics:c})]})}}},function(e){e.O(0,[139,268,888,774,179],function(){return e(e.s=2616)}),_N_E=e.O()}]);