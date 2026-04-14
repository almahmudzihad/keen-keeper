import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '../Components/Layout/Layout'
import Home from '../Pages/Home'
import Status from '../Pages/Status'
import Timeline from '../Pages/Timeline'
import FrendsDetels from '../Components/Frends/FrendsDetels'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'frendsdetels/:id',
                Component: FrendsDetels
            },
            {
                path: '/status',
                element: <Status />
            },
            {
                path: '/timeline',
                element: <Timeline />
            }
        ]
    }
])
