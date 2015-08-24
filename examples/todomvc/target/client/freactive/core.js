// Compiled by ClojureScript 1.7.107 {}
goog.provide('freactive.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.data.avl');

/**
* @constructor
*/
freactive.core.BindingInfo = (function (raw_deref,add_watch,remove_watch,clean){
this.raw_deref = raw_deref;
this.add_watch = add_watch;
this.remove_watch = remove_watch;
this.clean = clean;
})

freactive.core.BindingInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-deref","raw-deref",1304645482,null),new cljs.core.Symbol(null,"add-watch","add-watch",1389887634,null),new cljs.core.Symbol(null,"remove-watch","remove-watch",-1105301448,null),new cljs.core.Symbol(null,"clean","clean",1682065606,null)], null);
});

freactive.core.BindingInfo.cljs$lang$type = true;

freactive.core.BindingInfo.cljs$lang$ctorStr = "freactive.core/BindingInfo";

freactive.core.BindingInfo.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/BindingInfo");
});

freactive.core.__GT_BindingInfo = (function freactive$core$__GT_BindingInfo(raw_deref,add_watch,remove_watch,clean){
return (new freactive.core.BindingInfo(raw_deref,add_watch,remove_watch,clean));
});



/**
 * @interface
 */
freactive.core.IReactive = function(){};

freactive.core._get_binding_fns = (function freactive$core$_get_binding_fns(this$){
if((!((this$ == null))) && (!((this$.freactive$core$IReactive$_get_binding_fns$arity$1 == null)))){
return this$.freactive$core$IReactive$_get_binding_fns$arity$1(this$);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._get_binding_fns[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$);
} else {
var m__5218__auto____$1 = (freactive.core._get_binding_fns["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IReactive.-get-binding-fns",this$);
}
}
}
});


freactive.core.iwatchable_binding_fns = (new freactive.core.BindingInfo(cljs.core._deref,cljs.core._add_watch,cljs.core._remove_watch,null));

freactive.core.get_binding_fns = (function freactive$core$get_binding_fns(iref){
if(((!((iref == null)))?(((false) || (iref.freactive$core$IReactive$))?true:(((!iref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IReactive,iref):false)):cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IReactive,iref))){
return freactive.core._get_binding_fns.call(null,iref);
} else {
return freactive.core.iwatchable_binding_fns;
}
});

freactive.core._STAR_register_dep_STAR_ = null;

freactive.core.register_dep = (function freactive$core$register_dep(var_args){
var args17327 = [];
var len__5620__auto___17330 = arguments.length;
var i__5621__auto___17331 = (0);
while(true){
if((i__5621__auto___17331 < len__5620__auto___17330)){
args17327.push((arguments[i__5621__auto___17331]));

var G__17332 = (i__5621__auto___17331 + (1));
i__5621__auto___17331 = G__17332;
continue;
} else {
}
break;
}

var G__17329 = args17327.length;
switch (G__17329) {
case 1:
return freactive.core.register_dep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return freactive.core.register_dep.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17327.length)].join('')));

}
});

freactive.core.register_dep.cljs$core$IFn$_invoke$arity$1 = (function (dep){
var temp__4425__auto__ = freactive.core._STAR_register_dep_STAR_;
if(cljs.core.truth_(temp__4425__auto__)){
var rdep = temp__4425__auto__;
return rdep.call(null,goog.getUid(dep),freactive.core.get_binding_fns.call(null,dep));
} else {
return null;
}
});

freactive.core.register_dep.cljs$core$IFn$_invoke$arity$3 = (function (dep,id,binding_info){
var temp__4425__auto__ = freactive.core._STAR_register_dep_STAR_;
if(cljs.core.truth_(temp__4425__auto__)){
var rdep = temp__4425__auto__;
return rdep.call(null,dep,id,binding_info);
} else {
return null;
}
});

freactive.core.register_dep.cljs$lang$maxFixedArity = 3;
freactive.core.auto_reactive_id = (0);

freactive.core.new_reactive_id = (function freactive$core$new_reactive_id(){
var id = freactive.core.auto_reactive_id;
freactive.core.auto_reactive_id = (freactive.core.auto_reactive_id + (1));

return [cljs.core.str("--r."),cljs.core.str(id)].join('');
});

/**
 * @interface
 */
freactive.core.ICursor = function(){};

freactive.core._cursor_key = (function freactive$core$_cursor_key(this$){
if((!((this$ == null))) && (!((this$.freactive$core$ICursor$_cursor_key$arity$1 == null)))){
return this$.freactive$core$ICursor$_cursor_key$arity$1(this$);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._cursor_key[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$);
} else {
var m__5218__auto____$1 = (freactive.core._cursor_key["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-cursor-key",this$);
}
}
}
});

freactive.core._child_cursor = (function freactive$core$_child_cursor(this$,key){
if((!((this$ == null))) && (!((this$.freactive$core$ICursor$_child_cursor$arity$2 == null)))){
return this$.freactive$core$ICursor$_child_cursor$arity$2(this$,key);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._child_cursor[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,key);
} else {
var m__5218__auto____$1 = (freactive.core._child_cursor["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-child-cursor",this$);
}
}
}
});

freactive.core._parent_cursor = (function freactive$core$_parent_cursor(this$){
if((!((this$ == null))) && (!((this$.freactive$core$ICursor$_parent_cursor$arity$1 == null)))){
return this$.freactive$core$ICursor$_parent_cursor$arity$1(this$);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._parent_cursor[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$);
} else {
var m__5218__auto____$1 = (freactive.core._parent_cursor["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-parent-cursor",this$);
}
}
}
});

freactive.core._cursor_kvseq = (function freactive$core$_cursor_kvseq(this$){
if((!((this$ == null))) && (!((this$.freactive$core$ICursor$_cursor_kvseq$arity$1 == null)))){
return this$.freactive$core$ICursor$_cursor_kvseq$arity$1(this$);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._cursor_kvseq[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$);
} else {
var m__5218__auto____$1 = (freactive.core._cursor_kvseq["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-cursor-kvseq",this$);
}
}
}
});


/**
 * @interface
 */
freactive.core.IChangeNotifications = function(){};

freactive.core._add_change_watch = (function freactive$core$_add_change_watch(this$,key,f){
if((!((this$ == null))) && (!((this$.freactive$core$IChangeNotifications$_add_change_watch$arity$3 == null)))){
return this$.freactive$core$IChangeNotifications$_add_change_watch$arity$3(this$,key,f);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._add_change_watch[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,key,f);
} else {
var m__5218__auto____$1 = (freactive.core._add_change_watch["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,key,f);
} else {
throw cljs.core.missing_protocol.call(null,"IChangeNotifications.-add-change-watch",this$);
}
}
}
});

freactive.core._remove_change_watch = (function freactive$core$_remove_change_watch(this$,key){
if((!((this$ == null))) && (!((this$.freactive$core$IChangeNotifications$_remove_change_watch$arity$2 == null)))){
return this$.freactive$core$IChangeNotifications$_remove_change_watch$arity$2(this$,key);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._remove_change_watch[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,key);
} else {
var m__5218__auto____$1 = (freactive.core._remove_change_watch["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"IChangeNotifications.-remove-change-watch",this$);
}
}
}
});

freactive.core.cursor_kvseq = (function freactive$core$cursor_kvseq(cursor){
return freactive.core._cursor_kvseq.call(null,cursor);
});
freactive.core.add_change_watch = (function freactive$core$add_change_watch(cur,key,f){
return freactive.core._add_change_watch.call(null,cur,key,f);
});
freactive.core.remove_change_watch = (function freactive$core$remove_change_watch(cur,key){
return freactive.core._remove_change_watch.call(null,cur,key);
});

/**
 * @interface
 */
freactive.core.IAssociativeCursor = function(){};

freactive.core._update_BANG_ = (function freactive$core$_update_BANG_(this$,key,f,args){
if((!((this$ == null))) && (!((this$.freactive$core$IAssociativeCursor$_update_BANG_$arity$4 == null)))){
return this$.freactive$core$IAssociativeCursor$_update_BANG_$arity$4(this$,key,f,args);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._update_BANG_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,key,f,args);
} else {
var m__5218__auto____$1 = (freactive.core._update_BANG_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,key,f,args);
} else {
throw cljs.core.missing_protocol.call(null,"IAssociativeCursor.-update!",this$);
}
}
}
});

freactive.core._update_in_BANG_ = (function freactive$core$_update_in_BANG_(this$,ks,f,args){
if((!((this$ == null))) && (!((this$.freactive$core$IAssociativeCursor$_update_in_BANG_$arity$4 == null)))){
return this$.freactive$core$IAssociativeCursor$_update_in_BANG_$arity$4(this$,ks,f,args);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._update_in_BANG_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,ks,f,args);
} else {
var m__5218__auto____$1 = (freactive.core._update_in_BANG_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,ks,f,args);
} else {
throw cljs.core.missing_protocol.call(null,"IAssociativeCursor.-update-in!",this$);
}
}
}
});

freactive.core._assoc_in_BANG_ = (function freactive$core$_assoc_in_BANG_(this$,ks,v){
if((!((this$ == null))) && (!((this$.freactive$core$IAssociativeCursor$_assoc_in_BANG_$arity$3 == null)))){
return this$.freactive$core$IAssociativeCursor$_assoc_in_BANG_$arity$3(this$,ks,v);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._assoc_in_BANG_[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,ks,v);
} else {
var m__5218__auto____$1 = (freactive.core._assoc_in_BANG_["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,ks,v);
} else {
throw cljs.core.missing_protocol.call(null,"IAssociativeCursor.-assoc-in!",this$);
}
}
}
});

freactive.core.update_BANG_ = (function freactive$core$update_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17338 = arguments.length;
var i__5621__auto___17339 = (0);
while(true){
if((i__5621__auto___17339 < len__5620__auto___17338)){
args__5627__auto__.push((arguments[i__5621__auto___17339]));

var G__17340 = (i__5621__auto___17339 + (1));
i__5621__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((3) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((3)),(0))):null);
return freactive.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5628__auto__);
});

freactive.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,key,f,args){
return freactive.core._update_BANG_.call(null,cursor,key,f,args);
});

freactive.core.update_BANG_.cljs$lang$maxFixedArity = (3);

freactive.core.update_BANG_.cljs$lang$applyTo = (function (seq17334){
var G__17335 = cljs.core.first.call(null,seq17334);
var seq17334__$1 = cljs.core.next.call(null,seq17334);
var G__17336 = cljs.core.first.call(null,seq17334__$1);
var seq17334__$2 = cljs.core.next.call(null,seq17334__$1);
var G__17337 = cljs.core.first.call(null,seq17334__$2);
var seq17334__$3 = cljs.core.next.call(null,seq17334__$2);
return freactive.core.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17335,G__17336,G__17337,seq17334__$3);
});
freactive.core.update_in_BANG_ = (function freactive$core$update_in_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17345 = arguments.length;
var i__5621__auto___17346 = (0);
while(true){
if((i__5621__auto___17346 < len__5620__auto___17345)){
args__5627__auto__.push((arguments[i__5621__auto___17346]));

var G__17347 = (i__5621__auto___17346 + (1));
i__5621__auto___17346 = G__17347;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((3) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((3)),(0))):null);
return freactive.core.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5628__auto__);
});

freactive.core.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ks,f,args){
return freactive.core._update_in_BANG_.call(null,cursor,ks,f,args);
});

freactive.core.update_in_BANG_.cljs$lang$maxFixedArity = (3);

freactive.core.update_in_BANG_.cljs$lang$applyTo = (function (seq17341){
var G__17342 = cljs.core.first.call(null,seq17341);
var seq17341__$1 = cljs.core.next.call(null,seq17341);
var G__17343 = cljs.core.first.call(null,seq17341__$1);
var seq17341__$2 = cljs.core.next.call(null,seq17341__$1);
var G__17344 = cljs.core.first.call(null,seq17341__$2);
var seq17341__$3 = cljs.core.next.call(null,seq17341__$2);
return freactive.core.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17342,G__17343,G__17344,seq17341__$3);
});
freactive.core.assoc_in_BANG_ = (function freactive$core$assoc_in_BANG_(cursor,ks,v){
return freactive.core._assoc_in_BANG_.call(null,cursor,ks,v);
});
freactive.core.cursor_key = (function freactive$core$cursor_key(cursor){
return freactive.core._cursor_key.call(null,cursor);
});
freactive.core.child_cursor = (function freactive$core$child_cursor(cursor,key){
return freactive.core._child_cursor.call(null,cursor,key);
});
freactive.core.descendant_cursor = (function freactive$core$descendant_cursor(cursor,path){
var G__17353 = path;
var vec__17354 = G__17353;
var key = cljs.core.nth.call(null,vec__17354,(0),null);
var more = cljs.core.nthnext.call(null,vec__17354,(1));
var res = cursor;
var G__17353__$1 = G__17353;
var res__$1 = res;
while(true){
var vec__17355 = G__17353__$1;
var key__$1 = cljs.core.nth.call(null,vec__17355,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__17355,(1));
var res__$2 = res__$1;
if(cljs.core.truth_(key__$1)){
var G__17356 = more__$1;
var G__17357 = freactive.core.child_cursor.call(null,res__$2,key__$1);
G__17353__$1 = G__17356;
res__$1 = G__17357;
continue;
} else {
return res__$2;
}
break;
}
});
freactive.core.parent_cursor = (function freactive$core$parent_cursor(cursor){
return freactive.core._parent_cursor.call(null,cursor);
});
freactive.core.get_root_cursor = (function freactive$core$get_root_cursor(cursor){
var cursor__$1 = cursor;
while(true){
var temp__4423__auto__ = freactive.core.parent_cursor.call(null,cursor__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var parent = temp__4423__auto__;
var G__17358 = parent;
cursor__$1 = G__17358;
continue;
} else {
return cursor__$1;
}
break;
}
});
freactive.core.cursor_accessor = (function freactive$core$cursor_accessor(cursor){
var cursor__$1 = cursor;
var path = cljs.core.PersistentVector.EMPTY;
while(true){
var parent = freactive.core.parent_cursor.call(null,cursor__$1);
var key = freactive.core.cursor_key.call(null,cursor__$1);
if(cljs.core.truth_((function (){var and__4550__auto__ = parent;
if(cljs.core.truth_(and__4550__auto__)){
return key;
} else {
return and__4550__auto__;
}
})())){
var G__17359 = parent;
var G__17360 = cljs.core.conj.call(null,path,key);
cursor__$1 = G__17359;
path = G__17360;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),cursor__$1,new cljs.core.Keyword(null,"path","path",-188191168),path], null);
}
break;
}
});
freactive.core.cursor_path = (function freactive$core$cursor_path(cursor){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(freactive.core.cursor_accessor.call(null,cursor));
});
freactive.core.coll_keyset = (function freactive$core$coll_keyset(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.keys.call(null,coll);
} else {
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core.range.call(null,cljs.core.count.call(null,coll));
} else {
return null;

}
}
});
freactive.core._STAR_change_ks_STAR_ = null;
freactive.core.fwatch_binding_info = (new freactive.core.BindingInfo((function (p1__17361_SHARP_){
return p1__17361_SHARP_.rawDeref();
}),(function (p1__17362_SHARP_,p2__17363_SHARP_,p3__17364_SHARP_){
return p1__17362_SHARP_.addFWatch(p2__17363_SHARP_,p3__17364_SHARP_);
}),(function (p1__17365_SHARP_,p2__17366_SHARP_){
return p1__17365_SHARP_.removeFWatch(p2__17366_SHARP_);
}),(function (p1__17367_SHARP_){
return p1__17367_SHARP_.clean();
})));

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {freactive.core.IChangeNotifications}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {freactive.core.IReactive}
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {freactive.core.IAssociativeCursor}
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.Object}
 * @implements {cljs.core.ITransientCollection}
 * @implements {freactive.core.ICursor}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
