import Olum from "olum";
import router from "./router";
import { Localize } from "olum-helpers";
import en from "./locales/en.js";
import ar from "./locales/ar.js";

new Localize({ en, ar }, ["ar"]);

new Olum({ prefix: "app" }).$("#app").use(router);

// if ("serviceWorker" in navigator) { // uncomment to enable service worker when deploying
//   window.on("load", () => navigator.serviceWorker.register("/service-worker.js").catch(console.error));
// }
