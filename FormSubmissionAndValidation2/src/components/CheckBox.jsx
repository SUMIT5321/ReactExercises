import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { userFormConfig } from "../helper/userHelper";
import React from "react";

export const CheckBox = React.memo(function CheckBox({fieldId, value, errorMessage, updateValue}) {
  const {label, message} = userFormConfig[fieldId];
  
  const checked = value ? "checked" : ""
  return <>
    <div className="checkbox">
      <input 
        id={label}
        type="checkbox" 
        data-inputfield="receiveNotification" 
        value={checked}
        onChange={event => updateValue(fieldId, event.target.checked)}
        checked={value || false}
        />
      <label className="checkboxLabel" htmlFor={label}>{label}</label>
      <br />
    </div>
    <ErrorMessage message={errorMessage} />
    <div className="note">{message}</div>
  </>
})

CheckBox.propTypes = {
  fieldId: PropTypes.string,
  value: PropTypes.bool,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}