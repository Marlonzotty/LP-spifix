import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/logo.jpg'; // Ajuste o caminho conforme necessário

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>Features</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Testimonials</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Highlights</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Pricing</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>FAQ</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Sign in</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Button variant="contained" color="primary" style={{ borderRadius: '20px' }}>Sign up</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ borderRadius: '50px', margin: '10px' }}>
      <Toolbar>
        <img src={logo} alt="Spifex Logo" style={{ height: '50px', width: '50px', marginRight: '10px', borderRadius: '10%' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          Spifex
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMobileMenuOpen}>
              <FaBars />
            </IconButton>
            {renderMobileMenu}
          </>
        ) : (
          <>
            <Button color="inherit">Nossos Valores</Button>
            <Button color="inherit">Quem Somos Nós</Button>
            <Button color="inherit">Preços</Button>
            <Button color="inherit">Dúvidas</Button>
            <IconButton color="inherit" onClick={handleMenu}>
              <FaMoon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Button color="inherit">Sign in</Button>
            <Button variant="contained" color="primary" style={{ borderRadius: '20px', marginLeft: '10px' }}>Sign up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
