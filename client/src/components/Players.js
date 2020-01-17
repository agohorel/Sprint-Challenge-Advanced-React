import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { Player } from "./Player";

export const Players = ({ state, category }) => {
  const [favoritePlayers, setFavoritePlayers] = useLocalStorage(
    "favorite_players",
    []
  );

  if (state.loading) {
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="Rings" color="#13baaf" height={300} width={300} />
      </LoaderContainer>
    );
  } else {
    return (
      <PlayerContainer>
        {state[category].map(player => (
          <Player
            key={player.id}
            player={player}
            favoritePlayers={favoritePlayers}
            setFavoritePlayers={setFavoritePlayers}
          ></Player>
        ))}
      </PlayerContainer>
    );
  }
};

const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoaderContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
