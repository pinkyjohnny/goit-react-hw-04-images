import React from 'react';
import PropTypes from 'prop-types';
import { Header, SearchButton, SearchInput } from './Searchbar.styled';

export class SearchBar extends React.Component {
  state = {
    searchStr: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchStr) {
      return;
    }
    this.props.setSearch(this.state.searchStr);
    this.setState({ searchStr: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <SearchInput
            onChange={e =>
              this.setState({
                searchStr: e.target.value,
              })
            }
            value={this.state.searchStr}
            type="search"
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
