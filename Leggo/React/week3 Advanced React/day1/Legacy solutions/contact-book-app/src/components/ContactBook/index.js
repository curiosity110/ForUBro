import React, {Component} from 'react';
import { connect } from 'react-redux';
import Contact from '../Contact';
import AddContact from '../AddContact';
import './index.css';

/*
  App main component, holds all the app functionalities
  Component responsible for dealing with:
          Save a new contact; 
          Delete a contact;
          Update a contact.
*/

class ContactBook extends Component {
  render = () => {
    return (
      <div className="contact-book-container">
        <h1> Contact Book </h1>
        <AddContact />
        {this.props.contacts.map(contact => 
          <Contact contact={contact} key={contact.id} />
        )}
      </div>
    );
  } 
}

const mapStateToProps = ({ contacts }) => {
  return { contacts };
}

export default connect(mapStateToProps)(ContactBook);

