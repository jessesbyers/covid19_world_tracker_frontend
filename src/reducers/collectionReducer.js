export default function collectionReducer(state = [], action) {
    switch (action.type) {

        case 'addCountryToCollection':
            return [...state, action.payload]
        default:
            return state
    }
}