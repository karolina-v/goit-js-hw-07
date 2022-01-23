import { galleryItems } from './gallery-items.js';  

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onImageClick);


function createImageCards (galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
          return `<a class='gallery__link' href='${original}'>
                       <img
                       class='gallery__image'
                       src='${preview}' 
                       data-source="${original}" 
                       alt='${description}'>
                    </a>`;
    })
      .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createImageCards(galleryItems));



function onImageClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }


    const imageLink = e.target.dataset.source;
    const imageDescription = e.target.alt;
    const imageToLightbox = `<img src ='${imageLink}', alt='${imageDescription}'>`;
    
    const options = {
onShow: () => {window.addEventListener("keydown", onCloseEscape);
},
onClose: () => {window.removeEventListener("keydown", onCloseEscape);
},
    }

   
    const instance = basicLightbox.create(imageToLightbox, `${options}`);
    instance.show();

    function onCloseEscape(e) {
        if (e.code === 'Escape') {
            instance.close(options.onClose);
        }
         instance.show(options.onShow);
    }
    
}
 