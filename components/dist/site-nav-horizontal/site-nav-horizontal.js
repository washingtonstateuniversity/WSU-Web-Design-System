!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=62)}({0:function(t,e,s){"use strict";var i=function(t){return t=t||Object.create(null),{on:function(e,s){(t[e]||(t[e]=[])).push(s)},off:function(e,s){t[e]&&t[e].splice(t[e].indexOf(s)>>>0,1)},emit:function(e,s){(t[e]||[]).slice().map((function(t){t(s)})),(t["*"]||[]).slice().map((function(t){t(e,s)}))}}};"undefined"==typeof wsu_wds&&(window.wsu_wds={},wsu_wds=window.wsu_wds),wsu_wds.emitter=i();e.a=wsu_wds},1:function(t,e,s){"use strict";var i,n,o,r;s.d(e,"a",(function(){return r})),(i=function(t,e){this.domNode=t,this.menu=e,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var t=this.domNode.nextElementSibling;t&&"UL"===t.tagName&&(this.popupMenu=new n(t,this),this.popupMenu.init())},i.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},i.prototype.handleKeydown=function(t){var e,s,i=t.currentTarget,n=t.key,o=!1;switch(t.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(t){document.createEvent&&(e=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}i.dispatchEvent(e)}o=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),o=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),o=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),o=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),o=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),o=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),o=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),o=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(s=n).length&&s.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),o=!0)}o&&(t.stopPropagation(),t.preventDefault())},i.prototype.setExpanded=function(t){t?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},i.prototype.handleFocus=function(t){this.menu.hasFocus=!0},i.prototype.handleBlur=function(t){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},i.prototype.handleMouseover=function(t){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},i.prototype.handleMouseout=function(t){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(n=function(t,e){var s="PopupMenu constructor argument domNode ";if(!t instanceof Element)throw new TypeError(s+"is not a DOM Element.");if(0===t.childElementCount)throw new Error(s+"has no element children.");for(var i=t.firstElementChild;i;){var n=i.firstElementChild;if(n&&"A"===n)throw new Error(s+"has descendant elements that are not A elements.");i=i.nextElementSibling}this.isMenubar=!1,this.domNode=t,this.controller=e,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var t,e,s,n,o;for(t=this.domNode.firstElementChild;t;)(e=t.firstElementChild)&&"A"===e.tagName&&((s=new i(e,this)).init(),this.menuitems.push(s),n=e.textContent.trim(),this.firstChars.push(n.substring(0,1).toLowerCase())),t=t.nextElementSibling;(o=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[o-1])},n.prototype.handleMouseover=function(t){this.hasHover=!0},n.prototype.handleMouseout=function(t){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},n.prototype.setFocusToController=function(t,e){if("string"!=typeof t&&(t=""),""!==t){if(this.controller.isMenubarItem)"previous"===t?this.controller.menu.setFocusToPreviousItem(this.controller,e):"next"===t&&this.controller.menu.setFocusToNextItem(this.controller,e);else if(this.controller.domNode.focus(),this.close(),"next"===t){var s=function(t,e){for(;t;){if(t.isMenubarItem)return t.domNode.focus(),t;e&&t.menu.close(!0),t.hasFocus=!1,t=t.menu.controller}return!1}(this.controller,!1);s&&s.menu.setFocusToNextItem(s,e)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},n.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},n.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},n.prototype.setFocusToPreviousItem=function(t){var e;t===this.firstItem?this.lastItem.domNode.focus():(e=this.menuitems.indexOf(t),this.menuitems[e-1].domNode.focus())},n.prototype.setFocusToNextItem=function(t){var e;t===this.lastItem?this.firstItem.domNode.focus():(e=this.menuitems.indexOf(t),this.menuitems[e+1].domNode.focus())},n.prototype.setFocusByFirstCharacter=function(t,e){var s,i;e=e.toLowerCase();(s=this.menuitems.indexOf(t)+1)===this.menuitems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,e))&&(i=this.getIndexFirstChars(0,e)),i>-1&&this.menuitems[i].domNode.focus()},n.prototype.getIndexFirstChars=function(t,e){for(var s=t;s<this.firstChars.length;s++)if(e===this.firstChars[s])return s;return-1},n.prototype.open=function(){this.controller.setExpanded(!0)},n.prototype.close=function(t){for(var e=this.controller.hasHover,s=this.hasFocus,i=0;i<this.menuitems.length;i++){var n=this.menuitems[i];n.popupMenu&&(s|=n.popupMenu.hasFocus)}this.controller.isMenubarItem||(e=!1),!t&&(s||this.hasHover||e)||this.controller.setExpanded(!1)},(o=function(t,e){this.menu=e,this.domNode=t,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var t=this.domNode.nextElementSibling;t&&"UL"===t.tagName&&(this.popupMenu=new n(t,this),this.popupMenu.init())},o.prototype.handleKeydown=function(t){t.currentTarget;var e,s=t.key,i=!1;switch(t.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),i=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),i=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),i=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),i=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),i=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),i=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(e=s).length&&e.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,s),i=!0)}i&&(t.stopPropagation(),t.preventDefault())},o.prototype.setExpanded=function(t){t?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},o.prototype.handleFocus=function(t){this.menu.hasFocus=!0},o.prototype.handleBlur=function(t){this.menu.hasFocus=!1},(r=function(t){var e="Menubar constructor argument menubarNode ";if(!t instanceof Element)throw new TypeError(e+"is not a DOM Element.");if(0===t.childElementCount)throw new Error(e+"has no element children.");for(var s=t.firstElementChild;s;){var i=s.firstElementChild;if(s&&i&&"A"!==i.tagName)throw new Error(e+"has child elements are not A elements.");s=s.nextElementSibling}this.isMenubar=!0,this.domNode=t,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var t,e,s,i=this.domNode.firstElementChild;i;){var n=i.firstElementChild;i&&n&&"A"===n.tagName&&((t=new o(n,this)).init(),this.menubarItems.push(t),e=n.textContent.trim(),this.firstChars.push(e.substring(0,1).toLowerCase())),i=i.nextElementSibling}(s=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[s-1]),this.firstItem.domNode.tabIndex=0},r.prototype.setFocusToItem=function(t){for(var e=!1,s=0;s<this.menubarItems.length;s++){var i=this.menubarItems[s];0==i.domNode.tabIndex&&(e="true"===i.domNode.getAttribute("aria-expanded")),i.domNode.tabIndex=-1,i.popupMenu&&i.popupMenu.close()}t.domNode.focus(),t.domNode.tabIndex=0,e&&t.popupMenu&&t.popupMenu.open()},r.prototype.setFocusToFirstItem=function(t){this.setFocusToItem(this.firstItem)},r.prototype.setFocusToLastItem=function(t){this.setFocusToItem(this.lastItem)},r.prototype.setFocusToPreviousItem=function(t){var e,s;t===this.firstItem?s=this.lastItem:(e=this.menubarItems.indexOf(t),s=this.menubarItems[e-1]),this.setFocusToItem(s)},r.prototype.setFocusToNextItem=function(t){var e,s;t===this.lastItem?s=this.firstItem:(e=this.menubarItems.indexOf(t),s=this.menubarItems[e+1]),this.setFocusToItem(s)},r.prototype.setFocusByFirstCharacter=function(t,e){var s,i;e=e.toLowerCase(),t.domNode.getAttribute("aria-expanded");(s=this.menubarItems.indexOf(t)+1)===this.menubarItems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,e))&&(i=this.getIndexFirstChars(0,e)),i>-1&&this.setFocusToItem(this.menubarItems[i])},r.prototype.getIndexFirstChars=function(t,e){for(var s=t;s<this.firstChars.length;s++)if(e===this.firstChars[s])return s;return-1}},23:function(t,e,s){},24:function(t,e,s){t.exports=s.p+"components/dist/site-nav-horizontal/site-nav-horizontal.html"},62:function(t,e,s){"use strict";s.r(e);var i=s(0);class n{constructor(t){this.params=t,this.nav_items=null,this.show_logs=!!t.show_logs,this.nav_items_selectors=t.nav_item_selectors,void 0===this.nav_items_selectors&&console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."),this.use_animations=t.use_animations,void 0===this.use_animations&&(this.use_animations=!1)}init(){this.set_init_state(),window.addEventListener("click",this.check_for_close.bind(this,event)),this.use_animations&&this.init_mutation_observers()}set_init_state(){const t=this.query_all_nav_items,e=this;if(t.forEach(t=>{t.setAttribute("aria-expanded","false"),t.addEventListener("click",(function(t){t.preventDefault(),e.toggle_aria_expanded_state(t.currentTarget)}))}),e.use_animations){this.query_all_nav_items.forEach(t=>{t.nextElementSibling.classList.add("animated"),Array.from(t.nextElementSibling.children).forEach(t=>{t.classList.add("animated")})})}}toggle_aria_expanded_state(t){"false"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}set_aria_expanded_state(t,e){t.setAttribute("aria-expanded",e)}init_mutation_observers(){this.create_mutation(this.params.nav_item_selectors,this.check_element_view_state.bind(this))}create_mutation(t,e){const s=document.querySelectorAll(t),i={attributes:!0,childList:!1,subtree:!1},n=this;s.forEach(t=>{new MutationObserver((function(t,s){for(let s of t)"attributes"===s.type&&(n.show_logs&&console.log("The "+s.attributeName+" attribute was modified."),e(s))})).observe(t,i)})}check_element_view_state(t){if("aria-expanded"===t.attributeName){const e=t.target.nextElementSibling,s=Array.from(t.target.nextElementSibling.children);"true"==t.target.getAttribute("aria-expanded")?(this.animate_item(e),this.animate_items(s)):(this.animate_item(e,"fadeOutDown","fadeInUp","out"),this.animate_items(s,"fadeOutDown","fadeInUp"))}}animate_item(t,e="fadeInUp",s="fadeOutDown",i="in",n=350){t.classList.remove(s),t.classList.add(e)}animate_items(t,e="fadeInUp",s="fadeOutDown"){const i=t,n=i.length;for(var o=0;o<n;o++)!function(t){setTimeout((function(){i[t].classList.remove(s),i[t].classList.add(e)}),30+t*(.25*t)*30)}(o)}check_for_close(){if(!document.querySelector(".wsu-s-nav-horizontal__wrapper").contains(event.target)){this.query_all_open_nav_items.forEach(t=>{this.set_aria_expanded_state(t,!1)})}}get query_all_open_nav_items(){return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]')}get query_all_nav_items(){return document.querySelectorAll(".wsu-s-nav-horizontal__nav-link[aria-expanded]")}}var o=s(1);class r{constructor(t){this.breakpoints=[],this.main_nav_width=null,this.params=t,this.screenWidth=null,this.window=window}init(){this.update_nav(),window.addEventListener("resize",this.update_nav.bind(this))}update_nav(){document.fonts.ready.then(()=>{null==this.get_priority_nav&&this.get_frame_width<=this.get_main_nav_width&&this.create_priority_nav(),null!=this.get_priority_nav&&this.resize_nav(),this.initiateKeyboardNavigationSupport(),this.initiateAriaExpanded()})}create_priority_nav(){const t=document.createElement("li"),e=document.createElement("a"),s=document.createElement("ul");t.setAttribute("class",this.params.priority_nav_list_item_class_name),t.setAttribute("role","none"),e.innerHTML=this.params.more_inner_html,e.setAttribute("href","#"),e.setAttribute("class",this.params.priority_nav_list_item_link_class_name),e.setAttribute("role","menuitem"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-haspopup","true"),s.setAttribute("class",this.params.priority_nav_list_item_list_class_name),s.setAttribute("role","menu"),s.setAttribute("aria-abel","Replace Me w/ Link Name Submenu"),t.appendChild(e),t.appendChild(s),document.querySelector(this.params.main_nav_selector).appendChild(t)}resize_nav(){for(this.calculateWidths();this.screenWidth<=this.main_nav_width&&this.get_main_nav.children.length>0;){const t=this.get_main_nav.children[this.get_main_nav.children.length-2];this.moveToPriorityNav(t),this.calculateWidths()}for(;this.screenWidth>=this.breakpoints[this.breakpoints.length-1]&&this.get_priority_nav_submenu.children.length>0;)this.moveToMainNav(this.get_priority_nav_submenu.children[0]);0==this.breakpoints.length&&this.destroyPriorityNav()}calculateWidths(){this.main_nav_width=this.get_main_nav_width,this.screenWidth=this.get_frame_width}moveToPriorityNav(t){this.cleanItemBeforeMove(t),this.get_priority_nav_submenu.insertAdjacentElement("afterbegin",t),this.breakpoints.push(this.main_nav_width)}moveToMainNav(t){this.cleanItemBeforeMove(t),this.get_main_nav.insertBefore(t,this.get_main_nav.lastElementChild),this.breakpoints.pop()}cleanItemBeforeMove(t){const e=t.classList;["animated","fadeOutDown","fadeInUp"].forEach(t=>{Array.from(e).includes(t)&&e.remove(t)})}destroyPriorityNav(){this.get_priority_nav.remove()}initiateAriaExpanded(){new n({nav_item_selectors:"."+this.params.priority_nav_list_item_link_class_name,use_animations:!0,show_logs:!0}).init()}initiateKeyboardNavigationSupport(){new o.a(document.querySelector(this.params.main_nav_selector)).init()}get get_frame_width(){return document.querySelector(".wsu-s-nav-horizontal__nav-container").offsetWidth}get get_main_nav_width(){return document.querySelector(this.params.main_nav_selector).offsetWidth}get get_main_nav(){return document.querySelector(this.params.main_nav_selector)}get get_priority_nav(){return document.querySelector("."+this.params.priority_nav_list_item_class_name)}get get_priority_nav_submenu(){return document.querySelector("."+this.params.priority_nav_list_item_list_class_name)}get getBreakpoints(){return this.breakpoints}}var a=document.querySelector(".wsu-s-nav-horizontal__wrapper");void 0!==a&&null!=a&&(a.classList.remove("wsu-u-no-js"),i.a.horizontal_nav=new r({main_nav_selector:".wsu-s-nav-horizontal__nav-list",priority_nav_list_item_class_name:"wsu-s-nav-horizontal__nav-item--more",priority_nav_list_item_link_class_name:"wsu-s-nav-horizontal__nav-link",priority_nav_list_item_list_class_name:"wsu-s-nav-horizontal__nav-list--has-more-items",more_inner_html:'<div class="wsu-icon wsu-i-more"></div>'}),i.a.horizontal_nav.init());s(23),s(24)}});
//# sourceMappingURL=site-nav-horizontal.js.map