!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=58)}({0:function(e,t,i){"use strict";var n=function(e){return e=e||Object.create(null),{on:function(t,i){(e[t]||(e[t]=[])).push(i)},off:function(t,i){e[t]&&e[t].splice(e[t].indexOf(i)>>>0,1)},emit:function(t,i){(e[t]||[]).slice().map((function(e){e(i)})),(e["*"]||[]).slice().map((function(e){e(t,i)}))}}};"undefined"==typeof wsu_wds&&(window.wsu_wds={},wsu_wds=window.wsu_wds),wsu_wds.emitter=n();t.a=wsu_wds},1:function(e,t,i){"use strict";var n,s,o,r;(n=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new s(e,this),this.popupMenu.init())},n.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},n.prototype.handleKeydown=function(e){var t,i,n=e.currentTarget,s=e.key,o=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}n.dispatchEvent(t)}o=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),o=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),o=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),o=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),o=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),o=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),o=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),o=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(i=s).length&&i.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,s),o=!0)}o&&(e.stopPropagation(),e.preventDefault())},n.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},n.prototype.handleFocus=function(e){this.menu.hasFocus=!0},n.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},n.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},n.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(s=function(e,t){var i="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(i+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(i+"has no element children.");for(var n=e.firstElementChild;n;){var s=n.firstElementChild;if(s&&"A"===s)throw new Error(i+"has descendant elements that are not A elements.");n=n.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,i,s,o;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((i=new n(t,this)).init(),this.menuitems.push(i),s=t.textContent.trim(),this.firstChars.push(s.substring(0,1).toLowerCase())),e=e.nextElementSibling;(o=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[o-1])},s.prototype.handleMouseover=function(e){this.hasHover=!0},s.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},s.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var i=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);i&&i.menu.setFocusToNextItem(i,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},s.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},s.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},s.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},s.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},s.prototype.setFocusByFirstCharacter=function(e,t){var i,n;t=t.toLowerCase();(i=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(i=0),-1===(n=this.getIndexFirstChars(i,t))&&(n=this.getIndexFirstChars(0,t)),n>-1&&this.menuitems[n].domNode.focus()},s.prototype.getIndexFirstChars=function(e,t){for(var i=e;i<this.firstChars.length;i++)if(t===this.firstChars[i])return i;return-1},s.prototype.open=function(){this.controller.setExpanded(!0)},s.prototype.close=function(e){for(var t=this.controller.hasHover,i=this.hasFocus,n=0;n<this.menuitems.length;n++){var s=this.menuitems[n];s.popupMenu&&(i|=s.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(i||this.hasHover||t)||this.controller.setExpanded(!1)},(o=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new s(e,this),this.popupMenu.init())},o.prototype.handleKeydown=function(e){e.currentTarget;var t,i=e.key,n=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),n=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),n=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),n=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),n=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),n=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),n=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=i).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,i),n=!0)}n&&(e.stopPropagation(),e.preventDefault())},o.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},o.prototype.handleFocus=function(e){this.menu.hasFocus=!0},o.prototype.handleBlur=function(e){this.menu.hasFocus=!1},i.d(t,"a",(function(){return r})),(r=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var i=e.firstElementChild;i;){var n=i.firstElementChild;if(i&&n&&"A"!==n.tagName)throw new Error(t+"has child elements are not A elements.");i=i.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,i,n=this.domNode.firstElementChild;n;){var s=n.firstElementChild;n&&s&&"A"===s.tagName&&((e=new o(s,this)).init(),this.menubarItems.push(e),t=s.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),n=n.nextElementSibling}(i=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[i-1]),this.firstItem.domNode.tabIndex=0},r.prototype.setFocusToItem=function(e){for(var t=!1,i=0;i<this.menubarItems.length;i++){var n=this.menubarItems[i];0==n.domNode.tabIndex&&(t="true"===n.domNode.getAttribute("aria-expanded")),n.domNode.tabIndex=-1,n.popupMenu&&n.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},r.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},r.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},r.prototype.setFocusToPreviousItem=function(e){var t,i;e===this.firstItem?i=this.lastItem:(t=this.menubarItems.indexOf(e),i=this.menubarItems[t-1]),this.setFocusToItem(i)},r.prototype.setFocusToNextItem=function(e){var t,i;e===this.lastItem?i=this.firstItem:(t=this.menubarItems.indexOf(e),i=this.menubarItems[t+1]),this.setFocusToItem(i)},r.prototype.setFocusByFirstCharacter=function(e,t){var i,n;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(i=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(i=0),-1===(n=this.getIndexFirstChars(i,t))&&(n=this.getIndexFirstChars(0,t)),n>-1&&this.setFocusToItem(this.menubarItems[n])},r.prototype.getIndexFirstChars=function(e,t){for(var i=e;i<this.firstChars.length;i++)if(t===this.firstChars[i])return i;return-1}},22:function(e,t,i){},23:function(e,t,i){e.exports=i.p+"components/dist/site-nav-horizontal/site-nav-horizontal.html"},58:function(e,t,i){"use strict";i.r(t);var n=i(0);function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.nav_items=null,this.show_logs=!!t.show_logs,this.nav_items_selectors=t.nav_item_selectors,void 0===this.nav_items_selectors&&console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."),this.use_animations=t.use_animations,void 0===this.use_animations&&(this.use_animations=!1)}var t,i,n;return t=e,(i=[{key:"init",value:function(){this.set_init_state(),window.addEventListener("click",this.check_for_close.bind(this,event)),this.use_animations&&this.init_mutation_observers()}},{key:"set_init_state",value:function(){var e=this.query_all_nav_items,t=this;e.forEach((function(e){e.setAttribute("aria-expanded","false"),e.addEventListener("click",(function(e){e.preventDefault(),t.toggle_aria_expanded_state(e.currentTarget)}))})),t.use_animations&&this.query_all_nav_items.forEach((function(e){e.nextElementSibling.classList.add("animated"),Array.from(e.nextElementSibling.children).forEach((function(e){e.classList.add("animated")}))}))}},{key:"toggle_aria_expanded_state",value:function(e){"false"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}},{key:"set_aria_expanded_state",value:function(e,t){e.setAttribute("aria-expanded",t)}},{key:"init_mutation_observers",value:function(){this.create_mutation(this.params.nav_item_selectors,this.check_element_view_state.bind(this))}},{key:"create_mutation",value:function(e,t){var i=document.querySelectorAll(e),n={attributes:!0,childList:!1,subtree:!1},s=this;i.forEach((function(e){new MutationObserver((function(e,i){var n=!0,o=!1,r=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var h=a.value;"attributes"===h.type&&(s.show_logs&&console.log("The "+h.attributeName+" attribute was modified."),t(h))}}catch(e){o=!0,r=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw r}}})).observe(e,n)}))}},{key:"check_element_view_state",value:function(e){if("aria-expanded"===e.attributeName){var t=e.target.nextElementSibling,i=Array.from(e.target.nextElementSibling.children);"true"==e.target.getAttribute("aria-expanded")?(this.animate_item(t),this.animate_items(i)):(this.animate_item(t,"fadeOutDown","fadeInUp","out"),this.animate_items(i,"fadeOutDown","fadeInUp"))}}},{key:"animate_item",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fadeInUp",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fadeOutDown";arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4],e.classList.remove(i),e.classList.add(t)}},{key:"animate_items",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fadeInUp",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fadeOutDown",n=e,s=n.length,o=0;o<s;o++)!function(e){setTimeout((function(){n[e].classList.remove(i),n[e].classList.add(t)}),30+e*(.25*e)*30)}(o)}},{key:"check_for_close",value:function(){var e=this;document.querySelector(".wsu-s-nav-horizontal__wrapper").contains(event.target)||this.query_all_open_nav_items.forEach((function(t){e.set_aria_expanded_state(t,!1)}))}},{key:"query_all_open_nav_items",get:function(){return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]')}},{key:"query_all_nav_items",get:function(){return document.querySelectorAll(".wsu-s-nav-horizontal__nav-link[aria-expanded]")}}])&&s(t.prototype,i),n&&s(t,n),e}(),r=i(1);function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.breakpoints=[],this.main_nav_width=null,this.params=t,this.screenWidth=null,this.window=window}var t,i,n;return t=e,(i=[{key:"init",value:function(){this.update_nav(),window.addEventListener("resize",this.update_nav.bind(this))}},{key:"update_nav",value:function(){var e=this;document.fonts.ready.then((function(){null==e.get_priority_nav&&e.get_frame_width<=e.get_main_nav_width&&e.create_priority_nav(),null!=e.get_priority_nav&&e.resize_nav(),e.initiateKeyboardNavigationSupport(),e.initiateAriaExpanded()}))}},{key:"create_priority_nav",value:function(){var e=document.createElement("li"),t=document.createElement("a"),i=document.createElement("ul");e.setAttribute("class",this.params.priority_nav_list_item_class_name),e.setAttribute("role","none"),t.innerHTML=this.params.more_inner_html,t.setAttribute("href","#"),t.setAttribute("class",this.params.priority_nav_list_item_link_class_name),t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-haspopup","true"),i.setAttribute("class",this.params.priority_nav_list_item_list_class_name),i.setAttribute("role","menu"),i.setAttribute("aria-abel","Replace Me w/ Link Name Submenu"),e.appendChild(t),e.appendChild(i),document.querySelector(this.params.main_nav_selector).appendChild(e)}},{key:"resize_nav",value:function(){for(this.calculateWidths();this.screenWidth<=this.main_nav_width&&this.get_main_nav.children.length>0;){var e=this.get_main_nav.children[this.get_main_nav.children.length-2];this.moveToPriorityNav(e),this.calculateWidths()}for(;this.screenWidth>=this.breakpoints[this.breakpoints.length-1]&&this.get_priority_nav_submenu.children.length>0;)this.moveToMainNav(this.get_priority_nav_submenu.children[0]);0==this.breakpoints.length&&this.destroyPriorityNav()}},{key:"calculateWidths",value:function(){this.main_nav_width=this.get_main_nav_width,this.screenWidth=this.get_frame_width}},{key:"moveToPriorityNav",value:function(e){this.cleanItemBeforeMove(e),this.get_priority_nav_submenu.insertAdjacentElement("afterbegin",e),this.breakpoints.push(this.main_nav_width)}},{key:"moveToMainNav",value:function(e){this.cleanItemBeforeMove(e),this.get_main_nav.insertBefore(e,this.get_main_nav.lastElementChild),this.breakpoints.pop()}},{key:"cleanItemBeforeMove",value:function(e){var t=e.classList;["animated","fadeOutDown","fadeInUp"].forEach((function(e){Array.from(t).includes(e)&&t.remove(e)}))}},{key:"destroyPriorityNav",value:function(){this.get_priority_nav.remove()}},{key:"initiateAriaExpanded",value:function(){new o({nav_item_selectors:"."+this.params.priority_nav_list_item_link_class_name,use_animations:!0,show_logs:!0}).init()}},{key:"initiateKeyboardNavigationSupport",value:function(){new r.a(document.querySelector(this.params.main_nav_selector)).init()}},{key:"get_frame_width",get:function(){return document.querySelector(".wsu-s-nav-horizontal__nav-container").offsetWidth}},{key:"get_main_nav_width",get:function(){return document.querySelector(this.params.main_nav_selector).offsetWidth}},{key:"get_main_nav",get:function(){return document.querySelector(this.params.main_nav_selector)}},{key:"get_priority_nav",get:function(){return document.querySelector("."+this.params.priority_nav_list_item_class_name)}},{key:"get_priority_nav_submenu",get:function(){return document.querySelector("."+this.params.priority_nav_list_item_list_class_name)}},{key:"getBreakpoints",get:function(){return this.breakpoints}}])&&a(t.prototype,i),n&&a(t,n),e}(),h=document.querySelector(".wsu-s-nav-horizontal__wrapper");void 0!==h&&null!=h&&(h.classList.remove("wsu-u-no-js"),n.a.horizontal_nav=new u({main_nav_selector:".wsu-s-nav-horizontal__nav-list",priority_nav_list_item_class_name:"wsu-s-nav-horizontal__nav-item--more",priority_nav_list_item_link_class_name:"wsu-s-nav-horizontal__nav-link",priority_nav_list_item_list_class_name:"wsu-s-nav-horizontal__nav-list--has-more-items",more_inner_html:'<div class="wsu-icon wsu-i-more"></div>'}),n.a.horizontal_nav.init());i(22),i(23)}});
//# sourceMappingURL=site-nav-horizontal.js.map