import React from 'react'
import TitleHead from './TitleHead'
import { EduDetails } from './EduDetails'

function Education() {
  return (
    <div className='main-Edu'>
        <TitleHead heading='Education' />
        <div className='Sub-Edu'>
           {EduDetails.map((Details)=>{
            const {collageName,Degree,Branch,Duration,per,imagscr,classNAME}=Details;
            return(
                <div className={classNAME} >
                    <div className='Edu-Text'>
                        <h2>{collageName}</h2>
                        <h3>{Degree}</h3>
                        <p>{Branch}</p>
                        <p>{Duration}<span> | {per}</span></p>

                    </div>
                        <img src={imagscr} alt='EduIMG'/>

                </div>
            );
           })}
        </div>
    </div>
  )
}

export default Education