import React ,{useState, useEffect} from 'react';
import BackHeader from '../../AddOns/Header/BackHeader';
import './EditGallery.css'

import {Button, TextField, Typography, AppBar, Tabs, Tab} from '@material-ui/core';
import PropTypes from 'prop-types';

function EditGallery(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderPanel = () => {
    return (
      <div style={{width:"90%", margin:"auto"}}>
        <div style={{display:"flex", marginTop:"30px"}}>
          <img src="https://picsum.photos/200/200"></img>
          <div>
            <img src="https://picsum.photos/150/100"></img>
            <img src="https://picsum.photos/150/100"></img>
          </div>
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
        <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(51)}>Criar galeria</Button>
      </div>
    )
  }

  return (
    <div style={{width:"100%"}}>
      <BackHeader Title="Editar Galeira" Back={4} ChangePage={props.ChangePage}/>
        <div style={{width:"100%"}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab style={{ minWidth: "0px", width: "25%"}} label="01"/>
          <Tab style={{ minWidth: "0px", width: "25%"}} label="02"/>
          <Tab style={{ minWidth: "0px", width: "25%"}} label="03"/>
          <Tab style={{ minWidth: "0px", width: "25%"}} label="04"/>
        </Tabs>
      </div>
      {RenderPanel()}
      <div className="MargingBotton"/>
    </div>
  );
}

export default EditGallery;
