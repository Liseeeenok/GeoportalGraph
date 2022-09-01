(function(){"use strict";var e={347:function(e,t,r){var a=r(9242),o=r(3396);const i={class:"container mt-4 p-4 text-center border"};function s(e,t,r,a,s,l){const n=(0,o.up)("graph-geoportal");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(n)])}var l=r(7139);const n={class:"row row-cols-1 row-cols-lg-2 align-items-center justify-content-between"},d={key:0,class:"container col-lg-4"},c={class:"row row-cols-1 justify-content-center align-items-center"},p=(0,o._)("div",{class:"mb-1"}," Название графика: ",-1),u={class:"row row-cols-1 justify-content-center col-10 mb-1"},h={class:"mb-1"},g={class:"row row-cols-2 justify-content-center col-10"},b=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"red"}},null,-1),f=["oninput"],w=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"green"}},null,-1),m=["oninput"],k=(0,o._)("div",{class:"col-1 p-1 mb-1",style:{"background-color":"blue"}},null,-1),y=["oninput"],v=(0,o._)("option",{disabled:"",value:"",selected:"true"},"Выберите один из вариантов",-1),x=["value"],C={class:"row col-10 justify-content-center pe-0 ps-0 mt-2"},D=(0,o._)("div",{class:"row col-10 justify-content-center"},[(0,o._)("span",{class:"col-10"},"Вертикальные данные:")],-1),_={class:"row col-7"},O=(0,o._)("option",{disabled:"",value:""},"Выберите один из вариантов",-1),S=(0,o._)("option",{value:"t"},"Температура",-1),L=(0,o._)("option",{value:"po"},"Давление",-1),G=[O,S,L],T={class:"row row-cols-2 mt-3"},A=(0,o._)("div",{class:"col"},"Отображать с:",-1),P=(0,o._)("option",{disabled:"",value:""},"Выберите один из вариантов",-1),R=["value"],W=(0,o._)("div",{class:"col mt-3"},"по:",-1),j=(0,o._)("option",{disabled:"",value:""},"Выберите один из вариантов",-1),U=["value"],B={class:"row col-7 align-self-end mt-3"},E={key:1,class:"col-lg-12 fs-3 text"},M={key:2,class:"row align-self-end mt-3 row-cols-1 col-lg-12"},z=(0,o._)("div",null,"Ссылка на график: ",-1),$={class:"btn btn-link mt-3"};function Z(e,t,r,i,s,O){const S=(0,o.up)("Bar");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(S,{class:(0,l.C_)(!1===s.idEx?"col-lg-8":"col-lg-12"),"chart-options":this.graph.chartOptions,"chart-data":this.graph.chartData,height:s.heightGraph},null,8,["class","chart-options","chart-data","height"]),!1===s.idEx?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",c,[p,(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{placeholder:"Введите название графика","onUpdate:modelValue":t[0]||(t[0]=e=>this.selectedTitle=e)},null,512),[[a.nr,this.selectedTitle]])]),(0,o._)("div",h," Цвет графика: rgb("+(0,l.zw)(s.selectedColor.red)+","+(0,l.zw)(s.selectedColor.green)+","+(0,l.zw)(s.selectedColor.blue)+") ",1),(0,o._)("div",g,[b,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t[1]||(t[1]=e=>this.selectedColor.red=e),oninput:O.changeColor()},null,8,f),[[a.nr,this.selectedColor.red]]),w,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t[2]||(t[2]=e=>this.selectedColor.green=e),oninput:O.changeColor()},null,8,m),[[a.nr,this.selectedColor.green]]),k,(0,o.wy)((0,o._)("input",{class:"col-11 mb-1",type:"range",min:"0",max:"255",step:"1","onUpdate:modelValue":t[3]||(t[3]=e=>this.selectedColor.blue=e),oninput:O.changeColor()},null,8,y),[[a.nr,this.selectedColor.blue]])]),(0,o.wy)((0,o._)("select",{class:"col-10 mt-3",onChange:t[4]||(t[4]=e=>{O.redrawGraph(),O.changeId()}),"onUpdate:modelValue":t[5]||(t[5]=e=>s.selectedTer=e)},[v,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.arrTer,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e},(0,l.zw)(e.name),9,x)))),128))],544),[[a.bM,s.selectedTer]]),(0,o._)("div",C,[D,(0,o._)("div",_,[(0,o.wy)((0,o._)("select",{onChange:t[6]||(t[6]=e=>{O.redrawGraph(),O.changeId()}),"onUpdate:modelValue":t[7]||(t[7]=e=>s.selectedMean=e)},G,544),[[a.bM,s.selectedMean]])])]),(0,o._)("div",T,[A,(0,o.wy)((0,o._)("select",{class:"col-6",onChange:t[8]||(t[8]=e=>O.sliceLabelsGraph()),"onUpdate:modelValue":t[9]||(t[9]=e=>s.selectedFirstDate=e)},[P,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.labelsGraph,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,l.zw)(e),9,R)))),128))],544),[[a.bM,s.selectedFirstDate]]),W,(0,o.wy)((0,o._)("select",{class:"col-6 mt-3",onChange:t[10]||(t[10]=e=>O.sliceLabelsGraph()),"onUpdate:modelValue":t[11]||(t[11]=e=>s.selectedEndDate=e)},[j,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.labelsGraph,(e=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,l.zw)(e),9,U)))),128))],544),[[a.bM,s.selectedEndDate]])]),(0,o._)("div",B,[(0,o._)("button",{onClick:t[12]||(t[12]=e=>O.generationId()),class:"p-2 btn btn-outline-primary"},"Сохранить график")])])])):(0,o.kq)("",!0),null===s.idEx?((0,o.wg)(),(0,o.iD)("div",E," Графика с таким id не существует ")):(0,o.kq)("",!0),s.URLforSave?((0,o.wg)(),(0,o.iD)("div",M,[z,(0,o._)("button",$,(0,l.zw)(s.URLforSave),1)])):(0,o.kq)("",!0)])}var F=r(6265),V=r.n(F),I=r(6294),q=r(741);q.kL.register(q.Dx,q.u,q.De,q.ZL,q.uw,q.f$);var H={components:{Bar:I.$Q},data(){return{selectedFirstDate:"",selectedEndDate:"",selectedTitle:"",standartColor:{red:"13",green:"110",blue:"253"},selectedColor:{red:"",green:"",blue:""},idPage:"",idEx:void 0,selectedMean:"t",selectedTer:"",arrTer:[],iDisplayLength:3061,baseURL:"http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0",heightGraph:200,labelsGraph:[],dataGraph:[],graph:{chartData:{labels:[],datasets:[{label:"",data:[],backgroundColor:""}]},chartOptions:{responsive:!0,plugins:{title:{display:!0,text:"",font:{size:20}}}}},URLforSave:""}},methods:{changeId(){this.URLforSave=!1},redrawGraph(){let e="";const t=this.selectedTer.data,r=[],a=[];t.sort(((e,t)=>e.w_date<t.w_date?-1:e.w_date>t.w_date?1:void 0)),t.map((t=>{if(null!==t.w_date){if("t"===this.selectedMean&&null!==t.t)return e=this.selectedMean+" "+t.wmoid.name,r.push(t.w_date),void a.push(t.t);if("po"===this.selectedMean&&null!==t.po)return e=this.selectedMean+" "+t.wmoid.name,r.push(t.w_date),void a.push(t.po)}})),this.graph.chartData.datasets[0].label=e,this.labelsGraph=r,this.dataGraph=a,this.sliceLabelsGraph()},async getDataAPI(){try{const e=[],t=await V().get(this.baseURL+"&iDisplayLength="+this.iDisplayLength),r=t.data.aaData;r.map((t=>{if(!e.includes(t.wmoid.id)&&null!==t.wmoid.name){const r=t.wmoid.id,a=t.wmoid.name,o={};o.id=r,o.name=a,o.data=[],this.arrTer.push(o),e.push(r)}this.arrTer.map((e=>{e.id==t.wmoid.id&&e.data.push(t)}))}))}catch(e){alert("Error: "+e)}},async createFirstGraph(){const e=Object.fromEntries(new URL(window.location).searchParams.entries());if(e.id&&""!==e.id){this.idPage=e.id;const t=r(7303).r,a=t.find((e=>e.id==this.idPage));void 0!==a?this.graph=a.dataGraph:this.idEx=null}else await this.getDataAPI(),this.selectedColor=this.standartColor,this.idEx=!1,this.redrawGraph()},generationId(){const e={},t=`${this.selectedTer.id}${this.selectedMean}${Date.now()}`,r=this.graph;e.id=t,e.dataGraph=r,this.URLforSave=`${window.location.origin}/?id=${t}`,console.log(JSON.stringify(e))},changeColor(){this.graph.chartData.datasets[0].backgroundColor=`rgb(${this.selectedColor.red},${this.selectedColor.green},${this.selectedColor.blue}`},changeLabel(){this.graph.chartOptions.plugins.title.text=this.selectedTitle},sliceLabelsGraph(){if(""!==this.selectedFirstDate&&""!==this.selectedEndDate){const e=this.labelsGraph.indexOf(this.selectedFirstDate),t=this.labelsGraph.indexOf(this.selectedEndDate);this.graph.chartData.labels=this.labelsGraph.slice(e,t+1),this.graph.chartData.datasets[0].data=this.dataGraph.slice(e,t+1)}}},created(){this.createFirstGraph()},watch:{selectedTitle:function(){this.graph.chartOptions.plugins.title.text=this.selectedTitle}}},K=r(89);const Y=(0,K.Z)(H,[["render",Z]]);var J=Y,N={components:{GraphGeoportal:J}};const Q=(0,K.Z)(N,[["render",s]]);var X=Q;const ee=(0,a.ri)(X);ee.mount("#app")},7303:function(e){e.exports=JSON.parse('{"r":[{"id":"1","dataGraph":{"chartData":{"labels":["2020-11-01 02:00:00","2020-11-01 05:00:00","2020-11-01 08:00:00","2020-11-01 11:00:00","2020-11-01 14:00:00","2020-11-01 17:00:00","2020-11-01 20:00:00","2020-11-02 02:00:00","2020-11-02 05:00:00","2020-11-02 08:00:00","2020-11-02 11:00:00","2020-11-02 14:00:00","2020-11-02 17:00:00","2020-11-02 20:00:00","2020-11-02 23:00:00","2020-11-03 02:00:00","2020-11-03 05:00:00","2020-11-03 08:00:00","2020-11-03 11:00:00","2020-11-03 14:00:00","2020-11-03 17:00:00","2020-11-03 20:00:00","2020-11-03 23:00:00","2020-11-04 02:00:00","2020-11-04 05:00:00","2020-11-04 08:00:00","2020-11-04 11:00:00","2020-11-04 14:00:00","2020-11-04 17:00:00","2020-11-04 20:00:00","2020-11-04 23:00:00","2020-11-05 02:00:00","2020-11-05 05:00:00","2020-11-05 08:00:00","2020-11-05 11:00:00","2020-11-05 14:00:00","2020-11-05 17:00:00","2020-11-05 20:00:00","2020-11-05 23:00:00","2020-11-06 02:00:00","2020-11-06 05:00:00","2020-11-06 08:00:00","2020-11-06 11:00:00","2020-11-06 14:00:00","2020-11-06 17:00:00","2020-11-06 20:00:00","2020-11-06 23:00:00","2020-11-07 02:00:00","2020-11-07 05:00:00","2020-11-07 08:00:00","2020-11-07 11:00:00","2020-11-07 14:00:00","2020-11-07 17:00:00","2020-11-07 20:00:00","2020-11-07 23:00:00","2020-11-08 02:00:00","2020-11-08 08:00:00","2020-11-08 11:00:00","2020-11-08 14:00:00","2020-11-08 17:00:00","2020-11-08 20:00:00","2020-11-08 23:00:00","2020-11-09 02:00:00","2020-11-09 05:00:00","2020-11-09 08:00:00","2020-11-09 11:00:00","2020-11-09 14:00:00","2020-11-09 17:00:00","2020-11-09 20:00:00","2020-11-09 23:00:00","2020-11-10 02:00:00","2020-11-10 05:00:00","2020-11-10 08:00:00","2020-11-10 11:00:00","2020-11-10 14:00:00","2020-11-10 17:00:00","2020-11-10 20:00:00","2020-11-10 23:00:00","2020-11-11 02:00:00","2020-11-11 05:00:00","2020-11-11 08:00:00","2020-11-11 11:00:00","2020-11-11 14:00:00","2020-11-11 17:00:00","2020-11-11 20:00:00","2020-11-11 23:00:00","2020-11-12 02:00:00","2020-11-12 05:00:00","2020-11-12 08:00:00","2020-11-12 11:00:00","2020-11-12 14:00:00","2020-11-12 17:00:00","2020-11-12 20:00:00","2020-11-12 23:00:00","2020-11-13 02:00:00","2020-11-13 05:00:00","2020-11-13 08:00:00","2020-11-13 11:00:00","2020-11-13 14:00:00","2020-11-13 17:00:00","2020-11-13 20:00:00","2020-11-13 23:00:00","2020-11-14 02:00:00","2020-11-14 05:00:00","2020-11-14 08:00:00","2020-11-14 11:00:00","2020-11-14 14:00:00","2020-11-14 17:00:00","2020-11-14 20:00:00","2020-11-14 23:00:00","2020-11-15 02:00:00","2020-11-15 05:00:00","2020-11-15 08:00:00","2020-11-15 11:00:00","2020-11-15 14:00:00","2020-11-15 17:00:00","2020-11-15 20:00:00","2020-11-15 23:00:00","2020-11-16 02:00:00","2020-11-16 05:00:00","2020-11-16 08:00:00","2020-11-16 11:00:00","2020-11-16 14:00:00","2020-11-16 17:00:00","2020-11-16 20:00:00","2020-11-16 23:00:00"],"datasets":[{"label":"t Усолье-Сибирское","data":[-5,-8,-10,-8,-7,-8,-13,-12,-14,-14,-9,-2,0,-3,-4,-5,-8,-10,-6,-2,-2,-4,-5,-4,-3,-4,-3,-2,-2,-2,-3,-6,-9,-10,-3,1,0,-3,-3,-1,-2,-2,1,0,-3,-6,-6,-7,-7,-8,-5,-3,-3,-4,-5,-5,-4,0,6,6,0,-1,-4,-6,-8,0,9,8,1,-4,-6,-8,-7,0,5,2,-3,-4,-2,-2,-2,0,2,0,-4,-7,-7,-7,-6,-5,4,4,-1,-2,-3,-3,0,4,8,3,1,0,1,-1,-2,-2,0,-2,-8,-10,-11,-11,-13,-8,-4,-5,-5,-5,-5,-6,-6,-6,-4,-5,-9,-12],"backgroundColor":"rgb(13,110,253"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}},{"id":"2","dataGraph":{"chartData":{"labels":["2020-11-01 20:00:00","2020-11-01 23:00:00","2020-11-02 02:00:00","2020-11-02 05:00:00","2020-11-02 08:00:00","2020-11-02 11:00:00","2020-11-02 14:00:00","2020-11-02 17:00:00","2020-11-02 20:00:00","2020-11-02 23:00:00","2020-11-03 02:00:00","2020-11-03 05:00:00","2020-11-03 08:00:00","2020-11-03 11:00:00","2020-11-03 14:00:00","2020-11-03 17:00:00","2020-11-03 20:00:00","2020-11-03 23:00:00","2020-11-04 02:00:00","2020-11-04 05:00:00","2020-11-04 08:00:00","2020-11-04 11:00:00","2020-11-04 14:00:00","2020-11-04 17:00:00","2020-11-04 20:00:00","2020-11-04 23:00:00","2020-11-05 02:00:00","2020-11-05 05:00:00","2020-11-05 08:00:00","2020-11-05 11:00:00","2020-11-05 14:00:00","2020-11-05 17:00:00","2020-11-05 20:00:00","2020-11-05 23:00:00","2020-11-06 02:00:00","2020-11-06 05:00:00","2020-11-06 08:00:00","2020-11-06 11:00:00"],"datasets":[{"label":"t Усть-Баргузин","data":[-4.4,-5.5,-6,-6,-6.5,-6,-4.3,-4.7,-5,-6.3,-9.4,-10.3,-11,-8.3,-5.3,-4.3,-3.6,-2.8,-5.2,-6.5,-6.8,-5.7,-2.8,-2.3,-2.2,0.5,0.8,0.1,-2.1,-0.2,0.5,-0.5,-1.4,-1.6,0.1,-0.1,0.7,1.7],"backgroundColor":"rgb(238,209,106"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}},{"id":"3","dataGraph":{"chartData":{"labels":["2020-11-12 17:00:00","2020-11-12 20:00:00","2020-11-12 23:00:00","2020-11-13 02:00:00","2020-11-13 05:00:00","2020-11-13 08:00:00","2020-11-13 11:00:00","2020-11-13 14:00:00","2020-11-13 17:00:00","2020-11-13 20:00:00","2020-11-13 23:00:00","2020-11-14 02:00:00","2020-11-14 05:00:00","2020-11-14 08:00:00","2020-11-14 11:00:00","2020-11-14 14:00:00","2020-11-14 17:00:00","2020-11-14 20:00:00","2020-11-14 23:00:00","2020-11-15 02:00:00","2020-11-15 05:00:00","2020-11-15 08:00:00","2020-11-15 11:00:00","2020-11-15 14:00:00","2020-11-15 17:00:00","2020-11-15 20:00:00","2020-11-15 23:00:00","2020-11-16 02:00:00","2020-11-16 05:00:00","2020-11-16 08:00:00","2020-11-16 11:00:00","2020-11-16 14:00:00","2020-11-16 17:00:00","2020-11-16 20:00:00","2020-11-16 23:00:00"],"datasets":[{"label":"po Тулун","data":["715.6","716.1","716.0","714.4","712.7","710.7","710.5","714.8","717.7","721.3","723.4","724.6","725.5","726.0","726.1","725.7","725.4","725.3","724.5","723.8","723.1","723.1","723.2","723.2","723.2","723.6","723.4","722.9","722.8","722.7","722.8","722.6","722.3","722.8","722.6"],"backgroundColor":"rgb(13,110,0"}]},"chartOptions":{"responsive":true,"plugins":{"title":{"display":true,"text":"Давление Тулун 12-16","font":{"size":20}}},"scales":{"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"},"y":{"axis":"y","type":"linear","beginAtZero":true,"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","grace":0,"grid":{"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"}}}}}]}')}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,n=0;n<a.length;n++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],l=a[1],n=a[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(n)var c=n(r)}for(t&&t(a);d<s.length;d++)i=s[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunk"]=self["webpackChunk"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(347)}));a=r.O(a)})();
//# sourceMappingURL=app.bf3f6182.js.map