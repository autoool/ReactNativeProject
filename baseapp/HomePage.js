
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ListView,
    Alert,
    RefreshControl,
    Dimensions,
    PixelRatio,
    TouchableWithoutFeedback,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

import ViewPager from 'react-native-viewpager';
// 加载轮播图
// 加载图文列表  分页加载  刷新

const BANNER_IMGS = [
    require('./images/home.png'),
    require('./images/search.png'),
    require('./images/cart.png'),
    require('./images/personinfo.png')
];

var TAB_NAVIGATORS = [
    {
        "tid": 12,
        "orderName": 4,
        "typeName": "情感"
    },
    {
        "tid": 14,
        "orderName": 2,
        "typeName": "靠谱"
    },
    {
        "tid": 23,
        "orderName": 1,
        "typeName": "百态"
    },
    {
        "tid": 11,
        "orderName": 1,
        "typeName": "活动"
    }
];

const SERVER_BASE_URL = "";
const SERVER_URL = '';
const SERVER_POST_BANNER = "";
const SERVER_POST_ARTICLE_TYPE_LIST = '';

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        var bannerData = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            bannerDataSource: bannerData.cloneWithPages(bannerData),
        }
        this.getBannerPhotosApiAsync = this.getBannerPhotosApiAsync.bind(this);
        // this.getArticleTypeListApiAsync = this.getArticleTypeListApiAsync.bind(this);
    }

    getBannerPhotosApiAsync() {
        return fetch(SERVER_POST_BANNER,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((str) => {
                console.log(str);
                let arr = str.object;
                var rows = [];
                for (let prop in arr) {
                    rows.push(arr[prop]);
                }
                console.log(rows.length);
                var ds = this.state.bannerDataSource.cloneWithPages(rows);
                this.setState({ bannerDataSource: ds });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidMount() {
        this.getBannerPhotosApiAsync();
    }

    _renderPage(data, pageId) {
        var photoUrl = SERVER_URL + data.url + '';
        console.log(photoUrl);
        return (
            <Image
                source={{ uri: photoUrl }}
                defaultSource={require('./images/home.png')}
                style={styles.page} />
        );
    }

    render() {            
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ height: 48 }}>
                    <Text
                        title='主页' />
                </View>
                <View style={{ height: 130 }}>
                    <ViewPager
                        style={{ height: 130 }}
                        dataSource={this.state.bannerDataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true} />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
})

export default HomePage;