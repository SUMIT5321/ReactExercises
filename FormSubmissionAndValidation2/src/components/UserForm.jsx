import { InputTextBox } from "./InputTextBox"
import { DropDownBox } from "./DropdownBox";
import timeZones from "../utils/timeZones";
import { TextAreaBox } from "./TextAreaBox";
import { CheckBox } from "./CheckBox";
import { localizableStrings } from "../utils/localizableStrings";
import { CustomButton } from "./CustomButton";
import { useCallback, useState } from "react";
import { ABOUT_ME, EMAIL, HOME_PAGE, NAME, RECEIVE_COMMENT_NOTIFICATION, TIME_ZONE, USER_ID, userFieldValidator } from "../helper/userHelper";

export const UserForm = () => {
  const [formData, setFormData] = useState({})
  const [errorMessages, setErrorMessages] = useState({})

  const updateField = useCallback((id, value) => {
    setFormData(data => ({
      ...data, [id]: value
    }))
    userFieldValidator[id](value, setErrorMessage)
  }, [])

  const setErrorMessage = (id, errorMessage) => {
    console.log(`id: ${id} errorMsg: ${errorMessage}`)
    setErrorMessages(messages => ({
      ...messages, [id]: errorMessage
    }))
  }

  const submitAction = useCallback((event) => {
    event.preventDefault();
    setFormData(data => {
      const areAllFieldsValid = userFieldValidator.validateAllFields(data, setErrorMessage);
      return areAllFieldsValid ? {} : data;
    })
  },[])

  return <>
    <div className="container">
      <div className="innerContainer">
        <div className="header">Registration Form</div>
        <form>
          <InputTextBox fieldId={USER_ID} value={formData[USER_ID]} errorMessage={errorMessages[USER_ID]} updateValue={updateField}/>
          <InputTextBox fieldId={EMAIL} value={formData[EMAIL]} errorMessage={errorMessages[EMAIL]} updateValue={updateField}/>
          <InputTextBox fieldId={NAME} value={formData[NAME]} errorMessage={errorMessages[NAME]} updateValue={updateField}/>
          <DropDownBox fieldId={TIME_ZONE} options={timeZones} value={formData[TIME_ZONE]} errorMessage={errorMessages[TIME_ZONE]} updateValue={updateField}/>
          <InputTextBox fieldId={HOME_PAGE} value={formData[HOME_PAGE]} errorMessage={errorMessages[HOME_PAGE]} updateValue={updateField}/>
          <TextAreaBox fieldId={ABOUT_ME} value={formData[ABOUT_ME]} errorMessage={errorMessages[ABOUT_ME]} updateValue={updateField}/>
          <CheckBox fieldId={RECEIVE_COMMENT_NOTIFICATION} value={formData[RECEIVE_COMMENT_NOTIFICATION]} errorMessage={errorMessages[RECEIVE_COMMENT_NOTIFICATION]} updateValue={updateField}/>
          <div className="passwordMessage">{localizableStrings.passwordMainMessage}</div>
          <CustomButton text={localizableStrings.goText} action={submitAction} />
        </form>
      </div>
    </div>
  </>
}