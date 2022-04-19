import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {
  return (
    <>
      <nav className='nav container flex'>
        <div className='nav-container'>
          <NavLink activeClassName='active' exact to='/'>
            <button>Home</button>
          </NavLink>
          <NavLink activeClassName='active' to='/contact'>
            <button>Contacts</button>
          </NavLink>
          {/* <NavLink activeClassName='active' exact to='/chart'>
            <button>chart</button>
          </NavLink> */}
        </div>
        <div className='add-contact'>
          <NavLink to='/contact/edit'>
            <button>
              <i className='fa-solid fa-user-plus'></i>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default AppNav
