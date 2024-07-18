import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import styled from "styled-components";
import logo from "./logoPic.webp"; 

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
  &.active {
    font-weight: bold;
    color:black;
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: var(--navbar-color) !important;
  box-shadow: white 0px 2px 1px, white 0px 4px 2px, white 0px 8px 4px, white 0px 16px 8px, white 10px 32px 16px;
`;

const Logo = styled.img`
  height: 80px; /* Adjust the height as needed */
  margin-right: 10px;
  border-color:#143340;
  border-style:solid;
  border-width:5px;
`;

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo src={logo} alt="Company Logo" />
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          MedCare
        </Typography>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about/mission">About</StyledNavLink>

        <StyledNavLink to="/contact-us/:department">Contact Us</StyledNavLink>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness2Icon />}
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
