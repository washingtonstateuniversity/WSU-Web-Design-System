!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".wsu-g-header__more-icon-link");void 0!==e&&null!=e&&e.addEventListener("click",(function(){console.log("Links toggle -- Coming soon!")}));var t=document.querySelector(".wsu-g-header__search-icon-link");void 0!==t&&null!=t&&t.addEventListener("click",(function(){console.log("Search toggle -- Coming soon!")}));var n=document.querySelector(".wsu-g-header__menu-icon-link");void 0!==n&&null!=n&&n.addEventListener("click",(function(e){window.vertical_nav.togglePanel(e)})),document.addEventListener("scroll",(function(){setTimeout((function(){document.body.scrollTop>30?document.body.classList.add("wsu-g-header--is-hidden"):document.body.classList.remove("wsu-g-header--is-hidden")}),100)}))}))},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t){!function(){"use strict";if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),t=!!e&&16<=parseInt(e[1],10);if("objectFit"in document.documentElement.style==0||t){var n=function(e,t,n){var i,o,s,a,r;if((n=n.split(" ")).length<2&&(n[1]=n[0]),"x"===e)i=n[0],o=n[1],s="left",a="right",r=t.clientWidth;else{if("y"!==e)return;i=n[1],o=n[0],s="top",a="bottom",r=t.clientHeight}if(i!==s&&o!==s){if(i!==a&&o!==a)return"center"===i||"50%"===i?(t.style[s]="50%",void(t.style["margin-"+s]=r/-2+"px")):void(0<=i.indexOf("%")?(i=parseInt(i))<50?(t.style[s]=i+"%",t.style["margin-"+s]=r*(i/-100)+"px"):(i=100-i,t.style[a]=i+"%",t.style["margin-"+a]=r*(i/-100)+"px"):t.style[s]=i);t.style[a]="0"}else t.style[s]="0"},i=function(e){var t=e.dataset?e.dataset.objectFit:e.getAttribute("data-object-fit"),i=e.dataset?e.dataset.objectPosition:e.getAttribute("data-object-position");t=t||"cover",i=i||"50% 50%";var o=e.parentNode;return function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("position"),i=t.getPropertyValue("overflow"),o=t.getPropertyValue("display");n&&"static"!==n||(e.style.position="relative"),"hidden"!==i&&(e.style.overflow="hidden"),o&&"inline"!==o||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className=e.className+" object-fit-polyfill")}(o),function(e){var t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var i in n)t.getPropertyValue(i)!==n[i]&&(e.style[i]=n[i])}(e),e.style.position="absolute",e.style.width="auto",e.style.height="auto","scale-down"===t&&(t=e.clientWidth<o.clientWidth&&e.clientHeight<o.clientHeight?"none":"contain"),"none"===t?(n("x",e,i),void n("y",e,i)):"fill"===t?(e.style.width="100%",e.style.height="100%",n("x",e,i),void n("y",e,i)):(e.style.height="100%",void("cover"===t&&e.clientWidth>o.clientWidth||"contain"===t&&e.clientWidth<o.clientWidth?(e.style.top="0",e.style.marginTop="0",n("x",e,i)):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",n("y",e,i))))},o=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;e=e}for(var n=0;n<e.length;n++)if(e[n].nodeName){var o=e[n].nodeName.toLowerCase();if("img"===o){if(t)continue;e[n].complete?i(e[n]):e[n].addEventListener("load",(function(){i(this)}))}else"video"===o?0<e[n].readyState?i(e[n]):e[n].addEventListener("loadedmetadata",(function(){i(this)})):i(e[n])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o(),window.addEventListener("resize",o),window.objectFitPolyfill=o}else window.objectFitPolyfill=function(){return!1}}}()},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8);var i=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}};"undefined"==typeof wsu_wds&&(window.wsu_wds={},wsu_wds=window.wsu_wds),wsu_wds.emitter=i();var o=wsu_wds;function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a,r,l,u,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.nav_items=null,this.show_logs=!!t.show_logs,this.nav_items_selectors=t.nav_item_selectors,void 0===this.nav_items_selectors&&console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."),this.use_animations=t.use_animations,void 0===this.use_animations&&(this.use_animations=!1)}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.set_init_state(),window.addEventListener("click",this.check_for_close.bind(this,event)),this.use_animations&&this.init_mutation_observers()}},{key:"set_init_state",value:function(){var e=this.query_all_nav_items,t=this;e.forEach((function(e){e.setAttribute("aria-expanded","false"),e.addEventListener("click",(function(e){e.preventDefault(),t.toggle_aria_expanded_state(e.currentTarget)}))})),t.use_animations&&this.query_all_nav_items.forEach((function(e){e.nextElementSibling.classList.add("animated"),Array.from(e.nextElementSibling.children).forEach((function(e){e.classList.add("animated")}))}))}},{key:"toggle_aria_expanded_state",value:function(e){"false"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}},{key:"set_aria_expanded_state",value:function(e,t){e.setAttribute("aria-expanded",t)}},{key:"init_mutation_observers",value:function(){this.create_mutation(this.params.nav_item_selectors,this.check_element_view_state.bind(this))}},{key:"create_mutation",value:function(e,t){var n=document.querySelectorAll(e),i={attributes:!0,childList:!1,subtree:!1},o=this;n.forEach((function(e){new MutationObserver((function(e,n){var i=!0,s=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done);i=!0){var u=r.value;"attributes"===u.type&&(o.show_logs&&console.log("The "+u.attributeName+" attribute was modified."),t(u))}}catch(e){s=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw a}}})).observe(e,i)}))}},{key:"check_element_view_state",value:function(e){if("aria-expanded"===e.attributeName){var t=e.target.nextElementSibling,n=Array.from(e.target.nextElementSibling.children);"true"==e.target.getAttribute("aria-expanded")?(this.animate_item(t),this.animate_items(n)):(this.animate_item(t,"fadeOutDown","fadeInUp","out"),this.animate_items(n,"fadeOutDown","fadeInUp"))}}},{key:"animate_item",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fadeInUp",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fadeOutDown";arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4],e.classList.remove(n),e.classList.add(t)}},{key:"animate_items",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fadeInUp",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fadeOutDown",i=e,o=i.length,s=0;s<o;s++)!function(e){setTimeout((function(){i[e].classList.remove(n),i[e].classList.add(t)}),30+e*(.25*e)*30)}(s)}},{key:"check_for_close",value:function(){var e=this;document.querySelector(".wsu-s-nav-horizontal__wrapper").contains(event.target)||this.query_all_open_nav_items.forEach((function(t){e.set_aria_expanded_state(t,!1)}))}},{key:"query_all_open_nav_items",get:function(){return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]')}},{key:"query_all_nav_items",get:function(){return document.querySelectorAll(".wsu-s-nav-horizontal__nav-link[aria-expanded]")}}])&&s(t.prototype,n),i&&s(t,i),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(a=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new r(e,this),this.popupMenu.init())},a.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},a.prototype.handleKeydown=function(e){var t,n,i=e.currentTarget,o=e.key,s=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}i.dispatchEvent(t)}s=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),s=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),s=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),s=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),s=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),s=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),s=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),s=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(n=o).length&&n.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,o),s=!0)}s&&(e.stopPropagation(),e.preventDefault())},a.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},a.prototype.handleFocus=function(e){this.menu.hasFocus=!0},a.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},a.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},a.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(r=function(e,t){var n="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(n+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(n+"has no element children.");for(var i=e.firstElementChild;i;){var o=i.firstElementChild;if(o&&"A"===o)throw new Error(n+"has descendant elements that are not A elements.");i=i.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,n,i,o;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((n=new a(t,this)).init(),this.menuitems.push(n),i=t.textContent.trim(),this.firstChars.push(i.substring(0,1).toLowerCase())),e=e.nextElementSibling;(o=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[o-1])},r.prototype.handleMouseover=function(e){this.hasHover=!0},r.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},r.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var n=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);n&&n.menu.setFocusToNextItem(n,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},r.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},r.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},r.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},r.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},r.prototype.setFocusByFirstCharacter=function(e,t){var n,i;t=t.toLowerCase();(n=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(n=0),-1===(i=this.getIndexFirstChars(n,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.menuitems[i].domNode.focus()},r.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1},r.prototype.open=function(){this.controller.setExpanded(!0)},r.prototype.close=function(e){for(var t=this.controller.hasHover,n=this.hasFocus,i=0;i<this.menuitems.length;i++){var o=this.menuitems[i];o.popupMenu&&(n|=o.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(n||this.hasHover||t)||this.controller.setExpanded(!1)},(l=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new r(e,this),this.popupMenu.init())},l.prototype.handleKeydown=function(e){e.currentTarget;var t,n=e.key,i=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),i=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),i=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),i=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),i=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),i=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),i=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=n).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),i=!0)}i&&(e.stopPropagation(),e.preventDefault())},l.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},l.prototype.handleFocus=function(e){this.menu.hasFocus=!0},l.prototype.handleBlur=function(e){this.menu.hasFocus=!1},(u=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var n=e.firstElementChild;n;){var i=n.firstElementChild;if(n&&i&&"A"!==i.tagName)throw new Error(t+"has child elements are not A elements.");n=n.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,n,i=this.domNode.firstElementChild;i;){var o=i.firstElementChild;i&&o&&"A"===o.tagName&&((e=new l(o,this)).init(),this.menubarItems.push(e),t=o.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),i=i.nextElementSibling}(n=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[n-1]),this.firstItem.domNode.tabIndex=0},u.prototype.setFocusToItem=function(e){for(var t=!1,n=0;n<this.menubarItems.length;n++){var i=this.menubarItems[n];0==i.domNode.tabIndex&&(t="true"===i.domNode.getAttribute("aria-expanded")),i.domNode.tabIndex=-1,i.popupMenu&&i.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},u.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},u.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},u.prototype.setFocusToPreviousItem=function(e){var t,n;e===this.firstItem?n=this.lastItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t-1]),this.setFocusToItem(n)},u.prototype.setFocusToNextItem=function(e){var t,n;e===this.lastItem?n=this.firstItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t+1]),this.setFocusToItem(n)},u.prototype.setFocusByFirstCharacter=function(e,t){var n,i;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(n=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(n=0),-1===(i=this.getIndexFirstChars(n,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.setFocusToItem(this.menubarItems[i])},u.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1};var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.breakpoints=[],this.main_nav_width=null,this.params=t,this.screenWidth=null,this.window=window}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.update_nav(),window.addEventListener("resize",this.update_nav.bind(this))}},{key:"update_nav",value:function(){var e=this;document.fonts.ready.then((function(){null==e.get_priority_nav&&e.get_frame_width<=e.get_main_nav_width&&e.create_priority_nav(),null!=e.get_priority_nav&&e.resize_nav(),e.initiateKeyboardNavigationSupport(),e.initiateAriaExpanded()}))}},{key:"create_priority_nav",value:function(){var e=document.createElement("li"),t=document.createElement("a"),n=document.createElement("ul");e.setAttribute("class",this.params.priority_nav_list_item_class_name),e.setAttribute("role","none"),t.innerHTML=this.params.more_inner_html,t.setAttribute("href","#"),t.setAttribute("class",this.params.priority_nav_list_item_link_class_name),t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-haspopup","true"),n.setAttribute("class",this.params.priority_nav_list_item_list_class_name),n.setAttribute("role","menu"),n.setAttribute("aria-abel","Replace Me w/ Link Name Submenu"),e.appendChild(t),e.appendChild(n),document.querySelector(this.params.main_nav_selector).appendChild(e)}},{key:"resize_nav",value:function(){for(this.calculateWidths();this.screenWidth<=this.main_nav_width&&this.get_main_nav.children.length>0;){var e=this.get_main_nav.children[this.get_main_nav.children.length-2];this.moveToPriorityNav(e),this.calculateWidths()}for(;this.screenWidth>=this.breakpoints[this.breakpoints.length-1]&&this.get_priority_nav_submenu.children.length>0;)this.moveToMainNav(this.get_priority_nav_submenu.children[0]);0==this.breakpoints.length&&this.destroyPriorityNav()}},{key:"calculateWidths",value:function(){this.main_nav_width=this.get_main_nav_width,this.screenWidth=this.get_frame_width}},{key:"moveToPriorityNav",value:function(e){this.cleanItemBeforeMove(e),this.get_priority_nav_submenu.insertAdjacentElement("afterbegin",e),this.breakpoints.push(this.main_nav_width)}},{key:"moveToMainNav",value:function(e){this.cleanItemBeforeMove(e),this.get_main_nav.insertBefore(e,this.get_main_nav.lastElementChild),this.breakpoints.pop()}},{key:"cleanItemBeforeMove",value:function(e){var t=e.classList;["animated","fadeOutDown","fadeInUp"].forEach((function(e){Array.from(t).includes(e)&&t.remove(e)}))}},{key:"destroyPriorityNav",value:function(){this.get_priority_nav.remove()}},{key:"initiateAriaExpanded",value:function(){new c({nav_item_selectors:"."+this.params.priority_nav_list_item_link_class_name,use_animations:!0,show_logs:!0}).init()}},{key:"initiateKeyboardNavigationSupport",value:function(){new u(document.querySelector(this.params.main_nav_selector)).init()}},{key:"get_frame_width",get:function(){return document.querySelector(".wsu-s-nav-horizontal__nav-container").offsetWidth}},{key:"get_main_nav_width",get:function(){return document.querySelector(this.params.main_nav_selector).offsetWidth}},{key:"get_main_nav",get:function(){return document.querySelector(this.params.main_nav_selector)}},{key:"get_priority_nav",get:function(){return document.querySelector("."+this.params.priority_nav_list_item_class_name)}},{key:"get_priority_nav_submenu",get:function(){return document.querySelector("."+this.params.priority_nav_list_item_list_class_name)}},{key:"getBreakpoints",get:function(){return this.breakpoints}}])&&h(t.prototype,n),i&&h(t,i),e}(),m=document.querySelector(".wsu-s-nav-horizontal__wrapper");void 0!==m&&null!=m&&(m.classList.remove("wsu-u-no-js"),o.horizontal_nav=new d({main_nav_selector:".wsu-s-nav-horizontal__nav-list",priority_nav_list_item_class_name:"wsu-s-nav-horizontal__nav-item--more",priority_nav_list_item_link_class_name:"wsu-s-nav-horizontal__nav-link",priority_nav_list_item_list_class_name:"wsu-s-nav-horizontal__nav-list--has-more-items",more_inner_html:'<div class="wsu-icon wsu-i-more"></div>'}),o.horizontal_nav.init());n(9);function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.params.elements.forEach((function(t){e.initiateKeyboardNavigationSupport(t)}))}},{key:"initiateKeyboardNavigationSupport",value:function(e){new u(e).init()}}])&&p(t.prototype,n),i&&p(t,i),e}();function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.nav_item_selector="",this.nav_panel_control_selector="",this.nav_panel_selector="",this.nav_list_container_selector="",this.tree_mode=!!t.tree_mode,this.show_logs=!!t.show_logs,this.nav_item_selector=t.nav_item_selector,void 0===this.nav_item_selector&&console.error("Undefined nav_item_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control_selector=t.nav_panel_control_selector,void 0===this.nav_panel_control_selector&&console.error("Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control=document.querySelector(this.nav_panel_control_selector),this.nav_panel_selector=t.nav_panel_selector,void 0===this.nav_panel_selector&&console.error("Undefined nav_panel_selector. Please pass the selector you would like to be expandable."),this.nav_panel=document.querySelector(this.nav_panel_selector),this.nav_list_container_selector=t.nav_list_container_selector,void 0===this.nav_list_container_selector&&console.error("Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.")}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this,t=document.querySelectorAll(this.nav_list_container_selector);new v({elements:t}).init(),document.querySelector(this.nav_panel_control_selector).setAttribute("aria-expanded","false"),document.querySelectorAll(this.nav_item_selector).forEach((function(e){e.setAttribute("aria-expanded","false")})),this.nav_panel_control.addEventListener("click",this.toggle_panel.bind(this)),document.querySelectorAll(".wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link").forEach((function(t){t.addEventListener("click",e.toggle.bind(e))})),o.emitter.on("wsu-vertical-nav--open",this.panel_open.bind(this)),o.emitter.on("wsu-vertical-nav--after-open",this.panel_after_open.bind(this)),o.emitter.on("wsu-vertical-nav--close",this.panel_close.bind(this)),o.emitter.on("wsu-vertical-nav--after-close",this.panel_after_close.bind(this)),this.nav_panel.classList.contains("wsu-s-nav-vertical__wrapper--open")&&this.open_panel()}},{key:"open_current_target",value:function(e){e.preventDefault(),e.currentTarget.setAttribute("aria-expanded","true")}},{key:"open_target",value:function(e){e.preventDefault(),e.target.setAttribute("aria-expanded","true")}},{key:"open_panel",value:function(){var e=this;this.nav_panel_control.setAttribute("aria-expanded","true"),this.nav_panel.classList.add("wsu-s-nav-vertical__wrapper--open"),o.emitter.emit("wsu-vertical-nav--open"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--open"),setTimeout((function(){o.emitter.emit("wsu-vertical-nav--after-open"),e.show_logs&&console.log("Event emitted: wsu-vertical-nav--after-open")}),300),document.body.classList.add("wsu-s-nav-vertical__nav--is-open")}},{key:"close",value:function(e){e.preventDefault(),e.target.setAttribute("aria-expanded","false")}},{key:"close_panel",value:function(){var e=this;this.nav_panel_control.setAttribute("aria-expanded","false"),this.nav_panel.classList.remove("wsu-s-nav-vertical__wrapper--open"),o.emitter.emit("wsu-vertical-nav--close"),this.show_logs&&console.log("Event emitted: wsu-vertical-nav--close"),setTimeout((function(){o.emitter.emit("wsu-vertical-nav--after-close"),e.show_logs&&console.log("Event emitted: wsu-vertical-nav--after-close")}),600),document.body.classList.remove("wsu-s-nav-vertical__nav--is-open")}},{key:"toggle",value:function(e){"false"==e.currentTarget.getAttribute("aria-expanded")?this.open_current_target(e):"false"==e.target.getAttribute("aria-expanded")?this.open_target(e):this.close(e)}},{key:"toggle_panel",value:function(e){e.preventDefault(),"true"==this.nav_panel_control.getAttribute("aria-expanded")?this.close_panel():this.open_panel()}},{key:"panel_open",value:function(){var e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.classList.remove("fadeOutUp"),e.classList.add("animated","fadeInDown","faster");for(var t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),n=t.length,i=0;i<n;i++)!function(e){setTimeout((function(){t[e].classList.remove("fadeOutLeft"),t[e].classList.add("animated","fadeInLeft")}),30+e*(.25*e)*30)}(i);var s=this;window.addEventListener("click",(function(e){"wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open"==e.target.className&&s.close_panel()}));var a=document.querySelector(".wsu-g-header__wrapper");void 0!==a&&null!=a&&document.body.classList.remove("wsu-g-header--is-hidden"),0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(o.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}},{key:"panel_after_open",value:function(){0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(o.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}},{key:"panel_close",value:function(){var e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.classList.remove("fadeInDown"),e.classList.add("fadeOutUp");for(var t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),n=t.length,i=0;i<n;i++)!function(e){setTimeout((function(){t[e].classList.remove("fadeInLeft"),t[e].classList.add("fadeOutLeft")}),50+e*(.2*e)*50)}(i)}},{key:"panel_after_close",value:function(){0!==document.querySelectorAll(".wsu-s-nav-horizontal__wrapper").length?(o.horizontal_nav.update_nav(),this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper exists")):this.show_logs&&console.log(".wsu-s-nav-horizontal__wrapper does not exist")}}])&&_(t.prototype,n),i&&_(t,i),e}(),y=document.querySelector(".wsu-s-nav-vertical__wrapper");void 0!==y&&null!=y&&(y.classList.remove("wsu-u-no-js"),o.vertical_nav=new f({nav_item_selector:".wsu-s-nav-vertical__nav-link",nav_panel_control_selector:".wsu-s-nav-vertical__menu-icon-link",nav_panel_selector:".wsu-s-nav-vertical__wrapper",nav_list_container_selector:".wsu-s-nav-vertical__nav-list",show_logs:!0}),o.vertical_nav.init(),document.querySelector(".wsu-s-nav-vertical__nav-container-close-link").addEventListener("click",(function(e){e.preventDefault(),o.vertical_nav.close_panel()})));n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25)}]);
//# sourceMappingURL=wsu-design-system.bundle.dist.js.map