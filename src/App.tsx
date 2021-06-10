import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Setting } from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import { stores, ReduxStateType } from './redux/redux-store';
import { Preloader } from './components/common/Preloader/Preloader';

type AppPropsType = {
  initialized: boolean
  initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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
}
const mapStateToProps = (state: ReduxStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter>
    <Provider store={stores}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp;