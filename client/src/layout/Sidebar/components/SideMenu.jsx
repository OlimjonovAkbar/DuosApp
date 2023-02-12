import React from 'react'
import './SideMenu.scss'

function SideMenu({name, active, icon}) {
  return (
    <>  
     {active ? (
        <li className='sidebar-menu-item active'>
            <i className={icon}></i>
            <span className='menu-item-name'>{name}</span>
        </li>
      ) : (
        <li className='sidebar-menu-item'>
            <i className={icon}></i>
            <span className='menu-item-name'>{name}</span>
        </li>
      )}
    
    </> 
  )
}

export default SideMenu