import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { Player } from "./Player";

export const Players = ({ state, category, updateFavorites, favorites }) => {
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
    if (!state[category].length) {
      return (
        <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
          You have no favorites! Go add some!
        </h2>
      );
    } else {
      return (
        <PlayerContainer>
          {state[category].map(player => (
            <Player
              key={player.id}
              player={player}
              state={state}
              favoritePlayers={favoritePlayers}
              setFavoritePlayers={setFavoritePlayers}
              updateFavorites={updateFavorites}
              favorites={favorites}
            ></Player>
          ))}
        </PlayerContainer>
      );
    }
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
