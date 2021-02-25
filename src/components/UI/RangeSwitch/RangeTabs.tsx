import React from 'react'
import './RangeTabs.scss'

const RangeTabs = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-7'>
          <div className='tabs'>
            <div className='tab-wrapper'>
              <input id='tab1' type='radio' name='range'></input>
              <label htmlFor='tab1'>Today</label>
            </div>

            <div className='tab-wrapper'>
              <input id='tab2' type='radio' name='range'/>
              <label htmlFor='tab2'>Tomorrow</label>
            </div>

            <div className='tab-wrapper'>
              <input id='tab3' type='radio' name='range'/>
              <label htmlFor='tab3'>For 7 days</label>
            </div>

            <div className='tab-wrapper'>
              <input id='tab4' type='radio' name='range'/>
              <label htmlFor='tab4'>For 16 days</label>
            </div>
        </div>


        </div>
      </div>
    </div>

  )
}

export default RangeTabs