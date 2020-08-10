(this["webpackJsonpai-image"]=this["webpackJsonpai-image"]||[]).push([[0],{22:function(e,a,t){},45:function(e,a,t){e.exports=t(87)},50:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),l=t.n(i),c=(t(50),t(4)),o=t(5),s=t(7),d=t(6),m=(t(22),function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-5",style:{margin:"auto 0 auto 0"}},r.a.createElement("a",null,r.a.createElement("img",{src:"/logo192.png",className:"image",alt:""})),"AI Image"),r.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-light"}))))}}]),t}(r.a.Component)),u=(r.a.Component,function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center col-lg-6 offset-lg-3"},r.a.createElement("br",null),r.a.createElement("p",null))))}}]),t}(r.a.Component)),h=(r.a.Component,t(13)),g=t.n(h),v=t(17),b=t(8),f=t(20),p=t.n(f),E=t(36),w=t.n(E),y=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onDrop=n.onDrop.bind(Object(b.a)(n)),n.state={pictures:[],onChange:e.onChange},n}return Object(o.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)}),this.state.onChange(e)}},{key:"render",value:function(){return r.a.createElement(w.a,{withIcon:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".bmp",".jpeg"],maxFileSize:5242880,singleImage:!0,withPreview:!0})}}]),t}(r.a.Component),j=t(42),k=t(98),C=t(40),N=t.n(C).a.initializeApp({apiKey:"AIzaSyCtu0IxSrD8BdrkY5rRD9DvdvnwqpmTgeM",authDomain:"ai-image-9e750.firebaseapp.com",databaseURL:"https://ai-image-9e750.firebaseio.com",projectId:"ai-image-9e750",storageBucket:"ai-image-9e750.appspot.com",messagingSenderId:"167763226508",appId:"1:167763226508:web:87b2e7e94f2608c61730a9",measurementId:"G-YBY616KV33"}),O=(N.firestore(),N.storage(),t(35)),x=["https://inpainting-demo-server.herokuapp.com/"];var D=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChangeWidthPen=function(e,a){n.setState({value:a})},n.handleChangeMask=function(){n.setState({mask:n.canvas.current.canvas.drawing.toDataURL()})},n.state={value:20,mask:"",photo:"",result:"",photo_gen:"",result_gen:"",loading:!1,width:300,height:200,level:0,circles:[]},n.canvas=r.a.createRef(),n.handleChangeWidthPen=n.handleChangeWidthPen.bind(Object(b.a)(n)),n.handleChangeMask=n.handleChangeMask.bind(Object(b.a)(n)),n.handleDownload=n.handleDownload.bind(Object(b.a)(n)),n.handleClear=n.handleClear.bind(Object(b.a)(n)),n.handleUndo=n.handleUndo.bind(Object(b.a)(n)),n.handleChangeImage=n.handleChangeImage.bind(Object(b.a)(n)),n.generate=n.generate.bind(Object(b.a)(n)),n}return Object(o.a)(t,[{key:"generate",value:function(){var e=this;this.setState({loading:!0});var a,t=this.state.photo,n=this.state.mask,r=(a=x.length,Math.floor(Math.random()*Math.floor(a)));p.a.post("".concat(x[r],"/api/image-inpainting"),{photo:t,mask:n}).then((function(a){e.setState({result:"data:image/jpeg;base64,"+a.data})})).catch((function(e){})).finally((function(){e.setState({loading:!1})}))}},{key:"handleChangeImage",value:function(){var e=Object(v.a)(g.a.mark((function e(a){var t,n,r,i,l,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(e){return new Promise((function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return a(n.result)},n.onerror=function(e){return t(e)}}))},!a[0]){e.next=15;break}return this.handleClear(),e.next=5,t(a[0]);case 5:return n=e.sent,r=function(e){return new Promise((function(a,t){var n=new Image;n.src=e,n.onload=function(){return a({width:n.width,height:n.height})},n.onerror=function(e){return t(e)}}))},e.next=9,r(n);case 9:i=e.sent,l=Math.min(window.innerWidth-50,i.width),l=Math.min(l,700),c=i.height*l/i.width,this.setState({height:c,width:l,photo:n,result:""}),this.canvas.current.drawImage();case 15:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleClear",value:function(){this.canvas.current.clear(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"handleUndo",value:function(){this.canvas.current.undo(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"convertDataURIToBinary",value:function(e){for(var a=e.indexOf(";base64,")+";base64,".length,t=e.substring(a),n=window.atob(t),r=n.length,i=new Uint8Array(new ArrayBuffer(r)),l=0;l<r;l++)i[l]=n.charCodeAt(l);return i}},{key:"handleDownload",value:function(){var e=this.state.result;e?(e=this.convertDataURIToBinary(e),O(e,"output.png")):alert("Not found image")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container justify-content-around"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center align-content-around"},r.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20,minWidth:this.state.width}},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav mb-3",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Upload photo")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"tab-content d-flex justify-content-center"},r.a.createElement("div",{className:"tab-pane fade show active",role:"tabpanel",style:{maxWidth:500}},r.a.createElement(y,{onChange:this.handleChangeImage}))))),r.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20,minWidth:this.state.width}},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav mb-3",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Draw mask")),r.a.createElement(k.a,{"aria-labelledby":"continuous-slider",value:this.state.value,onChange:this.handleChangeWidthPen,min:0,max:50,valueLabelDisplay:"auto"})),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},r.a.createElement("button",{type:"button",onClick:this.handleUndo,className:"btn btn-outline-secondary"},"Undo"),r.a.createElement("button",{type:"button",onClick:this.handleClear,className:"btn btn-outline-secondary"},"Clear"))),r.a.createElement("div",{style:{backgroundImage:"url("+this.state.photo+")",backgroundPosition:"center",backgroundSize:"cover"}},r.a.createElement(j.a,{lazyRadius:0,brushRadius:this.state.value,brushColor:"#ffffff",onChange:this.handleChangeMask,canvasWidth:this.state.width,canvasHeight:this.state.height,immediateLoading:!0,ref:this.canvas})))),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",null,"Export Image"),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow text-primary",hidden:!this.state.loading,role:"status"}),r.a.createElement("button",{type:"button",onClick:this.generate,hidden:this.state.loading,className:"btn btn-outline-primary"},"Generate"),r.a.createElement("br",null))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},r.a.createElement("img",{src:this.state.photo,hidden:""==this.state.photo,className:"rounded float-left img-thumbnail img-fluid",style:{width:500,height:"auto"}}),r.a.createElement("img",{src:this.state.result,hidden:""==this.state.result,className:"rounded float-right img-thumbnail img-fluid",style:{width:500,height:"auto"}}))),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:this.handleDownload},"Download"))))}}]),t}(r.a.Component),I=t(35),S=(r.a.Component,function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"header"},r.a.createElement(m,null)),r.a.createElement("div",{id:"body",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"center",className:"col-12"},r.a.createElement(D,null)))),r.a.createElement("div",{id:"footer"},r.a.createElement(u,null)))}}]),t}(r.a.Component)),R=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.dd0296e3.chunk.js.map