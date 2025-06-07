import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { Link } from 'react-router-dom'
import { API_KEY, value } from '../../data'
import moment from 'moment'


const Feed = ({ category }) => {

    const [data, setData] = useState([])// this line is used to get the video from the youtube api and the empty usestate is used to change the video of our reference 

    const fetchData = async () => { // this is the line that connect the api with my project that controls the video of our thoughts 
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=en&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        // here i used the category and the apikey to connect with the project    Category is used in my project and Apikey is used in fetch the data that i select in my project
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items)) // this is used the json in my project that the Binary Data to Original Data  

    }
     useEffect(()=>{
        fetchData();
    },[category]) //this Useeffect is used to call the api and Memory Restoreing in the project
   

    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channeltitle}</h3>
                        <p>{value(item.statistics.viewCount)} views &bull;{moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feed