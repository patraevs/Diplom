const validation = () => {
  const calcInput = document.getElementById("calc-input");
  if (!calcInput) return;
  calcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });
};
export default validation;
