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
import { StateType } from './redux/state';

type AppPropsType = {
  appState: StateType
  addPost: (postMessage: string) => void
  updateNewPostText: (newText: string) => void

}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={() => <Dialogs
            dialogsData={props.appState.dialogs.dialogsData}
            messagesData={props.appState.dialogs.messagesData}
          />} path="/dialogs" />
          <Route render={() => <Profile
            postData={props.appState.profile.postData}
            profileData={props.appState.profile.profileData}
            addPost={props.addPost}
            newPostText={props.appState.profile.newPostText}
            updateNewPostText = {props.updateNewPostText}
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

