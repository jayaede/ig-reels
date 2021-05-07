import React,{useState, useEffect} from 'react';
import './App.css'
import Videocard from './Videocard';
import db from './firebase';
function App() {
  const [reels, setReels] = useState([]);
  useEffect( () =>{
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  },[])
  return (
    <div className="app">
      <div className="app_header">
        <img className="app-logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" 
        alt=""
        />
        <h2>Reels</h2>
      </div>
      <div className="app_videos">
        {reels.map(({channel, avatarSrc, url, song, likes, shares}) => (
          <Videocard
          channel={channel}
          url={url}
          song={song}
          avatarSrc={avatarSrc}
          likes={likes}
          shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
