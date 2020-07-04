import { combineReducers } from 'redux'

import countriesReducer from './countriesReducer'
import collectionReducer from './collectionReducer'
import countryDataReducer from './countryDataReducer'
import countryReducer from './countryDataReducer'




const rootReducer = combineReducers({
    countries: countriesReducer,
    collection: collectionReducer,
    countryData: countryDataReducer, 
    country: countryReducer
});

export default rootReducer