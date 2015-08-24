// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async12439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12439 = (function (fn_handler,f,meta12440){
this.fn_handler = fn_handler;
this.f = f;
this.meta12440 = meta12440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12441,meta12440__$1){
var self__ = this;
var _12441__$1 = this;
return (new cljs.core.async.t_cljs$core$async12439(self__.fn_handler,self__.f,meta12440__$1));
});

cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12441){
var self__ = this;
var _12441__$1 = this;
return self__.meta12440;
});

cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta12440","meta12440",1990022388,null)], null);
});

cljs.core.async.t_cljs$core$async12439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12439";

cljs.core.async.t_cljs$core$async12439.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async12439");
});

cljs.core.async.__GT_t_cljs$core$async12439 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async12439(fn_handler__$1,f__$1,meta12440){
return (new cljs.core.async.t_cljs$core$async12439(fn_handler__$1,f__$1,meta12440));
});

}

return (new cljs.core.async.t_cljs$core$async12439(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12444 = [];
var len__5620__auto___12447 = arguments.length;
var i__5621__auto___12448 = (0);
while(true){
if((i__5621__auto___12448 < len__5620__auto___12447)){
args12444.push((arguments[i__5621__auto___12448]));

var G__12449 = (i__5621__auto___12448 + (1));
i__5621__auto___12448 = G__12449;
continue;
} else {
}
break;
}

var G__12446 = args12444.length;
switch (G__12446) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12444.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12451 = [];
var len__5620__auto___12454 = arguments.length;
var i__5621__auto___12455 = (0);
while(true){
if((i__5621__auto___12455 < len__5620__auto___12454)){
args12451.push((arguments[i__5621__auto___12455]));

var G__12456 = (i__5621__auto___12455 + (1));
i__5621__auto___12455 = G__12456;
continue;
} else {
}
break;
}

var G__12453 = args12451.length;
switch (G__12453) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12451.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12458 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12458);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12458,ret){
return (function (){
return fn1.call(null,val_12458);
});})(val_12458,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12459 = [];
var len__5620__auto___12462 = arguments.length;
var i__5621__auto___12463 = (0);
while(true){
if((i__5621__auto___12463 < len__5620__auto___12462)){
args12459.push((arguments[i__5621__auto___12463]));

var G__12464 = (i__5621__auto___12463 + (1));
i__5621__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var G__12461 = args12459.length;
switch (G__12461) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12459.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5465__auto___12466 = n;
var x_12467 = (0);
while(true){
if((x_12467 < n__5465__auto___12466)){
(a[x_12467] = (0));

var G__12468 = (x_12467 + (1));
x_12467 = G__12468;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12469 = (i + (1));
i = G__12469;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12473 = (function (alt_flag,flag,meta12474){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12474 = meta12474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12475,meta12474__$1){
var self__ = this;
var _12475__$1 = this;
return (new cljs.core.async.t_cljs$core$async12473(self__.alt_flag,self__.flag,meta12474__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12475){
var self__ = this;
var _12475__$1 = this;
return self__.meta12474;
});})(flag))
;

cljs.core.async.t_cljs$core$async12473.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12473.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12474","meta12474",-775510369,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12473";

cljs.core.async.t_cljs$core$async12473.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async12473");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12473 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12473(alt_flag__$1,flag__$1,meta12474){
return (new cljs.core.async.t_cljs$core$async12473(alt_flag__$1,flag__$1,meta12474));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12473(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12479 = (function (alt_handler,flag,cb,meta12480){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12480 = meta12480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12481,meta12480__$1){
var self__ = this;
var _12481__$1 = this;
return (new cljs.core.async.t_cljs$core$async12479(self__.alt_handler,self__.flag,self__.cb,meta12480__$1));
});

cljs.core.async.t_cljs$core$async12479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12481){
var self__ = this;
var _12481__$1 = this;
return self__.meta12480;
});

cljs.core.async.t_cljs$core$async12479.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12480","meta12480",870211102,null)], null);
});

cljs.core.async.t_cljs$core$async12479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12479";

cljs.core.async.t_cljs$core$async12479.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async12479");
});

cljs.core.async.__GT_t_cljs$core$async12479 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12479(alt_handler__$1,flag__$1,cb__$1,meta12480){
return (new cljs.core.async.t_cljs$core$async12479(alt_handler__$1,flag__$1,cb__$1,meta12480));
});

}

