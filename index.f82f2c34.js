function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r,e=document.querySelector("thead"),n=document.querySelector("tbody"),o=function(r){if(Array.isArray(r))return t(r)}(r=document.querySelector("tbody").children)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();e.addEventListener("click",function(t){var r=t.target.cellIndex;o.sort(function(t,e){var n=t.children[r].textContent,o=e.children[r].textContent;return r<=1?n.localeCompare(o):2===r?+n-+o:3===r?parseFloat(n.slice(1))-parseFloat(o.slice(1)):void 0}),n.innerHTML="",o.forEach(function(t){n.append(t)})});
//# sourceMappingURL=index.f82f2c34.js.map
