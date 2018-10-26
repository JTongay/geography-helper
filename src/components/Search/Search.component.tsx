// import { FormGroup, InputGroup } from '@blueprintjs/core';
import * as React from 'react';

interface ISearchProps {
  handleSearch: (val: string) => void;
  setCountrySearchVal: (val: string) => void;
  countrySearch: string;
}

export const Search: React.StatelessComponent<ISearchProps> = ({ 
  handleSearch,
  setCountrySearchVal,
  countrySearch }) => {

  const handleClick = (event: React.MouseEvent<HTMLElement>, val: string) => {
    event.preventDefault();
    handleSearch(val)
  }

  const handleSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearchVal(e.target.value);
  }

  return (
    <div className="bp3-input-group .bp3-input-large">
      <span className="bp3-icon bp3-icon-search" />
      <input className="bp3-input" type="search" onChange={handleSearchVal} value={countrySearch} name="search" placeholder="Search input" dir="auto" />
      {/* tslint:disable-next-line jsx-no-lambda */}
      <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right" onClick={(e) => handleClick(e, countrySearch)}>Search</button>
    </div>
  )
}
