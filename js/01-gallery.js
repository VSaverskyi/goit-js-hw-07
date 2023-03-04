import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

const createGalleryItemsMarkup = function (items) {
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

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

const openModal = function (url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  instance.show();
};
const handleOpenModal = function (e) {
  e.preventDefault();
  openModal(e.target.dataset.source);
};

refs.galleryEl.innerHTML = galleryItemsMarkup;
refs.galleryEl.addEventListener("click", handleOpenModal);
