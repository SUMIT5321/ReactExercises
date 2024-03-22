import {createSlice} from "@reduxjs/toolkit"
import { localizableStrings } from "../utils/localizableStrings";
import validator from "../utils/validator";
import formatText from "../utils/stringUtils";

const fieldInitialState = {
  id: "",
  label: "",
  value: "",
  errorMessage: null,
}

const initialUserState = {
  userId: { ...fieldInitialState, label: localizableStrings.loginIdLabel, id: "userId"},
  email: { ...fieldInitialState, label: localizableStrings.emailLabel, id: "email" },
  name: { ...fieldInitialState, label: localizableStrings.nameLabel, id: "name" },
  timeZone: { ...fieldInitialState, label: localizableStrings.timeZoneLabel, id: "timeZone" },
  homePage: { ...fieldInitialState, label: localizableStrings.homePageLabel, id: "homePage" },
  aboutMe: { ...fieldInitialState, label: localizableStrings.aboutMeLabel, minLength: 50, id: "aboutMe" },
  receiveCommentsNotification: {
    ...fieldInitialState, 
    value: false, 
    label: localizableStrings.receiveNotificationLabel, 
    id: "receiveCommentsNotification", 
    message: localizableStrings.receiveNotificationMessage
  },
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUserState
  },
  reducers: {
    updateUser: (state, action) => {
      const field = state.user[action.payload.id];
      field.value = action.payload.value;
      userFieldValidator[action.payload.id](field);
    },
    handleFormSubmit: (state) => {
      const areAllFieldsValid = userFieldValidator.validateAllFields(state.user);
      if (areAllFieldsValid) {
        state.user = initialUserState
      }
    }
  }
});

const userFieldValidator = {
  userId: function(field) {
    field.errorMessage = !validator.validateTextLength(field.value) ? formatText(localizableStrings.emptyErrorMessage, field.label) : null
    return field.errorMessage == null
  },
  email: function(field) {
    field.errorMessage = (!validator.validateTextLength(field.value)) ? formatText(localizableStrings.emptyErrorMessage, field.label)
        : (!validator.validateEmail(field.value)) ? localizableStrings.invalidEmailError : null
    return field.errorMessage == null
  },
  name: function(field) {
    field.errorMessage = !validator.validateTextLength(field.value) ? formatText(localizableStrings.emptyErrorMessage, field.label) : null
    return field.errorMessage == null
  },
  timeZone: function(field) {
    field.errorMessage = (!validator.validateTextLength(field.value)) ? localizableStrings.unselectedTimeZoneError : null
    return field.errorMessage == null
  },
  homePage: function(field) {
    field.errorMessage = (!validator.validateTextLength(field.value)) ? formatText(localizableStrings.emptyErrorMessage, field.label)
        : (!validator.validateUrl(field.value)) ? localizableStrings.invalidHomeUrlError : null
    return field.errorMessage == null
  },
  aboutMe: function(field) {
    field.errorMessage = (!validator.validateTextLength(field.value, field.minLength)) ? localizableStrings.aboutMeLengthErrorMessage : null
    return field.errorMessage == null
  },
  receiveCommentsNotification: function(field) {
    field.errorMessage = field.value === false ? localizableStrings.receiveCommentsNotificationErrorMessage : null
    return field.errorMessage == null
  },
  validateAllFields(user) {
    return this.userId(user.userId) &
      this.email(user.email) &
      this.name(user.name) &
      this.timeZone(user.timeZone) &
      this.homePage(user.homePage) &
      this.aboutMe(user.aboutMe) &
      this.receiveCommentsNotification(user.receiveCommentsNotification);
  }
}

export default userSlice.reducer;
export const { updateUser, handleFormSubmit, revertAll } = userSlice.actions;