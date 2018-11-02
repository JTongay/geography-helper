import { Button, Card, Elevation } from '@blueprintjs/core';
import * as React from 'react';
import { ICountryResult } from 'src/types';
import './_CountryBadge.css';

interface ICountryBadge {
  loading: boolean;
  country: ICountryResult;
}

export const CountryBadge: React.StatelessComponent<ICountryBadge> = ({ loading, country }) => {
  if (loading) {
    return null;
  }
  return (
    <div className="country-badge">
      <Card interactive={false} elevation={Elevation.TWO}>
        <h5><a href="#">{country.name}</a></h5>
        <img src={country.flag} alt="country-flag" className="country-flag" />
        <p>Capital: {country.capital}</p>
        <Button>Submit</Button>
      </Card>
    </div>
  )
}
