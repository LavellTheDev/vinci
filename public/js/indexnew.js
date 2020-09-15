gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
    yPercent: -100,
    ease: Linear.easeNone,
    stagger: 0.5,
    scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=700%",
    scrub: 2,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
