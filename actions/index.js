export function setColor(text) {
    return {
        type: "SET_COLOR",
        text: text
    }
}

export function setButtonIndex(index) {
    return {
        type: "SET_BUTTON_INDEX",
        index: index
    }
}

export function incrementCounter() {
    return {
        type: "INCREMENT"
    }
}

export function incrementCounterAsync() {
    return {
        type: "INCREMENT_ASYNC"
    }
}