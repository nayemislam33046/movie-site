import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/Apit'

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading("Loading...")
        setData(null)
        setError(null)

        fetchDataFromApi(url)
        .then((res)=>{
            setLoading(false)
            setData(res)
        }).catch((err)=>{
            setLoading(false)
            setError("Something went wrong")
        })
    },[url])

  return {data,loading,error}
}

export default UseFetch