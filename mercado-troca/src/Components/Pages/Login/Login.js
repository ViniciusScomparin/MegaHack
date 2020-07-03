import React ,{useState, useEffect} from 'react';
import { Button, TextField, Divider, Typography } from '@material-ui/core';
import './Login.css'; 

function Login(props) {
  return (
    <div className="Container">
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(1)} startIcon={<img src="https://picsum.photos/25/25"/>}>Criar conta usando Google</Button>
      <div className="Margem"></div>
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(1)} startIcon={<img src="https://picsum.photos/25/25"/>}>Criar conta usando Facebook</Button>
      <div className="Margem"></div>
      <p >ou</p>
      
      <div className="Alinhamento">
        <Typography >Nome</Typography>
        <TextField variant="outlined" fullWidth='true' value=""></TextField>
      </div>
      
      <div className="Margem"></div>

      <div className="Alinhamento">
        <Typography>E-mail</Typography>
        <TextField variant="outlined" fullWidth='true' value=""></TextField>
      </div>
      
      <div className="Margem"></div>

      <div className="Alinhamento">
        <Typography>Senha</Typography>
        <TextField variant="outlined" fullWidth='true' value=""></TextField>
      </div>
      
      <div className="Margem"></div>
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(2)}>Cadastrar-me</Button>
      <div className="Margem"></div>
      <Typography>Ver o contrato do <a href="https://www.google.com.br">Mercado Troca.</a></Typography>
      
      <Typography>Ao cadastrar-me, declaro que sou maior de idade e aceito os <a href="https://www.google.com.br">Termos e condições</a> e as <a href="https://www.google.com.br">Políticas de privacidade</a> do Mercado Troca. </Typography>
    </div>
  );
}

export default Login;
