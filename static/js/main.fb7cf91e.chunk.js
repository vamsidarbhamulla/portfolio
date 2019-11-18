(this["webpackJsonpvamsi-portfolio"]=this["webpackJsonpvamsi-portfolio"]||[]).push([[0],{21:function(e,a,t){e.exports=t(46)},26:function(e,a,t){},28:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),l=t.n(s),c=(t(26),t(7)),o=t.n(c),m=t(18),i=t(2),u=t(3),h=t(5),p=t(4),d=t(6),E=t(19),f=t.n(E),v=(t(28),function(e){function a(){return Object(i.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,s=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#works"},"Works")),r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"response-headline"},"I'm ",e,"."),r.a.createElement("h3",null,"I'm a ",n," based ",r.a.createElement("span",null,a),". ",t," "),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},s))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),b=function(e){function a(){return Object(i.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.city,s=this.props.data.address.state,l=this.props.data.phone,c=this.props.data.email,o=this.props.data.resumeDownload;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"Vamsi Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null," ",n," ",s," "),r.a.createElement("br",null),r.a.createElement("span",null,l),r.a.createElement("br",null),r.a.createElement("span",null,c),r.a.createElement("br",null))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:o,className:"button"},r.a.createElement("i",{className:"fa fa-download"}))))))))}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2019 Bodhivruksha cloud inc"),r.a.createElement("li",null,"Design by ",r.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout"))))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"}))))}}]),a}(n.Component),w=t(20),j=t.n(w),y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"getResumeData1",value:function(){f.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert("no data found "+t)}})}},{key:"getResumeData",value:function(){var e=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("resumeData.json");case 3:a=e.sent,alert("data is"+a.data),this.setState({resumeData:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("cannot get resume data from json");case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.main}),r.a.createElement(N,{data:this.state.resumeData.main}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.fb7cf91e.chunk.js.map