import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMedia } from '../../Helper/socialMedia';
import Bio from '../../Components/Bio';
import BottomArrows from '../../Components/BottomArrows';
import SocialMediaAccounts from '../../Components/SocialMediaAccounts';

const Home = () => {

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
        <SocialMediaAccounts />
        <Bio />
        {/* <BottomArrows /> */}
      </div>
    );
}

export default Home;