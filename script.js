const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    const title = project.dataset.title;
    const description = project.dataset.description;
    const imageSrc = project.querySelector("img").src;

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
