// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.handlers');
goog.require('cljs.core');
goog.require('ampere.db');
goog.require('ampere.utils');
/**
 * Given a vector of middleware, filter out any nils, and use `comp` to compose the elements.
 *   v can have nested vectors, and will be flattened before `comp` is applied.
 *   For convienience, if v is a function (assumed to be middleware already), just return it.
 *   Filtering out nils allows us to create Middleware conditionally like this:
 *   `(comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil`
 *   
 */
ampere.handlers.comp_middleware = (function ampere$handlers$comp_middleware(v){
if(cljs.core.fn_QMARK_.call(null,v)){
return v;
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var v__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,v));
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return cljs.core.identity;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,v__$1))){
return cljs.core.first.call(null,v__$1);
} else {
return cljs.core.apply.call(null,cljs.core.comp,v__$1);

}
}
} else {
return ampere.utils.warn.call(null,"ampere: comp-middleware expects a vector, got: ",v);

}
}
});
ampere.handlers.id__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ampere.handlers.lookup_handler = (function ampere$handlers$lookup_handler(event_id){
return cljs.core.get.call(null,cljs.core.deref.call(null,ampere.handlers.id__GT_fn),event_id);
});
/**
 * Unregister all event handlers
 */
ampere.handlers.clear_handlers_BANG_ = (function ampere$handlers$clear_handlers_BANG_(){
return cljs.core.reset_BANG_.call(null,ampere.handlers.id__GT_fn,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Register a handler for an event.
 *   This is low level and it is expected that `ampere.core/register-handler` would
 *   generally be used.
 */
ampere.handlers.register_base = (function ampere$handlers$register_base(var_args){
var args15270 = [];
var len__5620__auto___15273 = arguments.length;
var i__5621__auto___15274 = (0);
while(true){
if((i__5621__auto___15274 < len__5620__auto___15273)){
args15270.push((arguments[i__5621__auto___15274]));

var G__15275 = (i__5621__auto___15274 + (1));
i__5621__auto___15274 = G__15275;
continue;
} else {
}
break;
}

var G__15272 = args15270.length;
switch (G__15272) {
case 2:
return ampere.handlers.register_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ampere.handlers.register_base.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15270.length)].join('')));

}
});

ampere.handlers.register_base.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,ampere.handlers.id__GT_fn),event_id)){
ampere.utils.warn.call(null,"ampere: overwriting an event-handler for: ",event_id);
} else {
}

return cljs.core.swap_BANG_.call(null,ampere.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});

ampere.handlers.register_base.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware,handler_fn){
var mid_ware = ampere.handlers.comp_middleware.call(null,middleware);
var midware_PLUS_hfn = mid_ware.call(null,handler_fn);
return ampere.handlers.register_base.call(null,event_id,midware_PLUS_hfn);
});

ampere.handlers.register_base.cljs$lang$maxFixedArity = 3;
ampere.handlers._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the handler, then call it.
 *   By default, handlers are not assumed to be pure. They are called with
 *   two paramters:
 *  - the `app-db` atom
 *  - the event vector
 *   The handler is assumed to side-effect on `app-db` - the return value is ignored.
 *   To write a pure handler, use the `pure` middleware when registering the handler.
 */
ampere.handlers.handle = (function ampere$handlers$handle(event_v){
var event_id = ampere.utils.first_in_vector.call(null,event_v);
var handler_fn = ampere.handlers.lookup_handler.call(null,event_id);
if((handler_fn == null)){
return ampere.utils.error.call(null,"ampere: no event handler registered for: \"",event_id,"\". Ignoring.");
} else {
if(cljs.core.truth_(ampere.handlers._STAR_handling_STAR_)){
return ampere.utils.error.call(null,"ampere: while handling \"",ampere.handlers._STAR_handling_STAR_,"\"  dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync in an event handler.");
} else {
var _STAR_handling_STAR_15278 = ampere.handlers._STAR_handling_STAR_;
ampere.handlers._STAR_handling_STAR_ = event_v;

try{return handler_fn.call(null,ampere.db.app_db,event_v);
}finally {ampere.handlers._STAR_handling_STAR_ = _STAR_handling_STAR_15278;
}}
}
});
/**
 * Simple handler to assoc-in value at specified path.
 *   If path is empty, reset the whole state.
 */
ampere.handlers.setter = (function ampere$handlers$setter(db,p__15279){
var vec__15281 = p__15279;
var _ = cljs.core.nth.call(null,vec__15281,(0),null);
var args = cljs.core.nthnext.call(null,vec__15281,(1));
var value = cljs.core.last.call(null,args);
var temp__4423__auto__ = cljs.core.not_empty.call(null,cljs.core.flatten.call(null,cljs.core.butlast.call(null,args)));
if(cljs.core.truth_(temp__4423__auto__)){
var path = temp__4423__auto__;
return cljs.core.assoc_in.call(null,db,path,value);
} else {
return value;
}
});

//# sourceMappingURL=handlers.js.map?rel=1440417683296