// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.db');
goog.require('cljs.core');
goog.require('cljs.reader');
todomvc.db.default_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"all","all",892129742)], null);
todomvc.db.lsk = "todos-ampere";
/**
 * Read in todos from LS, and process into a form we can merge into app-db.
 */
todomvc.db.ls__GT_todos = (function todomvc$db$ls__GT_todos(){
var G__5709 = localStorage.getItem(todomvc.db.lsk);
var G__5709__$1 = (((G__5709 == null))?null:cljs.reader.read_string.call(null,G__5709));
var G__5709__$2 = (((G__5709__$1 == null))?null:cljs.core.into.call(null,cljs.core.sorted_map.call(null),G__5709__$1));
var G__5709__$3 = (((G__5709__$2 == null))?null:cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"todos","todos",630308868)],[G__5709__$2]));
return G__5709__$3;
});
todomvc.db.todos__GT_ls_BANG_ = (function todomvc$db$todos__GT_ls_BANG_(todos){
return localStorage.setItem(todomvc.db.lsk,[cljs.core.str(todos)].join(''));
});

//# sourceMappingURL=db.js.map?rel=1440417672630