(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-804ecb28"],{"4a7b":function(t,e,s){"use strict";var a=s("68af"),i=s.n(a);i.a},"68af":function(t,e,s){},eae5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"userArea-section"},[s("div",{staticClass:"title-container"},[s("h4",{staticClass:"head-line"},[t._v("Hello  "+t._s(t.user.nickname))]),s("h4",{staticClass:"head-line"},[t._v("Invitations You Created")])]),s("div",{staticClass:"inv-container"},t._l(t.userInivtes,function(e){return""!==e.inviteName?s("div",{key:e.id,staticClass:"templateUserArea",style:e.generalStyle},[s("p",[s("span",{staticClass:"inviteName"},[t._v("Invite Name: ")]),s("br"),t._v(t._s(e.inviteName))]),s("p",[s("span",{staticClass:"description"},[t._v("Description: ")]),s("br"),t._v(t._s(e.shortDescription))]),s("p",[s("span",{staticClass:"timeCreated"},[t._v("Time created:")]),s("br"),t._v(t._s(e.modifiedAt))]),s("br"),e.attends.fullName?s("div",{staticClass:"rsvp-container"},[s("h4",[t._v("-- RSVP --")]),s("span",{staticClass:"rsvp-details"},[t._v(t._s(e.attends.fullName)+" |")]),s("span",{staticClass:"rsvp-details"},[t._v(" "+t._s(e.attends.phoneNumber)+" |")]),s("span",{staticClass:"rsvp-details"},[t._v(" "+t._s(e.attends.numOfArriving)+" ")])]):s("div",[s("h4",[t._v("No RSVP's yet")])])]):t._e()}))])},i=[],n=(s("cadf"),s("551c"),s("097d"),s("c360")),r={data:function(){return{userInivtes:{}}},created:function(){var t=this;n["a"].query().then(function(e){t.userInivtes=e.filter(function(e){return e.creatorId===t.user.id}),console.log(t.userInivtes)})},computed:{user:function(){return console.log(this.$store.getters.user),this.$store.getters.user}},methods:{}},c=r,l=(s("4a7b"),s("2877")),o=Object(l["a"])(c,a,i,!1,null,null,null);o.options.__file="UserArea.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-804ecb28.ee8a90d4.js.map