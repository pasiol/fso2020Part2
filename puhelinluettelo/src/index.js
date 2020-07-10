import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

const promise = axios.get('http://localhost:3001/persons')

promise.then(response => {
  console.log("index.js get: ", response)
  const data = response.data
  ReactDOM.render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
})