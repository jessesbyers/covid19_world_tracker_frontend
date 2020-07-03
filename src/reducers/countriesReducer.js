export default function countriesReducer(state = [], action) {
    switch (action.type) {
        case 'addCountries':
            console.log(action.type)
            console.log(action.payload)


            return [...state, action.payload]
        default:
            return state
    }
}