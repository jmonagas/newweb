document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelector(".navbar-toggle"),
    t = document.querySelector(".navbar-menu"),
    n = document.querySelectorAll(".navbar-menu a");
  e.addEventListener("click", function () {
    t.classList.toggle("active");
  }),
    n.forEach(function (e) {
      e.addEventListener("click", function () {
        t.classList.remove("active");
      });
    }),
    document.addEventListener("click", function (n) {
      const c = t.contains(n.target),
        a = e.contains(n.target);
      c || a || !t.classList.contains("active") || t.classList.remove("active");
    });
});
