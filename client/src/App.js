import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import { Players } from "./components/Players";

export default class App extends Component {
  state = {
    players: [],
    favorites: [],
    loading: false
  };

  componentDidMount() {
    const fetch = url => {
      this.setState({ loading: true });
      setTimeout(async () => {
        try {
          const res = await axios.get(url);
          this.setState({ players: res.data, loading: false });
        } catch (err) {
          console.error(err);
          this.setState({ loading: false });
        }
      }, 2000);
    };

    fetch("http://localhost:5000/api/players");

    const favorites =
      JSON.parse(window.localStorage.getItem("favorite_players")) || [];

    this.setState({ favorites });
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Players state={this.state} category="players"></Players>
          </Route>
          <Route path="/favorites">
            <Players state={this.state} category="favorites"></Players>
          </Route>
        </Router>
      </div>
    );
  }
}
