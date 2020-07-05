import React ,{useState, useEffect} from 'react';
import Header from '../../AddOns/Header/Header';

import { Button, TextField, Divider, Typography } from '@material-ui/core';
import './Profile.css';

import selo from '../../../Arquivos/selo.svg'
import logo from '../../../Arquivos/logo.png'
import conf from '../../../Arquivos/conf.svg'
import camera from '../../../Arquivos/camera.svg'
import perfil from '../../../Arquivos/perfil.svg'

import photo from '../../../Imagens/lo.png'

function Profile(props) {
  return (
    <div>
      <Header ChangePage={props.ChangePage} index='profile'/>
      <br/>
      <img className="ImagemPerfil" src={photo}></img>
      <img className="Selo" src={selo} width="50px"></img>
      
      <h3>Ana Clara Machado</h3>
      <h5>Diamond</h5>
      <br/>
      <Divider/>
      <div className="Botao">
        <div>
          <img src={conf} width="90px" onClick={() => alert("pagina não implementada")}/>
          <p>Configurações</p>
        </div>
        <div className="VerticalDivider"/>
        <div>
          <img src={camera} width="90px" onClick={() => props.ChangePage(8)}/>
          <p>Editar Galeria</p>
        </div>
        <div className="VerticalDivider"/>
        <div>
          <img src={perfil} width="90px" onClick={() => props.ChangePage(10)}/>
          <p>Visualizar</p>
        </div>
      </div>
      
      <Divider/>
      <br/>
      <img className="Margem" src={logo} width='170px'></img>
    </div>
  );
}

export default Profile;