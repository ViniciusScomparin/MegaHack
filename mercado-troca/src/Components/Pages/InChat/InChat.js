import React ,{useState, useEffect} from 'react';
import BackHeader from '../../AddOns/Header/BackHeader';

import { Avatar, Typography, TextField, Button, LinearProgress } from '@material-ui/core';

import lo from '../../../Imagens/lo.png'
import trader from '../../../Imagens/trader.png'

function InChat(props) {
  const [confirm, setConfirm] = useState(false);

  const CreateMessageElement = (isMine, message, confirm) => {
    return isMine? 
    (
        <div style={{ width:"100%", display:"flex", marginBottom:"10px"}}>
            <img src={lo} style={{borderRadius:'100%', width:'15%', height:"15%", marginRight:'10px'}}/>
            <div style={{backgroundColor:'#E5E5E5', borderRadius:'5%', paddingLeft:'5px', paddingRight:'5px'}}>
                <p>{message}</p>
                {confirm && (<Button variant='contained' color='primary' onClick={() => setConfirm(true)} style={{marginBottom:"20px"}}>confirmar troca</Button>)}
            </div>
        </div>
    ):(
        <div style={{ width:"100%", display:"flex",justifyContent:'flex-end', marginBottom:"10px"}}>
            <div style={{backgroundColor:'#4CAF50', borderRadius:'5%', paddingLeft:'5px', paddingRight:'5px'}}>
                <p style={{color:'white'}}>{message}</p>
            </div>
            <img src={trader} style={{borderRadius:'100%', width:'15%', height:"15%", marginLeft:'10px'}}/>
        </div>
    )
  }

  return (
    <div>
        <BackHeader Title="Bernardo Castro" Back={11} ChangePage={props.ChangePage}/>
        <div style={{marginTop:"40px"}}/>
        <div style={{width:'90%', margin:'auto', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
            <img src={lo} style={{borderRadius:'100%', width:'100px', height:'100px'}}/>
            <div style={{marginTop:"20px"}}/>
            <Typography variant="h6" color='primary'>Vocês tiveram esse achado</Typography>
            <Typography variant="h6" color='textSecondary' variant="subtitle2">há uma semana</Typography>
            <div style={{marginTop:"40px"}}/>
            <div style={{minHeight:'40vh', width:"90%"}}>
                <Typography variant="h6" color='textSecondary' variant="subtitle2">17/03/2020</Typography>
                {CreateMessageElement(true, "Oi, Tudo bem?", false)}
                {CreateMessageElement(false, "Tudo e com você?", false)}
                {CreateMessageElement(true, "Ana Clara Machado solicitou a troca de: Dr Martens - PRETA no valor de R$ 500,00 (para o caso de não envio do produto) + R$ 1,00 de taxa do app em Camiseta branca - Nike no valor de R$ 450,00 (para o caso de não envio do produto) com o prazo de até 15 dias últeis. Deseja confirmar troca?", true)}
            </div>
            {confirm && (
                <div>
                    <Typography variant="h6" color='primary' style={{marginTop:"20px"}}>Troca confirmada com sucesso!</Typography>
                    <Typography variant="h6" color='textSecondary' variant="subtitle2">Aguarde a confirmação por sms dos correios para rastrear sua encomendar!</Typography>
                </div>
            )}
            <div style={{display:'flex', width:"100%", marginTop:"40px"}}>
                <TextField variant='filled' placeholder='Escrever uma mensagem' style={{width:"80%"}}></TextField>
                <Button variant="contained" color="primary" style={{width:"20%"}}>Enviar</Button>
            </div> 
            <p onClick={() => props.ChangePage(13)} style={{color:'#0A8B0D'}}><b>Efetuar troca</b></p>
        </div>   
    </div>
  );
}

export default InChat;
