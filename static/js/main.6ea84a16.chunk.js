(this.webpackJsonpreact_employee_directory_system=this.webpackJsonpreact_employee_directory_system||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(13),s=n.n(r),l=(n(23),n(24),n(0));var i=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsx)("h1",{children:"employee directory"})})};n(26);var o=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("span",{children:"Pupster 2017"})})},j=(n(27),n(4)),h=n(14),d=n(15),u=n(18),b=n(17),m=n(16),p=n.n(m),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={empDB:[],employeesList:[],search:""},e.componentDidMount=function(){p.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(t){console.log(t);for(var n=t.data.results,c=[],a=0;a<n.length;a++)c.push({name:n[a].name.first+", "+n[a].name.last,email:n[a].email,cell:n[a].cell,picture:n[a].picture.large});e.setState({employeesList:c,empDB:n})}))},e.handleInputChange=function(t){for(var n,c=t.target,a=c.name,r=c.value,s=e.state.empDB.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(r.toLowerCase())||-1!==e.name.last.toLowerCase().indexOf(r.toLowerCase())})),l=[],i=0;i<s.length;i++)l.push({name:s[i].name.first+", "+s[i].name.last,email:s[i].email,cell:s[i].cell,picture:s[i].picture.large});console.log(s),e.setState((n={},Object(j.a)(n,a,r),Object(j.a)(n,"employeesList",l),n))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h6",{children:"Empolyee data using RandomAPI"}),Object(l.jsx)("form",{class:"row",children:Object(l.jsx)("input",{value:this.state.search,onChange:this.handleInputChange,name:"search",class:"form-control col-9",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(l.jsxs)("table",{class:"table table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"name"}),Object(l.jsx)("th",{scope:"col",children:"email"}),Object(l.jsx)("th",{scope:"col",children:"cell"}),Object(l.jsx)("th",{scope:"col",children:"pic"})]})}),Object(l.jsx)("tbody",{children:this.state.employeesList.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.cell}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture,alt:e.name})})]})}))})]})]})}}]),n}(a.a.Component);var f=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsx)(O,{}),Object(l.jsx)(o,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.6ea84a16.chunk.js.map