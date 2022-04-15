import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


const imagesMarkUp = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkUp);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
    enableKeyboard: "true",
});