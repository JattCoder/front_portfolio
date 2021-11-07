import React, { useState, useEffect } from 'react';
import Navigation from './JS/Navigation/';
import LoadingGif from './Components/LoadingGif';
import { useMediaQuery } from 'react-responsive'

const App = () => {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })
  const [loaded, setLoaded] = useState(false);
  const [screenType, setScreenType] = useState('');

  const displayNavigation = (
    <Navigation screenType={
      isDesktopOrLaptop ? 'Desktop' :
      isBigScreen ? 'BigScreen' :
      'Tablet/Mobile'
    } />
  );

  const displayLoading = (
    <LoadingGif isLoaded={setLoaded} />
  );

  useEffect(() => {},[])

  return (
    <div style={{height:'100vh',backgroundColor:'black', justifyContent:'center', alignItems: 'center', display:'flex'}}>
      {loaded ? displayNavigation : displayLoading}
    </div>
  )
}

export default App;
