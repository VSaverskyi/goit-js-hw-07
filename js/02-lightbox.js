import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

const createGalleryItemsMarkup = function (items) {
  return items
    .map(({ preview, original, description } = {}) => {
      return `
  <a class="gallery__item" href=${original}>
  <img
  class="gallery__image"
  src=${preview}
  alt=${description}
  />
  </a>
  `;
    })
    .join("");
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

refs.galleryEl.innerHTML = galleryItemsMarkup;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
