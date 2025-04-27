const sliderCarousel = () => {
  const carouselSlides = document.querySelectorAll(".benefits__item");
  const prevSliderCarouselBtn = document.querySelector(
    ".benefits__arrow.benefits__arrow--left"
  );
  const nextSliderCarouselBtn = document.querySelector(
    ".benefits__arrow.benefits__arrow--right"
  );

  let currentSliderCarousel = 0;
  let visibleSlides = 3;

  const updateVisibleSlides = () => {
    const width = document.documentElement.clientWidth;
    if (width > 576) {
      visibleSlides = 3;
    } else {
      visibleSlides = 1;
    }
  };

  const updateSlidesDisplay = () => {
    carouselSlides.forEach((slide) => (slide.style.display = "none"));

    for (let i = 0; i < visibleSlides; i++) {
      const slideIndex = (currentSliderCarousel + i) % carouselSlides.length;
      carouselSlides[slideIndex].style.display = "block";
    }
  };

  updateVisibleSlides();
  updateSlidesDisplay();

  window.addEventListener("resize", () => {
    const prevVisibleSlides = visibleSlides;
    updateVisibleSlides();

    if (prevVisibleSlides !== visibleSlides) {
      if (currentSliderCarousel >= carouselSlides.length) {
        currentSliderCarousel = 0;
      }
      updateSlidesDisplay();
    }
  });

  nextSliderCarouselBtn.addEventListener("click", () => {
    currentSliderCarousel += visibleSlides;
    if (currentSliderCarousel >= carouselSlides.length) {
      currentSliderCarousel = 0;
    }
    updateSlidesDisplay();
  });

  prevSliderCarouselBtn.addEventListener("click", () => {
    currentSliderCarousel -= visibleSlides;
    if (currentSliderCarousel < 0) {
      currentSliderCarousel = carouselSlides.length - visibleSlides;
      if (currentSliderCarousel < 0) currentSliderCarousel = 0;
    }
    updateSlidesDisplay();
  });
};

export default sliderCarousel;
