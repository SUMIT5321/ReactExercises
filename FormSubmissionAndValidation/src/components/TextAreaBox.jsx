import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/userSlice";
import PropTypes from "prop-types";

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
      {field.errorMessage != null ? <div className="error">{field.errorMessage}</div> : <div className="dummyHeight" />}
    </div>
   
  </>
}

TextAreaBox.propTypes = {
  fieldId: PropTypes.string,
}