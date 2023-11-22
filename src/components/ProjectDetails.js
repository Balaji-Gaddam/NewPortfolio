import React from 'react'
import Button from './Button'


function ProjectDetails({ProjectName,img,Prodiscription,link}) {
  return (
    <>
    <div className='ProjectCard'>
        <img src={img} alt={img} />
        <h2>{ProjectName}</h2>
        <p>{Prodiscription}</p>
        <a href={link} target='_blank' rel='noreferrer'><Button title='Vist Here'/></a>
    </div>
    </>
    
  )
}

export default ProjectDetails