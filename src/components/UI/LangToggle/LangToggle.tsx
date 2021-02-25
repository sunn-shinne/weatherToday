import React from 'react'
import './LangToggle.scss'

const LangToggle = () => {
  return(
    <div className='LangToggle'>
      <input type='checkbox' className='Toggle-button'/>
      <span className='onEng'>ENG</span>
      <span className='onRus'>RUS</span>
    </div>
  )
}

export default LangToggle