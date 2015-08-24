// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.router');
goog.require('cljs.core');
goog.require('ampere.handlers');
goog.require('ampere.utils');
goog.require('cljs.core.async');
/**
 * Renderer-specific function to flush DOM before CPU-intensive handler call.
 *   Must be set on app init by adapter.
 */
ampere.router._STAR_flush_dom_STAR_ = (function ampere$router$_STAR_flush_dom_STAR_(){
return ampere.utils.warn.call(null,"ampere.router/*flush-dom* is not set, may be you forgot to init view adapter?");
});
ampere.router.event_chan = cljs.core.async.chan.call(null);
/**
 * Read all pending events from the channel and drop them on the floor.
 */
ampere.router.purge_chan = (function ampere$router$purge_chan(){
return null;
});
/**
 * In a perpetual loop, read events from `event-chan`, and call the right handler.
 * 
 * Because handlers occupy the CPU, before each event is handled, hand
 * back control to the browser, via a `(<! (timeout 0))` call.
 * 
 * In some cases, we need to pause for an entire animationFrame, to ensure that
 * the DOM is fully flushed, before then calling a handler known to hog the CPU
 * for an extended period.  In such a case, the event should be labeled with metadata.
 * 
 * Example usage (notice the `:flush-dom` metadata):
 * 
 *     (dispatch ^:flush-dom  [:event-id other params])
 * 
 */
