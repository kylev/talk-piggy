(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)o=s[d],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/talk-piggy/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("9f7b"),i=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TopBar"),n("MainPanel"),n("SpeakerList")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"py-md-2"},[n("b-row",[n("b-col",{staticClass:"text-center"},[n("b-card",{attrs:{title:"Total"}},[n("TimeDisplay",{staticClass:"h1",attrs:{time:e.totalTime}})],1)],1),n("b-col",{staticClass:"text-center"},[n("b-card",{attrs:{title:"Crosstalk"}},[n("TimeDisplay",{staticClass:"h1",attrs:{time:e.crossTime}})],1)],1)],1)],1)},u=[],l=n("cebc"),d=n("2f62"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hours?n("span",[e._v(e._s(e.hours)+":")]):e._e(),n("span",[e._v(e._s(e.minutes)+":")]),n("span",[e._v(e._s(e.seconds))])])},f=[],m=(n("6b54"),n("f576"),{props:["time"],computed:{hours:function(){var e=Math.floor(this.time/3600);return e>0?e:null},minutes:function(){return(Math.floor(this.time/60)%60).toString().padStart(2,"0")},seconds:function(){return(this.time%60).toString().padStart(2,"0")}}}),k=m,b=n("2877"),v=Object(b["a"])(k,p,f,!1,null,null,null),h=v.exports,g={components:{TimeDisplay:h},computed:Object(l["a"])({},Object(d["d"])({totalTime:function(e){return e.tickSeconds},crossTime:function(e){return e.crosstalkSeconds}}))},S=g,_=Object(b["a"])(S,c,u,!1,null,null,null),y=_.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",e._l(e.speakers,function(t){return n("b-col",{key:t.id,attrs:{md:"4"}},[n("SpeakerCard",{attrs:{speaker:t},on:{toggle:e.startTalking,remove:e.removeSpeaker,"edit-name":e.editSpeakerName}})],1)}),1)],1)},O=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{"body-bg-variant":e.color},on:{click:function(t){return e.$emit("toggle",{id:e.speaker.id})},mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[n("b-card-title",[e.editing?e._e():n("span",[e._v("\n      "+e._s(e.speaker.name)+"\n    ")]),e.editing?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newName,expression:"newName",modifiers:{trim:!0}}],ref:"inputField",domProps:{value:e.newName},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.finishEdit(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit(t)}],focusout:e.cancelEdit,click:function(e){e.stopPropagation()},input:function(t){t.target.composing||(e.newName=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}):e._e(),e.editing?e._e():n("b-dropdown",{staticClass:"float-right",attrs:{right:"",variant:e.color||"white"}},[n("b-dropdown-item",{on:{click:function(t){return t.stopPropagation(),e.startEditingName(t)}}},[e._v("\n        Edit\n      ")]),n("b-dropdown-item",{on:{click:function(t){return t.stopPropagation(),e.$emit("remove",{id:e.speaker.id})}}},[e._v("\n        Remove\n      ")])],1)],1),n("b-card-text",[n("TimeDisplay",{attrs:{time:e.speaker.speakingSeconds}})],1)],1)},j=[],x=(n("7f7f"),{props:["speaker"],components:{TimeDisplay:h},data:function(){return{hover:!1,editing:!1,newName:""}},computed:{color:function(){return this.speaker.isSpeaking?"primary":this.hover?"light":null}},methods:{startEditingName:function(){var e=this;this.newName=this.speaker.name,this.editing=!0,r["default"].nextTick(function(){return e.$refs.inputField.focus()})},finishEdit:function(){this.$emit("edit-name",{id:this.speaker.id,name:this.newName}),this.editing=!1},cancelEdit:function(){this.editing=!1}}}),E=x,P=Object(b["a"])(E,w,j,!1,null,null,null),$=P.exports,N={components:{SpeakerCard:$},computed:Object(l["a"])({},Object(d["d"])({speakers:function(e){return e.speakers}})),methods:Object(l["a"])({},Object(d["c"])(["removeSpeaker","editSpeakerName"]),Object(d["b"])(["startTalking"]))},C=N,M=Object(b["a"])(C,T,O,!1,null,null,null),D=M.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{type:"dark",variant:"info",sticky:""}},[n("b-container",[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Talk Piggy")]),n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[n("TimerControl")],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Menu",right:""}},[n("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.add-speaker-modal",modifiers:{"add-speaker-modal":!0}}],attrs:{href:"#"}},[e._v("\n          Add Piggy\n        ")])],1)],1),n("b-modal",{ref:"modal",attrs:{id:"add-speaker-modal",title:"Add Piggy"},on:{ok:e.handleOk,shown:e.focusInput}},[n("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-input",{ref:"name-field",attrs:{placeholder:"Joe Schmo"},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}})],1)],1)],1)],1)},A=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e.running?e._e():n("b-button",{attrs:{variant:"light"},on:{click:e.startTimer}},[e._v("\n    Start\n  ")]),e.running?n("b-button",{on:{click:e.stopTimer}},[e._v("Pause")]):e._e()],1)},B=[],F={methods:Object(l["a"])({},Object(d["b"])(["startTimer","stopTimer"])),computed:{running:function(){return null!==this.$store.state.tickTimer}}},L=F,R=Object(b["a"])(L,J,B,!1,null,null,null),G=R.exports,U={components:{TimerControl:G},data:function(){return{name:""}},methods:Object(l["a"])({},Object(d["c"])(["addSpeaker"]),{focusInput:function(){this.$refs["name-field"].focus()},handleOk:function(){this.addSpeaker(this.name),this.name=""},handleSubmit:function(){this.handleOk(this.name),this.$refs.modal.hide()}})},q=U,z=Object(b["a"])(q,I,A,!1,null,null,null),H=z.exports,K={name:"app",components:{MainPanel:y,SpeakerList:D,TopBar:H}},Q=K,V=(n("034f"),Object(b["a"])(Q,o,s,!1,null,null,null)),W=V.exports;n("20d6");function X(e){return{id:Math.random().toString(),name:e,isSpeaking:!1,speakingSeconds:0}}function Y(e,t){return e.findIndex(function(e){return e.id===t})}r["default"].use(d["a"]);var Z=new d["a"].Store({state:{speakers:[X("Steven"),X("Nick")],tickSeconds:0,tickTimer:null,crosstalkSeconds:0},mutations:{addSpeaker:function(e,t){e.speakers.push(X(t))},editSpeakerName:function(e,t){var n=t.id,a=t.name;console.log("editspeakername ARGS",arguments);var i=Y(e.speakers,n);if(i>=0){var o=e.speakers[i];r["default"].set(e.speakers,i,Object(l["a"])({},o,{name:a}))}},removeSpeaker:function(e,t){var n=t.id;e.speakers=e.speakers.filter(function(e){return e.id!==n})},toggleSpeaking:function(e,t){var n=t.id,a=Y(e.speakers,n);if(a>=0){var i=e.speakers[a];r["default"].set(e.speakers,a,Object(l["a"])({},i,{isSpeaking:!i.isSpeaking}))}},incrementTick:function(e){var t=e.speakers.reduce(function(e,t){return t.isSpeaking?(t.speakingSeconds++,e+1):e},0);t>1&&e.crosstalkSeconds++,e.tickSeconds++}},actions:{startTalking:function(e,t){var n=e.commit,r=e.dispatch;r("startTimer"),n("toggleSpeaking",t)},startTimer:function(e){var t=e.commit,n=e.state;n.tickTimer||(n.tickTimer=setInterval(function(){return t("incrementTick")},1e3))},stopTimer:function(e){var t=e.state;clearInterval(t.tickTimer),t.tickTimer=null}}});n("f9e3"),n("2dd8");r["default"].use(i.a),r["default"].config.productionTip=!1,new r["default"]({store:Z,render:function(e){return e(W)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.b3382c94.js.map