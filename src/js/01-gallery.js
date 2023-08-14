// Add imports above this line
import { galleryItems } from './gallery-items.js';
// // Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// console.log(galleryItems);


function galleryImg(arr) {
   return arr.map(({ preview, original, description }) =>
  `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')

};

const ul = document.querySelector('.gallery');
ul.addEventListener('click', handlerClick);
ul.insertAdjacentHTML('beforeend', galleryImg(galleryItems));

function handlerClick(e) {
  e.preventDefault();
};
  
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})

ul.style.listStyle = 'none';
