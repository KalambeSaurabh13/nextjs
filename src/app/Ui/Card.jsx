import React from 'react'

const Card = ({children}) => {
  return (
    <div className='border w-80 flex justify-center items-center p-24 m-3 shadow-md'>{children}</div>
  )
}

export default Card