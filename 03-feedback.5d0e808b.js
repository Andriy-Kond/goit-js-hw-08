var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function d(e,t,n){var i,r,o,a,u,f,l=0,c=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=o}function j(){var e=g();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,b&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(d)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,o=(d="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),d(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("submit",(function(e){console.log("inputValues",y),e.preventDefault(),localStorage.clear(),b.elements.email.value="",b.elements.message.value=""})),b.addEventListener("input",t((function(e){null!==e.currentTarget&&(y.email=e.currentTarget.elements.email.value,y.message=e.currentTarget.elements.message.value);const t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500));let y={};!function(){if(0!==localStorage.length){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);y.email=t.email,y.message=t.message,b.elements.email.value=y.email,b.elements.message.value=y.message}}();
//# sourceMappingURL=03-feedback.5d0e808b.js.map
