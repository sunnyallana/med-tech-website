import {AppBar,Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import style from './Navbar.module.css'
import { IoMedical } from "react-icons/io5";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); 
  const [scrolling, setScrolling] = useState(false);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const closeMenu = () => {
    setAnchorEl(null); 
  };

  const isMenuOpen = Boolean(anchorEl);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <AppBar  position="fixed"
    sx={{
      backgroundColor: scrolling ? "black" : "transparent",
      transition: "background-color 0.3s ease", // Smooth transition
    }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
        <IoMedical />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          MedTech
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button component={Link} to="/" id={style.NavbarStyleH}>
            <IconButton>
              <HomeIcon id={style.NavbarStyleH}/>
            </IconButton>
          </Button>
          <Button component={Link} to="/story" color="inherit" id={style.NavbarStyle}>
            Our Story
          </Button>
          <Button component={Link} to="/healthcaresolutions" color="inherit" id={style.NavbarStyle}>
            HealthCareSolutions
          </Button>
          <Button component={Link} to="/projects" color="inherit" id={style.NavbarStyle}>
            Projects
          </Button>
          <Button component={Link} to="/events" color="inherit"id={style.NavbarStyle}>
            Events
          </Button>
          <Button component={Link} to="/contact" color="inherit"id={style.NavbarStyle}>
            Contact
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={openMenu}>
            <MenuIcon edge="end" aria-label="menu" />
          </IconButton>
          <Menu
            anchorEl={anchorEl} 
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu} component={Link} to="/">
              <IconButton>
                <HomeIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/story">Our Story</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/healthcaresolutions">HealthCare Solutions</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/projects">Projects</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/events">Events</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/contact">Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
