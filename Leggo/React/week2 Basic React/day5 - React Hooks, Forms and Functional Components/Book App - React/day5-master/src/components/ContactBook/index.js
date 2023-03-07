import AddContact from "../AddContact";
import Contact from "../Contact";
import { useState } from "react";
import "./contactBook.css";

const ContactBook = () => {
  //? state where we save all of the created contacts
  const [contactList, setContactList] = useState([]);

  //? func. to delete a contact; it takes in the event and the "id" of the clicked item as parameters
  const handleDeleteContact = (event, clickedContactId) => {
    event.preventDefault();

    //? we filter through our contacts array to delete the contact we have clicked on
    setContactList(
      contactList.filter(contact => contact.id !== clickedContactId)
    );
  };

  return (
    <div>
      {/* //? we are passing our contactList state and func. to update it into our AddContact component 
      //? so that we can update it within our AddContact Component */}
      <AddContact contactList={contactList} setContactList={setContactList} />
      <div className="contactList-container">
        {contactList.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            handleDeleteContact={handleDeleteContact}
            contactList={contactList}
            setContactList={setContactList}
          />
        ))}
      </div>
    </div>
  );
};
export default ContactBook;
