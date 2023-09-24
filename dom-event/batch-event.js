import { createList } from "./dom-creation.js"

createList(1000)

const app = document.getElementById("app");

app.addEventListener("click", (event) => {
  const div = event.target;

  if (div.className === "list-item")
    div.textContent = div.textContent ? "" : "click";
});
