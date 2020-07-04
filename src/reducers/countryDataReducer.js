export default function countryDataReducer(state = [], action) {
    switch (action.type) {

        case 'addCountryData':
            return [...state, action.payload]
        default:
            return state
    }
}