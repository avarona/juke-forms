import React from 'react';
import axios from 'axios';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.collectInput = this.collectInput.bind(this);
  }

  collectInput(evt) {
    const value = evt.target.value;
    this.setState({ inputValue: value });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filterableArtists = this.props.artists.filter((artist) => artist.name.match(inputValue))
    return (
      <div>
        <FilterInput collectInput={this.collectInput} />
        <Artists artists={filterableArtists} />
      </div>
    )
  }
}

export default FilterableArtistsContainer;
