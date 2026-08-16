/* Ideas Premium Solutions — minimal vanilla JS
   Handles: mobile navigation toggle, automatic footer year.
   No frameworks, no dependencies, no tracking. */
(function () {
  "use strict";

  // Automatic copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  var toggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("nav-mobile");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close the mobile menu after selecting a link
    var mobileLinks = mobileNav.querySelectorAll("a");
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    }
  }
})();
