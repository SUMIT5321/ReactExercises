
import './App.css'
import { ContactForm } from './components/ContactForm'
import { ContactList } from './components/ContactList'
import { Search } from './components/Search'

function App() {
  return (
    <div className='container'>
      <div className='innerContainer'>
        <Search />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  )
}

export default App
