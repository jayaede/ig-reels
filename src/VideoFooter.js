import React from 'react';
import './Videofooter.css';
import {Button, Avatar} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote'; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from 'react-ticker';
function VideoFooter({channel, avatarSrc, likes, shares, song}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <Avatar src={avatarSrc} />
                <h3>
                {channel} .<Button>Follow</Button>
                </h3>
            </div>
            <div className='videoFooter_ticker'>
                <MusicNoteIcon className='videoFooter-icon'/>
                <Ticker mode="smooth">
                    {({index})=>(
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className='videoFooter_actions'>
                <div className='videoFooter_left '>
                    <FavoriteIcon fontSize='large' />
                    <ModeCommentIcon fontSize='large' />
                    <SendIcon fontSize='large' />
                    <MoreHorizIcon fontSize='large' />
                </div>
                <div className='.videoFooter_right'>
                    <div className='videoFooter_stat'>
                    <FavoriteIcon />
                        <p>{likes}</p>
                    <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
