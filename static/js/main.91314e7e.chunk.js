(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3SZ6y",modal:"ErrorModal_modal__3ZW04",header:"ErrorModal_header__2rKIm",content:"ErrorModal_content__zye2B",actions:"ErrorModal_actions__1yaPM"}},,,,,function(e,t,n){e.exports={Card:"Card_Card__tBKcj"}},function(e,t,n){e.exports={button:"Button_button__6-R6B"}},function(e,t,n){e.exports={input:"AddUser_input__12kiK"}},function(e,t,n){e.exports={users:"UsersList_users__2x9_Q"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),a=n(2),s=n(1),i=n(12),o=n(8),l=n.n(o),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(l.a.Card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(u.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(3),O=n.n(h),x=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onClick:e.onConfirm,className:O.a.backdrop}),Object(u.jsxs)(d,{className:O.a.modal,children:[Object(u.jsx)("header",{className:O.a.header,children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("div",{className:O.a.content,children:Object(u.jsx)("p",{children:e.message})}),Object(u.jsx)("footer",{className:O.a.actions,children:Object(u.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},p=n(10),_=n.n(p),f=function(e){var t=Object(s.useState)(""),n=Object(a.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)(""),l=Object(a.a)(o,2),j=l[0],b=l[1],h=Object(s.useState)(null),O=Object(a.a)(h,2),p=O[0],f=O[1];return Object(u.jsxs)("div",{children:[p&&Object(u.jsx)(x,{title:p.title,message:p.message,onConfirm:function(){f(null)}}),Object(u.jsx)(d,{className:_.a.input,children:Object(u.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),0===c.trim().length||0===j.trim().length?(f({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."}),null):+j<1?null:(e.onAddUser((function(e){return[].concat(Object(i.a)(e),[{name:c,age:j,id:e.length}])})),r(""),void b(""))},children:[Object(u.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(u.jsx)("input",{type:"text",id:"username",value:c,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(u.jsx)("input",{type:"number",id:"age",value:j,onChange:function(e){b(e.target.value)}}),Object(u.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),C=function(e){return Object(u.jsx)(d,{className:v.a.users,children:Object(u.jsx)("ul",{children:e.users.map((function(e){return Object(u.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var y=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{onAddUser:c}),Object(u.jsx)(C,{users:n})]})},k=(n(18),document.getElementById("root"));r.a.render(Object(u.jsx)(y,{}),k)}],[[19,1,2]]]);
//# sourceMappingURL=main.91314e7e.chunk.js.map