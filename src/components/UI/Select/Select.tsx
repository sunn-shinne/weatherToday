import React from 'react'
import './Select.css'

const Select = (props:any) => {
  return (
    <select className="Select">
      <option>Metric (Celcius, m/s, mm)</option>
      <option>Scientific (Kelvin, m/s, mm)</option>
      <option>Fahrenheit (F, mph, in)</option>
    </select>
  )
}

export default Select