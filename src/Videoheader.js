import React from 'react';
import './Videoheader.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function Videoheader() {
    return (
        <div className='videoHeader'>
            <ArrowBackIosIcon />
            <h3>Reels</h3>
            <CameraAltIcon />
        </div>
    )
}

export default Videoheader
