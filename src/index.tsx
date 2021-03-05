import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { state, subscribe } from './redux/state';
import './index.css';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';


let rerenderEntireTree =()=> {
ReactDOM.render(
  <React.StrictMode>
    <App appState={state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}


rerenderEntireTree();
subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
