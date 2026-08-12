/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const closeMobileMenu = () => {
    if (!mobileMenu || !menuButton) return;

    mobileMenu.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
};

if (menuButton && mobileMenu) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".mobile-menu a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", (event) => {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            closeMobileMenu();
        }
    });
}



/* =========================================
   ANIMAÇÕES DE ENTRADA
========================================= */

const animatedElements = document.querySelectorAll(
    ".solution-card, .differential, .process-item, .project-card, .package"
);

if (animatedElements.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}



/* =========================================
   FORMULÁRIO
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const company = document.getElementById("company").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !service || !message) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const whatsappNumber = "5511989480263";
        const serviceSelect = document.getElementById("service");
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;

        const whatsappMessage = `Olá, Kevin! Gostaria de solicitar um orçamento.

Nome: ${name}

Empresa: ${company || "Não informado"}

E-mail: ${email}

WhatsApp: ${phone}

Serviço: ${serviceText}

Projeto:
${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}



/* =========================================
   HEADER AO ROLAR
========================================= */

const navbar = document.querySelector(".navbar");

const setHeaderState = () => {
    if (!navbar) return;

    const scrolled = window.scrollY > 40;

    navbar.style.background = scrolled
        ? "rgba(5, 11, 22, 0.86)"
        : "rgba(5, 11, 22, 0.72)";

    navbar.style.boxShadow = scrolled
        ? "0 12px 30px rgba(2, 6, 23, 0.24)"
        : "0 10px 25px rgba(2, 6, 23, 0.12)";
};

window.addEventListener("scroll", () => {
    requestAnimationFrame(setHeaderState);
}, { passive: true });

setHeaderState();



/* =========================================
   PARALLAX SUAVE NO HERO
========================================= */

const heroVisual = document.querySelector(".hero-visual");
const techCard = document.querySelector(".tech-card");

if (heroVisual) {
    let mouseFrame = null;

    window.addEventListener("pointermove", (event) => {
        if (window.innerWidth < 900) return;

        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * 12;

        if (mouseFrame) cancelAnimationFrame(mouseFrame);

        mouseFrame = requestAnimationFrame(() => {
            heroVisual.style.transform = `translate3d(${x}px, ${y}px, 0)`;

            if (techCard) {
                const tiltX = (event.clientY / window.innerHeight - 0.5) * 8;
                const tiltY = (event.clientX / window.innerWidth - 0.5) * 10;
                techCard.style.transform = `rotate(${tiltX - 2}deg) rotateY(${tiltY}deg)`;
            }
        });
    });

    window.addEventListener("pointerleave", () => {
        heroVisual.style.transform = "translate3d(0, 0, 0)";
        if (techCard) techCard.style.transform = "rotate(3deg)";
    });
}
