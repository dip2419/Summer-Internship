import React, { useContext } from 'react'
import { AppContext } from '../contex/appContext'

const Home = () => {
const{name,age} = useContext(AppContext)

  return (
    <div>
        <h2>Home Page</h2>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
    </div>
  )
}

export default Home