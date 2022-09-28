import { CurrentRenderContext } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS } from '../constants'


export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style = {{ width: 24, height: 24}}
      />

    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
    <Text style={{
      fontWeight: "400",
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: "center"
    }}> Подробнее </Text>
    </TouchableOpacity>
  )
}

export const QRButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
    <Text style={{
      fontWeight: "700",
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: "center"
    }}>QR-Код</Text>
    </TouchableOpacity>
  )
}