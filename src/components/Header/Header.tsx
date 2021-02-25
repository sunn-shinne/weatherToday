import React from 'react'
import Logo from "./Logo/Logo";
import Select from "../UI/Select/Select";
import LangToggle from "../UI/LangToggle/LangToggle";

interface propsType {
  typeOfLogoIcon: string,
}

const Header = (props: propsType) => {
  return(
    <div className = 'container' style={{padding: 0}}>
      <div className = 'row'>

        <div className = 'col-12 text-center justify-content-center col-sm-5 justify-content-sm-start  col-lg-4' >
          <Logo typeOfLogoIcon={props.typeOfLogoIcon}/>
        </div>

        <div className = 'col-12 col-sm-7 col-lg-3'>
          <Select/>
        </div>

        <div className = 'col-9 col-sm-10 col-lg-4'>
          <Select/>
        </div>

        <div className='col-3 col-sm-2 col-lg-1'><LangToggle/></div>
      </div>
    </div>
  )
}

export default Header

