// @flow weak
import React, { Component } from 'react';
import { Image, View } from 'react-native';


class Loading extends Component {

  render() {
    return (
        <Image source={require('./assets/images/loading.gif')} />
    );
  }
};

export default Loading;
