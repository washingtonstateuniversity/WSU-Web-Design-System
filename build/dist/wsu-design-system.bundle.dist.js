!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t){!function(){"use strict";if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),t=!!e&&16<=parseInt(e[1],10);if("objectFit"in document.documentElement.style==0||t){var n=function(e,t,n){var s,i,o,a,r;if((n=n.split(" ")).length<2&&(n[1]=n[0]),"x"===e)s=n[0],i=n[1],o="left",a="right",r=t.clientWidth;else{if("y"!==e)return;s=n[1],i=n[0],o="top",a="bottom",r=t.clientHeight}if(s!==o&&i!==o){if(s!==a&&i!==a)return"center"===s||"50%"===s?(t.style[o]="50%",void(t.style["margin-"+o]=r/-2+"px")):void(0<=s.indexOf("%")?(s=parseInt(s))<50?(t.style[o]=s+"%",t.style["margin-"+o]=r*(s/-100)+"px"):(s=100-s,t.style[a]=s+"%",t.style["margin-"+a]=r*(s/-100)+"px"):t.style[o]=s);t.style[a]="0"}else t.style[o]="0"},s=function(e){var t=e.dataset?e.dataset.objectFit:e.getAttribute("data-object-fit"),s=e.dataset?e.dataset.objectPosition:e.getAttribute("data-object-position");t=t||"cover",s=s||"50% 50%";var i=e.parentNode;return function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("position"),s=t.getPropertyValue("overflow"),i=t.getPropertyValue("display");n&&"static"!==n||(e.style.position="relative"),"hidden"!==s&&(e.style.overflow="hidden"),i&&"inline"!==i||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className=e.className+" object-fit-polyfill")}(i),function(e){var t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var s in n)t.getPropertyValue(s)!==n[s]&&(e.style[s]=n[s])}(e),e.style.position="absolute",e.style.width="auto",e.style.height="auto","scale-down"===t&&(t=e.clientWidth<i.clientWidth&&e.clientHeight<i.clientHeight?"none":"contain"),"none"===t?(n("x",e,s),void n("y",e,s)):"fill"===t?(e.style.width="100%",e.style.height="100%",n("x",e,s),void n("y",e,s)):(e.style.height="100%",void("cover"===t&&e.clientWidth>i.clientWidth||"contain"===t&&e.clientWidth<i.clientWidth?(e.style.top="0",e.style.marginTop="0",n("x",e,s)):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",n("y",e,s))))},i=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;e=e}for(var n=0;n<e.length;n++)if(e[n].nodeName){var i=e[n].nodeName.toLowerCase();if("img"===i){if(t)continue;e[n].complete?s(e[n]):e[n].addEventListener("load",(function(){s(this)}))}else"video"===i?0<e[n].readyState?s(e[n]):e[n].addEventListener("loadedmetadata",(function(){s(this)})):s(e[n])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i(),window.addEventListener("resize",i),window.objectFitPolyfill=i}else window.objectFitPolyfill=function(){return!1}}}()},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2);var s=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}};"undefined"==typeof wsu_wds&&(window.wsu_wds={},wsu_wds=window.wsu_wds),wsu_wds.emitter=s();var i=wsu_wds,o=document.querySelector(".wsu-g-header__more-icon-link");void 0!==o&&null!=o&&o.addEventListener("click",(function(){console.log("Links toggle -- Coming soon!")}));var a=document.querySelector(".wsu-g-header__search-icon-link");void 0!==a&&null!=a&&a.addEventListener("click",(function(){console.log("Search toggle -- Coming soon!")}));var r=document.querySelector(".wsu-g-header__menu-icon-link");void 0!==r&&null!=r&&r.addEventListener("click",(function(e){i.vertical_nav.toggle_panel(e)})),document.addEventListener("scroll",(function(){setTimeout((function(){document.body.scrollTop>30?document.body.classList.add("wsu-g-header--is-hidden"):document.body.classList.remove("wsu-g-header--is-hidden")}),100)}));n(3),n(4),n(5),n(6),n(7),n(8);var l=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}};"undefined"==typeof wsu_wds&&(window.wsu_wds={},wsu_wds=window.wsu_wds),wsu_wds.emitter=l();var u,c,h,d,m=wsu_wds;class p{constructor(e){this.params=e,this.nav_items=null,this.show_logs=!!e.show_logs,this.nav_items_selectors=e.nav_item_selectors,void 0===this.nav_items_selectors&&console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."),this.use_animations=e.use_animations,void 0===this.use_animations&&(this.use_animations=!1)}init(){this.set_init_state(),window.addEventListener("click",this.check_for_close.bind(this,event)),this.use_animations&&this.init_mutation_observers()}set_init_state(){const e=this.query_all_nav_items,t=this;if(e.forEach(e=>{e.setAttribute("aria-expanded","false"),e.addEventListener("click",(function(e){e.preventDefault(),t.toggle_aria_expanded_state(e.currentTarget)}))}),t.use_animations){this.query_all_nav_items.forEach(e=>{e.nextElementSibling.classList.add("animated"),Array.from(e.nextElementSibling.children).forEach(e=>{e.classList.add("animated")})})}}toggle_aria_expanded_state(e){"false"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}set_aria_expanded_state(e,t){e.setAttribute("aria-expanded",t)}init_mutation_observers(){this.create_mutation(this.params.nav_item_selectors,this.check_element_view_state.bind(this))}create_mutation(e,t){const n=document.querySelectorAll(e),s={attributes:!0,childList:!1,subtree:!1},i=this;n.forEach(e=>{new MutationObserver((function(e,n){for(let n of e)"attributes"===n.type&&(i.show_logs&&console.log("The "+n.attributeName+" attribute was modified."),t(n))})).observe(e,s)})}check_element_view_state(e){if("aria-expanded"===e.attributeName){const t=e.target.nextElementSibling,n=Array.from(e.target.nextElementSibling.children);"true"==e.target.getAttribute("aria-expanded")?(this.animate_item(t),this.animate_items(n)):(this.animate_item(t,"fadeOutDown","fadeInUp","out"),this.animate_items(n,"fadeOutDown","fadeInUp"))}}animate_item(e,t="fadeInUp",n="fadeOutDown",s="in",i=350){e.classList.remove(n),e.classList.add(t)}animate_items(e,t="fadeInUp",n="fadeOutDown"){const s=e,i=s.length;for(var o=0;o<i;o++)!function(e){setTimeout((function(){s[e].classList.remove(n),s[e].classList.add(t)}),30+e*(.25*e)*30)}(o)}check_for_close(){if(!document.querySelector(".wsu-s-nav-horizontal__wrapper").contains(event.target)){this.query_all_open_nav_items.forEach(e=>{this.set_aria_expanded_state(e,!1)})}}get query_all_open_nav_items(){return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]')}get query_all_nav_items(){return document.querySelectorAll(".wsu-s-nav-horizontal__nav-link[aria-expanded]")}}(u=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new c(e,this),this.popupMenu.init())},u.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},u.prototype.handleKeydown=function(e){var t,n,s=e.currentTarget,i=e.key,o=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}s.dispatchEvent(t)}o=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),o=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),o=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),o=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),o=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),o=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),o=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),o=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(n=i).length&&n.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,i),o=!0)}o&&(e.stopPropagation(),e.preventDefault())},u.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},u.prototype.handleFocus=function(e){this.menu.hasFocus=!0},u.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},u.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},u.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(c=function(e,t){var n="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(n+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(n+"has no element children.");for(var s=e.firstElementChild;s;){var i=s.firstElementChild;if(i&&"A"===i)throw new Error(n+"has descendant elements that are not A elements.");s=s.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,n,s,i;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((n=new u(t,this)).init(),this.menuitems.push(n),s=t.textContent.trim(),this.firstChars.push(s.substring(0,1).toLowerCase())),e=e.nextElementSibling;(i=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[i-1])},c.prototype.handleMouseover=function(e){this.hasHover=!0},c.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},c.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var n=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);n&&n.menu.setFocusToNextItem(n,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},c.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},c.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},c.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},c.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},c.prototype.setFocusByFirstCharacter=function(e,t){var n,s;t=t.toLowerCase();(n=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(n=0),-1===(s=this.getIndexFirstChars(n,t))&&(s=this.getIndexFirstChars(0,t)),s>-1&&this.menuitems[s].domNode.focus()},c.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1},c.prototype.open=function(){this.controller.setExpanded(!0)},c.prototype.close=function(e){for(var t=this.controller.hasHover,n=this.hasFocus,s=0;s<this.menuitems.length;s++){var i=this.menuitems[s];i.popupMenu&&(n|=i.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(n||this.hasHover||t)||this.controller.setExpanded(!1)},(h=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new c(e,this),this.popupMenu.init())},h.prototype.handleKeydown=function(e){e.currentTarget;var t,n=e.key,s=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),s=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),s=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),s=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),s=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),s=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),s=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=n).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),s=!0)}s&&(e.stopPropagation(),e.preventDefault())},h.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},h.prototype.handleFocus=function(e){this.menu.hasFocus=!0},h.prototype.handleBlur=function(e){this.menu.hasFocus=!1},(d=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var n=e.firstElementChild;n;){var s=n.firstElementChild;if(n&&s&&"A"!==s.tagName)throw new Error(t+"has child elements are not A elements.");n=n.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,n,s=this.domNode.firstElementChild;s;){var i=s.firstElementChild;s&&i&&"A"===i.tagName&&((e=new h(i,this)).init(),this.menubarItems.push(e),t=i.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),s=s.nextElementSibling}(n=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[n-1]),this.firstItem.domNode.tabIndex=0},d.prototype.setFocusToItem=function(e){for(var t=!1,n=0;n<this.menubarItems.length;n++){var s=this.menubarItems[n];0==s.domNode.tabIndex&&(t="true"===s.domNode.getAttribute("aria-expanded")),s.domNode.tabIndex=-1,s.popupMenu&&s.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},d.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},d.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},d.prototype.setFocusToPreviousItem=function(e){var t,n;e===this.firstItem?n=this.lastItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t-1]),this.setFocusToItem(n)},d.prototype.setFocusToNextItem=function(e){var t,n;e===this.lastItem?n=this.firstItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t+1]),this.setFocusToItem(n)},d.prototype.setFocusByFirstCharacter=function(e,t){var n,s;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(n=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(n=0),-1===(s=this.getIndexFirstChars(n,t))&&(s=this.getIndexFirstChars(0,t)),s>-1&&this.setFocusToItem(this.menubarItems[s])},d.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1};class _{constructor(e){this.breakpoints=[],this.main_nav_width=null,this.params=e,this.screenWidth=null,this.window=window}init(){this.update_nav(),window.addEventListener("resize",this.update_nav.bind(this))}update_nav(){document.fonts.ready.then(()=>{null==this.get_priority_nav&&this.get_frame_width<=this.get_main_nav_width&&this.create_priority_nav(),null!=this.get_priority_nav&&this.resize_nav(),this.initiateKeyboardNavigationSupport(),this.initiateAriaExpanded()})}create_priority_nav(){const e=document.createElement("li"),t=document.createElement("a"),n=document.createElement("ul");e.setAttribute("class",this.params.priority_nav_list_item_class_name),e.setAttribute("role","none"),t.innerHTML=this.params.more_inner_html,t.setAttribute("href","#"),t.setAttribute("class",this.params.priority_nav_list_item_link_class_name),t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-haspopup","true"),n.setAttribute("class",this.params.priority_nav_list_item_list_class_name),n.setAttribute("role","menu"),n.setAttribute("aria-abel","Replace Me w/ Link Name Submenu"),e.appendChild(t),e.appendChild(n),document.querySelector(this.params.main_nav_selector).appendChild(e)}resize_nav(){for(this.calculateWidths();this.screenWidth<=this.main_nav_width&&this.get_main_nav.children.length>0;){const e=this.get_main_nav.children[this.get_main_nav.children.length-2];this.moveToPriorityNav(e),this.calculateWidths()}for(;this.screenWidth>=this.breakpoints[this.breakpoints.length-1]&&this.get_priority_nav_submenu.children.length>0;)this.moveToMainNav(this.get_priority_nav_submenu.children[0]);0==this.breakpoints.length&&this.destroyPriorityNav()}calculateWidths(){this.main_nav_width=this.get_main_nav_width,this.screenWidth=this.get_frame_width}moveToPriorityNav(e){this.cleanItemBeforeMove(e),this.get_priority_nav_submenu.insertAdjacentElement("afterbegin",e),this.breakpoints.push(this.main_nav_width)}moveToMainNav(e){this.cleanItemBeforeMove(e),this.get_main_nav.insertBefore(e,this.get_main_nav.lastElementChild),this.breakpoints.pop()}cleanItemBeforeMove(e){const t=e.classList;["animated","fadeOutDown","fadeInUp"].forEach(e=>{Array.from(t).includes(e)&&t.remove(e)})}destroyPriorityNav(){this.get_priority_nav.remove()}initiateAriaExpanded(){new p({nav_item_selectors:"."+this.params.priority_nav_list_item_link_class_name,use_animations:!0,show_logs:!0}).init()}initiateKeyboardNavigationSupport(){new d(document.querySelector(this.params.main_nav_selector)).init()}get get_frame_width(){return document.querySelector(".wsu-s-nav-horizontal__nav-container").offsetWidth}get get_main_nav_width(){return document.querySelector(this.params.main_nav_selector).offsetWidth}get get_main_nav(){return document.querySelector(this.params.main_nav_selector)}get get_priority_nav(){return document.querySelector("."+this.params.priority_nav_list_item_class_name)}get get_priority_nav_submenu(){return document.querySelector("."+this.params.priority_nav_list_item_list_class_name)}get getBreakpoints(){return this.breakpoints}}var v=document.querySelector(".wsu-s-nav-horizontal__wrapper");void 0!==v&&null!=v&&(v.classList.remove("wsu-u-no-js"),m.horizontal_nav=new _({main_nav_selector:".wsu-s-nav-horizontal__nav-list",priority_nav_list_item_class_name:"wsu-s-nav-horizontal__nav-item--more",priority_nav_list_item_link_class_name:"wsu-s-nav-horizontal__nav-link",priority_nav_list_item_list_class_name:"wsu-s-nav-horizontal__nav-list--has-more-items",more_inner_html:'<div class="wsu-icon wsu-i-more"></div>'}),m.horizontal_nav.init());n(9);class f{constructor(e){this.params=e}init(){this.params.elements.forEach(e=>{this.initiateKeyboardNavigationSupport(e)})}initiateKeyboardNavigationSupport(e){new d(e).init()}}class w{constructor(e){this.params=e,this.nav_item_selector="",this.nav_panel_control_selector="",this.nav_panel_selector="",this.nav_list_container_selector="",this.tree_mode=!!e.tree_mode,this.show_logs=!!e.show_logs,this.nav_item_selector=e.nav_item_selector,void 0===this.nav_item_selector&&console.error("Undefined nav_item_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control_selector=e.nav_panel_control_selector,void 0===this.nav_panel_control_selector&&console.error("Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control=document.querySelector(this.nav_panel_control_selector),this.nav_panel_selector=e.nav_panel_selector,void 0===this.nav_panel_selector&&console.error("Undefined nav_panel_selector. Please pass the selector you would like to be expandable."),this.nav_panel=document.querySelector(this.nav_panel_selector),this.nav_list_container_selector=e.nav_list_container_selector,void 0===this.nav_list_container_selector&&console.error("Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.")}init(){const e=document.querySelectorAll(this.nav_list_container_selector);new f({elements:e}).init(),document.querySelector(this.nav_panel_control_selector).setAttribute("aria-expanded","false"),document.querySelectorAll(this.nav_item_selector).forEach(e=>{e.setAttribute("aria-expanded","false")}),this.nav_panel_control.addEventListener("click",this.toggle_panel.bind(this)),document.querySelectorAll(".wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link").forEach(e=>{e.addEventListener("click",this.toggle.bind(this))}),m.emitter.on("wsu-vertical-nav--open",this.panel_open.bind(this)),m.emitter.on("wsu-vertical-nav--after-open",this.panel_after_open.bind(this)),m.emitter.on("wsu-vertical-nav--close",this.panel_close.bind(this)),m.emitter.on("wsu-vertical-nav--after-close",this.panel_after_close.bind(this)),this.nav_panel.classList.contains("wsu-s-nav-vertical__wrapper--open")&&this.open_panel()}open_current_target(e){e.preventDefault(),e.currentTarget.setAttribute("aria-expanded","true")}open_target(e){e.preventDefault(),e.target.setAttribute("aria-expanded","true")}open_panel(){this.nav_panel_control.setAttribute("aria-expanded","true"),this.nav_panel.classList.add("wsu-s-nav-vertical__wrapper--open"),m.emitter.emit("wsu-vertical-nav--open"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--open");setTimeout(()=>{m.emitter.emit("wsu-vertical-nav--after-open"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--after-open")},300),document.body.classList.add("wsu-s-nav-vertical__nav--is-open")}close(e){e.preventDefault(),e.target.setAttribute("aria-expanded","false")}close_panel(){this.nav_panel_control.setAttribute("aria-expanded","false"),this.nav_panel.classList.remove("wsu-s-nav-vertical__wrapper--open"),m.emitter.emit("wsu-vertical-nav--close"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--close");setTimeout(()=>{m.emitter.emit("wsu-vertical-nav--after-close"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--after-close")},600),document.body.classList.remove("wsu-s-nav-vertical__nav--is-open")}toggle(e){"false"==e.currentTarget.getAttribute("aria-expanded")?this.open_current_target(e):"false"==e.target.getAttribute("aria-expanded")?this.open_target(e):this.close(e)}toggle_panel(e){e.preventDefault(),"true"==this.nav_panel_control.getAttribute("aria-expanded")?this.close_panel():this.open_panel()}panel_open(){const e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.classList.remove("fadeOutUp"),e.classList.add("animated","fadeInDown","faster");const t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),n=t.length;for(var s=0;s<n;s++)!function(e){setTimeout((function(){t[e].classList.remove("fadeOutLeft"),t[e].classList.add("animated","fadeInLeft")}),30+e*(.25*e)*30)}(s);const i=this;window.addEventListener("click",(function(e){"wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open"==e.target.className&&i.close_panel()}));const o=document.querySelector(".wsu-g-header__wrapper");void 0!==o&&null!=o&&document.body.classList.remove("wsu-g-header--is-hidden"),0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(m.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}panel_after_open(){0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(m.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}panel_close(){const e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.classList.remove("fadeInDown"),e.classList.add("fadeOutUp");const t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),n=t.length;for(var s=0;s<n;s++)!function(e){setTimeout((function(){t[e].classList.remove("fadeInLeft"),t[e].classList.add("fadeOutLeft")}),50+e*(.2*e)*50)}(s)}panel_after_close(){0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(m.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}}var y=document.querySelector(".wsu-s-nav-vertical__wrapper");void 0!==y&&null!=y&&(y.classList.remove("wsu-u-no-js"),m.vertical_nav=new w({nav_item_selector:".wsu-s-nav-vertical__nav-link",nav_panel_control_selector:".wsu-s-nav-vertical__menu-icon-link",nav_panel_selector:".wsu-s-nav-vertical__wrapper",nav_list_container_selector:".wsu-s-nav-vertical__nav-list",show_logs:!0}),m.vertical_nav.init(),document.querySelector(".wsu-s-nav-vertical__nav-container-close-link").addEventListener("click",(function(e){e.preventDefault(),m.vertical_nav.close_panel()})));n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25)}]);
//# sourceMappingURL=wsu-design-system.bundle.dist.js.map