// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.om');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('ampere.utils');
goog.require('ampere.router');
goog.require('freactive.core');
goog.require('ampere.core');
goog.require('om.core');
ampere.om.get_key = (function ampere$om$get_key(v){
return cljs.core.get.call(null,cljs.core.meta.call(null,v),new cljs.core.Keyword(null,"key","key",-1516042587),v);
});
ampere.om.sub = (function ampere$om$sub(c,v){
var rx = ampere.core.subscribe.call(null,v);
om.core.set_state_nr_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ampere.om","rx","ampere.om/rx",564498890),ampere.om.get_key.call(null,v)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rx], null));

var id_15611 = (function (){var or__4562__auto__ = om.core.get_state.call(null,c,new cljs.core.Keyword("ampere.om","id","ampere.om/id",1847681340));
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
var id = cljs.core.gensym.call(null);
om.core.set_state_nr_BANG_.call(null,c,new cljs.core.Keyword("ampere.om","id","ampere.om/id",1847681340),id);

return id;
}
})();
cljs.core.add_watch.call(null,rx,id_15611,((function (id_15611,rx){
return (function (){
return om.core.refresh_BANG_.call(null,c);
});})(id_15611,rx))
);

return rx;
});
ampere.om.unsub = (function ampere$om$unsub(c,v){
var k = ampere.om.get_key.call(null,v);
var temp__4425__auto__ = om.core.get_state.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ampere.om","rx","ampere.om/rx",564498890),k], null));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__15614 = temp__4425__auto__;
var _ = cljs.core.nth.call(null,vec__15614,(0),null);
var rx = cljs.core.nth.call(null,vec__15614,(1),null);
cljs.core.remove_watch.call(null,rx,om.core.get_state.call(null,c,new cljs.core.Keyword("ampere.om","id","ampere.om/id",1847681340)));

freactive.core.dispose.call(null,rx);

return om.core.update_state_nr_BANG_.call(null,c,new cljs.core.Keyword("ampere.om","rx","ampere.om/rx",564498890),((function (vec__15614,_,rx,temp__4425__auto__,k){
return (function (p1__15612_SHARP_){
return cljs.core.dissoc.call(null,p1__15612_SHARP_,k);
});})(vec__15614,_,rx,temp__4425__auto__,k))
);
} else {
return null;
}
});
ampere.om.adapt_state = (function ampere$om$adapt_state(state){
var properties = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x15622 = state;
x15622.om$core$IRootProperties$ = true;

x15622.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x15622,properties,listeners,render_queue){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x15622,properties,listeners,render_queue){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties,cljs.core.dissoc,id,k);
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x15622,properties,listeners,render_queue){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties,cljs.core.dissoc,id);
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRootProperties$_get_property$arity$3 = ((function (x15622,properties,listeners,render_queue){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$INotify$ = true;

x15622.om$core$INotify$_listen_BANG_$arity$3 = ((function (x15622,properties,listeners,render_queue){
return (function (this$,key,tx_listen){
var this$__$1 = this;
if((tx_listen == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners,cljs.core.assoc,key,tx_listen);
}

return this$__$1;
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x15622,properties,listeners,render_queue){
return (function (this$,key){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners,cljs.core.dissoc,key);

return this$__$1;
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$INotify$_notify_BANG_$arity$3 = ((function (x15622,properties,listeners,render_queue){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__15623_15629 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners));
var chunk__15624_15630 = null;
var count__15625_15631 = (0);
var i__15626_15632 = (0);
while(true){
if((i__15626_15632 < count__15625_15631)){
var vec__15627_15633 = cljs.core._nth.call(null,chunk__15624_15630,i__15626_15632);
var __15634 = cljs.core.nth.call(null,vec__15627_15633,(0),null);
var f_15635 = cljs.core.nth.call(null,vec__15627_15633,(1),null);
f_15635.call(null,tx_data,root_cursor);

var G__15636 = seq__15623_15629;
var G__15637 = chunk__15624_15630;
var G__15638 = count__15625_15631;
var G__15639 = (i__15626_15632 + (1));
seq__15623_15629 = G__15636;
chunk__15624_15630 = G__15637;
count__15625_15631 = G__15638;
i__15626_15632 = G__15639;
continue;
} else {
var temp__4425__auto___15640 = cljs.core.seq.call(null,seq__15623_15629);
if(temp__4425__auto___15640){
var seq__15623_15641__$1 = temp__4425__auto___15640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15623_15641__$1)){
var c__5365__auto___15642 = cljs.core.chunk_first.call(null,seq__15623_15641__$1);
var G__15643 = cljs.core.chunk_rest.call(null,seq__15623_15641__$1);
var G__15644 = c__5365__auto___15642;
var G__15645 = cljs.core.count.call(null,c__5365__auto___15642);
var G__15646 = (0);
seq__15623_15629 = G__15643;
chunk__15624_15630 = G__15644;
count__15625_15631 = G__15645;
i__15626_15632 = G__15646;
continue;
} else {
var vec__15628_15647 = cljs.core.first.call(null,seq__15623_15641__$1);
var __15648 = cljs.core.nth.call(null,vec__15628_15647,(0),null);
var f_15649 = cljs.core.nth.call(null,vec__15628_15647,(1),null);
f_15649.call(null,tx_data,root_cursor);

var G__15650 = cljs.core.next.call(null,seq__15623_15641__$1);
var G__15651 = null;
var G__15652 = (0);
var G__15653 = (0);
seq__15623_15629 = G__15650;
chunk__15624_15630 = G__15651;
count__15625_15631 = G__15652;
i__15626_15632 = G__15653;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRenderQueue$ = true;

x15622.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x15622,properties,listeners,render_queue){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue);
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x15622,properties,listeners,render_queue){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.update,new cljs.core.Keyword("ampere.om","c","ampere.om/c",1461873129),cljs.core.fnil.call(null,cljs.core.inc,(0)));
}
});})(x15622,properties,listeners,render_queue))
;

x15622.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x15622,properties,listeners,render_queue){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue,cljs.core.empty);
});})(x15622,properties,listeners,render_queue))
;

