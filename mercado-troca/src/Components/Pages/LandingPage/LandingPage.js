import React ,{useState, useEffect} from 'react';
import {Button, Typography, Divider} from '@material-ui/core';

import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

function landingPage(props) {
  return (
    <div>
        <img src="https://picsum.photos/150/100"></img>
        <Divider/>
        <Typography>Selecione as fotos do produto que deseja trocar e monte agora <b>sua galeria</b></Typography>
        <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(51)} startIcon={<CameraAltOutlinedIcon/>}>Criar galeria</Button>
    </div>
  );
}

export default landingPage;
