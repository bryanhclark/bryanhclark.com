import React from 'react'
import { NavLink } from 'react-router-dom'


export default () => (
    <nav className="dt w-100 mw8 center"> 
        <div className="v-mid tc">
            <ul className="h2">
                <NavLink exact to='/'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Home</li></NavLink> 
                <NavLink to='/about'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">About</li></NavLink>  
                <NavLink to='/portfolio'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Portfolio</li></NavLink> 
            </ul> 
        </div>
      </nav>
)