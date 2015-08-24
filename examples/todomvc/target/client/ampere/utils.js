// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.utils');
goog.require('cljs.core');
goog.require('clojure.set');
ampere.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__15286_SHARP_){
return console.log(p1__15286_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__15287_SHARP_){
return console.warn(p1__15287_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__15288_SHARP_){
return console.error(p1__15288_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__15289_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__15289_SHARP_);
} else {
return console.log(p1__15289_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
/**
 * Holds the current set of loggers.
 */
ampere.utils.loggers = cljs.core.atom.call(null,ampere.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by ampere.
 *   'new-loggers' should be a map which looks like default-loggers
 */
ampere.utils.set_loggers_BANG_ = (function ampere$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,ampere.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,ampere.utils.loggers,cljs.core.merge,new_loggers);
});
ampere.utils.log = (function ampere$utils$log(var_args){
var args__5627__auto__ = [];
var len__5620__auto___15291 = arguments.length;
var i__5621__auto___15292 = (0);
while(true){
if((i__5621__auto___15292 < len__5620__auto___15291)){
args__5627__auto__.push((arguments[i__5621__auto___15292]));

var G__15293 = (i__5621__auto___15292 + (1));
i__5621__auto___15292 = G__15293;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ampere.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

ampere.utils.log.cljs$lang$maxFixedArity = (0);

ampere.utils.log.cljs$lang$applyTo = (function (seq15290){
return ampere.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15290));
});
ampere.utils.warn = (function ampere$utils$warn(var_args){
var args__5627__auto__ = [];
var len__5620__auto___15295 = arguments.length;
var i__5621__auto___15296 = (0);
while(true){
if((i__5621__auto___15296 < len__5620__auto___15295)){
args__5627__auto__.push((arguments[i__5621__auto___15296]));

var G__15297 = (i__5621__auto___15296 + (1));
i__5621__auto___15296 = G__15297;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ampere.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

ampere.utils.warn.cljs$lang$maxFixedArity = (0);

ampere.utils.warn.cljs$lang$applyTo = (function (seq15294){
return ampere.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15294));
});
ampere.utils.group = (function ampere$utils$group(var_args){
var args__5627__auto__ = [];
var len__5620__auto___15299 = arguments.length;
var i__5621__auto___15300 = (0);
while(true){
if((i__5621__auto___15300 < len__5620__auto___15299)){
args__5627__auto__.push((arguments[i__5621__auto___15300]));

var G__15301 = (i__5621__auto___15300 + (1));
i__5621__auto___15300 = G__15301;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ampere.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

ampere.utils.group.cljs$lang$maxFixedArity = (0);

ampere.utils.group.cljs$lang$applyTo = (function (seq15298){
return ampere.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15298));
});
ampere.utils.groupEnd = (function ampere$utils$groupEnd(var_args){
var args__5627__auto__ = [];
var len__5620__auto___15303 = arguments.length;
var i__5621__auto___15304 = (0);
while(true){
if((i__5621__auto___15304 < len__5620__auto___15303)){
args__5627__auto__.push((arguments[i__5621__auto___15304]));

var G__15305 = (i__5621__auto___15304 + (1));
i__5621__auto___15304 = G__15305;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ampere.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

ampere.utils.groupEnd.cljs$lang$maxFixedArity = (0);

ampere.utils.groupEnd.cljs$lang$applyTo = (function (seq15302){
return ampere.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15302));
});
ampere.utils.error = (function ampere$utils$error(var_args){
var args__5627__auto__ = [];
var len__5620__auto___15307 = arguments.length;
var i__5621__auto___15308 = (0);
while(true){
if((i__5621__auto___15308 < len__5620__auto___15307)){
args__5627__auto__.push((arguments[i__5621__auto___15308]));

var G__15309 = (i__5621__auto___15308 + (1));
i__5621__auto___15308 = G__15309;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ampere.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

ampere.utils.error.cljs$lang$maxFixedArity = (0);

ampere.utils.error.cljs$lang$applyTo = (function (seq15306){
return ampere.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15306));
});
ampere.utils.first_in_vector = (function ampere$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return ampere.utils.error.call(null,"ampere: expected a vector event, but got: ",v);
}
});
ampere.utils.map_vals = (function ampere$utils$map_vals(f,m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (z,k,v){
return cljs.core.assoc_BANG_.call(null,z,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
});

//# sourceMappingURL=utils.js.map?rel=1440417683387