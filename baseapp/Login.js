import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

var URL_LOGIN = '';
var username = '15370118061';
var password = '111111';
class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this._login = this._login.bind(this);
        this.state = {
            loginInfo: null
        };
    }

    _login() {
        let formData = new FormData();
        formData.append("mobile", username);
        formData.append("password", password);

        console.log(username);
        console.log(password);

        return fetch(URL_LOGIN, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
            .then((response) => {
                return response.json();
            })
            .then((str) => {
                console.log(str);
                var result = str;
                var code = result.code;
                console.log(code);
                if (code == 1) {
                    var loginInfoTemp = str.object;
                    this.state.loginInfo = loginInfoTemp;
                    // this.setState({ loginInfo: loginInfoTemp });
                } else {
                    var errorMsg = str.messgae;
                    console.log(str.messgae);
                    Alert.alert(
                        'Alert Title',
                        errorMsg);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="phone number"
                    defaultValue="15370118061"
                    onChangeText={(text) => {
                        username = text;
                    }}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="password"
                    defaultValue="111111"
                    secureTextEntry={true}
                    onChangeText={(text) =>
                    { password = text }}
                />
                <Button
                    onPress={this._login}
                    title='Login'
                    accessibilityLabel='login' />
            </View>
        );
        // }
    }
}
export default Login;