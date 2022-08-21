(function(){"use strict";var t={6252:function(t,e,r){var a=r(9242),n=r(3396);const i={class:"container mt-4 p-4 text-center border"};function o(t,e,r,a,o,s){const c=(0,n.up)("graph-geoportal");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(c)])}var s=r(7139);const c={class:"row row-cols-1 row-cols-lg-2 align-items-center justify-content-between"},l={class:"col-lg-4"},d={class:"row row-cols-1 justify-content-center align-items-center"},u=(0,n._)("option",{disabled:"",value:"",selected:"true"},"Выберите один из вариантов",-1),h=["value"],p={class:"row col-10 justify-content-between pe-0 ps-0 mt-2"},f=(0,n._)("div",{class:"row col-7 justify-content-center"},[(0,n._)("span",{class:"col-10"},"Вертикальные данные:")],-1),w=(0,n._)("div",{class:"row col-5"},"Горизонтальные данные:",-1),v={class:"row col-7"},g=(0,n._)("option",{disabled:"",value:""},"Выберите один из вариантов",-1),m=(0,n._)("option",{value:"t"},"Температура",-1),b=(0,n._)("option",{value:"po"},"Давление",-1),_=[g,m,b],y=(0,n._)("div",{class:"row col-5"},[(0,n._)("select",null,[(0,n._)("option",{disabled:"",value:""},"Выберите один из вариантов"),(0,n._)("option",{value:"t"},"Дата")])],-1),D={key:0,class:"fs-3 text"};function T(t,e,r,i,o,g){const m=(0,n.up)("Bar");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(m,{class:"col-lg-8","chart-options":this.graph.chartOptions,"chart-data":this.graph.chartData,height:o.heightGraph},null,8,["chart-options","chart-data","height"]),(0,n._)("div",l,[(0,n._)("div",d,[(0,n.wy)((0,n._)("select",{class:"col-10",onChange:e[0]||(e[0]=t=>g.redrawGraph()),"onUpdate:modelValue":e[1]||(e[1]=t=>o.selectedTer=t)},[u,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.arrTer,(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.id,value:t},(0,s.zw)(t.name),9,h)))),128))],544),[[a.bM,o.selectedTer]]),(0,n._)("div",p,[f,w,(0,n._)("div",v,[(0,n.wy)((0,n._)("select",{onChange:e[2]||(e[2]=t=>g.redrawGraph()),"onUpdate:modelValue":e[3]||(e[3]=t=>o.selectedMean=t)},_,544),[[a.bM,o.selectedMean]])]),y]),o.idEx?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",D," Графика с таким id не существует "))])])])}var O=r(6265),x=r.n(O),j=r(6294),G=r(741);G.kL.register(G.Dx,G.u,G.De,G.ZL,G.uw,G.f$);var k={components:{Bar:j.$Q},data(){return{idEx:!0,selectedMean:"t",selectedTer:"",arrTer:[],iDisplayLength:3061,baseURL:"http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0",heightGraph:300,graph:{chartData:{labels:[],datasets:[{label:"t⁰ Температура воздуха в C⁰",data:[],backgroundColor:"rgb(75, 192, 192)"}]},chartOptions:{responsive:!0}}}},methods:{redrawGraph(){let t="";const e=this.selectedTer.data,r=[],a=[];e.sort(((t,e)=>t.w_date<e.w_date?-1:t.w_date>e.w_date?1:void 0)),e.map((e=>{if(null!==e.w_date){if("t"===this.selectedMean&&null!==e.t)return t="t⁰ Температура воздуха в C⁰",r.push(e.w_date),void a.push(e.t);if("po"===this.selectedMean&&null!==e.po)return t="p Атмосферное давление на уровне станции в мм. рт. ст.",r.push(e.w_date),void a.push(e.po)}})),this.graph.chartData.datasets[0].label=t,this.graph.chartData.labels=r,this.graph.chartData.datasets[0].data=a,this.idEx=!0},async getDataAPI(){try{const t=[],e=await x().get(this.baseURL+"&iDisplayLength="+this.iDisplayLength),r=e.data.aaData;r.map((e=>{if(!t.includes(e.wmoid.id)&&null!==e.wmoid.name){const r=e.wmoid.id,a=e.wmoid.name,n={};n.id=r,n.name=a,n.data=[],this.arrTer.push(n),t.push(r)}this.arrTer.map((t=>{t.id==e.wmoid.id&&t.data.push(e)}))}))}catch(t){alert("Error: "+t)}},async createFirstGraph(){const t=Object.fromEntries(new URL(window.location).searchParams.entries());if(await this.getDataAPI(),t.id){const e=r(7303).r,a=e.find((e=>e.id==t.id));if(void 0!==a){this.selectedMean=a.mean;const t=this.arrTer.find((t=>t.id==a.idTer));this.selectedTer=t,this.redrawGraph()}else this.idEx=!1}else this.selectedTer=this.arrTer[0],this.redrawGraph()}},created(){this.createFirstGraph()}},M=r(89);const L=(0,M.Z)(k,[["render",T]]);var C=L,E={components:{GraphGeoportal:C}};const P=(0,M.Z)(E,[["render",o]]);var U=P;const F=(0,a.ri)(U);F.mount("#app")},7303:function(t){t.exports=JSON.parse('{"r":[{"id":"1","idTer":"30731","mean":"t"},{"id":"2","idTer":"30731","mean":"po"},{"id":"3","idTer":"30712","mean":"t"}]}')}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,i){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var d=c(r)}for(e&&e(a);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},a=self["webpackChunk"]=self["webpackChunk"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(6252)}));a=r.O(a)})();
//# sourceMappingURL=app.53f31d5a.js.map