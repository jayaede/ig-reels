import React, {useRef,useState} from 'react';
import './Videocard.css';
import VideoFooter from './VideoFooter';
import Videoheader from './Videoheader';
function Videocard({channel, song, avatarSrc, likes, shares, url}) {
   
    const [isVideoPlaying, setVideoPlayig] = useState(false);
    const videoRef = useRef(null);

    const onVideoClick = () => {
        if(isVideoPlaying) {
            videoRef.current.pause();
            setVideoPlayig(false);
        } else {
            videoRef.current.play();
            setVideoPlayig(true);
        }
    }
    return (
        <div className="videoCard">
            <Videoheader />
           <video className="video_player"
            ref={videoRef}
            onClick={onVideoClick}
            src={url}
            alt='IG reels'
            loop={true} 
            />
            <VideoFooter 
            channel={channel}
            avatarSrc={avatarSrc}
            likes={likes}
            shares={shares}
            song={song}
            />
        </div>
    )
}

export default Videocard
