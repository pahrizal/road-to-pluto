import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from 'react-redux';
import { Action, DispatchType, RoadTableState } from './common/types';
import thunk from 'redux-thunk';
import roadTableReducer from './reducer/tableReducer';
const store: Store<RoadTableState, Action> & {
  dispatch: DispatchType
} = createStore(roadTableReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
