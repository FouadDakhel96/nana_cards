import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./components/navbar"
import Card from "./components/card"
import Finalstep from "./components/finalstep"
import Home from "./components/home"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
          <Route path="/cards" component={Card} />
            <Route path="/finalstep" component={Finalstep} />
          </Switch>
        </div>
      </Router>
    );
  }

}
export default App;
