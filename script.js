document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element', {
      strings: ['<i>A Passionate Full Stack Dev</i>', '<i>&amp; Open Source Contributor</i>'],
      typeSpeed: 50,
  });

  var mobileMenuBtn = document.getElementById("mobile-menu-btn");
  var navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", function () {
      // Toggle the visibility of the mobile dropdown
      navLinks.style.display = (navLinks.style.display === "block") ? "none" : "block";
  });
});
