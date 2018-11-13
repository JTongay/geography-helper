import * as React from 'react';
import { ICountryResult } from 'src/types';

interface ICountryInfoProps {
  country: ICountryResult | undefined;
  loading: boolean;
}

export const CountryInfo: React.StatelessComponent<ICountryInfoProps> = ({ country, loading }) => {
  if (country) {
    return (
      <section className="country-info-section">
        <h1>{country.name}</h1>
        <img src={country.flag} alt=""/>
        <h4>Capital: {country.capital}</h4>
        <h4>Region: {country.region}, {country.subregion}</h4>
        <p>Population: {country.population.toLocaleString()}</p>
      </section>
    )
  }
  return null;
}
