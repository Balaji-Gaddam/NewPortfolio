import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='Main-footer'>
        <div className='Icons_Footer_Div'>
            <Icons/>
        </div>
        <div className='Footer_text'>
            <p>Copyright &#169;2023 All rights reserved | <span>Balaji Gaddam</span> </p>
        </div>
    </div>
  )
}

export default Footer