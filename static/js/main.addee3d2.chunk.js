(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{11:function(t,e,a){t.exports=a(41)},16:function(t,e,a){},17:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(16),a(17),a(18),a(19),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),d="a6008027f0msh99a677355d68c9ep14d48bjsnef38b61f038e",p=a(9),h=a.n(p),f=a(10),v=a.n(f),g=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={data:{affected_countries:[],statistic_taken_at:"2020-03-20 14:20:08"}},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":d}}).then((function(t){return t.json()})).then((function(e){return t.setState({data:e})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h6",null,"Affected Countries"),r.a.createElement("input",{className:"form-control",placeholder:"search"}),r.a.createElement(v.a,{style:{height:"85vh"},autoHide:!0},r.a.createElement("ul",{class:"list-group list-group-flush"},this.state.data.affected_countries.map((function(t,e){return r.a.createElement("li",{key:e,class:"list-group-item"},t)}))))))}}]),e}(r.a.PureComponent);function E(t){var e=t.title,a=t.value;return r.a.createElement("div",{className:"card m-1",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},""===a?0:a)))}function _(t){var e=t.stat,a=t.title,n=t.updateTime;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",{className:"d-flex flex-row justify-content-between pr-5 pl-5"},r.a.createElement("h5",null,a),r.a.createElement("div",{className:"hr-text hr-text-right text-right mb-2"},"Updated ",r.a.createElement("span",null,h()(n).fromNow()))),r.a.createElement("div",{className:"d-flex pr-5 pl-5"},r.a.createElement(E,{title:"Total Cases",value:e.total_cases}),r.a.createElement(E,{title:"Total Deaths",value:e.total_deaths}),r.a.createElement(E,{title:"Total Recovered",value:e.total_recovered}),r.a.createElement(E,{title:"New Cases",value:e.new_cases}),r.a.createElement(E,{title:"New Death",value:e.new_deaths})))}var b=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={imgUrl:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/masks.php",globalStat:{total_cases:0,total_deaths:0,total_recovered:0,new_cases:0,new_deaths:0,statistic_taken_at:0},nigerianStat:{id:"63425",country_name:"Nigeria",total_cases:0,new_cases:0,active_cases:0,total_deaths:0,new_deaths:0,total_recovered:0,serious_critical:"",region:null,total_cases_per1m:"0.06",record_date:"2020-03-20 13:40:02.543"}},a.getGlobalStat=function(){fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":d}}).then((function(t){return t.json()})).then((function(t){return a.setState({globalStat:t})})).catch((function(t){console.log(t)}))},a.getNigerianStat=function(){fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Nigeria",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":d}}).then((function(t){return t.json()})).then((function(t){return a.setState({nigerianStat:t.latest_stat_by_country[0]})})).catch((function(t){console.log(t)}))},a.getImage=function(){fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/masks.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":d}}).then((function(t){return a.setState({imgURL:t.url})})).catch((function(t){console.log(t)}))},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getImage(),this.getGlobalStat(),this.getNigerianStat()}},{key:"render",value:function(){var t=this.state,e=t.globalStat,a=t.nigerianStat;t.imgURL;return r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-md-4 col-lg-2"},r.a.createElement(g,null)),r.a.createElement("div",{className:"col-md-8 col-lg-8"},r.a.createElement(_,{title:"Global Stat",updateTime:e.statistic_taken_at,stat:e}),r.a.createElement(_,{title:"Nigerian Stat",updateTime:a.record_date,stat:a})))}}]),e}(r.a.PureComponent);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.addee3d2.chunk.js.map