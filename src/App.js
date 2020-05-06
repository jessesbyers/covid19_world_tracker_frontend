import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Home from './containers/Home'
// import New from '../containers/New'
// import Show from '../containers/Show'

import Container from 'react-bootstrap/Container';



function App() {
  return (      
    <Router >
      <Container fluid >
        <div >
          <NavBar />
          <Route exact path="/" component={Home} />
          {/* <Route path={`/charts/new`} component={} /> */}
          {/* <Route path={`/charts/:id/interact`} component={} /> */}
          {/* <Route path={`/charts/:id/reflections`} component={} /> */}
        </div>
      </Container>
    </Router>
  );
}

export default App;
