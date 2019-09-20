import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {
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

        ]
    }
    render() {
        //destructure contacts from state
        const {contacts} = this.state;
        return (
            <div>

                   {/*use jsx to put code in the component rendered. Here we loop over the state and then put contact info in the Contact component*/}
                    {contacts.map(contact => (
                       <Contact key={contact.id} contact={contact}/>

                    ))}


            </div>
        );
    }
}

export default Contacts;