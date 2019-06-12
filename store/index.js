import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    color: "Green",
    selectedButtonIndex: 0 };

export const store = createStore(reducer, initialState);