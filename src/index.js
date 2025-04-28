import orderCall from "./modules/orderCall";
import sliderCarousel from "./modules/sliderCarousel";
import slider from "./modules/slider";
import measurerCall from "./modules/measurerCall";
import timer from "./modules/timer";
import calc from "./modules/calc";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";
import lightbox from "./modules/lightbox";

orderCall();
sliderCarousel();
slider();
measurerCall();
timer("30 april 2025");
calc();
validation();
lightbox();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
