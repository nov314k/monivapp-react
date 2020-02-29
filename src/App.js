import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieBox from "./components/Movie/MovieBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuggestAMovieForm from "./components/Movie/SuggestAMovieForm";
import { Provider } from "react-redux";
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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
