import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { contactFormConfig } from "../config/contactFormConfig";

export const InputTextBox = ({ fieldId, value, errorMessage, updateValue }) => {
  const fieldLabel = contactFormConfig[fieldId].label;
  return <>
    <div>
      <div className="label">{fieldLabel}<span className="error">*</span></div>
      <input 
        className="inputField"
        type="text" 
        value={value || ""}
        onChange={(event) => updateValue(fieldId, event.target.value)} />
      <ErrorMessage message={errorMessage} />
    </div>
  </>
}

InputTextBox.propTypes = {
  fieldId: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}