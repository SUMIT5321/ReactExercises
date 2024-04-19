import PropTypes from "prop-types"
import { formatNumber } from "../utility/numberUtils"
import { questionPropType } from "../lib/PropTypeValues"

export const ResponseList = ({ correctAnswers = false, list }) => {
  const header = <h3 className="margin-top-24">{correctAnswers ? "Correct Answers" : "Wrong Answers"}</h3>
  if (list.length === 0) return (
    <>
      {header}
      <div>None</div>
    </>
  )

  const responseListUi = list.map((question) => {
    return (
      <tr key={question.id}>
        <td>{question.index}</td>
        <td>{question.getStringExpression()}</td>
        <td>{question.response ? question.response : "NA"}</td>
        <td>{formatNumber(question.getAnswer())}</td>
      </tr>
    )
  })
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
  )
}

ResponseList.propTypes = {
  correctAnswers: PropTypes.bool,
  list: PropTypes.arrayOf(questionPropType).isRequired
}