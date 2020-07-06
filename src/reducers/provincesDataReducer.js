export default function provincesDataReducer(state = [], action) {
    switch (action.type) {

        case 'addProvincesData':
            return action.payload
        default:
            return state
    }
}