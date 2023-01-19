import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <div className="box">
      <div className="video-player">
        <video
          className="video"
          width={props.width}
          height={props.height}
          controls
        >
          <source src={props.src} type={props.type} />
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
