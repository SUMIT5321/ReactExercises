import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/userSlice";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

export const CheckBox = (props) => {
  const fieldId = props.fieldId;
  const field = useSelector(state => state.user[fieldId])
  const dispatch = useDispatch();
  const checked = field.value ? "checked" : ""
  return <>
    <div className="checkbox">
      <input 
        id={field.label}
        type="checkbox" 
        data-inputfield="receiveNotification" 
        value={field.value}
        onChange={(event) => dispatch(updateUser({id: field.id, value: event.target.checked}))}
        checked={checked}
        />
      <label className="checkboxLabel" htmlFor={field.label}>{field.label}</label>
      <br />
    </div>
    <ErrorMessage message={field.errorMessage} />
    <div className="note">{field.message}</div>
  </>
}

CheckBox.propTypes = {
  fieldId: PropTypes.string
}