freactive.core.Cursor = (function (id,parent,tkey,get_fn,swap_fn,activate_fn,clean_fn,child_cursors,watches,change_watches,fwatches,watchers,state,metadata,dirty,validator){
this.id = id;
this.parent = parent;
this.tkey = tkey;
this.get_fn = get_fn;
this.swap_fn = swap_fn;
this.activate_fn = activate_fn;
this.clean_fn = clean_fn;
this.child_cursors = child_cursors;
this.watches = watches;
this.change_watches = change_watches;
this.fwatches = fwatches;
this.watchers = watchers;
this.state = state;
this.metadata = metadata;
this.dirty = dirty;
this.validator = validator;
this.cljs$lang$protocol_mask$partition1$ = 114810;
this.cljs$lang$protocol_mask$partition0$ = 2153939200;
})
freactive.core.Cursor.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.assocChild(key,val);
});

freactive.core.Cursor.prototype.assocChild = (function (key,val){
var self__ = this;
var this$ = this;
var _STAR_change_ks_STAR_17369_17420 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);

try{self__.swap_fn.call(null,this$,cljs.core.assoc,key,val);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17369_17420;
}
return this$;
});

freactive.core.Cursor.prototype.activate = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.dirty)){
if(cljs.core.truth_(self__.activate_fn)){
self__.activate_fn.call(null,this$);

self__.state = self__.get_fn.call(null,this$);

return self__.dirty = false;
} else {
return null;
}
} else {
return null;
}
});

freactive.core.Cursor.prototype.clean = (function (){
var self__ = this;
var this$ = this;
if(((0) === self__.watchers)){
if(cljs.core.truth_(self__.clean_fn)){
self__.dirty = true;

return self__.clean_fn.call(null,this$);
} else {
return null;
}
} else {
return null;
}
});

freactive.core.Cursor.prototype.resetChild = (function (child_key,new_val){
var self__ = this;
var this$ = this;
var seq__17370 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.child_cursors,child_key));
var chunk__17371 = null;
var count__17372 = (0);
var i__17373 = (0);
while(true){
if((i__17373 < count__17372)){
var child = cljs.core._nth.call(null,chunk__17371,i__17373);
child.updateCursor(new_val,null);

var G__17421 = seq__17370;
var G__17422 = chunk__17371;
var G__17423 = count__17372;
var G__17424 = (i__17373 + (1));
seq__17370 = G__17421;
chunk__17371 = G__17422;
count__17372 = G__17423;
i__17373 = G__17424;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17370);
if(temp__4425__auto__){
var seq__17370__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17370__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17370__$1);
var G__17425 = cljs.core.chunk_rest.call(null,seq__17370__$1);
var G__17426 = c__5365__auto__;
var G__17427 = cljs.core.count.call(null,c__5365__auto__);
var G__17428 = (0);
seq__17370 = G__17425;
chunk__17371 = G__17426;
count__17372 = G__17427;
i__17373 = G__17428;
continue;
} else {
var child = cljs.core.first.call(null,seq__17370__$1);
child.updateCursor(new_val,null);

var G__17429 = cljs.core.next.call(null,seq__17370__$1);
var G__17430 = null;
var G__17431 = (0);
var G__17432 = (0);
seq__17370 = G__17429;
chunk__17371 = G__17430;
count__17372 = G__17431;
i__17373 = G__17432;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.Cursor.prototype.notifyChangeWatches = (function (changes){
var self__ = this;
var this$ = this;
var seq__17374 = cljs.core.seq.call(null,self__.change_watches);
var chunk__17375 = null;
var count__17376 = (0);
var i__17377 = (0);
while(true){
if((i__17377 < count__17376)){
var vec__17378 = cljs.core._nth.call(null,chunk__17375,i__17377);
var key = cljs.core.nth.call(null,vec__17378,(0),null);
var f = cljs.core.nth.call(null,vec__17378,(1),null);
f.call(null,key,this$,changes);

var G__17433 = seq__17374;
var G__17434 = chunk__17375;
var G__17435 = count__17376;
var G__17436 = (i__17377 + (1));
seq__17374 = G__17433;
chunk__17375 = G__17434;
count__17376 = G__17435;
i__17377 = G__17436;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17374);
if(temp__4425__auto__){
var seq__17374__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17374__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17374__$1);
var G__17437 = cljs.core.chunk_rest.call(null,seq__17374__$1);
var G__17438 = c__5365__auto__;
var G__17439 = cljs.core.count.call(null,c__5365__auto__);
var G__17440 = (0);
seq__17374 = G__17437;
chunk__17375 = G__17438;
count__17376 = G__17439;
i__17377 = G__17440;
continue;
} else {
var vec__17379 = cljs.core.first.call(null,seq__17374__$1);
var key = cljs.core.nth.call(null,vec__17379,(0),null);
var f = cljs.core.nth.call(null,vec__17379,(1),null);
f.call(null,key,this$,changes);

var G__17441 = cljs.core.next.call(null,seq__17374__$1);
var G__17442 = null;
var G__17443 = (0);
var G__17444 = (0);
seq__17374 = G__17441;
chunk__17375 = G__17442;
count__17376 = G__17443;
i__17377 = G__17444;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.Cursor.prototype.unregisterOne = (function (){
var self__ = this;
var this$ = this;
self__.watchers = (self__.watchers - (1));

return this$.clean();
});

freactive.core.Cursor.prototype.rawDeref = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.dirty)){
self__.state = self__.get_fn.call(null,this$);
} else {
}

return self__.state;
});

freactive.core.Cursor.prototype.removeFWatch = (function (key){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.fwatches[key]))){
delete this$.fwatches[key];

return this$.unregisterOne();
} else {
return null;
}
});

freactive.core.Cursor.prototype.updateCursor = (function (new_state,change_ks){
var self__ = this;
var this$ = this;
if((self__.state === new_state)){
return null;
} else {
var old_state = self__.state;
var has_change_watches = !(cljs.core.empty_QMARK_.call(null,self__.change_watches));
self__.state = new_state;

this$.notifyWatches(old_state,self__.state);

if(cljs.core.truth_(change_ks)){
var change_ks__$1 = (((change_ks instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17381 = (((change_ks instanceof cljs.core.Keyword))?change_ks.fqn:null);
switch (G__17381) {
case "conj":
return (cljs.core.count.call(null,self__.state) - (1));

break;
case "pop":
return cljs.core.count.call(null,self__.state);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(change_ks)].join('')));

}
})()], null):change_ks);
var vec__17380 = change_ks__$1;
var change_key = cljs.core.nth.call(null,vec__17380,(0),null);
var descendant_ks = cljs.core.nthnext.call(null,vec__17380,(1));
var cursors = cljs.core.get.call(null,self__.child_cursors,change_key);
if(cljs.core.truth_((function (){var or__4562__auto__ = cursors;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return has_change_watches;
}
})())){
var cur = cljs.core.first.call(null,cursors);
var old_val = (cljs.core.truth_(cur)?cur.state:cljs.core.get.call(null,old_state,change_key));
var new_val = cljs.core.get.call(null,self__.state,change_key);
if((old_val === new_val)){
return null;
} else {
var seq__17382_17446 = cljs.core.seq.call(null,cursors);
var chunk__17383_17447 = null;
var count__17384_17448 = (0);
var i__17385_17449 = (0);
while(true){
if((i__17385_17449 < count__17384_17448)){
var cur_17450__$1 = cljs.core._nth.call(null,chunk__17383_17447,i__17385_17449);
cur_17450__$1.updateCursor(new_val,descendant_ks);

var G__17451 = seq__17382_17446;
var G__17452 = chunk__17383_17447;
var G__17453 = count__17384_17448;
var G__17454 = (i__17385_17449 + (1));
seq__17382_17446 = G__17451;
chunk__17383_17447 = G__17452;
count__17384_17448 = G__17453;
i__17385_17449 = G__17454;
continue;
} else {
var temp__4425__auto___17455 = cljs.core.seq.call(null,seq__17382_17446);
if(temp__4425__auto___17455){
var seq__17382_17456__$1 = temp__4425__auto___17455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17382_17456__$1)){
var c__5365__auto___17457 = cljs.core.chunk_first.call(null,seq__17382_17456__$1);
var G__17458 = cljs.core.chunk_rest.call(null,seq__17382_17456__$1);
var G__17459 = c__5365__auto___17457;
var G__17460 = cljs.core.count.call(null,c__5365__auto___17457);
var G__17461 = (0);
seq__17382_17446 = G__17458;
chunk__17383_17447 = G__17459;
count__17384_17448 = G__17460;
i__17385_17449 = G__17461;
continue;
} else {
var cur_17462__$1 = cljs.core.first.call(null,seq__17382_17456__$1);
cur_17462__$1.updateCursor(new_val,descendant_ks);

var G__17463 = cljs.core.next.call(null,seq__17382_17456__$1);
var G__17464 = null;
var G__17465 = (0);
var G__17466 = (0);
seq__17382_17446 = G__17463;
chunk__17383_17447 = G__17464;
count__17384_17448 = G__17465;
i__17385_17449 = G__17466;
continue;
}
} else {
}
}
break;
}

if(has_change_watches){
if((new_val == null)){
return this$.notifyChangeWatches(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [change_key], null)], null));
} else {
return this$.notifyChangeWatches(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [change_key,new_val], null)], null));
}
} else {
return null;
}
}
} else {
return null;
}
} else {
if(has_change_watches){
var old_keys = cljs.core.set.call(null,freactive.core.coll_keyset.call(null,old_state));
var new_keys = freactive.core.coll_keyset.call(null,self__.state);
var changes = (function (){var G__17387 = new_keys;
var vec__17388 = G__17387;
var key = cljs.core.nth.call(null,vec__17388,(0),null);
var more = cljs.core.nthnext.call(null,vec__17388,(1));
var old_keys__$1 = old_keys;
var changes = cljs.core.PersistentVector.EMPTY;
var G__17387__$1 = G__17387;
var old_keys__$2 = old_keys__$1;
var changes__$1 = changes;
while(true){
var vec__17389 = G__17387__$1;
var key__$1 = cljs.core.nth.call(null,vec__17389,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__17389,(1));
var old_keys__$3 = old_keys__$2;
var changes__$2 = changes__$1;
if(cljs.core.truth_(key__$1)){
var new_val = cljs.core.get.call(null,new_state,key__$1);
if(cljs.core.contains_QMARK_.call(null,old_keys__$3,key__$1)){
var old_val = cljs.core.get.call(null,old_state,key__$1);
var old_keys__$4 = cljs.core.disj.call(null,old_keys__$3,key__$1);
if((old_val === new_val)){
var G__17467 = more__$1;
var G__17468 = old_keys__$4;
var G__17469 = changes__$2;
G__17387__$1 = G__17467;
old_keys__$2 = G__17468;
changes__$1 = G__17469;
continue;
} else {
this$.resetChild(key__$1,new_val);

var G__17470 = more__$1;
var G__17471 = old_keys__$4;
var G__17472 = cljs.core.conj.call(null,changes__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1,new_val], null));
G__17387__$1 = G__17470;
old_keys__$2 = G__17471;
changes__$1 = G__17472;
continue;
}
} else {
this$.resetChild(key__$1,new_val);

var G__17473 = more__$1;
var G__17474 = old_keys__$3;
var G__17475 = cljs.core.conj.call(null,changes__$2,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1,new_val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"added","added",2057651688),true], null)));
G__17387__$1 = G__17473;
old_keys__$2 = G__17474;
changes__$1 = G__17475;
continue;
}
} else {
return cljs.core.concat.call(null,changes__$2,cljs.core.doall.call(null,(function (){var iter__5334__auto__ = ((function (G__17387__$1,old_keys__$2,changes__$1,vec__17389,key__$1,more__$1,old_keys__$3,changes__$2,G__17387,vec__17388,key,more,old_keys__$1,changes,old_keys,new_keys,old_state,has_change_watches,this$){
return (function freactive$core$iter__17390(s__17391){
return (new cljs.core.LazySeq(null,((function (G__17387__$1,old_keys__$2,changes__$1,vec__17389,key__$1,more__$1,old_keys__$3,changes__$2,G__17387,vec__17388,key,more,old_keys__$1,changes,old_keys,new_keys,old_state,has_change_watches,this$){
return (function (){
var s__17391__$1 = s__17391;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17391__$1);
if(temp__4425__auto__){
var s__17391__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17391__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17391__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17393 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17392 = (0);
while(true){
if((i__17392 < size__5333__auto__)){
var key__$2 = cljs.core._nth.call(null,c__5332__auto__,i__17392);
cljs.core.chunk_append.call(null,b__17393,(function (){
this$.resetChild(key__$2,null);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$2], null);
})()
);

var G__17476 = (i__17392 + (1));
i__17392 = G__17476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17393),freactive$core$iter__17390.call(null,cljs.core.chunk_rest.call(null,s__17391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17393),null);
}
} else {
var key__$2 = cljs.core.first.call(null,s__17391__$2);
return cljs.core.cons.call(null,(function (){
this$.resetChild(key__$2,null);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$2], null);
})()
,freactive$core$iter__17390.call(null,cljs.core.rest.call(null,s__17391__$2)));
}
} else {
return null;
}
break;
}
});})(G__17387__$1,old_keys__$2,changes__$1,vec__17389,key__$1,more__$1,old_keys__$3,changes__$2,G__17387,vec__17388,key,more,old_keys__$1,changes,old_keys,new_keys,old_state,has_change_watches,this$))
,null,null));
});})(G__17387__$1,old_keys__$2,changes__$1,vec__17389,key__$1,more__$1,old_keys__$3,changes__$2,G__17387,vec__17388,key,more,old_keys__$1,changes,old_keys,new_keys,old_state,has_change_watches,this$))
;
return iter__5334__auto__.call(null,old_keys__$3);
})()));
}
break;
}
})();
return this$.notifyChangeWatches(changes);
} else {
if(cljs.core.truth_(self__.child_cursors)){
var seq__17394 = cljs.core.seq.call(null,self__.child_cursors);
var chunk__17395 = null;
var count__17396 = (0);
var i__17397 = (0);
while(true){
if((i__17397 < count__17396)){
var vec__17398 = cljs.core._nth.call(null,chunk__17395,i__17397);
var ckey = cljs.core.nth.call(null,vec__17398,(0),null);
var cursors = cljs.core.nth.call(null,vec__17398,(1),null);
var old_val_17477 = cljs.core.get.call(null,old_state,ckey);
var new_val_17478 = cljs.core.get.call(null,self__.state,ckey);
if((old_val_17477 === new_val_17478)){
} else {
var seq__17399_17479 = cljs.core.seq.call(null,cursors);
var chunk__17400_17480 = null;
var count__17401_17481 = (0);
var i__17402_17482 = (0);
while(true){
if((i__17402_17482 < count__17401_17481)){
var cur_17483 = cljs.core._nth.call(null,chunk__17400_17480,i__17402_17482);
cur_17483.updateCursor(new_val_17478,null);

var G__17484 = seq__17399_17479;
var G__17485 = chunk__17400_17480;
var G__17486 = count__17401_17481;
var G__17487 = (i__17402_17482 + (1));
seq__17399_17479 = G__17484;
chunk__17400_17480 = G__17485;
count__17401_17481 = G__17486;
i__17402_17482 = G__17487;
continue;
} else {
var temp__4425__auto___17488 = cljs.core.seq.call(null,seq__17399_17479);
if(temp__4425__auto___17488){
var seq__17399_17489__$1 = temp__4425__auto___17488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17399_17489__$1)){
var c__5365__auto___17490 = cljs.core.chunk_first.call(null,seq__17399_17489__$1);
var G__17491 = cljs.core.chunk_rest.call(null,seq__17399_17489__$1);
var G__17492 = c__5365__auto___17490;
var G__17493 = cljs.core.count.call(null,c__5365__auto___17490);
var G__17494 = (0);
seq__17399_17479 = G__17491;
chunk__17400_17480 = G__17492;
count__17401_17481 = G__17493;
i__17402_17482 = G__17494;
continue;
} else {
var cur_17495 = cljs.core.first.call(null,seq__17399_17489__$1);
cur_17495.updateCursor(new_val_17478,null);

var G__17496 = cljs.core.next.call(null,seq__17399_17489__$1);
var G__17497 = null;
var G__17498 = (0);
var G__17499 = (0);
seq__17399_17479 = G__17496;
chunk__17400_17480 = G__17497;
count__17401_17481 = G__17498;
i__17402_17482 = G__17499;
continue;
}
} else {
}
}
break;
}
}

var G__17500 = seq__17394;
var G__17501 = chunk__17395;
var G__17502 = count__17396;
var G__17503 = (i__17397 + (1));
seq__17394 = G__17500;
chunk__17395 = G__17501;
count__17396 = G__17502;
i__17397 = G__17503;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17394);
if(temp__4425__auto__){
var seq__17394__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17394__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17394__$1);
var G__17504 = cljs.core.chunk_rest.call(null,seq__17394__$1);
var G__17505 = c__5365__auto__;
var G__17506 = cljs.core.count.call(null,c__5365__auto__);
var G__17507 = (0);
seq__17394 = G__17504;
chunk__17395 = G__17505;
count__17396 = G__17506;
i__17397 = G__17507;
continue;
} else {
var vec__17403 = cljs.core.first.call(null,seq__17394__$1);
var ckey = cljs.core.nth.call(null,vec__17403,(0),null);
var cursors = cljs.core.nth.call(null,vec__17403,(1),null);
var old_val_17508 = cljs.core.get.call(null,old_state,ckey);
var new_val_17509 = cljs.core.get.call(null,self__.state,ckey);
if((old_val_17508 === new_val_17509)){
} else {
var seq__17404_17510 = cljs.core.seq.call(null,cursors);
var chunk__17405_17511 = null;
var count__17406_17512 = (0);
var i__17407_17513 = (0);
while(true){
if((i__17407_17513 < count__17406_17512)){
var cur_17514 = cljs.core._nth.call(null,chunk__17405_17511,i__17407_17513);
cur_17514.updateCursor(new_val_17509,null);

var G__17515 = seq__17404_17510;
var G__17516 = chunk__17405_17511;
var G__17517 = count__17406_17512;
var G__17518 = (i__17407_17513 + (1));
seq__17404_17510 = G__17515;
chunk__17405_17511 = G__17516;
count__17406_17512 = G__17517;
i__17407_17513 = G__17518;
continue;
} else {
var temp__4425__auto___17519__$1 = cljs.core.seq.call(null,seq__17404_17510);
if(temp__4425__auto___17519__$1){
var seq__17404_17520__$1 = temp__4425__auto___17519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17404_17520__$1)){
var c__5365__auto___17521 = cljs.core.chunk_first.call(null,seq__17404_17520__$1);
var G__17522 = cljs.core.chunk_rest.call(null,seq__17404_17520__$1);
var G__17523 = c__5365__auto___17521;
var G__17524 = cljs.core.count.call(null,c__5365__auto___17521);
var G__17525 = (0);
seq__17404_17510 = G__17522;
chunk__17405_17511 = G__17523;
count__17406_17512 = G__17524;
i__17407_17513 = G__17525;
continue;
} else {
var cur_17526 = cljs.core.first.call(null,seq__17404_17520__$1);
cur_17526.updateCursor(new_val_17509,null);

var G__17527 = cljs.core.next.call(null,seq__17404_17520__$1);
var G__17528 = null;
var G__17529 = (0);
var G__17530 = (0);
seq__17404_17510 = G__17527;
chunk__17405_17511 = G__17528;
count__17406_17512 = G__17529;
i__17407_17513 = G__17530;
continue;
}
} else {
}
}
break;
}
}

