import { Button, Card, Elevation } from '@blueprintjs/core';
import * as React from 'react';

interface ICountryBadge {
  loading: boolean;
  country: any;
}

export const CountryBadge: React.StatelessComponent<ICountryBadge> = ({ loading, country }) => {
  if (loading) {
    return null;
  }
  return (
    <div className="country-badge">
      <Card interactive={false} elevation={Elevation.TWO}>
        <h5><a href="#">Card heading</a></h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
    </div>
  )
}
