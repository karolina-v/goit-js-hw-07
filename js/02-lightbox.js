import { galleryItems } from './gallery-items.js';  

const galleryEl = document.querySelector('.gallery');

// galleryEl.addEventListener('click', onImageClick);


function createImageCards (galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
          return `<a class='gallery__item' href='${original}'>
                       <img
                       class='gallery__image'
                       src='${preview}' 
                       alt='${description}'>
                    </a>`;
    })
      .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createImageCards(galleryItems));



// function onImageClick(e) {
//     e.preventDefault();

//     if (e.target.nodeName !== 'IMG') {
//         return;
//     }

    const lightbox = new SimpleLightbox('.gallery a', {
        'captionType': 'atr',
        'captionsData': 'alt',
        'captionPosition': 'bottom',
        'captionDelay': 250,

    });

    
// }
 