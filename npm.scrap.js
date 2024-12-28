/**
 * @Open: browser console
 * @From: https://www.npmjs.com/~allnulled?activeTab=packages
 * @Execute: this snippet.
 */
o={};
Array.from($$("li > section > div > div > a > h3")).forEach(h3 => {
   o[h3.textContent] = h3.parentElement.href;
});
JSON.stringify(o)