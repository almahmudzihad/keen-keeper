import React from 'react'
import Navbar from '../Share/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Share/Footer'

function Layout() {
    return (
        <div>
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