var G__17531 = cljs.core.next.call(null,seq__17394__$1);
var G__17532 = null;
var G__17533 = (0);
var G__17534 = (0);
seq__17394 = G__17531;
chunk__17395 = G__17532;
count__17396 = G__17533;
i__17397 = G__17534;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
}
}
});

freactive.core.Cursor.prototype.updateChild = (function (key,f,args){
var self__ = this;
var this$ = this;
var _STAR_change_ks_STAR_17408_17535 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);

try{cljs.core.apply.call(null,self__.swap_fn,this$,cljs.core.update,key,f,args);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17408_17535;
}
return this$;
});

freactive.core.Cursor.prototype.reactiveDeref = (function (){
var self__ = this;
var this$ = this;
freactive.core.register_dep.call(null,this$,self__.id,freactive.core.fwatch_binding_info);

return this$.rawDeref();
});

freactive.core.Cursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

freactive.core.Cursor.prototype.registerOne = (function (){
var self__ = this;
var this$ = this;
self__.watchers = (self__.watchers + (1));

return this$.activate();
});

freactive.core.Cursor.prototype.addFWatch = (function (key,f){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.fwatches[key]))){
return null;
} else {
(this$.fwatches[key] = f);

return this$.registerOne();
}
});

freactive.core.Cursor.prototype.notifyWatches = (function (old_state,new_state){
var self__ = this;
var this$ = this;
goog.object.forEach(this$.fwatches,((function (this$){
return (function (f,key,_){
return f.call(null,key,this$,old_state,new_state);
});})(this$))
);

var seq__17409 = cljs.core.seq.call(null,self__.watches);
var chunk__17410 = null;
var count__17411 = (0);
var i__17412 = (0);
while(true){
if((i__17412 < count__17411)){
var vec__17413 = cljs.core._nth.call(null,chunk__17410,i__17412);
var key = cljs.core.nth.call(null,vec__17413,(0),null);
var f = cljs.core.nth.call(null,vec__17413,(1),null);
f.call(null,key,this$,old_state,new_state);

var G__17536 = seq__17409;
var G__17537 = chunk__17410;
var G__17538 = count__17411;
var G__17539 = (i__17412 + (1));
seq__17409 = G__17536;
chunk__17410 = G__17537;
count__17411 = G__17538;
i__17412 = G__17539;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17409);
if(temp__4425__auto__){
var seq__17409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17409__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17409__$1);
var G__17540 = cljs.core.chunk_rest.call(null,seq__17409__$1);
var G__17541 = c__5365__auto__;
var G__17542 = cljs.core.count.call(null,c__5365__auto__);
var G__17543 = (0);
seq__17409 = G__17540;
chunk__17410 = G__17541;
count__17411 = G__17542;
i__17412 = G__17543;
continue;
} else {
var vec__17414 = cljs.core.first.call(null,seq__17409__$1);
var key = cljs.core.nth.call(null,vec__17414,(0),null);
var f = cljs.core.nth.call(null,vec__17414,(1),null);
f.call(null,key,this$,old_state,new_state);

var G__17544 = cljs.core.next.call(null,seq__17409__$1);
var G__17545 = null;
var G__17546 = (0);
var G__17547 = (0);
seq__17409 = G__17544;
chunk__17410 = G__17545;
count__17411 = G__17546;
i__17412 = G__17547;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,this$__$1.rawDeref(),key);
});

freactive.core.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
var or__4562__auto__ = cljs.core.get.call(null,this$__$1.rawDeref(),key);
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return not_found;
}
});

freactive.core.Cursor.prototype.freactive$core$IAssociativeCursor$ = true;

freactive.core.Cursor.prototype.freactive$core$IAssociativeCursor$_update_BANG_$arity$4 = (function (this$,key,f,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.updateChild(key,f,args);
});

freactive.core.Cursor.prototype.freactive$core$IAssociativeCursor$_update_in_BANG_$arity$4 = (function (this$,ks,f,args){
var self__ = this;
var this$__$1 = this;
var _STAR_change_ks_STAR_17415_17548 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = ks;

try{cljs.core.apply.call(null,self__.swap_fn,this$__$1,cljs.core.update_in,ks,f,args);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17415_17548;
}
return this$__$1;
});

freactive.core.Cursor.prototype.freactive$core$IAssociativeCursor$_assoc_in_BANG_$arity$3 = (function (this$,ks,v){
var self__ = this;
var this$__$1 = this;
var _STAR_change_ks_STAR_17416 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = ks;

try{self__.swap_fn.call(null,this$__$1,cljs.core.assoc_in,ks,v);

return this$__$1;
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17416;
}});

freactive.core.Cursor.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var _STAR_change_ks_STAR_17417 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);

try{return self__.swap_fn.call(null,this$__$1,cljs.core.dissoc,key);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17417;
}});

freactive.core.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

freactive.core.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

freactive.core.Cursor.prototype.freactive$core$ICursor$ = true;

freactive.core.Cursor.prototype.freactive$core$ICursor$_cursor_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tkey;
});

freactive.core.Cursor.prototype.freactive$core$ICursor$_child_cursor$arity$2 = (function (this$,ckey){
var self__ = this;
var this$__$1 = this;
var or__4562__auto__ = cljs.core.first.call(null,cljs.core.get.call(null,self__.child_cursors,ckey));
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return (new freactive.core.Cursor(freactive.core.new_reactive_id.call(null),this$__$1,ckey,((function (or__4562__auto__,this$__$1){
return (function (cur){
return cljs.core.get.call(null,this$__$1.rawDeref(),ckey);
});})(or__4562__auto__,this$__$1))
,((function (or__4562__auto__,this$__$1){
return (function() { 
var G__17549__delegate = function (cur,f,args){
return this$__$1.updateChild(ckey,f,args);
};
var G__17549 = function (cur,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17550__i = 0, G__17550__a = new Array(arguments.length -  2);
while (G__17550__i < G__17550__a.length) {G__17550__a[G__17550__i] = arguments[G__17550__i + 2]; ++G__17550__i;}
  args = new cljs.core.IndexedSeq(G__17550__a,0);
} 
return G__17549__delegate.call(this,cur,f,args);};
G__17549.cljs$lang$maxFixedArity = 2;
G__17549.cljs$lang$applyTo = (function (arglist__17551){
var cur = cljs.core.first(arglist__17551);
arglist__17551 = cljs.core.next(arglist__17551);
var f = cljs.core.first(arglist__17551);
var args = cljs.core.rest(arglist__17551);
return G__17549__delegate(cur,f,args);
});
G__17549.cljs$core$IFn$_invoke$arity$variadic = G__17549__delegate;
return G__17549;
})()
;})(or__4562__auto__,this$__$1))
,((function (or__4562__auto__,this$__$1){
return (function (cur){
this$__$1.registerOne();

return self__.child_cursors = cljs.core.update.call(null,self__.child_cursors,ckey,cljs.core.conj,cur);
});})(or__4562__auto__,this$__$1))
,((function (or__4562__auto__,this$__$1){
return (function (cur){
self__.child_cursors = cljs.core.update.call(null,self__.child_cursors,ckey,((function (or__4562__auto__,this$__$1){
return (function (cursors){
var cursors__$1 = cljs.core.remove.call(null,((function (or__4562__auto__,this$__$1){
return (function (p1__17368_SHARP_){
return cljs.core._EQ_.call(null,p1__17368_SHARP_,cur);
});})(or__4562__auto__,this$__$1))
,cursors);
if(cljs.core.empty_QMARK_.call(null,cursors__$1)){
return null;
} else {
return cursors__$1;
}
});})(or__4562__auto__,this$__$1))
);

return this$__$1.unregisterOne();
});})(or__4562__auto__,this$__$1))
,null,null,null,{},(0),cljs.core.get.call(null,self__.state,ckey),null,true,null));
}
});

freactive.core.Cursor.prototype.freactive$core$ICursor$_parent_cursor$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.tkey)){
return self__.parent;
} else {
return null;
}
});

freactive.core.Cursor.prototype.freactive$core$ICursor$_cursor_kvseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.state)){
if(cljs.core.map_QMARK_.call(null,self__.state)){
return cljs.core.seq.call(null,self__.state);
} else {
if(cljs.core.counted_QMARK_.call(null,self__.state)){
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,self__.state)),cljs.core.seq.call(null,self__.state));
} else {
return null;
}
}
} else {
return null;
}
});

freactive.core.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.metadata;
});

freactive.core.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

freactive.core.Cursor.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,n,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.assocChild(n,val);
});

freactive.core.Cursor.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var _STAR_change_ks_STAR_17418 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = new cljs.core.Keyword(null,"pop","pop",-1734778776);

try{return self__.swap_fn.call(null,this$__$1,cljs.core.pop);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17418;
}});

freactive.core.Cursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return self__.swap_fn.call(null,this$__$1,cljs.core.constantly.call(null,new_value));
});

freactive.core.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return self__.swap_fn.call(null,this$__$1,f);
});

freactive.core.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
return self__.swap_fn.call(null,this$__$1,f,x);
});

freactive.core.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
return self__.swap_fn.call(null,this$__$1,f,x,y);
});

freactive.core.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,more){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,self__.swap_fn,this$__$1,f,x,y,more);
});

freactive.core.Cursor.prototype.freactive$core$IReactive$ = true;

freactive.core.Cursor.prototype.freactive$core$IReactive$_get_binding_fns$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return freactive.core.fwatch_binding_info;
});

freactive.core.Cursor.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
var _STAR_change_ks_STAR_17419 = freactive.core._STAR_change_ks_STAR_;
freactive.core._STAR_change_ks_STAR_ = new cljs.core.Keyword(null,"conj","conj",1527141827);

try{return self__.swap_fn.call(null,this$__$1,cljs.core.conj,val);
}finally {freactive.core._STAR_change_ks_STAR_ = _STAR_change_ks_STAR_17419;
}});

freactive.core.Cursor.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state;
});

freactive.core.Cursor.prototype.freactive$core$IChangeNotifications$ = true;

freactive.core.Cursor.prototype.freactive$core$IChangeNotifications$_add_change_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.change_watches,key)){
} else {
this$__$1.change_watches = cljs.core.assoc.call(null,self__.change_watches,key,f);

this$__$1.registerOne();
}

return this$__$1;
});

freactive.core.Cursor.prototype.freactive$core$IChangeNotifications$_remove_change_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.change_watches,key)){
this$__$1.change_watches = cljs.core.dissoc.call(null,self__.change_watches,key);

this$__$1.unregisterOne();
} else {
}

return this$__$1;
});

freactive.core.Cursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.watches,key)){
} else {
this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);

this$__$1.registerOne();
}

return this$__$1;
});

freactive.core.Cursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.watches,key)){
this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);

this$__$1.unregisterOne();
} else {
}

