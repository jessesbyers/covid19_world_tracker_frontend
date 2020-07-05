export default function provincesDataReducer(state = [], action) {
    switch (action.type) {

        case 'addProvincesData':
            console.log("reducer")
            console.log(action.type)
            console.log(action.payload)
            // return [...state, action.payload]
            return action.payload
        default:
            return state
    }
}