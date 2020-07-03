import React ,{useState, useEffect} from 'react';
import {AppBar, Button, Typography} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChatIcon from '@material-ui/icons/Chat';

function Header(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <AccountCircleIcon style={{marginTop:"15px"}} />
      <ShoppingBasketIcon  style={{marginTop:"15px"}}/>
      <ChatIcon style={{marginTop:"15px"}}/>
    </div>
  );
}

export default Header;
