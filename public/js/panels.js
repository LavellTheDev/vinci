// let menu = document.getElementsByClassName("hamburger-menu");
// let items = document.getElementById("menu-item");
//
// menu.addEventListener("click", ()=> {
//   items.style.display = "block";
// })


gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -300,
  ease: "none",
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=2500%",
    scrub: true,
    pin: true
  }
});


gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
