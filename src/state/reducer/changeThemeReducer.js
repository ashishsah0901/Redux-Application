const reducer = (state = 'light', action) => {
    if (action.type === 'theme') {
        return action.payload
    } else {
        return state
    }
}

export default reducer