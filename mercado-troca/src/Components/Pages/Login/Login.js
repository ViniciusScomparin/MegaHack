import React ,{useState, useEffect} from 'react';
import SimpleRestApi from '../../AddOns/SimpleRestApi'
import { Button, TextField, Divider, Typography } from '@material-ui/core';
import './Login.css'; 

import logo from '../../../Arquivos/logo.png'

function Login(props) {
  const api = new SimpleRestApi();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Container">
      <div className="Margem"></div>  
      <img src={logo} width='200px'></img>  
      <div className="Margem"></div>

      <div className="Alinhamento">
        <Typography>E-mail</Typography>
        <TextField variant="outlined" fullWidth='true' value={email} onChange={e => setEmail(e.target.value)}></TextField>
      </div>
      
      <div className="Margem"></div>

      <div className="Alinhamento">
        <Typography>Senha</Typography>
        <TextField type="password" variant="outlined" fullWidth='true' value={password} onChange={e => setPassword(e.target.value)}></TextField>
      </div>
      
      <div className="Margem"></div>
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(6)}>Entrar</Button>
      <div className="Margem"></div>  
      <Typography>Não possui conta ainda? <br/><a style={{color:'green'}} onClick={() => props.ChangePage(1)}>Cadastre-se já!</a></Typography>
    </div>
  );
}

export default Login;
