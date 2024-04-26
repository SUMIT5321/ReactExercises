import PropTypes from "prop-types";
import { formatNumber } from "../utility/number-utils";
import { questionPropType } from "../lib/prop-type-values";

const ResponseList = ({ correctAnswers = false, list }) => {
  const header = <h3 className="margin-top-24">{correctAnswers ? "Correct Answers" : "Wrong Answers"}</h3>;
  if (list.length === 0) return (
    <>
      {header}
      <div>None</div>
    </>
  );

  const responseListUi = list.map((question) => {
    return (
      <tr key={question.id}>
        <td>{question.index}</td>
        <td>{question.stringExpression}</td>
        <td>{question.receivedAnswer ? question.receivedAnswer : "NA"}</td>
        <td>{formatNumber(question.expectedAnswer)}</td>
      </tr>
    );
  });
  return (
    <>
      {header}
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Response</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {responseListUi}
        </tbody>
      </table>
    </>
  );
};

ResponseList.propTypes = {
  correctAnswers: PropTypes.bool,
  list: PropTypes.arrayOf(questionPropType).isRequired
};

export default ResponseList;
