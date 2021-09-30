import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './JS/Home/';
import LoadingGif from './Components/LoadingGif';
import { isDataLoaded } from './Helper/confirmation';

const App = () => {

  const [loaded, setLoaded] = useState(false);

  const displayHome = (
    <Home />
  );

  const displayLoading = (
    <LoadingGif isLoaded={setLoaded} />
  );

  return (
    <div style={{height:'100vh',backgroundColor:'black', justifyContent:'center', alignItems: 'center', display:'flex'}}>
      {loaded ? displayHome : displayLoading}
    </div>
  )
}

export default App;
