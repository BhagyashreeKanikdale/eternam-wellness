document.addEventListener("DOMContentLoaded", function () {

  // Mobile Navigation
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("active");

      const isOpen = navigation.classList.contains("active");
      menuButton.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Header Shadow on Scroll
  const header = document.querySelector("header");

  function updateHeader() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader);

  // Treatment Buttons
  document.querySelectorAll(".treatment-card button").forEach(function (button) {
    button.addEventListener("click", function () {
      const bookingSection = document.querySelector("#booking");

      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Booking Form
  const bookingForm = document.querySelector("#booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      alert(
        "Thank you for your interest in Eternam Wellness! " +
        "Your form has been submitted in this demo."
      );

      bookingForm.reset();
    });
  }

  // Current Year in Footer
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
