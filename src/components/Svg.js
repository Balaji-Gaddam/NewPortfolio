import React from 'react'

function Svg(props) {
  return (
    <>
     <div>
        <svg width="100%" height="100%">
              <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill={props.fill}></circle>
              </pattern>
              <rect  x="0" y="0" width={props.width} height={props.height} fill="url(#pattern-circles)"></rect>
        </svg >
        
    </div>
    </>
   
  )
}

export default Svg