return this$__$1;
});

freactive.core.Cursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.reactiveDeref();
});

freactive.core.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"tkey","tkey",-469331828,null),new cljs.core.Symbol(null,"get-fn","get-fn",2054014862,null),new cljs.core.Symbol(null,"swap-fn","swap-fn",2144146897,null),new cljs.core.Symbol(null,"activate-fn","activate-fn",-685536883,null),new cljs.core.Symbol(null,"clean-fn","clean-fn",377884801,null),cljs.core.with_meta(new cljs.core.Symbol(null,"child-cursors","child-cursors",1507750547,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"change-watches","change-watches",1133977635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fwatches","fwatches",-262417333,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watchers","watchers",-1799060888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.Cursor.cljs$lang$type = true;

freactive.core.Cursor.cljs$lang$ctorStr = "freactive.core/Cursor";

freactive.core.Cursor.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/Cursor");
});

freactive.core.__GT_Cursor = (function freactive$core$__GT_Cursor(id,parent,tkey,get_fn,swap_fn,activate_fn,clean_fn,child_cursors,watches,change_watches,fwatches,watchers,state,metadata,dirty,validator){
return (new freactive.core.Cursor(id,parent,tkey,get_fn,swap_fn,activate_fn,clean_fn,child_cursors,watches,change_watches,fwatches,watchers,state,metadata,dirty,validator));
});

/**
 * Creates and returns a ReactiveAtom with an initial value of x and zero or
 *   more options (in any order):
 *   :meta metadata-map
 *   :validator validate-fn
 *   If metadata-map is supplied, it will be come the metadata on the
 *   atom. validate-fn must be nil or a side-effect-free fn of one
 *   argument, which will be passed the intended new state on any state
 *   change. If the new state is unacceptable, the validate-fn should
 *   return false or throw an Error. If either of these error conditions
 *   occur, then the value of the atom will not change.
 */
freactive.core.atom = (function freactive$core$atom(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17557 = arguments.length;
var i__5621__auto___17558 = (0);
while(true){
if((i__5621__auto___17558 < len__5620__auto___17557)){
args__5627__auto__.push((arguments[i__5621__auto___17558]));

var G__17559 = (i__5621__auto___17558 + (1));
i__5621__auto___17558 = G__17559;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return freactive.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

freactive.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (init,p__17554){
var map__17555 = p__17554;
var map__17555__$1 = ((((!((map__17555 == null)))?((((map__17555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17555):map__17555);
var meta = cljs.core.get.call(null,map__17555__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__17555__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new freactive.core.Cursor(freactive.core.new_reactive_id.call(null),null,null,((function (map__17555,map__17555__$1,meta,validator){
return (function (cur){
return cur.state;
});})(map__17555,map__17555__$1,meta,validator))
,((function (map__17555,map__17555__$1,meta,validator){
return (function() { 
var G__17560__delegate = function (cur,f,args){
var new_value = cljs.core.apply.call(null,f,cur.state,args);
var temp__4425__auto___17561 = cur.validator;
if(cljs.core.truth_(temp__4425__auto___17561)){
var validate_17562 = temp__4425__auto___17561;
if(cljs.core.truth_(validate_17562.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
} else {
}

return cur.updateCursor(new_value,freactive.core._STAR_change_ks_STAR_);
};
var G__17560 = function (cur,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17563__i = 0, G__17563__a = new Array(arguments.length -  2);
while (G__17563__i < G__17563__a.length) {G__17563__a[G__17563__i] = arguments[G__17563__i + 2]; ++G__17563__i;}
  args = new cljs.core.IndexedSeq(G__17563__a,0);
} 
return G__17560__delegate.call(this,cur,f,args);};
G__17560.cljs$lang$maxFixedArity = 2;
G__17560.cljs$lang$applyTo = (function (arglist__17564){
var cur = cljs.core.first(arglist__17564);
arglist__17564 = cljs.core.next(arglist__17564);
var f = cljs.core.first(arglist__17564);
var args = cljs.core.rest(arglist__17564);
return G__17560__delegate(cur,f,args);
});
G__17560.cljs$core$IFn$_invoke$arity$variadic = G__17560__delegate;
return G__17560;
})()
;})(map__17555,map__17555__$1,meta,validator))
,((function (map__17555,map__17555__$1,meta,validator){
return (function (){
return null;
});})(map__17555,map__17555__$1,meta,validator))
,((function (map__17555,map__17555__$1,meta,validator){
return (function (){
return null;
});})(map__17555,map__17555__$1,meta,validator))
,null,null,null,{},(0),init,meta,false,validator));
});

freactive.core.atom.cljs$lang$maxFixedArity = (1);

freactive.core.atom.cljs$lang$applyTo = (function (seq17552){
var G__17553 = cljs.core.first.call(null,seq17552);
var seq17552__$1 = cljs.core.next.call(null,seq17552);
return freactive.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__17553,seq17552__$1);
});
/**
 * Creates a lens cursor. If the 1-arity version is used or setter is nil, the
 * cursor is read-only.
 */
freactive.core.lens_cursor = (function freactive$core$lens_cursor(var_args){
var args17565 = [];
var len__5620__auto___17568 = arguments.length;
var i__5621__auto___17569 = (0);
while(true){
if((i__5621__auto___17569 < len__5620__auto___17568)){
args17565.push((arguments[i__5621__auto___17569]));

var G__17570 = (i__5621__auto___17569 + (1));
i__5621__auto___17569 = G__17570;
continue;
} else {
}
break;
}

var G__17567 = args17565.length;
switch (G__17567) {
case 2:
return freactive.core.lens_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return freactive.core.lens_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17565.length)].join('')));

}
});

freactive.core.lens_cursor.cljs$core$IFn$_invoke$arity$2 = (function (parent,getter){
return freactive.core.lens_cursor.call(null,parent,getter,null);
});

freactive.core.lens_cursor.cljs$core$IFn$_invoke$arity$3 = (function (parent,getter,setter){
var binding_info = freactive.core.get_binding_fns.call(null,parent);
var id = freactive.core.new_reactive_id.call(null);
return (new freactive.core.Cursor(id,parent,null,((function (binding_info,id){
return (function (this$){
return getter.call(null,binding_info.raw_deref.call(null,parent));
});})(binding_info,id))
,(cljs.core.truth_(setter)?((function (binding_info,id){
return (function() { 
var G__17572__delegate = function (this$,f,args){
return cljs.core.swap_BANG_.call(null,parent,((function (binding_info,id){
return (function (x){
return setter.call(null,x,cljs.core.apply.call(null,f,getter.call(null,x),args));
});})(binding_info,id))
);
};
var G__17572 = function (this$,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17573__i = 0, G__17573__a = new Array(arguments.length -  2);
while (G__17573__i < G__17573__a.length) {G__17573__a[G__17573__i] = arguments[G__17573__i + 2]; ++G__17573__i;}
  args = new cljs.core.IndexedSeq(G__17573__a,0);
} 
return G__17572__delegate.call(this,this$,f,args);};
G__17572.cljs$lang$maxFixedArity = 2;
G__17572.cljs$lang$applyTo = (function (arglist__17574){
var this$ = cljs.core.first(arglist__17574);
arglist__17574 = cljs.core.next(arglist__17574);
var f = cljs.core.first(arglist__17574);
var args = cljs.core.rest(arglist__17574);
return G__17572__delegate(this$,f,args);
});
G__17572.cljs$core$IFn$_invoke$arity$variadic = G__17572__delegate;
return G__17572;
})()
;})(binding_info,id))
:((function (binding_info,id){
return (function (){
throw cljs.core.ex_info.call(null,"Cursor is read-only",cljs.core.PersistentArrayMap.EMPTY);
});})(binding_info,id))
),((function (binding_info,id){
return (function (this$){
return binding_info.add_watch.call(null,parent,id,((function (binding_info,id){
return (function (k,r,o,n){
return this$.updateCursor(getter.call(null,n),freactive.core._STAR_change_ks_STAR_);
});})(binding_info,id))
);
});})(binding_info,id))
,((function (binding_info,id){
return (function (this$){
return binding_info.remove_watch.call(null,parent,id);
});})(binding_info,id))
,null,null,null,{},(0),getter.call(null,cljs.core.deref.call(null,parent)),null,true,null));
});

freactive.core.lens_cursor.cljs$lang$maxFixedArity = 3;
freactive.core.root_cursor = (function freactive$core$root_cursor(atom_like){
return freactive.core.lens_cursor.call(null,atom_like,cljs.core.identity,(function (old,new$){
return new$;
}));
});
/**
 * Creates an associative cursor from the given parent to the provided
 * key or key-sequence (korks). Lens cursors should be created explicitly
 * using the lens-cursor function.
 */
freactive.core.cursor = (function freactive$core$cursor(parent,korks){
if(cljs.core.sequential_QMARK_.call(null,korks)){
return freactive.core.descendant_cursor.call(null,parent,korks);
} else {
return freactive.core.child_cursor.call(null,parent,korks);
}
});
freactive.core._STAR_do_trace_captures_STAR_ = null;

freactive.core._STAR_trace_capture_STAR_ = null;

freactive.core.make_register_dep = (function freactive$core$make_register_dep(rx){
return (function freactive$core$make_register_dep_$_do_register_dep(dep,id,binding_info){
if(cljs.core.truth_(freactive.core._STAR_trace_capture_STAR_)){
freactive.core._STAR_trace_capture_STAR_.call(null,dep);
} else {
}

(rx.deps[id] = [dep,binding_info]);

return binding_info.add_watch.call(null,dep,rx.id,(function (){
binding_info.remove_watch.call(null,dep,rx.id);

delete rx.deps[id];

return rx.invalidate();
}));
});
});

freactive.core.invalidates_binding_info = (new freactive.core.BindingInfo((function (p1__17575_SHARP_){
return p1__17575_SHARP_.rawDeref();
}),(function (p1__17576_SHARP_,p2__17577_SHARP_,p3__17578_SHARP_){
return p1__17576_SHARP_.addInvalidationWatch(p2__17577_SHARP_,p3__17578_SHARP_);
}),(function (p1__17579_SHARP_,p2__17580_SHARP_){
return p1__17579_SHARP_.removeInvalidationWatch(p2__17580_SHARP_);
}),(function (p1__17581_SHARP_){
return p1__17581_SHARP_.clean();
})));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {freactive.core.IReactive}
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.Object}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
freactive.core.ReactiveExpression = (function (id,state,dirty,f,deps,meta,watches,fwatches,watchers,invalidation_watches,iwatchers,register_dep_fn,lazy,trace_captures,teardown){
this.id = id;
this.state = state;
this.dirty = dirty;
this.f = f;
this.deps = deps;
this.meta = meta;
this.watches = watches;
this.fwatches = fwatches;
this.watchers = watchers;
this.invalidation_watches = invalidation_watches;
this.iwatchers = iwatchers;
this.register_dep_fn = register_dep_fn;
this.lazy = lazy;
this.trace_captures = trace_captures;
this.teardown = teardown;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
freactive.core.ReactiveExpression.prototype.addInvalidationWatch = (function (key,f__$1){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.invalidation_watches[key]))){
} else {
this$.iwatchers = (this$.iwatchers + (1));

(this$.invalidation_watches[key] = f__$1);
}

return this$;
});

freactive.core.ReactiveExpression.prototype.clean = (function (){
var self__ = this;
var this$ = this;
if((((0) === self__.watchers)) && (((0) === self__.iwatchers))){
goog.object.forEach(self__.deps,((function (this$){
return (function (val,key,obj){
var dep_17594 = (val[(0)]);
var binding_info_17595 = (val[(1)]);
var remove_watch_STAR__17596 = binding_info_17595.remove_watch;
remove_watch_STAR__17596.call(null,dep_17594,self__.id);

var temp__4425__auto___17597 = binding_info_17595.clean;
if(cljs.core.truth_(temp__4425__auto___17597)){
var clean_STAR__17598 = temp__4425__auto___17597;
clean_STAR__17598.call(null,dep_17594);
} else {
}

return delete obj[key];
});})(this$))
);

this$.dirty = true;

if(cljs.core.truth_(self__.teardown)){
return self__.teardown.call(null,this$);
} else {
return null;
}
} else {
return null;
}
});

freactive.core.ReactiveExpression.prototype.removeInvalidationWatch = (function (key){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.invalidation_watches[key]))){
this$.iwatchers = (this$.iwatchers - (1));

delete this$.invalidation_watches[key];
} else {
}

return this$;
});

freactive.core.ReactiveExpression.prototype.compute = (function (){
var self__ = this;
var this$ = this;
self__.dirty = false;

var old_val = self__.state;
var new_val = (function (){var _STAR_register_dep_STAR_17582 = freactive.core._STAR_register_dep_STAR_;
var _STAR_trace_capture_STAR_17583 = freactive.core._STAR_trace_capture_STAR_;
freactive.core._STAR_register_dep_STAR_ = self__.register_dep_fn;

freactive.core._STAR_trace_capture_STAR_ = (cljs.core.truth_(self__.trace_captures)?(function (){
self__.trace_captures.call(null);

return self__.trace_captures;
})()
:null);

try{return self__.f.call(null);
}finally {freactive.core._STAR_trace_capture_STAR_ = _STAR_trace_capture_STAR_17583;

freactive.core._STAR_register_dep_STAR_ = _STAR_register_dep_STAR_17582;
}})();
if((old_val === new_val)){
return null;
} else {
self__.state = new_val;

this$.notifyFWatches(old_val,new_val);

return new_val;
}
});

freactive.core.ReactiveExpression.prototype.rawDeref = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(this$.dirty)){
var _STAR_register_dep_STAR_17584_17599 = freactive.core._STAR_register_dep_STAR_;
freactive.core._STAR_register_dep_STAR_ = null;

try{this$.compute();
}finally {freactive.core._STAR_register_dep_STAR_ = _STAR_register_dep_STAR_17584_17599;
}} else {
}

return this$.state;
});

freactive.core.ReactiveExpression.prototype.removeFWatch = (function (key){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.fwatches[key]))){
this$.watchers = (this$.watchers - (1));

return delete this$.fwatches[key];
} else {
return null;
}
});

freactive.core.ReactiveExpression.prototype.reactiveDeref = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(this$.lazy)){
freactive.core.register_dep.call(null,this$,this$.id,freactive.core.invalidates_binding_info);
} else {
freactive.core.register_dep.call(null,this$,this$.id,freactive.core.fwatch_binding_info);
}

if(cljs.core.truth_(this$.dirty)){
this$.compute();
} else {
}

return this$.state;
});

freactive.core.ReactiveExpression.prototype.invalidate = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(this$.dirty)){
return null;
} else {
this$.dirty = true;

if((this$.watchers > (0))){
if(cljs.core.truth_(this$.compute())){
this$.notifyInvalidationWatches();
} else {
}
} else {
this$.notifyInvalidationWatches();
}

return this$.clean();
}
});

freactive.core.ReactiveExpression.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

freactive.core.ReactiveExpression.prototype.notifyInvalidationWatches = (function (){
var self__ = this;
var this$ = this;
return goog.object.forEach(this$.invalidation_watches,((function (this$){
return (function (f__$1,key,_){
return f__$1.call(null,key,this$);
});})(this$))
);
});

