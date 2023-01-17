// console.log('asaslkdfjlaskdjf');
// localStorage.clear();
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

// Селектор галереї
const mainGallery = document.querySelector('.gallery');

// Функція створення розмітки галереї:
function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
          />
        </a>
      </div>
    `;
    })
    .join('');
}
const cardMarkup = createGalleryMarkup(galleryItems);
mainGallery.insertAdjacentHTML('beforeend', cardMarkup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
