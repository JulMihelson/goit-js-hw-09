function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var u=n("7Y9D8");const l=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');document.querySelector('button[type="submit"]');function d(e,t){return new Promise(((r,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let r=Number(l.value);const o=Number(i.value),n=Number(a.value);if(n<=0)e(u).Notify.failure("Please enter amount over 0");else for(let l=0;l<n;l+=1)d(l,r).then((t=>{e(u).Notify.success(`Fullfiled promise ${l+1} in ${t.delay}ms`)})).catch((t=>{e(u).Notify.failure(`Rejected promise ${l+1} in ${t.delay}ms`)})),r+=o,t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.551e1a60.js.map
