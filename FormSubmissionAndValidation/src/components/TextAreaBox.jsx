import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/userSlice";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";

export const TextAreaBox = (props) => {
  const fieldId = props.fieldId;
  const field = useSelector(state => state.user[fieldId])
  const dispatch = useDispatch();

  return <>
    <div className="label topMargin16">{field.label}</div>
    <div>
      <textarea 
        className="about" 
        minLength={field.minLength}
        value={field.value}
        onChange={(event) => dispatch(updateUser({id: field.id, value: event.target.value}))}
        />
      <ErrorMessage message={field.errorMessage} />
    </div>
   
  </>
}

TextAreaBox.propTypes = {
  fieldId: PropTypes.string,
}