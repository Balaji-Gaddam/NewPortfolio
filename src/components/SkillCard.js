import React from 'react'
import '../App.css'

function SkillCard({img,title,back}) {
  return (
    <div className='SkillCard' style={{boxShadow:back}} >
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default SkillCard