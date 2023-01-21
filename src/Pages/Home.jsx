import React from 'react'
import './Home.css'
import VideoPlayer from './Videoplayer'

const home = () => {
  return (
    <div class ="home-body">
    
    
    <div><h3 class="text">Happy Birthday <h3 className='h3-span'>Shalini</h3> </h3>
  <VideoPlayer 
 src='https://www.w3schools.com/html/mov_bbb.mp4' 
 width='50%' 
 height='50%' 
 type='video/mp4' 
/>

<br/>
<br/>
<br/>
    </div>

    
    </div>
  )
}

export default home;