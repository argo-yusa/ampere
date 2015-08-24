// Compiled by ClojureScript 1.7.107 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17025__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17024 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17024,(0),null);
var body = cljs.core.nthnext.call(null,vec__17024,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17026__i = 0, G__17026__a = new Array(arguments.length -  0);
while (G__17026__i < G__17026__a.length) {G__17026__a[G__17026__i] = arguments[G__17026__i + 0]; ++G__17026__i;}
  args = new cljs.core.IndexedSeq(G__17026__a,0);
} 
return G__17025__delegate.call(this,args);};
G__17025.cljs$lang$maxFixedArity = 0;
G__17025.cljs$lang$applyTo = (function (arglist__17027){
var args = cljs.core.seq(arglist__17027);
return G__17025__delegate(args);
});
G__17025.cljs$core$IFn$_invoke$arity$variadic = G__17025__delegate;
return G__17025;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5334__auto__ = (function sablono$core$update_arglists_$_iter__17032(s__17033){
return (new cljs.core.LazySeq(null,(function (){
var s__17033__$1 = s__17033;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17033__$1);
if(temp__4425__auto__){
var s__17033__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17033__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17033__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17035 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17034 = (0);
while(true){
if((i__17034 < size__5333__auto__)){
var args = cljs.core._nth.call(null,c__5332__auto__,i__17034);
cljs.core.chunk_append.call(null,b__17035,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17036 = (i__17034 + (1));
i__17034 = G__17036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17035),sablono$core$update_arglists_$_iter__17032.call(null,cljs.core.chunk_rest.call(null,s__17033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17035),null);
}
} else {
var args = cljs.core.first.call(null,s__17033__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17032.call(null,cljs.core.rest.call(null,s__17033__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17042 = arguments.length;
var i__5621__auto___17043 = (0);
while(true){
if((i__5621__auto___17043 < len__5620__auto___17042)){
args__5627__auto__.push((arguments[i__5621__auto___17043]));

var G__17044 = (i__5621__auto___17043 + (1));
i__5621__auto___17043 = G__17044;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5334__auto__ = (function sablono$core$iter__17038(s__17039){
return (new cljs.core.LazySeq(null,(function (){
var s__17039__$1 = s__17039;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17039__$1);
if(temp__4425__auto__){
var s__17039__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17039__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17039__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17041 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17040 = (0);
while(true){
if((i__17040 < size__5333__auto__)){
var style = cljs.core._nth.call(null,c__5332__auto__,i__17040);
cljs.core.chunk_append.call(null,b__17041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17045 = (i__17040 + (1));
i__17040 = G__17045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17041),sablono$core$iter__17038.call(null,cljs.core.chunk_rest.call(null,s__17039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17041),null);
}
} else {
var style = cljs.core.first.call(null,s__17039__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17038.call(null,cljs.core.rest.call(null,s__17039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17037){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17037));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17046 = (function sablono$core$link_to17046(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17049 = arguments.length;
var i__5621__auto___17050 = (0);
while(true){
if((i__5621__auto___17050 < len__5620__auto___17049)){
args__5627__auto__.push((arguments[i__5621__auto___17050]));

var G__17051 = (i__5621__auto___17050 + (1));
i__5621__auto___17050 = G__17051;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return sablono.core.link_to17046.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

sablono.core.link_to17046.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17046.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17046.cljs$lang$applyTo = (function (seq17047){
var G__17048 = cljs.core.first.call(null,seq17047);
var seq17047__$1 = cljs.core.next.call(null,seq17047);
return sablono.core.link_to17046.cljs$core$IFn$_invoke$arity$variadic(G__17048,seq17047__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17046);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17052 = (function sablono$core$mail_to17052(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17057 = arguments.length;
var i__5621__auto___17058 = (0);
while(true){
if((i__5621__auto___17058 < len__5620__auto___17057)){
args__5627__auto__.push((arguments[i__5621__auto___17058]));

var G__17059 = (i__5621__auto___17058 + (1));
i__5621__auto___17058 = G__17059;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17052.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

sablono.core.mail_to17052.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17055){
var vec__17056 = p__17055;
var content = cljs.core.nth.call(null,vec__17056,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4562__auto__ = content;
if(cljs.core.truth_(or__4562__auto__)){
return or__4562__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17052.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17052.cljs$lang$applyTo = (function (seq17053){
var G__17054 = cljs.core.first.call(null,seq17053);
var seq17053__$1 = cljs.core.next.call(null,seq17053);
return sablono.core.mail_to17052.cljs$core$IFn$_invoke$arity$variadic(G__17054,seq17053__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17052);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17060 = (function sablono$core$unordered_list17060(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5334__auto__ = (function sablono$core$unordered_list17060_$_iter__17065(s__17066){
return (new cljs.core.LazySeq(null,(function (){
var s__17066__$1 = s__17066;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17066__$1);
if(temp__4425__auto__){
var s__17066__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17066__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17066__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17068 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17067 = (0);
while(true){
if((i__17067 < size__5333__auto__)){
var x = cljs.core._nth.call(null,c__5332__auto__,i__17067);
cljs.core.chunk_append.call(null,b__17068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17069 = (i__17067 + (1));
i__17067 = G__17069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17068),sablono$core$unordered_list17060_$_iter__17065.call(null,cljs.core.chunk_rest.call(null,s__17066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17068),null);
}
} else {
var x = cljs.core.first.call(null,s__17066__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17060_$_iter__17065.call(null,cljs.core.rest.call(null,s__17066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17060);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17070 = (function sablono$core$ordered_list17070(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5334__auto__ = (function sablono$core$ordered_list17070_$_iter__17075(s__17076){
return (new cljs.core.LazySeq(null,(function (){
var s__17076__$1 = s__17076;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17076__$1);
if(temp__4425__auto__){
var s__17076__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17076__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17076__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17078 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17077 = (0);
while(true){
if((i__17077 < size__5333__auto__)){
var x = cljs.core._nth.call(null,c__5332__auto__,i__17077);
cljs.core.chunk_append.call(null,b__17078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17079 = (i__17077 + (1));
i__17077 = G__17079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),sablono$core$ordered_list17070_$_iter__17075.call(null,cljs.core.chunk_rest.call(null,s__17076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),null);
}
} else {
var x = cljs.core.first.call(null,s__17076__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17070_$_iter__17075.call(null,cljs.core.rest.call(null,s__17076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17070);
/**
 * Create an image element.
 */
sablono.core.image17080 = (function sablono$core$image17080(var_args){
var args17081 = [];
var len__5620__auto___17084 = arguments.length;
var i__5621__auto___17085 = (0);
while(true){
if((i__5621__auto___17085 < len__5620__auto___17084)){
args17081.push((arguments[i__5621__auto___17085]));

var G__17086 = (i__5621__auto___17085 + (1));
i__5621__auto___17085 = G__17086;
continue;
} else {
}
break;
}

var G__17083 = args17081.length;
switch (G__17083) {
case 1:
return sablono.core.image17080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17081.length)].join('')));

}
});

sablono.core.image17080.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17080.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17080.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17080);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17088_SHARP_,p2__17089_SHARP_){
return [cljs.core.str(p1__17088_SHARP_),cljs.core.str("["),cljs.core.str(p2__17089_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17090_SHARP_,p2__17091_SHARP_){
return [cljs.core.str(p1__17090_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17091_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17092 = (function sablono$core$color_field17092(var_args){
var args17093 = [];
var len__5620__auto___17160 = arguments.length;
var i__5621__auto___17161 = (0);
while(true){
if((i__5621__auto___17161 < len__5620__auto___17160)){
args17093.push((arguments[i__5621__auto___17161]));

var G__17162 = (i__5621__auto___17161 + (1));
i__5621__auto___17161 = G__17162;
continue;
} else {
}
break;
}

var G__17095 = args17093.length;
switch (G__17095) {
case 1:
return sablono.core.color_field17092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17093.length)].join('')));

}
});

sablono.core.color_field17092.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.color_field17092.call(null,name__11718__auto__,null);
});

sablono.core.color_field17092.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.color_field17092.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17092);

/**
 * Creates a date input field.
 */
sablono.core.date_field17096 = (function sablono$core$date_field17096(var_args){
var args17097 = [];
var len__5620__auto___17164 = arguments.length;
var i__5621__auto___17165 = (0);
while(true){
if((i__5621__auto___17165 < len__5620__auto___17164)){
args17097.push((arguments[i__5621__auto___17165]));

var G__17166 = (i__5621__auto___17165 + (1));
i__5621__auto___17165 = G__17166;
continue;
} else {
}
break;
}

var G__17099 = args17097.length;
switch (G__17099) {
case 1:
return sablono.core.date_field17096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17097.length)].join('')));

}
});

sablono.core.date_field17096.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.date_field17096.call(null,name__11718__auto__,null);
});

sablono.core.date_field17096.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.date_field17096.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17096);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17100 = (function sablono$core$datetime_field17100(var_args){
var args17101 = [];
var len__5620__auto___17168 = arguments.length;
var i__5621__auto___17169 = (0);
while(true){
if((i__5621__auto___17169 < len__5620__auto___17168)){
args17101.push((arguments[i__5621__auto___17169]));

var G__17170 = (i__5621__auto___17169 + (1));
i__5621__auto___17169 = G__17170;
continue;
} else {
}
break;
}

var G__17103 = args17101.length;
switch (G__17103) {
case 1:
return sablono.core.datetime_field17100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17101.length)].join('')));

}
});

sablono.core.datetime_field17100.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.datetime_field17100.call(null,name__11718__auto__,null);
});

sablono.core.datetime_field17100.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.datetime_field17100.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17100);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17104 = (function sablono$core$datetime_local_field17104(var_args){
var args17105 = [];
var len__5620__auto___17172 = arguments.length;
var i__5621__auto___17173 = (0);
while(true){
if((i__5621__auto___17173 < len__5620__auto___17172)){
args17105.push((arguments[i__5621__auto___17173]));

var G__17174 = (i__5621__auto___17173 + (1));
i__5621__auto___17173 = G__17174;
continue;
} else {
}
break;
}

var G__17107 = args17105.length;
switch (G__17107) {
case 1:
return sablono.core.datetime_local_field17104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17105.length)].join('')));

}
});

sablono.core.datetime_local_field17104.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.datetime_local_field17104.call(null,name__11718__auto__,null);
});

sablono.core.datetime_local_field17104.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.datetime_local_field17104.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17104);

/**
 * Creates a email input field.
 */
sablono.core.email_field17108 = (function sablono$core$email_field17108(var_args){
var args17109 = [];
var len__5620__auto___17176 = arguments.length;
var i__5621__auto___17177 = (0);
while(true){
if((i__5621__auto___17177 < len__5620__auto___17176)){
args17109.push((arguments[i__5621__auto___17177]));

var G__17178 = (i__5621__auto___17177 + (1));
i__5621__auto___17177 = G__17178;
continue;
} else {
}
break;
}

var G__17111 = args17109.length;
switch (G__17111) {
case 1:
return sablono.core.email_field17108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17109.length)].join('')));

}
});

sablono.core.email_field17108.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.email_field17108.call(null,name__11718__auto__,null);
});

sablono.core.email_field17108.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.email_field17108.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17108);

/**
 * Creates a file input field.
 */
sablono.core.file_field17112 = (function sablono$core$file_field17112(var_args){
var args17113 = [];
var len__5620__auto___17180 = arguments.length;
var i__5621__auto___17181 = (0);
while(true){
if((i__5621__auto___17181 < len__5620__auto___17180)){
args17113.push((arguments[i__5621__auto___17181]));

var G__17182 = (i__5621__auto___17181 + (1));
i__5621__auto___17181 = G__17182;
continue;
} else {
}
break;
}

var G__17115 = args17113.length;
switch (G__17115) {
case 1:
return sablono.core.file_field17112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17113.length)].join('')));

}
});

sablono.core.file_field17112.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.file_field17112.call(null,name__11718__auto__,null);
});

sablono.core.file_field17112.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.file_field17112.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17112);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17116 = (function sablono$core$hidden_field17116(var_args){
var args17117 = [];
var len__5620__auto___17184 = arguments.length;
var i__5621__auto___17185 = (0);
while(true){
if((i__5621__auto___17185 < len__5620__auto___17184)){
args17117.push((arguments[i__5621__auto___17185]));

var G__17186 = (i__5621__auto___17185 + (1));
i__5621__auto___17185 = G__17186;
continue;
} else {
}
break;
}

var G__17119 = args17117.length;
switch (G__17119) {
case 1:
return sablono.core.hidden_field17116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17117.length)].join('')));

}
});

sablono.core.hidden_field17116.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.hidden_field17116.call(null,name__11718__auto__,null);
});

sablono.core.hidden_field17116.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.hidden_field17116.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17116);

/**
 * Creates a month input field.
 */
sablono.core.month_field17120 = (function sablono$core$month_field17120(var_args){
var args17121 = [];
var len__5620__auto___17188 = arguments.length;
var i__5621__auto___17189 = (0);
while(true){
if((i__5621__auto___17189 < len__5620__auto___17188)){
args17121.push((arguments[i__5621__auto___17189]));

var G__17190 = (i__5621__auto___17189 + (1));
i__5621__auto___17189 = G__17190;
continue;
} else {
}
break;
}

var G__17123 = args17121.length;
switch (G__17123) {
case 1:
return sablono.core.month_field17120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17121.length)].join('')));

}
});

sablono.core.month_field17120.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.month_field17120.call(null,name__11718__auto__,null);
});

