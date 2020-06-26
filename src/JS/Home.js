import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getquote } from '../actions/getquote'
import '../Styles/home.css'

let Home = ({next,quote}) => {
  useEffect(()=>{
    let welcome = document.getElementById('welCome');
    welcome.innerHTML = welcome.innerHTML.replace('To', '<span style="color: red;">To</span>');
    gettquote(next);
  })
    return(
      <div>
        <div style={{marginTop:'10%',flex:1,justifyContent: "center",alignItems: "center",height:300}}>
          <div className='header'>
            <h1 id='welCome' className='welcome'>Welcome Tooooo</h1>
            <h1 className='portfolio'>Harmandeep Mand's Portfoliooooo</h1>
          </div>
          <h1 className='showquote'>{quote.quote}</h1>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  quote: state.quote
});
const mapDispatchToProps = { next: getquote };
Home = connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;

const gettquote = (next) => {
  setTimeout(()=>{
    next();
    getquote(next);
  },5000)
}