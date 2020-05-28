import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import rootReducer from './reducers/rootReducer'
import App from './App';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
//   ));



ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>

    <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
