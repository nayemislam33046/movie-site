import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css"
const Img = ({src}) => {
  return (
    <div>
        <LazyLoadImage
        
        alt=''
        effect='blur'
        src={src}
        />
    </div>
  )
}

export default Img