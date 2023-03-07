import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import "./form.css";

const AddContact = ({ contactList, setContactList }) => {
  //? state to create a new contact
  const [newContact, setNewContact] = useState({
    id: null,
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    avatar: "",
  });

  //? state to toggle showing the form
  const [showForm, setShowForm] = useState(false);

  const [showErrorMsg, setShowErrorMsg] = useState(false);

  //? func. to update the values from the form input and update the newContact object
  const handleChangeContactValues = e => {
    if (e.target.name === "avatar") {
      setNewContact(prevValues => {
        return {
          ...prevValues,
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        };
      });
    } else {
      setNewContact(prevValues => {
        return { ...prevValues, [e.target.name]: e.target.value };
      });
    }
  };

  //? func. to create a newContact obj. and add it to the contacts array
  const handleCreateNewContact = e => {
    e.preventDefault();

    if (
      !newContact.firstName ||
      !newContact.lastName ||
      !newContact.address ||
      !newContact.phoneNumber
    ) {
      setShowErrorMsg(true);
      return;
    }

    if (contactList.length === 0) {
      //? if the array is empty the id of the first object is 0, else it will increase by 1
      newContact.id = 0;
    } else {
      newContact.id = contactList[contactList.length - 1].id + 1;
    }

    setContactList(prevContacts => {
      return [...prevContacts, newContact];
    });

    //? once we submit the form we reset all the fields, so they are blank
    setNewContact({
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      avatar: "",
    });

    setShowErrorMsg(false);
  };

  //? func. to toggle showing the form
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="addContact-btn-container">
        <button className="btn-icon" onClick={handleShowForm}>
          <IoIosPersonAdd size={50} color="dodgerblue" />
        </button>
      </div>
      {showForm && (
        <form className="form" onSubmit={handleCreateNewContact}>
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name:"
              value={newContact.firstName}
              name="firstName"
              onChange={handleChangeContactValues}
            />
            <input
              type="text"
              placeholder="Last Name:"
              value={newContact.lastName}
              name="lastName"
              onChange={handleChangeContactValues}
            />
            <input
              type="text"
              placeholder="Address:"
              value={newContact.address}
              name="address"
              onChange={handleChangeContactValues}
            />
            <input
              type="text"
              placeholder="Phone Number:"
              value={newContact.phoneNumber}
              name="phoneNumber"
              onChange={handleChangeContactValues}
            />
            <div className="avatar-container">
              <label htmlFor="avatar">Choose Avatar: </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleChangeContactValues}
              />
            </div>
          </div>
          {showErrorMsg && (
            <p className="error-message">Please fill out all the fields.</p>
          )}
          <div className="save-btn-container">
            <button className="btn save-btn">Save</button>
          </div>
        </form>
      )}
    </>
  );
};
export default AddContact;
