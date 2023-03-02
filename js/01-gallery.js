import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const images = galleryItems.map(({ original, preview, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`
}).join(" ");

galleryContainer.innerHTML = images;

console.log(galleryItems);

galleryContainer.addEventListener('click', onClick);
  
const instance = basicLightbox.create(`<img src="#" width="800" height="600">`, {
    onShow: (instance) => {
        window.addEventListener('keydown', onEscape)
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onEscape)
    }
});
  
function onClick(event) {
    event.preventDefault();

    instance.element().querySelector('img').src = 
    event.target.dataset.source;

    instance.show(); 
}
  
function onEscape(event) {
   if (event.code === "Escape") {
    instance.close();
   }
}

