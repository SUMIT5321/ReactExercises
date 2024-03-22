import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/userSlice";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

export const InputTextBox = (props) => {
  const fieldId = props.fieldId;
  const field = useSelector(state => state.user[fieldId])
  const dispatch = useDispatch();

  return <>
    <div className="formRow">
      <div className="label">{field.label}</div>
      <div>
        <input 
          className="inputText" 
          data-inputfield="loginId" 
          type="text" 
          value={field.value}
          onChange={(event) => dispatch(updateUser({id: field.id, value: event.target.value}))} />
        <ErrorMessage message={field.errorMessage} />
      </div>
    </div>
  </>
}

InputTextBox.propTypes = {
  fieldId: PropTypes.string
}