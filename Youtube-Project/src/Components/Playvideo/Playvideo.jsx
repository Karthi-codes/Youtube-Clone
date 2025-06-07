import React from 'react'
import './Playvideo.css'
import Video1 from '../../assets/Video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'





const Playvideo = ({ video }) => {
    return (
        <div className='play-video'>
            {/* <video src={Video1} controls autoPlay muted></video> */}
            <video width="320" height="240" controls>
                <source src={`${video}`} type="video/mp4"/>
                    <source src={`${video}`} type="video/ogg"/>
                        Your browser does not support the video tag.
            </video>


                    <h3>Best channel to learn coding that help you to be a web Developer</h3>
                    <div className='play-video-info'>
                        <p>125 views & Like; 2 Days Ago</p>
                        <div>
                            <span><img src={like} alt="" />130</span>
                            <span><img src={dislike} alt="" />3</span>
                            <span><img src={share} alt="" />Share</span>
                            <span><img src={save} alt="" />Save</span>
                        </div>
                    </div>
                    <hr />
                    <div className="publisher">
                        <img src={jack} alt="" />
                        <div>
                            <p>Greatstack</p>
                            <span>1M Subcribers</span>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className="video-discription">
                        <p>Channel that makes learning Easy</p>
                        <p>Subscribe Greatstack to watch More Tutorials on Web Development </p>
                        <hr />
                        <h4>130 Comments</h4>
                        <div className="comment">
                            <img src={user_profile} alt="" />
                            <div>
                                <h3>Karthi <span>1 Day Ago</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nesciunt quos reprehenderit harum, praesentium atque dolorum porro nihil magnam ipsam veritatis nisi voluptatum similique ex, aperiam perferendis accusamus repellendus.</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>200</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="comment">
                            <img src={user_profile} alt="" />
                            <div>
                                <h3>Karthi <span>1 Day Ago</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nesciunt quos reprehenderit harum, praesentium atque dolorum porro nihil magnam ipsam veritatis nisi voluptatum similique ex, aperiam perferendis accusamus repellendus.</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>200</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="comment">
                            <img src={user_profile} alt="" />
                            <div>
                                <h3>Karthi <span>1 Day Ago</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nesciunt quos reprehenderit harum, praesentium atque dolorum porro nihil magnam ipsam veritatis nisi voluptatum similique ex, aperiam perferendis accusamus repellendus.</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>200</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="comment">
                            <img src={user_profile} alt="" />
                            <div>
                                <h3>Karthi <span>1 Day Ago</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nesciunt quos reprehenderit harum, praesentium atque dolorum porro nihil magnam ipsam veritatis nisi voluptatum similique ex, aperiam perferendis accusamus repellendus.</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>200</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="comment">
                            <img src={user_profile} alt="" />
                            <div>
                                <h3>Karthi <span>1 Day Ago</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nesciunt quos reprehenderit harum, praesentium atque dolorum porro nihil magnam ipsam veritatis nisi voluptatum similique ex, aperiam perferendis accusamus repellendus.</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>200</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                )
}

                export default Playvideo