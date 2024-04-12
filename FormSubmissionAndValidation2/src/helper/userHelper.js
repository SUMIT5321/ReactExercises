import { localizableStrings } from "../utils/localizableStrings"
import formatText from "../utils/stringUtils";
import validator from "../utils/validator";

export const USER_ID = "userId",
  EMAIL = "email",
  NAME = "name",
  TIME_ZONE = "timeZone",
  HOME_PAGE = "homePage",
  ABOUT_ME = "aboutMe",
  RECEIVE_COMMENT_NOTIFICATION = "receiveCommentNotification"

export const userFormConfig = {
  [USER_ID]: {
    label: localizableStrings.loginIdLabel,
  },
  [EMAIL]: {
    label: localizableStrings.emailLabel,
  },
  [NAME]: {
    label: localizableStrings.nameLabel
  },
  [TIME_ZONE]: {
    label: localizableStrings.timeZoneLabel
  },
  [HOME_PAGE]: {
    label: localizableStrings.homePageLabel
  },
  [ABOUT_ME]: {
    label: localizableStrings.aboutMeLabel,
    minLength: 50
  },
  [RECEIVE_COMMENT_NOTIFICATION]: {
    label: localizableStrings.receiveNotificationLabel,
    message: localizableStrings.receiveNotificationMessage
  }
}

export const userFieldValidator = {
  [USER_ID]: function(value, setErrorMessage) {
    const errorMessage = !validator.validateTextLength(value) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[USER_ID].label) : null
    console.log(errorMessage)
    setErrorMessage(USER_ID, errorMessage)
    return errorMessage == null
  },
  [EMAIL]: function(value, setErrorMessage) {
    const errorMessage = (!validator.validateTextLength(value)) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[EMAIL].label)
        : (!validator.validateEmail(value)) ? localizableStrings.invalidEmailError : null
    setErrorMessage(EMAIL, errorMessage);  
    return errorMessage == null
  },
  [NAME]: function(value, setErrorMessage) {
    const errorMessage = !validator.validateTextLength(value) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[NAME].label) : null
    setErrorMessage(NAME, errorMessage);  
    return errorMessage == null
  },
  [TIME_ZONE]: function(value, setErrorMessage) {
    const errorMessage = (!validator.validateTextLength(value)) ? localizableStrings.unselectedTimeZoneError : null
    setErrorMessage(TIME_ZONE, errorMessage)
    return errorMessage == null
  },
  [HOME_PAGE]: function(value, setErrorMessage) {
    const errorMessage = (!validator.validateTextLength(value)) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[HOME_PAGE].label)
        : (!validator.validateUrl(value)) ? localizableStrings.invalidHomeUrlError : null

    setErrorMessage(HOME_PAGE, errorMessage)
    return errorMessage == null
  },
  [ABOUT_ME]: function(value, setErrorMessage) {
    const errorMessage = (!validator.validateTextLength(value, userFormConfig[ABOUT_ME].minLength)) ? localizableStrings.aboutMeLengthErrorMessage : null
    setErrorMessage(ABOUT_ME, errorMessage)
    return errorMessage == null
  },
  [RECEIVE_COMMENT_NOTIFICATION]: function(value, setErrorMessage) {
    const errorMessage = value === false ? localizableStrings.receiveCommentsNotificationErrorMessage : null
    setErrorMessage(RECEIVE_COMMENT_NOTIFICATION, errorMessage)
    return errorMessage == null
  },
  validateAllFields(formData, setErrorMessage) {
    console.log(formData)
    return this[USER_ID](formData[USER_ID], setErrorMessage) &
      this[EMAIL](formData[EMAIL], setErrorMessage) &
      this[NAME](formData[NAME], setErrorMessage) &
      this[TIME_ZONE](formData[TIME_ZONE], setErrorMessage) &
      this[HOME_PAGE](formData[HOME_PAGE], setErrorMessage) &
      this[ABOUT_ME](formData[ABOUT_ME], setErrorMessage) &
      this[RECEIVE_COMMENT_NOTIFICATION](formData[RECEIVE_COMMENT_NOTIFICATION], setErrorMessage);
  }
}