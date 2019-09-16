import renderPage from "./page/render";

const $app = document.getElementById("app");

function rerender() {
  $app.innerHTML = renderPage();
}

rerender();