return x15622;
});
freactive.core.Cursor.prototype.om$core$ICursor$ = true;

freactive.core.Cursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var ___$1 = this;
return null;
});

freactive.core.Cursor.prototype.om$core$ICursor$_state$arity$1 = (function (rx){
var rx__$1 = this;
return rx__$1;
});

freactive.core.ReactiveExpression.prototype.om$core$ICursor$ = true;

freactive.core.ReactiveExpression.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var ___$1 = this;
return null;
});

freactive.core.ReactiveExpression.prototype.om$core$ICursor$_state$arity$1 = (function (rx){
var rx__$1 = this;
return rx__$1;
});
freactive.core.Cursor.prototype.om$core$IValue$ = true;

freactive.core.Cursor.prototype.om$core$IValue$_value$arity$1 = (function (rx){
var rx__$1 = this;
return cljs.core.deref.call(null,rx__$1);
});

freactive.core.ReactiveExpression.prototype.om$core$IValue$ = true;

freactive.core.ReactiveExpression.prototype.om$core$IValue$_value$arity$1 = (function (rx){
var rx__$1 = this;
return cljs.core.deref.call(null,rx__$1);
});
freactive.core.Cursor.prototype.om$core$IOmRef$ = true;

freactive.core.Cursor.prototype.om$core$IOmRef$_add_dep_BANG_$arity$2 = (function (rx,_){
var rx__$1 = this;
return rx__$1;
});

freactive.core.Cursor.prototype.om$core$IOmRef$_remove_dep_BANG_$arity$2 = (function (rx,c){
var rx__$1 = this;
return ampere.om.unsub.call(null,c,goog.object.get(rx__$1,"__ampere_v"));
});

freactive.core.Cursor.prototype.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = (function (_){
var ___$1 = this;
return null;
});

freactive.core.Cursor.prototype.om$core$IOmRef$_get_deps$arity$1 = (function (_){
var ___$1 = this;
return null;
});

freactive.core.ReactiveExpression.prototype.om$core$IOmRef$ = true;

freactive.core.ReactiveExpression.prototype.om$core$IOmRef$_add_dep_BANG_$arity$2 = (function (rx,_){
var rx__$1 = this;
return rx__$1;
});

freactive.core.ReactiveExpression.prototype.om$core$IOmRef$_remove_dep_BANG_$arity$2 = (function (rx,c){
var rx__$1 = this;
return ampere.om.unsub.call(null,c,goog.object.get(rx__$1,"__ampere_v"));
});

freactive.core.ReactiveExpression.prototype.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = (function (_){
var ___$1 = this;
return null;
});

