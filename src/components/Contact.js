import React, {Component} from 'react';
import Header from "../Header";
import PropTypes from 'prop-types';


class Contact extends Component {
    //sets the initial state of the Contact. In this case contact info to false
    state = {showContactInfo: false};
// Using the arrow function allows me to bind to the state.  The 'e' is an event object . this function toggles between 'true and false each time you click
    onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo})
}
    render() {
        const {name, email, phone} = this.props.contact;
        const {showContactInfo}=this.state;
        return (
            <div className="card card-body mb-3">
                {/*the sort down class below uses fontawesome to create a sort arrow next to name*/}
                <h4>
                    {name}
                    <i onClick={this.onShowClick}
                       className="fas fa-sort-down"/>
                </h4>
                {/* is showContact info is true then display contacts detail else if false do not display */}
                {showContactInfo ?
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul> : null}
            </div>
        );
    }
}
Contact.propTypes = {

    contact: PropTypes.object.isRequired,
};

export default Contact;