freactive.core.ReactiveExpression.prototype.notifyFWatches = (function (oldVal,newVal){
var self__ = this;
var this$ = this;
goog.object.forEach(this$.fwatches,((function (this$){
return (function (f__$1,key,_){
return f__$1.call(null,key,this$,oldVal,newVal);
});})(this$))
);

var seq__17585 = cljs.core.seq.call(null,this$.watches);
var chunk__17586 = null;
var count__17587 = (0);
var i__17588 = (0);
while(true){
if((i__17588 < count__17587)){
var vec__17589 = cljs.core._nth.call(null,chunk__17586,i__17588);
var key = cljs.core.nth.call(null,vec__17589,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__17589,(1),null);
f__$1.call(null,key,this$,oldVal,newVal);

var G__17600 = seq__17585;
var G__17601 = chunk__17586;
var G__17602 = count__17587;
var G__17603 = (i__17588 + (1));
seq__17585 = G__17600;
chunk__17586 = G__17601;
count__17587 = G__17602;
i__17588 = G__17603;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17585);
if(temp__4425__auto__){
var seq__17585__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17585__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17585__$1);
var G__17604 = cljs.core.chunk_rest.call(null,seq__17585__$1);
var G__17605 = c__5365__auto__;
var G__17606 = cljs.core.count.call(null,c__5365__auto__);
var G__17607 = (0);
seq__17585 = G__17604;
chunk__17586 = G__17605;
count__17587 = G__17606;
i__17588 = G__17607;
continue;
} else {
var vec__17590 = cljs.core.first.call(null,seq__17585__$1);
var key = cljs.core.nth.call(null,vec__17590,(0),null);
var f__$1 = cljs.core.nth.call(null,vec__17590,(1),null);
f__$1.call(null,key,this$,oldVal,newVal);

var G__17608 = cljs.core.next.call(null,seq__17585__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17585 = G__17608;
chunk__17586 = G__17609;
count__17587 = G__17610;
i__17588 = G__17611;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.ReactiveExpression.prototype.addFWatch = (function (key,f__$1){
var self__ = this;
var this$ = this;
if(cljs.core.truth_((this$.fwatches[key]))){
return null;
} else {
this$.watchers = (this$.watchers + (1));

return (this$.fwatches[key] = f__$1);
}
});

freactive.core.ReactiveExpression.prototype.dispose = (function (){
var self__ = this;
var this$ = this;
return this$.clean();
});

freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$ = true;

freactive.core.ReactiveExpression.prototype.freactive$core$IReactive$_get_binding_fns$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.lazy)){
return freactive.core.invalidates_binding_info;
} else {
return freactive.core.fwatch_binding_info;
}
});

freactive.core.ReactiveExpression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

freactive.core.ReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.reactiveDeref();
});

freactive.core.ReactiveExpression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<ReactiveComputation: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.watches,key)){
} else {
this$__$1.watchers = (self__.watchers + (1));

this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f__$1);
}

return this$__$1;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.watches,key)){
this$__$1.watchers = (self__.watchers - (1));

this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
} else {
}

return this$__$1;
});

freactive.core.ReactiveExpression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

freactive.core.ReactiveExpression.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"deps","deps",-771075450,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"fwatches","fwatches",-262417333,null),new cljs.core.Symbol(null,"watchers","watchers",-1799060888,null),new cljs.core.Symbol(null,"invalidation-watches","invalidation-watches",-903149502,null),new cljs.core.Symbol(null,"iwatchers","iwatchers",277563403,null),new cljs.core.Symbol(null,"register-dep-fn","register-dep-fn",-289273599,null),new cljs.core.Symbol(null,"lazy","lazy",1215984346,null),new cljs.core.Symbol(null,"trace-captures","trace-captures",1080231879,null),new cljs.core.Symbol(null,"teardown","teardown",381236034,null)], null);
});

freactive.core.ReactiveExpression.cljs$lang$type = true;

freactive.core.ReactiveExpression.cljs$lang$ctorStr = "freactive.core/ReactiveExpression";

freactive.core.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/ReactiveExpression");
});

freactive.core.__GT_ReactiveExpression = (function freactive$core$__GT_ReactiveExpression(id,state,dirty,f,deps,meta,watches,fwatches,watchers,invalidation_watches,iwatchers,register_dep_fn,lazy,trace_captures,teardown){
return (new freactive.core.ReactiveExpression(id,state,dirty,f,deps,meta,watches,fwatches,watchers,invalidation_watches,iwatchers,register_dep_fn,lazy,trace_captures,teardown));
});


freactive.core.rx_STAR_ = (function freactive$core$rx_STAR_(var_args){
var args17591 = [];
var len__5620__auto___17612 = arguments.length;
var i__5621__auto___17613 = (0);
while(true){
if((i__5621__auto___17613 < len__5620__auto___17612)){
args17591.push((arguments[i__5621__auto___17613]));

var G__17614 = (i__5621__auto___17613 + (1));
i__5621__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var G__17593 = args17591.length;
switch (G__17593) {
case 1:
return freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17591.length)].join('')));

}
});

freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return freactive.core.rx_STAR_.call(null,f,true,null);
});

freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,lazy){
return freactive.core.rx_STAR_.call(null,f,lazy,null);
});

freactive.core.rx_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,lazy,teardown){
var id = freactive.core.new_reactive_id.call(null);
var reactive = (new freactive.core.ReactiveExpression(id,null,true,f,{},null,null,{},(0),{},(0),null,lazy,freactive.core._STAR_do_trace_captures_STAR_,teardown));
reactive.register_dep_fn = freactive.core.make_register_dep.call(null,reactive);

return reactive;
});

freactive.core.rx_STAR_.cljs$lang$maxFixedArity = 3;
freactive.core.rapply_STAR_ = (function freactive$core$rapply_STAR_(f,atom_like,args,lazy){
return freactive.core.rx_STAR_.call(null,(function (){
return cljs.core.apply.call(null,f,cljs.core.deref.call(null,atom_like),args);
}));
});
freactive.core.rapply = (function freactive$core$rapply(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17619 = arguments.length;
var i__5621__auto___17620 = (0);
while(true){
if((i__5621__auto___17620 < len__5620__auto___17619)){
args__5627__auto__.push((arguments[i__5621__auto___17620]));

var G__17621 = (i__5621__auto___17620 + (1));
i__5621__auto___17620 = G__17621;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((2) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((2)),(0))):null);
return freactive.core.rapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5628__auto__);
});

freactive.core.rapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,atom_like,args){
return freactive.core.rapply_STAR_.call(null,f,atom_like,args,true);
});

freactive.core.rapply.cljs$lang$maxFixedArity = (2);

freactive.core.rapply.cljs$lang$applyTo = (function (seq17616){
var G__17617 = cljs.core.first.call(null,seq17616);
var seq17616__$1 = cljs.core.next.call(null,seq17616);
var G__17618 = cljs.core.first.call(null,seq17616__$1);
var seq17616__$2 = cljs.core.next.call(null,seq17616__$1);
return freactive.core.rapply.cljs$core$IFn$_invoke$arity$variadic(G__17617,G__17618,seq17616__$2);
});
freactive.core.eager_rapply = (function freactive$core$eager_rapply(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17625 = arguments.length;
var i__5621__auto___17626 = (0);
while(true){
if((i__5621__auto___17626 < len__5620__auto___17625)){
args__5627__auto__.push((arguments[i__5621__auto___17626]));

var G__17627 = (i__5621__auto___17626 + (1));
i__5621__auto___17626 = G__17627;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((2) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((2)),(0))):null);
return freactive.core.eager_rapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5628__auto__);
});

freactive.core.eager_rapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,atom_like,args){
return freactive.core.rapply_STAR_.call(null,f,atom_like,args,false);
});

freactive.core.eager_rapply.cljs$lang$maxFixedArity = (2);

freactive.core.eager_rapply.cljs$lang$applyTo = (function (seq17622){
var G__17623 = cljs.core.first.call(null,seq17622);
var seq17622__$1 = cljs.core.next.call(null,seq17622);
var G__17624 = cljs.core.first.call(null,seq17622__$1);
var seq17622__$2 = cljs.core.next.call(null,seq17622__$1);
return freactive.core.eager_rapply.cljs$core$IFn$_invoke$arity$variadic(G__17623,G__17624,seq17622__$2);
});
freactive.core.dispose = (function freactive$core$dispose(this$){
if(cljs.core.truth_(this$.dispose)){
try{this$.dispose();

return true;
}catch (e17629){var e = e17629;
return console.warn("Error while disposing state",e,this$);
}} else {
return null;
}
});
freactive.core.bind_attr_STAR_;

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {freactive.core.Object}
*/
freactive.core.ReactiveAttribute = (function (id,the_ref,binding_info,set_fn,enqueue_fn,disposed){
this.id = id;
this.the_ref = the_ref;
this.binding_info = binding_info;
this.set_fn = set_fn;
this.enqueue_fn = enqueue_fn;
this.disposed = disposed;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freactive.core.ReactiveAttribute.prototype.call = (function (self__,new_val){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
this$.dispose();

return freactive.core.bind_attr_STAR_.call(null,new_val,self__.set_fn,self__.enqueue_fn);
});

freactive.core.ReactiveAttribute.prototype.apply = (function (self__,args17630){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17630)));
});

freactive.core.ReactiveAttribute.prototype.cljs$core$IFn$_invoke$arity$1 = (function (new_val){
var self__ = this;
var this$ = this;
this$.dispose();

return freactive.core.bind_attr_STAR_.call(null,new_val,self__.set_fn,self__.enqueue_fn);
});

freactive.core.ReactiveAttribute.prototype.set = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.disposed)){
return null;
} else {
self__.binding_info.add_watch.call(null,self__.the_ref,self__.id,((function (this$){
return (function (){
return this$.invalidate();
});})(this$))
);

return self__.set_fn.call(null,self__.binding_info.raw_deref.call(null,self__.the_ref));
}
});

freactive.core.ReactiveAttribute.prototype.dispose = (function (){
var self__ = this;
var this$ = this;
self__.disposed = true;

self__.binding_info.remove_watch.call(null,self__.the_ref,self__.id);

var temp__4425__auto___17633 = self__.binding_info.clean;
if(cljs.core.truth_(temp__4425__auto___17633)){
var clean_17634 = temp__4425__auto___17633;
clean_17634.call(null,self__.the_ref);
} else {
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self__.the_ref),new cljs.core.Keyword(null,"binding-disposed","binding-disposed",-799269434));
if(cljs.core.truth_(temp__4425__auto__)){
var binding_disposed = temp__4425__auto__;
return binding_disposed.call(null);
} else {
return null;
}
});

freactive.core.ReactiveAttribute.prototype.invalidate = (function (){
var self__ = this;
var this$ = this;
self__.binding_info.remove_watch.call(null,self__.the_ref,self__.id);

return self__.enqueue_fn.call(null,((function (this$){
return (function (){
return this$.set();
});})(this$))
);
});

freactive.core.ReactiveAttribute.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"the-ref","the-ref",573256659,null),cljs.core.with_meta(new cljs.core.Symbol(null,"binding-info","binding-info",-1565443959,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"BindingInfo","BindingInfo",-1400862077,null)], null)),new cljs.core.Symbol(null,"set-fn","set-fn",-1772282692,null),new cljs.core.Symbol(null,"enqueue-fn","enqueue-fn",1607482647,null),cljs.core.with_meta(new cljs.core.Symbol(null,"disposed","disposed",-642091605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.ReactiveAttribute.cljs$lang$type = true;

freactive.core.ReactiveAttribute.cljs$lang$ctorStr = "freactive.core/ReactiveAttribute";

freactive.core.ReactiveAttribute.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/ReactiveAttribute");
});

freactive.core.__GT_ReactiveAttribute = (function freactive$core$__GT_ReactiveAttribute(id,the_ref,binding_info,set_fn,enqueue_fn,disposed){
return (new freactive.core.ReactiveAttribute(id,the_ref,binding_info,set_fn,enqueue_fn,disposed));
});


freactive.core.bind_attr_STAR_ = (function freactive$core$bind_attr_STAR_(the_ref,set_fn,enqueue_fn){
if(((!((the_ref == null)))?((((the_ref.cljs$lang$protocol_mask$partition0$ & (32768))) || (the_ref.cljs$core$IDeref$))?true:(((!the_ref.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,the_ref):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,the_ref))){
var binding = (new freactive.core.ReactiveAttribute(freactive.core.new_reactive_id.call(null),the_ref,freactive.core.get_binding_fns.call(null,the_ref),set_fn,enqueue_fn,false));
binding.set();

return binding;
} else {
set_fn.call(null,the_ref);

return (function (new_val){
set_fn.call(null,null);

return freactive$core$bind_attr_STAR_.call(null,new_val,set_fn,enqueue_fn);
});
}
});

freactive.core.attr_binder_STAR__STAR_ = (function freactive$core$attr_binder_STAR__STAR_(enqueue_fn){
return (function freactive$core$attr_binder_STAR__STAR__$_attr_binder_STAR_(set_fn){
return (function freactive$core$attr_binder_STAR__STAR__$_attr_binder_STAR__$_attr_binder(value){
return freactive.core.bind_attr_STAR_.call(null,value,set_fn,enqueue_fn);
});
});
});

/**
 * @interface
 */
freactive.core.IProjectionSource = function(){};

freactive.core._source_pull = (function freactive$core$_source_pull(this$,idx){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionSource$_source_pull$arity$2 == null)))){
return this$.freactive$core$IProjectionSource$_source_pull$arity$2(this$,idx);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._source_pull[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,idx);
} else {
var m__5218__auto____$1 = (freactive.core._source_pull["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionSource.-source-pull",this$);
}
}
}
});

freactive.core.source_pull = (function freactive$core$source_pull(this$,idx){
return freactive.core._source_pull.call(null,this$,idx);
});

/**
 * @interface
 */
freactive.core.IProjectionTarget = function(){};

freactive.core._target_insert = (function freactive$core$_target_insert(this$,projected_elem,before_idx){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionTarget$_target_insert$arity$3 == null)))){
return this$.freactive$core$IProjectionTarget$_target_insert$arity$3(this$,projected_elem,before_idx);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._target_insert[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,projected_elem,before_idx);
} else {
var m__5218__auto____$1 = (freactive.core._target_insert["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,projected_elem,before_idx);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionTarget.-target-insert",this$);
}
}
}
});

freactive.core._target_peek = (function freactive$core$_target_peek(this$,elem_idx){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionTarget$_target_peek$arity$2 == null)))){
return this$.freactive$core$IProjectionTarget$_target_peek$arity$2(this$,elem_idx);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._target_peek[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,elem_idx);
} else {
var m__5218__auto____$1 = (freactive.core._target_peek["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,elem_idx);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionTarget.-target-peek",this$);
}
}
}
});

freactive.core._target_take = (function freactive$core$_target_take(this$,elem_idx){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionTarget$_target_take$arity$2 == null)))){
return this$.freactive$core$IProjectionTarget$_target_take$arity$2(this$,elem_idx);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._target_take[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,elem_idx);
} else {
var m__5218__auto____$1 = (freactive.core._target_take["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,elem_idx);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionTarget.-target-take",this$);
}
}
}
});

freactive.core._target_count = (function freactive$core$_target_count(this$){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionTarget$_target_count$arity$1 == null)))){
return this$.freactive$core$IProjectionTarget$_target_count$arity$1(this$);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._target_count[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$);
} else {
var m__5218__auto____$1 = (freactive.core._target_count["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionTarget.-target-count",this$);
}
}
}
});

