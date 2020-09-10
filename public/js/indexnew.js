gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -200,
  // duration: 2.5,
  // ease: "slow(0.7, 0.7, false)",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "bottom bottom",
    end: "+=2500%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
