// import { FormGroup, InputGroup } from '@blueprintjs/core';
import * as React from 'react';

interface ISearchProps {
  handleSearch: (e: Event, val: string) => void;
  search: string
}

export const Search: React.StatelessComponent<ISearchProps> = ({handleSearch, search}) => {

  const handleClick: any = (e: any, val: string) => {
    handleSearch(e, val)
  }

  const handleSearchVal: any = (e: any) => {
    search += e.target.value;
    console.log(search);
  }

  return (
    <div className="bp3-input-group .bp3-input-large">
      <span className="bp3-icon bp3-icon-search" />
      <input className="bp3-input" type="search" onChange={handleSearchVal} value={search} name="search" placeholder="Search input" dir="auto" />
      {/* tslint:disable-next-line jsx-no-lambda */}
      <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right" onClick={(e) => handleClick(e, search)}>Search</button>
    </div>
  )
}
