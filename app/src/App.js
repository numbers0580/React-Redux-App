import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//import axios from 'axios';

import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  /*
  const [fetchedSP, fromAPIsp] = useState({});
  const [fetchedTicker, fromAPIticker] = useState({});
  useEffect(() => {
    axios.all([axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=O5K677X3T9F4TCZY"),
              axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFLX&apikey=O5K677X3T9F4TCZY")])
      .then(axios.spread((...res) => {
        console.log('API res:', res)
        fromAPIsp(res[0].data);
        fromAPIticker(res[1].data);
        //console.log('Data from S&P ETF:', res[0].data);
        //console.log('Data from Netflix:', res[1].data);
        console.log('Data from S&P ETF:', fetchedSP['Time Series (Daily)']);
        console.log('Data from Netflix:', fetchedTicker['Time Series (Daily)']);
        //console.log('Data from S&P ETF (2020-07-15):', fetchedSP['Time Series (Daily)']['2020-07-15']);
        //console.log('Data from Netflix (2020-07-15):', fetchedTicker['Time Series (Daily)']['2020-07-15']);
        //console.log('Data from S&P ETF (2020-07-12):', fetchedSP['Time Series (Daily)']['2020-07-12']);
        //console.log('Data from Netflix (2020-07-12):', fetchedTicker['Time Series (Daily)']['2020-07-12']);
      }))
      .catch(error => {
        console.log('Error fetching symbols from API');
        //dispatch({type: SYMBOL_FAILURE, payload: 'API response error for S&P ETF and NFLX'})
      })
  }, []);
  */

  //The logs below works, but then they fail to work if I add on ['2020-07-15'] to the end. "Cannot read property '2020-07-15' of undefined"
  /*
  console.log('Testing fetchedTickers for S&P for July 15th', fetchedSP['Time Series (Daily)']);
  console.log('Testing fetchedTickers for NFLX for July 15th', fetchedTicker['Time Series (Daily)']);
  console.log('Testing fetchedTickers for S&P for July 12th', fetchedSP['Time Series (Daily)']);
  console.log('Testing fetchedTickers for NFLX for July 12th', fetchedTicker['Time Series (Daily)']);
  */

  return (
    <div className="App">
      <BrowserRouter>
        <Route path ='/'>
          <Header />
        </Route>
        <Route path ='/search'>
          <SearchForm />
        </Route>
        <Route path ='/compare'></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
