import React, { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router'
import UseFetch from '../../../Hooks/FetchHooks'
import { useSelector } from 'react-redux'
import img from '../../../component/lazyLoadImage/img'
import ContentWrapper from '../../../component/ContentWrapper/ContentWrapper'



const Herobanner = () => {
  const [background, setBackground] = useState("")
  const [query,setQuery] = useState("")
   const navigate = useNavigate()
   const {url} = useSelector((state)=>state.home)
   const {data,loading} = UseFetch("/movie/upcoming")


   useEffect(() => {

   const bg =url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
   setBackground(bg)
   }, [data])
   
  const searchQueryHandler = (event)=>{

    if (event.key==="Enter" && query.length>0) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <div className='heroBanner'>
     {!loading && <div className='backdrop-img'>
        <img src={`${background}`} alt=''/>
      </div>}

      <div className='opacityLayer'>

      </div>

      <ContentWrapper>

     
              <div className="heroBannerContent">
                <span className='title'>welcome</span>
                <span className='subTitle'>Millions of Movies, TV shows and people to discover. 
                Explore Now.
                </span>
                <div className='searchInput'>
                  <input type="text" 
                  placeholder='Search for a movie or tv show...' onKeyUp={searchQueryHandler}
                  onChange={(e)=>setQuery(e.target.value)}
                  />

                  <button>Search</button>
                </div>
              </div>
 
      </ContentWrapper>
    </div>
  )
}

export default Herobanner