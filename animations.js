document.addEventListener('DOMContentLoaded', () => {
    // Animate the hero section elements
    gsap.from(".hero-section h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "bounce.out"
    });

    gsap.from(".hero-section p", {
        duration: 1.5,
        delay: 0.5,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    });

    gsap.from(".hero-btn", {
        duration: 2,
        delay: 1,
        opacity: 0,
        scale: 0.5,
        ease: "elastic.out(1, 0.3)"
    });

    // Animate game cards
    gsap.from(".game-card", {
        duration: 1.5,
        delay: 0.5,
        opacity: 0,
        y: 100,
        stagger: 0.3,
        ease: "power3.out"
    });
});
