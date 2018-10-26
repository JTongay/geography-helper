import * as React from 'react';
import { Request } from 'src/agent';
import { Search } from 'src/components';
import splashImg from '../../images/globe_splash.jpg';
import './_Home.css';

interface IHomeState {
  countryResult: any;
  countrySearch: string;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.setCountrySearchVal = this.setCountrySearchVal.bind(this);
    this.state = {
      countryResult: null,
      countrySearch: ''
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

  public async handleSearch(val: string): Promise<void> {
    let countryResult: any;
    try {
      countryResult = await Request.name(val);
      this.setState({
        countryResult
      })
    } catch (e) {
      throw new Error(e);
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
      </section>
    )
  }
}
