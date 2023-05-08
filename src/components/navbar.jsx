import React from 'react'
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Title'>
      <h1>Kwetu Delicacies</h1>
    </div>
      <div className='links'>

        <Link to='/'>Home</Link>
        <Link to='/cart'>
            <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar


