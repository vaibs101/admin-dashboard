import React from 'react'
import DatePicker from 'react-date-picker'

const YearSelect = ({ onChange }) => {
  const handleChange = (date) => {
    if (onChange) onChange(date);
  }
    return (
    <div>
      <DatePicker onChange={handleChange}  />
    </div>
  )
}

export default YearSelect
