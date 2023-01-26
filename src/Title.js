import React from 'react'
import { FaBars } from 'react-icons/fa'

const Title = ({ toggleNav }) => {
  return (
    <div className='title'>
      <h1 className='site-name'>
        Coding <span>Addict</span>
      </h1>
      <span className='menu-icon' onClick={toggleNav}>
        <FaBars />
      </span>
    </div>
  )
}

export default Title
