import { Olum, debug, $ } from "olum";
import Home from "./views/home.js";
import Docs from "./views/docs.js";
import FAQ from "./views/faq.js";
import Lang from "./views/lang.js";

// translations
import en from "./locales/en.js";
import ar from "./locales/ar.js";
localize({ en, ar });

function localize(obj) {
  debug("localize method ran!");
  detectDir();
  String.prototype.i18n = obj;
  String.prototype.trans = function trans() {
    const str = this;
    const locales = this.i18n;
    const lang = localStorage.getItem("lang") || "en";
    const langObj = locales[lang];
    const err = `"${str}" property is misspelled or missed at "src/locales/${lang}.js"`;
    let translatedStr;

    if (typeof locales != "undefined" && typeof langObj != "undefined") {
      for (let key in langObj) {
        if (str === key) translatedStr = langObj[key];
      }
    } else {
      debug("locales or langObj are not defined! @ String.prototype.trans", "warn");
    }

    return translatedStr || err;
  };
}

export function detectDir() {
  const container = $("#app");
  const rtlLangs = ["ar"];
  const currentLang = localStorage.getItem("lang") || "en";
  if (container) {
    if (rtlLangs.includes(currentLang)) container.classList.add("RTL");
    else container.classList.remove("RTL");
  }
}

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
