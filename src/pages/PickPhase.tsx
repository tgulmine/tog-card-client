import * as React from 'react';
import CardGroup from '../components/PickPhase/CardGroup/CardGroup';
import { useRoom } from '../hooks/useRoom';

const PickPhase: React.FC = () => {
  const { roomState, room } = useRoom('game_room');

  if (!roomState || !room) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full h-screen flex-col bg-red-400">
      <div>{roomState.pickBoard.deckRegGroup1[0].cards[0].regularCard.name}</div>
      <button
        onClick={() => {
          room.send('pickCard', { name: roomState.pickBoard.deckRegGroup1[0].cards[0].regularCard.name });
        }}
      >
        aaa
      </button>
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
