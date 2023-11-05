import React, { useEffect, useState } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchGallery } from 'services/api.js';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ImageModal, Wrapper } from 'App.styled';
import { Circles } from 'react-loader-spinner';

export const App = () => {
  // state = {
  //   loading: false,
  //   first_load: false,
  //   error: null,
  //   images: [],
  //   page: 1,
  //   per_page: 12,
  //   q: '',
  //   total: null,
  //   isOpen: false,
  //   contentModal: null,
  // };

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [total, setTotal] = useState(null);
  const [first_load, setFirstLoad] = useState(false);
  const [per_page] = useState(12);
  const [modal, setModal] = useState({
    contentModal: null,
    isOpen: false,
  });

  useEffect(() => {
    const getPhotos = async params => {
      try {
        setLoading(true);
        const { hits, totalHits } = await fetchGallery(params);
        setImages(prev => [...prev, ...hits]);
        setTotal(totalHits);

        if (hits.length === 0 && page === 1) {
          toast.warning('There are no images by this search point word');
        } else if (page === 1) {
          toast.success(`We found ${totalHits} images`);
        }
      } catch (error) {
        toast.error('Sorry, but something went wrong :(');
      } finally {
        setLoading(false);
        setFirstLoad(false);
      }
    };

    if (q) {
      getPhotos({ per_page: per_page, page, q: q });
    } else {
      getPhotos({ per_page: per_page, page });
    }
  }, [per_page, page, q, first_load]);

  const handleLoadMore = () => {
    setLoading({ loading: true });
    setPage(prev => prev + 1);
  };

  const handleSetSearch = query => {
    if (q !== query) {
      setPage(1);
      setImages([]);
      setQ(query);
    }
  };

  const { isOpen, contentModal } = modal;
  const toggleModal = largeImageURL => {
    setModal(prev => ({
      isOpen: !prev.isOpen,
      contentModal: largeImageURL,
    }));
  };

  return (
    <Wrapper>
      <SearchBar setSearch={handleSetSearch} loading={loading} query={q} />
      <ImageGallery toggleModal={toggleModal} images={images} />

      {total > images.length ? (
        <Button onClick={handleLoadMore}>
          {loading ? 'Loading...' : 'Load more'}
        </Button>
      ) : null}

      {loading && (
        <Circles
          height="80"
          width="80"
          color="rgba(65, 47, 23, 0.673)"
          ariaLabel="circles-loading"
          wrapperStyle={{
            marginLeft: '50%',
          }}
          visible={true}
        />
      )}

      {isOpen && contentModal ? (
        <Modal close={toggleModal}>
          <ImageModal src={modal.contentModal} alt="large pic" />
        </Modal>
      ) : null}
    </Wrapper>
  );
};
