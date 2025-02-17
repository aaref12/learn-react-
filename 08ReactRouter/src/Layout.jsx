import React from 'react'
import Header from './componants/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../src/componants/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout