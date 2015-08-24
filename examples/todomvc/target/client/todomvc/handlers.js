// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.handlers');
goog.require('cljs.core');
goog.require('todomvc.db');
goog.require('ampere.core');
todomvc.handlers.__GT_ls = ampere.core.after.call(null,todomvc.db.todos__GT_ls_BANG_);
todomvc.handlers.todo_middleware = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ampere.core.path.call(null,new cljs.core.Keyword(null,"todos","todos",630308868)),todomvc.handlers.__GT_ls,ampere.core.trim_v], null);
todomvc.handlers.next_id = (function todomvc$handlers$next_id(todos){
return cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.last.call(null,cljs.core.keys.call(null,todos)));
});
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return cljs.core.merge.call(null,todomvc.db.default_value,todomvc.db.ls__GT_todos.call(null));
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ampere.core.path.call(null,new cljs.core.Keyword(null,"showing","showing",798009604)),ampere.core.trim_v], null),(function (old_kw,p__9759){
var vec__9760 = p__9759;
var new_filter_kw = cljs.core.nth.call(null,vec__9760,(0),null);
return new_filter_kw;
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),todomvc.handlers.todo_middleware,(function (todos,p__9761){
var vec__9762 = p__9761;
var text = cljs.core.nth.call(null,vec__9762,(0),null);
var id = todomvc.handlers.next_id.call(null,todos);
return cljs.core.assoc.call(null,todos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),todomvc.handlers.todo_middleware,(function (todos,p__9763){
var vec__9764 = p__9763;
var id = cljs.core.nth.call(null,vec__9764,(0),null);
return cljs.core.update_in.call(null,todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"save","save",1850079149),todomvc.handlers.todo_middleware,(function (todos,p__9765){
var vec__9766 = p__9765;
var id = cljs.core.nth.call(null,vec__9766,(0),null);
var title = cljs.core.nth.call(null,vec__9766,(1),null);
return cljs.core.assoc_in.call(null,todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),todomvc.handlers.todo_middleware,(function (todos,p__9767){
var vec__9768 = p__9767;
var id = cljs.core.nth.call(null,vec__9768,(0),null);
return cljs.core.dissoc.call(null,todos,id);
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),todomvc.handlers.todo_middleware,(function (todos,_){
return cljs.core.reduce.call(null,cljs.core.dissoc,todos,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals.call(null,todos))));
}));
ampere.core.register_handler.call(null,new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156),todomvc.handlers.todo_middleware,(function (todos){
var new_done = cljs.core.not_every_QMARK_.call(null,new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals.call(null,todos));
return cljs.core.reduce.call(null,((function (new_done){
return (function (p1__9769_SHARP_,p2__9770_SHARP_){
return cljs.core.assoc_in.call(null,p1__9769_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__9770_SHARP_,new cljs.core.Keyword(null,"done","done",-889844188)], null),new_done);
});})(new_done))
,todos,cljs.core.keys.call(null,todos));
}));

//# sourceMappingURL=handlers.js.map?rel=1440417676655