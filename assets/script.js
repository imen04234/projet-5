const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    text: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    text: "Impressions haute définition <span>pour vos événements</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    text: "Impressions rapides <span>en 24h chez vous</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    text: "Qualité et prix <span>imbattables</span>",
  },
];

let currentSlide = 0;
const intervalTime = 5000;

const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function updateCarousel() {
  bannerImage.src = slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].text;

    dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentSlide);
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateCarousel(); 
    });
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

let autoScroll = setInterval(nextSlide, intervalTime);

function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(nextSlide, intervalTime);
}

arrowRight.addEventListener("click", () => {
  nextSlide();
  resetAutoScroll(); 
});

arrowLeft.addEventListener("click", () => {
  prevSlide();
  resetAutoScroll(); 
});
