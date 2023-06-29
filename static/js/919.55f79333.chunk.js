"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[919],{7580:function(e,t,n){n.d(t,{Z:function(){return o}});var a="ErrorNotification_error_container__gCegE",r="ErrorNotification_error_notification__syaeP",s=n(184),o=function(e){var t=e.message;return(0,s.jsx)("div",{className:a,children:(0,s.jsx)("p",{className:r,children:t})})}},5852:function(e,t,n){n.d(t,{Z:function(){return s}});var a="Heading_title__KZlGj",r=n(184),s=function(e){var t=e.tag,n=e.text,s=t||"h1";return(0,r.jsx)(s,{className:a,children:n})}},2983:function(e,t,n){n.d(t,{Z:function(){return o}});var a="Input_label__U9NhE",r="Input_input__k5Ctk",s=n(184),o=function(e){var t=e.label,n=e.type,o=e.value,i=e.handler,u=e.pattern,c=e.title,l=e.required,d=e.name;return(0,s.jsxs)("label",{className:a,children:[t,(0,s.jsx)("input",{className:r,type:n,value:o,pattern:u,title:c,required:l,onChange:i,name:d})]})}},1287:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(643),r="Loader_loader__container__4ZO4+",s=n(184),o=function(){return(0,s.jsx)("div",{className:r,children:(0,s.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#17263b",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5919:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(9439),r=n(2791),s=n(9434),o=function(e){return e.phonebook.contacts.items},i=function(e){return e.phonebook.contacts.items.filter((function(t){return t.name.toLowerCase().includes(e.phonebook.filter.toLowerCase())}))},u=function(e){return e.phonebook.filter},c=function(e){return e.phonebook.contacts.isLoading},l=function(e){return e.phonebook.contacts.error},d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},m=n(5137),h=n(2983),f="ButtonBig_button__sRyx1",x=n(184),_=function(e){var t=e.type,n=e.text,a=e.handler,r=e.children;return(0,x.jsxs)("button",{className:f,type:t,onClick:a,children:[r,n]})},p="ContactForm_form__zqkUM",b=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],u=(0,r.useState)(""),c=(0,a.Z)(u,2),l=c[0],f=c[1],b=(0,s.v9)(o),v=(0,s.I0)(),j=function(e){"name"===e.target.name&&i(e.target.value),"number"===e.target.name&&f(e.target.value)},g=function(e){if(e.preventDefault(),b.map((function(e){return e.name})).includes(n))window.alert("".concat(n," is already in contacts."));else{var t={id:d(5),name:n,number:l};i(""),f(""),v((0,m.SV)(t))}};return(0,x.jsxs)("form",{className:p,onSubmit:function(e){return g(e)},children:[(0,x.jsx)(h.Z,{label:"Name",type:"text",name:"name",value:n,handler:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)(h.Z,{label:"Phone number",type:"tel",name:"number",value:l,handler:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)(_,{type:"submit",text:"Add contact"})]})},v=n(5852),j="ListItem_contactItem__fgDfp",g="ListItem_contactText__gUHx4",y="ListItem_phoneText__ebK+r",N="ButtonSmall_button__p3P4I",Z=function(e){var t=e.type,n=e.text,a=e.id,r=e.handler;return(0,x.jsx)("button",{className:N,type:t,id:a,onClick:r,children:n})},C={overlay:"Modal_overlay__b+zEz",modal:"Modal_modal__yEgVW",form:"Modal_form__Kth9F","buttons-thumb":"Modal_buttons-thumb__QW5dC"},k=function(e){var t=e.currentName,n=e.currentNumber,a=e.handlerInputChange,r=e.handlerSubmit,s=e.closeModal;return(0,x.jsx)("div",{className:C.overlay,children:(0,x.jsxs)("div",{className:C.modal,children:[(0,x.jsx)(v.Z,{tag:"h3",text:"Edit contact"}),(0,x.jsxs)("form",{className:C.form,onSubmit:r,children:[(0,x.jsx)(h.Z,{label:"Name",type:"text",name:"name",value:t,handler:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,x.jsx)(h.Z,{label:"Phone number",type:"tel",name:"number",value:n,handler:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0}),(0,x.jsxs)("div",{className:C["buttons-container"],children:[(0,x.jsx)(_,{type:"submit",text:"Confirm"}),(0,x.jsx)(_,{type:"button",text:"Chancel",handler:s})]})]})]})})},S=function(e){var t=e.name,n=e.number,o=e.id,i=(0,r.useState)(t),u=(0,a.Z)(i,2),c=u[0],l=u[1],d=(0,r.useState)(n),h=(0,a.Z)(d,2),f=h[0],_=h[1],p=(0,r.useState)(!1),b=(0,a.Z)(p,2),v=b[0],N=b[1],C=(0,s.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("li",{className:j,children:[(0,x.jsx)("p",{className:g,children:t}),(0,x.jsx)("p",{className:y,children:n}),(0,x.jsx)(Z,{type:"button",text:"Edit",id:o,handler:function(){N(!0)}}),(0,x.jsx)(Z,{type:"button",text:"Delete",id:o,handler:function(){C((0,m.xX)(o)),C((0,m.m$)())}})]}),v&&(0,x.jsx)(k,{currentName:c,currentNumber:f,handlerInputChange:function(e){"name"===e.target.name&&l(e.target.value),"number"===e.target.name&&_(e.target.value)},handlerSubmit:function(e){e.preventDefault(),N(!1);var t={name:c,number:f};C((0,m.hx)({id:o,editedContact:t}))},closeModal:function(){N(!1)}})]})},w="ContactsList_contactsList__0E36l",I=n(7580),L=n(1287),z=function(){var e=(0,s.v9)(i),t=(0,s.v9)(c),n=(0,s.v9)(l),a=(0,s.I0)();return(0,r.useEffect)((function(){a((0,m.m$)())}),[a]),(0,x.jsxs)(x.Fragment,{children:[n?(0,x.jsx)(I.Z,{message:n}):e.length>0?(0,x.jsx)("ul",{className:w,children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,x.jsx)(S,{name:n,number:a,id:t},t)}))}):(0,x.jsx)(I.Z,{message:"There is no contacts matching your request"}),t&&(0,x.jsx)(L.Z,{})]})},A=n(4824),E="Filter_filter__asygT",q=function(){var e=(0,s.v9)(u),t=(0,s.I0)();return(0,x.jsx)("div",{className:E,children:(0,x.jsx)(h.Z,{label:"Find contacts by name",type:"text",name:"filter",value:e,handler:function(e){return function(e){var n=e.currentTarget.value;t((0,A.a8)(n))}(e)},required:!1})})},M=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(v.Z,{text:"Contacts"}),(0,x.jsx)(b,{}),(0,x.jsx)(v.Z,{tag:"h2",text:"Contacts List"}),(0,x.jsx)(q,{}),(0,x.jsx)(z,{})]})}}}]);
//# sourceMappingURL=919.55f79333.chunk.js.map