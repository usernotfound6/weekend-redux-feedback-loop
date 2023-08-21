import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';

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
