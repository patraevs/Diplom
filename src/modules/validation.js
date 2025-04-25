const validation = () => {
  console.log("validation");
  const calcInput = document.getElementById("calc-input");
  calcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });
};
export default validation;
