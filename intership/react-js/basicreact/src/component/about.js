import React, { useContext } from 'react'
import { AppContext } from '../contex/appContext'

const About = () => {

    const {name,age} = useContext(AppContext)
  return (
    <div>
        <h2>About Page</h2>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
    </div>
  )
}

export default About