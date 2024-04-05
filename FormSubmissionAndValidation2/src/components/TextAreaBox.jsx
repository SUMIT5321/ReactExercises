import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { userFormConfig } from "../helper/userHelper";
import React from "react";

export const TextAreaBox = React.memo(function TextAreaBox({ fieldId, value, errorMessage, updateValue }) {
  const {label, minLength} = userFormConfig[fieldId];
  
  return <>
    <div className="label topMargin16">{label}</div>
    <div>
      <textarea 
        className="about" 
        minLength={minLength}
        value={value || ""}
        onChange={event => updateValue(fieldId, event.target.value)}
        />
      <ErrorMessage message={errorMessage} />
    </div>
  </>
})

TextAreaBox.propTypes = {
  fieldId: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}