freactive.core._target_move = (function freactive$core$_target_move(this$,elem_idx,before_idx){
if((!((this$ == null))) && (!((this$.freactive$core$IProjectionTarget$_target_move$arity$3 == null)))){
return this$.freactive$core$IProjectionTarget$_target_move$arity$3(this$,elem_idx,before_idx);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._target_move[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,elem_idx,before_idx);
} else {
var m__5218__auto____$1 = (freactive.core._target_move["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,elem_idx,before_idx);
} else {
throw cljs.core.missing_protocol.call(null,"IProjectionTarget.-target-move",this$);
}
}
}
});

freactive.core.target_insert = (function freactive$core$target_insert(this$,elem,before_idx){
if((before_idx >= (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"before-idx","before-idx",1085777629,null),(0))))].join('')));
}

return freactive.core._target_insert.call(null,this$,elem,before_idx);
});
freactive.core.target_count = (function freactive$core$target_count(this$){
return freactive.core._target_count.call(null,this$);
});
freactive.core.target_peek = (function freactive$core$target_peek(this$,idx){
if((((0) >= idx)) && (true)){
return freactive.core._target_peek.call(null,this$,idx);
} else {
return null;
}
});
freactive.core.target_take = (function freactive$core$target_take(this$,idx){
if((idx >= (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0))))].join('')));
}

return freactive.core._target_take.call(null,this$,idx);
});
freactive.core.target_move = (function freactive$core$target_move(this$,idx,before_idx){
if((idx >= (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0))))].join('')));
}

if((before_idx >= (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"before-idx","before-idx",1085777629,null),(0))))].join('')));
}

return freactive.core._target_move.call(null,this$,idx,before_idx);
});
freactive.core.target_remove = (function freactive$core$target_remove(this$,idx){
if((idx >= (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0))))].join('')));
}

var res = freactive.core._target_take.call(null,this$,idx);
return freactive.core.dispose.call(null,res);
});
freactive.core.target_clear = (function freactive$core$target_clear(this$){
var n__5465__auto__ = freactive.core.target_count.call(null,this$);
var i = (0);
while(true){
if((i < n__5465__auto__)){
freactive.core.target_remove.call(null,this$,(0));

var G__17635 = (i + (1));
i = G__17635;
continue;
} else {
return null;
}
break;
}
});

/**
 * @interface
 */
freactive.core.IProjection = function(){};

/**
 * Initializes a projection with a target IProjectionTarget and a platform
 * enqueue-fn. The return value should be the actual IProjectionSource that this
 * IProjection is binding to the IProjectionTarget. All updates should be
 * dispatched via enqueue-fn in batches that are as big as possible - this usually
 * means that updates are batched to enqueue-fn only if they are the direct result
 * of some state change, not updates propogated up from a lower level projection
 * source.
 */
freactive.core._project = (function freactive$core$_project(this$,target,enqueue_fn,velem_fn){
if((!((this$ == null))) && (!((this$.freactive$core$IProjection$_project$arity$4 == null)))){
return this$.freactive$core$IProjection$_project$arity$4(this$,target,enqueue_fn,velem_fn);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._project[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,target,enqueue_fn,velem_fn);
} else {
var m__5218__auto____$1 = (freactive.core._project["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,target,enqueue_fn,velem_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IProjection.-project",this$);
}
}
}
});

freactive.core.project = (function freactive$core$project(projection,target,enqueue_fn,velem_fn){
return freactive.core._project.call(null,projection,target,enqueue_fn,velem_fn);
});

/**
* @constructor
 * @implements {freactive.core.IChangeNotifications}
 * @implements {freactive.core.Object}
 * @implements {freactive.core.ICursor}
*/
freactive.core.FilterCursor = (function (parent,filter_fn,change_watches,active){
this.parent = parent;
this.filter_fn = filter_fn;
this.change_watches = change_watches;
this.active = active;
})
freactive.core.FilterCursor.prototype.setFilterFn = (function (new_filter_fn){
var self__ = this;
var this$ = this;
return null;
});

freactive.core.FilterCursor.prototype.onChanges = (function (updates){
var self__ = this;
var this$ = this;
return cljs.core.map.call(null,((function (this$){
return (function (p__17640){
var vec__17641 = p__17640;
var k = cljs.core.nth.call(null,vec__17641,(0),null);
var v = cljs.core.nth.call(null,vec__17641,(1),null);
var update = vec__17641;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,update),(1))){
return update;
} else {
if(cljs.core.not.call(null,self__.filter_fn.call(null,v))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return update;

}
}
});})(this$))
,updates);
});

freactive.core.FilterCursor.prototype.freactive$core$ICursor$ = true;

freactive.core.FilterCursor.prototype.freactive$core$ICursor$_cursor_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

freactive.core.FilterCursor.prototype.freactive$core$ICursor$_child_cursor$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return freactive.core.child_cursor.call(null,self__.parent,key);
});

freactive.core.FilterCursor.prototype.freactive$core$ICursor$_parent_cursor$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.parent;
});

freactive.core.FilterCursor.prototype.freactive$core$ICursor$_cursor_kvseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__17642){
var vec__17643 = p__17642;
var k = cljs.core.nth.call(null,vec__17643,(0),null);
var v = cljs.core.nth.call(null,vec__17643,(1),null);
if(cljs.core.truth_(self__.filter_fn.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
});})(this$__$1))
,freactive.core.cursor_kvseq.call(null,self__.parent));
});

freactive.core.FilterCursor.prototype.freactive$core$IChangeNotifications$ = true;

freactive.core.FilterCursor.prototype.freactive$core$IChangeNotifications$_add_change_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
self__.change_watches = cljs.core.assoc.call(null,self__.change_watches,key,f);

if(cljs.core.truth_(self__.active)){
return null;
} else {
return self__.active = true;
}
});

freactive.core.FilterCursor.prototype.freactive$core$IChangeNotifications$_remove_change_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
self__.change_watches = cljs.core.dissoc.call(null,self__.change_watches,key);

if(cljs.core.empty_QMARK_.call(null,self__.change_watches)){
return self__.active = false;
} else {
return null;
}
});

freactive.core.FilterCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"filter-fn","filter-fn",-964960094,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"change-watches","change-watches",1133977635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.FilterCursor.cljs$lang$type = true;

freactive.core.FilterCursor.cljs$lang$ctorStr = "freactive.core/FilterCursor";

freactive.core.FilterCursor.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/FilterCursor");
});

freactive.core.__GT_FilterCursor = (function freactive$core$__GT_FilterCursor(parent,filter_fn,change_watches,active){
return (new freactive.core.FilterCursor(parent,filter_fn,change_watches,active));
});


freactive.core.cursor_filter = (function freactive$core$cursor_filter(cursor,filter){
return null;
});


/**
* @constructor
 * @implements {freactive.core.IChangeNotifications}
 * @implements {freactive.core.Object}
 * @implements {freactive.core.ICursor}
*/
freactive.core.LensingCursor = (function (parent,getter,setter,change_watches){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.change_watches = change_watches;
})
freactive.core.LensingCursor.prototype.onUpdates = (function (updates){
var self__ = this;
var this$ = this;
var updates_STAR_ = (function (){var iter__5334__auto__ = ((function (this$){
return (function freactive$core$iter__17644(s__17645){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__17645__$1 = s__17645;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17645__$1);
if(temp__4425__auto__){
var s__17645__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17645__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17645__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17647 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17646 = (0);
while(true){
if((i__17646 < size__5333__auto__)){
var vec__17650 = cljs.core._nth.call(null,c__5332__auto__,i__17646);
var k = cljs.core.nth.call(null,vec__17650,(0),null);
var v = cljs.core.nth.call(null,vec__17650,(1),null);
var update = vec__17650;
cljs.core.chunk_append.call(null,b__17647,((cljs.core._EQ_.call(null,cljs.core.count.call(null,update),(1)))?update:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,self__.getter.call(null,v)], null)));

var G__17714 = (i__17646 + (1));
i__17646 = G__17714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17647),freactive$core$iter__17644.call(null,cljs.core.chunk_rest.call(null,s__17645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17647),null);
}
} else {
var vec__17651 = cljs.core.first.call(null,s__17645__$2);
var k = cljs.core.nth.call(null,vec__17651,(0),null);
var v = cljs.core.nth.call(null,vec__17651,(1),null);
var update = vec__17651;
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,update),(1)))?update:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,self__.getter.call(null,v)], null)),freactive$core$iter__17644.call(null,cljs.core.rest.call(null,s__17645__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__5334__auto__.call(null,updates);
})();
var seq__17652 = cljs.core.seq.call(null,self__.change_watches);
var chunk__17653 = null;
var count__17654 = (0);
var i__17655 = (0);
while(true){
if((i__17655 < count__17654)){
var vec__17656 = cljs.core._nth.call(null,chunk__17653,i__17655);
var k = cljs.core.nth.call(null,vec__17656,(0),null);
var f = cljs.core.nth.call(null,vec__17656,(1),null);
f.call(null,k,this$,updates_STAR_);

var G__17715 = seq__17652;
var G__17716 = chunk__17653;
var G__17717 = count__17654;
var G__17718 = (i__17655 + (1));
seq__17652 = G__17715;
chunk__17653 = G__17716;
count__17654 = G__17717;
i__17655 = G__17718;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17652);
if(temp__4425__auto__){
var seq__17652__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17652__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17652__$1);
var G__17719 = cljs.core.chunk_rest.call(null,seq__17652__$1);
var G__17720 = c__5365__auto__;
var G__17721 = cljs.core.count.call(null,c__5365__auto__);
var G__17722 = (0);
seq__17652 = G__17719;
chunk__17653 = G__17720;
count__17654 = G__17721;
i__17655 = G__17722;
continue;
} else {
var vec__17657 = cljs.core.first.call(null,seq__17652__$1);
var k = cljs.core.nth.call(null,vec__17657,(0),null);
var f = cljs.core.nth.call(null,vec__17657,(1),null);
f.call(null,k,this$,updates_STAR_);

var G__17723 = cljs.core.next.call(null,seq__17652__$1);
var G__17724 = null;
var G__17725 = (0);
var G__17726 = (0);
seq__17652 = G__17723;
chunk__17653 = G__17724;
count__17654 = G__17725;
i__17655 = G__17726;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.LensingCursor.prototype.freactive$core$ICursor$ = true;

freactive.core.LensingCursor.prototype.freactive$core$ICursor$_cursor_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

freactive.core.LensingCursor.prototype.freactive$core$ICursor$_child_cursor$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var cur = freactive.core.lens_cursor.call(null,freactive.core.child_cursor.call(null,self__.parent,key),self__.getter,self__.setter);
cur.tkey = key;

return cur;
});

freactive.core.LensingCursor.prototype.freactive$core$ICursor$_parent_cursor$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.parent;
});

freactive.core.LensingCursor.prototype.freactive$core$ICursor$_cursor_kvseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__17658){
var vec__17659 = p__17658;
var k = cljs.core.nth.call(null,vec__17659,(0),null);
var v = cljs.core.nth.call(null,vec__17659,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,self__.getter.call(null,v)], null);
});})(this$__$1))
,freactive.core.cursor_kvseq.call(null,self__.parent));
});

freactive.core.LensingCursor.prototype.freactive$core$IChangeNotifications$ = true;

freactive.core.LensingCursor.prototype.freactive$core$IChangeNotifications$_add_change_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.change_watches = cljs.core.assoc.call(null,self__.change_watches,key,f);
});

freactive.core.LensingCursor.prototype.freactive$core$IChangeNotifications$_remove_change_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.change_watches = cljs.core.dissoc.call(null,self__.change_watches,key);
});

freactive.core.LensingCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null),cljs.core.with_meta(new cljs.core.Symbol(null,"change-watches","change-watches",1133977635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.LensingCursor.cljs$lang$type = true;

freactive.core.LensingCursor.cljs$lang$ctorStr = "freactive.core/LensingCursor";

freactive.core.LensingCursor.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/LensingCursor");
});

freactive.core.__GT_LensingCursor = (function freactive$core$__GT_LensingCursor(parent,getter,setter,change_watches){
return (new freactive.core.LensingCursor(parent,getter,setter,change_watches));
});


freactive.core.cursor_mapping = (function freactive$core$cursor_mapping(cursor,getter,setter){
return null;
});

