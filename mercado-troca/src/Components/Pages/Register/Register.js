import React ,{useState, useEffect} from 'react';
import SimpleRestApi from '../../AddOns/SimpleRestApi'
import { Button, TextField, Divider, Typography } from '@material-ui/core';
import BackHeader from '../../AddOns/Header/BackHeader'
import './Register.css'; 

import google from '../../../Arquivos/google.png'
import face from '../../../Arquivos/face.png'

function Register(props) {
  const api = new SimpleRestApi();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SendLogin = () => {
    api.PostData("/usuario/cadastro", {
      "nome": name,
      "email": email,
      "senha": password,
    }, response => {
      console.log(response);
    })
  }

  return (
    <div className="Container">
      <BackHeader Title="Criar Conta" Back={0} ChangePage={props.ChangePage}/>
      <div className="Margem"></div>
      <Button variant="outlined" color="secondary" fullWidth='true' onClick={() => props.ChangePage(1)} startIcon={<img src={google} width="25px"/>}>Criar conta usando Google</Button>
      <div className="Margem"></div>
      <Button variant="outlined" color="secondary" fullWidth='true' onClick={() => props.ChangePage(1)} startIcon={<img src={face} width="25px"/>}>Criar conta usando Facebook</Button>
      <div className="Margem"></div>
      <p >ou</p>
      
      <div className="Alinhamento">
        <Typography >Nome</Typography>
        <TextField variant="outlined" fullWidth='true' value={name} onChange={e => setName(e.target.value)}></TextField>
      </div>
      
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
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(2)}>Cadastrar-me</Button>
      <div className="Margem"></div>
      <Typography>Ver o contrato do <a href="https://www.google.com.br">Mercado Troca.</a></Typography>
      
      <Typography>Ao cadastrar-me, declaro que sou maior de idade e aceito os <a href="https://www.google.com.br">Termos e condições</a> e as <a href="https://www.google.com.br">Políticas de privacidade</a> do Mercado Troca. </Typography>
    </div>
  );
}

export default Register;
