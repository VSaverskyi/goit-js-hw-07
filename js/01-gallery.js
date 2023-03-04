import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

const createGalleryItemsMarkup = (items) => {
  return items
    .map(({ preview, original, description } = {}) => {
      return `
          <div class="gallery__item">
  <a class="gallery__link" href=${original}>
  <img
  class="gallery__image"
  src=${preview}
  data-source=${original}
  alt=${description}
  />
  </a>
  </div>
  `;
    })
    .join("");
};

let modalImage = "";
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

const createModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  modalImage = instance;
};
const handleOpenModal = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  createModal(e.target.dataset.source);
  modalImage.show();
  window.addEventListener("keydown", handleEscKeyPress);
};
const closeModal = () => {
  modalImage.close();
  window.removeEventListener("keydown", handleEscKeyPress);
};

refs.galleryEl.innerHTML = galleryItemsMarkup;
refs.galleryEl.addEventListener("click", handleOpenModal);

function handleEscKeyPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}
