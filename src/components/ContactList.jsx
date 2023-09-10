import { useState, useEffect } from 'react'
import ContactRow from './ContactRow';
const API_URL = (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
// the ContactList function is going to set up a table in HTML
// that is going to display data

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]; // this is just placeholder for contactlist

export default function ContactList() {
    const [contactData, setContactData] = useState(dummyContacts)
    // set up a useState invocation that hold mutable value in "contacts". dummyContacts is the default, which returns arrays with id/name/phone/email values. setContacts can update this
    useEffect(()=>{
      async function fetchContacts() {
        try {
          const call = await fetch(API_URL);
          const result = await call.json() ;
          setContactData(result)

        } catch (error) {
          console.log(error);
        }
      } fetchContacts()
    },[]) ; //this useEffect function runs a function fetchContacts, which tries to fetch data from the API, stores it in json, and then use setContactData to update the useState contactData.
    console.log("Contacts: ", contactData) //prints contacts useState
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr> 
            {
               contactData.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} />;})
                //put contactData (default dummyContacts) through map, call ContactRow. for each 'contact' a ContactRow is returned. Contact (the item) = contact (the prop)
              }
          </tbody>
        </table>
    ); 
}