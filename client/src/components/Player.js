import React from "react";

export const Player = ({ player }) => {
  console.log(player);
  if (player) {
    return (
      <>
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country}</h3>
        <h3>No. Searches: {player.searches}</h3>
      </>
    );
  } else {
    return null;
  }
};
