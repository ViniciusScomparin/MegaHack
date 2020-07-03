import React ,{useState, useEffect} from 'react';
import { Button, TextField, Divider, Typography } from '@material-ui/core';
import './Profile.css';

function Profile(props) {
  return (
    <div>
      
      <img className="ImagemPerfil" src="https://picsum.photos/190/190"></img>
      <img className="Selo" src="https://picsum.photos/30/30"></img>
      
      
      <h3>Ana Clara Machado</h3>
      <h5>Diamond</h5>
      <br/>
      <Divider/>
      <div className="Botao">
        <button classname="BotaoConfig" onClick={() => props.ChangePage(51)}><img src="https://picsum.photos/30/30"/><p>Configurações</p></button>
        <div className="VerticalDivider"/>
        <button classname="BotaoConfig" onClick={() => props.ChangePage(51)}><img src="https://picsum.photos/30/30"/><p>Editar Galeria</p></button>
        <div className="VerticalDivider"/>
        <button classname="BotaoConfig" onClick={() => props.ChangePage(51)}><img src="https://picsum.photos/30/30"/><p>Visualizar</p></button>
      </div>
      
      <Divider/>
      <br/>
      <img className="Margem" src="https://picsum.photos/172/73"></img>
    </div>
  );
}

export default Profile;
