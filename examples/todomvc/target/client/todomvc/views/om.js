// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.views.om');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('ampere.core');
goog.require('ampere.om');
todomvc.views.om.todo_input = (function todomvc$views$om$todo_input(p__11888,owner){
var map__11899 = p__11888;
var map__11899__$1 = ((((!((map__11899 == null)))?((((map__11899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11899):map__11899);
var props = map__11899__$1;
var title = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
if(typeof todomvc.views.om.t_todomvc$views$om11901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11901 = (function (todo_input,p__11888,owner,map__11899,props,title,on_save,on_stop,meta11902){
this.todo_input = todo_input;
this.p__11888 = p__11888;
this.owner = owner;
this.map__11899 = map__11899;
this.props = props;
this.title = title;
this.on_save = on_save;
this.on_stop = on_stop;
this.meta11902 = meta11902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (_11903,meta11902__$1){
var self__ = this;
var _11903__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11901(self__.todo_input,self__.p__11888,self__.owner,self__.map__11899,self__.props,self__.title,self__.on_save,self__.on_stop,meta11902__$1));
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.t_todomvc$views$om11901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (_11903){
var self__ = this;
var _11903__$1 = this;
return self__.meta11902;
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.t_todomvc$views$om11901.prototype.om$core$IInitState$ = true;

todomvc.views.om.t_todomvc$views$om11901.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),self__.title], null);
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.t_todomvc$views$om11901.prototype.om$core$IRenderState$ = true;

todomvc.views.om.t_todomvc$views$om11901.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (_,p__11904){
var self__ = this;
var map__11905 = p__11904;
var map__11905__$1 = ((((!((map__11905 == null)))?((((map__11905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11905):map__11905);
var val = cljs.core.get.call(null,map__11905__$1,new cljs.core.Keyword(null,"val","val",128701612));
var ___$1 = this;
var stop = ((function (___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"val","val",128701612),"");

if(cljs.core.truth_(self__.on_stop)){
return self__.on_stop.call(null);
} else {
return null;
}
});})(___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop))
;
var save = ((function (stop,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str(val)].join(''));
if(!(cljs.core.empty_QMARK_.call(null,v))){
self__.on_save.call(null,v);
} else {
}

return stop.call(null);
});})(stop,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop))
;
var attrs11907 = cljs.core.merge.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (stop,save,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (p1__11886_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"val","val",128701612),p1__11886_SHARP_.target.value);
});})(stop,save,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (stop,save,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (p1__11887_SHARP_){
var G__11908 = p1__11887_SHARP_.which;
switch (G__11908) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(stop,save,___$1,map__11905,map__11905__$1,val,map__11899,map__11899__$1,props,title,on_save,on_stop))
], null));
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs11907))?sablono.interpreter.attributes.call(null,attrs11907):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11907))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11907)], null))));
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.t_todomvc$views$om11901.getBasis = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"todo-input","todo-input",-1936770819,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"on-save","on-save",-1036259503,null),new cljs.core.Symbol(null,"on-stop","on-stop",-1134321254,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"props","props",2093813254,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__11888","p__11888",-921799706,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__11899","map__11899",-1320193812,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"on-save","on-save",-1036259503,null),new cljs.core.Symbol(null,"on-stop","on-stop",-1134321254,null),new cljs.core.Symbol(null,"meta11902","meta11902",73688230,null)], null);
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.t_todomvc$views$om11901.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11901.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11901";

todomvc.views.om.t_todomvc$views$om11901.cljs$lang$ctorPrWriter = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11901");
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

todomvc.views.om.__GT_t_todomvc$views$om11901 = ((function (map__11899,map__11899__$1,props,title,on_save,on_stop){
return (function todomvc$views$om$todo_input_$___GT_t_todomvc$views$om11901(todo_input__$1,p__11888__$1,owner__$1,map__11899__$2,props__$1,title__$1,on_save__$1,on_stop__$1,meta11902){
return (new todomvc.views.om.t_todomvc$views$om11901(todo_input__$1,p__11888__$1,owner__$1,map__11899__$2,props__$1,title__$1,on_save__$1,on_stop__$1,meta11902));
});})(map__11899,map__11899__$1,props,title,on_save,on_stop))
;

}

return (new todomvc.views.om.t_todomvc$views$om11901(todomvc$views$om$todo_input,p__11888,owner,map__11899__$1,props,title,on_save,on_stop,cljs.core.PersistentArrayMap.EMPTY));
});
todomvc.views.om.todo_edit = (function todomvc$views$om$todo_edit(props,owner){
if(typeof todomvc.views.om.t_todomvc$views$om11913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11913 = (function (todo_edit,props,owner,meta11914){
this.todo_edit = todo_edit;
this.props = props;
this.owner = owner;
this.meta11914 = meta11914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11915,meta11914__$1){
var self__ = this;
var _11915__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11913(self__.todo_edit,self__.props,self__.owner,meta11914__$1));
});

todomvc.views.om.t_todomvc$views$om11913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11915){
var self__ = this;
var _11915__$1 = this;
return self__.meta11914;
});

todomvc.views.om.t_todomvc$views$om11913.prototype.om$core$IDidMount$ = true;

todomvc.views.om.t_todomvc$views$om11913.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_node.call(null,self__.owner).focus();
});

todomvc.views.om.t_todomvc$views$om11913.prototype.om$core$IRender$ = true;

todomvc.views.om.t_todomvc$views$om11913.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,todomvc.views.om.todo_input,self__.props);
});

todomvc.views.om.t_todomvc$views$om11913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"todo-edit","todo-edit",573841998,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta11914","meta11914",-914768079,null)], null);
});

todomvc.views.om.t_todomvc$views$om11913.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11913.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11913";

todomvc.views.om.t_todomvc$views$om11913.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11913");
});

todomvc.views.om.__GT_t_todomvc$views$om11913 = (function todomvc$views$om$todo_edit_$___GT_t_todomvc$views$om11913(todo_edit__$1,props__$1,owner__$1,meta11914){
return (new todomvc.views.om.t_todomvc$views$om11913(todo_edit__$1,props__$1,owner__$1,meta11914));
});

}

return (new todomvc.views.om.t_todomvc$views$om11913(todomvc$views$om$todo_edit,props,owner,cljs.core.PersistentArrayMap.EMPTY));
});
todomvc.views.om.stats_footer = (function todomvc$views$om$stats_footer(p__11916,owner){
var map__11928 = p__11916;
var map__11928__$1 = ((((!((map__11928 == null)))?((((map__11928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11928):map__11928);
var footer_stats = cljs.core.get.call(null,map__11928__$1,new cljs.core.Keyword(null,"footer-stats","footer-stats",1851278595));
if(typeof todomvc.views.om.t_todomvc$views$om11930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11930 = (function (stats_footer,p__11916,owner,map__11928,footer_stats,meta11931){
this.stats_footer = stats_footer;
this.p__11916 = p__11916;
this.owner = owner;
this.map__11928 = map__11928;
this.footer_stats = footer_stats;
this.meta11931 = meta11931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11928,map__11928__$1,footer_stats){
return (function (_11932,meta11931__$1){
var self__ = this;
var _11932__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11930(self__.stats_footer,self__.p__11916,self__.owner,self__.map__11928,self__.footer_stats,meta11931__$1));
});})(map__11928,map__11928__$1,footer_stats))
;

todomvc.views.om.t_todomvc$views$om11930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11928,map__11928__$1,footer_stats){
return (function (_11932){
var self__ = this;
var _11932__$1 = this;
return self__.meta11931;
});})(map__11928,map__11928__$1,footer_stats))
;

todomvc.views.om.t_todomvc$views$om11930.prototype.om$core$IRender$ = true;

todomvc.views.om.t_todomvc$views$om11930.prototype.om$core$IRender$render$arity$1 = ((function (map__11928,map__11928__$1,footer_stats){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__11933 = self__.footer_stats;
var active = cljs.core.nth.call(null,vec__11933,(0),null);
var done = cljs.core.nth.call(null,vec__11933,(1),null);
var filter = cljs.core.nth.call(null,vec__11933,(2),null);
var props_for = ((function (vec__11933,active,done,filter,___$1,map__11928,map__11928__$1,footer_stats){
return (function (filter_kw,txt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,filter_kw,filter))?"selected":null),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/"),cljs.core.str(cljs.core.name.call(null,filter_kw))].join('')], null),txt], null);
});})(vec__11933,active,done,filter,___$1,map__11928,map__11928__$1,footer_stats))
;
return React.createElement("footer",{"id": "footer"},React.createElement("div",null,React.createElement("span",{"id": "todo-count"},(function (){var attrs11934 = active;
return cljs.core.apply.call(null,React.createElement,"strong",((cljs.core.map_QMARK_.call(null,attrs11934))?sablono.interpreter.attributes.call(null,attrs11934):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11934))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11934)], null))));
})()," ",sablono.interpreter.interpret.call(null,(function (){var G__11938 = active;
switch (G__11938) {
case (1):
return "item";

break;
default:
return "items";

}
})())," left"),React.createElement("ul",{"id": "filters"},(function (){var attrs11935 = props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742),"All");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs11935))?sablono.interpreter.attributes.call(null,attrs11935):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11935))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11935)], null))));
})(),(function (){var attrs11936 = props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068),"Active");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs11936))?sablono.interpreter.attributes.call(null,attrs11936):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11936))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11936)], null))));
})(),(function (){var attrs11937 = props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188),"Completed");
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs11937))?sablono.interpreter.attributes.call(null,attrs11937):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11937))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11937)], null))));
})()),sablono.interpreter.interpret.call(null,(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__11933,active,done,filter,props_for,___$1,map__11928,map__11928__$1,footer_stats){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)], null));
});})(vec__11933,active,done,filter,props_for,___$1,map__11928,map__11928__$1,footer_stats))
], null),"Clear completed ",done], null):null))));
});})(map__11928,map__11928__$1,footer_stats))
;

