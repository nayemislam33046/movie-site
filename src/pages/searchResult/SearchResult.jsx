import React, { useEffect } from 'react'
import './style.scss'
import InfiniteScroll from "react-infinite-scroll-component"
import { fetchDataFromApi } from '../../utils/Apit'
import ContentWrapper from '../../component/ContentWrapper/ContentWrapper'
import { useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../component/Spinner/Spinner'
import MovieCard from '../../component/MovieCard/MovieCard'


const SearchResult = () => {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const {query} = useParams()
  
  const fetchInitialData = ()=>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      setData(res)
      setPageNum((prev)=>prev+1)
      setLoading(false)
    })
  }

  const fetchNextPageData = ()=>{
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
        if (data?.results) {
          setData({
            ...data,
            results:[...data?.results,...res.results]
          })
        }
        else{
          setData(res)
        }
        setPageNum((prev)=>prev+1)    
    })
  }

  useEffect(() => {
  setPageNum(1)  
  fetchInitialData()
   
  }, [query])
  
  return (
    <div className='searchResultsPage'>
        {loading && <Spinner initial={true}/>}
        {!loading && (
          <ContentWrapper>
            {data?.results.length > 0 ?(
         <>
           <div className="pageTitle">
            {`Search ${data?.total_results>1?"results":"result"} of ${query}`}
           </div>

           <InfiniteScroll className='content' 
           dataLength={data?.results?.length || []} 
           next={fetchNextPageData}
           hasMore={pageNum <=data?.total_pages}
           >
            

            {data?.results.map((item,index)=>{
              if (item.media_type==="person") return ; 
              return (
                <MovieCard key={index} data={item} fromSearch={true}/>
              )
            })}
           </InfiniteScroll>
         </>
            ):(
                <span className="resultNotFound">
                  Sorry Result not found !
                </span>
            )}
          </ContentWrapper>
        )}
    </div>
  )
}

export default SearchResult