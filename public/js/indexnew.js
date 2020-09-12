gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -200,
  ease: "slow",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
