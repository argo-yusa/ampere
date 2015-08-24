// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.undo');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('ampere.utils');
goog.require('ampere.db');
goog.require('ampere.handlers');
/**
 * Maximum number of undo states maintained.
 */
ampere.undo.max_undos = cljs.core.atom.call(null,(50));
ampere.undo.set_max_undos_BANG_ = (function ampere$undo$set_max_undos_BANG_(n){
return cljs.core.reset_BANG_.call(null,ampere.undo.max_undos,n);
});
/**
 * A list of history states.
 */
ampere.undo.undo_list = freactive.core.atom.call(null,cljs.core.List.EMPTY);
/**
 * A list of future states, caused by undoing.
 */
ampere.undo.redo_list = freactive.core.atom.call(null,cljs.core.List.EMPTY);
ampere.undo.clear_undos_BANG_ = (function ampere$undo$clear_undos_BANG_(){
return cljs.core.reset_BANG_.call(null,ampere.undo.undo_list,cljs.core.List.EMPTY);
});
ampere.undo.clear_redos_BANG_ = (function ampere$undo$clear_redos_BANG_(){
return cljs.core.reset_BANG_.call(null,ampere.undo.redo_list,cljs.core.List.EMPTY);
});
ampere.undo.clear_history_BANG_ = (function ampere$undo$clear_history_BANG_(){
ampere.undo.clear_undos_BANG_.call(null);

return ampere.undo.clear_redos_BANG_.call(null);
});
/**
 * Stores the value currently in app-db, so the user can later undo.
 */
ampere.undo.store_now_BANG_ = (function ampere$undo$store_now_BANG_(explanation){
ampere.undo.clear_redos_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,ampere.undo.undo_list,(function (p1__17990_SHARP_){
return cljs.core.take.call(null,cljs.core.deref.call(null,ampere.undo.max_undos),cljs.core.conj.call(null,p1__17990_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref.call(null,ampere.db.app_db),new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation], null)));
}));
});
ampere.undo.undos_QMARK_ = freactive.core.rx_STAR_.call(null,(function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,ampere.undo.undo_list)) > (0));
}),true);
ampere.undo.redos_QMARK_ = freactive.core.rx_STAR_.call(null,(function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,ampere.undo.redo_list)) > (0));
}),true);
/**
 * List of undo descriptions.
 */
ampere.undo.undo_explanations = freactive.core.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"explanation","explanation",-1426612608),cljs.core.deref.call(null,ampere.undo.undo_list));
}),true);
/**
 * Pass `from` ← `undo-list` and `to` ← `redo-list` to undo,
 * and vice versa to redo.
 */
ampere.undo.dodo = (function ampere$undo$dodo(from,to){
var u = cljs.core.deref.call(null,from);
cljs.core.swap_BANG_.call(null,to,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref.call(null,ampere.db.app_db)], null));

cljs.core.swap_BANG_.call(null,from,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,ampere.db.app_db,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,u)));
});
/**
 * Undo/redo until we reach n or run out of undos/redos.
 */
ampere.undo.dodo_n = (function ampere$undo$dodo_n(from,to,n){
while(true){
if(cljs.core.truth_((function (){var and__4550__auto__ = (n > (0));
if(and__4550__auto__){
return ampere.undo.undos_QMARK_;
} else {
return and__4550__auto__;
}
})())){
ampere.undo.dodo.call(null,from,to);

var G__17991 = from;
var G__17992 = to;
var G__17993 = (n - (1));
from = G__17991;
to = G__17992;
n = G__17993;
continue;
} else {
return null;
}
break;
}
});
ampere.handlers.register_base.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function ampere$undo$handler(_,p__17994){
var vec__17996 = p__17994;
var ___$1 = cljs.core.nth.call(null,vec__17996,(0),null);
var n = cljs.core.nth.call(null,vec__17996,(1),null);
if(cljs.core.not.call(null,ampere.undo.undos_QMARK_)){
return ampere.utils.warn.call(null,"ampere: you did a (dispatch [:undo]), but there is nothing to undo.");
} else {
return ampere.undo.dodo_n.call(null,ampere.undo.undo_list,ampere.undo.redo_list,(function (){var or__4562__auto__ = n;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return (1);
}
})());
}
}));
ampere.handlers.register_base.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),(function ampere$undo$handler(_,p__17997){
var vec__17999 = p__17997;
var ___$1 = cljs.core.nth.call(null,vec__17999,(0),null);
var n = cljs.core.nth.call(null,vec__17999,(1),null);
if(cljs.core.not.call(null,ampere.undo.redos_QMARK_.call(null))){
return ampere.utils.warn.call(null,"ampere: you did a (dispatch [:redo]), but there is nothing to redo.");
} else {
return ampere.undo.dodo_n.call(null,ampere.undo.redo_list,ampere.undo.undo_list,(function (){var or__4562__auto__ = n;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return (1);
}
})());
}
}));
ampere.handlers.register_base.call(null,new cljs.core.Keyword(null,"purge-redos","purge-redos",1815721624),(function ampere$undo$handler(_,___$1){
if(cljs.core.not.call(null,ampere.undo.redos_QMARK_.call(null))){
return ampere.utils.warn.call(null,"ampere: you did a (dispatch [:purge-redos]), but there is nothing to redo.");
} else {
return ampere.undo.clear_redos_BANG_.call(null);
}
}));

//# sourceMappingURL=undo.js.map?rel=1440417690512