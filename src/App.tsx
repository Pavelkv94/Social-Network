import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Setting } from './components/Setting/Setting';
import { store, StoreType } from './redux/state';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  const appState = store.getState();
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={() => <Dialogs
            dialogsData={appState.dialogs.dialogsData}
            messagesData={appState.dialogs.messagesData}
            newMessageBody = {appState.dialogs.newMessageBody}
            dispatch={store.dispatch.bind(props.store)}
          />} path="/dialogs" />
          <Route render={() => <Profile
            postData={appState.profile.postData}
            profileData={appState.profile.profileData}
            dispatch={store.dispatch.bind(props.store)}
            newPostText={appState.profile.newPostText}
          />} path="/profile" />
          <Route render={() => <News />} path="/news" />
          <Route render={() => <Music />} path="/music" />
          <Route render={() => <Setting />} path="/setting" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

