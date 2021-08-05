import { Olum, Localize } from "olum";
import Home from "./views/home.js";
import Docs from "./views/docs.js";
import FAQ from "./views/faq.js";
import Lang from "./views/lang.js";
import en from "./locales/en.js";
import ar from "./locales/ar.js";

new Localize({ en, ar }, ["ar"]);

const routes = [
  { path: "/", comp: Home },
  { path: "/docs", comp: Docs },
  { path: "/faq", comp: FAQ },
  { path: "/lang", comp: Lang },
];

export const olum = new Olum({
  mode: "history",
  root: "/",
  el: "#app",
  prefix: "app",
  routes,
});

if ("serviceWorker" in navigator) { // uncomment to enable service worker when deploying
  window.on("load", () => navigator.serviceWorker.register("/service-worker.js").catch(console.error));
}