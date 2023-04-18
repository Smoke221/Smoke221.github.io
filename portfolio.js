const swiper = new Swiper('.swiper', {
    loop: true,
    autoplayDisableOnInteraction: true,
    effect: 'slide',
    autoplay: {
        delay: 5000
    }
});


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav');
    var spanElement = document.querySelector('span')
    var navResume = document.querySelector('#resume-button-1')
    if (window.scrollY > 100) {
        navbar.classList.add('nav-scroll');
        spanElement.style.color = 'white'
        navResume.style.border = '2px solid white'
    } else {
        navbar.classList.remove('nav-scroll');
        spanElement.style.color = '#b23850'
        navResume.style.border = 'none'
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
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = this.getAttribute('href');
        var duration = 1000; // Change this to adjust the duration of the animation
        smoothScroll(target, duration);
    });
});

GitHubCalendar(".calendar", "Smoke221");