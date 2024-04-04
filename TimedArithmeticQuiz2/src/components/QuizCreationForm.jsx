import { useCallback, useState } from "react"
import { InputNumberBox } from "./InputNumberBox"
import { MultiSelect } from "./MultiSelect";
import { quizConfig } from "../../../TimedArithmeticQuiz/src/data/quizConfig";
import PropTypes from "prop-types"
import newId from "../utility/newId";

export const QuizCreationForm = ({createQuiz}) => {
  const [formData, setFormData] = useState({
    minLimit: null,
    maxLimit: null,
    numberOfQuestions: null,
    timer: null,
    operators: [],
  });

  const updateForm = useCallback(function updateForm(field, value) {
    setFormData(data => ({...data, [field]: value}))
  },[]);

  function validateAllFields() {
    const errorMessages = []
    !formData.minLimit && errorMessages.push("Please add minimum limit");
    !formData.maxLimit && errorMessages.push("Please add maximum limit");
    !formData.numberOfQuestions && errorMessages.push("Please add number of questions");
    !formData.timer && errorMessages.push("Please add timer");
    !formData.operators.length && errorMessages.push("Please select atleast one operator");

    if (formData.minLimit && formData.maxLimit && formData.minLimit > formData.maxLimit) 
      errorMessages.push("Max limit should be greater than min limit");
    return errorMessages;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessages = validateAllFields();

    if (errorMessages.length) {
      alert(errorMessages.join("\n"));
    } else {
      createQuiz({...formData, id: newId()});
      setFormData({
        minLimit: null,
        maxLimit: null,
        numberOfQuestions: null,
        timer: null,
        operators: [],
      })
    }
  }

  return <div className="formWrapper">
    <h2>Generate Quiz</h2>
    <div className="formQuestionsWrapper">
      <InputNumberBox fieldId={"minLimit"} fieldLabel={"Min limit"} fieldValue={formData.minLimit} setFieldValue={updateForm} />
      <InputNumberBox fieldId={"maxLimit"} fieldLabel={"Max limit"} fieldValue={formData.maxLimit} setFieldValue={updateForm} />
      <InputNumberBox fieldId={"numberOfQuestions"} fieldLabel={"No. of questions"} fieldValue={formData.numberOfQuestions} setFieldValue={updateForm} />
      <InputNumberBox fieldId={"timer"} fieldLabel={"Time per questions (secs)"} fieldValue={formData.timer} setFieldValue={updateForm} />

      <MultiSelect fieldId={"operators"} fieldLabel={"Operators"} values={quizConfig.operatrs} selectedValues={formData.operators} setSelectedValues={updateForm}/>
    </div>
    <button className="customButton" onClick={e => handleSubmit(e)}>SUBMIT</button>
  </div>
}

QuizCreationForm.propTypes = {
  createQuiz: PropTypes.func
}