sablono.core.month_field17120.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.month_field17120.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17120);

/**
 * Creates a number input field.
 */
sablono.core.number_field17124 = (function sablono$core$number_field17124(var_args){
var args17125 = [];
var len__5620__auto___17192 = arguments.length;
var i__5621__auto___17193 = (0);
while(true){
if((i__5621__auto___17193 < len__5620__auto___17192)){
args17125.push((arguments[i__5621__auto___17193]));

var G__17194 = (i__5621__auto___17193 + (1));
i__5621__auto___17193 = G__17194;
continue;
} else {
}
break;
}

var G__17127 = args17125.length;
switch (G__17127) {
case 1:
return sablono.core.number_field17124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17125.length)].join('')));

}
});

sablono.core.number_field17124.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.number_field17124.call(null,name__11718__auto__,null);
});

sablono.core.number_field17124.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.number_field17124.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17124);

/**
 * Creates a password input field.
 */
sablono.core.password_field17128 = (function sablono$core$password_field17128(var_args){
var args17129 = [];
var len__5620__auto___17196 = arguments.length;
var i__5621__auto___17197 = (0);
while(true){
if((i__5621__auto___17197 < len__5620__auto___17196)){
args17129.push((arguments[i__5621__auto___17197]));

var G__17198 = (i__5621__auto___17197 + (1));
i__5621__auto___17197 = G__17198;
continue;
} else {
}
break;
}

var G__17131 = args17129.length;
switch (G__17131) {
case 1:
return sablono.core.password_field17128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17129.length)].join('')));

}
});

