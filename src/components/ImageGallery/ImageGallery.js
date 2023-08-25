import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        <ImageGalleryItem
          key={id}
          imagesUrl={webformatURL}
          imagesLargeUrl={largeImageURL}
        />;
      })}
    </ul>
  );
};
