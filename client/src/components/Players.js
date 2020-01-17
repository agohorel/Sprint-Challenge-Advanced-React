import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Player } from "./Player";

export const Players = ({ state }) => {
  if (state.loading) {
    return (
      <div data-testid="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  } else {
    return (
      <div>
        {state.players.map(player => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    );
  }
};