todomvc.views.om.t_todomvc$views$om11930.getBasis = ((function (map__11928,map__11928__$1,footer_stats){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"stats-footer","stats-footer",-1891508051,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"footer-stats","footer-stats",-803157174,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__11916","p__11916",-2116296939,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__11928","map__11928",-1422715013,null),new cljs.core.Symbol(null,"footer-stats","footer-stats",-803157174,null),new cljs.core.Symbol(null,"meta11931","meta11931",-962315448,null)], null);
});})(map__11928,map__11928__$1,footer_stats))
;

todomvc.views.om.t_todomvc$views$om11930.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11930.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11930";

todomvc.views.om.t_todomvc$views$om11930.cljs$lang$ctorPrWriter = ((function (map__11928,map__11928__$1,footer_stats){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11930");
});})(map__11928,map__11928__$1,footer_stats))
;

todomvc.views.om.__GT_t_todomvc$views$om11930 = ((function (map__11928,map__11928__$1,footer_stats){
return (function todomvc$views$om$stats_footer_$___GT_t_todomvc$views$om11930(stats_footer__$1,p__11916__$1,owner__$1,map__11928__$2,footer_stats__$1,meta11931){
return (new todomvc.views.om.t_todomvc$views$om11930(stats_footer__$1,p__11916__$1,owner__$1,map__11928__$2,footer_stats__$1,meta11931));
});})(map__11928,map__11928__$1,footer_stats))
;

}

return (new todomvc.views.om.t_todomvc$views$om11930(todomvc$views$om$stats_footer,p__11916,owner,map__11928__$1,footer_stats,cljs.core.PersistentArrayMap.EMPTY));
});
todomvc.views.om.todo_item = (function todomvc$views$om$todo_item(p__11941,owner){
var map__11950 = p__11941;
var map__11950__$1 = ((((!((map__11950 == null)))?((((map__11950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11950):map__11950);
var id = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(typeof todomvc.views.om.t_todomvc$views$om11952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11952 = (function (todo_item,p__11941,owner,map__11950,id,done,title,meta11953){
this.todo_item = todo_item;
this.p__11941 = p__11941;
this.owner = owner;
this.map__11950 = map__11950;
this.id = id;
this.done = done;
this.title = title;
this.meta11953 = meta11953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11950,map__11950__$1,id,done,title){
return (function (_11954,meta11953__$1){
var self__ = this;
var _11954__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11952(self__.todo_item,self__.p__11941,self__.owner,self__.map__11950,self__.id,self__.done,self__.title,meta11953__$1));
});})(map__11950,map__11950__$1,id,done,title))
;

todomvc.views.om.t_todomvc$views$om11952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11950,map__11950__$1,id,done,title){
return (function (_11954){
var self__ = this;
var _11954__$1 = this;
return self__.meta11953;
});})(map__11950,map__11950__$1,id,done,title))
;

todomvc.views.om.t_todomvc$views$om11952.prototype.om$core$IRenderState$ = true;

todomvc.views.om.t_todomvc$views$om11952.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__11950,map__11950__$1,id,done,title){
return (function (_,p__11955){
var self__ = this;
var map__11956 = p__11955;
var map__11956__$1 = ((((!((map__11956 == null)))?((((map__11956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11956):map__11956);
var editing = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
return React.createElement("li",{"className": [cljs.core.str((cljs.core.truth_(self__.done)?"completed ":null)),cljs.core.str((cljs.core.truth_(editing)?"editing":null))].join('')},React.createElement("div",{"className": "view"},sablono.interpreter.create_element.call(null,"input",{"type": "checkbox", "checked": self__.done, "onChange": ((function (___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),self__.id], null));
});})(___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title))
, "className": "toggle"}),React.createElement("label",{"onDoubleClick": ((function (___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title))
},sablono.interpreter.interpret.call(null,self__.title)),React.createElement("button",{"onClick": ((function (___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),self__.id], null));
});})(___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title))
, "className": "destroy"})),sablono.interpreter.interpret.call(null,(cljs.core.truth_(editing)?om.core.build.call(null,todomvc.views.om.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),self__.title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title){
return (function (p1__11940_SHARP_){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),self__.id,p1__11940_SHARP_], null));
});})(___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
});})(___$1,map__11956,map__11956__$1,editing,map__11950,map__11950__$1,id,done,title))
], null)):null)));
});})(map__11950,map__11950__$1,id,done,title))
;

