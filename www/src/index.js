import Olum from "olum";
import router from "./router";
import { Localize } from "olum-helpers";
import en from "./locales/en.js";
import ar from "./locales/ar.js";

new Localize({ en, ar }, ["ar"]);

export const faqArr = [
  {
    q: "q1".trans(),
    a: "a1".trans(),
  },
  {
    q: "q2".trans(),
    a: "a2".trans(),
  },
  {
    q: "q3".trans(),
    a: "a3".trans(),
  },
  {
    q: "q4".trans(),
    a: "a4".trans(),
  },
  {
    q: "q5".trans(),
    a: "a5".trans(),
  },
  {
    q: "q6".trans(),
    a: "a6".trans(),
  },
  {
    q: "q7".trans(),
    a: "a7".trans(),
  },
  {
    q: "q8".trans(),
    a: "a8".trans(),
  },
  {
    q: "q9".trans(),
    a: "a9".trans(),
  },
  {
    q: "q10".trans(),
    a: "a10".trans(),
  },
  {
    q: "q11".trans(),
    a: "a11".trans(),
  },
];


new Olum({ prefix: "app" }).$("#app").use(router);

// if ("serviceWorker" in navigator) { // uncomment to enable service worker when deploying
//   window.on("load", () => navigator.serviceWorker.register("/service-worker.js").catch(console.error));
// }
