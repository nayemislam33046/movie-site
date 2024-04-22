import React, { useState } from 'react'
import ContentWrapper from '../../../component/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import UseFetch from '../../../Hooks/FetchHooks'
import Carousel from '../../../component/Carousel/Carousel'



const Trending = () => {

    const [endPoint, setEndPoint] = useState("day")
    const {data,loading} = UseFetch(`/trending/movie/${endPoint}`)
  
    UseFetch(`/trending/movie/${endPoint}`)
    const onTabChange = (tab)=>{
       setEndPoint(tab==="Day" ? "Day" : "week")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
             <span className='carouselTitle'>Trending</span>
             <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending