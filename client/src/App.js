import React, { Component } from "react";
import axios from "axios";

import { Players } from "./components/Players";

export default class App extends Component {
  state = {
    players: [],
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
  }

  render() {
    return (
      <div>
        <Players state={this.state}></Players>
      </div>
    );
  }
}
