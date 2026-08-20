/* ============================================================
   Hometown Handyman Co. — main.js
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu when a link is tapped
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Current year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Reveal-on-scroll ---------- */
  var revealTargets = document.querySelectorAll(
    ".service-card, .process-step, .gallery-item, .review-card, .why-item, .trust-item, .about-content, .about-media"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Quote form (front-end validation + demo submit) ---------- */
  var form = document.getElementById("quoteForm");
  var success = document.getElementById("formSuccess");

  function validateField(field) {
    var valid = true;
    if (field.hasAttribute("required") && !field.value.trim()) valid = false;
    if (field.type === "email" && field.value.trim()) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    }
    field.classList.toggle("invalid", !valid);
    return valid;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var required = form.querySelectorAll("[required]");
      var allValid = true;
      required.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        var firstInvalid = form.querySelector(".invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // No backend yet — this is a design/demo build.
      // Show a friendly confirmation and reset the form.
      if (success) success.hidden = false;
      form.reset();
      if (success) success.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // Clear the invalid state as the user types
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        field.classList.remove("invalid");
        if (success) success.hidden = true;
      });
    });
  }
})();