freactive.core.cursor_sort = (function freactive$core$cursor_sort(cursor,p__17660){
var map__17663 = p__17660;
var map__17663__$1 = ((((!((map__17663 == null)))?((((map__17663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17663):map__17663);
var sort_opts = map__17663__$1;
var by_value = cljs.core.get.call(null,map__17663__$1,new cljs.core.Keyword(null,"by-value","by-value",-928148850));
var by_key = cljs.core.get.call(null,map__17663__$1,new cljs.core.Keyword(null,"by-key","by-key",482089853));
var direction = cljs.core.get.call(null,map__17663__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return null;
});


/**
* @constructor
 * @implements {freactive.core.Object}
 * @implements {freactive.core.IProjection}
*/
freactive.core.KeysetCursorProjection = (function (cur,target_fn,opts,avl_set,target,enqueue_fn,filter_fn,offset,limit,sort_by,placeholder,placeholder_idx){
this.cur = cur;
this.target_fn = target_fn;
this.opts = opts;
this.avl_set = avl_set;
this.target = target;
this.enqueue_fn = enqueue_fn;
this.filter_fn = filter_fn;
this.offset = offset;
this.limit = limit;
this.sort_by = sort_by;
this.placeholder = placeholder;
this.placeholder_idx = placeholder_idx;
})
freactive.core.KeysetCursorProjection.prototype.dispose = (function (){
var self__ = this;
var this$ = this;
return freactive.core.remove_change_watch.call(null,self__.cur,this$);
});

freactive.core.KeysetCursorProjection.prototype.project = (function (){
var self__ = this;
var this$ = this;
freactive.core.target_clear.call(null,self__.target);

return this$.onUpdates(freactive.core.cursor_kvseq.call(null,self__.cur));
});

freactive.core.KeysetCursorProjection.prototype.updateSortBy = (function (new_sort_by){
var self__ = this;
var this$ = this;
return self__.enqueue_fn.call(null,((function (this$){
return (function (){
if((!((new_sort_by === self__.sort_by))) || ((self__.avl_set == null))){
self__.sort_by = new_sort_by;

return self__.avl_set = (cljs.core.truth_(self__.sort_by)?clojure.data.avl.sorted_set_by.call(null,self__.sort_by):clojure.data.avl.sorted_set.call(null));
} else {
return null;
}
});})(this$))
);
});

freactive.core.KeysetCursorProjection.prototype.updateFilter = (function (new_filter){
var self__ = this;
var this$ = this;
return null;
});

freactive.core.KeysetCursorProjection.prototype.updateOffset = (function (new_offset){
var self__ = this;
var this$ = this;
return null;
});

freactive.core.KeysetCursorProjection.prototype.updateLimit = (function (new_limit){
var self__ = this;
var this$ = this;
return null;
});

freactive.core.KeysetCursorProjection.prototype.rankOf = (function (key){
var self__ = this;
var this$ = this;
var idx = (clojure.data.avl.rank_of.call(null,self__.avl_set,key) - self__.offset);
if((idx >= (0))){
var idx__$1 = (cljs.core.truth_(self__.limit)?(((idx <= self__.limit))?idx:null):idx);
if(cljs.core.truth_((function (){var and__4550__auto__ = self__.placeholder_idx;
if(cljs.core.truth_(and__4550__auto__)){
return (idx__$1 >= self__.placeholder_idx);
} else {
return and__4550__auto__;
}
})())){
return (idx__$1 + (1));
} else {
return idx__$1;
}
} else {
return null;
}
});

freactive.core.KeysetCursorProjection.prototype.onUpdates = (function (updates){
var self__ = this;
var this$ = this;
return self__.enqueue_fn.call(null,((function (this$){
return (function (){
var seq__17665 = cljs.core.seq.call(null,updates);
var chunk__17666 = null;
var count__17667 = (0);
var i__17668 = (0);
while(true){
if((i__17668 < count__17667)){
var vec__17669 = cljs.core._nth.call(null,chunk__17666,i__17668);
var k = cljs.core.nth.call(null,vec__17669,(0),null);
var v = cljs.core.nth.call(null,vec__17669,(1),null);
var update = vec__17669;
var temp__4423__auto___17727 = this$.rankOf(k);
if(cljs.core.truth_(temp__4423__auto___17727)){
var cur_idx_17728 = temp__4423__auto___17727;
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,update),(1))) || (cljs.core.not.call(null,cljs.core.filter.call(null,update)))){
self__.avl_set = cljs.core.disj.call(null,self__.avl_set,k);

freactive.core.target_remove.call(null,self__.target,cur_idx_17728);
} else {
self__.avl_set = cljs.core.conj.call(null,self__.avl_set,k);

var new_idx_17729 = this$.rankOf(k);
if((cur_idx_17728 === new_idx_17729)){
} else {
freactive.core.target_move.call(null,self__.target,cur_idx_17728,new_idx_17729);
}
}
} else {
if(cljs.core.truth_(cljs.core.filter.call(null,update))){
self__.avl_set = cljs.core.conj.call(null,self__.avl_set,k);

freactive.core.target_insert.call(null,self__.target,freactive.core.rx_STAR_.call(null,((function (seq__17665,chunk__17666,count__17667,i__17668,temp__4423__auto___17727,vec__17669,k,v,update,this$){
return (function (){
return self__.target_fn.call(null,freactive.core.cursor.call(null,self__.cur,k));
});})(seq__17665,chunk__17666,count__17667,i__17668,temp__4423__auto___17727,vec__17669,k,v,update,this$))
),this$.rankOf(k));
} else {
}
}

var G__17730 = seq__17665;
var G__17731 = chunk__17666;
var G__17732 = count__17667;
var G__17733 = (i__17668 + (1));
seq__17665 = G__17730;
chunk__17666 = G__17731;
count__17667 = G__17732;
i__17668 = G__17733;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17665);
if(temp__4425__auto__){
var seq__17665__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17665__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17665__$1);
var G__17734 = cljs.core.chunk_rest.call(null,seq__17665__$1);
var G__17735 = c__5365__auto__;
var G__17736 = cljs.core.count.call(null,c__5365__auto__);
var G__17737 = (0);
seq__17665 = G__17734;
chunk__17666 = G__17735;
count__17667 = G__17736;
i__17668 = G__17737;
continue;
} else {
var vec__17670 = cljs.core.first.call(null,seq__17665__$1);
var k = cljs.core.nth.call(null,vec__17670,(0),null);
var v = cljs.core.nth.call(null,vec__17670,(1),null);
var update = vec__17670;
var temp__4423__auto___17738 = this$.rankOf(k);
if(cljs.core.truth_(temp__4423__auto___17738)){
var cur_idx_17739 = temp__4423__auto___17738;
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,update),(1))) || (cljs.core.not.call(null,cljs.core.filter.call(null,update)))){
self__.avl_set = cljs.core.disj.call(null,self__.avl_set,k);

freactive.core.target_remove.call(null,self__.target,cur_idx_17739);
} else {
self__.avl_set = cljs.core.conj.call(null,self__.avl_set,k);

var new_idx_17740 = this$.rankOf(k);
if((cur_idx_17739 === new_idx_17740)){
} else {
freactive.core.target_move.call(null,self__.target,cur_idx_17739,new_idx_17740);
}
}
} else {
if(cljs.core.truth_(cljs.core.filter.call(null,update))){
self__.avl_set = cljs.core.conj.call(null,self__.avl_set,k);

freactive.core.target_insert.call(null,self__.target,freactive.core.rx_STAR_.call(null,((function (seq__17665,chunk__17666,count__17667,i__17668,temp__4423__auto___17738,vec__17670,k,v,update,seq__17665__$1,temp__4425__auto__,this$){
return (function (){
return self__.target_fn.call(null,freactive.core.cursor.call(null,self__.cur,k));
});})(seq__17665,chunk__17666,count__17667,i__17668,temp__4423__auto___17738,vec__17670,k,v,update,seq__17665__$1,temp__4425__auto__,this$))
),this$.rankOf(k));
} else {
}
}

var G__17741 = cljs.core.next.call(null,seq__17665__$1);
var G__17742 = null;
var G__17743 = (0);
var G__17744 = (0);
seq__17665 = G__17741;
chunk__17666 = G__17742;
count__17667 = G__17743;
i__17668 = G__17744;
continue;
}
} else {
return null;
}
}
break;
}
});})(this$))
);
});

freactive.core.KeysetCursorProjection.prototype.freactive$core$IProjection$ = true;

freactive.core.KeysetCursorProjection.prototype.freactive$core$IProjection$_project$arity$4 = (function (this$,proj_target,enqueue,velem_fn){
var self__ = this;
var this$__$1 = this;
self__.target = proj_target;

self__.enqueue_fn = enqueue;

var map__17671_17745 = self__.opts;
var map__17671_17746__$1 = ((((!((map__17671_17745 == null)))?((((map__17671_17745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17671_17745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17671_17745):map__17671_17745);
var filter_17747 = cljs.core.get.call(null,map__17671_17746__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var sort_by_17748__$1 = cljs.core.get.call(null,map__17671_17746__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var offset_17749__$1 = cljs.core.get.call(null,map__17671_17746__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var limit_17750__$1 = cljs.core.get.call(null,map__17671_17746__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
if(cljs.core.truth_(filter_17747)){
freactive.core.bind_attr_STAR_.call(null,filter_17747,((function (map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1){
return (function (p1__17636_SHARP_){
return this$__$1.updateFilter(p1__17636_SHARP_);
});})(map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1))
,enqueue);
} else {
}

freactive.core.bind_attr_STAR_.call(null,sort_by_17748__$1,((function (map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1){
return (function (p1__17637_SHARP_){
return this$__$1.updateSortBy(p1__17637_SHARP_);
});})(map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1))
,enqueue);

if(cljs.core.truth_(offset_17749__$1)){
freactive.core.bind_attr_STAR_.call(null,offset_17749__$1,((function (map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1){
return (function (p1__17638_SHARP_){
return this$__$1.updateOffset(p1__17638_SHARP_);
});})(map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1))
,enqueue);
} else {
}

if(cljs.core.truth_(limit_17750__$1)){
freactive.core.bind_attr_STAR_.call(null,limit_17750__$1,((function (map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1){
return (function (p1__17639_SHARP_){
return this$__$1.updateLimit(p1__17639_SHARP_);
});})(map__17671_17745,map__17671_17746__$1,filter_17747,sort_by_17748__$1,offset_17749__$1,limit_17750__$1,this$__$1))
,enqueue);
} else {
}

freactive.core.add_change_watch.call(null,self__.cur,this$__$1,((function (this$__$1){
return (function (k,r,updates){
return this$__$1.onUpdates(updates);
});})(this$__$1))
);

return this$__$1.project();
});

freactive.core.KeysetCursorProjection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"target-fn","target-fn",-1784476170,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),cljs.core.with_meta(new cljs.core.Symbol(null,"avl-set","avl-set",-766970515,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"enqueue-fn","enqueue-fn",1607482647,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"filter-fn","filter-fn",-964960094,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"placeholder","placeholder",1535658444,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"placeholder-idx","placeholder-idx",-1963961454,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.KeysetCursorProjection.cljs$lang$type = true;

freactive.core.KeysetCursorProjection.cljs$lang$ctorStr = "freactive.core/KeysetCursorProjection";

freactive.core.KeysetCursorProjection.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/KeysetCursorProjection");
});

freactive.core.__GT_KeysetCursorProjection = (function freactive$core$__GT_KeysetCursorProjection(cur,target_fn,opts,avl_set,target,enqueue_fn,filter_fn,offset,limit,sort_by,placeholder,placeholder_idx){
return (new freactive.core.KeysetCursorProjection(cur,target_fn,opts,avl_set,target,enqueue_fn,filter_fn,offset,limit,sort_by,placeholder,placeholder_idx));
});



/**
* @constructor
 * @implements {freactive.core.Object}
 * @implements {freactive.core.IProjectionSource}
*/
freactive.core.SeqProjectionSource = (function (elements,target,enqueue){
this.elements = elements;
this.target = target;
this.enqueue = enqueue;
})
freactive.core.SeqProjectionSource.prototype.refresh = (function (){
var self__ = this;
var this$ = this;
var seq__17673 = cljs.core.seq.call(null,self__.elements);
var chunk__17674 = null;
var count__17675 = (0);
var i__17676 = (0);
while(true){
if((i__17676 < count__17675)){
var elem = cljs.core._nth.call(null,chunk__17674,i__17676);
freactive.core.target_insert.call(null,self__.target,elem,null);

var G__17751 = seq__17673;
var G__17752 = chunk__17674;
var G__17753 = count__17675;
var G__17754 = (i__17676 + (1));
seq__17673 = G__17751;
chunk__17674 = G__17752;
count__17675 = G__17753;
i__17676 = G__17754;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17673);
if(temp__4425__auto__){
var seq__17673__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17673__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__17673__$1);
var G__17755 = cljs.core.chunk_rest.call(null,seq__17673__$1);
var G__17756 = c__5365__auto__;
var G__17757 = cljs.core.count.call(null,c__5365__auto__);
var G__17758 = (0);
seq__17673 = G__17755;
chunk__17674 = G__17756;
count__17675 = G__17757;
i__17676 = G__17758;
continue;
} else {
var elem = cljs.core.first.call(null,seq__17673__$1);
freactive.core.target_insert.call(null,self__.target,elem,null);

var G__17759 = cljs.core.next.call(null,seq__17673__$1);
var G__17760 = null;
var G__17761 = (0);
var G__17762 = (0);
seq__17673 = G__17759;
chunk__17674 = G__17760;
count__17675 = G__17761;
i__17676 = G__17762;
continue;
}
} else {
return null;
}
}
break;
}
});

freactive.core.SeqProjectionSource.prototype.freactive$core$IProjectionSource$ = true;

freactive.core.SeqProjectionSource.prototype.freactive$core$IProjectionSource$_source_pull$arity$2 = (function (this$,idx){
var self__ = this;
var this$__$1 = this;
if((idx < cljs.core.count.call(null,self__.elements))){
return cljs.core.nth.call(null,self__.elements,idx);
} else {
return null;
}
});

freactive.core.SeqProjectionSource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"enqueue","enqueue",1377000435,null)], null);
});

freactive.core.SeqProjectionSource.cljs$lang$type = true;

freactive.core.SeqProjectionSource.cljs$lang$ctorStr = "freactive.core/SeqProjectionSource";

freactive.core.SeqProjectionSource.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/SeqProjectionSource");
});

freactive.core.__GT_SeqProjectionSource = (function freactive$core$__GT_SeqProjectionSource(elements,target,enqueue){
return (new freactive.core.SeqProjectionSource(elements,target,enqueue));
});


freactive.core.seq_projection = (function freactive$core$seq_projection(elements){
if(typeof freactive.core.t_freactive$core17680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.IProjection}
 * @implements {cljs.core.IWithMeta}
*/
freactive.core.t_freactive$core17680 = (function (seq_projection,elements,meta17681){
this.seq_projection = seq_projection;
this.elements = elements;
this.meta17681 = meta17681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freactive.core.t_freactive$core17680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17682,meta17681__$1){
var self__ = this;
var _17682__$1 = this;
return (new freactive.core.t_freactive$core17680(self__.seq_projection,self__.elements,meta17681__$1));
});

freactive.core.t_freactive$core17680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17682){
var self__ = this;
var _17682__$1 = this;
return self__.meta17681;
});

freactive.core.t_freactive$core17680.prototype.freactive$core$IProjection$ = true;

freactive.core.t_freactive$core17680.prototype.freactive$core$IProjection$_project$arity$4 = (function (this$,target,enqueue,velem_fn){
var self__ = this;
var this$__$1 = this;
var source = (new freactive.core.SeqProjectionSource(self__.elements,target,enqueue));
enqueue.call(null,((function (source,this$__$1){
return (function (){
return source.refresh();
});})(source,this$__$1))
);

return source;
});

freactive.core.t_freactive$core17680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"seq-projection","seq-projection",-2103217493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null)))], null)),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"meta17681","meta17681",-220186727,null)], null);
});

freactive.core.t_freactive$core17680.cljs$lang$type = true;

freactive.core.t_freactive$core17680.cljs$lang$ctorStr = "freactive.core/t_freactive$core17680";

freactive.core.t_freactive$core17680.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/t_freactive$core17680");
});

freactive.core.__GT_t_freactive$core17680 = (function freactive$core$seq_projection_$___GT_t_freactive$core17680(seq_projection__$1,elements__$1,meta17681){
return (new freactive.core.t_freactive$core17680(seq_projection__$1,elements__$1,meta17681));
});

}

return (new freactive.core.t_freactive$core17680(freactive$core$seq_projection,elements,cljs.core.PersistentArrayMap.EMPTY));
});


/**
 * @interface
 */
freactive.core.IAsVirtualElement = function(){};

freactive.core._as_velem = (function freactive$core$_as_velem(this$,as_velem_fn){
if((!((this$ == null))) && (!((this$.freactive$core$IAsVirtualElement$_as_velem$arity$2 == null)))){
return this$.freactive$core$IAsVirtualElement$_as_velem$arity$2(this$,as_velem_fn);
} else {
var x__5217__auto__ = (((this$ == null))?null:this$);
var m__5218__auto__ = (freactive.core._as_velem[goog.typeOf(x__5217__auto__)]);
if(!((m__5218__auto__ == null))){
return m__5218__auto__.call(null,this$,as_velem_fn);
} else {
var m__5218__auto____$1 = (freactive.core._as_velem["_"]);
if(!((m__5218__auto____$1 == null))){
return m__5218__auto____$1.call(null,this$,as_velem_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IAsVirtualElement.-as-velem",this$);
}
}
}
});



/**
* @constructor
*/
freactive.core.VirtualElementWrapper = (function (){
})

freactive.core.VirtualElementWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

freactive.core.VirtualElementWrapper.cljs$lang$type = true;

freactive.core.VirtualElementWrapper.cljs$lang$ctorStr = "freactive.core/VirtualElementWrapper";

freactive.core.VirtualElementWrapper.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/VirtualElementWrapper");
});

freactive.core.__GT_VirtualElementWrapper = (function freactive$core$__GT_VirtualElementWrapper(){
return (new freactive.core.VirtualElementWrapper());
});


freactive.core.wrap = (function freactive$core$wrap(wrap_fn,elem){
return wrap_fn.call(null,elem);
});

freactive.core.unwrap = (function freactive$core$unwrap(elem){
return elem;
});


