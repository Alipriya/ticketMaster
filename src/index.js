import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/store';

import {getUserDetails} from './Actions/UserAction'

const store=configureStore()

console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})
if(localStorage.getItem("token"))
{
  store.dispatch(getUserDetails())
}

const ele=(<Provider store={store}>
  <App/>
</Provider>)
ReactDOM.render(
  ele,
  document.getElementById('root')
);

