import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/Apit'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration,getGenres } from './Store/HomeSlice'

import Home from './pages/Home/Home'
import Pagenotfound from './pages/404/Pagenotfound'
import Details from './pages/Details/Details'
import Explore from './pages/explore/Explore'
import Headers from './component/Headers/Headers'
import Footer from './component/Footer/Footer'
import SearchResult from './pages/searchResult/SearchResult'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  const url= useSelector((state)=>state.home.url)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  },[])
 const fetchApiConfig = ()=>{
  fetchDataFromApi('/configuration')
  .then((res)=>{
   
    const url = {
      backdrop:res.images.secure_base_url + "original",
      poster:res.images.secure_base_url + "original",
      profile:res.images.secure_base_url + "original",
    }
    dispatch(getApiConfiguration(url))
  })
 }

 const genresCall = async()=>{
  let promises = []
  let endPoint = ["tv","movie"]
  let allGenres = {}

  endPoint.forEach((url)=>{
    return promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })
  const data = await Promise.all(promises);

 data.map(({genres})=>{
  return genres.map((item)=>(allGenres[item.id] = item))
 })
    dispatch(getGenres(allGenres))
 }
  return (
   <BrowserRouter>
   <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:mediaType/:id' element={<Details/>}/>
        <Route path='/search/:query' element={<SearchResult/>}/>
        <Route path='/explore/:mediaType' element={<Explore/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App