import React, { useState } from 'react'
import ContentWrapper from '../../../component/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import UseFetch from '../../../Hooks/FetchHooks'
import Carousel from '../../../component/Carousel/Carousel'



const Popular = () => {

    const [endPoint, setEndPoint] = useState("movie")
    const {data,loading} = UseFetch(`/${endPoint}/popular`)
  

    const onTabChange = (tab)=>{
       setEndPoint(tab==="Movies" ? "movie" : "tv")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
             <span className='carouselTitle'>What's Popular</span>
             <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default Popular