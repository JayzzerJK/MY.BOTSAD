import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image, FlatList } from "react-native"
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants";
import { NewsCard, HomeHeader, FocusedStatusBar } from "../components";
import { QRButton } from "../components/Button";

const HomeScreen = ({navigation}) => {
    return (
        
    <SafeAreaView style = {{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style = {{ flex: 1 }}>
            <View style = {{ zIndex: 0 }}>
                <FlatList
                data={NFTData}
                renderItem = {({ item }) => <NewsCard data={item}/>}
                keyExtractor = {( item ) => item.id}
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent = {<HomeHeader/>}
                />
                
            </View>

            <View style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
            }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </View>

        
       <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: "absolute",
            bottom: 0,
            paddingVertical: SIZES.font,
            zIndex: 1,
        }}>
        <QRButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} handlePress={() => navigation.navigate("QR")}/>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen;