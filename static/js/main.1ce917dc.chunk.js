/*! For license information please see main.1ce917dc.chunk.js.LICENSE.txt */
(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[0],{16:function(e,t,s){e.exports={header:"Header_header__2IiT1",title:"Header_title__1PnPN"}},17:function(e,t,s){e.exports={block:"MyPosts_block__1KfWR",area:"MyPosts_area__3QX9_"}},18:function(e,t,s){},21:function(e,t,s){e.exports={item:"Post_item__1drbq"}},22:function(e,t,s){e.exports={content:"ProfileInfo_content__1ydn2"}},27:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(19),n=s.n(c),r=(s(18),s(8)),o=s(2),d=(s(27),s(9)),l=s.n(d),j=s(0);function u(e){return Object(j.jsx)("div",{className:"".concat(l.a.dialog," ").concat(l.a.active),children:Object(j.jsx)(r.b,{to:"/dialogs/".concat(e.id),children:e.name})})}function b(e){return Object(j.jsx)("div",{className:l.a.message,children:e.mes})}function m(e){var t=e.dialogsData.map((function(e){return Object(j.jsx)(u,{name:e.name,id:e.id})})),s=e.messagesData.map((function(e){return Object(j.jsx)(b,{mes:e.message})}));return Object(j.jsxs)("div",{className:l.a.dialogs,children:[Object(j.jsx)("div",{className:l.a.dialogsItems,children:t}),Object(j.jsxs)("div",{className:l.a.messageItems,children:[Object(j.jsx)("div",{children:s}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("textarea",{placeholder:"Enter your message",value:e.newMessageBody,onChange:function(t){e.dispatch({type:"UPDATE-NEW-MESSAGE-BODY",body:t.currentTarget.value})}})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){e.dispatch({type:"SEND-MESSAGE"})},children:"Send"})})]})]})]})}var g=s(16),h=s.n(g);function p(e){return Object(j.jsxs)("header",{className:h.a.header,children:[Object(j.jsx)("img",{src:"https://i.ibb.co/yV486Q1/logo.png",alt:"Logo"}),Object(j.jsx)("span",{className:h.a.title,children:"Free Land"})]})}var x=s(7),v=s.n(x);function f(){return Object(j.jsxs)("nav",{className:v.a.nav,children:[Object(j.jsx)("div",{className:v.a.item,children:Object(j.jsx)(r.b,{to:"/profile",activeClassName:v.a.active,children:" Profile"})}),Object(j.jsx)("div",{className:v.a.item,children:Object(j.jsx)(r.b,{to:"/dialogs",activeClassName:v.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:v.a.item,children:Object(j.jsx)(r.b,{to:"/news",activeClassName:v.a.active,children:"News"})}),Object(j.jsx)("div",{className:v.a.item,children:Object(j.jsx)(r.b,{to:"/music",activeClassName:v.a.active,children:"Music"})}),Object(j.jsx)("div",{className:v.a.item,children:Object(j.jsx)(r.b,{to:"/setting",activeClassName:v.a.active,children:"Setting"})})]})}var O=function(e){return{type:"UPDATE-POST-TEXT",newText:e}},_=s(17),D=s.n(_),N=s(21),w=s.n(N);function y(e){return Object(j.jsxs)("div",{className:w.a.item,children:[Object(j.jsx)("img",{src:e.src,alt:""}),e.message,Object(j.jsxs)("button",{children:["Like(",e.likeCount,")"]}),Object(j.jsx)("button",{children:"DisLike"})]})}function k(e){var t=e.posts.map((function(e){return Object(j.jsx)(y,{message:e.message,src:e.src,likeCount:e.likeCount})})),s=i.a.createRef();return Object(j.jsxs)("div",{className:D.a.block,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{className:D.a.area,ref:s,value:e.newPostText,onChange:function(t){e.dispatch(O(t.currentTarget.value))}})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.dispatch(function(e){return{type:"ADD-POST",postMessage:e}}(a)),e.dispatch(O(""))},children:"Add Post"})})]}),t]})}var T=s(22),P=s.n(T);function S(e){return Object(j.jsxs)("div",{className:P.a.content,children:[Object(j.jsx)("img",{src:e.background,alt:""}),Object(j.jsxs)("div",{children:[e.ava," "]})]})}function C(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(S,{background:e.profileData[0].background,ava:e.profileData[0].ava}),Object(j.jsx)(k,{posts:e.postData,newPostText:e.newPostText,dispatch:e.dispatch})]})}function M(e){return Object(j.jsx)("div",{children:"Music"})}function E(e){return Object(j.jsx)("div",{children:"News"})}function A(e){return Object(j.jsx)("div",{children:"Setting"})}var I={_state:{dialogs:{dialogsData:[{id:"1",name:"Anna"},{id:"2",name:"Dimych"},{id:"3",name:"Kelvin"},{id:"4",name:"Eliza"},{id:"5",name:"Matt"},{id:"6",name:"Connor"}],messagesData:[{id:"1",message:"hi"},{id:"2",message:"How are you?"},{id:"3",message:"It's cool!!"},{id:"4",message:"Nice!"},{id:"5",message:" "},{id:"6",message:"Im sexy"}],newMessageBody:""},profile:{postData:[{id:"1",message:"My first post",src:"http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg",likeCount:"23"},{id:"2",message:"Hey friends!!!",src:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",likeCount:"1"},{id:"3",message:"Wow it's cool",src:"https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",likeCount:"12"},{id:"4",message:"very very good job",src:"http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg",likeCount:"32"},{id:"5",message:"My second post",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg",likeCount:"4"}],newPostText:"it=kamasutra.com",profileData:[{background:"https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg",ava:"Ava"}]},sidebar:{}},_callSubscriber:function(){console.log("sad")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profile=function(e,t){switch(t.type){case"ADD-POST":var s={id:"5",message:t.postMessage,src:"https://cdn140.picsart.com/330959057057201.jpg",likeCount:"0"};return e.postData.push(s),e;case"UPDATE-POST-TEXT":return e.newPostText=t.newText,e;default:return e}}(this._state.profile,e),this._state.dialogs=function(e,t){switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return e.newMessageBody=t.body,e;case"SEND-MESSAGE":var s=e.newMessageBody;return e.newMessageBody="",e.messagesData.push({id:"7",message:s}),e;default:return e}}(this._state.dialogs,e),this._state.sidebar=this._state.sidebar,this._callSubscriber()}};var B=function(e){var t=I.getState();return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(p,{}),Object(j.jsx)(f,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(m,{dialogsData:t.dialogs.dialogsData,messagesData:t.dialogs.messagesData,newMessageBody:t.dialogs.newMessageBody,dispatch:I.dispatch.bind(e.store)})},path:"/dialogs"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(C,{postData:t.profile.postData,profileData:t.profile.profileData,dispatch:I.dispatch.bind(e.store),newPostText:t.profile.newPostText})},path:"/profile"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(E,{})},path:"/news"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(M,{})},path:"/music"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(A,{})},path:"/setting"})]})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))},L=function(){n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{store:I})}),document.getElementById("root"))};L(),I.subscribe(L),q()},7:function(e,t,s){e.exports={nav:"Navbar_nav__2h0ef",item:"Navbar_item__22eW8",active:"Navbar_active__A2NPC"}},9:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1aqog",dialogsItems:"Dialogs_dialogsItems__2974J",dialog:"Dialogs_dialog__SZ_g3",messageItems:"Dialogs_messageItems__1TdIq",message:"Dialogs_message__kZH15"}}},[[37,1,2]]]);
//# sourceMappingURL=main.1ce917dc.chunk.js.map