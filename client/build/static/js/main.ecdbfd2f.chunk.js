(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),r=a.n(l),c=(a(32),a(33),a(1)),i=a(11),s=a(12),u=a(8),d=a(15),h=a(14),b=a(13),m=a(3),g=(a(34),a(21)),f=[{label:"Fiction:",options:[{value:"Children's Books",label:"Children's Books"},{value:"Crime Thriller",label:"Crime Thriller"},{value:"Literary Fiction",label:"Literary Fiction"},{value:"Sci-Fi",label:"Sci-Fi"},{value:"Young Adult",label:"Young Adult"}]},{label:"Non-Fiction:",options:[{value:"Food ",label:"Food "},{value:"History",label:"History"},{value:"Memoir",label:"Memoir"},{value:"Politics",label:"Politics"},{value:"Self-Help",label:"Self-Help"}]},{label:"Other",value:"Other"}],p=[{value:"English",label:"English"},{value:"Bulgarian",label:"Bulgarian"}],v={control:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{background:"#f9a03f",border:(t.isFocused,"none"),outline:(t.isFocused,"none"),boxShadow:(t.isFocused,"none")})},valueContainer:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{background:"#f9a03f",color:"black",padding:0})},singleValue:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{color:"black"})},dropdownIndicator:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{background:"#f9a03f"})},placeholder:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{color:"#000"})},menu:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{background:"#f9a03f"})},option:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{backgroundColor:t.isFocused||t.isSelected||t.isActive?"#f8dda4":"#f9a03f",color:(t.isFocused,"black")})},indicatorSeparator:function(e,t){return{background:"#f9a03f"}},noOptionsMessage:function(e,t){return{color:"black"}},groupHeading:function(e,t){return{color:"black",fontWeight:"bold",paddingBottom:"10px",borderBottom:"1px solid black"}}},k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"",author:"",description:"",genre:"",language:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleGenre=n.handleGenre.bind(Object(u.a)(n)),n.handleLanguage=n.handleLanguage.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addBook(this.state),e.target.reset()}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleGenre",value:function(e){this.setState({genre:e.value})}},{key:"handleLanguage",value:function(e){this.setState({language:e.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"outer-container"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Bookle"),o.a.createElement("p",null,"Find your favorite books here!")),o.a.createElement("form",{className:"form-container",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("input",{className:"form-input col-50",name:"title",type:"text",onChange:this.handleChange,placeholder:"Title"}),o.a.createElement("input",{className:"form-input col-50",name:"author",type:"text",onChange:this.handleChange,placeholder:"Author"}),o.a.createElement("div",{className:"select"},o.a.createElement(g.a,{placeholder:"Select genre...",styles:v,components:{DropdownIndicator:function(){return null}},className:"theme",value:f.find((function(t){return t.value===e.state.genre})),options:f.sort(),onChange:this.handleGenre})),o.a.createElement("div",{className:"select"},o.a.createElement(g.a,{placeholder:"Select language...",styles:v,components:{DropdownIndicator:function(){return null}},className:"theme",value:p.find((function(t){return t.value===e.state.language})),options:p,onChange:this.handleLanguage}))),o.a.createElement("textarea",{className:"form-input",rows:"8",name:"description",type:"text",onChange:this.handleChange,placeholder:"Short description..."}),o.a.createElement("button",{className:"btn",type:"submit"},"Add Book")))}}]),a}(o.a.Component),O=a(25),y=a.n(O),E=(a(37),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addBook=n.addBook.bind(Object(u.a)(n)),n.state={success:!1,successMessage:""},n}return Object(s.a)(a,[{key:"addBook",value:function(e){var t=this,a=e.title,n=e.author,o=e.genre,l=e.description,r=e.language;y.a.post("/api/books",{title:a,author:n,genre:o,description:l,language:r}).then((function(e){t.setState({success:!0,successMessage:e.errors?"Something went wrong! Make sure you specified every field!":"You successfully added a book! Thank you!"},(function(){setTimeout((function(){t.setState({success:!1,successMessage:""})}),5e3)}))})).catch((function(e){}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(k,{addBook:this.addBook}),o.a.createElement("div",{className:"errorMessage",style:{display:this.state.success?"block":"none"}},this.state.successMessage?this.state.successMessage:""))}}]),a}(o.a.Component));a(38);var j=function(e){return o.a.createElement("footer",null,'Copyright \xa9 2020 "Nikolay Lyutov" All rights reserved')};var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.b,{to:"/new",component:E}),o.a.createElement(c.b,{to:"/",render:function(){return o.a.createElement(c.a,{to:"/new"})}}),o.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(18);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C.a,null,o.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ecdbfd2f.chunk.js.map