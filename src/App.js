import React, {Component} from 'react';
import Header from "./Header";
import Contacts from "./components/Contacts";
import './App.css';
import {Provider} from './context';

class App extends Component {
    render() {
        return (
            //you must wrap your app in a provider to manage state. In this case we use the Contect API
            <Provider>
            <div className="App">
                <Header branding = "Contact Manager"/>
                <div className="container">
                    <Contacts/>
                </div>

            </div>
            </Provider>

        );
    }
}

export default App;