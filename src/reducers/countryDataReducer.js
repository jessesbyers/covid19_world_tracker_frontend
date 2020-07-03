export default function countryDataReducer(state = [], action) {
    switch (action.type) {

        case 'addCountryData':
        console.log(action.type)
        console.log(action.payload)

            return [...state, action.payload]
        default:
            return state
    }
}