import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux'

import './App.css';

import NavBar from './components/NavBar';
import New from './containers/New'
// import New from '../containers/New'
// import Show from '../containers/Show'

import Container from 'react-bootstrap/Container';



function App() {
  return (      
    <Router >
      <Container fluid >
        <div >
          <NavBar />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path={`/collections/new`} component={New} />
          {/* <Route path={`/collections`} component={Collections} /> */}
          {/* <Route path={`/collections/:id`} component={Show} /> */}
        </div>
      </Container>
    </Router>
  );
}

// export default connect (state => ({ countries: state.countries }))(App);
export default App
