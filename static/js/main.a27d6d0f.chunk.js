(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){e.exports=a(42)},41:function(e,t,a){e.exports=a.p+"static/media/fontawesome-webfont.674f50d2.eot"},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),s=a.n(r),c=a(5),o=a(6),i=a(14),m=a.n(i),p=a(24),u=a(8),d=a(9),f=a(11),E=a(10),b=a(12),h=(a(19),a(20),a(21),function(e){var t=e.results;return l.a.createElement("div",{className:"row"},t.map(function(e){var t=e.profile.first_name+" "+e.profile.last_name;return l.a.createElement("div",{className:"col-lg-6",key:e.uid},l.a.createElement("div",{className:"single-travel media pb-70"},l.a.createElement("img",{className:"img-fluid d-flex  mr-3",src:e.profile.image_url,alt:t}),l.a.createElement("div",{className:"media-body align-self-center"},l.a.createElement("h4",{className:"mt-0"},l.a.createElement("span",{style:{fontWeight:"bold"}},l.a.createElement(c.b,{to:{pathname:"/Detail/".concat(e.uid),state:{docID:e.uid}}},t))),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Specialist:")," ",e.specialties[0]?e.specialties[0].uid:""),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Department:")," ",e.specialties[0]?e.specialties[0].name:""),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Info:")," ",e.specialties[0]?e.specialties[0].description:""),l.a.createElement("button",{type:"button",className:"btn btn-sm btn-default"},l.a.createElement(c.b,{to:{pathname:"/Detail/".concat(e.uid),state:{docID:e.uid}}},"Profile >>")))))}))}),g=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.result;return l.a.createElement("section",{className:"travel-area section-gap",id:"travel"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center align-items-center d-flex"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("form",{onSubmit:this.props.formSubmit},l.a.createElement("div",{id:"imaginary_container"},l.a.createElement("div",{className:"input-group stylish-input-group"},l.a.createElement("input",{type:"text",name:"doc",className:"form-control",placeholder:"type category (ex: orthopedic, vision) ",required:""}),l.a.createElement("input",{type:"text",name:"place",className:"form-control",placeholder:"Location",required:!0}),l.a.createElement("span",{className:"btn btn-sm btn-info"},l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-info"},"search"))))),l.a.createElement("p",{className:"mt-20 text-center text-white"},"result")))),l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("div",{className:"menu-content pb-70 col-lg-8"},l.a.createElement("div",{className:"title text-center"},l.a.createElement("h1",{className:"mb-10"},"Search nearest doctor"),l.a.createElement("p",null,"Type category and place in search box, result will be shown below"),e.length<1?"":l.a.createElement("p",null," Total ",e.length," doctors found ","not"===this.props.location?"":" in "+this.props.location,"!")))),"not"===this.props.error?"":l.a.createElement("p",{className:"text-center text-warning"},"No doctor found in ",this.props.location," with your search. Try again!"),e.length<1?"not"===this.props.isSubmit?l.a.createElement("p",{className:"text-center"},"Type something and press search button to get result"):l.a.createElement("p",{className:"text-center lead"},"Loading......."):l.a.createElement(h,{results:e})))}}]),t}(l.a.Component),v="9e5403e96d81f76af5b0202716529bcd",y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={result:[],error:"not",isSubmit:"not",location:"not"},a.formSubmit=function(){var e=Object(p.a)(m.a.mark(function e(t){var n,l,r,s,c,o,i,p,u;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isSubmit:"yes",result:[]}),n=t.target.elements.doc.value,l=t.target.elements.place.value,e.next=6,fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(l,"&key=AIzaSyBbwiTiqvNsHwXsR5cIeyTm_L6DvUj3T28"));case 6:return r=e.sent,e.next=9,r.json();case 9:if("OK"!==(s=e.sent).status){e.next=23;break}return c=s.results[0].formatted_address,o=s.results[0].geometry.location.lat+","+s.results[0].geometry.location.lng,console.log(o),e.next=16,fetch("https://api.betterdoctor.com/2016-03-01/doctors?query=".concat(n,"&location=").concat(o,",100&user_location=&skip=0&limit=30&user_key=").concat(v));case 16:return i=e.sent,e.next=19,i.json();case 19:(p=e.sent).meta.error?a.setState({error:"yes",isSubmit:"not",location:c}):(u=p.data).length<1?a.setState({error:"yes",isSubmit:"not",location:c}):a.setState({error:"not",isSubmit:"not",result:u,location:c}),e.next=24;break;case 23:a.setState({error:"yes",isSubmit:"not",location:"not"});case 24:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("docArr"),t=localStorage.getItem("location");if(null!==e){var a=JSON.parse(e);this.setState({result:a}),this.setState({location:t})}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.result);localStorage.setItem("docArr",e),localStorage.setItem("location",this.state.location)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,{formSubmit:this.formSubmit,result:this.state.result,error:this.state.error,isSubmit:this.state.isSubmit,location:this.state.location}))}}]),t}(l.a.Component),N=(a(41),function(e){var t,a=0,n=[],r=JSON.parse(localStorage.getItem("docArr")),s=e.location.state.docID;if(void 0!==s&&r.length>0){a=r.length;for(var o=0;o<a+1;o++){if(r[o].uid===s){t=(n=r[o]).profile.first_name+" "+n.profile.last_name;break}n=[]}}return l.a.createElement("div",{className:"post-wrapper pt-100",style:{paddingTop:"20px"}},l.a.createElement("section",{className:"post-area"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-6 offset-lg-6"},l.a.createElement("br",null),l.a.createElement("br",null),a<1?l.a.createElement("h4",{className:"text-center"},l.a.createElement("span",{style:{fontWeight:"bold"}},"Sorry!")," No doctor found!"):l.a.createElement("div",{className:"single-page-post"},l.a.createElement("img",{className:"img-fluid text-center",src:n.profile.image_url,alt:t}),l.a.createElement("div",{className:"top-wrapper "},l.a.createElement("div",{className:"row d-flex justify-content-between"},l.a.createElement("h2",{className:"col-lg-8 col-md-12 text-uppercase"},t))),l.a.createElement("div",{className:"single-post-content"},l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Specialist:")," ",n.specialties[0]?n.specialties[0].uid:""),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Department:")," ",n.specialties[0]?n.specialties[0].name:""),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Info:")," ",n.specialties[0]?n.specialties[0].description:""),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Bio:")," ",n.profile.bio?n.profile.bio:""),l.a.createElement("div",{className:"bottom-wrapper"}),l.a.createElement("h4",{className:"text-uppercase"},"Practices:"),l.a.createElement("br",null),n.practices.map(function(e){var t=e.visit_address.street+", "+e.visit_address.city+", "+e.visit_address.state_long+", "+e.visit_address.zip;return l.a.createElement("div",{key:e.name},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,l.a.createElement("span",{style:{fontWeight:"bold"}},l.a.createElement("i",{className:"fa fa-home"}),":")," ",t,l.a.createElement("br",null),l.a.createElement("span",{style:{fontWeight:"bold"}},l.a.createElement("i",{className:"fa fa-phone"}),":")," ",e.phones[0].number))})),l.a.createElement("div",{className:"bottom-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 single-b-wrap col-md-12"})))),l.a.createElement("button",{style:{color:"#fff"},type:"submit",className:"btn btn-default"},l.a.createElement(c.b,{to:"/"},"<<< Back to homepage")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))))}),w=function(){return l.a.createElement(c.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",component:y,exact:!0}),l.a.createElement(o.a,{path:"/Detail",component:y,exact:!0}),l.a.createElement(o.a,{path:"/Detail/:id",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.a27d6d0f.chunk.js.map