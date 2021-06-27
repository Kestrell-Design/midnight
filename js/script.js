// Sticky Navigation Bar
window.addEventListener("scroll", function() {
    let header = document.querySelector(".main-header");
    header.classList.toggle("sticky", window.scrollY > 0)
});


// Animation on scroll
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