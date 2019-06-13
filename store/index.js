import { Platform } from "react-native"
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';

import reducer from "../reducers";

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import AsyncStorage from '@react-native-community/async-storage'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const initialState = {
    color: "Green",
    selectedButtonIndex: 0,
    counter: 0 };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)