import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeStyles = {
  fontWeight: "bolder",
  textDecoration: "line-through"
};

export const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/home" activeStyle={activeStyles}>
        View All
      </NavItem>
      <NavItem to="/favorites" activeStyle={activeStyles}>
        View Favorites
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  height: 60px;
  padding: 0 20%;
  justify-content: space-around;
  align-items: center;
  background-color: #010101;
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  color: #eee;
  font-size: 32px;
  text-decoration: none;

  :visited {
    color: #eee;
  }

  :hover {
    color: #13baaf;
  }
`;
