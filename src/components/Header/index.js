import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactComponent as Logo } from '../../logo.svg';
import './styles.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appHeader">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="secondary">
        Menu
      </Button>
      <div className="appLogo">
      <h1 className="appTitle">Fans Journal</h1>
        <Logo></Logo>
      </div>
      
      

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className="menu-item">
            <span className="logo-text">All Marvel Comics</span>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/read" className="menu-item">
            <span className="logo-text">Completed Readings</span>
          </Link>
        </MenuItem>
          
        <MenuItem onClick={handleClose}>
          <Link to="/toread" className="menu-item">
             <span className="logo-text">To Read List</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

