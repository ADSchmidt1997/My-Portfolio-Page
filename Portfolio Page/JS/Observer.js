const scrollFade = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll('.slideIn');
const scrollOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const scrollObserver = new IntersectionObserver((entries, 
    scrollObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            scrollObserver.unobserve(entry.target);
        }
    });
},
scrollOptions);

scrollFade.forEach(scrollFade => {
    scrollObserver.observe(scrollFade);
});

sliders.forEach(slider => {
    scrollObserver.observe(slider);
});