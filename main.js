(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  var lang = document.documentElement && document.documentElement.lang
    ? document.documentElement.lang.toLowerCase()
    : "";
  var isSpanish = lang.indexOf("es") === 0;
  var closedLabel = isSpanish ? "Menú" : "Menu";
  var openLabel = isSpanish ? "Cerrar" : "Close";

  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = closedLabel;
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? openLabel : closedLabel;
  });

  document.addEventListener("keydown", function (event) {
    var e = event || window.event;
    var isEscape = e.key === "Escape" || e.keyCode === 27;

    if (!isEscape || !nav.classList.contains("open")) return;

    closeNav();
    toggle.focus();
  });
})();
