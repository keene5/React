import React from 'react';
import Contacts from './components/Contacts'
import './App.css';
import Header from "./Header";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div className="App">
      <Header branding = "Contact Manager"/>
      <Contacts name="John Doe"
      email="jd@gmail.com"
      phone="555-555-5555"/>
      <Contacts name="Jane Doe"
      email="jane@gmail.com" phone="555-552-5555"/>
    </div>
  );
};

export default App;
