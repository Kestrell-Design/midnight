// Sticky Navigation Bar
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
});


// Animation On Scroll
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();

class MobileNavbar {
    constructor(mobileMenu, navList, navLisnks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLisnks = document.querySelectorAll(navLisnks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }

    animateLiks() {
        this.navLisnks.forEach((link, index) => {

            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });

    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLiks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();