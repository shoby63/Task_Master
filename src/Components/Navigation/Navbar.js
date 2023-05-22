import React from 'react'
import '../../public/styles/Navbar.css'
import Button from './Button';
import logo from '../../Assets/TaskMasterlogo.jpeg'
export default function Navbar() {
  return (
    <div className='nav_Container'>
       <div className='img_container'>
              <img className='img' src={logo} alt="Task Master"/>
               <h3>Task Master</h3> 
        </div>                
        <button className='btn'>Login</button>
      </div>
  )
}
