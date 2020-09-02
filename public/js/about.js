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

// create references to the modal...
let modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
let images = document.getElementsByClassName('myImages');
// the image in the modal
let modalImg = document.getElementById("img01");
// and the caption in the modal
let captionText = document.getElementById("caption");

let modalBlock = document.getElementsByClassName("modalBlock");

let span = document.getElementsByClassName("close");


// Go through all of the images with our custom class
// for (let i = 0; i < images.length; i++) {
//   let img = images[i];
//   // and attach our click listener for this image.
//   img.onclick = function(evt) {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   }
// }




// for (let i=0; i<modalBlock.length; i++) {
//   modalBlock[i].addEventListener("click", () => {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   })
// }



//
// let span = document.getElementsByClassName("close")[0];
//
// span.onclick = function() {
//   modal.style.display = "none";
// }
