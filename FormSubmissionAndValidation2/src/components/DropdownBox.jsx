import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";
import { userFormConfig } from "../helper/userHelper";
import React from "react";

export const DropDownBox = React.memo(function DropDownBox({ fieldId, options, value, errorMessage, updateValue }) {
  const label = userFormConfig[fieldId].label;

  const optionElements = options.map((option) => {
    return <option key={option} value={option} >{option}</option>
  })
  optionElements.splice(0,0, <option key="placeholder" value="" disabled hidden>Choose time zones</option>)

  return <>
    <div className="formRow">
      <div className="label">{label}</div>
      <div>
        <select className="dropdown" 
          data-inputfield="timeZone" 
          onChange={(event) => updateValue(fieldId, event.target.value)}
          value={value || ""}>
            {optionElements}
        </select>
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  </>
})

DropDownBox.propTypes = {
  fieldId: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func
}