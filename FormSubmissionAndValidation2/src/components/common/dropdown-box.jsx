import PropTypes from "prop-types";
import ErrorMessage from "./error-message";
import { userFormConfig } from "../../helper/user-helper";

const DropDownBox = ({ fieldId, options, value, errorMessage, updateValue }) => {
  const label = userFormConfig[fieldId].label;

  const optionElements = options.map((option) => {
    return <option key={option} value={option} >{option}</option>;
  });
  optionElements.splice(0, 0, <option key="placeholder" value="" disabled hidden>Choose time zones</option>);

  return (
    <>
      <div className="form-row">
        <div className="label">{label}</div>
        <div className={errorMessage ? "" : "padding-bottom-16"}>
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
  );
};

DropDownBox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  updateValue: PropTypes.func.isRequired
};

export default DropDownBox;
