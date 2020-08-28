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


//card carousel code
let cardSelect = document.querySelectorAll(".card");

for(let i=0; i<cardSelect.length; i++) {
  cardSelect[i].addEventListener("click", pickCard);
}

function checkClass() {
  for(let i=0; i<cardSelect.length; i++) {
    cardSelect[i].classList.remove("active");
    cardSelect[i].classList.add("card");
  }
}


function pickCard(event) {
  checkClass();
  this.classList = "active";
}
