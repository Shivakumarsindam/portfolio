// ======================================
// PORTFOLIO JAVASCRIPT
// Sindam Shiva Kumar Portfolio
// ======================================

// ===== Loader =====

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 800);

});

// ======================================
// NAVBAR
// ======================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");
    }
});

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu when clicking a link

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${current}`
            ) {

                link.classList.add("active");

            }

        });

});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollTopBtn =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// REVEAL ON SCROLL
// ======================================

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .certificate-card, .coding-card, .focus-card"
    );

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.1
        }

    );

revealElements.forEach(el => {

    el.classList.add("reveal");

    revealObserver.observe(el);

});

// ======================================
// CONTACT FORM
// ======================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                this.querySelector(
                    'input[type="text"]'
                ).value;

            const email =
                this.querySelector(
                    'input[type="email"]'
                ).value;

            const message =
                this.querySelector(
                    "textarea"
                ).value;

            const subject =
                encodeURIComponent(
                    `Portfolio Contact from ${name}`
                );

            const body =
                encodeURIComponent(
                    `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
                );

            window.location.href =
                `mailto:sindamshiva1151@gmail.com?subject=${subject}&body=${body}`;

            contactForm.reset();

        }
    );
}

// ======================================
// SMOOTH SCROLL
// ======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});

// ======================================
// HERO TYPING EFFECT
// ======================================

const typingElement =
    document.querySelector(".typing-text");

if (typingElement) {

    const words = [

        "Software Developer",
        "Java Developer",
        "Problem Solver",
        "ECE Student"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    function typeEffect() {

        const currentWord =
            words[wordIndex];

        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (
                charIndex === currentWord.length
            ) {

                isDeleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;
            }

        }

        setTimeout(
            typeEffect,
            isDeleting ? 60 : 100
        );
    }

    typeEffect();
}

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
`
==================================
Sindam Shiva Kumar Portfolio
Software Developer
==================================
`
);