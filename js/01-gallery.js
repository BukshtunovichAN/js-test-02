import { galleryItems } from "./gallery-items.js";

const gallaryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
gallaryContainer.addEventListener("click", onImageClick);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImageClick(ev) {
  stopAutoRedirect(ev);
  if (ev.target.nodeName !== "IMG") {
    return;
  }
  const imageUrl = ev.target.dataset.source;
  const html = `
    <img src="${imageUrl}" width="800" height="600">
`;
  const currentLightbox = basicLightbox.create(html);
  currentLightbox.show();

  onEscKeyCloseModal(currentLightbox);
}

function onEscKeyCloseModal(currentLightbox) {
  gallaryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      currentLightbox.close();
    }
  });
}
function stopAutoRedirect(ev) {
  ev.preventDefault();
}
