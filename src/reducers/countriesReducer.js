export default function countriesReducer(state = [], action) {
    switch (action.type) {
        case 'addCountries':
            return [...action.payload]
        default:
            return state
    }
}