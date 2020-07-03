import React ,{useState, useEffect} from 'react';
import { Button, TextField } from '@material-ui/core';
import './PersonalData.css'; 

function PersonalData(props) {
  return (
    <div className="Container">
        <TextField fullWidth='true' label="Nome" value="Ana Clara Machado"></TextField>
        <div className="Margem"></div>
        <TextField fullWidth='true' label="E-mail" value="anaclaramachado@gmail.com"></TextField>
        <div className="Margem"></div>
        <TextField fullWidth='true' label="Data de Nascimento" value="XX/XX/XXXX"></TextField>
        <div className="Margem"></div>
        <TextField fullWidth='true' label="CPF" value="Ana C. Machado"></TextField>
        <div className="Margem"></div>
        <TextField fullWidth='true' label="Telefone" value="(XX) XXXX-XXXX"></TextField>
        <div className="Margem"></div>
        <TextField fullWidth='true' label="Endereço" value="Av. Adolpho de Vasconcelos"></TextField>
        <div className="Margem"></div>

        <div className="Lado">
          <TextField label="Número" value="204"></TextField>
            <div className="Espaco"></div>
          <TextField label="Complemento" value="Apto 1210"></TextField>
        </div>
        

        <div className="Margem"></div>
        <TextField fullWidth='true' label="Bairro" value="Barra da tijuca"></TextField>
        <div className="Margem"></div>

        <div className="Lado">
          <TextField label="Estado" value="RJ"></TextField>
            <div className="Espaco"></div>
          <TextField label="Cidade" value="Rio de Janeiro"></TextField>
        </div>
        

        <div className="Margem"></div>
        <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(51)}>Salvar</Button>
    </div>
  );
}

export default PersonalData;
