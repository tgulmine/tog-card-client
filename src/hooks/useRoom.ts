import { useEffect, useState } from 'react';
import * as Colyseus from 'colyseus.js';
import { ServerState } from './useInterface';

var client = new Colyseus.Client('ws://localhost:2567');

export const useRoom = (roomName: string) => {
  const [room, setRoom] = useState<Colyseus.Room<ServerState> | undefined>();
  const [roomState, setRoomState] = useState<ServerState | undefined>();

  const connect = async () => {
    try {
      const room = await client.joinOrCreate<ServerState>(roomName);
      setRoom(room);
      room.onStateChange(state => {
        setRoomState(state);
      });
      console.log('joined room', room.sessionId);
    } catch {
      console.log('could not join room');
    }
  };

  useEffect(() => {
    connect();
    //eslint-disable-next-line
  }, []);

  return { roomState, room };
};
