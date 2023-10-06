import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import url from "../Project_M2.png";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <Box
          // className={classes.root}
          component="img"
          sx={{
            height: 40,
            width: 110,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Logo"
          src={url}
        />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            9836
          </NavLink>
          <NavLink to="/events" activeStyle>
            Personal
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Settings
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
