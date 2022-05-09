const db = require('../../db');

module.exports = function (app) {
  // Create game
  app.post('/games', (req, res) => {
    console.log('Game created: ', req.body);
    res.send(201);
  });

  // need to add a join game route and communicate with Nick

  // Get current game state - needs refactor to filter out fields for relevant users
  app.get('/games/:id', (req, res) => {
    console.log('Game requested: ', req.params.id);
    db.Game.find({ name: 'demo-playing' }).exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });

  // Submit a move
  app.post('/games/:id', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Posted data: ', req.body);
    // send to the game engine
    res.send(200);
  });

  // Submit a chat
  app.post('/games/:id/chat', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Chat data: ', req.body);
    demoGame.chat.push(req.body);
    res.send(201);
  });
};
<<<<<<< HEAD
=======

const demoGame = {
  id: 12345,
  name: 'Dares room',
  privacy: 'public',
  state: 'playing', // state is building, playing, or ended
  host: { username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
  players: [{ username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
    { username: 'lcosta', pronouns: 'she/her/hers', avatar: 'test1.png' },
    { username: 'mteran', pronouns: 'he/him/his', avatar: 'test2.png' }],
  currentRound: {
    roundNumber: 2,
    turnNumber: 7,
    currentPlayer: 'twheeler',
    activeHands: {
      twheeler: {
        value: 3,
        hand: [{
          card: 'Clown',
          value: 2,
          image: '/images/cards/Clown_Card.png',
        },
        {
          card: 'Soldier',
          value: 1,
          image: '/images/cards/Soldier_Card.png',
        }],
      },
      mteran: {
        value: 7,
        hand: [{
          card: 'Priestess',
          value: 4,
          image: '/images/cards/Priestess_Card.png',
        }],
      },
    },
    discardPiles: {
      twheeler: [{
        card: 'Minister',
        value: 7,
        image: '/images/cards/Minister_Card.png',
      }],
      lcosta: [{
        card: 'Prince',
        value: 8,
        image: '/images/cards/Prince_Card.png',
      }],
      mteran: [{
        card: 'Knight',
        value: 3,
        image: '/images/cards/Knight_Card.png',
      }],
    },
    deck: [{
      card: 'General',
      value: 6,
      image: '/images/cards/General_Card.png',
    }, {
      card: 'Minister',
      value: 7,
      image: '/images/cards/Minister_Card.png',
    }, {
      card: 'Clown',
      value: 2,
      image: '/images/cards/Clown_Card.png',
    },
    {
      card: 'Soldier',
      value: 1,
      image: '/images/cards/Soldier_Card.png',
    }, {
      card: 'Wizard',
      value: 5,
      image: '/images/cards/Wizard_Card.png',
    }], // rewrite deck as array of objects
  },
  roundWins: {
    twheeler: 0,
    lcosta: 1,
    mteran: 0,
  },
  chat: [
    {
      id: 3425432543,
      username: 'mteran',
      message: 'nice play @lcosta!',
    },
  ],
};
>>>>>>> 9fd19e3685a3b30d1a5d7cfe7d3edcc750af44e5
