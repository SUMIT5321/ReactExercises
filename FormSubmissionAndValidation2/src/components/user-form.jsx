import { useState } from "react";
import InputTextBox from "./common/input-text-box";
import DropDownBox from "./common/dropdown-box";
import timeZones from "../utils/time-zones";
import TextAreaBox from "./common/text-area-box";
import CheckBox from "./common/checkbox";
import { localizableStrings } from "../utils/localizable-strings";
import CustomButton from "./common/custom-button";
import { ABOUT_ME, EMAIL, HOME_PAGE, NAME, RECEIVE_COMMENT_NOTIFICATION, TIME_ZONE, USER_ID, validateAllFields } from "../helper/user-helper";

const UserForm = () => {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const updateField = (id, value) => {
    setFormData(data => ({
      ...data, [id]: value
    }));
  };

  const submitAction = (event) => {
    event.preventDefault();
    setFormData(data => {
      const errorMessages = validateAllFields(data);
      setErrorMessages(errorMessages);
      const hasNoError = Object.keys(errorMessages).every(key => !Boolean(errorMessages[key]));
      return hasNoError ? {} : data;
    });
  };

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="header">Registration Form</div>
          <form>
            {[USER_ID, EMAIL, NAME].map(id => <InputTextBox key={id} fieldId={id} value={formData[id]} errorMessage={errorMessages[id]} updateValue={updateField} />)}
            <DropDownBox fieldId={TIME_ZONE} options={timeZones} value={formData[TIME_ZONE]} errorMessage={errorMessages[TIME_ZONE]} updateValue={updateField} />
            <InputTextBox fieldId={HOME_PAGE} value={formData[HOME_PAGE]} errorMessage={errorMessages[HOME_PAGE]} updateValue={updateField} />
            <TextAreaBox fieldId={ABOUT_ME} value={formData[ABOUT_ME]} errorMessage={errorMessages[ABOUT_ME]} updateValue={updateField} />
            <CheckBox fieldId={RECEIVE_COMMENT_NOTIFICATION} value={formData[RECEIVE_COMMENT_NOTIFICATION]} errorMessage={errorMessages[RECEIVE_COMMENT_NOTIFICATION]} updateValue={updateField} />
            <div className="password-message">{localizableStrings.passwordMainMessage}</div>
            <CustomButton text={localizableStrings.goText} action={submitAction} />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
