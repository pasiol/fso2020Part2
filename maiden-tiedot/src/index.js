import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

const promise = axios.get('https://restcountries.eu/rest/v2/all')

promise.then(response => {
  console.log("index.js get data like:", response.data[0])
  console.log(`Getting ${response.data.length} countries.`)
  const data = response.data
  ReactDOM.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  );
})
