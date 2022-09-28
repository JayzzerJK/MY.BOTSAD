import React, { Component } from "react";
import {View, TouchableOpacity, Text } from "react-native";
import WebView from "react-native-webview";

let jsCode = `
document.getElementsByClassName('u-header u-header--static g-brd-top g-brd-blue')[0].style.display = 'none';
document.getElementsByClassName('col-lg-3 flex-lg-second flex-xs-first')[0].style.display = 'none';
document.getElementsByClassName('btn btn-md u-btn-primary g-mr-10 g-mb-15 profile-abs hidden-md-up')[0].style.display = 'none';
document.getElementsByClassName('g-bg-blue-radialgradient-circle g-color-white-opacity-0_8 g-bg-img-hero g-pt-30')[0].style.display = 'none';
`

const WebViewScreen = ({ route: {params: {url},},}) => {

        return (
            <View style = {{ flex: 1 }}>
            <WebView 
            injectedJavaScript={jsCode}
            source = {{uri: url}}
            style ={{ flex: 1}}/>
            </View>
        )
}

export default WebViewScreen;