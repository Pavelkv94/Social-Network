import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Setting } from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';


type AppPropsType = any

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={() => <DialogsContainer
          />} path="/dialogs" />
          <Route render={() => <ProfileContainer
          />} path="/profile/:userId?" />
          <Route render={() => <News />} path="/news" />
          <Route render={() => <Music />} path="/music" />
          <Route render={() => <UsersContainer
          />} path="/users" />
          <Route render={() => <Setting />} path="/setting" />
          <Route render={() => <Login />} path="/login" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

