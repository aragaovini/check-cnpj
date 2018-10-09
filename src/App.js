import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home';
import CheckCnpj from './pages/checkCnpj';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/check-cnpj" component={CheckCnpj} />
          </Switch>
      </div>
    );
  }
}

export default App;
