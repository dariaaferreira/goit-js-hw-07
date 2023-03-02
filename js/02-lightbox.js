import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.map(({ original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`
}).join(" ");

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { 
    /* options */ 
    captions: true, 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'    
});