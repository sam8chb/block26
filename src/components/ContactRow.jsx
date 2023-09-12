

// this function will create a row and insert data. create the PROP 'contact' and .name, .email, and .phone. contact prop should change with id selection
export default function ContactRow({ setSelectedContactId, contact }) //pass in contact object and setSelectedContactId
    { 
    return (
        <tr 
          onClick={() => {
            setSelectedContactId(contact.id)  ; 
          }} //setSelectedCOntactId grabs the id from the row, passes it upstream so that it can update selectedContactId to = contact.id
        >
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr> 
      ); 
    } 

