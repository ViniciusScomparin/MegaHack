import React ,{useState, useEffect} from 'react';

function ChangePassword(props) {
  return (
    <div>
        <img src="https://picsum.photos/150/100"></img>
        <div></div>
        <p>Selecione as fotos do produto que deseja trocar e monte agora <b>sua galeria</b></p>
        <button onClick={() => props.ChangePage(51)}><img src="https://picsum.photos/30/30"/><p>Criar galeria</p></button>
    </div>
  );
}

export default ChangePassword;
