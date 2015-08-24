// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.reagent');
goog.require('cljs.core');
goog.require('ampere.router');
goog.require('ampere.core');
goog.require('freactive.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
ampere.reagent.subscribe = (function ampere$reagent$subscribe(v){
var sub = ampere.core.subscribe.call(null,v);
var a = reagent.core.atom.call(null,cljs.core.deref.call(null,sub));
var id = cljs.core.gensym.call(null);
sub.addInvalidationWatch(id,((function (sub,a,id){
return (function (){
return cljs.core.reset_BANG_.call(null,a,sub.rawDeref());
});})(sub,a,id))
);

return reagent.ratom.make_reaction.call(null,((function (sub,a,id){
return (function (){
return cljs.core.deref.call(null,a);
});})(sub,a,id))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (sub,a,id){
return (function (){
sub.removeInvalidationWatch(id);

return freactive.core.dispose.call(null,sub);
});})(sub,a,id))
);
});
ampere.reagent.init_BANG_ = (function ampere$reagent$init_BANG_(){
return ampere.router._STAR_flush_dom_STAR_ = reagent.core.flush;
});

//# sourceMappingURL=reagent.js.map?rel=1440417679758