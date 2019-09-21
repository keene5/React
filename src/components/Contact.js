import React, {Component} from 'react';
import Header from "../Header";
import PropTypes from 'prop-types';
import {Consumer} from '../context';


class Contact extends Component {
    //sets the initial state of the Contact. In this case contact info to false
    state = {showContactInfo: false};
// Using the arrow function allows me to bind to the state.  The 'e' is an event object . this function toggles between 'true and false each time you click
    onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo})
}
// You need to add the Delete Clickhandler binding the
    onClickDelete = (id, dispatch) => {
        // this.props.deleteClickHandler();
        dispatch({type: 'DELETE_CONTACT', payload: id })
    }
    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo}=this.state;
        return (
            //You need the consumer to access the context
            <Consumer>
                {value => {
                    const{dispatch} = value;
                return(
                    <div className="card card-body mb-3">
                        {/*the sort down class below uses fontawesome to create a sort arrow next to name*/}
                        <h4>
                            {name}
                            <i onClick={this.onShowClick}
                               className="fas fa-sort-down"
                               style={{cursor: 'pointer'}}/>
                            <i className="fas fa-times"
                               style={{cursor: 'pointer', float: 'right', color: 'red'}}
                               onClick={this.onClickDelete.bind(this, id, dispatch)}>

                            </i>
                        </h4>
                        {/* is showContact info is true then display contacts detail else if false do not display */}
                        {showContactInfo ? (
                            <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
                    </div>
                );
                }
                }

            </Consumer>

        );
    }
}
Contact.propTypes = {

    contact: PropTypes.object.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;