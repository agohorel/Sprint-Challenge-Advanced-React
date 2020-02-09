import React from "react";
import styled from "styled-components";

import { Navbar } from "./Navbar";

export const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <StyledLayout>{props.children}</StyledLayout>
    </>
  );
};

const StyledLayout = styled.main`
  padding: 2rem;
  background-color: #3c3c3c;
  min-height: 100vh;
`;
