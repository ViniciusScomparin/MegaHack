import React ,{useState, useEffect} from 'react';
import {AppBar, Button, Typography} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function BackHeader(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <Button><ArrowBackIcon/></Button>
      <Typography>{props.Title}</Typography>
      <div/>
      <div/>
    </div>
  );
}

export default BackHeader;
