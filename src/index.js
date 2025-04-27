import orderCall from "./modules/orderCall";
import sliderCarousel from "./modules/sliderCarousel";
import slider from "./modules/slider";
import measurerCall from "./modules/measurerCall";
import timer from "./modules/timer";
import calc from "./modules/calc";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";

orderCall();
sliderCarousel();
slider();
measurerCall();
timer("28 april 2025");
calc();
validation();
sendForm({
  formId: "action-form",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
