import * as React from 'react';
import CardGroup from '../components/PickPhase/CardGroup/CardGroup';

import * as Colyseus from 'colyseus.js';

var client = new Colyseus.Client('ws://localhost:2567');

const connect = async () => {
  try {
    const room = await client.joinOrCreate('game_room');
    room.onStateChange(state => {
      console.log(state);
    });
    console.log('joined room', room.sessionId);
    /* room.send('pickCard', { name: 'Endorsi Jahad' }); */
    room.send('getRegGroups', 'asd');
  } catch {
    console.log('could not join room');
  }
};

const PickPhase: React.FC = () => {
  connect();

  return (
    <div className="w-full h-screen flex-col bg-red-400">
      <div className="w-full text-center py-6 pt-10 text-4xl font-bold text-white">Pick Phase</div>
      <div className="w-full flex flex-wrap justify-around">
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
      </div>
      <div className="text-center py-6 text-3xl font-bold text-white">Confirm</div>
    </div>
  );
};

export default PickPhase;
