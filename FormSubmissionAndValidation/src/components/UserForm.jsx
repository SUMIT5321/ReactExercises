import { useDispatch, useSelector } from "react-redux";
import { InputTextBox } from "./InputTextBox"
import { DropDownBox } from "./DropdownBox";
import timeZones from "../utils/timeZones";
import { TextAreaBox } from "./TextAreaBox";
import { CheckBox } from "./CheckBox";
import { localizableStrings } from "../utils/localizableStrings";
import { CustomButton } from "./CustomButton";
import { handleFormSubmit } from "../features/userSlice";

export const UserForm = () => {
  const userId = useSelector(state => state.user.userId.id);
  const name = useSelector(state => state.user.name.id);
  const email = useSelector(state => state.user.email.id);
  const timeZone = useSelector(state => state.user.timeZone.id);
  const homePage = useSelector(state => state.user.homePage.id);
  const aboutMe = useSelector(state => state.user.aboutMe.id);
  const receiveCommentsNotification = useSelector(state => state.user.receiveCommentsNotification.id);

  const dispatch = useDispatch();

  const submitAction = (event) => {
    event.preventDefault();
    dispatch(handleFormSubmit({}));
  }

  return <>
    <div className="container">
      <div className="innerContainer">
        <div className="header">Registration Form</div>
        <form>
          <InputTextBox fieldId={userId} />
          <InputTextBox fieldId={email} />
          <InputTextBox fieldId={name} />
          <DropDownBox fieldId={timeZone} options={timeZones} />
          <InputTextBox fieldId={homePage} />
          <TextAreaBox fieldId={aboutMe} />
          <CheckBox fieldId={receiveCommentsNotification} />
          <div className="passwordMessage">{localizableStrings.passwordMainMessage}</div>
          <CustomButton text={localizableStrings.goText} action={submitAction} />
        </form>
      </div>
    </div>
  </>
}