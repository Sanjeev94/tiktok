import React, {useEffect, useState} from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();

  }, []);

  return (
    // BEM
    <div className="app">
      

      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}

          />
        ))}
      {/* <Video url="https://media.chingari.io/uploads/915e1320-3f90-4057-885b-3825954d8d4d-1638182113726/webpath_915e1320-3f90-4057-885b-3825954d8d4d-1638182113726.mp4"
      channel='abc'
      description='TIK TOK Using MERN STACK'
      song="99 problems but React aint one"
      likes={123}
      messages={234}
      shares={456}
      />
      <Video url="https://media.chingari.io/uploads/915e1320-3f90-4057-885b-3825954d8d4d-1638182113726/webpath_915e1320-3f90-4057-885b-3825954d8d4d-1638182113726.mp4"
      channel='def'
      description='TIK TOK Using MERN STACK'
      song="99 problems but React aint one"
      likes={236}
      messages={489}
      shares={600} /> */}
      </div>
    </div>
  );
}

export default App;
