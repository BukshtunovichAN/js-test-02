import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
gallaryContainer.addEventListener("click", onGalleryClick);

let options = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

function onGalleryClick(ev) {
  ev.preventDefault();
}
