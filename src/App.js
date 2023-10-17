import React, { useState } from 'react'
import ContactForm from './components/ContactForm'
import Table from './components/Table'

const App = () => {
  const [contacts, setContacts] = useState([])

  const getContact = (values) => {
    // console.log(values)
    // console.log("calling data")
    // console.log(values.name);
    // console.log(values.email);

    setContacts([...contacts, values])
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <ContactForm getContact={getContact}/>
      <Table contacts={contacts}/>
    </div>
  )
}

export default App