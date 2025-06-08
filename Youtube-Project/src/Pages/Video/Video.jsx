import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommend from '../../Components/Recommended/Recommend'
import { useParams } from 'react-router-dom'


const Video = () => {
  
  const{videoId,categoryId}=useParams();



  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommend categoryId={categoryId}/>
    </div>
  )
}

export default Video