import { useState, useEffect } from "react";

import RenderDetails from "./RenderDetails";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    //SelectedContact will fetch data by Id and set contact as data. return a render displaying data
    useEffect(() =>{
        async function fetchSelectContact() {
            try {
                const call = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await call.json();
                setContact(result); //fetch data stored here
                
                

            } catch(error) {
                console.log(error)
            }
        }fetchSelectContact()
    }, []); 
    console.log(contact)
    
    return (
    <table>
    <thead>
      <tr>
        <th colSpan="5">Contact List</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>address</td>
        <td></td>
      </tr> 
      { 
         
        //  contact.map((contact) => {
        //   return <RenderDetails setSelectedContactId={setSelectedContactId}  key={contact.id} contact={contact} />;})
         
         }
    </tbody>
  </table>
); 
} 