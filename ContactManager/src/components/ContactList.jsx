import { useSelector } from 'react-redux'
import { Contact } from './Contact';
import { selectFilteredIds } from '../features/contact/contactUtility';

export const ContactList = () => {
  const contactIds = useSelector(state => selectFilteredIds(state))
  const contactsList = contactIds.map(contactId => <Contact key={contactId} contactId={contactId}></Contact>)

  return <div className='gridList'>
    {contactsList}
  </div>
}