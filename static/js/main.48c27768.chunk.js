(this["webpackJsonp01-project"]=this["webpackJsonp01-project"]||[]).push([[0],{14:function(e,t,s){e.exports={header:"Header_header__2IiT1",title:"Header_title__1PnPN"}},17:function(e,t,s){e.exports={block:"MyPosts_block__1KfWR",area:"MyPosts_area__3QX9_"}},20:function(e,t,s){},24:function(e,t,s){e.exports={item:"Post_item__1drbq"}},25:function(e,t,s){e.exports={content:"ProfileInfo_content__1ydn2"}},31:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(22),i=s.n(c),r=(s(20),s(8)),o=s(2),d=(s(31),s(14)),l=s.n(d),j=s(0);function u(e){return Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("img",{src:"https://i.ibb.co/yV486Q1/logo.png",alt:"Logo"}),Object(j.jsx)("span",{className:l.a.title,children:"Free Land"})]})}var g=s(7),b=s.n(g);function m(){return Object(j.jsxs)("nav",{className:b.a.nav,children:[Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/profile",activeClassName:b.a.active,children:" Profile"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(j.jsx)("div",{className:b.a.item,children:Object(j.jsx)(r.b,{to:"/setting",activeClassName:b.a.active,children:"Setting"})})]})}var p={postData:[{id:"1",message:"My first post",src:"http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg",likeCount:"23"},{id:"2",message:"Hey friends!!!",src:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",likeCount:"1"},{id:"3",message:"Wow it's cool",src:"https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",likeCount:"12"},{id:"4",message:"very very good job",src:"http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg",likeCount:"32"},{id:"5",message:"My second post",src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg",likeCount:"4"}],newPostText:"it=kamasutra.com",profileData:[{background:"https://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg",ava:"Ava"}]},v=s(17),h=s.n(v),x=s(24),f=s.n(x);function O(e){return Object(j.jsxs)("div",{className:f.a.item,children:[Object(j.jsx)("img",{src:e.src,alt:""}),e.message,Object(j.jsxs)("button",{children:["Like(",e.likeCount,")"]}),Object(j.jsx)("button",{children:"DisLike"})]})}function _(e){var t=e.posts.map((function(e){return Object(j.jsx)(O,{message:e.message,src:e.src,likeCount:e.likeCount})})),s=n.a.createRef();return Object(j.jsxs)("div",{className:h.a.block,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{className:h.a.area,ref:s,value:e.newPostText,onChange:function(t){e.updatePostTextActionCreator(t.currentTarget.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.addPost(a),e.updatePostTextActionCreator("")},children:"Add Post"})})]}),t]})}function N(e){var t=e.store.getState();return Object(j.jsx)(_,{posts:t.profilePage.postData,newPostText:t.profilePage.newPostText,updatePostTextActionCreator:function(t){e.store.dispatch({type:"UPDATE-POST-TEXT",newText:t})},addPost:function(t){e.store.dispatch(function(e){return{type:"ADD-POST",postMessage:e}}(t))}})}var P=s(25),D=s.n(P);function w(e){return Object(j.jsxs)("div",{className:D.a.content,children:[Object(j.jsx)("img",{src:e.background,alt:""}),Object(j.jsxs)("div",{children:[e.ava," "]})]})}function y(e){var t=e.store.getState();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(w,{background:t.profilePage.profileData[0].background,ava:t.profilePage.profileData[0].ava}),Object(j.jsx)(N,{store:e.store})]})}function C(e){return Object(j.jsx)("div",{children:"Music"})}function k(e){return Object(j.jsx)("div",{children:"News"})}function T(e){return Object(j.jsx)("div",{children:"Setting"})}var M={dialogsData:[{id:"1",name:"Anna"},{id:"2",name:"Dimych"},{id:"3",name:"Kelvin"},{id:"4",name:"Eliza"},{id:"5",name:"Matt"},{id:"6",name:"Connor"}],messagesData:[{id:"1",message:"hi"},{id:"2",message:"How are you?"},{id:"3",message:"It's cool!!"},{id:"4",message:"Nice!"},{id:"5",message:" "},{id:"6",message:"Im sexy"}],newMessageBody:""},S=s(9),E=s.n(S);function A(e){return Object(j.jsx)("div",{className:"".concat(E.a.dialog," ").concat(E.a.active),children:Object(j.jsx)(r.b,{to:"/dialogs/".concat(e.id),children:e.name})})}function B(e){return Object(j.jsx)("div",{className:E.a.message,children:e.mes})}function I(e){var t=e.dialogsData.map((function(e){return Object(j.jsx)(A,{name:e.name,id:e.id})})),s=e.messagesData.map((function(e){return Object(j.jsx)(B,{mes:e.message})}));return Object(j.jsxs)("div",{className:E.a.dialogs,children:[Object(j.jsx)("div",{className:E.a.dialogsItems,children:t}),Object(j.jsxs)("div",{className:E.a.messageItems,children:[Object(j.jsx)("div",{children:s}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("textarea",{placeholder:"Enter your message",value:e.newMessageBody,onChange:function(t){e.updateNewMessageBodyCreator(t.currentTarget.value)}})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){e.sendMessageCreator()},children:"Send"})})]})]})]})}function q(e){var t=e.store.getState();return Object(j.jsx)(I,{dialogsData:t.dialogsPage.dialogsData,messagesData:t.dialogsPage.messagesData,newMessageBody:t.dialogsPage.newMessageBody,sendMessageCreator:function(){e.store.dispatch({type:"SEND-MESSAGE"})},updateNewMessageBodyCreator:function(t){e.store.dispatch(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))}})}var L=function(e){return e.store.getState(),Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(u,{}),Object(j.jsx)(m,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(q,{store:e.store})},path:"/dialogs"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(y,{store:e.store})},path:"/profile"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(k,{})},path:"/news"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(C,{})},path:"/music"}),Object(j.jsx)(o.a,{render:function(){return Object(j.jsx)(T,{})},path:"/setting"})]})]})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},G=s(18),H={},W=Object(G.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var s={id:"5",message:t.postMessage,src:"https://cdn140.picsart.com/330959057057201.jpg",likeCount:"0"};return e.postData.push(s),e;case"UPDATE-POST-TEXT":return e.newPostText=t.newText,e;default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return e.newMessageBody=t.body,e;case"SEND-MESSAGE":var s=e.newMessageBody;return e.newMessageBody="",e.messagesData.push({id:"7",message:s}),e;default:return e}},sidebarPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return e}}),U=Object(G.b)(W),J=function(e){i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L,{store:U,state:e,dispatch:U.dispatch.bind(U)})}),document.getElementById("root"))};J(U.getState()),U.subscribe((function(){var e=U.getState();J(e)})),F()},7:function(e,t,s){e.exports={nav:"Navbar_nav__2h0ef",item:"Navbar_item__22eW8",active:"Navbar_active__A2NPC"}},9:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1aqog",dialogsItems:"Dialogs_dialogsItems__2974J",dialog:"Dialogs_dialog__SZ_g3",messageItems:"Dialogs_messageItems__1TdIq",message:"Dialogs_message__kZH15"}}},[[41,1,2]]]);
//# sourceMappingURL=main.48c27768.chunk.js.map