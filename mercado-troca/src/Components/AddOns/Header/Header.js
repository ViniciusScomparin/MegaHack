import React ,{useState, useEffect} from 'react';
import {AppBar, Button, Typography, Divider} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChatIcon from '@material-ui/icons/Chat';

import perfil from '../../../Arquivos/perfil.svg'
import recycle from '../../../Arquivos/recicle.svg'
import chat from '../../../Arquivos/chat.svg'

function Header(props) {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <input type='image' onClick={() => props.ChangePage(6)} src={perfil} style={{marginTop:"15px", width:"20%"}}/>
        <input type='image' onClick={() => props.ChangePage(9)} src={recycle} style={{marginTop:"15px", width:"20%"}}/>
        <input type='image' onClick={() => props.ChangePage(11)} src={chat} style={{marginTop:"15px", width:"20%"}}/>
      </div>
      <div style={{marginBottom:"10px"}} />
      <Divider/>
    </div>
  );
}

export default Header;
