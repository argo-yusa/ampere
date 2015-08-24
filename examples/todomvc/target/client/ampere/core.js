// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.core');
goog.require('cljs.core');
goog.require('ampere.subs');
goog.require('ampere.utils');
goog.require('ampere.handlers');
goog.require('ampere.router');
goog.require('ampere.middleware');
ampere.core.dispatch = ampere.router.dispatch;
ampere.core.dispatch_sync = ampere.router.dispatch_sync;
ampere.core.clear_event_handlers_BANG_ = ampere.handlers.clear_handlers_BANG_;
ampere.core.setter = ampere.handlers.setter;
ampere.core.register_sub = ampere.subs.register;
ampere.core.clear_sub_handlers_BANG_ = ampere.subs.clear_handlers_BANG_;
ampere.core.subscribe = ampere.subs.subscribe;
ampere.core.sample = ampere.subs.sample;
ampere.core.pure = ampere.middleware.pure;
ampere.core.debug = ampere.middleware.debug;
ampere.core.undoable = ampere.middleware.undoable;
ampere.core.path = ampere.middleware.path;
ampere.core.enrich = ampere.middleware.enrich;
ampere.core.trim_v = ampere.middleware.trim_v;
ampere.core.after = ampere.middleware.after;
ampere.core.log_ex = ampere.middleware.log_ex;
/**
 * Ampere uses the logging functions: warn, log, error, group and groupEnd
 * By default, these functions map directly to the js/console implementations
 * But you can override with your own (set or subset):
 *     (set-loggers!  {:warn my-warn
 *                     :log  my-looger ...})
 */
ampere.core.set_loggers_BANG_ = ampere.utils.set_loggers_BANG_;
/**
 * Almost 100% of handlers will be pure, so make it easy to
 * register with `pure` middleware in the correct (left-hand-side) position.
 */
ampere.core.register_handler = (function ampere$core$register_handler(var_args){
var args17879 = [];
var len__5620__auto___17882 = arguments.length;
var i__5621__auto___17883 = (0);
while(true){
if((i__5621__auto___17883 < len__5620__auto___17882)){
args17879.push((arguments[i__5621__auto___17883]));

var G__17884 = (i__5621__auto___17883 + (1));
i__5621__auto___17883 = G__17884;
continue;
} else {
}
break;
}

var G__17881 = args17879.length;
switch (G__17881) {
case 2:
return ampere.core.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ampere.core.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17879.length)].join('')));

}
});

ampere.core.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return ampere.handlers.register_base.call(null,id,ampere.core.pure,handler);
});

ampere.core.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
return ampere.handlers.register_base.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ampere.core.pure,middleware], null),handler);
});