todomvc.views.om.t_todomvc$views$om11952.getBasis = ((function (map__11950,map__11950__$1,id,done,title){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"todo-item","todo-item",579606723,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__11941","p__11941",1682493371,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__11950","map__11950",461078047,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"meta11953","meta11953",451036672,null)], null);
});})(map__11950,map__11950__$1,id,done,title))
;

todomvc.views.om.t_todomvc$views$om11952.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11952.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11952";

todomvc.views.om.t_todomvc$views$om11952.cljs$lang$ctorPrWriter = ((function (map__11950,map__11950__$1,id,done,title){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11952");
});})(map__11950,map__11950__$1,id,done,title))
;

todomvc.views.om.__GT_t_todomvc$views$om11952 = ((function (map__11950,map__11950__$1,id,done,title){
return (function todomvc$views$om$todo_item_$___GT_t_todomvc$views$om11952(todo_item__$1,p__11941__$1,owner__$1,map__11950__$2,id__$1,done__$1,title__$1,meta11953){
return (new todomvc.views.om.t_todomvc$views$om11952(todo_item__$1,p__11941__$1,owner__$1,map__11950__$2,id__$1,done__$1,title__$1,meta11953));
});})(map__11950,map__11950__$1,id,done,title))
;

}

return (new todomvc.views.om.t_todomvc$views$om11952(todomvc$views$om$todo_item,p__11941,owner,map__11950__$1,id,done,title,cljs.core.PersistentArrayMap.EMPTY));
});
todomvc.views.om.todo_list = (function todomvc$views$om$todo_list(p__11958,owner){
var map__11965 = p__11958;
var map__11965__$1 = ((((!((map__11965 == null)))?((((map__11965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11965):map__11965);
var visible_todos = cljs.core.get.call(null,map__11965__$1,new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253));
if(typeof todomvc.views.om.t_todomvc$views$om11967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11967 = (function (todo_list,p__11958,owner,map__11965,visible_todos,meta11968){
this.todo_list = todo_list;
this.p__11958 = p__11958;
this.owner = owner;
this.map__11965 = map__11965;
this.visible_todos = visible_todos;
this.meta11968 = meta11968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11965,map__11965__$1,visible_todos){
return (function (_11969,meta11968__$1){
var self__ = this;
var _11969__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11967(self__.todo_list,self__.p__11958,self__.owner,self__.map__11965,self__.visible_todos,meta11968__$1));
});})(map__11965,map__11965__$1,visible_todos))
;

todomvc.views.om.t_todomvc$views$om11967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11965,map__11965__$1,visible_todos){
return (function (_11969){
var self__ = this;
var _11969__$1 = this;
return self__.meta11968;
});})(map__11965,map__11965__$1,visible_todos))
;

todomvc.views.om.t_todomvc$views$om11967.prototype.om$core$IRender$ = true;

todomvc.views.om.t_todomvc$views$om11967.prototype.om$core$IRender$render$arity$1 = ((function (map__11965,map__11965__$1,visible_todos){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs11970 = om.core.build_all.call(null,todomvc.views.om.todo_item,self__.visible_todos);
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs11970))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"todo-list"], null),attrs11970)):{"id": "todo-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11970))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11970)], null))));
});})(map__11965,map__11965__$1,visible_todos))
;

todomvc.views.om.t_todomvc$views$om11967.getBasis = ((function (map__11965,map__11965__$1,visible_todos){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible-todos","visible-todos",945899274,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__11958","p__11958",444977895,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__11965","map__11965",-514457775,null),new cljs.core.Symbol(null,"visible-todos","visible-todos",945899274,null),new cljs.core.Symbol(null,"meta11968","meta11968",47084119,null)], null);
});})(map__11965,map__11965__$1,visible_todos))
;