sablono.core.password_field17128.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.password_field17128.call(null,name__11718__auto__,null);
});

sablono.core.password_field17128.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.password_field17128.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17128);

/**
 * Creates a range input field.
 */
sablono.core.range_field17132 = (function sablono$core$range_field17132(var_args){
var args17133 = [];
var len__5620__auto___17200 = arguments.length;
var i__5621__auto___17201 = (0);
while(true){
if((i__5621__auto___17201 < len__5620__auto___17200)){
args17133.push((arguments[i__5621__auto___17201]));

var G__17202 = (i__5621__auto___17201 + (1));
i__5621__auto___17201 = G__17202;
continue;
} else {
}
break;
}

var G__17135 = args17133.length;
switch (G__17135) {
case 1:
return sablono.core.range_field17132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17133.length)].join('')));

}
});

sablono.core.range_field17132.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.range_field17132.call(null,name__11718__auto__,null);
});

sablono.core.range_field17132.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.range_field17132.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17132);

/**
 * Creates a search input field.
 */
sablono.core.search_field17136 = (function sablono$core$search_field17136(var_args){
var args17137 = [];
var len__5620__auto___17204 = arguments.length;
var i__5621__auto___17205 = (0);
while(true){
if((i__5621__auto___17205 < len__5620__auto___17204)){
args17137.push((arguments[i__5621__auto___17205]));

var G__17206 = (i__5621__auto___17205 + (1));
i__5621__auto___17205 = G__17206;
continue;
} else {
}
break;
}

var G__17139 = args17137.length;
switch (G__17139) {
case 1:
return sablono.core.search_field17136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17137.length)].join('')));

}
});

