

// this function will create a row and insert data. create the PROP 'contact' and .name, .email, and .phone. contact prop should change with id selection
export default function ContactRow({ contact }) //pass in contact object
    {
    return (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      );
    }

