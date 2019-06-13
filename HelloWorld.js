import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { setColor, setButtonIndex } from "./actions";
import { store }  from "./store";
import reducer from "./reducers";

class HelloWorld extends Component {

  constructor () {
    super()
    this.bananas = ['Green', 'Orange', 'Yellow'];
    this.buttonIndex = 0;
    this.dispatchBtnAction = this.dispatchBtnAction.bind(this);
  }

  dispatchBtnAction(i) {
    const tech = this.bananas[i];
    store.dispatch(setColor(tech));
    store.dispatch(setButtonIndex(i));
  }

  render() {
    let pic = require('./assets/images/Bananavarieties.jpg')
    return (
        <View>
            <Text style={styles.welcome}>Hello {this.props.color} Banana</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <ButtonGroup
              buttons={this.bananas}
              onPress={this.dispatchBtnAction}
              selectedIndex={this.props.selectedButtonIndex}
            />
        </View>
    );
  }
};

const mapStateToProps = (state) => {
  return{
      color: state.color,
      selectedButtonIndex: state.selectedButtonIndex
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default connect(mapStateToProps)(HelloWorld)
