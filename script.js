const secoes = document.querySelectorAll("section");
const linksNav = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  secoes.forEach(function (secao) {
    const rect = secao.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight) {
      linksNav.forEach(function (link) {
        link.classList.remove("active");
      });
      const linkAtivo = document.querySelector(
        'nav a[href="#' + secao.id + '"]',
      );
      if (linkAtivo) {
        linkAtivo.classList.add("active");
      }
    }
  });
});
