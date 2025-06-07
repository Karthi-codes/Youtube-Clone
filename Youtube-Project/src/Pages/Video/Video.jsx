import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommend from '../../Components/Recommended/Recommend'
import { useParams } from 'react-router-dom'


const Video = () => {
  
  const{video,categoryId}=useParams();



  return (
    <div className='play-container'>
      <Playvideo video={video}/>
      <Recommend/>
    </div>
  )
}

export default Video