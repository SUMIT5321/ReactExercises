import validator from "../utils/validator"

export const FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email"


export const contactFormConfig = {
  [FIRST_NAME]: {
    label: "First Name",
  },
  [LAST_NAME]: {
    label: "Last Name"
  },
  [EMAIL]: {
    label: "Email"
  }
}

export const contactFieldValidator = {
  [FIRST_NAME]: function(value, setErrorMessage) {
    const errorMessage = validator.validateIsNotEmpty(contactFormConfig[FIRST_NAME].label, value)
    setErrorMessage(FIRST_NAME, errorMessage)
    return errorMessage == null
  },
  [LAST_NAME]: function(value, setErrorMessage) {
    const errorMessage = validator.validateIsNotEmpty(contactFormConfig[LAST_NAME].label, value)
    setErrorMessage(LAST_NAME, errorMessage);  
    return errorMessage == null
  },
  [EMAIL]: function(value, setErrorMessage) {
    let errorMessage = validator.validateIsNotEmpty(contactFormConfig[EMAIL].label, value)
    if (errorMessage == null) {
      errorMessage = validator.validateEmail(value)
    }
    setErrorMessage(EMAIL, errorMessage);  
    return errorMessage == null
  },
  validateAllFields(formData, setErrorMessage) {
    return this[FIRST_NAME](formData[FIRST_NAME], setErrorMessage) &
      this[LAST_NAME](formData[LAST_NAME], setErrorMessage) &
      this[EMAIL](formData[EMAIL], setErrorMessage);
  }
}