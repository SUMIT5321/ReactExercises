import PropTypes from "prop-types";
import { updateUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "./ErrorMessage";

export const DropDownBox = (props) => {
  const fieldId = props.fieldId;
  const options = props.options;
  
  const field = useSelector(state => state.user[fieldId])
  const dispatch = useDispatch();

  const optionElements = options.map((option) => {
    return <option key={option} value={option} >{option}</option>
  })
  optionElements.splice(0,0, <option key="placeholder" value="" disabled hidden>Choose time zones</option>)

  return <>
    <div className="formRow">
      <div className="label">{field.label}</div>
      <div>
        <select className="dropdown" 
          data-inputfield="timeZone" 
          onChange={(event) => dispatch(updateUser({id: field.id, value: event.target.value}))}
          value={field.value}>
            {optionElements}
        </select>
        <ErrorMessage message={field.errorMessage} />
      </div>
    </div>
  </>
}

DropDownBox.propTypes = {
  fieldId: PropTypes.string,
  options: PropTypes.array
}