(function(){"use strict";var e={5072:function(e,t,a){var r=a(9242),o=a(3396);const i={class:"container mt-4 p-4 text-center border"};function s(e,t,a,r,s,l){const n=(0,o.up)("graph-geoportal");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(n)])}var l=a(7139);const n={class:"row row-cols-1 align-items-center justify-content-between"},d={key:0,class:"container col-lg-3"},c={class:"row row-cols-1 justify-content-center align-items-center"},p=(0,o._)("div",{class:"mb-1"}," Название графика: ",-1),u={class:"row row-cols-1 justify-content-center col-12 mb-1"},h={class:"row row-cols-2 mt-1"},g=(0,o._)("div",{class:"col pe-0 ps-0"},"Отображать с:",-1),b=(0,o._)("option",{disabled:"",value:""},"Выберите дату",-1),f=["value"],m=(0,o._)("div",{class:"col mt-1"},"по:",-1),y=(0,o._)("option",{disabled:"",value:""},"Выберите дату",-1),w=["value"],k={class:"row col-8 align-self-end mt-3"},v={class:"row col-8 align-self-end mt-3"},x={class:"row col-8 align-self-end mt-3"},C=(0,o._)("option",{disabled:"",value:""},"Выберите вид графика",-1),D=(0,o._)("option",{value:1},"Линейный график",-1),_=(0,o._)("option",{value:2},"Столбчатый график",-1),O=[C,D,_],G={key:1,class:"container row pe-0 ps-0 justify-content-center"},S={class:"mb-1 pt-2"},L=(0,o._)("br",null,null,-1),j={class:"row row-cols-2 justify-content-center col-12"},T=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"red"}},null,-1),W=["onUpdate:modelValue","oninput"],A=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"green"}},null,-1),U=["onUpdate:modelValue","oninput"],P=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"blue"}},null,-1),R=["onUpdate:modelValue","oninput"],z=["onChange","onUpdate:modelValue"],B=(0,o._)("option",{disabled:"",value:{data:""}},"Выберите территорию",-1),E=["value"],V={class:"row col-10 justify-content-center pe-0 ps-0 mt-1"},M=(0,o._)("div",{class:"row col-12 justify-content-center"},[(0,o._)("span",{class:"col-12"},"Вертикальные данные:")],-1),H={class:"row col-10 mt-1 pb-2"},Z=["onChange","onUpdate:modelValue"],$=(0,o._)("option",{disabled:"",value:""},"Выберите параметр",-1),F=["value"],I={class:"row col-10 justify-content-center pe-0 ps-0 mt-1"},J=(0,o._)("div",{class:"row col-12 justify-content-center"},[(0,o._)("span",{class:"col-12"},"Горизонтальные данные:")],-1),N={class:"row col-10 mt-1 pb-2"},K=["onChange","onUpdate:modelValue"],Y=(0,o._)("option",{disabled:"",value:""},"Выберите параметр",-1),Q=["value"],q={key:2,class:"col-lg-12 fs-3 text"},X={key:3,class:"row align-self-end mt-3 row-cols-1 col-lg-12"},ee=(0,o._)("div",null,"Ссылка на график: ",-1),te={class:"btn btn-link mt-3"};function ae(e,t,a,i,s,C){const D=(0,o.up)("Line"),_=(0,o.up)("Bar");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(D,{style:(0,l.j5)("1"==s.typeGraph?"display: block":"display: none"),class:(0,l.C_)(!1===s.idEx?"col-lg-9":"col-lg-12"),"chart-options":this.graph.chartOptions,"chart-data":this.graph.chartData,height:s.heightGraph},null,8,["style","class","chart-options","chart-data","height"]),(0,o.Wm)(_,{style:(0,l.j5)("2"==s.typeGraph?"display: block":"display: none"),class:(0,l.C_)(!1===s.idEx?"col-lg-9":"col-lg-12"),"chart-options":this.graph.chartOptions,"chart-data":this.graph.chartData,height:s.heightGraph},null,8,["style","class","chart-options","chart-data","height"]),!1===s.idEx?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",c,[p,(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{placeholder:"Введите название графика","onUpdate:modelValue":t[0]||(t[0]=e=>this.selectedTitle=e)},null,512),[[r.nr,this.selectedTitle]])]),(0,o._)("div",h,[g,(0,o.wy)((0,o._)("select",{class:"col-6",onChange:t[1]||(t[1]=e=>C.sliceLabelsGraph()),"onUpdate:modelValue":t[2]||(t[2]=e=>s.selectedFirstDate=e)},[b,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrDateGraph,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,l.zw)(e),9,f)))),128))],544),[[r.bM,s.selectedFirstDate]]),m,(0,o.wy)((0,o._)("select",{class:"col-6 mt-1",onChange:t[3]||(t[3]=e=>C.sliceLabelsGraph()),"onUpdate:modelValue":t[4]||(t[4]=e=>s.selectedEndDate=e)},[y,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrDateGraph,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,l.zw)(e),9,w)))),128))],544),[[r.bM,s.selectedEndDate]])]),(0,o._)("div",k,[(0,o._)("button",{onClick:t[5]||(t[5]=e=>C.addGraph()),class:"p-2 btn btn-outline-primary"},"Добавить график")]),(0,o._)("div",v,[(0,o._)("button",{onClick:t[6]||(t[6]=e=>C.generationId()),class:"p-2 btn btn-outline-primary"},"Сохранить график")]),(0,o._)("div",x,[(0,o.wy)((0,o._)("select",{class:"col-12 mt-1","onUpdate:modelValue":t[7]||(t[7]=e=>s.typeGraph=e)},O,512),[[r.bM,s.typeGraph]])])])])):(0,o.kq)("",!0),!1===s.idEx?((0,o.wg)(),(0,o.iD)("div",G,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.countGraph,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e-1,class:"row justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3 border rounded ms-3 mt-1 pe-1 ps-1"},[(0,o._)("div",S,[(0,o.Uk)(" Цвет графика №"+(0,l.zw)(e)+":",1),L,(0,o.Uk)(" rgb("+(0,l.zw)(s.selectedColor[e-1].red)+","+(0,l.zw)(s.selectedColor[e-1].green)+","+(0,l.zw)(s.selectedColor[e-1].blue)+") ",1)]),(0,o._)("div",j,[T,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1 pe-0 ps-0",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t=>this.selectedColor[e-1].red=t,oninput:C.changeColor(e-1)},null,8,W),[[r.nr,this.selectedColor[e-1].red]]),A,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1 pe-0 ps-0",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t=>this.selectedColor[e-1].green=t,oninput:C.changeColor(e-1)},null,8,U),[[r.nr,this.selectedColor[e-1].green]]),P,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1 pe-0 ps-0",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t=>this.selectedColor[e-1].blue=t,oninput:C.changeColor(e-1)},null,8,R),[[r.nr,this.selectedColor[e-1].blue]])]),(0,o.wy)((0,o._)("select",{class:"col-12 mt-1",onChange:t=>{C.redrawGraph(e-1),C.changeId()},"onUpdate:modelValue":t=>s.selectedTer[e-1]=t},[B,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrTer,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e},(0,l.zw)(e.name),9,E)))),128))],40,z),[[r.bM,s.selectedTer[e-1]]]),(0,o._)("div",V,[M,(0,o._)("div",H,[(0,o.wy)((0,o._)("select",{onChange:t=>{C.redrawGraph(e-1),C.changeId()},"onUpdate:modelValue":t=>s.selectedMean[e-1].data=t},[$,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrQuality,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.fieldname,value:e.fieldname},(0,l.zw)(e.title),9,F)))),128))],40,Z),[[r.bM,s.selectedMean[e-1].data]])])]),(0,o._)("div",I,[J,(0,o._)("div",N,[(0,o.wy)((0,o._)("select",{onChange:t=>{C.redrawGraph(e-1),C.changeId()},"onUpdate:modelValue":t=>s.selectedHorizontal[e-1].data=t},[Y,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrQuality,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.fieldname,value:e.fieldname},(0,l.zw)(e.title),9,Q)))),128))],40,K),[[r.bM,s.selectedHorizontal[e-1].data]])])])])))),128))])):(0,o.kq)("",!0),null===s.idEx?((0,o.wg)(),(0,o.iD)("div",q," Графика с таким id не существует ")):(0,o.kq)("",!0),s.URLforSave?((0,o.wg)(),(0,o.iD)("div",X,[ee,(0,o._)("button",te,(0,l.zw)(s.URLforSave),1)])):(0,o.kq)("",!0)])}var re=a(6265),oe=a.n(re),ie=a(6294),se=a(741);se.kL.register(se.Dx,se.u,se.De,se.ZL,se.uw,se.f$,se.jn,se.od,se.Gu);var le={components:{Bar:ie.$Q,Line:ie.x1},data(){return{typeGraph:1,countGraph:1,selectedFirstDate:"",selectedEndDate:"",selectedTitle:"",standartColor:{red:"13",green:"110",blue:"253"},selectedColor:[{red:"",green:"",blue:""}],idPage:"",idEx:void 0,selectedMean:[{data:""}],selectedHorizontal:[{data:""}],selectedTer:[{data:""}],arrTer:[],iDisplayLength:3061,baseURL:"http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0",arrQuality:[],heightGraph:200,arrDateGraph:[],labelsGraph:[],dataGraph:[[]],graph:{chartData:{labels:[],datasets:[{label:"",data:[],fill:!0,backgroundColor:""}]},chartOptions:{responsive:!0,plugins:{title:{display:!0,text:"",font:{size:20}}}}},URLforSave:""}},methods:{changeId(){this.URLforSave=!1},redrawGraph(e){let t="";const a=this.selectedTer[e].data,r=[],o=[],i=[],s=this.selectedMean[e].data,l=this.selectedHorizontal[e].data;a.sort(((e,t)=>e.w_date<t.w_date?-1:e.w_date>t.w_date?1:void 0)),a.map((a=>{if(null!==a.w_date&&null!==a[s]&&null!==a[l])return i.push(a.w_date),t=this.selectedMean[e].data+" "+a.wmoid.name,r.push(a[l]),void o.push(a[s])})),this.graph.chartData.datasets[e].label=t,this.labelsGraph=r,this.arrDateGraph=i,this.dataGraph[e]=o,this.sliceLabelsGraph()},async getDataAPI(){try{const e=[],t=await oe().get("http://cris.icc.ru/dataset/list?f=100&f_id=1875"),a=JSON.parse(t.data.aaData[0].JSON).columns;a.forEach((e=>{e.visible&&this.arrQuality.push(e)}));const r=await oe().get(this.baseURL+"&iDisplayLength="+this.iDisplayLength),o=r.data.aaData;o.map((t=>{if(!e.includes(t.wmoid.id)&&null!==t.wmoid.name){const a=t.wmoid.id,r=t.wmoid.name,o={};o.id=a,o.name=r,o.data=[],this.arrTer.push(o),e.push(a)}this.arrTer.map((e=>{e.id==t.wmoid.id&&e.data.push(t)}))}))}catch(e){alert("Error: "+e)}},async createFirstGraph(){const e=Object.fromEntries(new URL(window.location).searchParams.entries());if(e.id&&""!==e.id){this.idPage=e.id;const t=a(7303).r,r=t.find((e=>e.id==this.idPage));void 0!==r?this.graph=r.dataGraph:this.idEx=null}else this.idEx=!1,this.selectedColor[0]=JSON.parse(JSON.stringify(this.standartColor)),await this.getDataAPI()},generationId(){const e={},t=`${this.selectedTer[0].id}${this.selectedMean[0].data}${Date.now()}`,a=this.graph;e.id=t,e.dataGraph=a,this.URLforSave=`${window.location.origin}/?id=${t}`,console.log(JSON.stringify(e))},changeColor(e){this.graph.chartData.datasets[e].backgroundColor=`rgba(${this.selectedColor[e].red},${this.selectedColor[e].green},${this.selectedColor[e].blue},0.5`},changeLabel(){this.graph.chartOptions.plugins.title.text=this.selectedTitle},sliceLabelsGraph(){if(""!==this.selectedFirstDate&&""!==this.selectedEndDate){const e=this.arrDateGraph.indexOf(this.selectedFirstDate),t=this.arrDateGraph.indexOf(this.selectedEndDate);this.graph.chartData.labels=this.labelsGraph.slice(e,t+1),this.dataGraph.forEach(((a,r)=>this.graph.chartData.datasets[r].data=a.slice(e,t+1))),console.log(this.graph)}},addGraph(){this.selectedColor[this.countGraph]=JSON.parse(JSON.stringify(this.standartColor)),this.selectedMean.push({data:""}),this.selectedTer.push({data:""}),this.selectedHorizontal.push({data:""}),this.dataGraph[this.countGraph]=[],this.graph.chartData.datasets.push({fill:!0,label:"",data:[],backgroundColor:""}),this.countGraph++},changeTypeGraph(e){this.typeGraph=e}},created(){this.createFirstGraph()},watch:{selectedTitle:function(){this.graph.chartOptions.plugins.title.text=this.selectedTitle}}},ne=a(89);const de=(0,ne.Z)(le,[["render",ae]]);var ce=de,pe={components:{GraphGeoportal:ce}};const ue=(0,ne.Z)(pe,[["render",s]]);var he=ue;const ge=(0,r.ri)(he);ge.mount("#app")},7303:function(e){e.exports=JSON.parse('{"r":[{"id":"1","dataGraph":{"chartData":{"labels":["2020-11-01 02:00:00","2020-11-01 05:00:00","2020-11-01 08:00:00","2020-11-01 11:00:00","2020-11-01 14:00:00","2020-11-01 17:00:00","2020-11-01 20:00:00","2020-11-02 02:00:00","2020-11-02 05:00:00","2020-11-02 08:00:00","2020-11-02 11:00:00","2020-11-02 14:00:00","2020-11-02 17:00:00","2020-11-02 20:00:00","2020-11-02 23:00:00","2020-11-03 02:00:00","2020-11-03 05:00:00","2020-11-03 08:00:00","2020-11-03 11:00:00","2020-11-03 14:00:00","2020-11-03 17:00:00","2020-11-03 20:00:00","2020-11-03 23:00:00","2020-11-04 02:00:00","2020-11-04 05:00:00","2020-11-04 08:00:00","2020-11-04 11:00:00","2020-11-04 14:00:00","2020-11-04 17:00:00","2020-11-04 20:00:00","2020-11-04 23:00:00","2020-11-05 02:00:00","2020-11-05 05:00:00","2020-11-05 08:00:00","2020-11-05 11:00:00","2020-11-05 14:00:00","2020-11-05 17:00:00","2020-11-05 20:00:00","2020-11-05 23:00:00","2020-11-06 02:00:00","2020-11-06 05:00:00","2020-11-06 08:00:00","2020-11-06 11:00:00","2020-11-06 14:00:00","2020-11-06 17:00:00","2020-11-06 20:00:00","2020-11-06 23:00:00","2020-11-07 02:00:00","2020-11-07 05:00:00","2020-11-07 08:00:00","2020-11-07 11:00:00","2020-11-07 14:00:00","2020-11-07 17:00:00","2020-11-07 20:00:00","2020-11-07 23:00:00","2020-11-08 02:00:00","2020-11-08 08:00:00","2020-11-08 11:00:00","2020-11-08 14:00:00","2020-11-08 17:00:00","2020-11-08 20:00:00","2020-11-08 23:00:00","2020-11-09 02:00:00","2020-11-09 05:00:00","2020-11-09 08:00:00","2020-11-09 11:00:00","2020-11-09 14:00:00","2020-11-09 17:00:00","2020-11-09 20:00:00","2020-11-09 23:00:00","2020-11-10 02:00:00","2020-11-10 05:00:00","2020-11-10 08:00:00","2020-11-10 11:00:00","2020-11-10 14:00:00","2020-11-10 17:00:00","2020-11-10 20:00:00","2020-11-10 23:00:00","2020-11-11 02:00:00","2020-11-11 05:00:00","2020-11-11 08:00:00","2020-11-11 11:00:00","2020-11-11 14:00:00","2020-11-11 17:00:00","2020-11-11 20:00:00","2020-11-11 23:00:00","2020-11-12 02:00:00","2020-11-12 05:00:00","2020-11-12 08:00:00","2020-11-12 11:00:00","2020-11-12 14:00:00","2020-11-12 17:00:00","2020-11-12 20:00:00","2020-11-12 23:00:00","2020-11-13 02:00:00","2020-11-13 05:00:00","2020-11-13 08:00:00","2020-11-13 11:00:00","2020-11-13 14:00:00","2020-11-13 17:00:00","2020-11-13 20:00:00","2020-11-13 23:00:00","2020-11-14 02:00:00","2020-11-14 05:00:00","2020-11-14 08:00:00","2020-11-14 11:00:00","2020-11-14 14:00:00","2020-11-14 17:00:00","2020-11-14 20:00:00","2020-11-14 23:00:00","2020-11-15 02:00:00","2020-11-15 05:00:00","2020-11-15 08:00:00","2020-11-15 11:00:00","2020-11-15 14:00:00","2020-11-15 17:00:00","2020-11-15 20:00:00","2020-11-15 23:00:00","2020-11-16 02:00:00","2020-11-16 05:00:00","2020-11-16 08:00:00","2020-11-16 11:00:00","2020-11-16 14:00:00","2020-11-16 17:00:00","2020-11-16 20:00:00","2020-11-16 23:00:00"],"datasets":[{"label":"t Усолье-Сибирское","data":[-5,-8,-10,-8,-7,-8,-13,-12,-14,-14,-9,-2,0,-3,-4,-5,-8,-10,-6,-2,-2,-4,-5,-4,-3,-4,-3,-2,-2,-2,-3,-6,-9,-10,-3,1,0,-3,-3,-1,-2,-2,1,0,-3,-6,-6,-7,-7,-8,-5,-3,-3,-4,-5,-5,-4,0,6,6,0,-1,-4,-6,-8,0,9,8,1,-4,-6,-8,-7,0,5,2,-3,-4,-2,-2,-2,0,2,0,-4,-7,-7,-7,-6,-5,4,4,-1,-2,-3,-3,0,4,8,3,1,0,1,-1,-2,-2,0,-2,-8,-10,-11,-11,-13,-8,-4,-5,-5,-5,-5,-6,-6,-6,-4,-5,-9,-12],"backgroundColor":"rgb(13,110,253"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}},{"id":"2","dataGraph":{"chartData":{"labels":["2020-11-01 20:00:00","2020-11-01 23:00:00","2020-11-02 02:00:00","2020-11-02 05:00:00","2020-11-02 08:00:00","2020-11-02 11:00:00","2020-11-02 14:00:00","2020-11-02 17:00:00","2020-11-02 20:00:00","2020-11-02 23:00:00","2020-11-03 02:00:00","2020-11-03 05:00:00","2020-11-03 08:00:00","2020-11-03 11:00:00","2020-11-03 14:00:00","2020-11-03 17:00:00","2020-11-03 20:00:00","2020-11-03 23:00:00","2020-11-04 02:00:00","2020-11-04 05:00:00","2020-11-04 08:00:00","2020-11-04 11:00:00","2020-11-04 14:00:00","2020-11-04 17:00:00","2020-11-04 20:00:00","2020-11-04 23:00:00","2020-11-05 02:00:00","2020-11-05 05:00:00","2020-11-05 08:00:00","2020-11-05 11:00:00","2020-11-05 14:00:00","2020-11-05 17:00:00","2020-11-05 20:00:00","2020-11-05 23:00:00","2020-11-06 02:00:00","2020-11-06 05:00:00","2020-11-06 08:00:00","2020-11-06 11:00:00"],"datasets":[{"label":"t Усть-Баргузин","data":[-4.4,-5.5,-6,-6,-6.5,-6,-4.3,-4.7,-5,-6.3,-9.4,-10.3,-11,-8.3,-5.3,-4.3,-3.6,-2.8,-5.2,-6.5,-6.8,-5.7,-2.8,-2.3,-2.2,0.5,0.8,0.1,-2.1,-0.2,0.5,-0.5,-1.4,-1.6,0.1,-0.1,0.7,1.7],"backgroundColor":"rgb(238,209,106"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}},{"id":"3","dataGraph":{"chartData":{"labels":["2020-11-12 17:00:00","2020-11-12 20:00:00","2020-11-12 23:00:00","2020-11-13 02:00:00","2020-11-13 05:00:00","2020-11-13 08:00:00","2020-11-13 11:00:00","2020-11-13 14:00:00","2020-11-13 17:00:00","2020-11-13 20:00:00","2020-11-13 23:00:00","2020-11-14 02:00:00","2020-11-14 05:00:00","2020-11-14 08:00:00","2020-11-14 11:00:00","2020-11-14 14:00:00","2020-11-14 17:00:00","2020-11-14 20:00:00","2020-11-14 23:00:00","2020-11-15 02:00:00","2020-11-15 05:00:00","2020-11-15 08:00:00","2020-11-15 11:00:00","2020-11-15 14:00:00","2020-11-15 17:00:00","2020-11-15 20:00:00","2020-11-15 23:00:00","2020-11-16 02:00:00","2020-11-16 05:00:00","2020-11-16 08:00:00","2020-11-16 11:00:00","2020-11-16 14:00:00","2020-11-16 17:00:00","2020-11-16 20:00:00","2020-11-16 23:00:00"],"datasets":[{"label":"po Тулун","data":["715.6","716.1","716.0","714.4","712.7","710.7","710.5","714.8","717.7","721.3","723.4","724.6","725.5","726.0","726.1","725.7","725.4","725.3","724.5","723.8","723.1","723.1","723.2","723.2","723.2","723.6","723.4","722.9","722.8","722.7","722.8","722.6","722.3","722.8","722.6"],"backgroundColor":"rgb(13,110,0"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"Давление Тулун 12-16","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}},{"id":"4","dataGraph":{"chartData":{"labels":["2020-11-04 20:00:00","2020-11-04 23:00:00","2020-11-05 02:00:00","2020-11-05 05:00:00","2020-11-05 08:00:00","2020-11-05 11:00:00","2020-11-05 14:00:00","2020-11-05 17:00:00","2020-11-05 20:00:00","2020-11-05 23:00:00","2020-11-06 02:00:00","2020-11-06 05:00:00","2020-11-06 08:00:00","2020-11-06 11:00:00","2020-11-06 14:00:00","2020-11-06 17:00:00","2020-11-06 20:00:00","2020-11-06 23:00:00","2020-11-07 02:00:00","2020-11-07 05:00:00","2020-11-07 08:00:00","2020-11-07 11:00:00","2020-11-07 14:00:00","2020-11-07 17:00:00","2020-11-07 20:00:00","2020-11-07 23:00:00"],"datasets":[{"label":"t Горячинск","data":[-1.3,-0.9,-0.7,0,-1.3,-1,0.1,-0.2,-1.9,-1.3,0.3,-0.8,0.8,1.6,2,-0.7,-1.8,-3.6,-5.4,-6.2,-6.3,-5.4,-4.7,-4.3,-5.4,-6.6],"backgroundColor":"rgb(13,110,253"},{"label":"t Бабушкин","data":[0.7,-0.4,-0.2,-0.3,-1.7,0.6,1.7,1.7,1.4,-1.2,-0.9,1.7,0.3,0.1,2.5,0.5,-1.9,-3,-3.5,-4.3,-4.5,-3.7,-2.3,-2.2,-3.8,-4.5],"backgroundColor":"rgb(13,234,57"},{"label":"t Усолье-Сибирское","data":[-3,-6,-9,-10,-3,1,0,-3,-3,-1,-2,-2,1,0,-3,-6,-6,-7,-7,-8,-5,-3,-3,-4,-5,-5],"backgroundColor":"rgb(255,110,57"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"Какой-то график","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}}]}')}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,i){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,n=0;n<r.length;n++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[n])}))?r.splice(n--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],l=r[1],n=r[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(n)var c=n(a)}for(t&&t(r);d<s.length;d++)i=s[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},r=self["webpackChunk"]=self["webpackChunk"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5072)}));r=a.O(r)})();
//# sourceMappingURL=app.9bebe1b2.js.map