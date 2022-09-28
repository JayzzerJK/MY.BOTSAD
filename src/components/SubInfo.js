import React from 'react'
import { View, Text, Image } from 'react-native'
import { assets, COLORS, SIZES, SHADOWS } from '../constants'


export const NewsTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View >
      <Text style ={{ 
      fontWeight: '700', 
      fontSize: titleSize,
      color: COLORS.primary
      }}>{title}</Text>
      <Text style ={{
      fontSize: subTitleSize,
      color: COLORS.primary
      }}>{subTitle}</Text>
    </View>
  )
}

export const LikeCount = ({ count }) => {
    return (
      <View style={{
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Image
        source={assets.eth}
        resizeMode= "contain"
        style={{ 
        width: 20,
        height: 20, 
        marginRight: 2
        }}/>
        <Text style={{
            fontWeight: '400',
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>{count}</Text>
      </View>
    )
  }

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
    source={imgUrl}
    resizeMode= "contain"
    style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font

    }}
    />
  )
}

export const Authors = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (<ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>))}
      </View>
    )
}

export const PostDate = () => {
    return (
      <View 
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font, 
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%"
        }}>
        <Text style={{  
            fontWeight: '400',
            fontSize: SIZES.small, 
            color: COLORS.primary
        }}>
            Редкость:
        </Text>
        <Text style={{ 
            fontWeight: '700',
            fontSize: SIZES.medium, 
            color: COLORS.primary
        }}>
            3а
        </Text>
      </View>
    )
}

export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <Authors/>
        <PostDate/>
      </View>
    )
}