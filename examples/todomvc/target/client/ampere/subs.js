// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.subs');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('goog.object');
goog.require('ampere.db');
goog.require('ampere.utils');
/**
 * handler-id → handler-fn
 */
ampere.subs.key__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * [db v] → rx
 */
ampere.subs.cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ampere.subs._STAR_cache_QMARK__STAR_ = true;
/**
 * Unregisters all subscription handlers.
 */
ampere.subs.clear_handlers_BANG_ = (function ampere$subs$clear_handlers_BANG_(){
cljs.core.reset_BANG_.call(null,ampere.subs.cache,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,ampere.subs.key__GT_fn,cljs.core.PersistentArrayMap.EMPTY);
});
ampere.subs.remove_keys = (function ampere$subs$remove_keys(pred,m){
if(cljs.core.truth_(m)){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,_){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Registers a handler function for an id.
 */
ampere.subs.register = (function ampere$subs$register(key_v,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,ampere.subs.key__GT_fn),key_v)){
ampere.utils.warn.call(null,"ampere: overwriting subscription-handler for: ",key_v);
} else {
}

cljs.core.swap_BANG_.call(null,ampere.subs.cache,cljs.core.partial.call(null,ampere.subs.remove_keys,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,key_v),cljs.core.first,cljs.core.second)));

return cljs.core.swap_BANG_.call(null,ampere.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
ampere.subs.path_handler = (function ampere$subs$path_handler(db,v){
return freactive.core.rx_STAR_.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),v);
}),true);
});
/**
 * Returns a reaction which observes a part of app-db.
 */
ampere.subs.subscribe = (function ampere$subs$subscribe(var_args){
var args18002 = [];
var len__5620__auto___18006 = arguments.length;
var i__5621__auto___18007 = (0);
while(true){
if((i__5621__auto___18007 < len__5620__auto___18006)){
args18002.push((arguments[i__5621__auto___18007]));

var G__18008 = (i__5621__auto___18007 + (1));
i__5621__auto___18007 = G__18008;
continue;
} else {
}
break;
}

var G__18004 = args18002.length;
switch (G__18004) {
case 1:
return ampere.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ampere.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18002.length)].join('')));

}
});

ampere.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (v){
var key_v = ampere.utils.first_in_vector.call(null,v);
var handler_fn = cljs.core.get.call(null,cljs.core.deref.call(null,ampere.subs.key__GT_fn),key_v,ampere.subs.path_handler);
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ampere.db.app_db,v], null);
if(cljs.core.truth_(ampere.subs._STAR_cache_QMARK__STAR_)){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,ampere.subs.cache),cache_key);
if(cljs.core.truth_(temp__4423__auto__)){
var sub = temp__4423__auto__;
return sub;
} else {
var sub = handler_fn.call(null,ampere.db.app_db,v);
var sub__$1 = freactive.core.rx_STAR_.call(null,((function (sub,temp__4423__auto__,key_v,handler_fn,cache_key){
return (function (){
return cljs.core.deref.call(null,sub);
});})(sub,temp__4423__auto__,key_v,handler_fn,cache_key))
,true,((function (sub,temp__4423__auto__,key_v,handler_fn,cache_key){
return (function (){
return cljs.core.swap_BANG_.call(null,ampere.subs.cache,cljs.core.dissoc,cache_key);
});})(sub,temp__4423__auto__,key_v,handler_fn,cache_key))
);
goog.object.set(sub__$1,"__ampere_v",v);

cljs.core.swap_BANG_.call(null,ampere.subs.cache,cljs.core.assoc,cache_key,sub__$1);

return sub__$1;
}
} else {
var sub = handler_fn.call(null,ampere.db.app_db,v);
goog.object.set(sub,"__ampere_v",v);

return sub;
}
});

ampere.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (db,v){
var app_db18005 = ampere.db.app_db;
ampere.db.app_db = db;

try{return ampere.subs.subscribe.call(null,v);
}finally {ampere.db.app_db = app_db18005;
}});

ampere.subs.subscribe.cljs$lang$maxFixedArity = 2;
ampere.subs.sample = (function ampere$subs$sample(db,v){

var _STAR_cache_QMARK__STAR_18011 = ampere.subs._STAR_cache_QMARK__STAR_;
ampere.subs._STAR_cache_QMARK__STAR_ = false;

try{return cljs.core.deref.call(null,ampere.subs.subscribe.call(null,freactive.core.atom.call(null,db),v));
}finally {ampere.subs._STAR_cache_QMARK__STAR_ = _STAR_cache_QMARK__STAR_18011;
}});

//# sourceMappingURL=subs.js.map?rel=1440417690550