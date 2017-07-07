import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
} from 'react-native';

class PersonInfoPage extends Component {

    constructor(props) {
        super(props);
    }

    _loginButtonPress() {

    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text>PersonInfo</Text>
                <Button
                    title="goto Login"
                    onPress={() => { navigate("Login"); }} />
            </View>
        );
    }
}
export default PersonInfoPage;