import React from 'react';
import './App.css';
import Video from './Video'

function App() {
  return (
    // BEM
    <div className="app">
      

      <div className="app__videos">
      <Video url="https://media.chingari.io/uploads/915e1320-3f90-4057-885b-3825954d8d4d-1638182113726/webpath_915e1320-3f90-4057-885b-3825954d8d4d-1638182113726.mp4"
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
      shares={600} />
      </div>
    </div>
  );
}

export default App;
