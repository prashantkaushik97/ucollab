import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, ThemeProvider, createTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import VideoCallIcon from '@mui/icons-material/VideoCall';

// Create a dark theme for the menu
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#202225',
    },
    text: {
      primary: '#b9bbbe',
    },
  },
});

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" sx={{ bgcolor: '#202225', boxShadow: 'none', borderBottom: '1px solid #40444b' }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'flex-end' }}>
          <Box sx={{ color: '#b9bbbe' }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="profile"
              sx={{ '&:hover': { bgcolor: '#36393f' } }}
              onClick={handleMenu}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="start a call"
              sx={{ '&:hover': { bgcolor: '#36393f' } }}
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="start a video call"
              sx={{ '&:hover': { bgcolor: '#36393f' } }}
            >
              <VideoCallIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
