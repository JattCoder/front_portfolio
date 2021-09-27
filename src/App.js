import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './JS/Home/';
import LoadingGif from './Components/LoadingGif';
import { isDataLoaded } from './Helper/confirmation';

const App = () => {

  const loaded = useSelector((state) => isDataLoaded(state));

  const displayHome = (
    <Home />
  );

  const displayLoading = (
    <LoadingGif />
  );

  return (
    <div style={{height:'100vh',backgroundColor:'black', justifyContent:'center', alignItems: 'center', display:'flex'}}>
      {loaded ? displayHome : displayLoading}
    </div>
  )
}

export default App;
