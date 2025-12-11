document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade, .fade-up, .slide-left, .slide-right");

    const reveal = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.style.animationPlayState = "running";
            }
        });
    };

    reveal();
    window.addEventListener("scroll", reveal);
});
