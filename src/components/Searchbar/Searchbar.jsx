import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchButton, SearchInput } from './Searchbar.styled';

export const SearchBar = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchQuery) {
      return;
    }
    setSearch(searchQuery);
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <SearchInput
          onChange={handleInputChange}
          value={searchQuery}
          type="search"
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
