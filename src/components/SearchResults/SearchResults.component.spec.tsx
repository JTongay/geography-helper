import * as React from 'react';
import { render } from 'react-testing-library';
import { mockResult } from '../../mockResult';
import { SearchResults } from './SearchResults.component';

describe('SearchResults Component', () => {
  it('renders welcome message', () => {
    const component = render(
      <SearchResults
        error={false}
        loading={false}
        countries={mockResult}
      />);
    expect(component).toBeDefined();
  });
});