freactive.core.ReactiveExpression.prototype.om$core$IOmRef$_get_deps$arity$1 = (function (_){
var ___$1 = this;
return null;
});
ampere.om.upsert_ref = (function ampere$om$upsert_ref(c,v){
var temp__4423__auto__ = om.core.get_state.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ampere.om","rx","ampere.om/rx",564498890),ampere.om.get_key.call(null,v)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__15655 = temp__4423__auto__;
var prev_v = cljs.core.nth.call(null,vec__15655,(0),null);
var rx = cljs.core.nth.call(null,vec__15655,(1),null);
if(cljs.core._EQ_.call(null,prev_v,v)){
return rx;
} else {
var id = om.core.get_state.call(null,c,new cljs.core.Keyword("ampere.om","id","ampere.om/id",1847681340));
cljs.core.remove_watch.call(null,rx,id);

freactive.core.dispose.call(null,rx);

return ampere.om.sub.call(null,c,v);
}
} else {
return ampere.om.sub.call(null,c,v);
}
});
ampere.om.observe = (function ampere$om$observe(c,v){
return cljs.core.deref.call(null,om.core.observe.call(null,c,ampere.om.upsert_ref.call(null,c,v)));
});
/**
 * Wrapper component that tracks reactions and rerender `f` wrappee on their run
 * with their values merged into cursor.
 * E. g. `{:opts {:subs {:x [:sub-id1 params] :y [:sub-id2 params}}}`
 * will inject `{:x @x-reaction :y @y-reaction}` into `f` props.
 */
