(this["webpackJsonpreact-toggle-folder-contents"]=this["webpackJsonpreact-toggle-folder-contents"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),l=n.n(o),r=(n(12),n(3)),s=n(4),c=n(6),m=n(5),u=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).changeVisibility=function(){!0===a.state.visible?a.setState({visible:!1}):a.setState({visible:!0})},a.showFiles=function(){if(!0===a.state.visible)return i.a.createElement("ul",{className:"dropdown-menu"},i.a.createElement("li",{className:"dropdown-item"},"File 1"),i.a.createElement("li",{className:"dropdown-item"},"File 2"),i.a.createElement("li",{className:"dropdown-item"},"File 3"))},a.state={visible:a.props.visible},a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("section",{className:"folder"},i.a.createElement("h2",null,"Home"),i.a.createElement("button",{visible:this.state.visible,onClick:this.changeVisibility},"Toggle"),this.showFiles())}}]),n}(a.Component);n(13);var d=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Toggle Folder Contents"),i.a.createElement(u,{visible:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b53332a1.chunk.js.map