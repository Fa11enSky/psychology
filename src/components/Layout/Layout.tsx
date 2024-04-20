import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'
const Layout = () => {
  return (
    <div style={{ marginLeft: "auto",marginRight:"auto", maxWidth: "1440px",paddingLeft: 128,paddingRight:128}}>
          <Header/>
          <Outlet/>
    </div>
  )
}

export default Layout
