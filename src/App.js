import React from 'react';
import Contacts from './components/Contacts'
import './App.css';
import Header from "./Header";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div className="App">
      <Header branding = "Contact Manager"/>
    <div className="container">
        <Contacts/>
    </div>

    </div>
  );
};

export default App;
