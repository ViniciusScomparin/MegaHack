import React ,{useState, useEffect} from 'react';
import Header from '../../AddOns/Header/Header';
import './Product.css'

import {Button, Typography, Paper, AppBar, Tabs, Tab, IconButton, Avatar, Divider, TextField} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CachedIcon from '@material-ui/icons/Cached';
import InfoIcon from '@material-ui/icons/Info';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import fechar from '../../../Arquivos/fechar.png'
import trocar from '../../../Arquivos/trocar.png'

import photo from '../../../Imagens/lo.png'

import bota from '../../../Imagens/bota.png'
import item2 from '../../../Imagens/item2.png'
import item3 from '../../../Imagens/item3.png'
import item4 from '../../../Imagens/item4.png'

function Product(props) {
  const [value, setValue] = React.useState(0);
  const [tradeScreen, setTradeScreen] = React.useState(false);
  const [info, setInfo] = React.useState(0);

  const SetImage = (index) => {
    setValue(index);
  };

  const ToggleInfo = () => {
    setInfo(!info);
  };

  const GetTradeScreen = () =>{
    return (
      <div style={{position:'absolute', top:"0", bottom:'0', width:'400px', backgroundColor:'rgba(0,0,0,0.9)'}}>
        <div style={{width:"90%", display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', margin:'auto'}}>
          <div style={{height:"50px"}}></div>
          <h2 style={{color:'white'}}>Você tem um achado!</h2>
          <div style={{height:"20px"}}></div>
          <img src={bota} width='100%' style={{opacity:"1", borderRadius:'5%'}} />
          <div style={{height:"60px"}}></div>
          <input type='text' placeholder='Escreva uma mensagem' style={{width:'98%', height:'40px', opacity:"1"}}></input>
          <div style={{height:"20px"}}></div>
          <Button variant='contained' color='primary' onClick={() => props.ChangePage(12)} fullWidth='true' style={{opacity:"1"}}>Trocar achado</Button>
          <div style={{height:"20px"}}></div>
          <p style={{color:'#0A8B0D'}} onClick={() => setTradeScreen(false)}>Cancelar</p>
          <div style={{height:"50px"}}></div>
        </div>
      </div>
    )
  }

  const GetInfo = () => {
    return (
      <div>
        <Divider></Divider>
        <div className="VendorProfile" style={{margin:"20px 0px"}}>
          <div style={{margin:"0px 20px"}}>
            <Avatar alt="Remy Sharp" src={photo} style={{width:"60px", height:"60px"}}></Avatar>
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
      <Header ChangePage={props.ChangePage} index='recycle'/>
      <div>
        <div className='Overlay'>
          <button onClick={() => SetImage(0)} style={{width:"25%", backgroundColor:(value===0)? 'white' : 'grey', border:"none"}}></button>
          <button onClick={() => SetImage(1)} style={{width:"25%", backgroundColor:(value===1)? 'white' : 'grey', border:"none"}}></button>
          <button onClick={() => SetImage(2)} style={{width:"25%", backgroundColor:(value===2)? 'white' : 'grey', border:"none"}}></button>
        </div>
        <img className="MainImage" src={bota}/>
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
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        {tradeScreen && GetTradeScreen()}
      </div>
      <div className="ImageGallery">
        <img className="RoundedImg" src={item2}/>
        <img className="RoundedImg" src={item3}/>
        <img className="RoundedImg" src={item4}/>
      </div>
      <div className="Buttons">
        <button className='ActionButtonRed'>
          <img src={fechar} style={{width:"40px"}}/></button>
        <button className='ActionButtonGreen'>
          <img src={trocar} style={{width:"50px"}} onClick={() => setTradeScreen(true)}/></button>
      </div>
    </div>
  );
}

export default Product;