ampere.router.router_loop = (function ampere$router$router_loop(){
var c__7296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7296__auto__){
return (function (){
var f__7297__auto__ = (function (){var switch__7231__auto__ = ((function (c__7296__auto__){
return (function (state_12400){
var state_val_12401 = (state_12400[(1)]);
if((state_val_12401 === (7))){
var inst_12385 = (state_12400[(2)]);
var state_12400__$1 = (function (){var statearr_12402 = state_12400;
(statearr_12402[(7)] = inst_12385);

return statearr_12402;
})();
var statearr_12403_12423 = state_12400__$1;
(statearr_12403_12423[(2)] = null);

(statearr_12403_12423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (1))){
var state_12400__$1 = state_12400;
var statearr_12404_12424 = state_12400__$1;
(statearr_12404_12424[(2)] = null);

(statearr_12404_12424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (4))){
var inst_12372 = (state_12400[(8)]);
var inst_12372__$1 = (state_12400[(2)]);
var inst_12373 = cljs.core.meta.call(null,inst_12372__$1);
var inst_12374 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12373);
var state_12400__$1 = (function (){var statearr_12405 = state_12400;
(statearr_12405[(8)] = inst_12372__$1);

return statearr_12405;
})();
if(cljs.core.truth_(inst_12374)){
var statearr_12406_12425 = state_12400__$1;
(statearr_12406_12425[(1)] = (5));

} else {
var statearr_12407_12426 = state_12400__$1;
(statearr_12407_12426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (6))){
var inst_12381 = cljs.core.async.timeout.call(null,(0));
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,(9),inst_12381);
} else {
if((state_val_12401 === (3))){
var inst_12398 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12400__$1,inst_12398);
} else {
if((state_val_12401 === (12))){
var inst_12372 = (state_12400[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12400,(11),Object,null,(10));
var inst_12393 = ampere.handlers.handle.call(null,inst_12372);
var state_12400__$1 = state_12400;
var statearr_12408_12427 = state_12400__$1;
(statearr_12408_12427[(2)] = inst_12393);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (2))){
var state_12400__$1 = state_12400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,(4),ampere.router.event_chan);
} else {
if((state_val_12401 === (11))){
var inst_12386 = (state_12400[(2)]);
var inst_12387 = ampere.router.purge_chan.call(null);
var inst_12388 = ampere$router$router_loop.call(null);
var inst_12389 = (function(){throw inst_12386})();
var state_12400__$1 = (function (){var statearr_12409 = state_12400;
(statearr_12409[(9)] = inst_12388);

(statearr_12409[(10)] = inst_12387);

return statearr_12409;
})();
var statearr_12410_12428 = state_12400__$1;
(statearr_12410_12428[(2)] = inst_12389);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (9))){
var inst_12383 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12411_12429 = state_12400__$1;
(statearr_12411_12429[(2)] = inst_12383);

(statearr_12411_12429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (5))){
var inst_12376 = ampere.router._STAR_flush_dom_STAR_.call(null);
var inst_12377 = cljs.core.async.timeout.call(null,(20));
var state_12400__$1 = (function (){var statearr_12412 = state_12400;
(statearr_12412[(11)] = inst_12376);

return statearr_12412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,(8),inst_12377);
} else {
if((state_val_12401 === (10))){
var inst_12395 = (state_12400[(2)]);
var state_12400__$1 = (function (){var statearr_12413 = state_12400;
(statearr_12413[(12)] = inst_12395);

return statearr_12413;
})();
var statearr_12414_12430 = state_12400__$1;
(statearr_12414_12430[(2)] = null);

(statearr_12414_12430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12401 === (8))){
var inst_12379 = (state_12400[(2)]);
var state_12400__$1 = state_12400;
var statearr_12415_12431 = state_12400__$1;
(statearr_12415_12431[(2)] = inst_12379);

(statearr_12415_12431[(1)] = (7));


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
});})(c__7296__auto__))
;
return ((function (switch__7231__auto__,c__7296__auto__){
return (function() {
var ampere$router$router_loop_$_state_machine__7232__auto__ = null;
var ampere$router$router_loop_$_state_machine__7232__auto____0 = (function (){
var statearr_12419 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12419[(0)] = ampere$router$router_loop_$_state_machine__7232__auto__);

(statearr_12419[(1)] = (1));

return statearr_12419;
});
var ampere$router$router_loop_$_state_machine__7232__auto____1 = (function (state_12400){
while(true){
var ret_value__7233__auto__ = (function (){try{while(true){
var result__7234__auto__ = switch__7231__auto__.call(null,state_12400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7234__auto__;
}
break;
}
}catch (e12420){if((e12420 instanceof Object)){
var ex__7235__auto__ = e12420;
var statearr_12421_12432 = state_12400;
(statearr_12421_12432[(5)] = ex__7235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12433 = state_12400;
state_12400 = G__12433;
continue;
} else {
return ret_value__7233__auto__;
}
break;
}
});
ampere$router$router_loop_$_state_machine__7232__auto__ = function(state_12400){
switch(arguments.length){
case 0:
return ampere$router$router_loop_$_state_machine__7232__auto____0.call(this);
case 1:
return ampere$router$router_loop_$_state_machine__7232__auto____1.call(this,state_12400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ampere$router$router_loop_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$0 = ampere$router$router_loop_$_state_machine__7232__auto____0;
ampere$router$router_loop_$_state_machine__7232__auto__.cljs$core$IFn$_invoke$arity$1 = ampere$router$router_loop_$_state_machine__7232__auto____1;
return ampere$router$router_loop_$_state_machine__7232__auto__;
})()
;})(switch__7231__auto__,c__7296__auto__))
})();
var state__7298__auto__ = (function (){var statearr_12422 = f__7297__auto__.call(null);
(statearr_12422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7296__auto__);

return statearr_12422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7298__auto__);
});})(c__7296__auto__))
);

return c__7296__auto__;
});
ampere.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 *   Usage example:
 *   `(dispatch [:delete-item 42])`
 */
ampere.router.dispatch = (function ampere$router$dispatch(event_v){
if((event_v == null)){
ampere.utils.error.call(null,"ampere: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,ampere.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 *   use of core.async/chan.
 *   Usage example:
 *   `(dispatch-sync [:delete-item 42])`
 */
ampere.router.dispatch_sync = (function ampere$router$dispatch_sync(event_v){
ampere.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1440417680664