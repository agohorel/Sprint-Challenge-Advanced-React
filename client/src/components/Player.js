import React from "react";
import styled from "styled-components";

export const Player = ({ player, favoritePlayers, setFavoritePlayers }) => {
  if (player) {
    return (
      <PlayerCard
        data-testid="player"
        onClick={() => setFavoritePlayers(favoritePlayers.concat(player))}
      >
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country}</h3>
        <h3>No. Searches: {player.searches}</h3>
      </PlayerCard>
    );
  } else {
    return null;
  }
};

const PlayerCard = styled.div`
  background-color: #1c1c1c;
  padding: 1rem;
  margin: 1rem;
  width: calc(33% - 2rem);

  h2,
  h3 {
    color: #eee;
  }

  :hover {
    cursor: pointer;
    background-color: #6c6c6c;

    h2,
    h3 {
      color: #1c1c1c;
    }
  }

  @media (max-width: 1100px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
