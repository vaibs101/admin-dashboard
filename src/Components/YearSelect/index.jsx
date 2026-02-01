import React from 'react'
import DatePicker from 'react-date-picker'

const YearSelect = () => {
  const handleChange = (date) => {
    console.log(date);
  }
    return (
    <div>
      <DatePicker onChange={handleChange}  />
    </div>
  )
}

export default YearSelect
