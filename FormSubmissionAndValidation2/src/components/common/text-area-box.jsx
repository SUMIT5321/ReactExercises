import PropTypes from "prop-types";
import ErrorMessage from "./error-message";
import { userFormConfig } from "../../helper/user-helper";

const TextAreaBox = ({ fieldId, value, errorMessage, updateValue }) => {
  const { label, minLength } = userFormConfig[fieldId];

  return (
    <>
      <div className="label top-margin-16">{label}</div>
      <div className={errorMessage ? "" : "padding-bottom-16"}>
        <textarea
          className="about"
          minLength={minLength}
          value={value || ""}
          onChange={event => updateValue(fieldId, event.target.value)}
        />
        <ErrorMessage message={errorMessage} />
      </div>
    </>
  );
};

TextAreaBox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func.isRequired
};

export default TextAreaBox;