todomvc.views.om.t_todomvc$views$om11967.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11967.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11967";

todomvc.views.om.t_todomvc$views$om11967.cljs$lang$ctorPrWriter = ((function (map__11965,map__11965__$1,visible_todos){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11967");
});})(map__11965,map__11965__$1,visible_todos))
;

todomvc.views.om.__GT_t_todomvc$views$om11967 = ((function (map__11965,map__11965__$1,visible_todos){
return (function todomvc$views$om$todo_list_$___GT_t_todomvc$views$om11967(todo_list__$1,p__11958__$1,owner__$1,map__11965__$2,visible_todos__$1,meta11968){
return (new todomvc.views.om.t_todomvc$views$om11967(todo_list__$1,p__11958__$1,owner__$1,map__11965__$2,visible_todos__$1,meta11968));
});})(map__11965,map__11965__$1,visible_todos))
;

}

return (new todomvc.views.om.t_todomvc$views$om11967(todomvc$views$om$todo_list,p__11958,owner,map__11965__$1,visible_todos,cljs.core.PersistentArrayMap.EMPTY));
});
todomvc.views.om.todo_app = (function todomvc$views$om$todo_app(_,owner){
if(typeof todomvc.views.om.t_todomvc$views$om11979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
todomvc.views.om.t_todomvc$views$om11979 = (function (todo_app,_,owner,meta11980){
this.todo_app = todo_app;
this._ = _;
this.owner = owner;
this.meta11980 = meta11980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
todomvc.views.om.t_todomvc$views$om11979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11981,meta11980__$1){
var self__ = this;
var _11981__$1 = this;
return (new todomvc.views.om.t_todomvc$views$om11979(self__.todo_app,self__._,self__.owner,meta11980__$1));
});

todomvc.views.om.t_todomvc$views$om11979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11981){
var self__ = this;
var _11981__$1 = this;
return self__.meta11980;
});

todomvc.views.om.t_todomvc$views$om11979.prototype.om$core$IRender$ = true;

todomvc.views.om.t_todomvc$views$om11979.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var todos = ampere.om.observe.call(null,self__.owner,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"super-todos","super-todos",2065818189)], null)));
var completed_count = ampere.om.observe.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed-count","completed-count",484261033)], null));
return React.createElement("div",null,React.createElement("section",{"id": "todoapp"},React.createElement("header",{"id": "header"},React.createElement("h1",null,"todos"),sablono.interpreter.interpret.call(null,om.core.build.call(null,todomvc.views.om.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (todos,completed_count,___$2){
return (function (p1__11971_SHARP_){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),p1__11971_SHARP_], null));
});})(todos,completed_count,___$2))
], null)))),sablono.interpreter.interpret.call(null,((cljs.core.empty_QMARK_.call(null,todos))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(completed_count > (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (todos,completed_count,___$2){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156)], null));
});})(todos,completed_count,___$2))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),om.core.build.call(null,todomvc.views.om.todo_list,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253)], null)], null)], null)], null))], null),om.core.build.call(null,todomvc.views.om.stats_footer,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"footer-stats","footer-stats",1851278595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer-stats","footer-stats",1851278595)], null)], null)], null)], null))], null)))),React.createElement("footer",{"id": "info"},React.createElement("p",null,"Double-click to edit a todo")));
});

todomvc.views.om.t_todomvc$views$om11979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"todo-app","todo-app",-778031523,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta11980","meta11980",-379007636,null)], null);
});

todomvc.views.om.t_todomvc$views$om11979.cljs$lang$type = true;

todomvc.views.om.t_todomvc$views$om11979.cljs$lang$ctorStr = "todomvc.views.om/t_todomvc$views$om11979";

todomvc.views.om.t_todomvc$views$om11979.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"todomvc.views.om/t_todomvc$views$om11979");
});

todomvc.views.om.__GT_t_todomvc$views$om11979 = (function todomvc$views$om$todo_app_$___GT_t_todomvc$views$om11979(todo_app__$1,___$1,owner__$1,meta11980){
return (new todomvc.views.om.t_todomvc$views$om11979(todo_app__$1,___$1,owner__$1,meta11980));
});

}

return (new todomvc.views.om.t_todomvc$views$om11979(todomvc$views$om$todo_app,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=om.js.map?rel=1440417679460