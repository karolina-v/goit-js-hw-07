import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('gallery');


const newLinkEl = document.createElement('a');
newLinkEl.classList.add('gallery_link');

const newImgEl = document.createElement('img');
newImgEl.classList.add('gallery_image');
newLinkEl.append(newImgEl);

const imagePreview = galleryItems.map(item => {
    newLinkEl.href = item.original;
    newImgEl.src = item.preview;
    newImgEl.alt = item.description;
});

galleryEl.append(newImgEl);
console.log(galleryEl);



galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery_image')) {
    return;
    }
}