const swiper = new Swiper(".s1", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
      // rotate: [0, 100, 0],
    },
    next: {
      opacity: 1,
      scale: 1.1,
    },
  },
  autoplayDisableOnInteraction: false,
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  var navName = document.querySelector("#nav-name");
  var spanElement = document.querySelector("span");
  var navResume = document.querySelector("#resume-button-1");
  if (window.scrollY > 100) {
    navbar.classList.add("nav-scroll");
    navName.style.color = "white";
    spanElement.style.color = "white";
    navResume.style.border = "2px solid white";
  } else {
    navbar.classList.remove("nav-scroll");
    navName.style.color = "#b68d40";
    spanElement.style.color = "#b68d40";
    navResume.style.border = "none";
  }
});

function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = this.getAttribute("href");
    var duration = 1000;
    smoothScroll(target, duration);
  });
});

GitHubCalendar(".calendar", "Smoke221", { responsive: true });

function downloadResume() {
  // Display the first modal
  document.getElementById("firstModal").style.display = "block";

  // Set a timeout for the second modal
  setTimeout(() => {
    closeModal("firstModal");
    document.getElementById("secondModal").style.display = "block";
  }, 2000);

  // Set a timeout for the resume modal
  setTimeout(() => {
    closeModal("secondModal");
    document.getElementById("resumeModal").style.display = "block";

    // Set a timeout to automatically close the resume modal
    setTimeout(() => {
      closeModal("resumeModal");
    }, 3000); // Close after 3 seconds
  }, 4000); // Show last modal after 4 seconds
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

//intro swiper
