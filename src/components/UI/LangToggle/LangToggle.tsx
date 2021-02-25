import React from 'react'
import './LangToggle.scss'

const LangToggle = () => {
  return(
    <div className='LangToggle'>
      <input type='checkbox' className='Toggle-button'/>
      <label className='onEng'>en</label>
      <label className='onRus'>ru</label>
    </div>
  )
}

export default LangToggle