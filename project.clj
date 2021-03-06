(defproject condense/ampere "0.2.0-SNAPSHOT"
  :description "Ampere: UniDirectional Flow for VDOM."
  :url "https://github.com/condense/ampere"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [condense/freactive.core "0.2.2"]
                 [org.omcljs/om "0.9.0" :scope "provided"]
                 [reagent "0.5.0" :scope "provided"]])
