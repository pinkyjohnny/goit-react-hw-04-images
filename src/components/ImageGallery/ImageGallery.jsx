import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images = [], toggleModal }) => {
  return (
    <div>
      <GalleryList>
        {images.map(image => (
          <ImageGalleryItem
            toggleModal={toggleModal}
            key={image.id}
            {...image}
          />
        ))}
      </GalleryList>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