sablono.core.search_field17136.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.search_field17136.call(null,name__11718__auto__,null);
});

sablono.core.search_field17136.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.search_field17136.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17136);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17140 = (function sablono$core$tel_field17140(var_args){
var args17141 = [];
var len__5620__auto___17208 = arguments.length;
var i__5621__auto___17209 = (0);
while(true){
if((i__5621__auto___17209 < len__5620__auto___17208)){
args17141.push((arguments[i__5621__auto___17209]));

var G__17210 = (i__5621__auto___17209 + (1));
i__5621__auto___17209 = G__17210;
continue;
} else {
}
break;
}

var G__17143 = args17141.length;
switch (G__17143) {
case 1:
return sablono.core.tel_field17140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17141.length)].join('')));

}
});

sablono.core.tel_field17140.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.tel_field17140.call(null,name__11718__auto__,null);
});

sablono.core.tel_field17140.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.tel_field17140.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17140);

/**
 * Creates a text input field.
 */
sablono.core.text_field17144 = (function sablono$core$text_field17144(var_args){
var args17145 = [];
var len__5620__auto___17212 = arguments.length;
var i__5621__auto___17213 = (0);
while(true){
if((i__5621__auto___17213 < len__5620__auto___17212)){
args17145.push((arguments[i__5621__auto___17213]));

var G__17214 = (i__5621__auto___17213 + (1));
i__5621__auto___17213 = G__17214;
continue;
} else {
}
break;
}

var G__17147 = args17145.length;
switch (G__17147) {
case 1:
return sablono.core.text_field17144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17145.length)].join('')));

}
});