/**
* @constructor
 * @implements {freactive.core.IProjectionSource}
 * @implements {freactive.core.IProjectionTarget}
*/
freactive.core.MapProjection = (function (wrap_fn,target,source){
this.wrap_fn = wrap_fn;
this.target = target;
this.source = source;
})
freactive.core.MapProjection.prototype.freactive$core$IProjectionSource$ = true;

freactive.core.MapProjection.prototype.freactive$core$IProjectionSource$_source_pull$arity$2 = (function (this$,idx){
var self__ = this;
var this$__$1 = this;
return freactive.core.wrap.call(null,self__.wrap_fn,freactive.core.source_pull.call(null,self__.source,idx));
});

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$ = true;

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$_target_insert$arity$3 = (function (this$,elem,before_idx){
var self__ = this;
var this$__$1 = this;
return freactive.core.target_insert.call(null,self__.target,freactive.core.wrap.call(null,self__.wrap_fn,elem),before_idx);
});

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$_target_peek$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return freactive.core.unwrap.call(null,freactive.core.target_peek.call(null,self__.target,i));
});

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$_target_take$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return freactive.core.unwrap.call(null,freactive.core.target_take.call(null,self__.target,i));
});

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$_target_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return freactive.core.target_count.call(null,self__.target);
});

freactive.core.MapProjection.prototype.freactive$core$IProjectionTarget$_target_move$arity$3 = (function (this$,elem_idx,before_idx){
var self__ = this;
var this$__$1 = this;
return freactive.core.target_move.call(null,self__.target,elem_idx,before_idx);
});

freactive.core.MapProjection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"wrap-fn","wrap-fn",1370298397,null),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.with_meta(new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

freactive.core.MapProjection.cljs$lang$type = true;

freactive.core.MapProjection.cljs$lang$ctorStr = "freactive.core/MapProjection";

freactive.core.MapProjection.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/MapProjection");
});

freactive.core.__GT_MapProjection = (function freactive$core$__GT_MapProjection(wrap_fn,target,source){
return (new freactive.core.MapProjection(wrap_fn,target,source));
});


freactive.core.pwrap = (function freactive$core$pwrap(proj,wrap_fn){
if(typeof freactive.core.t_freactive$core17686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.IProjection}
 * @implements {cljs.core.IWithMeta}
*/
freactive.core.t_freactive$core17686 = (function (pwrap,proj,wrap_fn,meta17687){
this.pwrap = pwrap;
this.proj = proj;
this.wrap_fn = wrap_fn;
this.meta17687 = meta17687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freactive.core.t_freactive$core17686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17688,meta17687__$1){
var self__ = this;
var _17688__$1 = this;
return (new freactive.core.t_freactive$core17686(self__.pwrap,self__.proj,self__.wrap_fn,meta17687__$1));
});

freactive.core.t_freactive$core17686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17688){
var self__ = this;
var _17688__$1 = this;
return self__.meta17687;
});

freactive.core.t_freactive$core17686.prototype.freactive$core$IProjection$ = true;

freactive.core.t_freactive$core17686.prototype.freactive$core$IProjection$_project$arity$4 = (function (this$,target,enqueue_fn,velem_fn){
var self__ = this;
var this$__$1 = this;
var pproj = (new freactive.core.MapProjection(self__.wrap_fn,target,null));
pproj.source = freactive.core.project.call(null,self__.proj,pproj,enqueue_fn,velem_fn);

return pproj;
});

freactive.core.t_freactive$core17686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pwrap","pwrap",-1101475084,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"wrap-fn","wrap-fn",1370298397,null)], null)))], null)),new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"wrap-fn","wrap-fn",1370298397,null),new cljs.core.Symbol(null,"meta17687","meta17687",-211466898,null)], null);
});

freactive.core.t_freactive$core17686.cljs$lang$type = true;

freactive.core.t_freactive$core17686.cljs$lang$ctorStr = "freactive.core/t_freactive$core17686";

freactive.core.t_freactive$core17686.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/t_freactive$core17686");
});

freactive.core.__GT_t_freactive$core17686 = (function freactive$core$pwrap_$___GT_t_freactive$core17686(pwrap__$1,proj__$1,wrap_fn__$1,meta17687){
return (new freactive.core.t_freactive$core17686(pwrap__$1,proj__$1,wrap_fn__$1,meta17687));
});

}

return (new freactive.core.t_freactive$core17686(freactive$core$pwrap,proj,wrap_fn,cljs.core.PersistentArrayMap.EMPTY));
});


/**
* @constructor
 * @implements {freactive.core.Object}
 * @implements {freactive.core.IProjectionTarget}
*/
freactive.core.OffsetProjection = (function (offset,source,target){
this.offset = offset;
this.source = source;
this.target = target;
})
freactive.core.OffsetProjection.prototype.translate = (function (i){
var self__ = this;
var this$ = this;
var j = (i - self__.offset);
if((j >= (0))){
return j;
} else {
return null;
}
});

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$ = true;

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$_target_insert$arity$3 = (function (this$,elem,before_idx){
var self__ = this;
var this$__$1 = this;
if((before_idx > self__.offset)){
return freactive.core.target_insert.call(null,self__.target,elem,(before_idx - self__.offset));
} else {
return null;
}
});

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$_target_peek$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = this$__$1.translate(i);
if(cljs.core.truth_(temp__4425__auto__)){
var j = temp__4425__auto__;
return freactive.core.target_peek.call(null,self__.target,j);
} else {
return null;
}
});

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$_target_take$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = this$__$1.translate(i);
if(cljs.core.truth_(temp__4425__auto__)){
var j = temp__4425__auto__;
return freactive.core.target_take.call(null,self__.target,j);
} else {
return null;
}
});

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$_target_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return freactive.core.target_count.call(null,self__.target);
});

freactive.core.OffsetProjection.prototype.freactive$core$IProjectionTarget$_target_move$arity$3 = (function (this$,elem_idx,before_idx){
var self__ = this;
var this$__$1 = this;
return null;
});

freactive.core.OffsetProjection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

freactive.core.OffsetProjection.cljs$lang$type = true;

freactive.core.OffsetProjection.cljs$lang$ctorStr = "freactive.core/OffsetProjection";

freactive.core.OffsetProjection.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/OffsetProjection");
});

freactive.core.__GT_OffsetProjection = (function freactive$core$__GT_OffsetProjection(offset,source,target){
return (new freactive.core.OffsetProjection(offset,source,target));
});


freactive.core.poffset = (function freactive$core$poffset(proj,offset){
if(typeof freactive.core.t_freactive$core17692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.IProjection}
 * @implements {cljs.core.IWithMeta}
*/
freactive.core.t_freactive$core17692 = (function (poffset,proj,offset,meta17693){
this.poffset = poffset;
this.proj = proj;
this.offset = offset;
this.meta17693 = meta17693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freactive.core.t_freactive$core17692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17694,meta17693__$1){
var self__ = this;
var _17694__$1 = this;
return (new freactive.core.t_freactive$core17692(self__.poffset,self__.proj,self__.offset,meta17693__$1));
});

freactive.core.t_freactive$core17692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17694){
var self__ = this;
var _17694__$1 = this;
return self__.meta17693;
});

freactive.core.t_freactive$core17692.prototype.freactive$core$IProjection$ = true;

freactive.core.t_freactive$core17692.prototype.freactive$core$IProjection$_project$arity$4 = (function (this$,target,enqueue_fn,velem_fn){
var self__ = this;
var this$__$1 = this;
var pproj = (new freactive.core.OffsetProjection(self__.offset,target,null));
pproj.source = freactive.core.project.call(null,self__.proj,pproj,enqueue_fn,velem_fn);

return pproj;
});

freactive.core.t_freactive$core17692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"poffset","poffset",-284700788,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null)))], null)),new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"meta17693","meta17693",-2033304909,null)], null);
});

freactive.core.t_freactive$core17692.cljs$lang$type = true;

freactive.core.t_freactive$core17692.cljs$lang$ctorStr = "freactive.core/t_freactive$core17692";

freactive.core.t_freactive$core17692.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/t_freactive$core17692");
});

freactive.core.__GT_t_freactive$core17692 = (function freactive$core$poffset_$___GT_t_freactive$core17692(poffset__$1,proj__$1,offset__$1,meta17693){
return (new freactive.core.t_freactive$core17692(poffset__$1,proj__$1,offset__$1,meta17693));
});

}

return (new freactive.core.t_freactive$core17692(freactive$core$poffset,proj,offset,cljs.core.PersistentArrayMap.EMPTY));
});


/**
* @constructor
 * @implements {freactive.core.Object}
 * @implements {freactive.core.IProjectionTarget}
*/
freactive.core.LimitProjection = (function (offset,source,target){
this.offset = offset;
this.source = source;
this.target = target;
})
freactive.core.LimitProjection.prototype.translate = (function (i){
var self__ = this;
var this$ = this;
var j = (i - self__.offset);
if((j >= (0))){
return j;
} else {
return null;
}
});

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$ = true;

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$_target_insert$arity$3 = (function (this$,elem,before_idx){
var self__ = this;
var this$__$1 = this;
if((before_idx > self__.offset)){
return freactive.core.target_insert.call(null,self__.target,elem,(before_idx - self__.offset));
} else {
return null;
}
});

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$_target_peek$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = this$__$1.translate(i);
if(cljs.core.truth_(temp__4425__auto__)){
var j = temp__4425__auto__;
return freactive.core.target_peek.call(null,self__.target,j);
} else {
return null;
}
});

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$_target_take$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = this$__$1.translate(i);
if(cljs.core.truth_(temp__4425__auto__)){
var j = temp__4425__auto__;
return freactive.core.target_take.call(null,self__.target,j);
} else {
return null;
}
});

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$_target_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return freactive.core.target_count.call(null,self__.target);
});

freactive.core.LimitProjection.prototype.freactive$core$IProjectionTarget$_target_move$arity$3 = (function (this$,elem_idx,before_idx){
var self__ = this;
var this$__$1 = this;
return null;
});

freactive.core.LimitProjection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

freactive.core.LimitProjection.cljs$lang$type = true;

freactive.core.LimitProjection.cljs$lang$ctorStr = "freactive.core/LimitProjection";

freactive.core.LimitProjection.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/LimitProjection");
});

freactive.core.__GT_LimitProjection = (function freactive$core$__GT_LimitProjection(offset,source,target){
return (new freactive.core.LimitProjection(offset,source,target));
});


freactive.core.plimit = (function freactive$core$plimit(proj,limit){
if(typeof freactive.core.t_freactive$core17698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {freactive.core.IProjection}
 * @implements {cljs.core.IWithMeta}
*/
freactive.core.t_freactive$core17698 = (function (plimit,proj,limit,meta17699){
this.plimit = plimit;
this.proj = proj;
this.limit = limit;
this.meta17699 = meta17699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freactive.core.t_freactive$core17698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17700,meta17699__$1){
var self__ = this;
var _17700__$1 = this;
return (new freactive.core.t_freactive$core17698(self__.plimit,self__.proj,self__.limit,meta17699__$1));
});

freactive.core.t_freactive$core17698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17700){
var self__ = this;
var _17700__$1 = this;
return self__.meta17699;
});

freactive.core.t_freactive$core17698.prototype.freactive$core$IProjection$ = true;

freactive.core.t_freactive$core17698.prototype.freactive$core$IProjection$_project$arity$4 = (function (this$,target,enqueue_fn,velem_fn){
var self__ = this;
var this$__$1 = this;
var pproj = (new freactive.core.LimitProjection(self__.limit,self__.proj,target));
pproj.source = freactive.core.project.call(null,self__.proj,pproj,enqueue_fn,velem_fn);

return pproj;
});

freactive.core.t_freactive$core17698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"plimit","plimit",1802670808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null)))], null)),new cljs.core.Symbol(null,"proj","proj",-1093612096,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Symbol(null,"meta17699","meta17699",-230731920,null)], null);
});

freactive.core.t_freactive$core17698.cljs$lang$type = true;

freactive.core.t_freactive$core17698.cljs$lang$ctorStr = "freactive.core/t_freactive$core17698";

freactive.core.t_freactive$core17698.cljs$lang$ctorPrWriter = (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"freactive.core/t_freactive$core17698");
});

freactive.core.__GT_t_freactive$core17698 = (function freactive$core$plimit_$___GT_t_freactive$core17698(plimit__$1,proj__$1,limit__$1,meta17699){
return (new freactive.core.t_freactive$core17698(plimit__$1,proj__$1,limit__$1,meta17699));
});

}

return (new freactive.core.t_freactive$core17698(freactive$core$plimit,proj,limit,cljs.core.PersistentArrayMap.EMPTY));
});

freactive.core.cmap2_STAR_ = (function freactive$core$cmap2_STAR_(f,keyset_cursor,p__17701){
var map__17705 = p__17701;
var map__17705__$1 = ((((!((map__17705 == null)))?((((map__17705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17705):map__17705);
var opts = map__17705__$1;
var filter = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var sort = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"sort","sort",953465918));
var offset = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var limit = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var placeholder_idx = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"placeholder-idx","placeholder-idx",690474315));
var placeholder = cljs.core.get.call(null,map__17705__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var G__17707 = keyset_cursor;
var G__17707__$1 = (cljs.core.truth_(filter)?freactive.core.cursor_filter.call(null,G__17707,filter):G__17707);
var G__17707__$2 = freactive.core.cursor_sort.call(null,G__17707__$1,sort)
;
var G__17707__$3 = (cljs.core.truth_(offset)?freactive.core.poffset.call(null,G__17707__$2,offset):G__17707__$2);
var G__17707__$4 = (cljs.core.truth_(limit)?freactive.core.plimit.call(null,G__17707__$3,limit):G__17707__$3);
var G__17707__$5 = freactive.core.pwrap.call(null,G__17707__$4,f)
;
return G__17707__$5;
});

freactive.core.cmap_STAR_ = (function freactive$core$cmap_STAR_(f,keyset_cursor,opts){
return (new freactive.core.KeysetCursorProjection(keyset_cursor,f,opts,null,null,null,cljs.core.identity,(0),null,null,null,null));
});

freactive.core.cmap = (function freactive$core$cmap(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17763 = arguments.length;
var i__5621__auto___17764 = (0);
while(true){
if((i__5621__auto___17764 < len__5620__auto___17763)){
args__5627__auto__.push((arguments[i__5621__auto___17764]));

var G__17765 = (i__5621__auto___17764 + (1));
i__5621__auto___17764 = G__17765;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((2) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((2)),(0))):null);
return freactive.core.cmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5628__auto__);
});

freactive.core.cmap.cljs$core$IFn$_invoke$arity$variadic = (function (f,keyset_cursor,p__17711){
var map__17712 = p__17711;
var map__17712__$1 = ((((!((map__17712 == null)))?((((map__17712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17712):map__17712);
var opts = map__17712__$1;
return freactive.core.cmap_STAR_.call(null,f,keyset_cursor,opts);
});

freactive.core.cmap.cljs$lang$maxFixedArity = (2);

freactive.core.cmap.cljs$lang$applyTo = (function (seq17708){
var G__17709 = cljs.core.first.call(null,seq17708);
var seq17708__$1 = cljs.core.next.call(null,seq17708);
var G__17710 = cljs.core.first.call(null,seq17708__$1);
var seq17708__$2 = cljs.core.next.call(null,seq17708__$1);
return freactive.core.cmap.cljs$core$IFn$_invoke$arity$variadic(G__17709,G__17710,seq17708__$2);
});

//# sourceMappingURL=core.js.map?rel=1440417688334