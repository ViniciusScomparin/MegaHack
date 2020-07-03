import React from 'react';
import './App.css';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import CreditCardData from './Components/Pages/CreditCardData/CreditCardData';
import PersonalData from './Components/Pages/PersonalData/PersonalData';
import Login from './Components/Pages/Login/Login';
import Profile from './Components/Pages/Profile/Profile';


function App() {
  
  const ChangePage = (index) => {
    console.log(index);
  }

  return (
    <div className="App">
      <Profile ChangePage={ChangePage}/>
    </div>
  );
}

export default App;
