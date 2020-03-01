import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import SuggestAMovieForm from "./components/Movie/SuggestAMovieForm";
import VoteForAMovieForm from "./components/Movie/VoteForAMovieForm";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/suggestMovie" component={SuggestAMovieForm} />
            <Route exact path="/voteMovie/:id" component={VoteForAMovieForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
