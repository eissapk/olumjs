import * as hljs from "../../public/highlight.js";
// import { parse } from "../services/parse.js";
import marked from "marked";
import { Origin, $, debug } from "olum";
const wikiUrl = "https://raw.githubusercontent.com/wiki/olumjs/olum/";
const origin = new Origin();

export function getMD() {
  // select elms
  const markdownWrapper = $(".Manual .article__md");
  const aside = $(".Manual aside");
  // fetch docs onclick
  if (aside) {
    aside.on("click", e => {
      if (e.target.nodeName === "A") {
        const file = e.target.getAttribute("data-file").trim();
        const url = wikiUrl + file + ".md";

        origin
          .get(url)
          .then(res => {
            debug(res);
            if (markdownWrapper) {
              markdownWrapper.innerHTML = marked(res);
              hljs.highlightAll();
            }
          })
          .catch(console.error);
          
      }
    });
  }
}
