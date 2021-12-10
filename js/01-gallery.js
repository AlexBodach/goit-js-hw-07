import { galleryItems } from './gallery-items.js';
// Change code below this line
const ref = {
    boxGallery: document.querySelector("div.gallery")
}

const gallery = galleryItems.map((element) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
                class="gallery__image"
                src="${element.preview}"
                data-source="large-image.jp"
                alt="${element.description}"
            />
        </a>
    </div>`   
).join(''); 

ref.boxGallery.insertAdjacentHTML('beforeend', gallery);

