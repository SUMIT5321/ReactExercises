import PropTypes from "prop-types"

export const Contact = ({ contact, deleteContact }) => {
  const { id, firstName, lastName, email } = contact;

  return <div className="card">
    <img src="../public/user.png" alt="Avatar" className="image"></img>
    <div className="cardContentContainer">
      <div className="fullAvailableWidth">
        <div className="name">{firstName} {lastName}</div>
        <div className="email">{email}</div>
      </div>
      <button className="imageButton" onClick={() => deleteContact(id)}><img className="icon" src="../public/delete.png" /></button>
    </div>
  </div>
}

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func
}