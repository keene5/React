import React, {Component} from 'react';
import Contact from "./Contact";
//this Is a consumer of context(the Provider) I think similare to Publisher and Subscriber
import {Consumer} from '../context';

class Contacts extends Component {

    // deleteContact = id => {
    //     //first get contacts from state
    //     const {contacts} = this.state;
    //     //now create a new list without the id and post that as the state of contacts
    //     const newContacts = contacts.filter(contact => contact.id !== id);
    //     //Must use setter 'setState' to change the state since it is immutable
    //     this.setState({
    //         contacts: newContacts
    //     })
    // }

    render() {
        return (
            //Here we wrap everything in a Consumer
            <Consumer>
                {/*Get the contacts from the Provider/state*/}
                {value => {
                    const {contacts} = value;
                    return (
                        <div>

                            {/*use jsx to put code in the component rendered. Here we loop over the state and then put contact info in the Contact component*/}
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact}
                                         //deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                                />
                            ))}
                        </div>
                    );
                }}
            </Consumer>
                );
                }
                }


                export default Contacts;