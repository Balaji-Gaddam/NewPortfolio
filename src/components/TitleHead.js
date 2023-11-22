import React from 'react'

function TitleHead({heading,color}) {
  return (
    <div className='TitleDiv'>
        <h1 style={{color:color}}>{heading}</h1>
    </div>
  )
}

export default TitleHead