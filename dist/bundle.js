module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("classnames")},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),u=n(2),l=n.n(u);n(4);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(t){var n,r,o,i,a,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n=!(o=p(e).call(this,t))||"object"!==c(o)&&"function"!=typeof o?f(r):o,i=f(n),u=function(){},(a="handleClick")in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n.state={value:"",buttonPrimary:n.props.primary,buttonDisable:n.props.disable,buttonAnimation:!1,size:n.props.size},n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,r["Component"]),n=e,(i=[{key:"render",value:function(){l()("aimi-button--ripple",{"aimi-button--ripple-hide":!this.state.buttonAnimation},{"aimi-button--ripple-anime":this.state.buttonAnimation});var t=l()("aimi-button",this.state.size?"aimi-button-".concat(this.state.size):"",this.state.buttonPrimary?"aimi-button--primary":"",this.state.buttonDisable?" aimi-button--disable":"");return o.a.createElement("a",{onClick:this.props.onClick,className:"aimi-button--content ".concat(this.props.className?this.props.className:"")},o.a.createElement("button",{ref:this.refCallback,onClick:this.handleClick,className:t},o.a.createElement("span",null,this.props.children)))}}])&&s(n.prototype,i),a&&s(n,a),e}();y.propTypes={disable:a.a.bool,animation:a.a.bool,primary:a.a.bool,value:a.a.bool,size:a.a.string,children:a.a.string,className:a.a.string,onClick:a.a.func},e.default=y},function(t,e){}]);