import React from 'react'
import Header from '../Header/Header.jsx'
function Layout({children}) {
    return(
        <div>
            <Header/>
            {children}
          
        </div>

    )
}
export default Layout
