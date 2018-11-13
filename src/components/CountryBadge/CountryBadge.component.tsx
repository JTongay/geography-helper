import { Button, Card, Elevation } from '@blueprintjs/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/${country.alpha3Code}`}>Go To Country</Link>
        <Button>Submit</Button>
      </Card>
    </div>
  )
}
