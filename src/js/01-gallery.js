// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const GalleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    )
    .join('');
}
gallery.insertAdjacentHTML('afterbegin', GalleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
