import React from 'react'
import './Home.css'
import VideoPlayer from './Videoplayer'

const home = () => {
  return (
    <div><h1 class="text">Happy Birthday <h1 className='h1-span'>Shalini</h1> </h1>
    
  <VideoPlayer 
 src='https://www.w3schools.com/html/mov_bbb.mp4' 
 width='50%' 
 height='50%' 
 type='video/mp4' 
/>

    
    </div>
  )
}

export default home;