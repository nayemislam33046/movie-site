import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import "./style1.scss"
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import logo from "../../Asset/movix-logo.svg"
import {HiOutlineSearch } from "react-icons/hi"
import {VscChromeClose} from "react-icons/vsc"
import {SlMenu } from "react-icons/sl"
const Headers = () => {
  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileView, setMobileView] = useState(false)
  const [query, setQuery] = useState("")
  const [ShowSearch, setShowSearch] = useState("")
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(()=>{
     window.scrollTo(0,0)
  },[location])
const controlNavbar = ()=>{
if (window.scrollY > 200) {
  if (window.scrollY>lastScrollY && !mobileView) {
    setShow("hide")
  }
  else {
  setShow("show")
}
}
else{
  setShow("top")
}
setLastScrollY(window.scrollY)
}
useEffect(() => {
  window.addEventListener("scroll", controlNavbar)
  return ()=>{ 
    window.removeEventListener("scroll", controlNavbar)

}
}, [lastScrollY])


  const openSearch = ()=>{
    setMobileView(false)
    setShowSearch(true)
  }
  const openMobileMenu = ()=>{
    setMobileView(true)
    setShowSearch(false)
  }

  const navigationHandler = (type) =>{
    if (type==="movie") {
      navigate("/explore/movie")
   }
   else{
    navigate("/explore/tv")
   }
  }

  const searchQueryHandler = (event)=>{

    if (event.key==="Enter" && query.length>0) {
      navigate(`/search/${query}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }
  }

  return (
    <header className={`header ${mobileView ? "mobileView" : " "} ${show}`}>
         <ContentWrapper>
             <div className="logo" onClick={()=>navigate("/")}>
             <img src={logo} alt="" />
             </div>
             <ul className='menuItems'>
                 <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
                 <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
                 <li className="menuItem">
                  <HiOutlineSearch onClick={openSearch}/>
                 </li>
             </ul>
             <div className='mobileMenuItems'>
               <HiOutlineSearch onClick={openSearch}/>
              {mobileView ? (
                <VscChromeClose onClick={()=>setMobileView(false)}/>
                ):(         
                  <SlMenu onClick={openMobileMenu}/>
                )}
             </div>
         </ContentWrapper>

         {ShowSearch && <div className='searchBar'>
           <ContentWrapper>
           <div className='searchInput'>
                  <input type="text" 
                  placeholder='Search for a movie or tv show...' onKeyUp={searchQueryHandler}
                  onChange={(e)=>setQuery(e.target.value)}
                  />
                    <VscChromeClose onClick={()=>setShowSearch(false)}/>
                </div>
           </ContentWrapper>
         </div>}
    </header>
  )
}


export default Headers