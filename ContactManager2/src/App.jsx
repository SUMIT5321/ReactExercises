
import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { ContactForm } from './components/ContactForm'
import { ContactList } from './components/ContactList'
import { Search } from './components/Search'
import { EMAIL, FIRST_NAME, LAST_NAME } from './config/contactFormConfig'
import getUniqueId from "./utils/newId"

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const createContact = useCallback((data) => {
    const contact = {
      id: getUniqueId(),
      firstName: data[FIRST_NAME],
      lastName: data[LAST_NAME],
      email: data[EMAIL]
    }

    setContactList(list => [...list, contact])
  }, []);

  const deleteContact = useCallback((id) => {
    setContactList(list => list.filter(item => id !== item.id))
  }, []);

  const listToShow = useMemo(() => {
    return contactList.filter(contact => {
      const contactText = `${contact.firstName} ${contact.lastName} ${contact.email}`.toLowerCase();
      return contactText.includes(searchTerm.toLowerCase())
    }) 
  }, [contactList, searchTerm])

  return (
    <div className='container'>
      <div className='innerContainer'>
        <Search searchTerm={searchTerm} updateSearchTerm={setSearchTerm} />
        <ContactForm createContact={createContact}/>
        <ContactList contactList={listToShow} deleteContact={deleteContact} />
      </div>
    </div>
  )
}

export default App
