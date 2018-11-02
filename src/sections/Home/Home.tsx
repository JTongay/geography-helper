// import { Spinner } from '@blueprintjs/core';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Request } from 'src/agent';
import { CountryBadge, Loading, Search, SearchResults } from 'src/components';
import { ICountryResult } from 'src/types';
import splashImg from '../../images/globe_splash.jpg';
// import { mockResult } from '../../mockResult';
import './_Home.css';

interface IHomeState {
  countryResult: any;
  countrySearch: string;
  loading: boolean;
  error: boolean;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.setCountrySearchVal = this.setCountrySearchVal.bind(this);
    this.state = {
      countryResult: null,
      countrySearch: '',
      error: false,
      loading: false
    };
  }

  get countryResult(): any {
    return this.state.countryResult;
  }

  get countrySearch(): string {
    return this.state.countrySearch;
  }

  public setCountrySearchVal(val: string): void {
    this.setState({ countrySearch: val });
  }

  public renderCountryBadges(countries: ICountryResult[]): JSX.Element[] | void {
    if (countries) {
      return countries.map((country, index) => {
        return <CountryBadge key={index} loading={this.state.loading} country={country} />
      });
    }
  }

  public async handleSearch(val: string): Promise<void> {
    let countryResult: AxiosResponse<ICountryResult[]>;
    this.setState({ loading: true });
    try {
      countryResult = await Request.name(val);
      this.setState({
        countryResult: countryResult.data
      })
    } catch (e) {
      this.setState({ loading: false, error: true, countryResult: null });
    } finally {
      this.setState({ loading: false });
    }
  }

  public render(): JSX.Element {
    return (
      <section className="home-layout">
        <img src={splashImg} alt="" className="splash-img" />
        <div className="splash-text">
          <p>Geography Helper</p>
        </div>
        <h2 className="home-title">Title</h2>
        <Search 
          handleSearch={this.handleSearch}
          countrySearch={this.countrySearch}
          setCountrySearchVal={this.setCountrySearchVal}
        />
        <Loading loading={this.state.loading} />
        <SearchResults 
          loading={this.state.loading}
          countries={this.state.countryResult}
          error={this.state.error}
        />
      </section>
    )
  }
}
