import React from 'react'
import Hero from '../Components/Hero/Hero'
import Stat from '../Components/Stat/Stat'
import Frends from '../Components/Frends/Frends'

function Home() {
    return (
        <div className='bg-base-200'>
            <Hero />
            <Stat />
            <Frends />
        </div>
    )
}

export default Home
