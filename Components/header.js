import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export default class Header extends Component {

    render() {
        return (
            <View style={styles.headerStyle}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

