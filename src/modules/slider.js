const slider = () => {
  const slides = document.querySelectorAll(".col-md-12.col-lg-6");
  const prevSlideBtn = document.querySelector(
    ".services__arrow.services__arrow--left"
  );
  const nextSlideBtn = document.querySelector(
    ".services__arrow.services__arrow--right"
  );

  let currentslide = 0;
  let visibleSlides = 2;

  const updateSlidesDisplay = () => {
    slides.forEach((slide) => (slide.style.display = "none"));

    for (let i = 0; i < visibleSlides; i++) {
      const slideIndex = (currentslide + i) % slides.length;
      slides[slideIndex].style.display = "block";
    }
  };

  const updateVisibleSlides = () => {
    const width = document.documentElement.clientWidth;
    if (width > 576) {
      visibleSlides = 2;
    } else {
      visibleSlides = 1;
    }
  };

  updateVisibleSlides();
  updateSlidesDisplay();

  window.addEventListener("resize", () => {
    const prevVisibleSlides = visibleSlides;
    updateVisibleSlides();

    if (prevVisibleSlides !== visibleSlides) {
      if (currentslide >= slides.length) {
        currentslide = 0;
      }
      updateSlidesDisplay();
    }
  });

  nextSlideBtn.addEventListener("click", () => {
    currentslide += visibleSlides;
    if (currentslide >= slides.length) {
      currentslide = 0;
    }
    updateSlidesDisplay();
  });

  prevSlideBtn.addEventListener("click", () => {
    currentslide -= visibleSlides;
    if (currentslide < 0) {
      currentslide = slides.length - visibleSlides;
      if (currentslide < 0) currentslide = 0;
    }
    updateSlidesDisplay();
  });
};

export default slider;
