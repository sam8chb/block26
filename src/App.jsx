import { useState } from 'react'
import ContactList from './components/ContactList' //this is the table component



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList /> 
      {/* This is going to add the table to the return(), allowing us to render a table and pass through ContactList do be displayd  */}
    </>
  )
}

export default App
