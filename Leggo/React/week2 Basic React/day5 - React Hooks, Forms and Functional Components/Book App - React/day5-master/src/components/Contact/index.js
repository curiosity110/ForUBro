import { useState } from "react";
import "./contact.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Contact = ({
  // ? the props that are passed in from the parent component
  id,
  firstName,
  lastName,
  phoneNumber,
  address,
  avatar,
  handleDeleteContact,
  setContactList,
  contactList,
}) => {
  //? the values of our contactValues object are the props passed into this component from ContactList
  const [contactValues, setContactValues] = useState({
    id: id,
    firstName: firstName,
    lastName: lastName,
    address: address,
    phoneNumber: phoneNumber,
    avatar: avatar,
  });

  //? state to handle our editing functionality
  const [isEditing, setIsEditing] = useState(false);

  //? state to handle showing of contact details functionality
  const [showDetails, setShowDetails] = useState(false);

  //? func. that will edit the newly entered values when in editing mode and update the values of the contactValues object
  const handleEditContact = e => {
    e.preventDefault();

    if (e.target.name === "avatar") {
      setContactValues(prevValues => {
        return {
          ...prevValues,
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        };
      });
    } else {
      setContactValues(prevValues => {
        return { ...prevValues, [e.target.name]: e.target.value };
      });
    }
  };

  //? func. to save the contact we are editing
  const handleSaveEditedContact = e => {
    e.preventDefault();

    //? we find the index of the item we are editing
    const index = contactList.findIndex(contact => contact.id === id);

    //? when updating the state, the item that was edited will be updated as shown below
    setContactList(prevContacts => {
      prevContacts[index] = contactValues;
      return [...prevContacts];
    });

    //? this will turn off editing mode
    setIsEditing(false);
  };

  //? func. to toggle showing the contact details
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="contact-minified">
        <div className="contact-minified-info">
          <img src={avatar} alt="profile avatar" />
          <h2>{`${firstName} ${lastName}`}</h2>
        </div>
        <button className="contact-minified-button" onClick={handleShowDetails}>
          {showDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {showDetails && (
        <div className="form">
          <div className="input-container">
            <input
              className="contact-input"
              type="text"
              name="firstName"
              value={contactValues.firstName}
              disabled={!isEditing}
              onChange={handleEditContact}
            />
            <input
              className="contact-input"
              type="text"
              name="lastName"
              value={contactValues.lastName}
              disabled={!isEditing}
              onChange={handleEditContact}
            />
            <input
              className="contact-input"
              type="text"
              name="address"
              value={contactValues.address}
              disabled={!isEditing}
              onChange={handleEditContact}
            />
            <input
              className="contact-input"
              type="text"
              name="phoneNumber"
              value={contactValues.phoneNumber}
              disabled={!isEditing}
              onChange={handleEditContact}
            />
            {isEditing && (
              <div className="avatar-container">
                <label htmlFor="avatar">Choose Avatar: </label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  disabled={!isEditing}
                  onChange={handleEditContact}
                />
              </div>
            )}
          </div>
          <div className="btn-container">
            {isEditing ? (
              <button
                className="btn save-btn"
                onClick={handleSaveEditedContact}
              >
                Save
              </button>
            ) : (
              <button
                className="btn edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </button>
            )}
            <button
              className="btn delete-btn"
              onClick={event => handleDeleteContact(event, id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Contact;
