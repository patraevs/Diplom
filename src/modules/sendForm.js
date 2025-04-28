const sendForm = ({ formId, someElem = [] }) => {
  let form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется.";

  const validate = (formElements) => {
    const userName = form.querySelectorAll('[name="fio"]');
    const userPhone = form.querySelectorAll('[name="phone"]');

    let success = true;
    let filledFields = 0;

    formElements.forEach((input) => {
      if (input.value.trim() !== "") filledFields++;
    });

    if (filledFields === 0) {
      alert("Все поля должны быть заполнены!");
      return false;
    }

    if (filledFields < 2) {
      alert("Заполните как минимум два поля!");
      return false;
    }

    userName.forEach((input) => {
      if (/[^а-яА-ЯёЁa-zA-Z ]/.test(input.value)) {
        success = false;
      }
    });

    userPhone.forEach((input) => {
      if (!/^\+\d{1,16}$/.test(input.value)) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = Array.from(form.querySelectorAll("input")).filter(
      (input) => input.type !== "hidden"
    );
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (!element) return;

      if (elem.type === "block") {
        if (element.placeholder) {
          formBody[elem.id] = element.placeholder;
        }
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста.");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