ampere.om.Wrapper = (function ampere$om$Wrapper(p__15656,owner){
var vec__15667 = p__15656;
var f = cljs.core.nth.call(null,vec__15667,(0),null);
var cursor = cljs.core.nth.call(null,vec__15667,(1),null);
var m = cljs.core.nth.call(null,vec__15667,(2),null);
var subs = cljs.core.nth.call(null,vec__15667,(3),null);
if(typeof ampere.om.t_ampere$om15668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
ampere.om.t_ampere$om15668 = (function (Wrapper,p__15656,owner,vec__15667,f,cursor,m,subs,meta15669){
this.Wrapper = Wrapper;
this.p__15656 = p__15656;
this.owner = owner;
this.vec__15667 = vec__15667;
this.f = f;
this.cursor = cursor;
this.m = m;
this.subs = subs;
this.meta15669 = meta15669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
ampere.om.t_ampere$om15668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__15667,f,cursor,m,subs){
return (function (_15670,meta15669__$1){
var self__ = this;
var _15670__$1 = this;
return (new ampere.om.t_ampere$om15668(self__.Wrapper,self__.p__15656,self__.owner,self__.vec__15667,self__.f,self__.cursor,self__.m,self__.subs,meta15669__$1));
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__15667,f,cursor,m,subs){
return (function (_15670){
var self__ = this;
var _15670__$1 = this;
return self__.meta15669;
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.prototype.om$core$IDisplayName$ = true;

ampere.om.t_ampere$om15668.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (vec__15667,f,cursor,m,subs){
return (function (_){
var self__ = this;
var ___$1 = this;
return "Ampere Om Wrapper";
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.prototype.om$core$IWillReceiveProps$ = true;

ampere.om.t_ampere$om15668.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__15667,f,cursor,m,subs){
return (function (_,p__15671){
var self__ = this;
var vec__15672 = p__15671;
var ___$1 = cljs.core.nth.call(null,vec__15672,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__15672,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__15672,(2),null);
var next_subs = cljs.core.nth.call(null,vec__15672,(3),null);
var ___$4 = this;
var subs__$1 = om.core.get_props.call(null,self__.owner,(3));
if(cljs.core.not_EQ_.call(null,subs__$1,next_subs)){
var s1 = cljs.core.set.call(null,cljs.core.vals.call(null,subs__$1));
var s2 = cljs.core.set.call(null,cljs.core.vals.call(null,next_subs));
var garbage = clojure.set.difference.call(null,s1,s2);
var seq__15673 = cljs.core.seq.call(null,garbage);
var chunk__15674 = null;
var count__15675 = (0);
var i__15676 = (0);
while(true){
if((i__15676 < count__15675)){
var v = cljs.core._nth.call(null,chunk__15674,i__15676);
ampere.om.unsub.call(null,self__.owner,v);

var G__15677 = seq__15673;
var G__15678 = chunk__15674;
var G__15679 = count__15675;
var G__15680 = (i__15676 + (1));
seq__15673 = G__15677;
chunk__15674 = G__15678;
count__15675 = G__15679;
i__15676 = G__15680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15673);
if(temp__4425__auto__){
var seq__15673__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15673__$1)){
var c__5365__auto__ = cljs.core.chunk_first.call(null,seq__15673__$1);
var G__15681 = cljs.core.chunk_rest.call(null,seq__15673__$1);
var G__15682 = c__5365__auto__;
var G__15683 = cljs.core.count.call(null,c__5365__auto__);
var G__15684 = (0);
seq__15673 = G__15681;
chunk__15674 = G__15682;
count__15675 = G__15683;
i__15676 = G__15684;
continue;
} else {
var v = cljs.core.first.call(null,seq__15673__$1);
ampere.om.unsub.call(null,self__.owner,v);

var G__15685 = cljs.core.next.call(null,seq__15673__$1);
var G__15686 = null;
var G__15687 = (0);
var G__15688 = (0);
seq__15673 = G__15685;
chunk__15674 = G__15686;
count__15675 = G__15687;
i__15676 = G__15688;
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
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.prototype.om$core$IRender$ = true;

ampere.om.t_ampere$om15668.prototype.om$core$IRender$render$arity$1 = ((function (vec__15667,f,cursor,m,subs){
return (function (_){
var self__ = this;
var ___$1 = this;
var rx = ampere.utils.map_vals.call(null,cljs.core.partial.call(null,ampere.om.observe,self__.owner),self__.subs);
return om.core.build_STAR_.call(null,self__.f,cljs.core.merge.call(null,self__.cursor,rx),self__.m);
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.getBasis = ((function (vec__15667,f,cursor,m,subs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"Wrapper","Wrapper",475842260,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper component that tracks reactions and rerender `f` wrappee on their run\n   with their values merged into cursor.\n   E. g. `{:opts {:subs {:x [:sub-id1 params] :y [:sub-id2 params}}}`\n   will inject `{:x @x-reaction :y @y-reaction}` into `f` props."], null)),new cljs.core.Symbol(null,"p__15656","p__15656",995812883,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__15667","vec__15667",-1380924987,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"meta15669","meta15669",227670967,null)], null);
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.t_ampere$om15668.cljs$lang$type = true;

ampere.om.t_ampere$om15668.cljs$lang$ctorStr = "ampere.om/t_ampere$om15668";

ampere.om.t_ampere$om15668.cljs$lang$ctorPrWriter = ((function (vec__15667,f,cursor,m,subs){
return (function (this__5160__auto__,writer__5161__auto__,opt__5162__auto__){
return cljs.core._write.call(null,writer__5161__auto__,"ampere.om/t_ampere$om15668");
});})(vec__15667,f,cursor,m,subs))
;

ampere.om.__GT_t_ampere$om15668 = ((function (vec__15667,f,cursor,m,subs){
return (function ampere$om$Wrapper_$___GT_t_ampere$om15668(Wrapper__$1,p__15656__$1,owner__$1,vec__15667__$1,f__$1,cursor__$1,m__$1,subs__$1,meta15669){
return (new ampere.om.t_ampere$om15668(Wrapper__$1,p__15656__$1,owner__$1,vec__15667__$1,f__$1,cursor__$1,m__$1,subs__$1,meta15669));
});})(vec__15667,f,cursor,m,subs))
;

}

return (new ampere.om.t_ampere$om15668(ampere$om$Wrapper,p__15656,owner,vec__15667,f,cursor,m,subs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Add this as `:instrument` in `om/root` options to enable components having
 *   `:subs` in their `:opts` to subscribe to derived data & merge it into props
 *   or calling `(ampere.om/observe owner ^{:key optional-key-if-sub-is-dynamic} subscription-vector)`
 *   inside render to track subscription.
 *   It uses `ampere/subscribe` in more om-ish way.
 */
ampere.om.instrument = (function ampere$om$instrument(f,cursor,m){
var temp__4423__auto__ = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"subs","subs",-186681991)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var subs = temp__4423__auto__;
return om.core.build_STAR_.call(null,ampere.om.Wrapper,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc,new cljs.core.Keyword(null,"subs","subs",-186681991)),subs], null));
} else {
return new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268);
}
});
ampere.om.init_BANG_ = (function ampere$om$init_BANG_(){
return ampere.router._STAR_flush_dom_STAR_ = om.core.render_all;
});

//# sourceMappingURL=om.js.map?rel=1440417684353