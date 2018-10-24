// import { FormGroup, InputGroup } from '@blueprintjs/core';
import * as React from 'react';

export const Search: React.StatelessComponent<{}> = () => {
  return (
    <div className="bp3-input-group .bp3-input-large">
      <span className="bp3-icon bp3-icon-search" />
      <input className="bp3-input" type="search" placeholder="Search input" dir="auto" />
      <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right">Search</button>
    </div>
  )
}
