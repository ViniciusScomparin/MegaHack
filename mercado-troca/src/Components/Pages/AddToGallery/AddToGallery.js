import React ,{useState, useEffect} from 'react';
import BackHeader from '../../AddOns/Header/BackHeader';
import './AddToGallery.css'

import {Button, TextField, Typography, AppBar, Tabs, Tab} from '@material-ui/core';
import PropTypes from 'prop-types';

import bota from '../../../Imagens/bota.png'

function EditGallery(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderPanel = () => {
    return (
      <div style={{width:"90%", margin:"auto"}}>
        <div style={{display:"flex", marginTop:"30px"}}>
          <img src={bota} width='100%' margin='auto'></img>
        </div>
        <div className="MargingBotton"/>
        <div>
          <TextField label="Nome do produto" fullWidth='true' value="Bota Dr Martens - PRETA"/>
          <div className="MargingBotton"/>
          <div style={{display:"flex", marginBottom:"10px"}}>
            <TextField label="Categoria" value="Sapatos"/>
            <div style={{width:"10px"}}/>
            <TextField label="Estado do produto" value="Usado"/>
          </div>
          <TextField label="Detalhes do produto" fullWidth='true' value="Dr Martens"/>
          <div className="MargingBotton"/>
          <TextField label="Preço (para o caso de extravio ou não envio do produto)" fullWidth='true' value="R$500,00"/>
          <div className="MargingBotton"/>
          <TextField label="Peso do produto**" fullWidth='true' value="2 kg"/>
          <div className="MargingBotton"/>
          <TextField label="CEP" fullWidth='true' value="60.170-001"/>
          <div className="MargingBotton"/>
          <Typography variant="caption text">*O valor do produto só irá aparecer na hora da troca
            **Procure estimar correramente o peso do seu produto para não haver problemas na hora do envio.</Typography>
        </div>
        <div className="MargingBotton"/>
        <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(6)}>Criar galeria</Button>
      </div>
    )
  }

  return (
    <div style={{width:"100%"}}>
      <BackHeader Title="Editar Galeira" Back={4} ChangePage={props.ChangePage}/>
      {RenderPanel()}
      <div className="MargingBotton"/>
      <div style={{height:"5vh"}}/>
    </div>
  );
}

export default EditGallery;
