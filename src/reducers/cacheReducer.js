export default function cacheReducer(state = [], action) {
    switch (action.type) {
        case 'cacheData':
            const slug = action.payload.slug
            const data = action.payload.data
            return {...state, [slug]: data }
        default:
            return state
    }
}