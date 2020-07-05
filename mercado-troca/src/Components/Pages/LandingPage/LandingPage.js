import React ,{useState, useEffect} from 'react';
import {Button, Typography, Divider} from '@material-ui/core';

import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import logo from '../../../Arquivos/logo.png'

function landingPage(props) {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"80%", width:"90%", margin:"auto"}}>
        <img src={logo}></img>
        <Divider/>
        <Typography>Selecione as fotos do produto que deseja trocar e monte agora <b>sua galeria</b></Typography>
        <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(5)} startIcon={<CameraAltOutlinedIcon/>}>Criar galeria</Button>
    </div>
  );
}

export default landingPage;
