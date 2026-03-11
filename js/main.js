/**
 * Inicialización: navegación suave, listado de propuestas, filtros y menú móvil.
 */

(function () {
  "use strict";

  var proposalsContainer = document.getElementById("proposals-container");
  var filterButtons = document.querySelectorAll(".filter-btn");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  var WHATSAPP_NUMBER = "573002048198";

  /**
   * Scroll suave hacia un elemento.
   * @param {HTMLElement} element
   */
  function scrollToElement(element) {
    if (element && element.scrollIntoView) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /**
   * Cierra el menú móvil si está abierto.
   */
  function closeMobileNav() {
    if (nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  }

  // Navegación suave: enlaces que apuntan a #id
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (href === "#") return;
      var id = href.slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        scrollToElement(target);
        closeMobileNav();
      }
    });
  });

  // Botones de filtro
  filterButtons.forEach(function (btn) {
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-pressed", btn.classList.contains("active") ? "true" : "false");
    btn.addEventListener("click", function () {
      var range = btn.getAttribute("data-range");
      if (range) {
        applyFilter(range, proposalsContainer, filterButtons);
      }
    });
  });

  // Menú hamburguesa (móvil)
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      nav.classList.toggle("is-open", !expanded);
      navToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // Cerrar menú al hacer clic fuera (opcional)
  document.addEventListener("click", function (e) {
    if (nav && nav.classList.contains("is-open") && navToggle && !nav.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  function initSuggestions() {
    var sendButton = document.getElementById("send-whatsapp");
    var textarea = document.getElementById("suggestion-message");
    if (!sendButton || !textarea) return;

    sendButton.addEventListener("click", function () {
      var message = textarea.value.trim();
      if (!message) {
        textarea.focus();
        return;
      }

      var text =
        "Hola Álvaro, tengo esta sugerencia para el programa:%0A%0A" +
        encodeURIComponent(message);
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
      window.open(url, "_blank");
    });
  }

  /**
   * Barra flotante "Vota por mí": se muestra al hacer scroll hacia abajo.
   */
  function initVoteBar() {
    var voteBar = document.getElementById("vote-bar");
    var hero = document.getElementById("hero");
    if (!voteBar || !hero) return;

    var heroHeight = hero.offsetHeight;
    var scrollThreshold = Math.min(heroHeight * 0.6, 400);

    function updateVoteBar() {
      if (window.scrollY > scrollThreshold) {
        voteBar.classList.add("is-visible");
      } else {
        voteBar.classList.remove("is-visible");
      }
    }

    window.addEventListener("scroll", function () {
      requestAnimationFrame(updateVoteBar);
    }, { passive: true });
  }

  /**
   * Animaciones al hacer scroll: muestra elementos cuando entran en viewport.
   */
  function initScrollAnimations() {
    var animated = document.querySelectorAll(".animate-on-scroll");
    if (!animated.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    animated.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Inicializar propuestas, sugerencias y animaciones al cargar la página
  function initProposals() {
    if (typeof applyFilter === "function" && proposalsContainer) {
      applyFilter("all", proposalsContainer, filterButtons);
    }
    initSuggestions();
    initScrollAnimations();
    initVoteBar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProposals);
  } else {
    initProposals();
  }
})();
