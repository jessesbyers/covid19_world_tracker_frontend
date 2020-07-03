import { combineReducers } from 'redux'

import countriesReducer from './countriesReducer'
import collectionReducer from './collectionReducer'


const rootReducer = combineReducers({
    countries: countriesReducer,
    collection: collectionReducer,
});

export default rootReducer