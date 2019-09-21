import React, {Component} from 'react';

//ContextAPI and Provider handle state and is wrapped around entire application
const Context = React.createContext();
//the reducer handles actions
const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                //The is a Spread operator that gets the entire state, then filters the state contacts by the payload(in this case it is the key to the operator which is the id
                ...state,
                contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component{
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'JD@Gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Sally Mae',
                email: 'SM@Gmail.com',
                phone: '555-555-1111'
            },
            {
                id: 3,
                name: 'Dirty Harry',
                email: 'DH@Gmail.com',
                phone: '555-555-2222'
            }

        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>)

    }
}

export const Consumer = Context.Consumer;