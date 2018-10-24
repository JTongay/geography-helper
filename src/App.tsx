import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import { Footer, Nav } from './components';
import { Home } from './sections';

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div className='main-layout'>
          <Nav />
          <Route component={Home} path='/' />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
