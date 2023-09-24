import { createList } from "./dom-creation.js"

function mouseClickHandler() {
  this.textContent = this.textContent ? "" : "click";
}

createList(1000).forEach(div => {
  div.addEventListener("click", mouseClickHandler);
});