ampere.core.register_handler.cljs$lang$maxFixedArity = 3;
ampere.core.init_BANG_ = (function ampere$core$init_BANG_(p__17886){
var map__17901 = p__17886;
var map__17901__$1 = ((((!((map__17901 == null)))?((((map__17901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17901):map__17901);
var config = map__17901__$1;
var handlers = cljs.core.get.call(null,map__17901__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var subs = cljs.core.get.call(null,map__17901__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__17903_17915 = cljs.core.seq.call(null,handlers);
var chunk__17904_17916 = null;
var count__17905_17917 = (0);
var i__17906_17918 = (0);
while(true){
if((i__17906_17918 < count__17905_17917)){
var vec__17907_17919 = cljs.core._nth.call(null,chunk__17904_17916,i__17906_17918);
var id_17920 = cljs.core.nth.call(null,vec__17907_17919,(0),null);
var middleware_PLUS_handler_17921 = cljs.core.nthnext.call(null,vec__17907_17919,(1));
var v_17922 = cljs.core.flatten.call(null,middleware_PLUS_handler_17921);
ampere.core.register_handler.call(null,id_17920,cljs.core.vec.call(null,cljs.core.butlast.call(null,v_17922)),cljs.core.last.call(null,v_17922));

var G__17923 = seq__17903_17915;
var G__17924 = chunk__17904_17916;
var G__17925 = count__17905_17917;
var G__17926 = (i__17906_17918 + (1));
seq__17903_17915 = G__17923;
chunk__17904_17916 = G__17924;
count__17905_17917 = G__17925;
i__17906_17918 = G__17926;
continue;
} else {
var temp__4425__auto___17927 = cljs.core.seq.call(null,seq__17903_17915);
if(temp__4425__auto___17927){
var seq__17903_17928__$1 = temp__4425__auto___17927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17903_17928__$1)){
var c__5365__auto___17929 = cljs.core.chunk_first.call(null,seq__17903_17928__$1);
var G__17930 = cljs.core.chunk_rest.call(null,seq__17903_17928__$1);
var G__17931 = c__5365__auto___17929;
var G__17932 = cljs.core.count.call(null,c__5365__auto___17929);
var G__17933 = (0);
seq__17903_17915 = G__17930;
chunk__17904_17916 = G__17931;
count__17905_17917 = G__17932;
i__17906_17918 = G__17933;
continue;
} else {
var vec__17908_17934 = cljs.core.first.call(null,seq__17903_17928__$1);
var id_17935 = cljs.core.nth.call(null,vec__17908_17934,(0),null);
var middleware_PLUS_handler_17936 = cljs.core.nthnext.call(null,vec__17908_17934,(1));
var v_17937 = cljs.core.flatten.call(null,middleware_PLUS_handler_17936);
ampere.core.register_handler.call(null,id_17935,cljs.core.vec.call(null,cljs.core.butlast.call(null,v_17937)),cljs.core.last.call(null,v_17937));

var G__17938 = cljs.core.next.call(null,seq__17903_17928__$1);
var G__17939 = null;
var G__17940 = (0);
var G__17941 = (0);
seq__17903_17915 = G__17938;
chunk__17904_17916 = G__17939;
count__17905_17917 = G__17940;
i__17906_17918 = G__17941;
continue;
}
} else {
}
}
break;
}

var seq__17909 = cljs.core.seq.call(null,subs);
var chunk__17910 = null;
var count__17911 = (0);
var i__17912 = (0);
while(true){
if((i__17912 < count__17911)){
var vec__17913 = cljs.core._nth.call(null,chunk__17910,i__17912);
var id = cljs.core.nth.call(null,vec__17913,(0),null);
var sub = cljs.core.nth.call(null,vec__17913,(1),null);
ampere.core.register_sub.call(null,id,sub);

var G__17942 = seq__17909;
var G__17943 = chunk__17910;
var G__17944 = count__17911;
var G__17945 = (i__17912 + (1));
seq__17909 = G__17942;
chunk__17910 = G__17943;
count__17911 = G__17944;
i__17912 = G__17945;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17909);
if(temp__4425__auto__){
var seq__17909__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17909__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17909__$1);
var G__17946 = cljs.core.chunk_rest.call(null,seq__17909__$1);
var G__17947 = c__5365__auto__;
var G__17948 = cljs.core.count.call(null,c__5365__auto__);
var G__17949 = (0);
seq__17909 = G__17946;
chunk__17910 = G__17947;
count__17911 = G__17948;
i__17912 = G__17949;
continue;
} else {
var vec__17914 = cljs.core.first.call(null,seq__17909__$1);
var id = cljs.core.nth.call(null,vec__17914,(0),null);
var sub = cljs.core.nth.call(null,vec__17914,(1),null);
ampere.core.register_sub.call(null,id,sub);

var G__17950 = cljs.core.next.call(null,seq__17909__$1);
var G__17951 = null;
var G__17952 = (0);
var G__17953 = (0);
seq__17909 = G__17950;
chunk__17910 = G__17951;
count__17911 = G__17952;
i__17912 = G__17953;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=core.js.map?rel=1440417690335