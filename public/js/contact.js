gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -200,
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "bottom bottom",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
