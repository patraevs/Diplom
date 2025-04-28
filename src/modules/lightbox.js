const lightbox = () => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);
  const images = document.querySelectorAll(".sertificate-document");

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      e.preventDefault();
      lightbox.classList.add("active");
      const img = document.createElement("img");
      const wrapper = e.currentTarget.parentElement;
      const link = wrapper.querySelector(".sertificate-document");

      img.src = link.href;

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
};

export default lightbox;
