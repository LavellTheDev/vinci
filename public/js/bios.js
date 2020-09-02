// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is
// your previews, dots, controls and the close button.

function openLightbox() {
document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
showSlide(slideIndex += n);
};

function toSlide(n) {
showSlide(slideIndex = n);
};

// This is your logic for the light box. It will decide which slide to show
// and which dot is active.

function showSlide(n) {
const slides = document.getElementsByClassName('slide');
let modalPreviews = document.getElementsByClassName('modal-preview');

if (n > slides.length) {
  slideIndex = 1;
};

if (n < 1) {
  slideIndex = slides.length;
};

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
};

for (let i = 0; i < modalPreviews.length; i++) {
  modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
};

slides[slideIndex - 1].style.display = 'block';
modalPreviews[slideIndex - 1].className += ' active';
};
