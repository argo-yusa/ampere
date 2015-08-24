// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.middleware');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('ampere.undo');
goog.require('ampere.utils');
goog.require('clojure.data');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 *   The ampere router passes the `app-db` atom as the first parameter to any handler.
 *   This middleware adapts that atom to be the value within the atom.
 *   If you strip away the error/efficiency checks, this middleware is doing:
 *   `(reset! app-db (handler @app-db event-vec))`
 *   You don't have to use this middleware directly. It is automatically applied to
 *   your handler's middleware when you use `register-handler`.
 *   In fact, the only way to by-pass automatic use of `pure` in your middleware
 *   is to use the low level registration function `ampere.handlers/register-handler-base`
 */
ampere.middleware.pure = (function ampere$middleware$pure(handler){
return (function ampere$middleware$pure_$_pure_handler(app_db,event_vec){
if(!(((!((app_db == null)))?(((false) || (app_db.freactive$core$IReactive$))?true:(((!app_db.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IReactive,app_db):false)):cljs.core.native_satisfies_QMARK_.call(null,freactive.core.IReactive,app_db)))){
if(cljs.core.map_QMARK_.call(null,app_db)){
ampere.utils.warn.call(null,"ampere: Looks like \"pure\" is in the middleware pipeline twice. Ignoring.");
} else {
ampere.utils.warn.call(null,"ampere: \"pure\" middleware not given a Cell.  Got: ",app_db);
}

return handler;
} else {
var db = cljs.core.deref.call(null,app_db);
var new_db = handler.call(null,db,event_vec);
if((new_db == null)){
return ampere.utils.error.call(null,"ampere: your pure handler returned nil. It should return the new db state.");
} else {
if(!((db === new_db))){
return cljs.core.reset_BANG_.call(null,app_db,new_db);
} else {
return null;
}
}
}
});
});
/**
 * Middleware which catches and prints any handler-generated exceptions to console.
 *   Handlers are called from within a core.async go-loop, and core.async produces
 *   a special kind of hell when in comes to stacktraces. By the time an exception
 *   has passed through a go-loop its stack is mangled beyond repair and you'll
 *   have no idea where the exception was thrown.
 *   So this middleware catches and prints to stacktrace before the core.async sausage
 *   machine has done its work.
 */
ampere.middleware.log_ex = (function ampere$middleware$log_ex(handler){
return (function ampere$middleware$log_ex_$_log_ex_handler(db,v){
try{return handler.call(null,db,v);
}catch (e17963){var e = e17963;
console.error(e.stack);

throw e;
}});
});
/**
 * Middleware which logs debug information to js/console for each event.
 *   Includes a clojure.data/diff of the db, before vs after, showing the changes
 *   caused by the event.
 */
ampere.middleware.debug = (function ampere$middleware$debug(handler){
return (function ampere$middleware$debug_$_debug_handler(db,v){
ampere.utils.log.call(null,"-- New Event ----------------------------------------------------");

ampere.utils.group.call(null,"ampere event: ",v);

var new_db = handler.call(null,db,v);
var diff = clojure.data.diff.call(null,db,new_db);
ampere.utils.log.call(null,"only before: ",cljs.core.first.call(null,diff));

ampere.utils.log.call(null,"only after : ",cljs.core.second.call(null,diff));

ampere.utils.groupEnd.call(null);

return new_db;
});
});
/**
 * Middleware which removes the first element of v, allowing you to write
 *   more aesthetically pleasing handlers. No leading underscore on the event-v!
 *   Your handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 *   
 */
ampere.middleware.trim_v = (function ampere$middleware$trim_v(handler){
return (function ampere$middleware$trim_v_$_trim_v_handler(db,v){
return handler.call(null,db,cljs.core.vec.call(null,cljs.core.rest.call(null,v)));
});
});
/**
 * A middleware factory which supplies a sub-tree of `db` to the handler.
 *   Works a bit like update-in. Supplies a narrowed data structure for the handler.
 *   Afterwards, grafts the result of the handler back into db.
 *   Usage:
 * 
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 *   
 */
ampere.middleware.path = (function ampere$middleware$path(var_args){
var args__5627__auto__ = [];
var len__5620__auto___17965 = arguments.length;
var i__5621__auto___17966 = (0);
while(true){
if((i__5621__auto___17966 < len__5620__auto___17965)){
args__5627__auto__.push((arguments[i__5621__auto___17966]));

var G__17967 = (i__5621__auto___17966 + (1));
i__5621__auto___17966 = G__17967;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((0) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((0)),(0))):null);
return ampere.middleware.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5628__auto__);
});

