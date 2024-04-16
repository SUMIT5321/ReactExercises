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
  [USER_ID]: function(value) {
    const errorMessage = !validator.validateTextLength(value) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[USER_ID].label) : null
    return errorMessage
  },
  [EMAIL]: function(value) {
    const errorMessage = (!validator.validateTextLength(value)) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[EMAIL].label)
        : (!validator.validateEmail(value)) ? localizableStrings.invalidEmailError : null
    return errorMessage;
  },
  [NAME]: function(value) {
    const errorMessage = !validator.validateTextLength(value) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[NAME].label) : null
    return errorMessage
  },
  [TIME_ZONE]: function(value) {
    const errorMessage = (!validator.validateTextLength(value)) ? localizableStrings.unselectedTimeZoneError : null
    return errorMessage
  },
  [HOME_PAGE]: function(value) {
    const errorMessage = (!validator.validateTextLength(value)) ? formatText(localizableStrings.emptyErrorMessage, userFormConfig[HOME_PAGE].label)
        : (!validator.validateUrl(value)) ? localizableStrings.invalidHomeUrlError : null
    return errorMessage
  },
  [ABOUT_ME]: function(value) {
    const errorMessage = (!validator.validateTextLength(value, userFormConfig[ABOUT_ME].minLength)) ? localizableStrings.aboutMeLengthErrorMessage : null
    return errorMessage
  },
  [RECEIVE_COMMENT_NOTIFICATION]: function(value) {
    const errorMessage = value === false ? localizableStrings.receiveCommentsNotificationErrorMessage : null
    return errorMessage;
  },
  validateAllFields(formData) {
    return {
      [USER_ID]: this[USER_ID](formData[USER_ID]),
      [EMAIL]: this[EMAIL](formData[EMAIL]),
      [NAME]: this[NAME](formData[NAME]),
      [TIME_ZONE]: this[TIME_ZONE](formData[TIME_ZONE]),
      [HOME_PAGE]: this[HOME_PAGE](formData[HOME_PAGE]),
      [ABOUT_ME]: this[ABOUT_ME](formData[ABOUT_ME]),
      [RECEIVE_COMMENT_NOTIFICATION]: this[RECEIVE_COMMENT_NOTIFICATION](formData[RECEIVE_COMMENT_NOTIFICATION])
    };
  }
}