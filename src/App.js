import React, { Component } from "react";
import "./App.css";
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";

import Createnote from "./components/pages/Create";
import Editnote from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Note from "./components/pages/Note";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/note/:id" component={Note} />
            <Route exact path="/createNote" component={Createnote} />
            <Route exact path="/editNote/:id" component={Editnote} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
