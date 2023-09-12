


export default function RenderDetails({ selectedContact, setSelectedContactId, contact }) 
    {
    return (
        <tr 
           
        >
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>{contact.address}</td>
          <td>{contact.phone}</td>
        </tr>
      );
    }

