export default function cacheReducer(state = [], action) {
    switch (action.type) {
        case 'cacheData':
            const slug = action.payload.slug
            const data = action.payload.data
            return {...state, [slug]: data }
        case 'addToCachedData':
            console.log(action.payload)
            return {...state, "united-states": [...state["united-states"].concat(action.payload)]}
        default:
            return state
    }
}