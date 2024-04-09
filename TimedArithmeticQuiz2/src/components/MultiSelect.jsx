import PropTypes from "prop-types"
import React from "react"

export const MultiSelect = React.memo(function MultiSelect({fieldId, fieldLabel, values, selectedValues, setSelectedValues}) {
  
  function handleChange(value) {
    setSelectedValues(
      fieldId,
      selectedValues.includes(value) ? selectedValues.filter(v => v !== value) : [...selectedValues, value]
    )
  }

  const options = values.map(value => {
    const checked = selectedValues.includes(value);
    return (
      <label key={value} className="checkbox">
        <input type="checkbox" value={value} required="required" onChange={(e) => handleChange(e.target.value)} checked={checked} />
        {` ${value} `}
      </label>
    )
  })

  return <div className="inputNumber">
    <div className="label">{fieldLabel}</div>
    <div className="multiSelectWrapper">
      {options}
    </div>
  </div>
})

MultiSelect.propTypes = {
  fieldId: PropTypes.string,
  fieldLabel: PropTypes.string,
  values: PropTypes.array,
  selectedValues: PropTypes.array,
  setSelectedValues: PropTypes.func
}