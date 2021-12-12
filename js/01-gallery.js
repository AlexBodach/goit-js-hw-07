import { galleryItems } from './gallery-items.js';

const ref = {
    boxGallery: document.querySelector("div.gallery")
}

const gallery = galleryItems.map((element) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
                class="gallery__image"
                src="${element.preview}"
                data-source="${element.original}"
                alt="${element.description}"
            />
        </a>
    </div>`   
).join(''); 

ref.boxGallery.insertAdjacentHTML('beforeend', gallery);


function modalImageOpen (imagesLink) {
    const instance = basicLightbox.create(`
        <img src="${imagesLink}" width="800" height="600">`)        
      instance.show()     
      closeModalWithEsc (instance)
};

function closeModalWithEsc (instance) {
    if (basicLightbox.visible()) {
        window.addEventListener('keydown', () => {     
            if(event.key === 'Escape') {
               instance.close()
               window.removeEventListener('keydown', () => {})
            }
        })
    }
}

function onImageGalleryClick (e) {
    e.preventDefault();
    document.querySelector('a.gallery__link');   
    let imagesLink = e.target.dataset.source;
    modalImageOpen (imagesLink)
  };
 

ref.boxGallery.addEventListener("click", onImageGalleryClick)

