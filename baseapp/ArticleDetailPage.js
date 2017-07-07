import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    WebView,
    Button,
} from 'react-native';

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var WEBVIEW_REF = 'webview';


class ArticleDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadUrl: "http://cn.bing.com/",
            forwardButtonEnabled: false,
            scalesPageToFit: true,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            loading: true,
        };
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
        this.onShouldStartLoadWithRequest = this.onShouldStartLoadWithRequest.bind(this);
    }

    onNavigationStateChange(navState) {
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            loadUrl: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        });
    }

    onShouldStartLoadWithRequest(event) {
        return true;
    };

    _buttonBackPress() {

    }

    render() {
        const { goBack } = this.props.navigation;
        const { state } = this.props.navigation;
        console.log(state.params.url);
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{ uri: state.params.url }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    webView: {
        backgroundColor: BGWASH,
    },
});
export default ArticleDetailPage;