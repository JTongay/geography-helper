import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import { Footer, Nav } from './components';
import { Country, Home } from './sections';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <HashRouter>
        <div className='main-layout'>
          <Nav />
          <Route component={Home} exact={true} path='/' />
          <Route component={Country} path='/:country' />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
