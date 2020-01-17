import React from "react";

export const Player = ({ player, favoritePlayers, setFavoritePlayers }) => {
  if (player) {
    return (
      <div
        data-testid="player"
        onClick={() => setFavoritePlayers(favoritePlayers.concat(player))}
      >
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country}</h3>
        <h3>No. Searches: {player.searches}</h3>
      </div>
    );
  } else {
    return null;
  }
};
