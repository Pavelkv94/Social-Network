import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Setting } from './components/Setting/Setting';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Users } from './components/Users/Users';

type AppPropsType = {
  // store: ReduxStoreType
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={() => <DialogsContainer
          />} path="/dialogs" />
          <Route render={() => <Profile
          />} path="/profile" />
          <Route render={() => <News />} path="/news" />
          <Route render={() => <Music />} path="/music" />
          <Route render={() => <Users
          />} path="/users" />
          <Route render={() => <Setting />} path="/setting" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

