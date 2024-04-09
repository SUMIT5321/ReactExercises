import { InputTextBox } from "./InputTextBox";
import { EMAIL, FIRST_NAME, LAST_NAME, contactFieldValidator } from "../config/contactFormConfig";
import { useCallback, useState } from "react";
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

export const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const updateField = useCallback((id, value) => {
    setFormData(data => ({
      ...data, [id]: value
    }))
    contactFieldValidator[id](value, setErrorMessage)
  }, [])

  const setErrorMessage = useCallback((id, errorMessage) => {
    setErrorMessages(messages => ({
      ...messages, [id]: errorMessage
    }))
  }, [])

  const submitAction = (event) => {
    event.preventDefault();
    const errorMsgs = contactFieldValidator.validateAllFields(formData);
    setErrorMessages(errorMsgs);
    
    const areAllErrorFieldsNull = Object.keys(errorMsgs).every(key => errorMsgs[key] === null)
    if (areAllErrorFieldsNull) {
      formData.id = uuidv4();
      addContact(formData);
      setFormData({})
    }
  }

  return <form className="form">
    <InputTextBox fieldId={FIRST_NAME} value={formData[FIRST_NAME]} errorMessage={errorMessages[FIRST_NAME]} updateValue={updateField} />
    <InputTextBox fieldId={LAST_NAME} value={formData[LAST_NAME]} errorMessage={errorMessages[LAST_NAME]} updateValue={updateField} />
    <InputTextBox fieldId={EMAIL} value={formData[EMAIL]} errorMessage={errorMessages[EMAIL]} updateValue={updateField} />
    <button className="customButton" type="submit" onClick={(e) => submitAction(e)}>Create</button>
  </form>
}


ContactForm.propTypes = {
  addContact: PropTypes.func
}