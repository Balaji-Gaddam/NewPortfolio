import React from 'react'
import '../App.css'
import Svg from './Svg'
import profile from '../images/1699456790796.jpg'
import Button from './Button'


const svgData=[
  {
    width:'50%',
    height:'20%',
    fill:'#FFFFFF',
  }
]

function HomePage() {
  return (
    <section className='HomeSec'>
        <div className='HomeLeft'>
            <div className='HeroText'>
                <h6>I'M<span>Balaji</span>
                      <lord-icon
                      src="https://cdn.lordicon.com/tltikfri.json"
                      trigger="loop"
                      delay="2000"
                      stroke="bold"
                      colors="primary:#ccf381,secondary:#9cc2f4"
                      style={{width:'30px',height:'30px'}}
                      >
                  </lord-icon></h6>
                <h4>Frontend Developer</h4>
                <a href='mailto:balajigaddam734@gmail.com' ><Button title='Contact Me'/></a>
            </div>
            <div className='svgLeft'>
              <Svg width={svgData[0].width} height={svgData[0].height} fill={svgData[0].fill}/>
        
            </div>
        </div>
        <div className='HomeRight'>
          <div className='imgBorder'>
              <img src={profile} alt='profile' />
          </div>
        </div>
    </section>
  )
}

export default HomePage