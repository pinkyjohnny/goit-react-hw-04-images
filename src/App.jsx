import React from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchGallery } from 'services/api.js';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ImageModal, Wrapper } from 'App.styled';
import { Circles } from 'react-loader-spinner';

export class App extends React.Component {
  state = {
    loading: false,
    first_load: false,
    error: null,
    images: [],
    page: 1,
    per_page: 12,
    q: '',
    total: null,
    isOpen: false,
    contentModal: null,
  };

  async componentDidMount() {
    this.state.first_load = true;
    const { per_page, page } = this.state;
    this.getPhotos({ per_page, page });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { per_page, page, q } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      this.getPhotos({ per_page, page, q });
    }
  }

  getPhotos = async params => {
    const { first_load, q, page } = this.state;
    this.setState({ loading: true });
    try {
      const { hits, totalHits } = await fetchGallery(params);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
      if (first_load || (q && page === 1)) {
        toast.success(`We found ${totalHits} results!`);
      }
      this.state.first_load = false;
    } catch (error) {
      toast.error('Sorry, but something went wrong :(');
    }
  };

  handleLoadMore = () => {
    this.setState({ loading: true });
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleSetSearch = q => {
    this.setState({ q, images: [], page: 1 });
  };

  toggleModal = largeImageURL => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      contentModal: largeImageURL,
    }));
  };

  render() {
    const { images, loading, q, isOpen, contentModal, total } = this.state;
    return (
      <Wrapper>
        <SearchBar
          setSearch={this.handleSetSearch}
          loading={loading}
          query={q}
        />
        <ImageGallery toggleModal={this.toggleModal} images={images} />

        {total > images.length ? (
          <Button onClick={this.handleLoadMore}>
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
          <Modal close={this.toggleModal}>
            <ImageModal src={contentModal} alt="large pic" />
          </Modal>
        ) : null}
      </Wrapper>
    );
  }
}
