import { Contact } from './Contact';
import PropTypes from "prop-types"

export const ContactList = ({ contactList, deleteContact }) => {
  const contactsList = contactList.map(contact => <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />)

  return <div className='gridList'>
    {contactsList}
  </div>
}

ContactList.propTypes = {
  contactList: PropTypes.array,
  deleteContact: PropTypes.func
}