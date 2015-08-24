// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.subs');
goog.require('cljs.core');
goog.require('freactive.core');
todomvc.subs.filter_fn_for = (function todomvc$subs$filter_fn_for(showing_kw){
var G__10030 = (((showing_kw instanceof cljs.core.Keyword))?showing_kw.fqn:null);
switch (G__10030) {
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
return null;

}
});
todomvc.subs.todos = (function todomvc$subs$todos(db,_){
return freactive.core.rx_STAR_.call(null,(function (){
return cljs.core.vals.call(null,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}),true);
});
todomvc.subs.showing = (function todomvc$subs$showing(db,_){
return freactive.core.cursor.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604));
});
todomvc.subs.visible_todos = (function todomvc$subs$visible_todos(db,_){
var showing = todomvc.subs.showing.call(null,db,_);
var todos = todomvc.subs.todos.call(null,db,_);
return freactive.core.rx_STAR_.call(null,((function (showing,todos){
return (function (){
var temp__4425__auto__ = todomvc.subs.filter_fn_for.call(null,cljs.core.deref.call(null,showing));
if(cljs.core.truth_(temp__4425__auto__)){
var filter_fn = temp__4425__auto__;
return cljs.core.filter.call(null,filter_fn,cljs.core.deref.call(null,todos));
} else {
return null;
}
});})(showing,todos))
,true);
});
todomvc.subs.completed_count = (function todomvc$subs$completed_count(db,_){
var todos = todomvc.subs.todos.call(null,db,_);
return freactive.core.rx_STAR_.call(null,((function (todos){
return (function (){
return cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.deref.call(null,todos)));
});})(todos))
,true);
});
todomvc.subs.footer_stats = (function todomvc$subs$footer_stats(db,_){
var cc = todomvc.subs.completed_count.call(null,db,_);
var todos = todomvc.subs.todos.call(null,db,_);
var showing = todomvc.subs.showing.call(null,db,_);
return freactive.core.rx_STAR_.call(null,((function (cc,todos,showing){
return (function (){
var cc__$1 = cljs.core.deref.call(null,cc);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.deref.call(null,todos)) - cc__$1),cc__$1,cljs.core.deref.call(null,showing)], null);
});})(cc,todos,showing))
,true);
});

//# sourceMappingURL=subs.js.map?rel=1440417677559