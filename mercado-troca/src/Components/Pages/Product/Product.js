import React ,{useState, useEffect} from 'react';
import Header from '../../AddOns/Header/Header';
import './Product.css'

import {Button, Typography, Paper, AppBar, Tabs, Tab, IconButton, Avatar, Divider} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CachedIcon from '@material-ui/icons/Cached';
import InfoIcon from '@material-ui/icons/Info';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import fechar from '../../../Arquivos/fechar.png'
import trocar from '../../../Arquivos/trocar.png'

function Product(props) {
  const [value, setValue] = React.useState(0);
  const [info, setInfo] = React.useState(0);

  const SetImage = (index) => {
    setValue(index);
  };

  const ToggleInfo = () => {
    setInfo(!info);
  };

  const GetInfo = () => {
    return (
      <div>
        <Divider></Divider>
        <div className="VendorProfile" style={{margin:"20px 0px"}}>
          <div style={{margin:"0px 20px"}}>
            <Avatar alt="Remy Sharp" src="https://picsum.photos/120/120" style={{width:"60px", height:"60px"}}></Avatar>
          </div>
          <div style={{textAlign:"left"}}>
            <Typography>Diamond</Typography>
            <Typography>Ana C. Machado</Typography>
            <Typography>Rio de janeiro - RJ</Typography>
          </div>
          <div style={{width:"25%"}}>
          </div>
        </div>
        <div style={{display:"flex", height:"10px", width:"100%", marginBottom:"20px"}}>
          <div style={{backgroundColor:"#FBE6E5", width:"20%", height:"100%"}}/>
          <div style={{backgroundColor:"#FCF5EB", width:"20%", height:"100%"}}/>
          <div style={{backgroundColor:"#FFFDE7", width:"20%", height:"100%"}}/>
          <div style={{backgroundColor:"#F5FEE3", width:"20%", height:"100%"}}/>
          <div style={{backgroundColor:"#0A8B0D", width:"20%", height:"100%"}}/>
        </div>
        <div className="VendorInfo">
          <div>
            <Typography>50</Typography>
            <Typography>Trocas nos últimos 4 meses</Typography>
          </div>
          <div className="VerticalDivider"/>
          <div>
            <ChatBubbleIcon/>
            <Typography>Presta um bom atendimento</Typography>
          </div>
          <div className="VerticalDivider"/>
          <div>
            <AccessAlarmIcon/>
            <Typography>Entrega os produtos no prazo</Typography>
          </div>
        </div>
        <Divider></Divider>
        <div style={{marginBottom:"25px"}}/>
      </div>
    )
  }

  return (
    <div>
      <Header ChangePage={props.ChangePage} />
      <div>
        <div className='Overlay'>
          <button onClick={() => SetImage(0)} style={{width:"25%", backgroundColor:(value===0)? 'white' : 'grey', border:"none"}}></button>
          <button onClick={() => SetImage(1)} style={{width:"25%", backgroundColor:(value===1)? 'white' : 'grey', border:"none"}}></button>
          <button onClick={() => SetImage(2)} style={{width:"25%", backgroundColor:(value===2)? 'white' : 'grey', border:"none"}}></button>
        </div>
        <img className="MainImage" src="https://picsum.photos/375/375"/>
      </div>

      <div className="ProductData">
        <div className="TextAlign">
          <Typography>Bota Dr Martens - PRETA</Typography>
          <Typography>Usada</Typography>
        </div>
        <div>
          <IconButton aria-label="reject">
            <InfoIcon onClick={() => ToggleInfo()}/>
          </IconButton>
        </div>
      </div>
      <div style={{width:"90%", margin:"auto"}}>
        {info === true && GetInfo()}
      </div> 

      <div className="ImageGallery">
        <img className="RoundedImg" src="https://picsum.photos/100/100"/>
        <img className="RoundedImg" src="https://picsum.photos/100/100"/>
        <img className="RoundedImg" src="https://picsum.photos/100/100"/>
      </div>

      <div className="Buttons">
        <button className='ActionButtonRed'>
          <img src={fechar} style={{width:"40px"}}/></button>
        <button className='ActionButtonGreen'>
          <img src={trocar} style={{width:"50px"}}/></button>
      </div>
    </div>
  );
}

export default Product;
