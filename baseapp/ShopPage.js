'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
    Navigator,
} from 'react-native';

var SERVER_ARTICLE_LIST_URL = "";
const SERVER_URL = '';

class ShopPage extends Component {

    static navigationOptions = {
        title: 'ShopPage',
    };

    constructor(props, state) {
        super(props);
        this.state = state;
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listviewDataSource: ds.cloneWithRows([]),
            pressDatas: [],
        };
        this._findArticleList = this._findArticleList.bind(this);
        this._renderListRow = this._renderListRow.bind(this);
        this._listPressRow = this._listPressRow.bind(this);

    }

    _findArticleList(pageSize, nextPage) {
        var formData = new FormData();
        formData.append("pageSize", pageSize);
        formData.append("nextPage", nextPage);
        return fetch(SERVER_ARTICLE_LIST_URL,
            {
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
                let arr = str.object;
                var rows = [];
                for (let prop in arr) {
                    rows.push(arr[prop]);
                }
                console.log(rows.length);
                var ds = this.state.listviewDataSource.cloneWithRows(rows);
                this.setState({ listviewDataSource: ds });
                this.setState({ pressDatas: rows });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _renderListRow(rowData, sectionId, rowId) {
        const { navigate } = this.props.navigation;
        var imgSource = {
            uri: SERVER_URL + rowData.url,
        };
        console.log(SERVER_URL + rowData.url);
        return (
            <TouchableHighlight
                onPress={() => this._listPressRow(SERVER_URL + rowData.shareUrl)}>
                <View >
                    <View style={styles.row}>
                        <Image
                            style={styles.thumb}
                            source={imgSource}
                        />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.Text}>
                                {rowData.title}
                            </Text>
                            <Text style={styles.Text}>
                                {'发布时间：' + rowData.publishTimeStr}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    };

    _listPressRow(shareUrl) {
        console.log(shareUrl);
        const { navigate } = this.props.navigation;
        navigate('ArticleDetail', { url: shareUrl });
    };

    componentDidMount() {
        this._findArticleList(10, 1);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ListView
                    dataSource={this.state.listviewDataSource}
                    renderRow={this._renderListRow}
                    enableEmptySections={true} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
        height: 80,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 80,
        height: 80,
    },
    text: {
        flex: 1,
    },
});

export default ShopPage;