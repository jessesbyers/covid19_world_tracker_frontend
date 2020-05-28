import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import New from './containers/New'
import Home from './containers/Home'
import Show from './containers/Show'
import Collection from './containers/Collection'

import Container from 'react-bootstrap/Container';

function App() {
  return (    
      <Router basename={process.env.PUBLIC_URL}>
        <Container fluid >
          <div >
            <NavBar />
            <Route exact path={`/`} render={ (routerProps) => <Home routerProps={routerProps}/>}/>
            <Route exact path="/countries/:slug" component={Show} />
            <Route exact path={`/new`} component={New} />
            <Route exact path={`/collection`} component={Collection} />
          </div>
        </Container>
      </Router>
  );
}

export default App
