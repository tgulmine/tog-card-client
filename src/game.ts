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

connect();

window.addEventListener('load', () => {
  /* const game = new Phaser.Game(config) */
});
