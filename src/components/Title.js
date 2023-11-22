import React from 'react'
import ReactTyped from "react-typed";
import '../components/Title.css'

function Title() {
    
  return (
    <div>
    <h1>
      I'm a{" "}
      <ReactTyped
        strings={["Developer", "Writer", "Designer"]}
        typeSpeed={100}
        loop
        backSpeed={20}
        cursorChar=">"
        showCursor={true}
      />
    </h1>
  </div>
  )
}

export default Title