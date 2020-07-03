export default function collectionReducer(state = [], action) {
    switch (action.type) {

        case 'addCountryToCollection':
        console.log(action.type)
        console.log(action.payload)
            const payload = action.payload.split(",")
            const country = {Slug: payload[0], Country: payload[1], ISO2: payload[2]}
            return [...state, country]
        default:
            return state
    }
}