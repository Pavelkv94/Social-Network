import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Setting } from './components/Setting/Setting';
import { ActionTypes, ReduxStateType, ReduxStoreType } from './redux/redux-store';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

type AppPropsType = {
  store: ReduxStoreType
  state: ReduxStateType
  dispatch:(action: ActionTypes) => void
}

function App(props: AppPropsType) {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route render={() => <DialogsContainer
           store={props.store}
          />} path="/dialogs" />
          <Route render={() => <Profile
            store={props.store}
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

