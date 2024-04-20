import PropTypes from "prop-types";
import ErrorMessage from "./error-message";
import { userFormConfig } from "../../helper/user-helper";

const CheckBox = ({ fieldId, value, errorMessage, updateValue }) => {
  const { label, message } = userFormConfig[fieldId];

  return (
    <>
      <div className={errorMessage ? "checkbox" : "checkbox padding-bottom-16"}>
        <input
          id={label}
          type="checkbox"
          data-inputfield="receiveNotification"
          onChange={event => updateValue(fieldId, event.target.checked)}
          checked={value || false}
        />
        <label className="checkbox-label" htmlFor={label}>{label}</label>
        <br />
      </div>
      <ErrorMessage message={errorMessage} />
      <div className="note">{message}</div>
    </>
  );
};

CheckBox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  value: PropTypes.bool,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func.isRequired
};

export default CheckBox;
