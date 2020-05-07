import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux'

import './App.css';

import NavBar from './components/NavBar';
import New from './containers/New'
import Home from './containers/Home'
import Show from './containers/Show'
import Collections from './containers/Collections'


import Container from 'react-bootstrap/Container';



function App() {
  return (      
    <Router >
      <Container fluid >
        <div >
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path={`/collections/:id`} component={Show} />

          <Route exact path={`/new`} component={New} />
          <Route exact path={`/collections`} component={Collections} />
        </div>
      </Container>
    </Router>
  );
}

// export default connect (state => ({ countries: state.countries }))(App);
export default App
