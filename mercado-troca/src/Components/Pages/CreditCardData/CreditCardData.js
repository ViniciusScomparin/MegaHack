import React ,{useState, useEffect} from 'react';
import { Button, TextField } from '@material-ui/core';
import BackHeader from '../../AddOns/Header/BackHeader'

import './CreditCardData.css';


function CreditCardData(props) {
  return (
    <div className="Container">
      <BackHeader Title="Cartão de crédito/débito" Back={2} ChangePage={props.ChangePage}/>
      <div className="Margem"></div>
      <TextField fullWidth='true' label="Número do Cartão" value="XXXX XXXX XXXX XXXX"></TextField>
      <div className="Margem"></div>

      <div className="Lado">
        <TextField label="Validade" value="XX/XX/XXXX"></TextField>
          <div className="Espaco"></div>
        <TextField label="CVV" value="XXX"></TextField>
      </div>
      
      <div className="Margem"></div>
      <TextField fullWidth='true' label="Nome do Titular" value="Ana C. Machado"></TextField>
      <div className="Margem"></div>
      <TextField fullWidth='true' label="CPF/CNPJ do titular" value="XXX.XXX.XXX-XX"></TextField>
      <div className="Margem"></div>
      <TextField fullWidth='true' label="Telefone" value="(XX) XXXX-XXXX"></TextField>
      <div className="Margem"></div>
      <Button variant="contained" color="primary" fullWidth='true' onClick={() => props.ChangePage(4)}>Salvar</Button>
    </div>
  );
}

export default CreditCardData;
