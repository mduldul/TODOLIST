import React, { Component } from 'react';
import { View, Text, Dimensions,StyleSheet} from 'react-native';

const { height, width } = Dimensions.get('window');

export default class TabBar extends Component {
    componentWillMount() {
    }
    isLoginFunc() {
        if (this.props.isLogin) {
            return <Text>Profil</Text>
        }
        return null
    }
    render() {
        return (
            <View style={styles.TabBarStyle}>
                <Text> ANASAYFA </Text>
                <Text> KESFET </Text>
                <Text> ARA </Text>
                {this.isLoginFunc()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    TabBarStyle: {
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
});