return (new cljs.core.async.t_cljs$core$async12479(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12482_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12482_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12483_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4562__auto__ = wport;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12484 = (i + (1));
i = G__12484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4562__auto__ = ret;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4550__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4550__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4550__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___12490 = arguments.length;
var i__5621__auto___12491 = (0);
while(true){
if((i__5621__auto___12491 < len__5620__auto___12490)){
args__5627__auto__.push((arguments[i__5621__auto___12491]));

var G__12492 = (i__5621__auto___12491 + (1));
i__5621__auto___12491 = G__12492;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12487){
var map__12488 = p__12487;
var map__12488__$1 = ((((!((map__12488 == null)))?((((map__12488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12488):map__12488);
var opts = map__12488__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12485){
var G__12486 = cljs.core.first.call(null,seq12485);
var seq12485__$1 = cljs.core.next.call(null,seq12485);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12486,seq12485__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12493 = [];
var len__5620__auto___12543 = arguments.length;
var i__5621__auto___12544 = (0);
while(true){
if((i__5621__auto___12544 < len__5620__auto___12543)){
args12493.push((arguments[i__5621__auto___12544]));

var G__12545 = (i__5621__auto___12544 + (1));
i__5621__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var G__12495 = args12493.length;
switch (G__12495) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12493.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7296__auto___12547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___12547){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___12547){
return (function (state_12519){
var state_val_12520 = (state_12519[(1)]);
if((state_val_12520 === (7))){
var inst_12515 = (state_12519[(2)]);
var state_12519__$1 = state_12519;
var statearr_12521_12548 = state_12519__$1;
(statearr_12521_12548[(2)] = inst_12515);

(statearr_12521_12548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (1))){
var state_12519__$1 = state_12519;
var statearr_12522_12549 = state_12519__$1;
(statearr_12522_12549[(2)] = null);

(statearr_12522_12549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (4))){
var inst_12498 = (state_12519[(7)]);
var inst_12498__$1 = (state_12519[(2)]);
var inst_12499 = (inst_12498__$1 == null);
var state_12519__$1 = (function (){var statearr_12523 = state_12519;
(statearr_12523[(7)] = inst_12498__$1);

return statearr_12523;
})();
if(cljs.core.truth_(inst_12499)){
var statearr_12524_12550 = state_12519__$1;
(statearr_12524_12550[(1)] = (5));

} else {
var statearr_12525_12551 = state_12519__$1;
(statearr_12525_12551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (13))){
var state_12519__$1 = state_12519;
var statearr_12526_12552 = state_12519__$1;
(statearr_12526_12552[(2)] = null);

(statearr_12526_12552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (6))){
var inst_12498 = (state_12519[(7)]);
var state_12519__$1 = state_12519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12519__$1,(11),to,inst_12498);
} else {
if((state_val_12520 === (3))){
var inst_12517 = (state_12519[(2)]);
var state_12519__$1 = state_12519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12519__$1,inst_12517);
} else {
if((state_val_12520 === (12))){
var state_12519__$1 = state_12519;
var statearr_12527_12553 = state_12519__$1;
(statearr_12527_12553[(2)] = null);

(statearr_12527_12553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (2))){
var state_12519__$1 = state_12519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12519__$1,(4),from);
} else {
if((state_val_12520 === (11))){
var inst_12508 = (state_12519[(2)]);
var state_12519__$1 = state_12519;
if(cljs.core.truth_(inst_12508)){
var statearr_12528_12554 = state_12519__$1;
(statearr_12528_12554[(1)] = (12));

} else {
var statearr_12529_12555 = state_12519__$1;
(statearr_12529_12555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (9))){
var state_12519__$1 = state_12519;
var statearr_12530_12556 = state_12519__$1;
(statearr_12530_12556[(2)] = null);

(statearr_12530_12556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (5))){
var state_12519__$1 = state_12519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12531_12557 = state_12519__$1;
(statearr_12531_12557[(1)] = (8));

} else {
var statearr_12532_12558 = state_12519__$1;
(statearr_12532_12558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (14))){
var inst_12513 = (state_12519[(2)]);
var state_12519__$1 = state_12519;
var statearr_12533_12559 = state_12519__$1;
(statearr_12533_12559[(2)] = inst_12513);

(statearr_12533_12559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (10))){
var inst_12505 = (state_12519[(2)]);
var state_12519__$1 = state_12519;
var statearr_12534_12560 = state_12519__$1;
(statearr_12534_12560[(2)] = inst_12505);

(statearr_12534_12560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12520 === (8))){
var inst_12502 = cljs.core.async.close_BANG_.call(null,to);
var state_12519__$1 = state_12519;
var statearr_12535_12561 = state_12519__$1;
(statearr_12535_12561[(2)] = inst_12502);

(statearr_12535_12561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___12547))
;
return ((function (switch__7231__auto__,c__7296__auto___12547){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_12539 = [null,null,null,null,null,null,null,null];
(statearr_12539[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_12539[(1)] = (1));

return statearr_12539;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_12519){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12540){if((e12540 instanceof Object)){
var ex__7235__auto__ = e12540;
var statearr_12541_12562 = state_12519;
(statearr_12541_12562[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12563 = state_12519;
state_12519 = G__12563;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_12519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_12519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___12547))
})();
var state__7298__auto__ = (function (){var statearr_12542 = f__7297__auto__.call(null);
(statearr_12542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___12547);

return statearr_12542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___12547))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12747){
var vec__12748 = p__12747;
var v = cljs.core.nth.call(null,vec__12748,(0),null);
var p = cljs.core.nth.call(null,vec__12748,(1),null);
var job = vec__12748;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7296__auto___12930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results){
return (function (state_12753){
var state_val_12754 = (state_12753[(1)]);
if((state_val_12754 === (1))){
var state_12753__$1 = state_12753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12753__$1,(2),res,v);
} else {
if((state_val_12754 === (2))){
var inst_12750 = (state_12753[(2)]);
var inst_12751 = cljs.core.async.close_BANG_.call(null,res);
var state_12753__$1 = (function (){var statearr_12755 = state_12753;
(statearr_12755[(7)] = inst_12750);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12753__$1,inst_12751);
} else {
return null;
}
}
});})(c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results))
;
return ((function (switch__7231__auto__,c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_12759 = [null,null,null,null,null,null,null,null];
(statearr_12759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__);

(statearr_12759[(1)] = (1));

return statearr_12759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1 = (function (state_12753){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12760){if((e12760 instanceof Object)){
var ex__7235__auto__ = e12760;
var statearr_12761_12931 = state_12753;
(statearr_12761_12931[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12932 = state_12753;
state_12753 = G__12932;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = function(state_12753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1.call(this,state_12753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results))
})();
var state__7298__auto__ = (function (){var statearr_12762 = f__7297__auto__.call(null);
(statearr_12762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___12930);

return statearr_12762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___12930,res,vec__12748,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12763){
var vec__12764 = p__12763;
var v = cljs.core.nth.call(null,vec__12764,(0),null);
var p = cljs.core.nth.call(null,vec__12764,(1),null);
var job = vec__12764;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5465__auto___12933 = n;
var __12934 = (0);
while(true){
if((__12934 < n__5465__auto___12933)){
var G__12765_12935 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12765_12935) {
case "compute":
var c__7296__auto___12937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12934,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (__12934,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function (state_12778){
var state_val_12779 = (state_12778[(1)]);
if((state_val_12779 === (1))){
var state_12778__$1 = state_12778;
var statearr_12780_12938 = state_12778__$1;
(statearr_12780_12938[(2)] = null);

(statearr_12780_12938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (2))){
var state_12778__$1 = state_12778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12778__$1,(4),jobs);
} else {
if((state_val_12779 === (3))){
var inst_12776 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12778__$1,inst_12776);
} else {
if((state_val_12779 === (4))){
var inst_12768 = (state_12778[(2)]);
var inst_12769 = process.call(null,inst_12768);
var state_12778__$1 = state_12778;
if(cljs.core.truth_(inst_12769)){
var statearr_12781_12939 = state_12778__$1;
(statearr_12781_12939[(1)] = (5));

} else {
var statearr_12782_12940 = state_12778__$1;
(statearr_12782_12940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (5))){
var state_12778__$1 = state_12778;
var statearr_12783_12941 = state_12778__$1;
(statearr_12783_12941[(2)] = null);

(statearr_12783_12941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (6))){
var state_12778__$1 = state_12778;
var statearr_12784_12942 = state_12778__$1;
(statearr_12784_12942[(2)] = null);

(statearr_12784_12942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12779 === (7))){
var inst_12774 = (state_12778[(2)]);
var state_12778__$1 = state_12778;
var statearr_12785_12943 = state_12778__$1;
(statearr_12785_12943[(2)] = inst_12774);

(statearr_12785_12943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12934,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
;
return ((function (__12934,switch__7231__auto__,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_12789 = [null,null,null,null,null,null,null];
(statearr_12789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__);

(statearr_12789[(1)] = (1));

return statearr_12789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1 = (function (state_12778){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12790){if((e12790 instanceof Object)){
var ex__7235__auto__ = e12790;
var statearr_12791_12944 = state_12778;
(statearr_12791_12944[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12945 = state_12778;
state_12778 = G__12945;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = function(state_12778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1.call(this,state_12778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__;
})()
;})(__12934,switch__7231__auto__,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
})();
var state__7298__auto__ = (function (){var statearr_12792 = f__7297__auto__.call(null);
(statearr_12792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___12937);

return statearr_12792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(__12934,c__7296__auto___12937,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
);


break;
case "async":
var c__7296__auto___12946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12934,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (__12934,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function (state_12805){
var state_val_12806 = (state_12805[(1)]);
if((state_val_12806 === (1))){
var state_12805__$1 = state_12805;
var statearr_12807_12947 = state_12805__$1;
(statearr_12807_12947[(2)] = null);

(statearr_12807_12947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (2))){
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(4),jobs);
} else {
if((state_val_12806 === (3))){
var inst_12803 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else {
if((state_val_12806 === (4))){
var inst_12795 = (state_12805[(2)]);
var inst_12796 = async.call(null,inst_12795);
var state_12805__$1 = state_12805;
if(cljs.core.truth_(inst_12796)){
var statearr_12808_12948 = state_12805__$1;
(statearr_12808_12948[(1)] = (5));

} else {
var statearr_12809_12949 = state_12805__$1;
(statearr_12809_12949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (5))){
var state_12805__$1 = state_12805;
var statearr_12810_12950 = state_12805__$1;
(statearr_12810_12950[(2)] = null);

(statearr_12810_12950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (6))){
var state_12805__$1 = state_12805;
var statearr_12811_12951 = state_12805__$1;
(statearr_12811_12951[(2)] = null);

(statearr_12811_12951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (7))){
var inst_12801 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12812_12952 = state_12805__$1;
(statearr_12812_12952[(2)] = inst_12801);

(statearr_12812_12952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12934,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
;
return ((function (__12934,switch__7231__auto__,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_12816 = [null,null,null,null,null,null,null];
(statearr_12816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__);

(statearr_12816[(1)] = (1));

return statearr_12816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1 = (function (state_12805){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12817){if((e12817 instanceof Object)){
var ex__7235__auto__ = e12817;
var statearr_12818_12953 = state_12805;
(statearr_12818_12953[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12954 = state_12805;
state_12805 = G__12954;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__;
})()
;})(__12934,switch__7231__auto__,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
})();
var state__7298__auto__ = (function (){var statearr_12819 = f__7297__auto__.call(null);
(statearr_12819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___12946);

return statearr_12819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(__12934,c__7296__auto___12946,G__12765_12935,n__5465__auto___12933,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12955 = (__12934 + (1));
__12934 = G__12955;
continue;
} else {
}
break;
}

var c__7296__auto___12956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___12956,jobs,results,process,async){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___12956,jobs,results,process,async){
return (function (state_12841){
var state_val_12842 = (state_12841[(1)]);
if((state_val_12842 === (1))){
var state_12841__$1 = state_12841;
var statearr_12843_12957 = state_12841__$1;
(statearr_12843_12957[(2)] = null);

(statearr_12843_12957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (2))){
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12841__$1,(4),from);
} else {
if((state_val_12842 === (3))){
var inst_12839 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12841__$1,inst_12839);
} else {
if((state_val_12842 === (4))){
var inst_12822 = (state_12841[(7)]);
var inst_12822__$1 = (state_12841[(2)]);
var inst_12823 = (inst_12822__$1 == null);
var state_12841__$1 = (function (){var statearr_12844 = state_12841;
(statearr_12844[(7)] = inst_12822__$1);

return statearr_12844;
})();
if(cljs.core.truth_(inst_12823)){
var statearr_12845_12958 = state_12841__$1;
(statearr_12845_12958[(1)] = (5));

} else {
var statearr_12846_12959 = state_12841__$1;
(statearr_12846_12959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (5))){
var inst_12825 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12841__$1 = state_12841;
var statearr_12847_12960 = state_12841__$1;
(statearr_12847_12960[(2)] = inst_12825);

(statearr_12847_12960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (6))){
var inst_12827 = (state_12841[(8)]);
var inst_12822 = (state_12841[(7)]);
var inst_12827__$1 = cljs.core.async.chan.call(null,(1));
var inst_12828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12829 = [inst_12822,inst_12827__$1];
var inst_12830 = (new cljs.core.PersistentVector(null,2,(5),inst_12828,inst_12829,null));
var state_12841__$1 = (function (){var statearr_12848 = state_12841;
(statearr_12848[(8)] = inst_12827__$1);

return statearr_12848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12841__$1,(8),jobs,inst_12830);
} else {
if((state_val_12842 === (7))){
var inst_12837 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
var statearr_12849_12961 = state_12841__$1;
(statearr_12849_12961[(2)] = inst_12837);

(statearr_12849_12961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (8))){
var inst_12827 = (state_12841[(8)]);
var inst_12832 = (state_12841[(2)]);
var state_12841__$1 = (function (){var statearr_12850 = state_12841;
(statearr_12850[(9)] = inst_12832);

return statearr_12850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12841__$1,(9),results,inst_12827);
} else {
if((state_val_12842 === (9))){
var inst_12834 = (state_12841[(2)]);
var state_12841__$1 = (function (){var statearr_12851 = state_12841;
(statearr_12851[(10)] = inst_12834);

return statearr_12851;
})();
var statearr_12852_12962 = state_12841__$1;
(statearr_12852_12962[(2)] = null);

(statearr_12852_12962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___12956,jobs,results,process,async))
;
return ((function (switch__7231__auto__,c__7296__auto___12956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_12856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__);

(statearr_12856[(1)] = (1));

return statearr_12856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1 = (function (state_12841){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12857){if((e12857 instanceof Object)){
var ex__7235__auto__ = e12857;
var statearr_12858_12963 = state_12841;
(statearr_12858_12963[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12964 = state_12841;
state_12841 = G__12964;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = function(state_12841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1.call(this,state_12841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___12956,jobs,results,process,async))
})();
var state__7298__auto__ = (function (){var statearr_12859 = f__7297__auto__.call(null);
(statearr_12859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___12956);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___12956,jobs,results,process,async))
);


var c__7296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto__,jobs,results,process,async){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto__,jobs,results,process,async){
return (function (state_12897){
var state_val_12898 = (state_12897[(1)]);
if((state_val_12898 === (7))){
var inst_12893 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12899_12965 = state_12897__$1;
(statearr_12899_12965[(2)] = inst_12893);

(statearr_12899_12965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (20))){
var state_12897__$1 = state_12897;
var statearr_12900_12966 = state_12897__$1;
(statearr_12900_12966[(2)] = null);

(statearr_12900_12966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (1))){
var state_12897__$1 = state_12897;
var statearr_12901_12967 = state_12897__$1;
(statearr_12901_12967[(2)] = null);

(statearr_12901_12967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (4))){
var inst_12862 = (state_12897[(7)]);
var inst_12862__$1 = (state_12897[(2)]);
var inst_12863 = (inst_12862__$1 == null);
var state_12897__$1 = (function (){var statearr_12902 = state_12897;
(statearr_12902[(7)] = inst_12862__$1);

return statearr_12902;
})();
if(cljs.core.truth_(inst_12863)){
var statearr_12903_12968 = state_12897__$1;
(statearr_12903_12968[(1)] = (5));

} else {
var statearr_12904_12969 = state_12897__$1;
(statearr_12904_12969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (15))){
var inst_12875 = (state_12897[(8)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12897__$1,(18),to,inst_12875);
} else {
if((state_val_12898 === (21))){
var inst_12888 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12905_12970 = state_12897__$1;
(statearr_12905_12970[(2)] = inst_12888);

(statearr_12905_12970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (13))){
var inst_12890 = (state_12897[(2)]);
var state_12897__$1 = (function (){var statearr_12906 = state_12897;
(statearr_12906[(9)] = inst_12890);

return statearr_12906;
})();
var statearr_12907_12971 = state_12897__$1;
(statearr_12907_12971[(2)] = null);

(statearr_12907_12971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (6))){
var inst_12862 = (state_12897[(7)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,(11),inst_12862);
} else {
if((state_val_12898 === (17))){
var inst_12883 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
if(cljs.core.truth_(inst_12883)){
var statearr_12908_12972 = state_12897__$1;
(statearr_12908_12972[(1)] = (19));

} else {
var statearr_12909_12973 = state_12897__$1;
(statearr_12909_12973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (3))){
var inst_12895 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12897__$1,inst_12895);
} else {
if((state_val_12898 === (12))){
var inst_12872 = (state_12897[(10)]);
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,(14),inst_12872);
} else {
if((state_val_12898 === (2))){
var state_12897__$1 = state_12897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12897__$1,(4),results);
} else {
if((state_val_12898 === (19))){
var state_12897__$1 = state_12897;
var statearr_12910_12974 = state_12897__$1;
(statearr_12910_12974[(2)] = null);

(statearr_12910_12974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (11))){
var inst_12872 = (state_12897[(2)]);
var state_12897__$1 = (function (){var statearr_12911 = state_12897;
(statearr_12911[(10)] = inst_12872);

return statearr_12911;
})();
var statearr_12912_12975 = state_12897__$1;
(statearr_12912_12975[(2)] = null);

(statearr_12912_12975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (9))){
var state_12897__$1 = state_12897;
var statearr_12913_12976 = state_12897__$1;
(statearr_12913_12976[(2)] = null);

(statearr_12913_12976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (5))){
var state_12897__$1 = state_12897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12914_12977 = state_12897__$1;
(statearr_12914_12977[(1)] = (8));

} else {
var statearr_12915_12978 = state_12897__$1;
(statearr_12915_12978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (14))){
var inst_12877 = (state_12897[(11)]);
var inst_12875 = (state_12897[(8)]);
var inst_12875__$1 = (state_12897[(2)]);
var inst_12876 = (inst_12875__$1 == null);
var inst_12877__$1 = cljs.core.not.call(null,inst_12876);
var state_12897__$1 = (function (){var statearr_12916 = state_12897;
(statearr_12916[(11)] = inst_12877__$1);

(statearr_12916[(8)] = inst_12875__$1);

return statearr_12916;
})();
if(inst_12877__$1){
var statearr_12917_12979 = state_12897__$1;
(statearr_12917_12979[(1)] = (15));

} else {
var statearr_12918_12980 = state_12897__$1;
(statearr_12918_12980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (16))){
var inst_12877 = (state_12897[(11)]);
var state_12897__$1 = state_12897;
var statearr_12919_12981 = state_12897__$1;
(statearr_12919_12981[(2)] = inst_12877);

(statearr_12919_12981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (10))){
var inst_12869 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12920_12982 = state_12897__$1;
(statearr_12920_12982[(2)] = inst_12869);

(statearr_12920_12982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (18))){
var inst_12880 = (state_12897[(2)]);
var state_12897__$1 = state_12897;
var statearr_12921_12983 = state_12897__$1;
(statearr_12921_12983[(2)] = inst_12880);

(statearr_12921_12983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12898 === (8))){
var inst_12866 = cljs.core.async.close_BANG_.call(null,to);
var state_12897__$1 = state_12897;
var statearr_12922_12984 = state_12897__$1;
(statearr_12922_12984[(2)] = inst_12866);

(statearr_12922_12984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto__,jobs,results,process,async))
;
return ((function (switch__7231__auto__,c__7296__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_12926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__);

(statearr_12926[(1)] = (1));

return statearr_12926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1 = (function (state_12897){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12927){if((e12927 instanceof Object)){
var ex__7235__auto__ = e12927;
var statearr_12928_12985 = state_12897;
(statearr_12928_12985[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12986 = state_12897;
state_12897 = G__12986;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__ = function(state_12897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1.call(this,state_12897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto__,jobs,results,process,async))
})();
var state__7298__auto__ = (function (){var statearr_12929 = f__7297__auto__.call(null);
(statearr_12929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto__);

return statearr_12929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto__,jobs,results,process,async))
);

return c__7296__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args12987 = [];
var len__5620__auto___12990 = arguments.length;
var i__5621__auto___12991 = (0);
while(true){
if((i__5621__auto___12991 < len__5620__auto___12990)){
args12987.push((arguments[i__5621__auto___12991]));

var G__12992 = (i__5621__auto___12991 + (1));
i__5621__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var G__12989 = args12987.length;
switch (G__12989) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12987.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args12994 = [];
var len__5620__auto___12997 = arguments.length;
var i__5621__auto___12998 = (0);
while(true){
if((i__5621__auto___12998 < len__5620__auto___12997)){
args12994.push((arguments[i__5621__auto___12998]));

var G__12999 = (i__5621__auto___12998 + (1));
i__5621__auto___12998 = G__12999;
continue;
} else {
}
break;
}

var G__12996 = args12994.length;
switch (G__12996) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12994.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13001 = [];
var len__5620__auto___13054 = arguments.length;
var i__5621__auto___13055 = (0);
while(true){
if((i__5621__auto___13055 < len__5620__auto___13054)){
args13001.push((arguments[i__5621__auto___13055]));

var G__13056 = (i__5621__auto___13055 + (1));
i__5621__auto___13055 = G__13056;
continue;
} else {
}
break;
}

var G__13003 = args13001.length;
switch (G__13003) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13001.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7296__auto___13058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___13058,tc,fc){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___13058,tc,fc){
return (function (state_13029){
var state_val_13030 = (state_13029[(1)]);
if((state_val_13030 === (7))){
var inst_13025 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13031_13059 = state_13029__$1;
(statearr_13031_13059[(2)] = inst_13025);

(statearr_13031_13059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (1))){
var state_13029__$1 = state_13029;
var statearr_13032_13060 = state_13029__$1;
(statearr_13032_13060[(2)] = null);

(statearr_13032_13060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (4))){
var inst_13006 = (state_13029[(7)]);
var inst_13006__$1 = (state_13029[(2)]);
var inst_13007 = (inst_13006__$1 == null);
var state_13029__$1 = (function (){var statearr_13033 = state_13029;
(statearr_13033[(7)] = inst_13006__$1);

return statearr_13033;
})();
if(cljs.core.truth_(inst_13007)){
var statearr_13034_13061 = state_13029__$1;
(statearr_13034_13061[(1)] = (5));

} else {
var statearr_13035_13062 = state_13029__$1;
(statearr_13035_13062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (13))){
var state_13029__$1 = state_13029;
var statearr_13036_13063 = state_13029__$1;
(statearr_13036_13063[(2)] = null);

(statearr_13036_13063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (6))){
var inst_13006 = (state_13029[(7)]);
var inst_13012 = p.call(null,inst_13006);
var state_13029__$1 = state_13029;
if(cljs.core.truth_(inst_13012)){
var statearr_13037_13064 = state_13029__$1;
(statearr_13037_13064[(1)] = (9));

} else {
var statearr_13038_13065 = state_13029__$1;
(statearr_13038_13065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (3))){
var inst_13027 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13029__$1,inst_13027);
} else {
if((state_val_13030 === (12))){
var state_13029__$1 = state_13029;
var statearr_13039_13066 = state_13029__$1;
(statearr_13039_13066[(2)] = null);

(statearr_13039_13066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (2))){
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13029__$1,(4),ch);
} else {
if((state_val_13030 === (11))){
var inst_13006 = (state_13029[(7)]);
var inst_13016 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13029__$1,(8),inst_13016,inst_13006);
} else {
if((state_val_13030 === (9))){
var state_13029__$1 = state_13029;
var statearr_13040_13067 = state_13029__$1;
(statearr_13040_13067[(2)] = tc);

(statearr_13040_13067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (5))){
var inst_13009 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13010 = cljs.core.async.close_BANG_.call(null,fc);
var state_13029__$1 = (function (){var statearr_13041 = state_13029;
(statearr_13041[(8)] = inst_13009);

return statearr_13041;
})();
var statearr_13042_13068 = state_13029__$1;
(statearr_13042_13068[(2)] = inst_13010);

(statearr_13042_13068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (14))){
var inst_13023 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13043_13069 = state_13029__$1;
(statearr_13043_13069[(2)] = inst_13023);

(statearr_13043_13069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (10))){
var state_13029__$1 = state_13029;
var statearr_13044_13070 = state_13029__$1;
(statearr_13044_13070[(2)] = fc);

(statearr_13044_13070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (8))){
var inst_13018 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
if(cljs.core.truth_(inst_13018)){
var statearr_13045_13071 = state_13029__$1;
(statearr_13045_13071[(1)] = (12));

} else {
var statearr_13046_13072 = state_13029__$1;
(statearr_13046_13072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___13058,tc,fc))
;
return ((function (switch__7231__auto__,c__7296__auto___13058,tc,fc){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_13050 = [null,null,null,null,null,null,null,null,null];
(statearr_13050[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_13050[(1)] = (1));

return statearr_13050;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_13029){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_13029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e13051){if((e13051 instanceof Object)){
var ex__7235__auto__ = e13051;
var statearr_13052_13073 = state_13029;
(statearr_13052_13073[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13074 = state_13029;
state_13029 = G__13074;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_13029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_13029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___13058,tc,fc))
})();
var state__7298__auto__ = (function (){var statearr_13053 = f__7297__auto__.call(null);
(statearr_13053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___13058);

return statearr_13053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___13058,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto__){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto__){
return (function (state_13121){
var state_val_13122 = (state_13121[(1)]);
if((state_val_13122 === (1))){
var inst_13107 = init;
var state_13121__$1 = (function (){var statearr_13123 = state_13121;
(statearr_13123[(7)] = inst_13107);

return statearr_13123;
})();
var statearr_13124_13139 = state_13121__$1;
(statearr_13124_13139[(2)] = null);

(statearr_13124_13139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13122 === (2))){
var state_13121__$1 = state_13121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13121__$1,(4),ch);
} else {
if((state_val_13122 === (3))){
var inst_13119 = (state_13121[(2)]);
var state_13121__$1 = state_13121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13121__$1,inst_13119);
} else {
if((state_val_13122 === (4))){
var inst_13110 = (state_13121[(8)]);
var inst_13110__$1 = (state_13121[(2)]);
var inst_13111 = (inst_13110__$1 == null);
var state_13121__$1 = (function (){var statearr_13125 = state_13121;
(statearr_13125[(8)] = inst_13110__$1);

return statearr_13125;
})();
if(cljs.core.truth_(inst_13111)){
var statearr_13126_13140 = state_13121__$1;
(statearr_13126_13140[(1)] = (5));

} else {
var statearr_13127_13141 = state_13121__$1;
(statearr_13127_13141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13122 === (5))){
var inst_13107 = (state_13121[(7)]);
var state_13121__$1 = state_13121;
var statearr_13128_13142 = state_13121__$1;
(statearr_13128_13142[(2)] = inst_13107);

(statearr_13128_13142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13122 === (6))){
var inst_13107 = (state_13121[(7)]);
var inst_13110 = (state_13121[(8)]);
var inst_13114 = f.call(null,inst_13107,inst_13110);
var inst_13107__$1 = inst_13114;
var state_13121__$1 = (function (){var statearr_13129 = state_13121;
(statearr_13129[(7)] = inst_13107__$1);

return statearr_13129;
})();
var statearr_13130_13143 = state_13121__$1;
(statearr_13130_13143[(2)] = null);

(statearr_13130_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13122 === (7))){
var inst_13117 = (state_13121[(2)]);
var state_13121__$1 = state_13121;
var statearr_13131_13144 = state_13121__$1;
(statearr_13131_13144[(2)] = inst_13117);

(statearr_13131_13144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7296__auto__))
;
return ((function (switch__7231__auto__,c__7296__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7232__auto____0 = (function (){
var statearr_13135 = [null,null,null,null,null,null,null,null,null];
(statearr_13135[(0)] = cljs$core$async$reduce_$_state_machine__7232__auto__);

(statearr_13135[(1)] = (1));

return statearr_13135;
});
var cljs$core$async$reduce_$_state_machine__7232__auto____1 = (function (state_13121){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_13121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e13136){if((e13136 instanceof Object)){
var ex__7235__auto__ = e13136;
var statearr_13137_13145 = state_13121;
(statearr_13137_13145[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13146 = state_13121;
state_13121 = G__13146;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7232__auto__ = function(state_13121){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7232__auto____1.call(this,state_13121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7232__auto____0;
cljs$core$async$reduce_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7232__auto____1;
return cljs$core$async$reduce_$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto__))
})();
var state__7298__auto__ = (function (){var statearr_13138 = f__7297__auto__.call(null);
(statearr_13138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto__);

return statearr_13138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto__))
);

return c__7296__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13147 = [];
var len__5620__auto___13199 = arguments.length;
var i__5621__auto___13200 = (0);
while(true){
if((i__5621__auto___13200 < len__5620__auto___13199)){
args13147.push((arguments[i__5621__auto___13200]));

var G__13201 = (i__5621__auto___13200 + (1));
i__5621__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var G__13149 = args13147.length;
switch (G__13149) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13147.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto__){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto__){
return (function (state_13174){
var state_val_13175 = (state_13174[(1)]);
if((state_val_13175 === (7))){
var inst_13156 = (state_13174[(2)]);
var state_13174__$1 = state_13174;
var statearr_13176_13203 = state_13174__$1;
(statearr_13176_13203[(2)] = inst_13156);

(statearr_13176_13203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (1))){
var inst_13150 = cljs.core.seq.call(null,coll);
var inst_13151 = inst_13150;
var state_13174__$1 = (function (){var statearr_13177 = state_13174;
(statearr_13177[(7)] = inst_13151);

return statearr_13177;
})();
var statearr_13178_13204 = state_13174__$1;
(statearr_13178_13204[(2)] = null);

(statearr_13178_13204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (4))){
var inst_13151 = (state_13174[(7)]);
var inst_13154 = cljs.core.first.call(null,inst_13151);
var state_13174__$1 = state_13174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,(7),ch,inst_13154);
} else {
if((state_val_13175 === (13))){
var inst_13168 = (state_13174[(2)]);
var state_13174__$1 = state_13174;
var statearr_13179_13205 = state_13174__$1;
(statearr_13179_13205[(2)] = inst_13168);

(statearr_13179_13205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (6))){
var inst_13159 = (state_13174[(2)]);
var state_13174__$1 = state_13174;
if(cljs.core.truth_(inst_13159)){
var statearr_13180_13206 = state_13174__$1;
(statearr_13180_13206[(1)] = (8));

} else {
var statearr_13181_13207 = state_13174__$1;
(statearr_13181_13207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (3))){
var inst_13172 = (state_13174[(2)]);
var state_13174__$1 = state_13174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13174__$1,inst_13172);
} else {
if((state_val_13175 === (12))){
var state_13174__$1 = state_13174;
var statearr_13182_13208 = state_13174__$1;
(statearr_13182_13208[(2)] = null);

(statearr_13182_13208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (2))){
var inst_13151 = (state_13174[(7)]);
var state_13174__$1 = state_13174;
if(cljs.core.truth_(inst_13151)){
var statearr_13183_13209 = state_13174__$1;
(statearr_13183_13209[(1)] = (4));

} else {
var statearr_13184_13210 = state_13174__$1;
(statearr_13184_13210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (11))){
var inst_13165 = cljs.core.async.close_BANG_.call(null,ch);
var state_13174__$1 = state_13174;
var statearr_13185_13211 = state_13174__$1;
(statearr_13185_13211[(2)] = inst_13165);

(statearr_13185_13211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (9))){
var state_13174__$1 = state_13174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13186_13212 = state_13174__$1;
(statearr_13186_13212[(1)] = (11));

} else {
var statearr_13187_13213 = state_13174__$1;
(statearr_13187_13213[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (5))){
var inst_13151 = (state_13174[(7)]);
var state_13174__$1 = state_13174;
var statearr_13188_13214 = state_13174__$1;
(statearr_13188_13214[(2)] = inst_13151);

(statearr_13188_13214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (10))){
var inst_13170 = (state_13174[(2)]);
var state_13174__$1 = state_13174;
var statearr_13189_13215 = state_13174__$1;
(statearr_13189_13215[(2)] = inst_13170);

(statearr_13189_13215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13175 === (8))){
var inst_13151 = (state_13174[(7)]);
var inst_13161 = cljs.core.next.call(null,inst_13151);
var inst_13151__$1 = inst_13161;
var state_13174__$1 = (function (){var statearr_13190 = state_13174;
(statearr_13190[(7)] = inst_13151__$1);

return statearr_13190;
})();
var statearr_13191_13216 = state_13174__$1;
(statearr_13191_13216[(2)] = null);

(statearr_13191_13216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto__))
;
return ((function (switch__7231__auto__,c__7296__auto__){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_13195 = [null,null,null,null,null,null,null,null];
(statearr_13195[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_13195[(1)] = (1));

return statearr_13195;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_13174){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_13174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e13196){if((e13196 instanceof Object)){
var ex__7235__auto__ = e13196;
var statearr_13197_13217 = state_13174;
(statearr_13197_13217[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13218 = state_13174;
state_13174 = G__13218;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_13174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_13174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto__))
})();
var state__7298__auto__ = (function (){var statearr_13198 = f__7297__auto__.call(null);
(statearr_13198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto__);

return statearr_13198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto__))
);

return c__7296__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5217__auto__ = (((_ == null))?null:_);
var m__5218__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,_);
} else {
var m__5218__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5218__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,ch);
} else {
var m__5218__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m);
} else {
var m__5218__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13440 = (function (mult,ch,cs,meta13441){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13441 = meta13441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13442,meta13441__$1){
var self__ = this;
var _13442__$1 = this;
return (new cljs.core.async.t_cljs$core$async13440(self__.mult,self__.ch,self__.cs,meta13441__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13442){
var self__ = this;
var _13442__$1 = this;
return self__.meta13441;
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13441","meta13441",1069154497,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13440";

cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async13440");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13440 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13440(mult__$1,ch__$1,cs__$1,meta13441){
return (new cljs.core.async.t_cljs$core$async13440(mult__$1,ch__$1,cs__$1,meta13441));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13440(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7296__auto___13661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___13661,cs,m,dchan,dctr,done){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___13661,cs,m,dchan,dctr,done){
return (function (state_13573){
var state_val_13574 = (state_13573[(1)]);
if((state_val_13574 === (7))){
var inst_13569 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13575_13662 = state_13573__$1;
(statearr_13575_13662[(2)] = inst_13569);

(statearr_13575_13662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (20))){
var inst_13474 = (state_13573[(7)]);
var inst_13484 = cljs.core.first.call(null,inst_13474);
var inst_13485 = cljs.core.nth.call(null,inst_13484,(0),null);
var inst_13486 = cljs.core.nth.call(null,inst_13484,(1),null);
var state_13573__$1 = (function (){var statearr_13576 = state_13573;
(statearr_13576[(8)] = inst_13485);

return statearr_13576;
})();
if(cljs.core.truth_(inst_13486)){
var statearr_13577_13663 = state_13573__$1;
(statearr_13577_13663[(1)] = (22));

} else {
var statearr_13578_13664 = state_13573__$1;
(statearr_13578_13664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (27))){
var inst_13514 = (state_13573[(9)]);
var inst_13521 = (state_13573[(10)]);
var inst_13445 = (state_13573[(11)]);
var inst_13516 = (state_13573[(12)]);
var inst_13521__$1 = cljs.core._nth.call(null,inst_13514,inst_13516);
var inst_13522 = cljs.core.async.put_BANG_.call(null,inst_13521__$1,inst_13445,done);
var state_13573__$1 = (function (){var statearr_13579 = state_13573;
(statearr_13579[(10)] = inst_13521__$1);

return statearr_13579;
})();
if(cljs.core.truth_(inst_13522)){
var statearr_13580_13665 = state_13573__$1;
(statearr_13580_13665[(1)] = (30));

} else {
var statearr_13581_13666 = state_13573__$1;
(statearr_13581_13666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (1))){
var state_13573__$1 = state_13573;
var statearr_13582_13667 = state_13573__$1;
(statearr_13582_13667[(2)] = null);

(statearr_13582_13667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (24))){
var inst_13474 = (state_13573[(7)]);
var inst_13491 = (state_13573[(2)]);
var inst_13492 = cljs.core.next.call(null,inst_13474);
var inst_13454 = inst_13492;
var inst_13455 = null;
var inst_13456 = (0);
var inst_13457 = (0);
var state_13573__$1 = (function (){var statearr_13583 = state_13573;
(statearr_13583[(13)] = inst_13456);

(statearr_13583[(14)] = inst_13454);

(statearr_13583[(15)] = inst_13455);

(statearr_13583[(16)] = inst_13491);

(statearr_13583[(17)] = inst_13457);

return statearr_13583;
})();
var statearr_13584_13668 = state_13573__$1;
(statearr_13584_13668[(2)] = null);

(statearr_13584_13668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (39))){
var state_13573__$1 = state_13573;
var statearr_13588_13669 = state_13573__$1;
(statearr_13588_13669[(2)] = null);

(statearr_13588_13669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (4))){
var inst_13445 = (state_13573[(11)]);
var inst_13445__$1 = (state_13573[(2)]);
var inst_13446 = (inst_13445__$1 == null);
var state_13573__$1 = (function (){var statearr_13589 = state_13573;
(statearr_13589[(11)] = inst_13445__$1);

return statearr_13589;
})();
if(cljs.core.truth_(inst_13446)){
var statearr_13590_13670 = state_13573__$1;
(statearr_13590_13670[(1)] = (5));

} else {
var statearr_13591_13671 = state_13573__$1;
(statearr_13591_13671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (15))){
var inst_13456 = (state_13573[(13)]);
var inst_13454 = (state_13573[(14)]);
var inst_13455 = (state_13573[(15)]);
var inst_13457 = (state_13573[(17)]);
var inst_13470 = (state_13573[(2)]);
var inst_13471 = (inst_13457 + (1));
var tmp13585 = inst_13456;
var tmp13586 = inst_13454;
var tmp13587 = inst_13455;
var inst_13454__$1 = tmp13586;
var inst_13455__$1 = tmp13587;
var inst_13456__$1 = tmp13585;
var inst_13457__$1 = inst_13471;
var state_13573__$1 = (function (){var statearr_13592 = state_13573;
(statearr_13592[(13)] = inst_13456__$1);

(statearr_13592[(14)] = inst_13454__$1);

(statearr_13592[(15)] = inst_13455__$1);

(statearr_13592[(17)] = inst_13457__$1);

(statearr_13592[(18)] = inst_13470);

return statearr_13592;
})();
var statearr_13593_13672 = state_13573__$1;
(statearr_13593_13672[(2)] = null);

(statearr_13593_13672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (21))){
var inst_13495 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13597_13673 = state_13573__$1;
(statearr_13597_13673[(2)] = inst_13495);

(statearr_13597_13673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (31))){
var inst_13521 = (state_13573[(10)]);
var inst_13525 = done.call(null,null);
var inst_13526 = cljs.core.async.untap_STAR_.call(null,m,inst_13521);
var state_13573__$1 = (function (){var statearr_13598 = state_13573;
(statearr_13598[(19)] = inst_13525);

return statearr_13598;
})();
var statearr_13599_13674 = state_13573__$1;
(statearr_13599_13674[(2)] = inst_13526);

(statearr_13599_13674[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (32))){
var inst_13514 = (state_13573[(9)]);
var inst_13513 = (state_13573[(20)]);
var inst_13515 = (state_13573[(21)]);
var inst_13516 = (state_13573[(12)]);
var inst_13528 = (state_13573[(2)]);
var inst_13529 = (inst_13516 + (1));
var tmp13594 = inst_13514;
var tmp13595 = inst_13513;
var tmp13596 = inst_13515;
var inst_13513__$1 = tmp13595;
var inst_13514__$1 = tmp13594;
var inst_13515__$1 = tmp13596;
var inst_13516__$1 = inst_13529;
var state_13573__$1 = (function (){var statearr_13600 = state_13573;
(statearr_13600[(9)] = inst_13514__$1);

(statearr_13600[(20)] = inst_13513__$1);

(statearr_13600[(21)] = inst_13515__$1);

(statearr_13600[(12)] = inst_13516__$1);

(statearr_13600[(22)] = inst_13528);

return statearr_13600;
})();
var statearr_13601_13675 = state_13573__$1;
(statearr_13601_13675[(2)] = null);

(statearr_13601_13675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (40))){
var inst_13541 = (state_13573[(23)]);
var inst_13545 = done.call(null,null);
var inst_13546 = cljs.core.async.untap_STAR_.call(null,m,inst_13541);
var state_13573__$1 = (function (){var statearr_13602 = state_13573;
(statearr_13602[(24)] = inst_13545);

return statearr_13602;
})();
var statearr_13603_13676 = state_13573__$1;
(statearr_13603_13676[(2)] = inst_13546);

(statearr_13603_13676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (33))){
var inst_13532 = (state_13573[(25)]);
var inst_13534 = cljs.core.chunked_seq_QMARK_.call(null,inst_13532);
var state_13573__$1 = state_13573;
if(inst_13534){
var statearr_13604_13677 = state_13573__$1;
(statearr_13604_13677[(1)] = (36));

} else {
var statearr_13605_13678 = state_13573__$1;
(statearr_13605_13678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (13))){
var inst_13464 = (state_13573[(26)]);
var inst_13467 = cljs.core.async.close_BANG_.call(null,inst_13464);
var state_13573__$1 = state_13573;
var statearr_13606_13679 = state_13573__$1;
(statearr_13606_13679[(2)] = inst_13467);

(statearr_13606_13679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (22))){
var inst_13485 = (state_13573[(8)]);
var inst_13488 = cljs.core.async.close_BANG_.call(null,inst_13485);
var state_13573__$1 = state_13573;
var statearr_13607_13680 = state_13573__$1;
(statearr_13607_13680[(2)] = inst_13488);

(statearr_13607_13680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (36))){
var inst_13532 = (state_13573[(25)]);
var inst_13536 = cljs.core.chunk_first.call(null,inst_13532);
var inst_13537 = cljs.core.chunk_rest.call(null,inst_13532);
var inst_13538 = cljs.core.count.call(null,inst_13536);
var inst_13513 = inst_13537;
var inst_13514 = inst_13536;
var inst_13515 = inst_13538;
var inst_13516 = (0);
var state_13573__$1 = (function (){var statearr_13608 = state_13573;
(statearr_13608[(9)] = inst_13514);

(statearr_13608[(20)] = inst_13513);

(statearr_13608[(21)] = inst_13515);

(statearr_13608[(12)] = inst_13516);

return statearr_13608;
})();
var statearr_13609_13681 = state_13573__$1;
(statearr_13609_13681[(2)] = null);

(statearr_13609_13681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (41))){
var inst_13532 = (state_13573[(25)]);
var inst_13548 = (state_13573[(2)]);
var inst_13549 = cljs.core.next.call(null,inst_13532);
var inst_13513 = inst_13549;
var inst_13514 = null;
var inst_13515 = (0);
var inst_13516 = (0);
var state_13573__$1 = (function (){var statearr_13610 = state_13573;
(statearr_13610[(9)] = inst_13514);

(statearr_13610[(20)] = inst_13513);

(statearr_13610[(21)] = inst_13515);

(statearr_13610[(27)] = inst_13548);

(statearr_13610[(12)] = inst_13516);

return statearr_13610;
})();
var statearr_13611_13682 = state_13573__$1;
(statearr_13611_13682[(2)] = null);

(statearr_13611_13682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (43))){
var state_13573__$1 = state_13573;
var statearr_13612_13683 = state_13573__$1;
(statearr_13612_13683[(2)] = null);

(statearr_13612_13683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (29))){
var inst_13557 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13613_13684 = state_13573__$1;
(statearr_13613_13684[(2)] = inst_13557);

(statearr_13613_13684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (44))){
var inst_13566 = (state_13573[(2)]);
var state_13573__$1 = (function (){var statearr_13614 = state_13573;
(statearr_13614[(28)] = inst_13566);

return statearr_13614;
})();
var statearr_13615_13685 = state_13573__$1;
(statearr_13615_13685[(2)] = null);

(statearr_13615_13685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (6))){
var inst_13505 = (state_13573[(29)]);
var inst_13504 = cljs.core.deref.call(null,cs);
var inst_13505__$1 = cljs.core.keys.call(null,inst_13504);
var inst_13506 = cljs.core.count.call(null,inst_13505__$1);
var inst_13507 = cljs.core.reset_BANG_.call(null,dctr,inst_13506);
var inst_13512 = cljs.core.seq.call(null,inst_13505__$1);
var inst_13513 = inst_13512;
var inst_13514 = null;
var inst_13515 = (0);
var inst_13516 = (0);
var state_13573__$1 = (function (){var statearr_13616 = state_13573;
(statearr_13616[(29)] = inst_13505__$1);

(statearr_13616[(30)] = inst_13507);

(statearr_13616[(9)] = inst_13514);

(statearr_13616[(20)] = inst_13513);

(statearr_13616[(21)] = inst_13515);

(statearr_13616[(12)] = inst_13516);

return statearr_13616;
})();
var statearr_13617_13686 = state_13573__$1;
(statearr_13617_13686[(2)] = null);

(statearr_13617_13686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (28))){
var inst_13532 = (state_13573[(25)]);
var inst_13513 = (state_13573[(20)]);
var inst_13532__$1 = cljs.core.seq.call(null,inst_13513);
var state_13573__$1 = (function (){var statearr_13618 = state_13573;
(statearr_13618[(25)] = inst_13532__$1);

return statearr_13618;
})();
if(inst_13532__$1){
var statearr_13619_13687 = state_13573__$1;
(statearr_13619_13687[(1)] = (33));

} else {
var statearr_13620_13688 = state_13573__$1;
(statearr_13620_13688[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (25))){
var inst_13515 = (state_13573[(21)]);
var inst_13516 = (state_13573[(12)]);
var inst_13518 = (inst_13516 < inst_13515);
var inst_13519 = inst_13518;
var state_13573__$1 = state_13573;
if(cljs.core.truth_(inst_13519)){
var statearr_13621_13689 = state_13573__$1;
(statearr_13621_13689[(1)] = (27));

} else {
var statearr_13622_13690 = state_13573__$1;
(statearr_13622_13690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (34))){
var state_13573__$1 = state_13573;
var statearr_13623_13691 = state_13573__$1;
(statearr_13623_13691[(2)] = null);

(statearr_13623_13691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (17))){
var state_13573__$1 = state_13573;
var statearr_13624_13692 = state_13573__$1;
(statearr_13624_13692[(2)] = null);

(statearr_13624_13692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (3))){
var inst_13571 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13573__$1,inst_13571);
} else {
if((state_val_13574 === (12))){
var inst_13500 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13625_13693 = state_13573__$1;
(statearr_13625_13693[(2)] = inst_13500);

(statearr_13625_13693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (2))){
var state_13573__$1 = state_13573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13573__$1,(4),ch);
} else {
if((state_val_13574 === (23))){
var state_13573__$1 = state_13573;
var statearr_13626_13694 = state_13573__$1;
(statearr_13626_13694[(2)] = null);

(statearr_13626_13694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (35))){
var inst_13555 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13627_13695 = state_13573__$1;
(statearr_13627_13695[(2)] = inst_13555);

(statearr_13627_13695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (19))){
var inst_13474 = (state_13573[(7)]);
var inst_13478 = cljs.core.chunk_first.call(null,inst_13474);
var inst_13479 = cljs.core.chunk_rest.call(null,inst_13474);
var inst_13480 = cljs.core.count.call(null,inst_13478);
var inst_13454 = inst_13479;
var inst_13455 = inst_13478;
var inst_13456 = inst_13480;
var inst_13457 = (0);
var state_13573__$1 = (function (){var statearr_13628 = state_13573;
(statearr_13628[(13)] = inst_13456);

(statearr_13628[(14)] = inst_13454);

(statearr_13628[(15)] = inst_13455);

(statearr_13628[(17)] = inst_13457);

return statearr_13628;
})();
var statearr_13629_13696 = state_13573__$1;
(statearr_13629_13696[(2)] = null);

(statearr_13629_13696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (11))){
var inst_13454 = (state_13573[(14)]);
var inst_13474 = (state_13573[(7)]);
var inst_13474__$1 = cljs.core.seq.call(null,inst_13454);
var state_13573__$1 = (function (){var statearr_13630 = state_13573;
(statearr_13630[(7)] = inst_13474__$1);

return statearr_13630;
})();
if(inst_13474__$1){
var statearr_13631_13697 = state_13573__$1;
(statearr_13631_13697[(1)] = (16));

} else {
var statearr_13632_13698 = state_13573__$1;
(statearr_13632_13698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (9))){
var inst_13502 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13633_13699 = state_13573__$1;
(statearr_13633_13699[(2)] = inst_13502);

(statearr_13633_13699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (5))){
var inst_13452 = cljs.core.deref.call(null,cs);
var inst_13453 = cljs.core.seq.call(null,inst_13452);
var inst_13454 = inst_13453;
var inst_13455 = null;
var inst_13456 = (0);
var inst_13457 = (0);
var state_13573__$1 = (function (){var statearr_13634 = state_13573;
(statearr_13634[(13)] = inst_13456);

(statearr_13634[(14)] = inst_13454);

(statearr_13634[(15)] = inst_13455);

(statearr_13634[(17)] = inst_13457);

return statearr_13634;
})();
var statearr_13635_13700 = state_13573__$1;
(statearr_13635_13700[(2)] = null);

(statearr_13635_13700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (14))){
var state_13573__$1 = state_13573;
var statearr_13636_13701 = state_13573__$1;
(statearr_13636_13701[(2)] = null);

(statearr_13636_13701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (45))){
var inst_13563 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13637_13702 = state_13573__$1;
(statearr_13637_13702[(2)] = inst_13563);

(statearr_13637_13702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (26))){
var inst_13505 = (state_13573[(29)]);
var inst_13559 = (state_13573[(2)]);
var inst_13560 = cljs.core.seq.call(null,inst_13505);
var state_13573__$1 = (function (){var statearr_13638 = state_13573;
(statearr_13638[(31)] = inst_13559);

return statearr_13638;
})();
if(inst_13560){
var statearr_13639_13703 = state_13573__$1;
(statearr_13639_13703[(1)] = (42));

} else {
var statearr_13640_13704 = state_13573__$1;
(statearr_13640_13704[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (16))){
var inst_13474 = (state_13573[(7)]);
var inst_13476 = cljs.core.chunked_seq_QMARK_.call(null,inst_13474);
var state_13573__$1 = state_13573;
if(inst_13476){
var statearr_13641_13705 = state_13573__$1;
(statearr_13641_13705[(1)] = (19));

} else {
var statearr_13642_13706 = state_13573__$1;
(statearr_13642_13706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (38))){
var inst_13552 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13643_13707 = state_13573__$1;
(statearr_13643_13707[(2)] = inst_13552);

(statearr_13643_13707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (30))){
var state_13573__$1 = state_13573;
var statearr_13644_13708 = state_13573__$1;
(statearr_13644_13708[(2)] = null);

(statearr_13644_13708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (10))){
var inst_13455 = (state_13573[(15)]);
var inst_13457 = (state_13573[(17)]);
var inst_13463 = cljs.core._nth.call(null,inst_13455,inst_13457);
var inst_13464 = cljs.core.nth.call(null,inst_13463,(0),null);
var inst_13465 = cljs.core.nth.call(null,inst_13463,(1),null);
var state_13573__$1 = (function (){var statearr_13645 = state_13573;
(statearr_13645[(26)] = inst_13464);

return statearr_13645;
})();
if(cljs.core.truth_(inst_13465)){
var statearr_13646_13709 = state_13573__$1;
(statearr_13646_13709[(1)] = (13));

} else {
var statearr_13647_13710 = state_13573__$1;
(statearr_13647_13710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (18))){
var inst_13498 = (state_13573[(2)]);
var state_13573__$1 = state_13573;
var statearr_13648_13711 = state_13573__$1;
(statearr_13648_13711[(2)] = inst_13498);

(statearr_13648_13711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (42))){
var state_13573__$1 = state_13573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13573__$1,(45),dchan);
} else {
if((state_val_13574 === (37))){
var inst_13532 = (state_13573[(25)]);
var inst_13541 = (state_13573[(23)]);
var inst_13445 = (state_13573[(11)]);
var inst_13541__$1 = cljs.core.first.call(null,inst_13532);
var inst_13542 = cljs.core.async.put_BANG_.call(null,inst_13541__$1,inst_13445,done);
var state_13573__$1 = (function (){var statearr_13649 = state_13573;
(statearr_13649[(23)] = inst_13541__$1);

return statearr_13649;
})();
if(cljs.core.truth_(inst_13542)){
var statearr_13650_13712 = state_13573__$1;
(statearr_13650_13712[(1)] = (39));

} else {
var statearr_13651_13713 = state_13573__$1;
(statearr_13651_13713[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13574 === (8))){
var inst_13456 = (state_13573[(13)]);
var inst_13457 = (state_13573[(17)]);
var inst_13459 = (inst_13457 < inst_13456);
var inst_13460 = inst_13459;
var state_13573__$1 = state_13573;
if(cljs.core.truth_(inst_13460)){
var statearr_13652_13714 = state_13573__$1;
(statearr_13652_13714[(1)] = (10));

} else {
var statearr_13653_13715 = state_13573__$1;
(statearr_13653_13715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___13661,cs,m,dchan,dctr,done))
;
return ((function (switch__7231__auto__,c__7296__auto___13661,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7232__auto__ = null;
var cljs$core$async$mult_$_state_machine__7232__auto____0 = (function (){
var statearr_13657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13657[(0)] = cljs$core$async$mult_$_state_machine__7232__auto__);

(statearr_13657[(1)] = (1));

return statearr_13657;
});
var cljs$core$async$mult_$_state_machine__7232__auto____1 = (function (state_13573){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_13573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e13658){if((e13658 instanceof Object)){
var ex__7235__auto__ = e13658;
var statearr_13659_13716 = state_13573;
(statearr_13659_13716[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13717 = state_13573;
state_13573 = G__13717;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7232__auto__ = function(state_13573){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7232__auto____1.call(this,state_13573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7232__auto____0;
cljs$core$async$mult_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7232__auto____1;
return cljs$core$async$mult_$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___13661,cs,m,dchan,dctr,done))
})();
var state__7298__auto__ = (function (){var statearr_13660 = f__7297__auto__.call(null);
(statearr_13660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___13661);

return statearr_13660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___13661,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13718 = [];
var len__5620__auto___13721 = arguments.length;
var i__5621__auto___13722 = (0);
while(true){
if((i__5621__auto___13722 < len__5620__auto___13721)){
args13718.push((arguments[i__5621__auto___13722]));

var G__13723 = (i__5621__auto___13722 + (1));
i__5621__auto___13722 = G__13723;
continue;
} else {
}
break;
}

var G__13720 = args13718.length;
switch (G__13720) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13718.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,ch);
} else {
var m__5218__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,ch);
} else {
var m__5218__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m);
} else {
var m__5218__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,state_map);
} else {
var m__5218__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5217__auto__ = (((m == null))?null:m);
var m__5218__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,m,mode);
} else {
var m__5218__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___13735 = arguments.length;
var i__5621__auto___13736 = (0);
while(true){
if((i__5621__auto___13736 < len__5620__auto___13735)){
args__5627__auto__.push((arguments[i__5621__auto___13736]));

var G__13737 = (i__5621__auto___13736 + (1));
i__5621__auto___13736 = G__13737;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((3) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5628__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13729){
var map__13730 = p__13729;
var map__13730__$1 = ((((!((map__13730 == null)))?((((map__13730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13730):map__13730);
var opts = map__13730__$1;
var statearr_13732_13738 = state;
(statearr_13732_13738[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13730,map__13730__$1,opts){
return (function (val){
var statearr_13733_13739 = state;
(statearr_13733_13739[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13730,map__13730__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13734_13740 = state;
(statearr_13734_13740[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13725){
var G__13726 = cljs.core.first.call(null,seq13725);
var seq13725__$1 = cljs.core.next.call(null,seq13725);
var G__13727 = cljs.core.first.call(null,seq13725__$1);
var seq13725__$2 = cljs.core.next.call(null,seq13725__$1);
var G__13728 = cljs.core.first.call(null,seq13725__$2);
var seq13725__$3 = cljs.core.next.call(null,seq13725__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13726,G__13727,G__13728,seq13725__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13904 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13905){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13905 = meta13905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13906,meta13905__$1){
var self__ = this;
var _13906__$1 = this;
return (new cljs.core.async.t_cljs$core$async13904(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13905__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13906){
var self__ = this;
var _13906__$1 = this;
return self__.meta13905;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13905","meta13905",-878530047,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13904";

cljs.core.async.t_cljs$core$async13904.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async13904");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13904 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13905){
return (new cljs.core.async.t_cljs$core$async13904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13905));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13904(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7296__auto___14067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14004){
var state_val_14005 = (state_14004[(1)]);
if((state_val_14005 === (7))){
var inst_13922 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14006_14068 = state_14004__$1;
(statearr_14006_14068[(2)] = inst_13922);

(statearr_14006_14068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (20))){
var inst_13934 = (state_14004[(7)]);
var state_14004__$1 = state_14004;
var statearr_14007_14069 = state_14004__$1;
(statearr_14007_14069[(2)] = inst_13934);

(statearr_14007_14069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (27))){
var state_14004__$1 = state_14004;
var statearr_14008_14070 = state_14004__$1;
(statearr_14008_14070[(2)] = null);

(statearr_14008_14070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (1))){
var inst_13910 = (state_14004[(8)]);
var inst_13910__$1 = calc_state.call(null);
var inst_13912 = (inst_13910__$1 == null);
var inst_13913 = cljs.core.not.call(null,inst_13912);
var state_14004__$1 = (function (){var statearr_14009 = state_14004;
(statearr_14009[(8)] = inst_13910__$1);

return statearr_14009;
})();
if(inst_13913){
var statearr_14010_14071 = state_14004__$1;
(statearr_14010_14071[(1)] = (2));

} else {
var statearr_14011_14072 = state_14004__$1;
(statearr_14011_14072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (24))){
var inst_13957 = (state_14004[(9)]);
var inst_13964 = (state_14004[(10)]);
var inst_13978 = (state_14004[(11)]);
var inst_13978__$1 = inst_13957.call(null,inst_13964);
var state_14004__$1 = (function (){var statearr_14012 = state_14004;
(statearr_14012[(11)] = inst_13978__$1);

return statearr_14012;
})();
if(cljs.core.truth_(inst_13978__$1)){
var statearr_14013_14073 = state_14004__$1;
(statearr_14013_14073[(1)] = (29));

} else {
var statearr_14014_14074 = state_14004__$1;
(statearr_14014_14074[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (4))){
var inst_13925 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13925)){
var statearr_14015_14075 = state_14004__$1;
(statearr_14015_14075[(1)] = (8));

} else {
var statearr_14016_14076 = state_14004__$1;
(statearr_14016_14076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (15))){
var inst_13951 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13951)){
var statearr_14017_14077 = state_14004__$1;
(statearr_14017_14077[(1)] = (19));

} else {
var statearr_14018_14078 = state_14004__$1;
(statearr_14018_14078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (21))){
var inst_13956 = (state_14004[(12)]);
var inst_13956__$1 = (state_14004[(2)]);
var inst_13957 = cljs.core.get.call(null,inst_13956__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13958 = cljs.core.get.call(null,inst_13956__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13959 = cljs.core.get.call(null,inst_13956__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14004__$1 = (function (){var statearr_14019 = state_14004;
(statearr_14019[(9)] = inst_13957);

(statearr_14019[(12)] = inst_13956__$1);

(statearr_14019[(13)] = inst_13958);

return statearr_14019;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14004__$1,(22),inst_13959);
} else {
if((state_val_14005 === (31))){
var inst_13986 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13986)){
var statearr_14020_14079 = state_14004__$1;
(statearr_14020_14079[(1)] = (32));

} else {
var statearr_14021_14080 = state_14004__$1;
(statearr_14021_14080[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (32))){
var inst_13963 = (state_14004[(14)]);
var state_14004__$1 = state_14004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14004__$1,(35),out,inst_13963);
} else {
if((state_val_14005 === (33))){
var inst_13956 = (state_14004[(12)]);
var inst_13934 = inst_13956;
var state_14004__$1 = (function (){var statearr_14022 = state_14004;
(statearr_14022[(7)] = inst_13934);

return statearr_14022;
})();
var statearr_14023_14081 = state_14004__$1;
(statearr_14023_14081[(2)] = null);

(statearr_14023_14081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (13))){
var inst_13934 = (state_14004[(7)]);
var inst_13941 = inst_13934.cljs$lang$protocol_mask$partition0$;
var inst_13942 = (inst_13941 & (64));
var inst_13943 = inst_13934.cljs$core$ISeq$;
var inst_13944 = (inst_13942) || (inst_13943);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13944)){
var statearr_14024_14082 = state_14004__$1;
(statearr_14024_14082[(1)] = (16));

} else {
var statearr_14025_14083 = state_14004__$1;
(statearr_14025_14083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (22))){
var inst_13963 = (state_14004[(14)]);
var inst_13964 = (state_14004[(10)]);
var inst_13962 = (state_14004[(2)]);
var inst_13963__$1 = cljs.core.nth.call(null,inst_13962,(0),null);
var inst_13964__$1 = cljs.core.nth.call(null,inst_13962,(1),null);
var inst_13965 = (inst_13963__$1 == null);
var inst_13966 = cljs.core._EQ_.call(null,inst_13964__$1,change);
var inst_13967 = (inst_13965) || (inst_13966);
var state_14004__$1 = (function (){var statearr_14026 = state_14004;
(statearr_14026[(14)] = inst_13963__$1);

(statearr_14026[(10)] = inst_13964__$1);

return statearr_14026;
})();
if(cljs.core.truth_(inst_13967)){
var statearr_14027_14084 = state_14004__$1;
(statearr_14027_14084[(1)] = (23));

} else {
var statearr_14028_14085 = state_14004__$1;
(statearr_14028_14085[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (36))){
var inst_13956 = (state_14004[(12)]);
var inst_13934 = inst_13956;
var state_14004__$1 = (function (){var statearr_14029 = state_14004;
(statearr_14029[(7)] = inst_13934);

return statearr_14029;
})();
var statearr_14030_14086 = state_14004__$1;
(statearr_14030_14086[(2)] = null);

(statearr_14030_14086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (29))){
var inst_13978 = (state_14004[(11)]);
var state_14004__$1 = state_14004;
var statearr_14031_14087 = state_14004__$1;
(statearr_14031_14087[(2)] = inst_13978);

(statearr_14031_14087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (6))){
var state_14004__$1 = state_14004;
var statearr_14032_14088 = state_14004__$1;
(statearr_14032_14088[(2)] = false);

(statearr_14032_14088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (28))){
var inst_13974 = (state_14004[(2)]);
var inst_13975 = calc_state.call(null);
var inst_13934 = inst_13975;
var state_14004__$1 = (function (){var statearr_14033 = state_14004;
(statearr_14033[(15)] = inst_13974);

(statearr_14033[(7)] = inst_13934);

return statearr_14033;
})();
var statearr_14034_14089 = state_14004__$1;
(statearr_14034_14089[(2)] = null);

(statearr_14034_14089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (25))){
var inst_14000 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14035_14090 = state_14004__$1;
(statearr_14035_14090[(2)] = inst_14000);

(statearr_14035_14090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (34))){
var inst_13998 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14036_14091 = state_14004__$1;
(statearr_14036_14091[(2)] = inst_13998);

(statearr_14036_14091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (17))){
var state_14004__$1 = state_14004;
var statearr_14037_14092 = state_14004__$1;
(statearr_14037_14092[(2)] = false);

(statearr_14037_14092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (3))){
var state_14004__$1 = state_14004;
var statearr_14038_14093 = state_14004__$1;
(statearr_14038_14093[(2)] = false);

(statearr_14038_14093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (12))){
var inst_14002 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14004__$1,inst_14002);
} else {
if((state_val_14005 === (2))){
var inst_13910 = (state_14004[(8)]);
var inst_13915 = inst_13910.cljs$lang$protocol_mask$partition0$;
var inst_13916 = (inst_13915 & (64));
var inst_13917 = inst_13910.cljs$core$ISeq$;
var inst_13918 = (inst_13916) || (inst_13917);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13918)){
var statearr_14039_14094 = state_14004__$1;
(statearr_14039_14094[(1)] = (5));

} else {
var statearr_14040_14095 = state_14004__$1;
(statearr_14040_14095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (23))){
var inst_13963 = (state_14004[(14)]);
var inst_13969 = (inst_13963 == null);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13969)){
var statearr_14041_14096 = state_14004__$1;
(statearr_14041_14096[(1)] = (26));

} else {
var statearr_14042_14097 = state_14004__$1;
(statearr_14042_14097[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (35))){
var inst_13989 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
if(cljs.core.truth_(inst_13989)){
var statearr_14043_14098 = state_14004__$1;
(statearr_14043_14098[(1)] = (36));

} else {
var statearr_14044_14099 = state_14004__$1;
(statearr_14044_14099[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (19))){
var inst_13934 = (state_14004[(7)]);
var inst_13953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13934);
var state_14004__$1 = state_14004;
var statearr_14045_14100 = state_14004__$1;
(statearr_14045_14100[(2)] = inst_13953);

(statearr_14045_14100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (11))){
var inst_13934 = (state_14004[(7)]);
var inst_13938 = (inst_13934 == null);
var inst_13939 = cljs.core.not.call(null,inst_13938);
var state_14004__$1 = state_14004;
if(inst_13939){
var statearr_14046_14101 = state_14004__$1;
(statearr_14046_14101[(1)] = (13));

} else {
var statearr_14047_14102 = state_14004__$1;
(statearr_14047_14102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (9))){
var inst_13910 = (state_14004[(8)]);
var state_14004__$1 = state_14004;
var statearr_14048_14103 = state_14004__$1;
(statearr_14048_14103[(2)] = inst_13910);

(statearr_14048_14103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (5))){
var state_14004__$1 = state_14004;
var statearr_14049_14104 = state_14004__$1;
(statearr_14049_14104[(2)] = true);

(statearr_14049_14104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (14))){
var state_14004__$1 = state_14004;
var statearr_14050_14105 = state_14004__$1;
(statearr_14050_14105[(2)] = false);

(statearr_14050_14105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (26))){
var inst_13964 = (state_14004[(10)]);
var inst_13971 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13964);
var state_14004__$1 = state_14004;
var statearr_14051_14106 = state_14004__$1;
(statearr_14051_14106[(2)] = inst_13971);

(statearr_14051_14106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (16))){
var state_14004__$1 = state_14004;
var statearr_14052_14107 = state_14004__$1;
(statearr_14052_14107[(2)] = true);

(statearr_14052_14107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (38))){
var inst_13994 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14053_14108 = state_14004__$1;
(statearr_14053_14108[(2)] = inst_13994);

(statearr_14053_14108[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (30))){
var inst_13957 = (state_14004[(9)]);
var inst_13958 = (state_14004[(13)]);
var inst_13964 = (state_14004[(10)]);
var inst_13981 = cljs.core.empty_QMARK_.call(null,inst_13957);
var inst_13982 = inst_13958.call(null,inst_13964);
var inst_13983 = cljs.core.not.call(null,inst_13982);
var inst_13984 = (inst_13981) && (inst_13983);
var state_14004__$1 = state_14004;
var statearr_14054_14109 = state_14004__$1;
(statearr_14054_14109[(2)] = inst_13984);

(statearr_14054_14109[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (10))){
var inst_13910 = (state_14004[(8)]);
var inst_13930 = (state_14004[(2)]);
var inst_13931 = cljs.core.get.call(null,inst_13930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13932 = cljs.core.get.call(null,inst_13930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13933 = cljs.core.get.call(null,inst_13930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13934 = inst_13910;
var state_14004__$1 = (function (){var statearr_14055 = state_14004;
(statearr_14055[(16)] = inst_13932);

(statearr_14055[(17)] = inst_13931);

(statearr_14055[(7)] = inst_13934);

(statearr_14055[(18)] = inst_13933);

return statearr_14055;
})();
var statearr_14056_14110 = state_14004__$1;
(statearr_14056_14110[(2)] = null);

(statearr_14056_14110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (18))){
var inst_13948 = (state_14004[(2)]);
var state_14004__$1 = state_14004;
var statearr_14057_14111 = state_14004__$1;
(statearr_14057_14111[(2)] = inst_13948);

(statearr_14057_14111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (37))){
var state_14004__$1 = state_14004;
var statearr_14058_14112 = state_14004__$1;
(statearr_14058_14112[(2)] = null);

(statearr_14058_14112[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14005 === (8))){
var inst_13910 = (state_14004[(8)]);
var inst_13927 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13910);
var state_14004__$1 = state_14004;
var statearr_14059_14113 = state_14004__$1;
(statearr_14059_14113[(2)] = inst_13927);

(statearr_14059_14113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7231__auto__,c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7232__auto__ = null;
var cljs$core$async$mix_$_state_machine__7232__auto____0 = (function (){
var statearr_14063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14063[(0)] = cljs$core$async$mix_$_state_machine__7232__auto__);

(statearr_14063[(1)] = (1));

return statearr_14063;
});
var cljs$core$async$mix_$_state_machine__7232__auto____1 = (function (state_14004){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14064){if((e14064 instanceof Object)){
var ex__7235__auto__ = e14064;
var statearr_14065_14114 = state_14004;
(statearr_14065_14114[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14115 = state_14004;
state_14004 = G__14115;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7232__auto__ = function(state_14004){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7232__auto____1.call(this,state_14004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7232__auto____0;
cljs$core$async$mix_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7232__auto____1;
return cljs$core$async$mix_$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7298__auto__ = (function (){var statearr_14066 = f__7297__auto__.call(null);
(statearr_14066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14067);

return statearr_14066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14067,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5217__auto__ = (((p == null))?null:p);
var m__5218__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5218__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5217__auto__ = (((p == null))?null:p);
var m__5218__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,p,v,ch);
} else {
var m__5218__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14116 = [];
var len__5620__auto___14119 = arguments.length;
var i__5621__auto___14120 = (0);
while(true){
if((i__5621__auto___14120 < len__5620__auto___14119)){
args14116.push((arguments[i__5621__auto___14120]));

var G__14121 = (i__5621__auto___14120 + (1));
i__5621__auto___14120 = G__14121;
continue;
} else {
}
break;
}

var G__14118 = args14116.length;
switch (G__14118) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14116.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5217__auto__ = (((p == null))?null:p);
var m__5218__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,p);
} else {
var m__5218__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5217__auto__ = (((p == null))?null:p);
var m__5218__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,p,v);
} else {
var m__5218__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14124 = [];
var len__5620__auto___14249 = arguments.length;
var i__5621__auto___14250 = (0);
while(true){
if((i__5621__auto___14250 < len__5620__auto___14249)){
args14124.push((arguments[i__5621__auto___14250]));

var G__14251 = (i__5621__auto___14250 + (1));
i__5621__auto___14250 = G__14251;
continue;
} else {
}
break;
}

var G__14126 = args14124.length;
switch (G__14126) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14124.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4562__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4562__auto__,mults){
return (function (p1__14123_SHARP_){
if(cljs.core.truth_(p1__14123_SHARP_.call(null,topic))){
return p1__14123_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14123_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4562__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14127 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14128){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14128 = meta14128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14129,meta14128__$1){
var self__ = this;
var _14129__$1 = this;
return (new cljs.core.async.t_cljs$core$async14127(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14128__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14129){
var self__ = this;
var _14129__$1 = this;
return self__.meta14128;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14128","meta14128",791197934,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14127";

cljs.core.async.t_cljs$core$async14127.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async14127");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14127 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14128){
return (new cljs.core.async.t_cljs$core$async14127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14128));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14127(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7296__auto___14253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14253,mults,ensure_mult,p){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14253,mults,ensure_mult,p){
return (function (state_14201){
var state_val_14202 = (state_14201[(1)]);
if((state_val_14202 === (7))){
var inst_14197 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14203_14254 = state_14201__$1;
(statearr_14203_14254[(2)] = inst_14197);

(statearr_14203_14254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (20))){
var state_14201__$1 = state_14201;
var statearr_14204_14255 = state_14201__$1;
(statearr_14204_14255[(2)] = null);

(statearr_14204_14255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (1))){
var state_14201__$1 = state_14201;
var statearr_14205_14256 = state_14201__$1;
(statearr_14205_14256[(2)] = null);

(statearr_14205_14256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (24))){
var inst_14180 = (state_14201[(7)]);
var inst_14189 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14180);
var state_14201__$1 = state_14201;
var statearr_14206_14257 = state_14201__$1;
(statearr_14206_14257[(2)] = inst_14189);

(statearr_14206_14257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (4))){
var inst_14132 = (state_14201[(8)]);
var inst_14132__$1 = (state_14201[(2)]);
var inst_14133 = (inst_14132__$1 == null);
var state_14201__$1 = (function (){var statearr_14207 = state_14201;
(statearr_14207[(8)] = inst_14132__$1);

return statearr_14207;
})();
if(cljs.core.truth_(inst_14133)){
var statearr_14208_14258 = state_14201__$1;
(statearr_14208_14258[(1)] = (5));

} else {
var statearr_14209_14259 = state_14201__$1;
(statearr_14209_14259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (15))){
var inst_14174 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14210_14260 = state_14201__$1;
(statearr_14210_14260[(2)] = inst_14174);

(statearr_14210_14260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (21))){
var inst_14194 = (state_14201[(2)]);
var state_14201__$1 = (function (){var statearr_14211 = state_14201;
(statearr_14211[(9)] = inst_14194);

return statearr_14211;
})();
var statearr_14212_14261 = state_14201__$1;
(statearr_14212_14261[(2)] = null);

(statearr_14212_14261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (13))){
var inst_14156 = (state_14201[(10)]);
var inst_14158 = cljs.core.chunked_seq_QMARK_.call(null,inst_14156);
var state_14201__$1 = state_14201;
if(inst_14158){
var statearr_14213_14262 = state_14201__$1;
(statearr_14213_14262[(1)] = (16));

} else {
var statearr_14214_14263 = state_14201__$1;
(statearr_14214_14263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (22))){
var inst_14186 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
if(cljs.core.truth_(inst_14186)){
var statearr_14215_14264 = state_14201__$1;
(statearr_14215_14264[(1)] = (23));

} else {
var statearr_14216_14265 = state_14201__$1;
(statearr_14216_14265[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (6))){
var inst_14180 = (state_14201[(7)]);
var inst_14182 = (state_14201[(11)]);
var inst_14132 = (state_14201[(8)]);
var inst_14180__$1 = topic_fn.call(null,inst_14132);
var inst_14181 = cljs.core.deref.call(null,mults);
var inst_14182__$1 = cljs.core.get.call(null,inst_14181,inst_14180__$1);
var state_14201__$1 = (function (){var statearr_14217 = state_14201;
(statearr_14217[(7)] = inst_14180__$1);

(statearr_14217[(11)] = inst_14182__$1);

return statearr_14217;
})();
if(cljs.core.truth_(inst_14182__$1)){
var statearr_14218_14266 = state_14201__$1;
(statearr_14218_14266[(1)] = (19));

} else {
var statearr_14219_14267 = state_14201__$1;
(statearr_14219_14267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (25))){
var inst_14191 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14220_14268 = state_14201__$1;
(statearr_14220_14268[(2)] = inst_14191);

(statearr_14220_14268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (17))){
var inst_14156 = (state_14201[(10)]);
var inst_14165 = cljs.core.first.call(null,inst_14156);
var inst_14166 = cljs.core.async.muxch_STAR_.call(null,inst_14165);
var inst_14167 = cljs.core.async.close_BANG_.call(null,inst_14166);
var inst_14168 = cljs.core.next.call(null,inst_14156);
var inst_14142 = inst_14168;
var inst_14143 = null;
var inst_14144 = (0);
var inst_14145 = (0);
var state_14201__$1 = (function (){var statearr_14221 = state_14201;
(statearr_14221[(12)] = inst_14142);

(statearr_14221[(13)] = inst_14143);

(statearr_14221[(14)] = inst_14144);

(statearr_14221[(15)] = inst_14167);

(statearr_14221[(16)] = inst_14145);

return statearr_14221;
})();
var statearr_14222_14269 = state_14201__$1;
(statearr_14222_14269[(2)] = null);

(statearr_14222_14269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (3))){
var inst_14199 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14201__$1,inst_14199);
} else {
if((state_val_14202 === (12))){
var inst_14176 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14223_14270 = state_14201__$1;
(statearr_14223_14270[(2)] = inst_14176);

(statearr_14223_14270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (2))){
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14201__$1,(4),ch);
} else {
if((state_val_14202 === (23))){
var state_14201__$1 = state_14201;
var statearr_14224_14271 = state_14201__$1;
(statearr_14224_14271[(2)] = null);

(statearr_14224_14271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (19))){
var inst_14182 = (state_14201[(11)]);
var inst_14132 = (state_14201[(8)]);
var inst_14184 = cljs.core.async.muxch_STAR_.call(null,inst_14182);
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14201__$1,(22),inst_14184,inst_14132);
} else {
if((state_val_14202 === (11))){
var inst_14142 = (state_14201[(12)]);
var inst_14156 = (state_14201[(10)]);
var inst_14156__$1 = cljs.core.seq.call(null,inst_14142);
var state_14201__$1 = (function (){var statearr_14225 = state_14201;
(statearr_14225[(10)] = inst_14156__$1);

return statearr_14225;
})();
if(inst_14156__$1){
var statearr_14226_14272 = state_14201__$1;
(statearr_14226_14272[(1)] = (13));

} else {
var statearr_14227_14273 = state_14201__$1;
(statearr_14227_14273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (9))){
var inst_14178 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14228_14274 = state_14201__$1;
(statearr_14228_14274[(2)] = inst_14178);

(statearr_14228_14274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (5))){
var inst_14139 = cljs.core.deref.call(null,mults);
var inst_14140 = cljs.core.vals.call(null,inst_14139);
var inst_14141 = cljs.core.seq.call(null,inst_14140);
var inst_14142 = inst_14141;
var inst_14143 = null;
var inst_14144 = (0);
var inst_14145 = (0);
var state_14201__$1 = (function (){var statearr_14229 = state_14201;
(statearr_14229[(12)] = inst_14142);

(statearr_14229[(13)] = inst_14143);

(statearr_14229[(14)] = inst_14144);

(statearr_14229[(16)] = inst_14145);

return statearr_14229;
})();
var statearr_14230_14275 = state_14201__$1;
(statearr_14230_14275[(2)] = null);

(statearr_14230_14275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (14))){
var state_14201__$1 = state_14201;
var statearr_14234_14276 = state_14201__$1;
(statearr_14234_14276[(2)] = null);

(statearr_14234_14276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (16))){
var inst_14156 = (state_14201[(10)]);
var inst_14160 = cljs.core.chunk_first.call(null,inst_14156);
var inst_14161 = cljs.core.chunk_rest.call(null,inst_14156);
var inst_14162 = cljs.core.count.call(null,inst_14160);
var inst_14142 = inst_14161;
var inst_14143 = inst_14160;
var inst_14144 = inst_14162;
var inst_14145 = (0);
var state_14201__$1 = (function (){var statearr_14235 = state_14201;
(statearr_14235[(12)] = inst_14142);

(statearr_14235[(13)] = inst_14143);

(statearr_14235[(14)] = inst_14144);

(statearr_14235[(16)] = inst_14145);

return statearr_14235;
})();
var statearr_14236_14277 = state_14201__$1;
(statearr_14236_14277[(2)] = null);

(statearr_14236_14277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (10))){
var inst_14142 = (state_14201[(12)]);
var inst_14143 = (state_14201[(13)]);
var inst_14144 = (state_14201[(14)]);
var inst_14145 = (state_14201[(16)]);
var inst_14150 = cljs.core._nth.call(null,inst_14143,inst_14145);
var inst_14151 = cljs.core.async.muxch_STAR_.call(null,inst_14150);
var inst_14152 = cljs.core.async.close_BANG_.call(null,inst_14151);
var inst_14153 = (inst_14145 + (1));
var tmp14231 = inst_14142;
var tmp14232 = inst_14143;
var tmp14233 = inst_14144;
var inst_14142__$1 = tmp14231;
var inst_14143__$1 = tmp14232;
var inst_14144__$1 = tmp14233;
var inst_14145__$1 = inst_14153;
var state_14201__$1 = (function (){var statearr_14237 = state_14201;
(statearr_14237[(12)] = inst_14142__$1);

(statearr_14237[(13)] = inst_14143__$1);

(statearr_14237[(14)] = inst_14144__$1);

(statearr_14237[(17)] = inst_14152);

(statearr_14237[(16)] = inst_14145__$1);

return statearr_14237;
})();
var statearr_14238_14278 = state_14201__$1;
(statearr_14238_14278[(2)] = null);

(statearr_14238_14278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (18))){
var inst_14171 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14239_14279 = state_14201__$1;
(statearr_14239_14279[(2)] = inst_14171);

(statearr_14239_14279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (8))){
var inst_14144 = (state_14201[(14)]);
var inst_14145 = (state_14201[(16)]);
var inst_14147 = (inst_14145 < inst_14144);
var inst_14148 = inst_14147;
var state_14201__$1 = state_14201;
if(cljs.core.truth_(inst_14148)){
var statearr_14240_14280 = state_14201__$1;
(statearr_14240_14280[(1)] = (10));

} else {
var statearr_14241_14281 = state_14201__$1;
(statearr_14241_14281[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14253,mults,ensure_mult,p))
;
return ((function (switch__7231__auto__,c__7296__auto___14253,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14245[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14245[(1)] = (1));

return statearr_14245;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14201){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14246){if((e14246 instanceof Object)){
var ex__7235__auto__ = e14246;
var statearr_14247_14282 = state_14201;
(statearr_14247_14282[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14283 = state_14201;
state_14201 = G__14283;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14253,mults,ensure_mult,p))
})();
var state__7298__auto__ = (function (){var statearr_14248 = f__7297__auto__.call(null);
(statearr_14248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14253);

return statearr_14248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14253,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14284 = [];
var len__5620__auto___14287 = arguments.length;
var i__5621__auto___14288 = (0);
while(true){
if((i__5621__auto___14288 < len__5620__auto___14287)){
args14284.push((arguments[i__5621__auto___14288]));

var G__14289 = (i__5621__auto___14288 + (1));
i__5621__auto___14288 = G__14289;
continue;
} else {
}
break;
}

var G__14286 = args14284.length;
switch (G__14286) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14284.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14291 = [];
var len__5620__auto___14294 = arguments.length;
var i__5621__auto___14295 = (0);
while(true){
if((i__5621__auto___14295 < len__5620__auto___14294)){
args14291.push((arguments[i__5621__auto___14295]));

var G__14296 = (i__5621__auto___14295 + (1));
i__5621__auto___14295 = G__14296;
continue;
} else {
}
break;
}

var G__14293 = args14291.length;
switch (G__14293) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14291.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14298 = [];
var len__5620__auto___14369 = arguments.length;
var i__5621__auto___14370 = (0);
while(true){
if((i__5621__auto___14370 < len__5620__auto___14369)){
args14298.push((arguments[i__5621__auto___14370]));

var G__14371 = (i__5621__auto___14370 + (1));
i__5621__auto___14370 = G__14371;
continue;
} else {
}
break;
}

var G__14300 = args14298.length;
switch (G__14300) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14298.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7296__auto___14373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14339){
var state_val_14340 = (state_14339[(1)]);
if((state_val_14340 === (7))){
var state_14339__$1 = state_14339;
var statearr_14341_14374 = state_14339__$1;
(statearr_14341_14374[(2)] = null);

(statearr_14341_14374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (1))){
var state_14339__$1 = state_14339;
var statearr_14342_14375 = state_14339__$1;
(statearr_14342_14375[(2)] = null);

(statearr_14342_14375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (4))){
var inst_14303 = (state_14339[(7)]);
var inst_14305 = (inst_14303 < cnt);
var state_14339__$1 = state_14339;
if(cljs.core.truth_(inst_14305)){
var statearr_14343_14376 = state_14339__$1;
(statearr_14343_14376[(1)] = (6));

} else {
var statearr_14344_14377 = state_14339__$1;
(statearr_14344_14377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (15))){
var inst_14335 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14345_14378 = state_14339__$1;
(statearr_14345_14378[(2)] = inst_14335);

(statearr_14345_14378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (13))){
var inst_14328 = cljs.core.async.close_BANG_.call(null,out);
var state_14339__$1 = state_14339;
var statearr_14346_14379 = state_14339__$1;
(statearr_14346_14379[(2)] = inst_14328);

(statearr_14346_14379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (6))){
var state_14339__$1 = state_14339;
var statearr_14347_14380 = state_14339__$1;
(statearr_14347_14380[(2)] = null);

(statearr_14347_14380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (3))){
var inst_14337 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else {
if((state_val_14340 === (12))){
var inst_14325 = (state_14339[(8)]);
var inst_14325__$1 = (state_14339[(2)]);
var inst_14326 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14325__$1);
var state_14339__$1 = (function (){var statearr_14348 = state_14339;
(statearr_14348[(8)] = inst_14325__$1);

return statearr_14348;
})();
if(cljs.core.truth_(inst_14326)){
var statearr_14349_14381 = state_14339__$1;
(statearr_14349_14381[(1)] = (13));

} else {
var statearr_14350_14382 = state_14339__$1;
(statearr_14350_14382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (2))){
var inst_14302 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14303 = (0);
var state_14339__$1 = (function (){var statearr_14351 = state_14339;
(statearr_14351[(7)] = inst_14303);

(statearr_14351[(9)] = inst_14302);

return statearr_14351;
})();
var statearr_14352_14383 = state_14339__$1;
(statearr_14352_14383[(2)] = null);

(statearr_14352_14383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (11))){
var inst_14303 = (state_14339[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14339,(10),Object,null,(9));
var inst_14312 = chs__$1.call(null,inst_14303);
var inst_14313 = done.call(null,inst_14303);
var inst_14314 = cljs.core.async.take_BANG_.call(null,inst_14312,inst_14313);
var state_14339__$1 = state_14339;
var statearr_14353_14384 = state_14339__$1;
(statearr_14353_14384[(2)] = inst_14314);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (9))){
var inst_14303 = (state_14339[(7)]);
var inst_14316 = (state_14339[(2)]);
var inst_14317 = (inst_14303 + (1));
var inst_14303__$1 = inst_14317;
var state_14339__$1 = (function (){var statearr_14354 = state_14339;
(statearr_14354[(7)] = inst_14303__$1);

(statearr_14354[(10)] = inst_14316);

return statearr_14354;
})();
var statearr_14355_14385 = state_14339__$1;
(statearr_14355_14385[(2)] = null);

(statearr_14355_14385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (5))){
var inst_14323 = (state_14339[(2)]);
var state_14339__$1 = (function (){var statearr_14356 = state_14339;
(statearr_14356[(11)] = inst_14323);

return statearr_14356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(12),dchan);
} else {
if((state_val_14340 === (14))){
var inst_14325 = (state_14339[(8)]);
var inst_14330 = cljs.core.apply.call(null,f,inst_14325);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14339__$1,(16),out,inst_14330);
} else {
if((state_val_14340 === (16))){
var inst_14332 = (state_14339[(2)]);
var state_14339__$1 = (function (){var statearr_14357 = state_14339;
(statearr_14357[(12)] = inst_14332);

return statearr_14357;
})();
var statearr_14358_14386 = state_14339__$1;
(statearr_14358_14386[(2)] = null);

(statearr_14358_14386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (10))){
var inst_14307 = (state_14339[(2)]);
var inst_14308 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14339__$1 = (function (){var statearr_14359 = state_14339;
(statearr_14359[(13)] = inst_14307);

return statearr_14359;
})();
var statearr_14360_14387 = state_14339__$1;
(statearr_14360_14387[(2)] = inst_14308);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (8))){
var inst_14321 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14361_14388 = state_14339__$1;
(statearr_14361_14388[(2)] = inst_14321);

(statearr_14361_14388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7231__auto__,c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14365[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14365[(1)] = (1));

return statearr_14365;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14339){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14366){if((e14366 instanceof Object)){
var ex__7235__auto__ = e14366;
var statearr_14367_14389 = state_14339;
(statearr_14367_14389[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14390 = state_14339;
state_14339 = G__14390;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7298__auto__ = (function (){var statearr_14368 = f__7297__auto__.call(null);
(statearr_14368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14373);

return statearr_14368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14373,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14392 = [];
var len__5620__auto___14448 = arguments.length;
var i__5621__auto___14449 = (0);
while(true){
if((i__5621__auto___14449 < len__5620__auto___14448)){
args14392.push((arguments[i__5621__auto___14449]));

var G__14450 = (i__5621__auto___14449 + (1));
i__5621__auto___14449 = G__14450;
continue;
} else {
}
break;
}

var G__14394 = args14392.length;
switch (G__14394) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14392.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___14452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14452,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14452,out){
return (function (state_14424){
var state_val_14425 = (state_14424[(1)]);
if((state_val_14425 === (7))){
var inst_14404 = (state_14424[(7)]);
var inst_14403 = (state_14424[(8)]);
var inst_14403__$1 = (state_14424[(2)]);
var inst_14404__$1 = cljs.core.nth.call(null,inst_14403__$1,(0),null);
var inst_14405 = cljs.core.nth.call(null,inst_14403__$1,(1),null);
var inst_14406 = (inst_14404__$1 == null);
var state_14424__$1 = (function (){var statearr_14426 = state_14424;
(statearr_14426[(7)] = inst_14404__$1);

(statearr_14426[(8)] = inst_14403__$1);

(statearr_14426[(9)] = inst_14405);

return statearr_14426;
})();
if(cljs.core.truth_(inst_14406)){
var statearr_14427_14453 = state_14424__$1;
(statearr_14427_14453[(1)] = (8));

} else {
var statearr_14428_14454 = state_14424__$1;
(statearr_14428_14454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (1))){
var inst_14395 = cljs.core.vec.call(null,chs);
var inst_14396 = inst_14395;
var state_14424__$1 = (function (){var statearr_14429 = state_14424;
(statearr_14429[(10)] = inst_14396);

return statearr_14429;
})();
var statearr_14430_14455 = state_14424__$1;
(statearr_14430_14455[(2)] = null);

(statearr_14430_14455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (4))){
var inst_14396 = (state_14424[(10)]);
var state_14424__$1 = state_14424;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14424__$1,(7),inst_14396);
} else {
if((state_val_14425 === (6))){
var inst_14420 = (state_14424[(2)]);
var state_14424__$1 = state_14424;
var statearr_14431_14456 = state_14424__$1;
(statearr_14431_14456[(2)] = inst_14420);

(statearr_14431_14456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (3))){
var inst_14422 = (state_14424[(2)]);
var state_14424__$1 = state_14424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14424__$1,inst_14422);
} else {
if((state_val_14425 === (2))){
var inst_14396 = (state_14424[(10)]);
var inst_14398 = cljs.core.count.call(null,inst_14396);
var inst_14399 = (inst_14398 > (0));
var state_14424__$1 = state_14424;
if(cljs.core.truth_(inst_14399)){
var statearr_14433_14457 = state_14424__$1;
(statearr_14433_14457[(1)] = (4));

} else {
var statearr_14434_14458 = state_14424__$1;
(statearr_14434_14458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (11))){
var inst_14396 = (state_14424[(10)]);
var inst_14413 = (state_14424[(2)]);
var tmp14432 = inst_14396;
var inst_14396__$1 = tmp14432;
var state_14424__$1 = (function (){var statearr_14435 = state_14424;
(statearr_14435[(11)] = inst_14413);

(statearr_14435[(10)] = inst_14396__$1);

return statearr_14435;
})();
var statearr_14436_14459 = state_14424__$1;
(statearr_14436_14459[(2)] = null);

(statearr_14436_14459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (9))){
var inst_14404 = (state_14424[(7)]);
var state_14424__$1 = state_14424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14424__$1,(11),out,inst_14404);
} else {
if((state_val_14425 === (5))){
var inst_14418 = cljs.core.async.close_BANG_.call(null,out);
var state_14424__$1 = state_14424;
var statearr_14437_14460 = state_14424__$1;
(statearr_14437_14460[(2)] = inst_14418);

(statearr_14437_14460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (10))){
var inst_14416 = (state_14424[(2)]);
var state_14424__$1 = state_14424;
var statearr_14438_14461 = state_14424__$1;
(statearr_14438_14461[(2)] = inst_14416);

(statearr_14438_14461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14425 === (8))){
var inst_14396 = (state_14424[(10)]);
var inst_14404 = (state_14424[(7)]);
var inst_14403 = (state_14424[(8)]);
var inst_14405 = (state_14424[(9)]);
var inst_14408 = (function (){var cs = inst_14396;
var vec__14401 = inst_14403;
var v = inst_14404;
var c = inst_14405;
return ((function (cs,vec__14401,v,c,inst_14396,inst_14404,inst_14403,inst_14405,state_val_14425,c__7296__auto___14452,out){
return (function (p1__14391_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14391_SHARP_);
});
;})(cs,vec__14401,v,c,inst_14396,inst_14404,inst_14403,inst_14405,state_val_14425,c__7296__auto___14452,out))
})();
var inst_14409 = cljs.core.filterv.call(null,inst_14408,inst_14396);
var inst_14396__$1 = inst_14409;
var state_14424__$1 = (function (){var statearr_14439 = state_14424;
(statearr_14439[(10)] = inst_14396__$1);

return statearr_14439;
})();
var statearr_14440_14462 = state_14424__$1;
(statearr_14440_14462[(2)] = null);

(statearr_14440_14462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14452,out))
;
return ((function (switch__7231__auto__,c__7296__auto___14452,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14444 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14444[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14444[(1)] = (1));

return statearr_14444;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14424){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14445){if((e14445 instanceof Object)){
var ex__7235__auto__ = e14445;
var statearr_14446_14463 = state_14424;
(statearr_14446_14463[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14464 = state_14424;
state_14424 = G__14464;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14452,out))
})();
var state__7298__auto__ = (function (){var statearr_14447 = f__7297__auto__.call(null);
(statearr_14447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14452);

return statearr_14447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14452,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14465 = [];
var len__5620__auto___14514 = arguments.length;
var i__5621__auto___14515 = (0);
while(true){
if((i__5621__auto___14515 < len__5620__auto___14514)){
args14465.push((arguments[i__5621__auto___14515]));

var G__14516 = (i__5621__auto___14515 + (1));
i__5621__auto___14515 = G__14516;
continue;
} else {
}
break;
}

var G__14467 = args14465.length;
switch (G__14467) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14465.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___14518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14518,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14518,out){
return (function (state_14491){
var state_val_14492 = (state_14491[(1)]);
if((state_val_14492 === (7))){
var inst_14473 = (state_14491[(7)]);
var inst_14473__$1 = (state_14491[(2)]);
var inst_14474 = (inst_14473__$1 == null);
var inst_14475 = cljs.core.not.call(null,inst_14474);
var state_14491__$1 = (function (){var statearr_14493 = state_14491;
(statearr_14493[(7)] = inst_14473__$1);

return statearr_14493;
})();
if(inst_14475){
var statearr_14494_14519 = state_14491__$1;
(statearr_14494_14519[(1)] = (8));

} else {
var statearr_14495_14520 = state_14491__$1;
(statearr_14495_14520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (1))){
var inst_14468 = (0);
var state_14491__$1 = (function (){var statearr_14496 = state_14491;
(statearr_14496[(8)] = inst_14468);

return statearr_14496;
})();
var statearr_14497_14521 = state_14491__$1;
(statearr_14497_14521[(2)] = null);

(statearr_14497_14521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (4))){
var state_14491__$1 = state_14491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14491__$1,(7),ch);
} else {
if((state_val_14492 === (6))){
var inst_14486 = (state_14491[(2)]);
var state_14491__$1 = state_14491;
var statearr_14498_14522 = state_14491__$1;
(statearr_14498_14522[(2)] = inst_14486);

(statearr_14498_14522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (3))){
var inst_14488 = (state_14491[(2)]);
var inst_14489 = cljs.core.async.close_BANG_.call(null,out);
var state_14491__$1 = (function (){var statearr_14499 = state_14491;
(statearr_14499[(9)] = inst_14488);

return statearr_14499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14491__$1,inst_14489);
} else {
if((state_val_14492 === (2))){
var inst_14468 = (state_14491[(8)]);
var inst_14470 = (inst_14468 < n);
var state_14491__$1 = state_14491;
if(cljs.core.truth_(inst_14470)){
var statearr_14500_14523 = state_14491__$1;
(statearr_14500_14523[(1)] = (4));

} else {
var statearr_14501_14524 = state_14491__$1;
(statearr_14501_14524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (11))){
var inst_14468 = (state_14491[(8)]);
var inst_14478 = (state_14491[(2)]);
var inst_14479 = (inst_14468 + (1));
var inst_14468__$1 = inst_14479;
var state_14491__$1 = (function (){var statearr_14502 = state_14491;
(statearr_14502[(10)] = inst_14478);

(statearr_14502[(8)] = inst_14468__$1);

return statearr_14502;
})();
var statearr_14503_14525 = state_14491__$1;
(statearr_14503_14525[(2)] = null);

(statearr_14503_14525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (9))){
var state_14491__$1 = state_14491;
var statearr_14504_14526 = state_14491__$1;
(statearr_14504_14526[(2)] = null);

(statearr_14504_14526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (5))){
var state_14491__$1 = state_14491;
var statearr_14505_14527 = state_14491__$1;
(statearr_14505_14527[(2)] = null);

(statearr_14505_14527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (10))){
var inst_14483 = (state_14491[(2)]);
var state_14491__$1 = state_14491;
var statearr_14506_14528 = state_14491__$1;
(statearr_14506_14528[(2)] = inst_14483);

(statearr_14506_14528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14492 === (8))){
var inst_14473 = (state_14491[(7)]);
var state_14491__$1 = state_14491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14491__$1,(11),out,inst_14473);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14518,out))
;
return ((function (switch__7231__auto__,c__7296__auto___14518,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14510[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14510[(1)] = (1));

return statearr_14510;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14491){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14511){if((e14511 instanceof Object)){
var ex__7235__auto__ = e14511;
var statearr_14512_14529 = state_14491;
(statearr_14512_14529[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14530 = state_14491;
state_14491 = G__14530;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14518,out))
})();
var state__7298__auto__ = (function (){var statearr_14513 = f__7297__auto__.call(null);
(statearr_14513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14518);

return statearr_14513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14518,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14538 = (function (map_LT_,f,ch,meta14539){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14539 = meta14539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14540,meta14539__$1){
var self__ = this;
var _14540__$1 = this;
return (new cljs.core.async.t_cljs$core$async14538(self__.map_LT_,self__.f,self__.ch,meta14539__$1));
});

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14540){
var self__ = this;
var _14540__$1 = this;
return self__.meta14539;
});

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14541 = (function (map_LT_,f,ch,meta14539,_,fn1,meta14542){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14539 = meta14539;
this._ = _;
this.fn1 = fn1;
this.meta14542 = meta14542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14543,meta14542__$1){
var self__ = this;
var _14543__$1 = this;
return (new cljs.core.async.t_cljs$core$async14541(self__.map_LT_,self__.f,self__.ch,self__.meta14539,self__._,self__.fn1,meta14542__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14543){
var self__ = this;
var _14543__$1 = this;
return self__.meta14542;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14541.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14531_SHARP_){
return f1.call(null,(((p1__14531_SHARP_ == null))?null:self__.f.call(null,p1__14531_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14541.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14539","meta14539",-348453511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14538","cljs.core.async/t_cljs$core$async14538",327363138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14542","meta14542",-1935629961,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14541";

cljs.core.async.t_cljs$core$async14541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async14541");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14541 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14541(map_LT___$1,f__$1,ch__$1,meta14539__$1,___$2,fn1__$1,meta14542){
return (new cljs.core.async.t_cljs$core$async14541(map_LT___$1,f__$1,ch__$1,meta14539__$1,___$2,fn1__$1,meta14542));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14541(self__.map_LT_,self__.f,self__.ch,self__.meta14539,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4550__auto__ = ret;
if(cljs.core.truth_(and__4550__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4550__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14539","meta14539",-348453511,null)], null);
});

cljs.core.async.t_cljs$core$async14538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14538";

cljs.core.async.t_cljs$core$async14538.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async14538");
});

cljs.core.async.__GT_t_cljs$core$async14538 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14538(map_LT___$1,f__$1,ch__$1,meta14539){
return (new cljs.core.async.t_cljs$core$async14538(map_LT___$1,f__$1,ch__$1,meta14539));
});

}

return (new cljs.core.async.t_cljs$core$async14538(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14547 = (function (map_GT_,f,ch,meta14548){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14548 = meta14548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14549,meta14548__$1){
var self__ = this;
var _14549__$1 = this;
return (new cljs.core.async.t_cljs$core$async14547(self__.map_GT_,self__.f,self__.ch,meta14548__$1));
});

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14549){
var self__ = this;
var _14549__$1 = this;
return self__.meta14548;
});

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14548","meta14548",-323486573,null)], null);
});

cljs.core.async.t_cljs$core$async14547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14547";

cljs.core.async.t_cljs$core$async14547.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async14547");
});

cljs.core.async.__GT_t_cljs$core$async14547 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14547(map_GT___$1,f__$1,ch__$1,meta14548){
return (new cljs.core.async.t_cljs$core$async14547(map_GT___$1,f__$1,ch__$1,meta14548));
});

}

return (new cljs.core.async.t_cljs$core$async14547(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14553 = (function (filter_GT_,p,ch,meta14554){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14554 = meta14554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14555,meta14554__$1){
var self__ = this;
var _14555__$1 = this;
return (new cljs.core.async.t_cljs$core$async14553(self__.filter_GT_,self__.p,self__.ch,meta14554__$1));
});

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14555){
var self__ = this;
var _14555__$1 = this;
return self__.meta14554;
});

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14554","meta14554",726732161,null)], null);
});

cljs.core.async.t_cljs$core$async14553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14553";

cljs.core.async.t_cljs$core$async14553.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"cljs.core.async/t_cljs$core$async14553");
});

cljs.core.async.__GT_t_cljs$core$async14553 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14553(filter_GT___$1,p__$1,ch__$1,meta14554){
return (new cljs.core.async.t_cljs$core$async14553(filter_GT___$1,p__$1,ch__$1,meta14554));
});

}

return (new cljs.core.async.t_cljs$core$async14553(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14556 = [];
var len__5620__auto___14600 = arguments.length;
var i__5621__auto___14601 = (0);
while(true){
if((i__5621__auto___14601 < len__5620__auto___14600)){
args14556.push((arguments[i__5621__auto___14601]));

var G__14602 = (i__5621__auto___14601 + (1));
i__5621__auto___14601 = G__14602;
continue;
} else {
}
break;
}

var G__14558 = args14556.length;
switch (G__14558) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14556.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___14604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14604,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14604,out){
return (function (state_14579){
var state_val_14580 = (state_14579[(1)]);
if((state_val_14580 === (7))){
var inst_14575 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
var statearr_14581_14605 = state_14579__$1;
(statearr_14581_14605[(2)] = inst_14575);

(statearr_14581_14605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (1))){
var state_14579__$1 = state_14579;
var statearr_14582_14606 = state_14579__$1;
(statearr_14582_14606[(2)] = null);

(statearr_14582_14606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (4))){
var inst_14561 = (state_14579[(7)]);
var inst_14561__$1 = (state_14579[(2)]);
var inst_14562 = (inst_14561__$1 == null);
var state_14579__$1 = (function (){var statearr_14583 = state_14579;
(statearr_14583[(7)] = inst_14561__$1);

return statearr_14583;
})();
if(cljs.core.truth_(inst_14562)){
var statearr_14584_14607 = state_14579__$1;
(statearr_14584_14607[(1)] = (5));

} else {
var statearr_14585_14608 = state_14579__$1;
(statearr_14585_14608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (6))){
var inst_14561 = (state_14579[(7)]);
var inst_14566 = p.call(null,inst_14561);
var state_14579__$1 = state_14579;
if(cljs.core.truth_(inst_14566)){
var statearr_14586_14609 = state_14579__$1;
(statearr_14586_14609[(1)] = (8));

} else {
var statearr_14587_14610 = state_14579__$1;
(statearr_14587_14610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (3))){
var inst_14577 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14579__$1,inst_14577);
} else {
if((state_val_14580 === (2))){
var state_14579__$1 = state_14579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14579__$1,(4),ch);
} else {
if((state_val_14580 === (11))){
var inst_14569 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
var statearr_14588_14611 = state_14579__$1;
(statearr_14588_14611[(2)] = inst_14569);

(statearr_14588_14611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (9))){
var state_14579__$1 = state_14579;
var statearr_14589_14612 = state_14579__$1;
(statearr_14589_14612[(2)] = null);

(statearr_14589_14612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (5))){
var inst_14564 = cljs.core.async.close_BANG_.call(null,out);
var state_14579__$1 = state_14579;
var statearr_14590_14613 = state_14579__$1;
(statearr_14590_14613[(2)] = inst_14564);

(statearr_14590_14613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (10))){
var inst_14572 = (state_14579[(2)]);
var state_14579__$1 = (function (){var statearr_14591 = state_14579;
(statearr_14591[(8)] = inst_14572);

return statearr_14591;
})();
var statearr_14592_14614 = state_14579__$1;
(statearr_14592_14614[(2)] = null);

(statearr_14592_14614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (8))){
var inst_14561 = (state_14579[(7)]);
var state_14579__$1 = state_14579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14579__$1,(11),out,inst_14561);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14604,out))
;
return ((function (switch__7231__auto__,c__7296__auto___14604,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14596 = [null,null,null,null,null,null,null,null,null];
(statearr_14596[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14596[(1)] = (1));

return statearr_14596;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14579){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14597){if((e14597 instanceof Object)){
var ex__7235__auto__ = e14597;
var statearr_14598_14615 = state_14579;
(statearr_14598_14615[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14616 = state_14579;
state_14579 = G__14616;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14604,out))
})();
var state__7298__auto__ = (function (){var statearr_14599 = f__7297__auto__.call(null);
(statearr_14599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14604);

return statearr_14599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14604,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14617 = [];
var len__5620__auto___14620 = arguments.length;
var i__5621__auto___14621 = (0);
while(true){
if((i__5621__auto___14621 < len__5620__auto___14620)){
args14617.push((arguments[i__5621__auto___14621]));

var G__14622 = (i__5621__auto___14621 + (1));
i__5621__auto___14621 = G__14622;
continue;
} else {
}
break;
}

var G__14619 = args14617.length;
switch (G__14619) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14617.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto__){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto__){
return (function (state_14789){
var state_val_14790 = (state_14789[(1)]);
if((state_val_14790 === (7))){
var inst_14785 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
var statearr_14791_14832 = state_14789__$1;
(statearr_14791_14832[(2)] = inst_14785);

(statearr_14791_14832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (20))){
var inst_14755 = (state_14789[(7)]);
var inst_14766 = (state_14789[(2)]);
var inst_14767 = cljs.core.next.call(null,inst_14755);
var inst_14741 = inst_14767;
var inst_14742 = null;
var inst_14743 = (0);
var inst_14744 = (0);
var state_14789__$1 = (function (){var statearr_14792 = state_14789;
(statearr_14792[(8)] = inst_14742);

(statearr_14792[(9)] = inst_14741);

(statearr_14792[(10)] = inst_14744);

(statearr_14792[(11)] = inst_14766);

(statearr_14792[(12)] = inst_14743);

return statearr_14792;
})();
var statearr_14793_14833 = state_14789__$1;
(statearr_14793_14833[(2)] = null);

(statearr_14793_14833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (1))){
var state_14789__$1 = state_14789;
var statearr_14794_14834 = state_14789__$1;
(statearr_14794_14834[(2)] = null);

(statearr_14794_14834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (4))){
var inst_14730 = (state_14789[(13)]);
var inst_14730__$1 = (state_14789[(2)]);
var inst_14731 = (inst_14730__$1 == null);
var state_14789__$1 = (function (){var statearr_14795 = state_14789;
(statearr_14795[(13)] = inst_14730__$1);

return statearr_14795;
})();
if(cljs.core.truth_(inst_14731)){
var statearr_14796_14835 = state_14789__$1;
(statearr_14796_14835[(1)] = (5));

} else {
var statearr_14797_14836 = state_14789__$1;
(statearr_14797_14836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (15))){
var state_14789__$1 = state_14789;
var statearr_14801_14837 = state_14789__$1;
(statearr_14801_14837[(2)] = null);

(statearr_14801_14837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (21))){
var state_14789__$1 = state_14789;
var statearr_14802_14838 = state_14789__$1;
(statearr_14802_14838[(2)] = null);

(statearr_14802_14838[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (13))){
var inst_14742 = (state_14789[(8)]);
var inst_14741 = (state_14789[(9)]);
var inst_14744 = (state_14789[(10)]);
var inst_14743 = (state_14789[(12)]);
var inst_14751 = (state_14789[(2)]);
var inst_14752 = (inst_14744 + (1));
var tmp14798 = inst_14742;
var tmp14799 = inst_14741;
var tmp14800 = inst_14743;
var inst_14741__$1 = tmp14799;
var inst_14742__$1 = tmp14798;
var inst_14743__$1 = tmp14800;
var inst_14744__$1 = inst_14752;
var state_14789__$1 = (function (){var statearr_14803 = state_14789;
(statearr_14803[(8)] = inst_14742__$1);

(statearr_14803[(9)] = inst_14741__$1);

(statearr_14803[(14)] = inst_14751);

(statearr_14803[(10)] = inst_14744__$1);

(statearr_14803[(12)] = inst_14743__$1);

return statearr_14803;
})();
var statearr_14804_14839 = state_14789__$1;
(statearr_14804_14839[(2)] = null);

(statearr_14804_14839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (22))){
var state_14789__$1 = state_14789;
var statearr_14805_14840 = state_14789__$1;
(statearr_14805_14840[(2)] = null);

(statearr_14805_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (6))){
var inst_14730 = (state_14789[(13)]);
var inst_14739 = f.call(null,inst_14730);
var inst_14740 = cljs.core.seq.call(null,inst_14739);
var inst_14741 = inst_14740;
var inst_14742 = null;
var inst_14743 = (0);
var inst_14744 = (0);
var state_14789__$1 = (function (){var statearr_14806 = state_14789;
(statearr_14806[(8)] = inst_14742);

(statearr_14806[(9)] = inst_14741);

(statearr_14806[(10)] = inst_14744);

(statearr_14806[(12)] = inst_14743);

return statearr_14806;
})();
var statearr_14807_14841 = state_14789__$1;
(statearr_14807_14841[(2)] = null);

(statearr_14807_14841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (17))){
var inst_14755 = (state_14789[(7)]);
var inst_14759 = cljs.core.chunk_first.call(null,inst_14755);
var inst_14760 = cljs.core.chunk_rest.call(null,inst_14755);
var inst_14761 = cljs.core.count.call(null,inst_14759);
var inst_14741 = inst_14760;
var inst_14742 = inst_14759;
var inst_14743 = inst_14761;
var inst_14744 = (0);
var state_14789__$1 = (function (){var statearr_14808 = state_14789;
(statearr_14808[(8)] = inst_14742);

(statearr_14808[(9)] = inst_14741);

(statearr_14808[(10)] = inst_14744);

(statearr_14808[(12)] = inst_14743);

return statearr_14808;
})();
var statearr_14809_14842 = state_14789__$1;
(statearr_14809_14842[(2)] = null);

(statearr_14809_14842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (3))){
var inst_14787 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14789__$1,inst_14787);
} else {
if((state_val_14790 === (12))){
var inst_14775 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
var statearr_14810_14843 = state_14789__$1;
(statearr_14810_14843[(2)] = inst_14775);

(statearr_14810_14843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (2))){
var state_14789__$1 = state_14789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14789__$1,(4),in$);
} else {
if((state_val_14790 === (23))){
var inst_14783 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
var statearr_14811_14844 = state_14789__$1;
(statearr_14811_14844[(2)] = inst_14783);

(statearr_14811_14844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (19))){
var inst_14770 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
var statearr_14812_14845 = state_14789__$1;
(statearr_14812_14845[(2)] = inst_14770);

(statearr_14812_14845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (11))){
var inst_14741 = (state_14789[(9)]);
var inst_14755 = (state_14789[(7)]);
var inst_14755__$1 = cljs.core.seq.call(null,inst_14741);
var state_14789__$1 = (function (){var statearr_14813 = state_14789;
(statearr_14813[(7)] = inst_14755__$1);

return statearr_14813;
})();
if(inst_14755__$1){
var statearr_14814_14846 = state_14789__$1;
(statearr_14814_14846[(1)] = (14));

} else {
var statearr_14815_14847 = state_14789__$1;
(statearr_14815_14847[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (9))){
var inst_14777 = (state_14789[(2)]);
var inst_14778 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14789__$1 = (function (){var statearr_14816 = state_14789;
(statearr_14816[(15)] = inst_14777);

return statearr_14816;
})();
if(cljs.core.truth_(inst_14778)){
var statearr_14817_14848 = state_14789__$1;
(statearr_14817_14848[(1)] = (21));

} else {
var statearr_14818_14849 = state_14789__$1;
(statearr_14818_14849[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (5))){
var inst_14733 = cljs.core.async.close_BANG_.call(null,out);
var state_14789__$1 = state_14789;
var statearr_14819_14850 = state_14789__$1;
(statearr_14819_14850[(2)] = inst_14733);

(statearr_14819_14850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (14))){
var inst_14755 = (state_14789[(7)]);
var inst_14757 = cljs.core.chunked_seq_QMARK_.call(null,inst_14755);
var state_14789__$1 = state_14789;
if(inst_14757){
var statearr_14820_14851 = state_14789__$1;
(statearr_14820_14851[(1)] = (17));

} else {
var statearr_14821_14852 = state_14789__$1;
(statearr_14821_14852[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (16))){
var inst_14773 = (state_14789[(2)]);
var state_14789__$1 = state_14789;
var statearr_14822_14853 = state_14789__$1;
(statearr_14822_14853[(2)] = inst_14773);

(statearr_14822_14853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14790 === (10))){
var inst_14742 = (state_14789[(8)]);
var inst_14744 = (state_14789[(10)]);
var inst_14749 = cljs.core._nth.call(null,inst_14742,inst_14744);
var state_14789__$1 = state_14789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14789__$1,(13),out,inst_14749);
} else {
if((state_val_14790 === (18))){
var inst_14755 = (state_14789[(7)]);
var inst_14764 = cljs.core.first.call(null,inst_14755);
var state_14789__$1 = state_14789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14789__$1,(20),out,inst_14764);
} else {
if((state_val_14790 === (8))){
var inst_14744 = (state_14789[(10)]);
var inst_14743 = (state_14789[(12)]);
var inst_14746 = (inst_14744 < inst_14743);
var inst_14747 = inst_14746;
var state_14789__$1 = state_14789;
if(cljs.core.truth_(inst_14747)){
var statearr_14823_14854 = state_14789__$1;
(statearr_14823_14854[(1)] = (10));

} else {
var statearr_14824_14855 = state_14789__$1;
(statearr_14824_14855[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto__))
;
return ((function (switch__7231__auto__,c__7296__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____0 = (function (){
var statearr_14828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14828[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__);

(statearr_14828[(1)] = (1));

return statearr_14828;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____1 = (function (state_14789){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14829){if((e14829 instanceof Object)){
var ex__7235__auto__ = e14829;
var statearr_14830_14856 = state_14789;
(statearr_14830_14856[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14857 = state_14789;
state_14789 = G__14857;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__ = function(state_14789){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____1.call(this,state_14789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto__))
})();
var state__7298__auto__ = (function (){var statearr_14831 = f__7297__auto__.call(null);
(statearr_14831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto__);

return statearr_14831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto__))
);

return c__7296__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14858 = [];
var len__5620__auto___14861 = arguments.length;
var i__5621__auto___14862 = (0);
while(true){
if((i__5621__auto___14862 < len__5620__auto___14861)){
args14858.push((arguments[i__5621__auto___14862]));

var G__14863 = (i__5621__auto___14862 + (1));
i__5621__auto___14862 = G__14863;
continue;
} else {
}
break;
}

var G__14860 = args14858.length;
switch (G__14860) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14858.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args14865 = [];
var len__5620__auto___14868 = arguments.length;
var i__5621__auto___14869 = (0);
while(true){
if((i__5621__auto___14869 < len__5620__auto___14868)){
args14865.push((arguments[i__5621__auto___14869]));

var G__14870 = (i__5621__auto___14869 + (1));
i__5621__auto___14869 = G__14870;
continue;
} else {
}
break;
}

var G__14867 = args14865.length;
switch (G__14867) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14865.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args14872 = [];
var len__5620__auto___14923 = arguments.length;
var i__5621__auto___14924 = (0);
while(true){
if((i__5621__auto___14924 < len__5620__auto___14923)){
args14872.push((arguments[i__5621__auto___14924]));

var G__14925 = (i__5621__auto___14924 + (1));
i__5621__auto___14924 = G__14925;
continue;
} else {
}
break;
}

var G__14874 = args14872.length;
switch (G__14874) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14872.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___14927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___14927,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___14927,out){
return (function (state_14898){
var state_val_14899 = (state_14898[(1)]);
if((state_val_14899 === (7))){
var inst_14893 = (state_14898[(2)]);
var state_14898__$1 = state_14898;
var statearr_14900_14928 = state_14898__$1;
(statearr_14900_14928[(2)] = inst_14893);

(statearr_14900_14928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (1))){
var inst_14875 = null;
var state_14898__$1 = (function (){var statearr_14901 = state_14898;
(statearr_14901[(7)] = inst_14875);

return statearr_14901;
})();
var statearr_14902_14929 = state_14898__$1;
(statearr_14902_14929[(2)] = null);

(statearr_14902_14929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (4))){
var inst_14878 = (state_14898[(8)]);
var inst_14878__$1 = (state_14898[(2)]);
var inst_14879 = (inst_14878__$1 == null);
var inst_14880 = cljs.core.not.call(null,inst_14879);
var state_14898__$1 = (function (){var statearr_14903 = state_14898;
(statearr_14903[(8)] = inst_14878__$1);

return statearr_14903;
})();
if(inst_14880){
var statearr_14904_14930 = state_14898__$1;
(statearr_14904_14930[(1)] = (5));

} else {
var statearr_14905_14931 = state_14898__$1;
(statearr_14905_14931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (6))){
var state_14898__$1 = state_14898;
var statearr_14906_14932 = state_14898__$1;
(statearr_14906_14932[(2)] = null);

(statearr_14906_14932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (3))){
var inst_14895 = (state_14898[(2)]);
var inst_14896 = cljs.core.async.close_BANG_.call(null,out);
var state_14898__$1 = (function (){var statearr_14907 = state_14898;
(statearr_14907[(9)] = inst_14895);

return statearr_14907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14898__$1,inst_14896);
} else {
if((state_val_14899 === (2))){
var state_14898__$1 = state_14898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14898__$1,(4),ch);
} else {
if((state_val_14899 === (11))){
var inst_14878 = (state_14898[(8)]);
var inst_14887 = (state_14898[(2)]);
var inst_14875 = inst_14878;
var state_14898__$1 = (function (){var statearr_14908 = state_14898;
(statearr_14908[(7)] = inst_14875);

(statearr_14908[(10)] = inst_14887);

return statearr_14908;
})();
var statearr_14909_14933 = state_14898__$1;
(statearr_14909_14933[(2)] = null);

(statearr_14909_14933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (9))){
var inst_14878 = (state_14898[(8)]);
var state_14898__$1 = state_14898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14898__$1,(11),out,inst_14878);
} else {
if((state_val_14899 === (5))){
var inst_14878 = (state_14898[(8)]);
var inst_14875 = (state_14898[(7)]);
var inst_14882 = cljs.core._EQ_.call(null,inst_14878,inst_14875);
var state_14898__$1 = state_14898;
if(inst_14882){
var statearr_14911_14934 = state_14898__$1;
(statearr_14911_14934[(1)] = (8));

} else {
var statearr_14912_14935 = state_14898__$1;
(statearr_14912_14935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (10))){
var inst_14890 = (state_14898[(2)]);
var state_14898__$1 = state_14898;
var statearr_14913_14936 = state_14898__$1;
(statearr_14913_14936[(2)] = inst_14890);

(statearr_14913_14936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (8))){
var inst_14875 = (state_14898[(7)]);
var tmp14910 = inst_14875;
var inst_14875__$1 = tmp14910;
var state_14898__$1 = (function (){var statearr_14914 = state_14898;
(statearr_14914[(7)] = inst_14875__$1);

return statearr_14914;
})();
var statearr_14915_14937 = state_14898__$1;
(statearr_14915_14937[(2)] = null);

(statearr_14915_14937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___14927,out))
;
return ((function (switch__7231__auto__,c__7296__auto___14927,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_14919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14919[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_14919[(1)] = (1));

return statearr_14919;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14898){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e14920){if((e14920 instanceof Object)){
var ex__7235__auto__ = e14920;
var statearr_14921_14938 = state_14898;
(statearr_14921_14938[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14939 = state_14898;
state_14898 = G__14939;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___14927,out))
})();
var state__7298__auto__ = (function (){var statearr_14922 = f__7297__auto__.call(null);
(statearr_14922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___14927);

return statearr_14922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___14927,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14940 = [];
var len__5620__auto___15010 = arguments.length;
var i__5621__auto___15011 = (0);
while(true){
if((i__5621__auto___15011 < len__5620__auto___15010)){
args14940.push((arguments[i__5621__auto___15011]));

var G__15012 = (i__5621__auto___15011 + (1));
i__5621__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var G__14942 = args14940.length;
switch (G__14942) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14940.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___15014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___15014,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___15014,out){
return (function (state_14980){
var state_val_14981 = (state_14980[(1)]);
if((state_val_14981 === (7))){
var inst_14976 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14982_15015 = state_14980__$1;
(statearr_14982_15015[(2)] = inst_14976);

(statearr_14982_15015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (1))){
var inst_14943 = (new Array(n));
var inst_14944 = inst_14943;
var inst_14945 = (0);
var state_14980__$1 = (function (){var statearr_14983 = state_14980;
(statearr_14983[(7)] = inst_14945);

(statearr_14983[(8)] = inst_14944);

return statearr_14983;
})();
var statearr_14984_15016 = state_14980__$1;
(statearr_14984_15016[(2)] = null);

(statearr_14984_15016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (4))){
var inst_14948 = (state_14980[(9)]);
var inst_14948__$1 = (state_14980[(2)]);
var inst_14949 = (inst_14948__$1 == null);
var inst_14950 = cljs.core.not.call(null,inst_14949);
var state_14980__$1 = (function (){var statearr_14985 = state_14980;
(statearr_14985[(9)] = inst_14948__$1);

return statearr_14985;
})();
if(inst_14950){
var statearr_14986_15017 = state_14980__$1;
(statearr_14986_15017[(1)] = (5));

} else {
var statearr_14987_15018 = state_14980__$1;
(statearr_14987_15018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (15))){
var inst_14970 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14988_15019 = state_14980__$1;
(statearr_14988_15019[(2)] = inst_14970);

(statearr_14988_15019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (13))){
var state_14980__$1 = state_14980;
var statearr_14989_15020 = state_14980__$1;
(statearr_14989_15020[(2)] = null);

(statearr_14989_15020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (6))){
var inst_14945 = (state_14980[(7)]);
var inst_14966 = (inst_14945 > (0));
var state_14980__$1 = state_14980;
if(cljs.core.truth_(inst_14966)){
var statearr_14990_15021 = state_14980__$1;
(statearr_14990_15021[(1)] = (12));

} else {
var statearr_14991_15022 = state_14980__$1;
(statearr_14991_15022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (3))){
var inst_14978 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14980__$1,inst_14978);
} else {
if((state_val_14981 === (12))){
var inst_14944 = (state_14980[(8)]);
var inst_14968 = cljs.core.vec.call(null,inst_14944);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14980__$1,(15),out,inst_14968);
} else {
if((state_val_14981 === (2))){
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14980__$1,(4),ch);
} else {
if((state_val_14981 === (11))){
var inst_14960 = (state_14980[(2)]);
var inst_14961 = (new Array(n));
var inst_14944 = inst_14961;
var inst_14945 = (0);
var state_14980__$1 = (function (){var statearr_14992 = state_14980;
(statearr_14992[(7)] = inst_14945);

(statearr_14992[(8)] = inst_14944);

(statearr_14992[(10)] = inst_14960);

return statearr_14992;
})();
var statearr_14993_15023 = state_14980__$1;
(statearr_14993_15023[(2)] = null);

(statearr_14993_15023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (9))){
var inst_14944 = (state_14980[(8)]);
var inst_14958 = cljs.core.vec.call(null,inst_14944);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14980__$1,(11),out,inst_14958);
} else {
if((state_val_14981 === (5))){
var inst_14945 = (state_14980[(7)]);
var inst_14944 = (state_14980[(8)]);
var inst_14953 = (state_14980[(11)]);
var inst_14948 = (state_14980[(9)]);
var inst_14952 = (inst_14944[inst_14945] = inst_14948);
var inst_14953__$1 = (inst_14945 + (1));
var inst_14954 = (inst_14953__$1 < n);
var state_14980__$1 = (function (){var statearr_14994 = state_14980;
(statearr_14994[(11)] = inst_14953__$1);

(statearr_14994[(12)] = inst_14952);

return statearr_14994;
})();
if(cljs.core.truth_(inst_14954)){
var statearr_14995_15024 = state_14980__$1;
(statearr_14995_15024[(1)] = (8));

} else {
var statearr_14996_15025 = state_14980__$1;
(statearr_14996_15025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (14))){
var inst_14973 = (state_14980[(2)]);
var inst_14974 = cljs.core.async.close_BANG_.call(null,out);
var state_14980__$1 = (function (){var statearr_14998 = state_14980;
(statearr_14998[(13)] = inst_14973);

return statearr_14998;
})();
var statearr_14999_15026 = state_14980__$1;
(statearr_14999_15026[(2)] = inst_14974);

(statearr_14999_15026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (10))){
var inst_14964 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_15000_15027 = state_14980__$1;
(statearr_15000_15027[(2)] = inst_14964);

(statearr_15000_15027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (8))){
var inst_14944 = (state_14980[(8)]);
var inst_14953 = (state_14980[(11)]);
var tmp14997 = inst_14944;
var inst_14944__$1 = tmp14997;
var inst_14945 = inst_14953;
var state_14980__$1 = (function (){var statearr_15001 = state_14980;
(statearr_15001[(7)] = inst_14945);

(statearr_15001[(8)] = inst_14944__$1);

return statearr_15001;
})();
var statearr_15002_15028 = state_14980__$1;
(statearr_15002_15028[(2)] = null);

(statearr_15002_15028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___15014,out))
;
return ((function (switch__7231__auto__,c__7296__auto___15014,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_15006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15006[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_15006[(1)] = (1));

return statearr_15006;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_14980){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_14980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e15007){if((e15007 instanceof Object)){
var ex__7235__auto__ = e15007;
var statearr_15008_15029 = state_14980;
(statearr_15008_15029[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15030 = state_14980;
state_14980 = G__15030;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_14980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_14980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___15014,out))
})();
var state__7298__auto__ = (function (){var statearr_15009 = f__7297__auto__.call(null);
(statearr_15009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___15014);

return statearr_15009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___15014,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15031 = [];
var len__5620__auto___15105 = arguments.length;
var i__5621__auto___15106 = (0);
while(true){
if((i__5621__auto___15106 < len__5620__auto___15105)){
args15031.push((arguments[i__5621__auto___15106]));

var G__15107 = (i__5621__auto___15106 + (1));
i__5621__auto___15106 = G__15107;
continue;
} else {
}
break;
}

var G__15033 = args15031.length;
switch (G__15033) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15031.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7296__auto___15109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto___15109,out){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto___15109,out){
return (function (state_15075){
var state_val_15076 = (state_15075[(1)]);
if((state_val_15076 === (7))){
var inst_15071 = (state_15075[(2)]);
var state_15075__$1 = state_15075;
var statearr_15077_15110 = state_15075__$1;
(statearr_15077_15110[(2)] = inst_15071);

(statearr_15077_15110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (1))){
var inst_15034 = [];
var inst_15035 = inst_15034;
var inst_15036 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15075__$1 = (function (){var statearr_15078 = state_15075;
(statearr_15078[(7)] = inst_15036);

(statearr_15078[(8)] = inst_15035);

return statearr_15078;
})();
var statearr_15079_15111 = state_15075__$1;
(statearr_15079_15111[(2)] = null);

(statearr_15079_15111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (4))){
var inst_15039 = (state_15075[(9)]);
var inst_15039__$1 = (state_15075[(2)]);
var inst_15040 = (inst_15039__$1 == null);
var inst_15041 = cljs.core.not.call(null,inst_15040);
var state_15075__$1 = (function (){var statearr_15080 = state_15075;
(statearr_15080[(9)] = inst_15039__$1);

return statearr_15080;
})();
if(inst_15041){
var statearr_15081_15112 = state_15075__$1;
(statearr_15081_15112[(1)] = (5));

} else {
var statearr_15082_15113 = state_15075__$1;
(statearr_15082_15113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (15))){
var inst_15065 = (state_15075[(2)]);
var state_15075__$1 = state_15075;
var statearr_15083_15114 = state_15075__$1;
(statearr_15083_15114[(2)] = inst_15065);

(statearr_15083_15114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (13))){
var state_15075__$1 = state_15075;
var statearr_15084_15115 = state_15075__$1;
(statearr_15084_15115[(2)] = null);

(statearr_15084_15115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (6))){
var inst_15035 = (state_15075[(8)]);
var inst_15060 = inst_15035.length;
var inst_15061 = (inst_15060 > (0));
var state_15075__$1 = state_15075;
if(cljs.core.truth_(inst_15061)){
var statearr_15085_15116 = state_15075__$1;
(statearr_15085_15116[(1)] = (12));

} else {
var statearr_15086_15117 = state_15075__$1;
(statearr_15086_15117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (3))){
var inst_15073 = (state_15075[(2)]);
var state_15075__$1 = state_15075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15075__$1,inst_15073);
} else {
if((state_val_15076 === (12))){
var inst_15035 = (state_15075[(8)]);
var inst_15063 = cljs.core.vec.call(null,inst_15035);
var state_15075__$1 = state_15075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15075__$1,(15),out,inst_15063);
} else {
if((state_val_15076 === (2))){
var state_15075__$1 = state_15075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15075__$1,(4),ch);
} else {
if((state_val_15076 === (11))){
var inst_15039 = (state_15075[(9)]);
var inst_15043 = (state_15075[(10)]);
var inst_15053 = (state_15075[(2)]);
var inst_15054 = [];
var inst_15055 = inst_15054.push(inst_15039);
var inst_15035 = inst_15054;
var inst_15036 = inst_15043;
var state_15075__$1 = (function (){var statearr_15087 = state_15075;
(statearr_15087[(11)] = inst_15053);

(statearr_15087[(7)] = inst_15036);

(statearr_15087[(8)] = inst_15035);

(statearr_15087[(12)] = inst_15055);

return statearr_15087;
})();
var statearr_15088_15118 = state_15075__$1;
(statearr_15088_15118[(2)] = null);

(statearr_15088_15118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (9))){
var inst_15035 = (state_15075[(8)]);
var inst_15051 = cljs.core.vec.call(null,inst_15035);
var state_15075__$1 = state_15075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15075__$1,(11),out,inst_15051);
} else {
if((state_val_15076 === (5))){
var inst_15039 = (state_15075[(9)]);
var inst_15036 = (state_15075[(7)]);
var inst_15043 = (state_15075[(10)]);
var inst_15043__$1 = f.call(null,inst_15039);
var inst_15044 = cljs.core._EQ_.call(null,inst_15043__$1,inst_15036);
var inst_15045 = cljs.core.keyword_identical_QMARK_.call(null,inst_15036,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15046 = (inst_15044) || (inst_15045);
var state_15075__$1 = (function (){var statearr_15089 = state_15075;
(statearr_15089[(10)] = inst_15043__$1);

return statearr_15089;
})();
if(cljs.core.truth_(inst_15046)){
var statearr_15090_15119 = state_15075__$1;
(statearr_15090_15119[(1)] = (8));

} else {
var statearr_15091_15120 = state_15075__$1;
(statearr_15091_15120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (14))){
var inst_15068 = (state_15075[(2)]);
var inst_15069 = cljs.core.async.close_BANG_.call(null,out);
var state_15075__$1 = (function (){var statearr_15093 = state_15075;
(statearr_15093[(13)] = inst_15068);

return statearr_15093;
})();
var statearr_15094_15121 = state_15075__$1;
(statearr_15094_15121[(2)] = inst_15069);

(statearr_15094_15121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (10))){
var inst_15058 = (state_15075[(2)]);
var state_15075__$1 = state_15075;
var statearr_15095_15122 = state_15075__$1;
(statearr_15095_15122[(2)] = inst_15058);

(statearr_15095_15122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15076 === (8))){
var inst_15039 = (state_15075[(9)]);
var inst_15035 = (state_15075[(8)]);
var inst_15043 = (state_15075[(10)]);
var inst_15048 = inst_15035.push(inst_15039);
var tmp15092 = inst_15035;
var inst_15035__$1 = tmp15092;
var inst_15036 = inst_15043;
var state_15075__$1 = (function (){var statearr_15096 = state_15075;
(statearr_15096[(14)] = inst_15048);

(statearr_15096[(7)] = inst_15036);

(statearr_15096[(8)] = inst_15035__$1);

return statearr_15096;
})();
var statearr_15097_15123 = state_15075__$1;
(statearr_15097_15123[(2)] = null);

(statearr_15097_15123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7296__auto___15109,out))
;
return ((function (switch__7231__auto__,c__7296__auto___15109,out){
return (function() {
var cljs$core$async$state_machine__7232__auto__ = null;
var cljs$core$async$state_machine__7232__auto____0 = (function (){
var statearr_15101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15101[(0)] = cljs$core$async$state_machine__7232__auto__);

(statearr_15101[(1)] = (1));

return statearr_15101;
});
var cljs$core$async$state_machine__7232__auto____1 = (function (state_15075){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_15075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e15102){if((e15102 instanceof Object)){
var ex__7235__auto__ = e15102;
var statearr_15103_15124 = state_15075;
(statearr_15103_15124[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15125 = state_15075;
state_15075 = G__15125;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
cljs$core$async$state_machine__7232__auto__ = function(state_15075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7232__auto____1.call(this,state_15075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7232__auto____0;
cljs$core$async$state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7232__auto____1;
return cljs$core$async$state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto___15109,out))
})();
var state__7298__auto__ = (function (){var statearr_15104 = f__7297__auto__.call(null);
(statearr_15104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto___15109);

return statearr_15104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto___15109,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440417682530