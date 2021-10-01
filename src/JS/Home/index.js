import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getquote } from '../../actions/getquote';
import { getNewQuote } from '../../Helper/quote';
import Bio from '../../Components/Bio';
import BottomArrows from '../../Components/BottomArrows';
import { deviceType } from '../../Helper/screenDimentions';

const Home = () => {

  const newQuote = useSelector(state => getNewQuote(state));
  const dispatch = useDispatch();

  const styles = {
    body: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignitems: 'center',
    }
  }

  console.log(deviceType());

  const getQuote = async () => {
    try{
      await dispatch(getquote());
      letsWait();
    } catch (err) {
      console.log(JSON.parse(err.message));
    }
  }

  const letsWait = () => {
    setTimeout(()=>{
      getQuote();
    },5000)
  }

  useEffect(()=>{
    console.log('Home is loading');
  },[])

    return(
      <div style={styles.body}>
        <Bio />
        <BottomArrows />
      </div>
    );
}

export default Home;