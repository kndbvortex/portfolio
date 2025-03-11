AOS.init({
    duration: 1300,
})

// Loader
window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');

    function fadeOut(element, duration, callback) {
        var opacity = 1;
        var interval = 50;
        var delta = interval / duration;

        var fadeOutTimer = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(fadeOutTimer);
                element.style.display = 'none';
                if (callback) {
                    callback();
                }
            }

            element.style.opacity = opacity;
            opacity -= delta;
        }, interval);
    }

    fadeOut(loader, 1000);
});

// Hamburger menu
document.querySelector('.hamburger-menu')
    .addEventListener('click', function () {
        document.querySelector("#menu").classList.toggle('hidden');
        // document.querySelector("nav").classList.remove('bg-transparent');
        document.querySelector("nav").classList.add('bg-white');

        // document.querySelector("#menu").classList.toggle('w-screen');
        document.querySelector(".bar-middle").classList.toggle('bar-middle-click');
        document.querySelector(".bar-top").classList.toggle('bar-top-click');
        document.querySelector(".bar-bottom").classList.toggle('bar-bottom-click');
    });

particlesJS("particles-js", {
    particles: {
        number: { value: 230, density: { enable: true, value_area: 800 } },
        color: { value: "#ffc107" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#fffff" },
            polygon: { nb_sides: 2 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 80,
            color: "#ffc107",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 10,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.domElement.style.position = "relative";
stats.domElement.style.left = "-100px";
stats.domElement.style.top = "-100px";
document.querySelector('body').appendChild(stats.domElement);


// Animation de saisie
const words = ["DataScientist", "Backend developper", "Student", "Python enthousiast"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').style.opacity = 0;
            document.getElementById('word').innerHTML = word.join("");
            document.getElementById('word').style.opacity = 1;
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 20);
    };
    loopDeleting();
};

typingEffect();

function changeAtiveTab(event, tabID) {
    let element = event.target;
    while (element.nodeName !== "A") {
        element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");

    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("text-white");
        aElements[i].classList.remove("bg-primary");
        aElements[i].classList.add("text-primary");
        aElements[i].classList.add("bg-white");
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-primary");
    element.classList.remove("bg-white");
    element.classList.add("text-white");
    element.classList.add("bg-primary");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}


const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add("bg-white");
        nav.classList.remove("bg-transparent");
    } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white");
    }

}

const headerObserver = new IntersectionObserver(updateNavColor, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)
