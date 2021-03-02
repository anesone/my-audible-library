(self.webpackChunk=self.webpackChunk||[]).push([[267],{4662:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a}),r(3238),r(2759),r(895),r(911),r(2482);const a={methods:{slugify:function(e){var t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",r=new RegExp(t.split("").join("|"),"g");return encodeURIComponent(e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},1378:(e,t,r)=>{var a=r(8759);e.exports=function(e){if(!a(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},5070:(e,t,r)=>{var a=r(8759),o=r(7530);e.exports=function(e,t,r){var n,s;return o&&"function"==typeof(n=t.constructor)&&n!==r&&a(s=n.prototype)&&s!==r.prototype&&o(e,s),e}},7530:(e,t,r)=>{var a=r(6112),o=r(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return a(r),o(n),t?e.call(r,n):r.__proto__=n,r}}():void 0)},2759:(e,t,r)=>{var a=r(5283),o=r(2086),n=r(7189),s=r(5070),i=r(7826).f,c=r(62).f,u=r(7994),l=r(4276),p=r(4930),g=r(1007),f=r(3677),m=r(3278).set,v=r(7420),y=r(211)("match"),_=o.RegExp,d=_.prototype,h=/a/g,b=/a/g,k=new _(h)!==h,x=p.UNSUPPORTED_Y;if(a&&n("RegExp",!k||x||f((function(){return b[y]=!1,_(h)!=h||_(b)==b||"/a/i"!=_(h,"i")})))){for(var C=function(e,t){var r,a=this instanceof C,o=u(e),n=void 0===t;if(!a&&o&&e.constructor===C&&n)return e;k?o&&!n&&(e=e.source):e instanceof C&&(n&&(t=l.call(e)),e=e.source),x&&(r=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var i=s(k?new _(e,t):_(e,t),a?this:d,C);return x&&r&&m(i,{sticky:r}),i},w=function(e){e in C||i(C,e,{configurable:!0,get:function(){return _[e]},set:function(t){_[e]=t}})},R=c(_),E=0;R.length>E;)w(R[E++]);d.constructor=C,C.prototype=d,g(o,"RegExp",C)}v("RegExp")},1848:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s}),r(2327);var a=r(4662),o=r(6495);const n={name:"aleCategories",mixins:[a.Z,o.Z],data:function(){return{categories:null}},created:function(){var e=this,t={parent:[]};_.each(this.$store.state.library.books,(function(r,a){if(r.categories){var o=r.categories[0].name,n=_.find(t.parent,["name",o]);if(n||(n=t.parent.push({name:o,slug:e.slugify(o),books:[]})),(n=_.find(t.parent,["name",o])).books.push(r),r.categories[1]){n.sub||(n.sub=[]);var s=r.categories[1].name,i=_.find(n.sub,["name",s]);i||(i=n.sub.push({name:s,slug:e.slugify(s),books:[]})),(i=_.find(n.sub,["name",s])).books.push(r)}}})),t.parent=_.orderBy(t.parent,"name","asc"),_.each(t.parent,(function(e,t){e.sub=_.orderBy(e.sub,"name","asc")})),this.categories=t.parent,this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},methods:{getRandomBooks:function(e,t){return _.sampleSize(e,t)}}},s=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.categories?r("div",{staticClass:"box-layout-wrapper",attrs:{id:"ale-categories"}},e._l(e.categories,(function(t,a){return r("div",{key:t.name,staticClass:"single-box",attrs:{"data-category":t.name}},[r("h2",[r("router-link",{attrs:{to:{name:"category",params:{parent:t.slug}}}},[e._v("\n        "+e._s(t.name)+"\n      ")])],1),e._v(" "),r("router-link",{staticClass:"books-total",attrs:{to:{name:"category",params:{parent:t.slug}}}},[r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],attrs:{content:"Total number of books in this category."},domProps:{innerHTML:e._s(t.books.length)}})]),e._v(" "),r("div",{staticClass:"child-categories"},e._l(t.sub,(function(a,o){return r("div",{key:a.name},[r("router-link",{attrs:{to:{name:"category",params:{parent:t.slug,child:a.slug}}}},[e._v("\n          "+e._s(a.name)+"\n        ")]),e._v(" "),r("span",{staticClass:"number-of-books"},[e._v("("+e._s(a.books.length)+")")])],1)})),0),e._v(" "),r("div",{staticClass:"sample-covers"},e._l(e.getRandomBooks(t.books,5),(function(t,a){return r("div",{key:t.asin,staticClass:"sample-cover"},[r("router-link",{attrs:{to:{name:"category",params:{parent:t.categories?e.slugify(t.categories[0].name):null,child:t.categories?e.slugify(t.categories[1].name):null},query:{book:t.asin}}}},[r("img",{attrs:{src:e.makeCoverUrl(t.cover),alt:""}})])],1)})),0)],1)})),0):e._e()}),[],!1,null,"6ed8d752",null).exports}}]);