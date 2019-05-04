import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Button extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.butonClick()
      }
        style={[styles.buttonStyle, this.props.buttonStyle]}>
        <Text style={[styles.textStyle, this.props.titleStyle]}>
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = {
  buttonStyle: { width: width * 0.8, height: 50, backgroundColor: 'blue', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  textStyle: { color: 'white' }
}