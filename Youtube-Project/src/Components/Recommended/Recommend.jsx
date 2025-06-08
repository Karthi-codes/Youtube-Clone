import React, { useEffect, useState } from 'react'
import './Recommend.css'
import { API_KEY, value } from '../../data'
import { data, Link } from 'react-router-dom'

const Recommend = ({ categoryId }) => {

    const [apidata, setApiData] = useState([]);


    const fetch_data = async () => {

        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=22&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(relatedvideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetch_data()
    }, [])

    return (
        <div className='recommended'>
            {apidata.map((item,index)=>{
                return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list"><br />
                <img src={item.snippet.thumbnails.medium.url} alt="" /><br />
                <div className="video-info">
                    <h4>{item.snippet.title}</h4>
                    <h5>{item.snippet.channelTitle}</h5>
                    <p>{value(item.statistics.viewCount)} Views</p>
                </div>
            </Link>
            )
})}
        </div >

    )
}

export default Recommend