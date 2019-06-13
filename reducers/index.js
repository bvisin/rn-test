const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_COLOR":
            return {
                ...state,
                color: action.text
            };
        case "SET_BUTTON_INDEX":
            return {
                ...state,
                selectedButtonIndex: action.index
            };
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}

export default reducer;