/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import HelloWorld from "./HelloWorld";
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View, StyleSheet, Image } from 'react-native';
import Loading from "./Loading";

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <View style={styles.container}>
            <HelloWorld/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});