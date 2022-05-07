/* eslint-disable import/extensions */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import Chat from './Chat.jsx';
import CreateGame from './CreateGame.jsx';
import GameView from './GameView/GameView.jsx';
import JoinGame from './JoinGame.jsx';
import Leaderboard from './Leaderboard/Leaderboard.jsx';
import Lobby from './Lobby.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import AuthWrapper from './Auth/AuthWrapper.jsx';
import AuthTest from './Auth/AuthTest.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/create" element={<CreateGame />} />
      <Route path="/game/:id" element={<GameView />} />
      <Route path="/join" element={<JoinGame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/authcheck"
        element={(
          <AuthWrapper>
            <AuthTest />
          </AuthWrapper>
        )}
      />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
