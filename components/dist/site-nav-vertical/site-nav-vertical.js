!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}({0:function(e,t,n){"use strict";var s,o,i,r;(s=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new o(e,this),this.popupMenu.init())},s.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},s.prototype.handleKeydown=function(e){var t,n,s=e.currentTarget,o=e.key,i=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}s.dispatchEvent(t)}i=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),i=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),i=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),i=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),i=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),i=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),i=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),i=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(n=o).length&&n.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,o),i=!0)}i&&(e.stopPropagation(),e.preventDefault())},s.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},s.prototype.handleFocus=function(e){this.menu.hasFocus=!0},s.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},s.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},s.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(o=function(e,t){var n="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(n+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(n+"has no element children.");for(var s=e.firstElementChild;s;){var o=s.firstElementChild;if(o&&"A"===o)throw new Error(n+"has descendant elements that are not A elements.");s=s.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,n,o,i;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((n=new s(t,this)).init(),this.menuitems.push(n),o=t.textContent.trim(),this.firstChars.push(o.substring(0,1).toLowerCase())),e=e.nextElementSibling;(i=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[i-1])},o.prototype.handleMouseover=function(e){this.hasHover=!0},o.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},o.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var n=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);n&&n.menu.setFocusToNextItem(n,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},o.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},o.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},o.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},o.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},o.prototype.setFocusByFirstCharacter=function(e,t){var n,s;t=t.toLowerCase();(n=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(n=0),-1===(s=this.getIndexFirstChars(n,t))&&(s=this.getIndexFirstChars(0,t)),s>-1&&this.menuitems[s].domNode.focus()},o.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1},o.prototype.open=function(){this.controller.setExpanded(!0)},o.prototype.close=function(e){for(var t=this.controller.hasHover,n=this.hasFocus,s=0;s<this.menuitems.length;s++){var o=this.menuitems[s];o.popupMenu&&(n|=o.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(n||this.hasHover||t)||this.controller.setExpanded(!1)},(i=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new o(e,this),this.popupMenu.init())},i.prototype.handleKeydown=function(e){e.currentTarget;var t,n=e.key,s=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),s=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),s=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),s=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),s=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),s=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),s=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=n).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),s=!0)}s&&(e.stopPropagation(),e.preventDefault())},i.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},i.prototype.handleFocus=function(e){this.menu.hasFocus=!0},i.prototype.handleBlur=function(e){this.menu.hasFocus=!1},n.d(t,"a",(function(){return r})),(r=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var n=e.firstElementChild;n;){var s=n.firstElementChild;if(n&&s&&"A"!==s.tagName)throw new Error(t+"has child elements are not A elements.");n=n.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,n,s=this.domNode.firstElementChild;s;){var o=s.firstElementChild;s&&o&&"A"===o.tagName&&((e=new i(o,this)).init(),this.menubarItems.push(e),t=o.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),s=s.nextElementSibling}(n=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[n-1]),this.firstItem.domNode.tabIndex=0},r.prototype.setFocusToItem=function(e){for(var t=!1,n=0;n<this.menubarItems.length;n++){var s=this.menubarItems[n];0==s.domNode.tabIndex&&(t="true"===s.domNode.getAttribute("aria-expanded")),s.domNode.tabIndex=-1,s.popupMenu&&s.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},r.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},r.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},r.prototype.setFocusToPreviousItem=function(e){var t,n;e===this.firstItem?n=this.lastItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t-1]),this.setFocusToItem(n)},r.prototype.setFocusToNextItem=function(e){var t,n;e===this.lastItem?n=this.firstItem:(t=this.menubarItems.indexOf(e),n=this.menubarItems[t+1]),this.setFocusToItem(n)},r.prototype.setFocusByFirstCharacter=function(e,t){var n,s;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(n=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(n=0),-1===(s=this.getIndexFirstChars(n,t))&&(s=this.getIndexFirstChars(0,t)),s>-1&&this.setFocusToItem(this.menubarItems[s])},r.prototype.getIndexFirstChars=function(e,t){for(var n=e;n<this.firstChars.length;n++)if(t===this.firstChars[n])return n;return-1}},23:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"components/dist/site-nav-vertical/site-nav-vertical.html"},37:function(e,t,n){"use strict";n.r(t);var s=n(0);function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.params.elements.forEach((function(t){e.initiateKeyboardNavigationSupport(t)}))}},{key:"initiateKeyboardNavigationSupport",value:function(e){new s.a(e).init()}}])&&o(t.prototype,n),i&&o(t,i),e}();var r=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}};function a(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.nav_item_selector="",this.nav_panel_control_selector="",this.nav_panel_selector="",this.nav_list_container_selector="",this.tree_mode=!1,document.emitter=r(),this.nav_item_selector=t.nav_item_selector,void 0===this.nav_item_selector&&console.error("Undefined nav_item_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control_selector=t.nav_panel_control_selector,void 0===this.nav_panel_control_selector&&console.error("Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control=document.querySelector(this.nav_panel_control_selector),this.nav_panel_selector=t.nav_panel_selector,void 0===this.nav_panel_selector&&console.error("Undefined nav_panel_selector. Please pass the selector you would like to be expandable."),this.nav_panel=document.querySelector(this.nav_panel_selector),this.nav_list_container_selector=t.nav_list_container_selector,void 0===this.nav_list_container_selector&&console.error("Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.")}var t,n,s;return t=e,(n=[{key:"init",value:function(){var e=this,t=document.querySelectorAll(this.nav_list_container_selector);new i({elements:t}).init(),document.querySelector(this.nav_panel_control_selector).setAttribute("aria-expanded","false"),document.querySelectorAll(this.nav_item_selector).forEach((function(e){e.setAttribute("aria-expanded","false")})),this.nav_panel_control.addEventListener("click",this.togglePanel.bind(this)),document.querySelectorAll(".wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link").forEach((function(t){t.addEventListener("click",e.toggle.bind(e))})),document.emitter.on("wsu-vertical-nav--after-open",this.panelOpened.bind(this))}},{key:"openCurrentTarget",value:function(e){e.preventDefault,e.currentTarget.setAttribute("aria-expanded","true")}},{key:"openTarget",value:function(e){e.preventDefault,e.target.setAttribute("aria-expanded","true")}},{key:"openPanel",value:function(){this.nav_panel_control.setAttribute("aria-expanded","true"),this.nav_panel.classList.add("wsu-s-nav-vertical__wrapper--open"),document.emitter.emit("wsu-vertical-nav--open"),setTimeout((function(){document.emitter.emit("wsu-vertical-nav--after-open")}),600)}},{key:"close",value:function(e){e.preventDefault,e.target.setAttribute("aria-expanded","false")}},{key:"closePanel",value:function(){this.nav_panel_control.setAttribute("aria-expanded","false"),this.nav_panel.classList.remove("wsu-s-nav-vertical__wrapper--open"),document.emitter.emit("wsu-vertical-nav--close")}},{key:"toggle",value:function(e){"false"==e.currentTarget.getAttribute("aria-expanded")?this.openCurrentTarget(e):"false"==e.target.getAttribute("aria-expanded")?this.openTarget(e):this.close(e)}},{key:"togglePanel",value:function(){"true"==this.nav_panel_control.getAttribute("aria-expanded")?this.closePanel():this.openPanel()}},{key:"panelOpened",value:function(){var e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.style.opacity=1,e.style.marginTop=0;for(var t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),n=t.length,s=0;s<n;s++)!function(e){setTimeout((function(){t[e].style.opacity=1,t[e].style.marginLeft="0"}),250+250*e)}(s);var o=this;window.addEventListener("click",(function(e){"wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open"==e.target.className&&o.closePanel()}))}}])&&a(t.prototype,n),s&&a(t,s),e}(),l=document.querySelector(".wsu-s-nav-vertical__wrapper");void 0!==l&&null!=l&&(l.classList.remove("wsu-u-no-js"),window.vertical_nav=new u({nav_item_selector:".wsu-s-nav-vertical__nav-link",nav_panel_control_selector:".wsu-s-nav-vertical__menu-icon-link",nav_panel_selector:".wsu-s-nav-vertical__wrapper",nav_list_container_selector:".wsu-s-nav-vertical__nav-list-container"}),window.vertical_nav.init(),document.querySelector(".wsu-s-nav-vertical__nav-container-close-link").addEventListener("click",(function(){window.vertical_nav.closePanel()})));n(23),n(24)}});
//# sourceMappingURL=site-nav-vertical.js.map