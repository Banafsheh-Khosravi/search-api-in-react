(this["webpackJsonpfood-api"]=this["webpackJsonpfood-api"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(18),n(2)),l=n(3),s=n(6),u=n(4),h=n(7),m=n(23),p=(n(10),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},n.getSearch=function(e){n.setState({searchText:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onSearch(n.query.value),e.currentTarget.reset()},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.getSearch,name:"search",ref:function(t){return e.query=t},placeholder:"Recipe...",className:"search"}),r.a.createElement(m.a,{className:"button",variant:"warning",type:"submit",id:"submit"},"Search"))}}]),t}(a.Component)),f=function(e){var t=e.title,n=e.calories,a=e.image,c=e.ingredients;return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,t),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,r.a.createElement("b",null,"Colory:")," ",n),r.a.createElement("img",{src:a,alt:""}))},d=(n(19),"2bfe6d34"),b="97eb0e2b8c9386521819289cf74b98bc",v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"food";fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat(d,"&app_key=").concat(b)).then((function(e){return e.json()})).then((function(t){e.setState({recipes:t.hits,loading:!1})}))},e.state={recipes:[],loading:!0},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){var e=this.state.recipes;return r.a.createElement("div",{className:"container"},r.a.createElement(p,{onSearch:this.performSearch}),r.a.createElement("div",null,e.map((function(e){return r.a.createElement(f,{key:e.recipe,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20);i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.ff2d6254.chunk.js.map