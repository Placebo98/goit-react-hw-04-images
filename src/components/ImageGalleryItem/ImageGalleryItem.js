import { ModalImg } from 'components/Modal/Modal';
import { useState } from 'react';

import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgUrl, imgLargeUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GalleryItem>
      <GalleryItemImage onClick={openModal} src={imgUrl} alt={'опис'} />
      <ModalImg
        largeUrl={imgLargeUrl}
        isModalOpen={isModalOpen}
        onClose={closeModal}
      />
    </GalleryItem>
  );
};
