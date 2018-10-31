// import { Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { Request } from 'src/agent';
import { CountryBadge, Loading, Search } from 'src/components';
import splashImg from '../../images/globe_splash.jpg';
import { mockResult } from '../../mockResult';
import './_Home.css';

interface IHomeState {
  countryResult: any;
  countrySearch: string;
  loading: boolean;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.setCountrySearchVal = this.setCountrySearchVal.bind(this);
    this.state = {
      countryResult: null,
      countrySearch: '',
      loading: false
    };
  }

  // public async componentDidMount(): Promise<void> {
  //   let response: any;
  //   try {
  //     response = await Request.name('us')
  //     this.setState({
  //       response
  //     });
  //   } catch(e) {
  //     throw Error(e);
  //   }
  // }

  get countryResult(): any {
    return this.state.countryResult;
  }

  get countrySearch(): string {
    return this.state.countrySearch;
  }

  public setCountrySearchVal(val: string): void {
    this.setState({ countrySearch: val });
  }

  public renderCountryBadges(countries: any[]): JSX.Element[] {
    return countries.map((country, index) => {
      return <CountryBadge key={index} loading={this.state.loading} country={country} />
    });
  }

  public async handleSearch(val: string): Promise<void> {
    let countryResult: any;
    this.setState({ loading: true });
    try {
      countryResult = await Request.name(val);
      this.setState({
        countryResult
      })
    } catch (e) {
      this.setState({ loading: false });
      throw new Error(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  public render(): JSX.Element {
    console.log(this.countryResult)
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
        {this.renderCountryBadges(mockResult)}
      </section>
    )
  }
}
