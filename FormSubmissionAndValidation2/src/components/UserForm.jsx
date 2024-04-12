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
  }, [])

  const submitAction = useCallback((event) => {
    event.preventDefault();
    setFormData(data => {
      const errorMessages = userFieldValidator.validateAllFields(data);
      setErrorMessages(errorMessages);
      const hasNoError = Object.keys(errorMessages).every(key => !Boolean(errorMessages[key]));
      return hasNoError ? {} : data;
    })
  },[])

  return <>
    <div className="container">
      <div className="innerContainer">
        <div className="header">Registration Form</div>
        <form>
          {[USER_ID, EMAIL, NAME].map(id => <InputTextBox key={id} fieldId={id} value={formData[id]} errorMessage={errorMessages[id]} updateValue={updateField}/>)}
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