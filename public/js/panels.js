// let menu = document.getElementsByClassName("hamburger-menu");
// let items = document.getElementById("menu-item");
//
// menu.addEventListener("click", ()=> {
//   items.style.display = "block";
// })


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
