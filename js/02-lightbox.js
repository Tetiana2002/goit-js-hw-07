import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryItem = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
).join("");
galleryList.insertAdjacentHTML('afterbegin', galleryItem);
const modal = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
        captionsData: "alt",
})
console.log(galleryItems);
