import React from 'react';
import { HashRouter, Route, withRouter, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { SettingContainer } from './components/Setting/SettingContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import { store, ReduxStateType } from './redux/redux-store';
import { Preloader } from './components/common/Preloader/Preloader';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type AppPropsType = {
  initialized: boolean
  initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

  catchError = (reason:any, promise:any) => {
    alert("Error")
    console.log(reason)
  }

  componentDidMount() {
    this.props.initializeApp();

    //@ts-ignore
    window.addEventListener('unhandlerejection', this.catchError)
  }

  componentWillUnmount() {
    //@ts-ignore
    window.removeEventListener('unhandlerejection', this.catchError)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => { return <React.Suspense fallback={<Preloader />}> <ProfileContainer /></React.Suspense> }
            } />
            <Route render={() => { return <React.Suspense fallback={<Preloader />}><DialogsContainer /></React.Suspense> }
            } path="/dialogs" />
            <Route render={() => { return <React.Suspense fallback={<Preloader />}> <ProfileContainer /></React.Suspense> }
            } path="/profile/:userId?" />
            <Route render={() => <News />} path="/news" />
            <Route render={() => <Music />} path="/music" />
            <Route render={() => { return <React.Suspense fallback={<Preloader />}> <UsersContainer /></React.Suspense> }
            } path="/users" />
            <Route render={() => <SettingContainer />} path="/setting" />
            <Route render={() => <Login />} path="/login" />
            <Route render={() => <div className="errorBack"></div>} path="*" />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: ReduxStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
//HashRouter  идет отсчет от корня
const SamuraiJSApp: React.FC = () => {
  return <HashRouter
  //BrowserRouter   basename={process.env.PUBLIC_URL}
  >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default SamuraiJSApp;