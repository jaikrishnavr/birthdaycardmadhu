import React from "react";
import { useRef , useEffect } from "react";

const VideoPlayer01 = (props) => {
    const videoRef = useRef();
  
    useEffect(() => {
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
    }, []);
  
    const handleVideoLoaded = () => {
      videoRef.current.parentElement.classList.add("loaded");
    };
  
    return (
      <div className='video-player'>
        <video ref={videoRef} className='video' width={props.width} height={props.height} controls>
          <source src={props.src} type={props.type} />
        </video>
      </div>
    );
  };

  export default VideoPlayer01;