import React from 'react'
import {meals} from "../../meals";
import {Meal} from "./meal";
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
    
    <div className='meals'>{meals.map((meal)=>{ 
     return <Meal data={meal} />
    })}

    </div>
    </div>
  )
}

export default Home
