import React from 'react'
import SideMenu from './components/SideMenu'
import './Sidebar.scss'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <h1 className='sidebar-title'>DuosApp</h1>
        <ul className="sidebar-menu">
            <SideMenu active={true} name="Dashboard" icon={"fa-solid fa-chart-area"} />
            <SideMenu  name="Список" icon={"fa-solid fa-list"} />
            <SideMenu name="Қарздорлар" icon={"fa-solid fa-circle-xmark"} />
            <SideMenu name="Янги қўшиш" icon={"fa-solid fa-plus"} />
        </ul>
    </aside>
  )
}

export default Sidebar