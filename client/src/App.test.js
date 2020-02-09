import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import { Players } from "./components/Players";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a loader animation when loading", () => {
  const { getByTestId } = render(<Players state={{ loading: true }}></Players>);
  const loader = getByTestId(/loader/i);
});

it("renders a list of players", () => {
  const { getByTestId } = render(
    <Players state={{ loading: false, players: [{ name: "klasd" }] }}></Players>
  );
  const player = getByTestId(/player/i);
});
