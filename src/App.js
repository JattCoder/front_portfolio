import React, { useState } from 'react';
import Navigation from './JS/Navigation/';
import LoadingGif from './Components/LoadingGif';

const App = () => {

  const [loaded, setLoaded] = useState(false);

  const displayNavigation = (
    <Navigation />
  );

  const displayLoading = (
    <LoadingGif isLoaded={setLoaded} />
  );

  return (
    <div style={{height:'100vh',backgroundColor:'black', justifyContent:'center', alignItems: 'center', display:'flex'}}>
      {loaded ? displayNavigation : displayLoading}
    </div>
  )
}

export default App;
