import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
  type,
}) => {
  return (
    <div>
      <li>
        <img
          style={{ cursor: 'pointer' }}
          src={webformatURL}
          alt={type}
          onClick={() => toggleModal(largeImageURL)}
          width="300"
          height="300"
        />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
