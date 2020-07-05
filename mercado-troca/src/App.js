import React ,{useState, useEffect} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import './App.css';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import CreditCardData from './Components/Pages/CreditCardData/CreditCardData';
import PersonalData from './Components/Pages/PersonalData/PersonalData';
import Login from './Components/Pages/Login/Login';
import EditGallery from './Components/Pages/EditGallery/EditGallery'
import Product from './Components/Pages/Product/Product'

function App() {
  const [page, setPage] = useState(4);
  
  const ChangePage = (index) => {
    setPage(index);
    console.log(index);
  }

  const GetCurrentPage = () => {
    switch(page){
      case 1:
        return <Login ChangePage={ChangePage}/>;
      case 2:
        return <PersonalData ChangePage={ChangePage}/>;
      case 3:
        return <CreditCardData ChangePage={ChangePage}/>;
      case 4:
        return <LandingPage ChangePage={ChangePage}/>;
      case 5:
        return <h1>Galeria</h1>;
      case 6:
        return <h1>Perfil</h1>;
      case 7:
        return <h1>Configuração da Conta</h1>;
      case 8:
        return <EditGallery ChangePage={ChangePage}/>;
      case 9:
        return <Product ChangePage={ChangePage}/>;
    }
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0A8B0D"
      }
    }
  })

  return (
    <div style={{width:"100vw", height:"100%", backgroundColor:"lightgrey"}}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {GetCurrentPage()}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
