import * as React from 'react';
import { ICountryResult } from 'src/types';
import { CountryBadge, Error } from '../';

interface ISearchResultsProps {
  countries: ICountryResult[];
  loading: boolean;
  error: any;
}

export const SearchResults: React.StatelessComponent<ISearchResultsProps> = ({ countries, loading, error }) => {
  if (countries) {
    return (
      <section className="country-badges-container">
        {countries.map((country, index) => <CountryBadge key={index} loading={loading} country={country} />)}
      </section>
    )
  }

  if (error) {
    return (
      <Error error={error} />
    )
  }
  return null;
}
