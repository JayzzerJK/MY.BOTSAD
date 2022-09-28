import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const TScreen = ({ navigation }) => {

    const onSuccess = e => {
        const {data} = e
        navigation.replace('WebView', {url: data})
      };

    return (
        <SafeAreaView
        style={{
           justifyContent: 'center',
           alignItems: 'center',
           height: '100%',
        }}>
        <QRCodeScanner
           onRead={onSuccess}
           reactivate
           reactivateTimeout={5000}
           cameraStyle={{height: '100%'}}
        />
        <SafeAreaView
           style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
           }}>
           <View style={{backgroundColor: "#191c23", alignItems: 'center', padding: 20, borderRadius: 10, elevation:2, marginHorizontal: 16, marginVertical: 16}}>
              <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 8, textAlign:'center', color: 'white'}}>Отсканируйте QR-код</Text>
              <Text style={{textAlign:'center', color: '#8F8F8F'}}>Код сканируется автоматически.</Text>
           </View>
        </SafeAreaView>
     </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});

export default TScreen;