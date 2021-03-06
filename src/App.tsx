import * as React from 'react';
import './styles/main.scss';
import * as game from './game';

import * as Colyseus from 'colyseus.js';

var client = new Colyseus.Client('ws://localhost:2567');

const connect = async () => {
  try {
    const room = await client.joinOrCreate('game_room');
    room.onStateChange(state => {
      console.log(state);
    });
    console.log('joined room', room.sessionId);
    room.send('pickCard', { name: 'Endorsi Jahad' });
  } catch {
    console.log('could not join room');
  }
};

const App: React.FC = () => {
  connect();

  return (
    <div>
      <div className="App mt-2 text-2xl font-bold">Hello</div>
      <div className="mt-2 text-gray-nanana">world!</div>
    </div>
  );
};

export default App;
