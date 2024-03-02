import React from 'react';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#202225', boxShadow: 'none', borderBottom: '1px solid #40444b' }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ color: '#b9bbbe' }}>
          <IconButton edge="end" color="inherit" aria-label="profile" sx={{ '&:hover': { bgcolor: '#36393f' } }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="start a call" sx={{ '&:hover': { bgcolor: '#36393f' } }}>
            <PhoneIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="start a video call" sx={{ '&:hover': { bgcolor: '#36393f' } }}>
            <VideoCallIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
