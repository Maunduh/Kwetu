import React from 'react'

export const Meal = (props) => {
    const {id, name, price, image}= props.data;
  return (
    <div className='meal'>
      <img src={image} alt=''/>
      <div className='description'>
        <p>
          <b>{name}</b>

        </p>
        <p>
          Ksh.{price}
        </p>
      </div>
    </div>
  )
}

