
import { useMemo, useState } from 'react'
import './App.css'
import { ContactForm } from './components/ContactForm'
import { ContactList } from './components/ContactList'
import { Search } from './components/Search'

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (contact) => {
    setContactList(list => [...list, contact])
  };

  const deleteContact = (id) => {
    setContactList(list => list.filter(item => id !== item.id))
  };

  const listToShow = useMemo(() => contactList.filter(({firstName, lastName, email}) => {
    const contactText = `${firstName} ${lastName} ${email}`.toLowerCase();
    return contactText.includes(searchTerm.toLowerCase())
  }), [contactList, searchTerm])

  return (
    <div className='container'>
      <div className='innerContainer'>
        <Search searchTerm={searchTerm} updateSearchTerm={setSearchTerm} />
        <ContactForm addContact={addContact}/>
        <ContactList contactList={listToShow} deleteContact={deleteContact} />
      </div>
    </div>
  )
}

export default App
