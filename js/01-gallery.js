import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector("ul");
const galleryItem = galleryItems.map(({ preview, original, description }) =>` 
<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("");
galleryList.insertAdjacentHTML("afterbegin", galleryItem);
galleryList.addEventListener('click', galleryClick);
function galleryClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    const imgSrc = e.target.dataset.source;
    const imgAlt = e.target.alt;
    const instance = basicLightbox.create(`<img src="${imgSrc}" alt="${imgAlt}"/>`, {
    onShow: (instance) => {
      document.addEventListener("keydown", onClose)
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onClose);
    }
    });
    instance.show();
    function onClose(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }
}



console.log(galleryItems);
