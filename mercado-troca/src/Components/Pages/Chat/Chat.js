import React ,{useState, useEffect} from 'react';
import Header from '../../AddOns/Header/Header';

import { Button, TextField, Typography} from '@material-ui/core';
import './Chat.css';

import user1 from '../../../Imagens/user1.png'
import user2 from '../../../Imagens/user2.png'
import user3 from '../../../Imagens/user3.png'
import user4 from '../../../Imagens/user4.png'
import user5 from '../../../Imagens/user5.png'
import user6 from '../../../Imagens/user6.png'
import user7 from '../../../Imagens/user7.png'

function Chat(props) {
  return (
    <div>
      <Header ChangePage={props.ChangePage} index='chat'/>
      <div style={{width:'90%', margin:'auto'}}>
        <Typography variant="h6" color='primary' align='left' style={{marginTop:"20px", marginBottom:"10px"}}>Trocas a espera</Typography>
        <div onClick={()=> props.ChangePage(12)}  style={{width:"100%", display:"flex", justifyContent:'space-between'}}>
            <img src={user1} style={{borderRadius:"100%"}}/>
            <img src={user2} style={{borderRadius:"100%"}}/>
            <img src={user3} style={{borderRadius:"100%"}}/>
            <img src={user4} style={{borderRadius:"100%"}}/>
        </div>
        <Typography variant="h6" color='primary' align='left' style={{marginTop:"20px", marginBottom:"10px"}}>Mensagens</Typography>
        <div onClick={()=> props.ChangePage(12)}  style={{display:'flex', marginBottom:"15px"}}>
            <img src={user1} style={{borderRadius:"100%"}}/>
            <div style={{marginLeft:"10px"}}>
                <Typography variant="h6" align='left' style={{marginTop:"10px"}}>Ana Claro Machado</Typography>
                <Typography align='left' color='textSecondary' variant="subtitle2">Tudo bem?</Typography>
            </div>
        </div>
        <div onClick={()=> props.ChangePage(12)}  style={{display:'flex', marginBottom:"15px"}}>
            <img src={user5} style={{borderRadius:"100%"}}/>
            <div style={{marginLeft:"10px"}}>
                <Typography variant="h6" align='left' style={{marginTop:"10px"}}>Marcos Bezner</Typography>
                <Typography align='left' color='textSecondary' variant="subtitle2">Bacana!!</Typography>
            </div>
        </div>
        <div onClick={()=> props.ChangePage(12)}  style={{display:'flex', marginBottom:"15px"}}>
            <img src={user6} style={{borderRadius:"100%"}}/>
            <div style={{marginLeft:"10px"}}>
                <Typography variant="h6" align='left' style={{marginTop:"10px"}}>Leticia Moniz</Typography>
                <Typography align='left' color='textSecondary' variant="subtitle2">Podemos efetuar a troca?</Typography>
            </div>
        </div>
        <div onClick={()=> props.ChangePage(12)} style={{display:'flex', marginBottom:"15px"}}>
            <img src={user7} style={{borderRadius:"100%"}}/>
            <div style={{marginLeft:"10px"}}>
                <Typography variant="h6" align='left' style={{marginTop:"10px"}}>Lucaz Estevez</Typography>
                <Typography align='left' color='textSecondary' variant="subtitle2">Vou tirar mais fotos e ja te mando!</Typography>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;