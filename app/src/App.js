import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


import axios from 'axios';

function App() {
  useEffect(() => {
    axios.all([axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=O5K677X3T9F4TCZY"),
              axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFLX&apikey=O5K677X3T9F4TCZY")])
      .then(axios.spread((...res) => {
        console.log('API res:', res)
        console.log('Data from S&P ETF:', res[0].data);
        console.log('Data from Netflix:', res[1].data);
      }))
      .catch(error => {
        console.log('Error fetching symbols from API');
        //dispatch({type: SYMBOL_FAILURE, payload: 'API response error for S&P ETF and NFLX'})
      })
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
