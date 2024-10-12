import React from 'react';
import Board from './components/Board';

export default function App() {
  return (
    <div className="App">
      <p className='XBG'>X</p>
      <Board />
      <p className='OBG'>O</p>
    </div>
  );
}
