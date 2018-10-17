import * as React from 'react';
import { Request } from 'src/agent';

export class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public async componentDidMount(): Promise<void> {
    let response: any;
    try {
      response = await Request.name('us')
    } catch(e) {
      throw Error(e);
    }
  }
}