import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getquote } from '../../actions/getquote'
import { getNewQuote } from '../../Helper/quote'; 

const Home = () => {

  const newQuote = useSelector(state => getNewQuote(state));
  const dispatch = useDispatch();

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
    //getQuote();
  },[])

    return(
      <div>
        <h1>{newQuote.quote}</h1>
      </div>
    );
}

export default Home;