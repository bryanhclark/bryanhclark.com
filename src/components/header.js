import React from 'react'
import Navbar from './navbar'
import Icons from './icons'

export default ()=> (
    <div>
        
        <header className="sans-serif tc ph3">
            <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">Bryan Clark</h1>
            <p className="f5 f4-l db fw1 ma1"> Software Engineer</p>
            <Icons/>
            <Navbar/>
        </header>
  </div>
)