ampere.middleware.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var _ = ((cljs.core.empty_QMARK_.call(null,path))?ampere.utils.error.call(null,"ampere: \"path\" middleware given no params."):null);
var ___$1 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?ampere.utils.error.call(null,"ampere: you've used \"path\" incorrectly. It is a middleare factory and must be called like this \"(path something)\", whereas you just supplied \"path\"."):null);
return ((function (path,_,___$1){
return (function ampere$middleware$path_middleware(handler){
return ((function (path,_,___$1){
return (function ampere$middleware$path_middleware_$_path_handler(db,v){
return cljs.core.assoc_in.call(null,db,path,handler.call(null,cljs.core.get_in.call(null,db,path),v));
});
;})(path,_,___$1))
});
;})(path,_,___$1))
});

ampere.middleware.path.cljs$lang$maxFixedArity = (0);

ampere.middleware.path.cljs$lang$applyTo = (function (seq17964){
return ampere.middleware.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17964));
});
/**
 * A Middleware factory which stores an undo checkpoint.
 *   `explanation` can be either a string or a function. If it is a
 *   function then must be:  (db event-vec) -> string.
 *   `explanation` can be nil. in which case "" is recorded.
 */
ampere.middleware.undoable = (function ampere$middleware$undoable(explanation){
return (function ampere$middleware$undoable_$_undoable_middleware(handler){
return (function ampere$middleware$undoable_$_undoable_middleware_$_undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_.call(null,explanation))?explanation.call(null,db,event_vec):((typeof explanation === 'string')?explanation:(((explanation == null))?"":ampere.utils.error.call(null,"ampere: \"undoable\" middleware given a bad parameter. Got: ",explanation)
)));
ampere.undo.store_now_BANG_.call(null,explanation__$1);

return handler.call(null,db,event_vec);
});
});
});
/**
 * Middleware factory which runs a given function `f` in the after position.
 *   `f` is (db v) -> db
 *   Unlike `after` which is about side effects, `enrich` expects f to process and alter
 *   db in some useful way, contributing to the derived data, flowing vibe.
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom.
 *   Almost any action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   update might have introduced a new duplicate or removed one. Same with a
 *   todo removal.
 *   And to perform this enrichment, a function has to inspect all the todos,
 *   possibly set flags on each, and set some overall list of duplicates.
 *   And this duplication check might just be one check amoung many.
 *   `f` would need to be both adding and removing the duplicate warnings.
 *   By applying `f` in middleware, we keep the handlers simple and yet we
 *   ensure this important step is not missed.
 */
ampere.middleware.enrich = (function ampere$middleware$enrich(f){
return (function ampere$middleware$enrich_$_enrich_middleware(handler){
return (function ampere$middleware$enrich_$_enrich_middleware_$_enrich_handler(db,v){
return f.call(null,handler.call(null,db,v),v);
});
});
});
/**
 * Middleware factory which runs a function `f` in the "after handler"
 *   position presumably for side effects.
 *   `f` is given the new value of `db`. It's return value is ignored.
 *   Examples: `f` can run schema validation. Or write current state to localstorage. etc.
 *   In effect, `f` is meant to sideeffect. It gets no chance to change db. See "enrich"
 *   (if you need that.)
 */
ampere.middleware.after = (function ampere$middleware$after(f){
return (function ampere$middleware$after_$_after_middleware(handler){
return (function ampere$middleware$after_$_after_middleware_$_after_handler(db,v){
var new_db = handler.call(null,db,v);
f.call(null,new_db,v);

return new_db;
});
});
});

//# sourceMappingURL=middleware.js.map?rel=1440417690383