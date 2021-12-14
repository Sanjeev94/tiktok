import React, {useRef, useState} from 'react'
import "./Video.css"

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play(); 
            setPlaying(true);
        }

    }
    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            src="https://media.chingari.io/uploads/915e1320-3f90-4057-885b-3825954d8d4d-1638182113726/webpath_915e1320-3f90-4057-885b-3825954d8d4d-1638182113726.mp4">
            </video>
            
        </div>
    )
}

export default Video;
