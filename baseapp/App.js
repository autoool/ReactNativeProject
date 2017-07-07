
import React from 'react';

import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './HomePage';
import Cart from './CartPage';
import PersonInfo from './PersonInfoPage';
import Search from './SearchPage';
import Shop from './ShopPage';
import Login from './Login';
import ArticleDetail from './ArticleDetailPage';
import Main from './MainPage';

class App extends React.Component {
    render() {
        return (
            <AppNavigator />
        );
    };
}

const AppNavigator = StackNavigator({
    Main: { screen: Main, },
    Home: {screen: Home,},
    Cart: {
        screen: Cart,
    },
    PersonInfo: {
        name: 'PersonInfo',
        description: 'PersonInfo',
        screen: PersonInfo,
    },
    Search: {
        name: 'Search',
        description: 'Search',
        screen: Search,
    },
    Shop: {
        name: 'Shop',
        description: 'Shop',
        screen: Shop,
    },
    Login: {
        name: 'Login',
        description: 'Login',
        screen: Login,
    },
    ArticleDetail: {
        name: 'ArticleDetail',
        description: 'ArticleDetail',
        screen: ArticleDetail,
    },
});

export default App;



