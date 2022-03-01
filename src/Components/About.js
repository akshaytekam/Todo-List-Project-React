import React from 'react'
import pic from "./profil.jpg";
function About() {
  return (
      <>
    <div>
      <h1>About ToDo App</h1>
    </div>
    <div>
    <h4>ToDo App is the Sample Project created by AKSHAY B. TEKAM. I believe in making knowledge 
        fun for everyone. My purpose is to create an app where user can list out their daily tasks and 
        activities. People can keep track of their completed ans uncompleted tasks and edit as well.</h4>

    <div>
    <img src={pic} alt="An Image"/>
    </div>
  </div>
  </>
  )
}

export default About
