import * as React from 'react';
// import { Request } from 'src/agent';
import { Search } from 'src/components';
import splashImg from '../../images/globe_splash.jpg';
import './_Home.css';

export class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      response: null
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

  public render(): JSX.Element {
    console.log(this.state);
    return (
      <section className="home-layout">
        <img src={splashImg} alt="" className="splash-img" />
        <div className="splash-text">
          <p>Geography Helper</p>
        </div>
        <Search />
      </section>
    )
  }
}
