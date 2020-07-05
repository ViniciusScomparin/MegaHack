import React ,{useState, useEffect} from 'react';
import {AppBar, Button, Typography, Divider} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function BackHeader(props) {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"6vh"}}>
        <Button onClick={() => props.ChangePage(props.Back)}><ArrowBackIcon/></Button>
        <Typography>{props.Title}</Typography>
        <div/>
        <div/>
      </div>
      <Divider/>
    </div>
  );
}

export default BackHeader;
