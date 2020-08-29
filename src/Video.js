import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.tiktok.com/@cdn_bablunagar5/video/6828199075553283329"
      ></video>
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
