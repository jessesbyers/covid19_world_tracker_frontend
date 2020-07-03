import { combineReducers } from 'redux'

import countriesReducer from './countriesReducer'
import collectionReducer from './collectionReducer'
import countryDataReducer from './countryDataReducer'



const rootReducer = combineReducers({
    countries: countriesReducer,
    collection: collectionReducer,
    countryData: countryDataReducer
});

export default rootReducer