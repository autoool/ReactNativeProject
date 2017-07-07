/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import App from './baseapp/App';

export default class AwesomeProject extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
