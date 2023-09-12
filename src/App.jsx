import { useState } from 'react'
import ContactList from './components/ContactList' //this is the table component
// it will fetch data from contact api and render as a table
import "./App.css";
import SelectedContact from './components/SelectedContact';


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  //set selectedContactId useState, default null

  return ( //wrap in fragment a ternary statement: if selectedContactId = truthy, in other words if a contact is selected, render div. else, run contactList function.
    <>
      {selectedContactId ? ( 
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/> 
        //setSelectedContactId is a prop of ContactList and contactRow
      )}
    </>
  );
}

export default App
