// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('todomvc.subs');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('todomvc.handlers');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('todomvc.views.reagent');
goog.require('ampere.om');
goog.require('goog.History');
goog.require('goog.events');
goog.require('todomvc.views.om');
goog.require('ampere.core');
goog.require('ampere.reagent');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
var action__12009__auto___12101 = (function (params__12010__auto__){
if(cljs.core.map_QMARK_.call(null,params__12010__auto__)){
var map__12098 = params__12010__auto__;
var map__12098__$1 = ((((!((map__12098 == null)))?((((map__12098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12098):map__12098);
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12010__auto__)){
var vec__12100 = params__12010__auto__;
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__12009__auto___12101);

var action__12009__auto___12105 = (function (params__12010__auto__){
if(cljs.core.map_QMARK_.call(null,params__12010__auto__)){
var map__12102 = params__12010__auto__;
var map__12102__$1 = ((((!((map__12102 == null)))?((((map__12102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12102):map__12102);
var filter = cljs.core.get.call(null,map__12102__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),cljs.core.keyword.call(null,filter)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12010__auto__)){
var vec__12104 = params__12010__auto__;
var filter = cljs.core.nth.call(null,vec__12104,(0),null);
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),cljs.core.keyword.call(null,filter)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:filter",action__12009__auto___12105);

todomvc.core.history = (function (){var G__12106 = (new goog.History());
goog.events.listen(G__12106,goog.history.EventType.NAVIGATE,((function (G__12106){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__12106))
);

G__12106.setEnabled(true);

return G__12106;
})();
todomvc.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"todos","todos",630308868),todomvc.subs.todos,new cljs.core.Keyword(null,"showing","showing",798009604),todomvc.subs.showing,new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253),todomvc.subs.visible_todos,new cljs.core.Keyword(null,"completed-count","completed-count",484261033),todomvc.subs.completed_count,new cljs.core.Keyword(null,"footer-stats","footer-stats",1851278595),todomvc.subs.footer_stats], null)], null);
todomvc.core.main = (function todomvc$core$main(){
ampere.core.init_BANG_.call(null,todomvc.core.config);

ampere.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

var app = document.getElementById("app");
var view = goog.Uri.parse(window.location).getParameterValue("view");
var G__12108 = view;
switch (G__12108) {
case "om":
ampere.om.init_BANG_.call(null);

return om.core.root.call(null,todomvc.views.om.todo_app,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),app,new cljs.core.Keyword(null,"instrument","instrument",-960698844),ampere.om.instrument], null));

break;
case "reagent":
ampere.reagent.init_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_app], null),app);

break;
default:
return null;

}
});
goog.exportSymbol('todomvc.core.main', todomvc.core.main);
todomvc.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1440417679693