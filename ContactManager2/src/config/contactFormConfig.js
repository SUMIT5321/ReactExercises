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
  [FIRST_NAME]: function(value) {
    const errorMessage = validator.presence(contactFormConfig[FIRST_NAME].label, value)
    return errorMessage;
  },
  [LAST_NAME]: function(value) {
    const errorMessage = validator.presence(contactFormConfig[LAST_NAME].label, value)
    return errorMessage;
  },
  [EMAIL]: function(value) {
    let errorMessage = validator.presence(contactFormConfig[EMAIL].label, value)
    if (!Boolean(errorMessage)) {
      errorMessage = validator.validateEmail(value)
    }
    return errorMessage;
  },
  validateAllFields(formData) {
    return {
      [FIRST_NAME]: this[FIRST_NAME](formData[FIRST_NAME]),
      [LAST_NAME]: this[LAST_NAME](formData[LAST_NAME]),
      [EMAIL]: this[EMAIL](formData[EMAIL])
    }
  }
}