import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
        <div>
        <header className="bg-dark text-white p-2 nav">
            <h3 className='mx-2'>BURGER</h3>
            <NavLink className={ ({isActive}) => isActive ? "nav-link bg-white text-dark" : "nav-link text-white" } to="/burger">Order</NavLink>
        </header>
        <div className='content' style={{minHeight: "75vh"}}>
          <Outlet/>
        </div>
        <footer className='bg-dark text-white p-5'>Footer</footer>
      </div>
    )
  }
}
