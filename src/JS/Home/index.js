import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getquote } from '../../actions/getquote'
import '../../Styles/home.css'

const Home = () => {

  const [quote, setQuote] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    //gettquote();
  },[])

    return(
      <div>
        
      </div>
    );
}

export default Home;

const gettquote = () => {
  setTimeout(()=>{
    
    getquote();
  },5000)
}