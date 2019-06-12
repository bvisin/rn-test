/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import HelloWorld from "./HelloWorld"
import { store }  from "./store";
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HelloWorld/>
        </View>
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