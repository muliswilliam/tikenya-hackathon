(this["webpackJsonptikenya-hackathon"]=this["webpackJsonptikenya-hackathon"]||[]).push([[0],{154:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(79),s=n.n(c),r=(n(184),n(39)),o=(n(120),n(185),n(2)),l=function(e){var t=e.loading,n=e.totalAid,a=e.totalCases,i=e.totalDeaths,c=e.totalRecovered;return Object(o.jsxs)("div",{className:"header pt-2",children:[Object(o.jsx)("div",{className:"columns",children:Object(o.jsx)("div",{className:"column is-12 has-text-centered is-flex is-align-items-center",children:Object(o.jsx)("h1",{className:"header__title is-uppercase",children:"Covid-19 Aid Tracker"})})}),!t&&Object(o.jsxs)("div",{className:"columns is-flex is-align-items-center",children:[Object(o.jsx)("div",{className:"column is-5",children:Object(o.jsxs)("div",{className:"is-flex is-align-items-center is-justify-content-center ml-6",children:[Object(o.jsx)("h3",{className:"header__total-aid is-uppercase mr-4",children:"Total Aid"}),Object(o.jsxs)("h4",{className:"header__total-aid-value",children:[n," "]})]})}),Object(o.jsx)("div",{className:"header__vertical-line"}),Object(o.jsx)("div",{className:"column is-7",children:Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsxs)("div",{className:"column is-flex is-align-items-center",children:[Object(o.jsx)("h6",{className:"header__cases is-uppercase",children:"Confirmed Cases"}),Object(o.jsx)("h5",{className:"header__cases-value",children:a})]}),Object(o.jsxs)("div",{className:"column is-flex is-align-items-center",children:[Object(o.jsx)("h6",{className:"header__cases is-uppercase",children:"Confirmed Deaths"}),Object(o.jsx)("h5",{className:"header__cases-value",children:i})]}),Object(o.jsxs)("div",{className:"column is-flex is-align-items-center",children:[Object(o.jsx)("h6",{className:"header__cases is-uppercase",children:"Confirmed Recoveries"}),Object(o.jsx)("h5",{className:"header__cases-value header__cases-value--success ",children:c})]})]})})]})]})},d=n(14),u=n(43),j=n(329),m=n(171),b=n(172),h=n(93),f=n(175),v=n(169),p=n(81),x=n(82),O=n(83),g=n(89),y=(n(187),function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props,t=e.menuItems,n=e.activeMenuItem,a=e.changeActiveMenuItem;return Object(o.jsx)("div",{className:"sidemenu",children:Object(o.jsx)("aside",{className:"menu",children:Object(o.jsx)("ul",{className:"menu-list",children:t.map((function(e){return Object(o.jsx)("li",{onClick:function(){return a(e.id)},children:Object(o.jsx)("a",{className:e.id===n?"is-active":"",children:e.name})},e.id)}))})})})}}]),n}(a.Component));y.defaultProps={menuItems:[],activeIndex:null};var _=n(67),N=n.n(_);N.a.register("locale","us",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"K",million:"Mn",billion:"Bn",trillion:"Tn"},ordinal:function(e){return 1===e?"er":"\xe8me"},currency:{symbol:"$"}});var k=["ngo","private","international_organization"],w={ngo:["E.U",,"Kalonzo Musyoka Foundation",""],private:["Zhejiang Business Association","Communications Authority of Kenya","Coca Cola Foundation","Broadway Group of Companies"],ing:["GoK","US Embassy","Embassy of Germany","U.S. Government","Slovakian Republic","Japan Government"]},C=function(e){return e.filter((function(e){return""!==e.amount_pledged}))},M=function(e){return N.a.locale("us"),N()(e).format("0,0.00 a")},L=function(e){return N()(e).format("0,0")},T=["#2f7ed8","#0d233a","#8bbc21","#910000","#1aadce","#492970","#f28f43","#77a1e5","#c42525","#a6c96a"],A=(n(188),{fill:"#073b4c",width:1,opacity:.5}),I={fill:"#073b4c",fontSize:13,fontWeight:500,fontFamily:"Roboto"},S=function(e){var t=e.x,n=e.y,a=e.payload;return Object(o.jsx)("g",{transform:"translate(".concat(t,",").concat(n,")"),children:Object(o.jsx)("text",{x:0,y:-10,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",style:I,children:a.value})})},D=function(e){var t=e.map((function(e){return e.amount})),n=Math.max.apply(Math,Object(u.a)(t)),a=Math.min.apply(Math,Object(u.a)(t));return Object(o.jsxs)(j.a,{width:1e3,height:450,data:e,margin:{top:5,right:30,left:20,bottom:100},barSize:30,children:[Object(o.jsx)(m.a,{dataKey:"name",tickLine:!1,axisLine:A,tick:Object(o.jsx)(S,{}),padding:{left:0},interval:0}),Object(o.jsx)(b.a,{type:"number",tickFormatter:function(e){return M(e)},padding:{top:50},axisLine:A,tick:I,domain:[a-1e3,n]}),Object(o.jsx)(h.a,{formatter:function(e,t,n){return M(e)},cursor:{fill:"transparent"}}),Object(o.jsx)(f.a,{dataKey:"amount",fill:"#118ab2",children:Object(o.jsx)(v.a,{dataKey:"formattedAmount",position:"top",fill:"#118ab2"})})]})},F=function(e){var t=e.covidAid,n=e.loading,a=i.a.useState(0),c=Object(d.a)(a,2),s=c[0],r=c[1],l=[{id:0,name:"Non Govt Organizations (NGOs)"},{id:1,name:"Private Sector"},{id:2,name:"Governments"}],u=i.a.useMemo((function(){return t.map((function(e,t){var n,a=(null!==(n=e.donor)&&void 0!==n?n:"").toLowerCase();return w.ngo.map((function(e){return e.toLowerCase()})).includes(a)&&(e.donor_type=k[0]),w.private.map((function(e){return e.toLowerCase()})).includes(a)&&(e.donor_type=k[1]),w.ing.map((function(e){return e.toLowerCase()})).includes(a)&&(e.donor_type=k[2]),e}))}),[t]),j=i.a.useMemo((function(){return e=s,C(u).filter((function(t){return t.donor_type===k[e]})).filter((function(e){return Number(e.amount_pledged)})).map((function(e){return{name:e.donor,amount:e.amount_pledged,formattedAmount:M(e.amount_pledged)}}));var e}),[s,u]),m=i.a.useMemo((function(){return l[s].name}),[s]);return n?Object(o.jsx)("button",{className:"button is-loading",children:"Loading"}):Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-one-quarter",children:Object(o.jsx)(y,{menuItems:l,activeMenuItem:s,changeActiveMenuItem:function(e){r(e)}})}),Object(o.jsxs)("div",{className:"column is-three-quarters mt-6",children:[Object(o.jsx)("p",{className:"visualization__title ml-6 pb-4",children:m}),Object(o.jsx)("div",{className:"visualization__chart-area",children:D(j)})]})]})},z=function(e){var t=e.tab.name,n=e.activeTab,a=e.changeActiveTab;return Object(o.jsx)("li",{className:t.toLowerCase()===n?"is-active":"",onClick:function(){return a(t)},children:Object(o.jsx)("a",{children:t})})},K=(n(323),function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props,t=e.activeTab,n=e.changeActiveTab;return Object(o.jsx)("div",{className:"category-tab",children:Object(o.jsx)("div",{className:"tabs is-small is-centered",children:Object(o.jsx)("ul",{children:this.props.tabList.map((function(e){return Object(o.jsx)(z,{tab:e,activeTab:t,changeActiveTab:n},e.name)}))})})})}}]),n}(a.Component)),B=(n(324),n(115)),E=function(e){return Object(o.jsxs)("svg",Object(B.a)(Object(B.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",xmlSpace:"preserve"},e),{},{children:[Object(o.jsx)("circle",{fill:"none",stroke:"#e74c3c",strokeWidth:4,cx:50,cy:50,r:44,style:{opacity:.5}}),Object(o.jsx)("circle",{fill:"#e74c3c",stroke:"#e74c3c",strokeWidth:3,cx:8,cy:54,r:6,children:Object(o.jsx)("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 48",to:"360 50 52",repeatCount:"indefinite"})})]}))},q=n(54),G=n.n(q),R=n(87),W=n.n(R),P=function(e){var t=e.data,n=i.a.useRef(null),a={chart:{plotBorderWidth:0,type:"pie",backgroundColor:"transparent"},credits:{enabled:!1},colors:T,title:{text:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",borderColor:"transparent",borderWidth:0,dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{type:"pie"},{data:Object(u.a)(t),type:"pie"}]};return Object(o.jsx)(W.a,{highcharts:G.a,options:a,ref:n},Math.random())},J=function(e){var t=e.pieChartData,n=e.menuItemName,a=e.showTotal,i=function(e){return e.map((function(e){return e.y})).reduce((function(e,t){return e+t}),0)}(t);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"is-flex is-flex is-justify-content-space-between",children:[a&&Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:"visualization__title",children:["Source of Funds: ",n]})}),!a&&Object(o.jsx)("p",{className:"visualization__title",children:"Expending By Counties"}),a&&Object(o.jsx)("div",{children:Object(o.jsxs)("h4",{className:"visualization__disbursed",children:[M(i)," Disbursed"]})})]}),Object(o.jsx)(P,{data:t})]})},U=function(){return fetch("https://actionfortransparency.org/wp-json/wp/v2/covid19_expenditure").then((function(e){return e.json()}))},H=function(e){var t=i.a.useState(0),n=Object(d.a)(t,2),a=n[0],c=n[1],s=i.a.useState([]),l=Object(d.a)(s,2),u=l[0],j=l[1],m=Object(r.a)("/covid/expenditure",U),b=m.data,h=m.error,f=!b&&!h;if(i.a.useEffect((function(){if(void 0!==b){var e=b.filter((function(e){return e.source_of_fund===p})).map((function(e,t){return{name:e.expending_body,y:parseInt(e.amount_expended),selected:0===t,sliced:0===t}}));j(e)}}),[a,b]),f)return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)(E,{width:100,height:100})});var v=function(e){var t=[],n=[],a={},i=[];e.forEach((function(e){var c=e.type,s=e.source_of_fund,r=Number(e.amount_expended);-1===n.indexOf(e.expending_body)&&n.push(e.expending_body),-1===t.indexOf(c)&&t.push(c),-1===i.indexOf(s)&&i.push(s),!a[c]&&r&&(a[c]=e.amount_expended),a[c]&&r&&(a[c]=+a[c]+ +e.amount_expended)}));var c=Object.keys(a).map((function(e){return{name:e,value:a[e]}}));return{categories:t,totals:c,expendingBodies:n,fundSources:i}}(b).fundSources.map((function(e,t){return{id:t,name:e}})),p=v[a].name;return Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-one-quarter",children:Object(o.jsx)(y,{menuItems:v,activeMenuItem:a,changeActiveMenuItem:function(e){return c(e)}})}),Object(o.jsx)("div",{className:"column is-three-quarters",children:Object(o.jsx)("div",{className:"visualization__chart-area",children:Object(o.jsx)(J,{menuItemName:p,pieChartData:u,showTotal:!0})})})]})},V=(n(154),function(e){var t=e.title,n=(e.description,e.donationCount),a=e.donor,i=e.donationDate,c=e.articleLink,s=e.donationType,r="";switch(s){case"Face Masks":r="./masks.svg";break;case"Mobile Testing Lab":r="./testing_kits.svg"}return Object(o.jsxs)("div",{className:"card in-kind-card",onClick:function(){return window.open(c)},children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3 m-2",children:Object(o.jsx)("img",{src:r,alt:"Donation image"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("div",{className:"media",children:Object(o.jsxs)("div",{className:"media-content",children:[Object(o.jsxs)("p",{className:"title is-5",children:[n," ",s," donated by ",a]}),Object(o.jsx)("p",{className:"subtitle is-6 mt-2",children:t})]})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("br",{}),Object(o.jsx)("time",{dateTime:i,children:new Date(i).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"2-digit"})})]})]})]})}),Z=function(e){var t=e.donations,n=function(e){return"FaceMasks"==e?"Face Masks":"Mobile Testing Lab"};return Object(o.jsx)("div",{className:"columns is-centered",children:t.map((function(e){var t=e.id,a=e.donor,i=e.title,c=e.content,s=e.link,r=e.date_pledged,l=e.donated_items.split(":"),u=Object(d.a)(l,2),j=u[0],m=u[1];return Object(o.jsx)("div",{className:"column is-4 mt-3",children:Object(o.jsx)(V,{title:i.rendered,donor:a,description:c.rendered,articleLink:s,donationDate:r,donationCount:m,donationType:n(j)})},t)}))})},$=n(173);n.n($)()(G.a);var Q=function(e){var t=e.data,n=e.vaccineName,a=e.totalDoses,c=i.a.useRef(null),s=t.map((function(e){return e.link})),r={chart:{type:"timeline",backgroundColor:"transparent"},credits:{enabled:!1},plotOptions:{timeline:{events:{click:function(e){console.log(e)}}}},colors:T,xAxis:{visible:!1},yAxis:{visible:!1},title:{text:"Timeline of ".concat(n," Donations")},subtitle:{text:"Total Doses: ".concat(a)},series:[{type:"timeline",dataLabels:{connectorColor:"silver",connectorWidth:2,allowOverlap:!1,useHTML:!0,formatter:function(){var e;return e=this.series.chart.styledMode?"<span>\u25cf </span>":'<span style="color:'+this.point.color+'">\u25cf </span>',e+="<span>"+(this.key||"")+'</span><br/><a target="_blank" href="'+s[this.point.index]+'">More details here<a/>'}},data:Object(u.a)(t),custom:{links:s}}]};return Object(o.jsx)(W.a,{highcharts:G.a,options:r,ref:c},Math.random())},X=function(){return fetch("https://actionfortransparency.org/wp-json/wp/v2/covid_vaccine").then((function(e){return e.json()}))},Y=function(){var e=i.a.useState(0),t=Object(d.a)(e,2),n=t[0],a=t[1],c=i.a.useState([]),s=Object(d.a)(c,2),l=s[0],u=s[1],j=i.a.useState(0),m=Object(d.a)(j,2),b=m[0],h=m[1],f=Object(r.a)("/covid/vaccines",X),v=f.data,p=f.error,x=!v&&!p;if(i.a.useEffect((function(){if(void 0!==v){var e=v.filter((function(e){return e.vaccine_type.includes(g)})),t=0,n=e.map((function(e){var n=e.total_doses,a=(e.title,e.acquisition_date);e.link;return t+=parseInt(e.total_doses),{name:"".concat(e.title.rendered," <br/> ").concat(L(n)," doses donated on ").concat(a),label:"".concat(L(n)," doses of ").concat(g),x:new Date(e.acquisition_date).getTime(),link:e.link}}));u(n),h(t)}}),[n,v]),x)return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)(E,{width:100,height:100})});var O=[];void 0!==v&&(O=v.map((function(e){return e.vaccine_type[0]})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(e,t){return{id:t,name:e}})));var g="";return O.length>0&&(g=O[n].name),Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-one-quarter",children:Object(o.jsx)(y,{menuItems:O,activeMenuItem:n,changeActiveMenuItem:function(e){return a(e)}})}),Object(o.jsx)("div",{className:"column is-three-quarters",children:Object(o.jsx)("div",{className:"visualization__chart-area",children:Object(o.jsx)(Q,{data:l,vaccineName:g,totalDoses:L(b)})})})]})},ee=(n(325),function(e){var t=e.loading,n=e.cashDonations,a=e.inKindDonations,c=i.a.useState("aid"),s=Object(d.a)(c,2),r=s[0],l=s[1];return Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)(K,{tabList:[{name:"Aid"},{name:"Expenditure"},{name:"In Kind"},{name:"Vaccines"}],activeTab:r,changeActiveTab:function(e){l(e.toLocaleLowerCase())}}),Object(o.jsx)("div",{className:"tabs-content visualization__tab-content mt-3",children:function(e){switch(e.toLocaleLowerCase()){case"aid":return Object(o.jsx)(F,{loading:t,covidAid:n});case"in kind":return Object(o.jsx)(Z,{donations:a});case"expenditure":return Object(o.jsx)(H,{});case"vaccines":return Object(o.jsx)(Y,{});default:return Object(o.jsx)(F,{loading:t,covidAid:n})}}(r)})]})}),te=(n(326),function(){return fetch("https://actionfortransparency.org/wp-json/wp/v2/covid19_aid").then((function(e){return e.json()}))}),ne=function(){return fetch("https://disease.sh/v3/covid-19/countries/kenya").then((function(e){return e.json()}))},ae=function(){var e=Object(r.a)("/covid/aid",te),t=e.data,n=e.error,a=Object(r.a)("/cases/kenya",ne),i=a.data,c=a.error;if(c||n)return Object(o.jsx)("div",{children:"Failed to load"});var s=!i&&!c,d=!t&&!n;if(d||s)return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)(E,{width:100,height:100})});var u=i.cases,j=i.deaths,m=i.recovered,b=C(t).map((function(e){return e.amount_pledged})).reduce((function(e,t){return+e+ +t}),0),h=t.filter((function(e){return e.donation_type.includes("IN KIND")})),f=t.filter((function(e){return e.donation_type.includes("CASH")}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{loading:s,totalAid:L(b),totalCases:u,totalDeaths:j,totalRecovered:m}),Object(o.jsx)(ee,{loading:d,cashDonations:f,inKindDonations:h})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,334)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[327,1,2]]]);
//# sourceMappingURL=main.c22bf52d.chunk.js.map