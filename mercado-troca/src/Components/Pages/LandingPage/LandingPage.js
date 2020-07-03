import React ,{useState, useEffect} from 'react';
import {Button, Typography, Divider} from '@material-ui/core';

import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

function landingPage(props) {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"80%", width:"90%", margin:"auto"}}>
        <img src="https://picsum.photos/200/200"></img>
        <Divider/>
        <Typography>Selecione as fotos do produto que deseja trocar e monte agora <b>sua galeria</b></Typography>
        <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(8)} startIcon={<CameraAltOutlinedIcon/>}>Criar galeria</Button>
    </div>
  );
}

export default landingPage;
