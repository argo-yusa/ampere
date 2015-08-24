(defproject todomvc-ampere "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107"]
                 [condense/ampere "0.2.0-SNAPSHOT"]

                 ;[org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;[condense/freactive.core "0.2.2"]
                 [org.omcljs/om "0.9.0"]
                 [reagent "0.5.0"]

                 [sablono "0.3.6"]
                 [secretary "1.2.3"]]

  :plugins [[lein-cljsbuild "1.0.6"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev  {:cljsbuild
                    {:builds {:client {:compiler
                                       {:optimizations        :none
                                        :source-map           true
                                        :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler
                                       {:optimizations :advanced
                                        :elide-asserts true
                                        :pretty-print  false}}}}}}

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler
                                {:main todomvc.core
                                 :output-dir "target/client"
                                 :output-to "target/client.js"}}}})
