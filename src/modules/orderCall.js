import { animate } from "./helpers";

const orderCall = () => {
  const modal = document.querySelector(".header-modal");
  const substrate = document.querySelector(".overlay");
  const callBtn = document.querySelector(
    ".btn.btn-warning.btn-block.fancyboxModal"
  );
  const closeBtn = document.querySelector(".header-modal__close");
  const scrollBtn = document.querySelector(".smooth-scroll");

  callBtn.addEventListener("click", () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        // prettier-ignore
        modal.style.top = (50 * progress) + "%";
      },
    });
    modal.style.display = "block";
    substrate.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    substrate.style.display = "none";
  });

  scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 100;
  });
};

export default orderCall;
