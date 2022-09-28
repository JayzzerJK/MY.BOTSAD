import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, SIZES, assets } from "../constants";


const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Text style={{
        fontSize: SIZES.medium,
        fontWeight: "600",
        color: COLORS.white,
      }}>Оранжерея СВФУ </Text>
      <View style = {{ width: 45, height: 45 }}>
        <Image
        source={assets.person01}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
        />
        <Image
        source={assets.badge}
        resizeMode="contain"
        style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0 }}
        />
      </View>
      </View>
      <View style ={{ marginVertical: SIZES.font }}>
        <Text style={{ fontSize: SIZES.small, color: COLORS.white }}>Доброй ночи, Антон. 👋</Text>
        <Text style={{ fontWeight: "700", fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>Ботанический сад под рукой.</Text>
      </View>
      <View style={{marginTop: SIZES.font }}>
          <View style={{
            width: "100%",
            borderRadius: COLORS.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 10,
            borderRadius: SIZES.font, 
          }}>
            <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width:20, height:20, marginRight: SIZES.base }}
            />
            <TextInput
            placeholder="Поиск по каталогу"
            style={{ flex: 1 }}
            onChangeText={onSearch}
            />
          </View>
      </View>
    </View>
  )
}

export default HomeHeader