import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Createnote from "./components/pages/Create";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/createNote" component={Createnote} />
            <Route exact path="/createNote/:id" component={Createnote} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
