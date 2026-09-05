document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));

  const form = document.querySelector("#contactForm");
  if (!form) return;

  const fields = {
    name: {
      input: document.querySelector("#name"),
      error: document.querySelector("#nameError"),
      message: "Please enter your name (at least 2 characters)."
    },
    email: {
      input: document.querySelector("#email"),
      error: document.querySelector("#emailError"),
      message: "Please enter a valid email address."
    },
    message: {
      input: document.querySelector("#message"),
      error: document.querySelector("#messageError"),
      message: "Please enter at least 10 characters."
    }
  };

  function validate() {
    let valid = true;
    Object.values(fields).forEach(field => field.error.textContent = "");

    if (fields.name.input.value.trim().length < 2) {
      fields.name.error.textContent = fields.name.message; valid = false;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.input.value.trim());
    if (!emailOk) {
      fields.email.error.textContent = fields.email.message; valid = false;
    }

    if (fields.message.input.value.trim().length < 10) {
      fields.message.error.textContent = fields.message.message; valid = false;
    }
    return valid;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#formStatus");
    if (validate()) {
      status.textContent = "Thanks! Your message has been validated successfully.";
      form.reset();
    } else {
      status.textContent = "";
    }
  });

  Object.values(fields).forEach(field => {
    field.input.addEventListener("input", validate);
  });
});
