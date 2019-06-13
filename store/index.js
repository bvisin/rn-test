import { Platform } from "react-native"
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';

import reducer from "../reducers";
import createSagaMiddleware from 'redux-saga'

import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const initialState = {
    color: "Green",
    selectedButtonIndex: 0 };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState);
export const persistor = persistStore(store);