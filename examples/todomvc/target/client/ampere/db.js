// Compiled by ClojureScript 1.7.107 {}
goog.provide('ampere.db');
goog.require('cljs.core');
goog.require('freactive.core');
/**
 * Should not be referenced directly by application code.
 * Passed for read to subscriptions, for updates to event handlers.
 */
ampere.db.app_db = freactive.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=db.js.map?rel=1440417683309