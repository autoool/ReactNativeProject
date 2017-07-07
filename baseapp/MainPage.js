import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from './HomePage';
import Shop from './ShopPage';
import Search from './SearchPage';
import Cart from './CartPage';
import PersonInfo from './PersonInfoPage';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
        this._navigatorItemPress = this._navigatorItemPress.bind(this);
        // this._renderTabBarItem = this._renderTabBarItem.bind(this);
    }

    // _renderTabBarItem(title, iconName, selectedIconName, selectedTab, badgeText) {
    //     return (
    //         <TabNavigator.Item
    //             title={title}
    //             renderIcon={() => <Image source={{ uri: iconName }} style={styles.iconStyle} />}
    //             renderSelectedIcon={() => <Image source={{ uri: selectedIconName }} style={styles.iconStyle} />}
    //             selected={this.state.selectedTab === selectedTab}
    //             onPress={() => this.setState({ selectedTab: selectedTab })}
    //             selectedTitleStyle={styles.selectedTitleStyle} //tabBarItem选中的文字样式
    //             badgeText={badgeText}>
    //             {this.state.naviagte}
    //         </TabNavigator.Item>
    //     );
    // }

    _navigatorItemPress(selectedTabName) {
        this.setState({ selectedTab: selectedTabName });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Image source={require("./images/home.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("./images/home_selected.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home{...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="商城"
                    selected={this.state.selectedTab === 'shop'}
                    renderIcon={() => <Image source={require("./images/shop.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("./images/shop_selected.png")} style={styles.iconStyle} />}
                    onPress={() => this._navigatorItemPress('shop')}>
                    <Shop{...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="发现"
                    selected={this.state.selectedTab === 'search'}
                    renderIcon={() => <Image source={require("./images/search.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("./images/search_selected.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'search' })}>
                    <Search{...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="购物车"
                    selected={this.state.selectedTab === 'cart'}
                    renderIcon={() => <Image source={require("./images/cart.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("./images/cart_selected.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Cart{...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab === 'personinfo'}
                    renderIcon={() => <Image source={require("./images/personinfo.png")} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require("./images/personinfo_selected.png")} style={styles.iconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'personinfo' })}>
                    <PersonInfo{...this.props} />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default MainPage;