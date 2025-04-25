import { animate } from "./helpers";

const measurerCall = () => {
  const modal = document.querySelector(".services-modal");
  const substrate = document.querySelector(".overlay");
  const callBtns = document.querySelectorAll(
    ".btn-success.btn-sm.fancyboxModal"
  );
  const closeBtn = document.querySelector(".services-modal__close");

  callBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
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
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    substrate.style.display = "none";
  });
};

export default measurerCall;
