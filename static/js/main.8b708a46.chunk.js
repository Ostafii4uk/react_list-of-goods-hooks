(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,o=n(6),r=n.n(o),u=n(7),a=n(4),i=n(1),s=(n(12),n(16)),b=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t){return{name:t,id:Object(s.a)()}}));!function(t){t[t.none=0]="none",t[t.name=1]="name",t[t.length=2]="length"}(c||(c={}));var j=function(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(i.useState)(c.none),s=Object(a.a)(r,2),j=s[0],h=s[1],d=Object(i.useState)(!1),m=Object(a.a)(d,2),f=m[0],O=m[1];return f?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"List of Goods"}),Object(b.jsx)("ul",{children:function(){var t=Object(u.a)(l),e=t.sort((function(t,e){switch(j){case c.name:return t.name.localeCompare(e.name);case c.length:return t.name.length-e.name.length;default:return 0}}));return n&&t.reverse(),e}().map((function(t){return Object(b.jsx)("li",{children:t.name},t.id)}))}),Object(b.jsx)("button",{type:"button",onClick:function(){o((function(t){return!t}))},children:"Reverse"}),Object(b.jsx)("button",{onClick:function(){return h(c.name)},type:"button",children:"Sort by ABC"}),Object(b.jsx)("button",{onClick:function(){return h(c.length)},type:"button",children:"Sort by Length"}),Object(b.jsx)("button",{onClick:function(){h(c.none),o(!1)},type:"button",children:"Reset"})]}):Object(b.jsx)("button",{type:"button",onClick:function(){O(!0)},children:"Start"})};r.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8b708a46.chunk.js.map