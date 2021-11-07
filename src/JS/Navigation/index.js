import React, { useEffect, useState } from 'react';
import Bio from '../../Components/Bio';
import SocialMediaAccounts from '../../Components/SocialMediaAccounts';
import BottomNavBar from '../../Components/bottomNavBar';
import Slides from '../../Components/Slides';

const Navigation = (props) => {

  const [selection, setSelection] = useState(2);
  const styles = {
    body: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignitems: 'center',
    }
  }

  useEffect(()=>{},[])

    return(
      <div style={styles.body}>
        <SocialMediaAccounts hide={props.screenType === 'Tablet/Mobile'} />
        <Slides selection={selection} />
        <BottomNavBar selection={selection} newSelection={setSelection}/>
      </div>
    );
}

export default Navigation;