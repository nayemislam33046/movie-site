import React from 'react'
import './style.scss'
import Herobanner from './heroBanner/Herobanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
        <Herobanner/>
        <Trending/>
        <Popular/>
         <TopRated/>
    </div>
  )
}

export default Home