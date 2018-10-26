import * as React from 'react';
// import { Request } from 'src/agent';
import { Search } from 'src/components';
import splashImg from '../../images/globe_splash.jpg';
import './_Home.css';

interface IHomeState {
  response: any;
  search: string;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      response: null,
      search: ''
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

  public handleSearch(e: Event, val: string): void {
    console.log(e, 'home comp')
    console.log(val, 'home comp')
    this.setState({
      response: val
    })
  }

  public render(): JSX.Element {
    console.log(this.state);
    return (
      <section className="home-layout">
        <img src={splashImg} alt="" className="splash-img" />
        <div className="splash-text">
          <p>Geography Helper</p>
        </div>
        <h2 className="home-title">Title</h2>
        <Search handleSearch={this.handleSearch} search={this.state.search} />
      </section>
    )
  }
}
