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