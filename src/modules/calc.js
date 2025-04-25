const calc = () => {
  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.value;
    const calcTypeMaterialValue = +calcTypeMaterial.value;
    const calcInputValue = +calcInput.value;

    let totalValue = 0;

    if (calcType.value && calcTypeMaterial.value && calcInput.value) {
      totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue;
    } else {
      totalValue = 0;
    }
    calcTotal.placeholder = totalValue + " руб";
  };
  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcTypeMaterial ||
      e.target === calcInput
    ) {
      countCalc();
    }
  });
};
export default calc;
