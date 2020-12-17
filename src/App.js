import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Row from './Components/Row'
import Requests from './Components/Requests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row isLargeRow title='Trending' fetchUrl={Requests.fetchTrendingUrl}/>
      <Row title='Top Rated' fetchUrl={Requests.fetchTopRated} />
      {/* <Row title='Latest' fetchUrl={Requests.fetTvSeasons} /> */}
      <Row title='Popular' fetchUrl={Requests.fetchPopularUrl}/>
      <Row title='Up Coming' fetchUrl={Requests.fetchUpcoming}/>
    </div>
  );
}

export default App;
