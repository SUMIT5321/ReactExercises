import { InputTextBox } from "./InputTextBox";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contact/contactSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();

  function handleCreateButtonClick(event) {
    event.preventDefault();
    dispatch(addContact({}));
  }

  return <form className="form">
    <InputTextBox fieldId={"firstName"}/>
    <InputTextBox fieldId={"lastName"}/>
    <InputTextBox fieldId={"email"}/>
    <button className="customButton" type="submit" onClick={(e) => handleCreateButtonClick(e)}>Create</button>
  </form>
}