sablono.core.text_field17144.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.text_field17144.call(null,name__11718__auto__,null);
});

sablono.core.text_field17144.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.text_field17144.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17144);

/**
 * Creates a time input field.
 */
sablono.core.time_field17148 = (function sablono$core$time_field17148(var_args){
var args17149 = [];
var len__5620__auto___17216 = arguments.length;
var i__5621__auto___17217 = (0);
while(true){
if((i__5621__auto___17217 < len__5620__auto___17216)){
args17149.push((arguments[i__5621__auto___17217]));

var G__17218 = (i__5621__auto___17217 + (1));
i__5621__auto___17217 = G__17218;
continue;
} else {
}
break;
}

var G__17151 = args17149.length;
switch (G__17151) {
case 1:
return sablono.core.time_field17148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17149.length)].join('')));

}
});

sablono.core.time_field17148.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.time_field17148.call(null,name__11718__auto__,null);
});

sablono.core.time_field17148.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.time_field17148.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17148);

/**
 * Creates a url input field.
 */
sablono.core.url_field17152 = (function sablono$core$url_field17152(var_args){
var args17153 = [];
var len__5620__auto___17220 = arguments.length;
var i__5621__auto___17221 = (0);
while(true){
if((i__5621__auto___17221 < len__5620__auto___17220)){
args17153.push((arguments[i__5621__auto___17221]));

var G__17222 = (i__5621__auto___17221 + (1));
i__5621__auto___17221 = G__17222;
continue;
} else {
}
break;
}

var G__17155 = args17153.length;
switch (G__17155) {
case 1:
return sablono.core.url_field17152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17153.length)].join('')));

}
});

sablono.core.url_field17152.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.url_field17152.call(null,name__11718__auto__,null);
});

sablono.core.url_field17152.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.url_field17152.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17152);

/**
 * Creates a week input field.
 */
sablono.core.week_field17156 = (function sablono$core$week_field17156(var_args){
var args17157 = [];
var len__5620__auto___17224 = arguments.length;
var i__5621__auto___17225 = (0);
while(true){
if((i__5621__auto___17225 < len__5620__auto___17224)){
args17157.push((arguments[i__5621__auto___17225]));

var G__17226 = (i__5621__auto___17225 + (1));
i__5621__auto___17225 = G__17226;
continue;
} else {
}
break;
}

var G__17159 = args17157.length;
switch (G__17159) {
case 1:
return sablono.core.week_field17156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17157.length)].join('')));

}
});

sablono.core.week_field17156.cljs$core$IFn$_invoke$arity$1 = (function (name__11718__auto__){
return sablono.core.week_field17156.call(null,name__11718__auto__,null);
});

sablono.core.week_field17156.cljs$core$IFn$_invoke$arity$2 = (function (name__11718__auto__,value__11719__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11718__auto__,value__11719__auto__);
});

sablono.core.week_field17156.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17156);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17228 = (function sablono$core$check_box17228(var_args){
var args17229 = [];
var len__5620__auto___17232 = arguments.length;
var i__5621__auto___17233 = (0);
while(true){
if((i__5621__auto___17233 < len__5620__auto___17232)){
args17229.push((arguments[i__5621__auto___17233]));

var G__17234 = (i__5621__auto___17233 + (1));
i__5621__auto___17233 = G__17234;
continue;
} else {
}
break;
}

var G__17231 = args17229.length;
switch (G__17231) {
case 1:
return sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17229.length)].join('')));

}
});

sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17228.call(null,name,null);
});

sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17228.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17228.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17228.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17228);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17236 = (function sablono$core$radio_button17236(var_args){
var args17237 = [];
var len__5620__auto___17240 = arguments.length;
var i__5621__auto___17241 = (0);
while(true){
if((i__5621__auto___17241 < len__5620__auto___17240)){
args17237.push((arguments[i__5621__auto___17241]));

var G__17242 = (i__5621__auto___17241 + (1));
i__5621__auto___17241 = G__17242;
continue;
} else {
}
break;
}

var G__17239 = args17237.length;
switch (G__17239) {
case 1:
return sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17237.length)].join('')));

}
});

sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17236.call(null,group,null);
});

sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17236.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17236.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17236.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17236);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17244 = (function sablono$core$select_options17244(coll){
var iter__5334__auto__ = (function sablono$core$select_options17244_$_iter__17253(s__17254){
return (new cljs.core.LazySeq(null,(function (){
var s__17254__$1 = s__17254;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17254__$1);
if(temp__4425__auto__){
var s__17254__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17254__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__17254__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__17256 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__17255 = (0);
while(true){
if((i__17255 < size__5333__auto__)){
var x = cljs.core._nth.call(null,c__5332__auto__,i__17255);
cljs.core.chunk_append.call(null,b__17256,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17259 = x;
var text = cljs.core.nth.call(null,vec__17259,(0),null);
var val = cljs.core.nth.call(null,vec__17259,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17259,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17244.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17261 = (i__17255 + (1));
i__17255 = G__17261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17256),sablono$core$select_options17244_$_iter__17253.call(null,cljs.core.chunk_rest.call(null,s__17254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17256),null);
}
} else {
var x = cljs.core.first.call(null,s__17254__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17260 = x;
var text = cljs.core.nth.call(null,vec__17260,(0),null);
var val = cljs.core.nth.call(null,vec__17260,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17260,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17244.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17244_$_iter__17253.call(null,cljs.core.rest.call(null,s__17254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17244);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17262 = (function sablono$core$drop_down17262(var_args){
var args17263 = [];
var len__5620__auto___17266 = arguments.length;
var i__5621__auto___17267 = (0);
while(true){
if((i__5621__auto___17267 < len__5620__auto___17266)){
args17263.push((arguments[i__5621__auto___17267]));

var G__17268 = (i__5621__auto___17267 + (1));
i__5621__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var G__17265 = args17263.length;
switch (G__17265) {
case 2:
return sablono.core.drop_down17262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17262.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17263.length)].join('')));

}
});

sablono.core.drop_down17262.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17262.call(null,name,options,null);
});

sablono.core.drop_down17262.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17262.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17262);
/**
 * Creates a text area element.
 */
sablono.core.text_area17270 = (function sablono$core$text_area17270(var_args){
var args17271 = [];
var len__5620__auto___17274 = arguments.length;
var i__5621__auto___17275 = (0);
while(true){
if((i__5621__auto___17275 < len__5620__auto___17274)){
args17271.push((arguments[i__5621__auto___17275]));

var G__17276 = (i__5621__auto___17275 + (1));
i__5621__auto___17275 = G__17276;
continue;
} else {
}
break;
}

var G__17273 = args17271.length;
switch (G__17273) {
case 1:
return sablono.core.text_area17270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17271.length)].join('')));

}
});

sablono.core.text_area17270.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17270.call(null,name,null);
});

sablono.core.text_area17270.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17270.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17270);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17278 = (function sablono$core$label17278(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17278);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17279 = (function sablono$core$submit_button17279(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17279);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17280 = (function sablono$core$reset_button17280(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17280);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17281 = (function sablono$core$form_to17281(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17286 = arguments.length;
var i__5621__auto___17287 = (0);
while(true){
if((i__5621__auto___17287 < len__5620__auto___17286)){
args__5627__auto__.push((arguments[i__5621__auto___17287]));

var G__17288 = (i__5621__auto___17287 + (1));
i__5621__auto___17287 = G__17288;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic = (function (p__17284,body){
var vec__17285 = p__17284;
var method = cljs.core.nth.call(null,vec__17285,(0),null);
var action = cljs.core.nth.call(null,vec__17285,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17281.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17281.cljs$lang$applyTo = (function (seq17282){
var G__17283 = cljs.core.first.call(null,seq17282);
var seq17282__$1 = cljs.core.next.call(null,seq17282);
return sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic(G__17283,seq17282__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17281);

//# sourceMappingURL=core.js.map?rel=1440417687389