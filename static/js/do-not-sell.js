"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}!function(){var e=function(){function a(e){_classCallCheck(this,a),this.form=document.querySelector(e.form),this.reg={email:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,name:/^([a-zA-Z]{1,}\s{0,}[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/},this.init()}return _createClass(a,[{key:"openThankYou",value:function(){var e=document.querySelector(".do-not-sell");document.querySelector(".thank-you").classList.add("show"),e.classList.remove("show")}},{key:"openGoToHomeWindow",value:function(){var e=document.querySelector(".quiz.modal");document.querySelector(".to-home-page").classList.add("show"),e.classList.remove("show")}},{key:"validate",value:function(e){var a=this,e=e.querySelectorAll("input"),t=!1;return e.forEach(function(e){"tel"===e.name&&a.validateTel(e)&&(t=!0),("name"===e.name&&a.validateName(e)||"email"===e.name&&a.validateEmail(e))&&(t=!0)}),!t}},{key:"validateEmail",value:function(e){var a=e.closest(".fancy-input"),t=a.querySelector(".error-msg"),r=!1,n="";return e.value?this.reg.email.test(e.value)||(r=!0,n="Enter valid email please"):(r=!0,n="Enter your email please"),r?a.classList.add("error"):a.classList.remove("error"),t.innerText=n,e.addEventListener("input",function(e){a.classList.remove("error"),t.innerText=""}),r}},{key:"init",value:function(){var a=this;this.form.addEventListener("submit",function(e){e.preventDefault(),a.validate(a.form)&&a.openThankYou()})}}]),a}();try{new e({form:"#step-form"})}catch(e){}}();