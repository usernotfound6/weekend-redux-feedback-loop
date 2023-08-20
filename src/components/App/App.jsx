import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Feeling from '../Feeling/Feeling';

function App() {

  return (
 
      <div className='App'>
      <Router>
          
          <Route exact path="/">
            <Header />
            <Feeling />
          </Route>
            
          <Route exact path="/understanding">
            <Header />
            <Understanding />
          </Route>

          <Route exact path="/support">
            <Header />
            <Support />
          </Route>

          <Route exact path="/comments">
            <Header />
            <Comments />
          </Route>

          <Route exact path="/review">
            <Header />
            <Review />
          </Route>

          <Route exact path="/thanks">
            <Header />
            <Thanks />
          </Route>
      </Router>
    </div>
  );
}

export default App;
