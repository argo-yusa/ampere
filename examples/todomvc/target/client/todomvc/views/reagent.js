// Compiled by ClojureScript 1.7.107 {}
goog.provide('todomvc.views.reagent');
goog.require('cljs.core');
goog.require('ampere.core');
goog.require('ampere.reagent');
goog.require('reagent.core');
todomvc.views.reagent.todo_input = (function todomvc$views$reagent$todo_input(p__9996){
var map__10000 = p__9996;
var map__10000__$1 = ((((!((map__10000 == null)))?((((map__10000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10000):map__10000);
var title = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__10000,map__10000__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(val,map__10000,map__10000__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__10000,map__10000__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,val))].join(''));
if(!(cljs.core.empty_QMARK_.call(null,v))){
on_save.call(null,v);
} else {
}

return stop.call(null);
});})(val,stop,map__10000,map__10000__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop){
return (function (p1__9994_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__9994_SHARP_.target.value);
});})(val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop){
return (function (p1__9995_SHARP_){
var G__10002 = p1__9995_SHARP_.which;
switch (G__10002) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop))
], null))], null);
});
;})(val,stop,save,map__10000,map__10000__$1,title,on_save,on_stop))
});
todomvc.views.reagent.todo_edit = cljs.core.with_meta.call(null,todomvc.views.reagent.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__10004_SHARP_){
return reagent.core.dom_node.call(null,p1__10004_SHARP_).focus();
})], null));
todomvc.views.reagent.stats_footer = (function todomvc$views$reagent$stats_footer(){
var footer_stats = ampere.reagent.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer-stats","footer-stats",1851278595)], null));
return ((function (footer_stats){
return (function (){
var vec__10007 = cljs.core.deref.call(null,footer_stats);
var active = cljs.core.nth.call(null,vec__10007,(0),null);
var done = cljs.core.nth.call(null,vec__10007,(1),null);
var filter = cljs.core.nth.call(null,vec__10007,(2),null);
var props_for = ((function (vec__10007,active,done,filter,footer_stats){
return (function (filter_kw,txt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,filter_kw,filter))?"selected":null),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/"),cljs.core.str(cljs.core.name.call(null,filter_kw))].join('')], null),txt], null);
});})(vec__10007,active,done,filter,footer_stats))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__10008 = active;
switch (G__10008) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742),"All")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068),"Active")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188),"Completed")], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__10007,active,done,filter,props_for,footer_stats){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)], null));
});})(vec__10007,active,done,filter,props_for,footer_stats))
], null),"Clear completed ",done], null):null)], null)], null);
});
;})(footer_stats))
});
todomvc.views.reagent.todo_item = (function todomvc$views$reagent$todo_item(){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (p__10014){
var map__10015 = p__10014;
var map__10015__$1 = ((((!((map__10015 == null)))?((((map__10015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10015):map__10015);
var id = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(done)?"completed ":null)),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10015,map__10015__$1,id,done,title,editing){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),id], null));
});})(map__10015,map__10015__$1,id,done,title,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__10015,map__10015__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__10015,map__10015__$1,id,done,title,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10015,map__10015__$1,id,done,title,editing){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),id], null));
});})(map__10015,map__10015__$1,id,done,title,editing))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__10015,map__10015__$1,id,done,title,editing){
return (function (p1__10010_SHARP_){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),id,p1__10010_SHARP_], null));
});})(map__10015,map__10015__$1,id,done,title,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__10015,map__10015__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__10015,map__10015__$1,id,done,title,editing))
], null)], null):null)], null);
});
;})(editing))
});
todomvc.views.reagent.todo_list = (function todomvc$views$reagent$todo_list(visible_todos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__5334__auto__ = (function todomvc$views$reagent$todo_list_$_iter__10021(s__10022){
return (new cljs.core.LazySeq(null,(function (){
var s__10022__$1 = s__10022;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10022__$1);
if(temp__4425__auto__){
var s__10022__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10022__$2)){
var c__5332__auto__ = cljs.core.chunk_first.call(null,s__10022__$2);
var size__5333__auto__ = cljs.core.count.call(null,c__5332__auto__);
var b__10024 = cljs.core.chunk_buffer.call(null,size__5333__auto__);
if((function (){var i__10023 = (0);
while(true){
if((i__10023 < size__5333__auto__)){
var todo = cljs.core._nth.call(null,c__5332__auto__,i__10023);
cljs.core.chunk_append.call(null,b__10024,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__10025 = (i__10023 + (1));
i__10023 = G__10025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10024),todomvc$views$reagent$todo_list_$_iter__10021.call(null,cljs.core.chunk_rest.call(null,s__10022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10024),null);
}
} else {
var todo = cljs.core.first.call(null,s__10022__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),todomvc$views$reagent$todo_list_$_iter__10021.call(null,cljs.core.rest.call(null,s__10022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5334__auto__.call(null,cljs.core.deref.call(null,visible_todos));
})()], null);
});
todomvc.views.reagent.todo_app = (function todomvc$views$reagent$todo_app(){
var todos = ampere.reagent.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null));
var visible_todos = ampere.reagent.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253)], null));
var completed_count = ampere.reagent.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed-count","completed-count",484261033)], null));
return ((function (todos,visible_todos,completed_count){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (todos,visible_todos,completed_count){
return (function (p1__10026_SHARP_){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),p1__10026_SHARP_], null));
});})(todos,visible_todos,completed_count))
], null)], null)], null),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,todos)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.deref.call(null,completed_count) > (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (todos,visible_todos,completed_count){
return (function (){
return ampere.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156)], null));
});})(todos,visible_todos,completed_count))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.todo_list,visible_todos], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.reagent.stats_footer], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
;})(todos,visible_todos,completed_count))
});

//# sourceMappingURL=reagent.js.map?rel=1440417677497