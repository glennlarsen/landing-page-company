import React from 'react'
import Navigation from "../Navigation";

function Layout({children}) {
  return (
    <div className='wrapper'>
      <Navigation />
        {children}
    </div>
  )
}

export default Layout;