import React ,{useState, useEffect} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import './App.css';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import CreditCardData from './Components/Pages/CreditCardData/CreditCardData';
import PersonalData from './Components/Pages/PersonalData/PersonalData';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AddToGallery from './Components/Pages/AddToGallery/AddToGallery'
import EditGallery from './Components/Pages/EditGallery/EditGallery'
import Product from './Components/Pages/Product/Product'
import Profile from './Components/Pages/Profile/Profile'
import ExchangeWindow from './Components/Pages/ExchangeWindow/ExchangeWindow'
import InChat from './Components/Pages/InChat/InChat'
import Chat from './Components/Pages/Chat/Chat'

function App() {
  const [page, setPage] = useState(0);
  
  const ChangePage = (index) => {
    setPage(index);
    console.log(index);
  }

  const GetCurrentPage = () => {
    switch(page){
      case 0:
        return <Login ChangePage={ChangePage}/>;
      case 1:
        return <Register ChangePage={ChangePage}/>;
      case 2:
        return <PersonalData ChangePage={ChangePage}/>;
      case 3:
        return <CreditCardData ChangePage={ChangePage}/>;
      case 4:
        return <LandingPage ChangePage={ChangePage}/>;
      case 5:
        return <AddToGallery ChangePage={ChangePage}/>
      case 6:
        return <Profile ChangePage={ChangePage}/>;
      case 7:
        return <h1>Configuração da Conta</h1>;
      case 8:
        return <EditGallery ChangePage={ChangePage}/>;
      case 9:
        return <Product ChangePage={ChangePage}/>;
      case 10:
        return <Product ChangePage={ChangePage}/>;
      case 11:
        return <Chat ChangePage={ChangePage}/>
      case 12:
        return <InChat ChangePage={ChangePage}/>;
      case 13:
        return <ExchangeWindow ChangePage={ChangePage}/>;
    }
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0A8B0D"
      },
      secondary: {
        main: "#000000"
      },
      info: {
        main: "#2196f3"
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
