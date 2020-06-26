import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './JS/Nav';
import Home from './JS/Home';
import Sorting from './JS/Sorting'
import About from './JS/About'
import Apps from './JS/Apps'
import Review from './JS/Review'

function App() {
  return (
    <Router>
        <div style={{justifyContent: 'center',textAlign:'center'}}>
          <Nav/>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/sorting' component={Sorting}/>
            <Route exact={true} path='/apps' component={Apps}/>
            <Route exact={true} path='/about' component={About}/>
            <Route exact={true} path='/review' component={Review}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
