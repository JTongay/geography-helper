import { AxiosResponse } from 'axios';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CountryInfo, Loading } from 'src/components';
import { ICountryResult } from 'src/types';
import { Request } from '../../agent';

interface ICountryRouterProps {
  country: string;   // This one is coming from the router
}

interface ICountryProps extends RouteComponentProps<ICountryRouterProps> {
  // Add your regular properties here
}

interface ICountryState {
  country?: ICountryResult | undefined;
  error: boolean;
  loading: boolean;
}

export class Country extends React.Component<ICountryProps, ICountryState> {
  constructor(props: ICountryProps) {
    super(props);
    this.state = {
      country: undefined,
      error: false,
      loading: true
    };
  }

  public async componentDidMount(): Promise<void> {
    let country: AxiosResponse<ICountryResult>;
    this.setState({ loading: true });
    try {
      country = await Request.alpha3(this.props.match.params.country);
      this.setState({ country: country.data });
    } catch (e) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  get loading(): boolean {
    return this.state.loading;
  }

  get country(): ICountryResult | undefined {
    return this.state.country;
  }

  public render(): JSX.Element {
    return (
      <section className="country-section">      
        <h1>Country Page</h1>
        <Loading loading={this.loading} />
        <CountryInfo loading={this.loading} country={this.country} />
      </section>
    )
  }
}
