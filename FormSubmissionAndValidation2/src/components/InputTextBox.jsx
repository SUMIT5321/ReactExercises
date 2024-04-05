import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { userFormConfig } from "../helper/userHelper";
import React from "react";

export const InputTextBox = React.memo(function InputTextBox ({fieldId, value, errorMessage, updateValue}) {
  const fieldLabel = userFormConfig[fieldId].label;
  return <>
    <div className="formRow">
      <div className="label">{fieldLabel}</div>
      <div>
        <input 
          className="inputText" 
          data-inputfield="loginId" 
          type="text" 
          value={value || ""}
          onChange={(event) => updateValue(fieldId, event.target.value)} />
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  </>
})

InputTextBox.propTypes = {
  fieldId: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}