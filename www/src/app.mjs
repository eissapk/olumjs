import {
  Olum
} from "olum";
import Home from "./views/home.js";
import Docs from "./views/docs.js";
import FAQ from "./views/faq.js";
import Tools from "./views/tools.js";

const routes = [{
    path: "/",
    comp: Home
  },
  {
    path: "/docs",
    comp: Docs
  },
  {
    path: "/faq",
    comp: FAQ
  },
  {
    path: "/tools",
    comp: Tools
  },
];

export const olum = new Olum({
  mode: "history",
  root: "/",
  el: "#app",
  routes,
});