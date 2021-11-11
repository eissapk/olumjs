import OlumRouter from "olum-router";
import Home from "../views/home";
import Docs from "../views/docs";
import FAQ from "../views/faq";
import Lang from "../views/lang";

const routes = [
  { path: "/", comp: Home },
  { path: "/docs", comp: Docs },
  { path: "/faq", comp: FAQ },
  { path: "/lang", comp: Lang },
];

const router = new OlumRouter({ routes, mode: "history" });

export default router;
