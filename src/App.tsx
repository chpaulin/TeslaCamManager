import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from 'video-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <Player
        width="10"
        height="10"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}

export default App;
