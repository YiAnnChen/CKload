import React,{useState} from 'react'
import {Link} from 'react-router-dom';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';

import {SidebarData} from './SidebarData';
import './VNavbar.css'

function VNavBar() {

const [sidebar,setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{color:'#c60021'}}>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                  <Link to="#" className='menu-bars1'>
                      <AiIcons.AiOutlineClose />
                  </Link>
              </li>
              {SidebarData.map((item,index)=>{
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                              {item.icon}
                          <span>{item.title}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default VNavBar