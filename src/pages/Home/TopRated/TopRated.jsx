import React, { useState } from 'react'
import ContentWrapper from '../../../component/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import UseFetch from '../../../Hooks/FetchHooks'
import Carousel from '../../../component/Carousel/Carousel'



const TopRated = () => {

    const [endPoint, setEndPoint] = useState("movie")
    const {data,loading} = UseFetch(`/${endPoint}/top_rated`)
  

    const onTabChange = (tab)=>{
       setEndPoint(tab==="Movies" ? "movie" : "tv")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
             <span className='carouselTitle'>Top Rated</span>
             <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default TopRated