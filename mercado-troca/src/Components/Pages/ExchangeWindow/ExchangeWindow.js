import React ,{useState, useEffect} from 'react';
import BackHeader from '../../AddOns/Header/BackHeader'
import './ExchangeWindow.css'

import { Button, Typography, Icon, Divider } from '@material-ui/core';

import CachedIcon from '@material-ui/icons/Cached';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import bota from '../../../Imagens/bota.png'
import item2 from '../../../Imagens/item2.png'
import item3 from '../../../Imagens/item3.png'
import item4 from '../../../Imagens/item4.png'

function ExchangeWindow(props) {
  const [deliverCode, setDeliverCode] = useState('XXX.XXX.XXX-XX');
  
  return (
    <div>
        <BackHeader Title="Efetuar trocar" Back={12} ChangePage={props.ChangePage}/>
        <br/>
        <div style={{width:"90%", margin:'auto'}}>    
            <Typography align='left' color='textSecondary' variant="subtitle2">Selecione os seus produtos para troca:</Typography>
            <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={bota} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item2} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item3} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item4} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
            </div>

            <div style={{marginTop:'20px', marginBottom:'20px'}}/>
            <CachedIcon size='large'/>
            <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <Typography align='left' color='textSecondary' variant="subtitle2">Selecione os seus produtos para troca:</Typography>
            <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>
            <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={bota} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item2} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item3} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
              <div style={{position: "relative", width: '22%', height: '22%', float: 'left', marginLeft: '0px'}}>
                <img src={item4} width='100%' height='100%'></img>   
                <input type='checkbox' style={{position:'absolute', bottom: '5px', right:'0px'}}/>
              </div>
            </div>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>
            <Typography align='left' color='primary' variant="h6">Informações dos produtos da troca:</Typography>

            <Typography align='left' color='textSecondary' variant="subtitle2">Produto (1)</Typography>
                <div style={{marginBottom:'6px'}}/>
            <Typography align='left' variant="body1">Bota Dr Martens - PRETA</Typography>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <Typography align='left' color='textSecondary' variant="subtitle2">Preço (para o caso de não envio do produto)</Typography>
                <div style={{marginBottom:'6px'}}/>
            <Typography align='left' variant="body1">R$ 500,00</Typography>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <Typography align='left' color='textSecondary' variant="subtitle2">Peso do produto**</Typography>
                <div style={{marginBottom:'6px'}}/>
            <Typography align='left' variant="body1">2 kg</Typography>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <Divider></Divider>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <Typography align='left' color='textSecondary' variant="subtitle2">Clique para gerar o código de envio do(s) seu(s) produto(s)</Typography>
                <div style={{marginBottom:'6px'}}/>
            <Button variant='contained' color='secondary' fullWidth='true' onClick={() => setDeliverCode('365.587.125-87')}><p>Gerar Codigo para o correio</p></Button>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Typography align='left'>{deliverCode}</Typography>
                <Button>
                    <FileCopyIcon></FileCopyIcon>
                </Button>
            </div>

            <Divider></Divider>
                <div style={{marginTop:'20px', marginBottom:'40px'}}/>
            <Typography align='center' variant='caption'>*Procure estimar correramente o peso do seu produto para não haver problemas na hora do envio.<br/>**A cada troca será cobrado R$ 1,00 independentes de quantos produtos forem selecionados.</Typography>
                <div style={{marginTop:'20px', marginBottom:'40px'}}/>
            <Typography align='center' color='textSecondary' variant="subtitle2">Clique em confirmar para finalizar a troca</Typography>
                <div style={{marginTop:'20px', marginBottom:'20px'}}/>
           <Button variant='contained' color='primary' fullWidth='true' onClick={() => props.ChangePage(11)}><p>Finalizar Troca</p></Button>
        </div>
    </div>
  );
}

export default ExchangeWindow;
