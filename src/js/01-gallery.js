// Add imports above this line
import { galleryItems } from './gallery-items.js';
// // Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);


function createrImg (arr) {
  return arr.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
};

const ul = document.querySelector('.gallery');

ul.addEventListener('click', handlerClick);
ul.insertAdjacentHTML('beforeend', createrImg(galleryItems));


function handlerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  
}

const fullImg = e.target.dataset.source;
const instance = SimpleLightbox.create(`
    <img src="${fullImg}" width="800" height="600">`)
  instance.show();
  
  ul.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    instance.close();
  }
});
};


