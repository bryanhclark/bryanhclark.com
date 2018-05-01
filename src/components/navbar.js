import React from 'react'
import { NavLink } from 'react-router-dom'


export default () => (
    <nav className="dt w-100 mw8 center mb4"> 
        <div className="v-mid tc">
            <ul className="h2">
                <NavLink exact to='/'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Home</li></NavLink> 
                <NavLink to='/developer'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Developer</li></NavLink>  
                <NavLink to='/gemologist'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Gemologist</li></NavLink> 
                <NavLink to='/drummer'><li className="f6 fw4 grow hover-black no-underline black-70 dn dib pv2 ph3">Drummer</li></NavLink> 
            </ul> 
        </div>
      </nav>
)