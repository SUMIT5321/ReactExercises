import PropTypes from "prop-types"
import React from "react"

export const Contact = React.memo(function Contact({ contact, deleteContact }) {
  return <div className="card">
    <img src="../public/user.png" alt="Avatar" className="image"></img>
    <div className="cardContentContainer">
      <div className="fullAvailableWidth">
        <div className="name">{contact.firstName} {contact.lastName}</div>
        <div className="email">{contact.email}</div>
      </div>
      <button className="imageButton" onClick={() => deleteContact(contact.id)}><img className="icon" src="../public/delete.png"/></button>
    </div>
  </div>
})

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func
}