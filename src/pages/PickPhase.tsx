import * as React from 'react';
import CardGroup from '../components/PickPhase/CardGroup/CardGroup';
import { useRoom } from '../hooks/useRoom';
import { GroupRegularCard } from '../hooks/useInterface';

const PickPhase: React.FC = () => {
  const { roomState, room } = useRoom('game_room');

  if (!roomState || !room) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full h-screen flex-col bg-red-400">
      <button
        onClick={() => {
          room.send('pickCard', { name: roomState.pickBoard.deckRegGroup1[0].cards[0].regularCard.name });
        }}
      >
        aaa
      </button>
      <div className="w-full text-center py-6 pt-10 text-4xl font-bold text-white">Pick Phase</div>
      <div className="w-full flex flex-wrap justify-around">
        <CardGroup cardGroup={roomState.pickBoard.deckRegGroup1[0]} />
        <CardGroup cardGroup={roomState.pickBoard.deckRegGroup1[1]} />
        <CardGroup cardGroup={roomState.pickBoard.deckRegGroup1[2]} />
        <CardGroup cardGroup={roomState.pickBoard.deckRegGroup1[3]} />
        <CardGroup cardGroup={roomState.pickBoard.deckRegGroup1[4]} />
      </div>
      <div className="text-center py-6 text-3xl font-bold text-white">Confirm</div>
    </div>
  );
};

export default PickPhase;
