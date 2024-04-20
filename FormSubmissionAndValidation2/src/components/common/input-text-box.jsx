import PropTypes from "prop-types";
import ErrorMessage from "./error-message";
import { userFormConfig } from "../../helper/user-helper";

const InputTextBox = ({ fieldId, value, errorMessage, updateValue }) => {
  const fieldLabel = userFormConfig[fieldId].label;
  return <>
    <div className="form-row">
      <div className="label">{fieldLabel}</div>
      <div className={errorMessage ? "" : "padding-bottom-16"}>
        <input
          className="input-text"
          data-inputfield="loginId"
          type="text"
          value={value || ""}
          onChange={(event) => updateValue(fieldId, event.target.value)} />
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  </>;
};

InputTextBox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func.isRequired
};

export default InputTextBox;
