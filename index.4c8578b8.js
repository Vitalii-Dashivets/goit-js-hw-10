!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return i.default(e)||c.default(e)||l.default(e)||s.default()};var i=u(o("kMC0W")),c=u(o("7AJDX")),s=u(o("8CtQK")),l=u(o("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}var d="live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT";function f(e){return fetch(e).then((function(e){return e.json()})).catch((function(){return v()}))}function p(t){return console.log(t),y(),f("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t,"&api_key=").concat(d)).then((function(t){return y(),g.apply(void 0,e(a)(t))})).catch((function(){return v()}))}function g(e){var t='<img src="'.concat(e.url,"\" alt='1' width=550>\n    <p><span class='cat-titles'>Назва породи:</span> ").concat(e.breeds[0].name,"</p>\n    <p><span class='cat-titles'>Опис :</span> ").concat(e.breeds[0].description," </p>\n    <p><span class='cat-titles'>Темперамент:</span> ").concat(e.breeds[0].temperament,"</p>");return b.animalCard.innerHTML=t}function h(){b.alertLoader.classList.toggle("is-hidden"),b.select.classList.toggle("is-hidden")}function h(){b.alertLoader.classList.toggle("is-hidden"),b.select.classList.toggle("is-hidden")}function y(){b.alertLoader.classList.toggle("is-hidden"),b.catInfo.classList.toggle("is-hidden")}function v(){b.alertError.classList.toggle("is-hidden")}var m,b={select:document.querySelector(".breed-select"),animalCard:document.querySelector(".cat-info"),alertLoader:document.querySelector(".loader"),alertError:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};b.select.addEventListener("change",(function(e){var t=e.target.value;return console.log(t),p(t)})),b.alertLoader.classList.add("is-hidden"),b.alertError.classList.add("is-hidden"),console.log(b.animalCard),m="https://api.thecatapi.com/v1/breeds?".concat(d),h(),f(m).then((function(e){return h(),p(e[0].id),t=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join(""),b.select.insertAdjacentHTML("afterbegin",t);var t})).catch((function(){return v()}))}();
//# sourceMappingURL=index.4c8578b8.js.map
