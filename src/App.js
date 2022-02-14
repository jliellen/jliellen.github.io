import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import Home from './pages/home/home'
import Personal from "./pages/home/personal";

class App extends Component {

  render() {
    return (
      <>
        <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/personal'} component={Personal} h/>
      </Switch> 
      </> 
    );
  }
}

export default App;
