function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");const l=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');document.querySelector('button[type="submit"]');function d(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let n=Number(l.value);const r=Number(i.value),o=Number(a.value);for(let t=0;t<=o;t+=1)d(t,n).then((n=>{e(u).Notify.success(`${t} in ${n.delay}ms`)})).catch((n=>{e(u).Notify.failure(`Rejected promise ${t} in ${n.delay}ms`)})),n+=r;t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.1a8b41c1.js.map