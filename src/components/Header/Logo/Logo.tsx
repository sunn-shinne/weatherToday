import React from 'react'
import './Logo.scss'
import night from './images/night.png'
import morning from './images/morning.png'
import afternoon from './images/afternoon.png'
import evening from './images/evening.png'


interface propsType {
  typeOfLogoIcon: string,
}

const Logo = (props: propsType) => {

  let imgTheme
  let appNameClass = 'appName'
  switch (props.typeOfLogoIcon) {
    case 'night':
      imgTheme = night
      appNameClass += ' white'
      break
    case 'morning':
      imgTheme = morning
      break
    case 'afternoon':
      imgTheme = afternoon
      break
    case 'evening':
      imgTheme = evening
      appNameClass += ' white'
      break
  }


  return(
    <div className = 'Logo d-flex justify-content-center justify-content-sm-start'>
      <img src={imgTheme} alt='#'/>
      <p className = {appNameClass}>WeatherToday</p>
    </div>
  )
}

export default Logo