import React ,{useState, useEffect} from 'react';
import {AppBar, Button, Typography, Divider} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChatIcon from '@material-ui/icons/Chat';

import profile from '../../../Arquivos/perfil_02.svg'
import recycle from '../../../Arquivos/recicle.svg'
import chat from '../../../Arquivos/chat.svg'

import profile_active from '../../../Arquivos/perfil_01.svg'
import recycle_active from '../../../Arquivos/recicle_01.svg'
import chat_active from '../../../Arquivos/chat_01.svg'

function Header(props) {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <input type='image' onClick={() => props.ChangePage(6)} src={props.index === 'profile'? profile_active: profile} style={{marginTop:"15px", width:"20%"}}/>
        <input type='image' onClick={() => props.ChangePage(9)} src={props.index === 'recycle'? recycle_active: recycle} style={{marginTop:"15px", width:"20%"}}/>
        <input type='image' onClick={() => props.ChangePage(11)} src={props.index === 'chat'? chat_active: chat} style={{marginTop:"15px", width:"20%"}}/>
      </div>
      <div style={{marginBottom:"10px"}} />
      <Divider/>
    </div>
  );
}

export default Header;
