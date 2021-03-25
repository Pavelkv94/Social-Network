import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReduxStateType, store} from './redux/redux-store';
import './index.css';
import { Provider } from 'react-redux';




let rerenderEntireTree = (state: ReduxStateType) => {

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
