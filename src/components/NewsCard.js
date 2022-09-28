import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from './Button';
import { SubInfo, LikeCount, NewsTitle } from './SubInfo';

const NewsCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font,
            ...SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font}}>
         <NewsTitle 
         title={data.name}
         subTitle={data.creator}
         titleSize={SIZES.large}
         subTitleSize={SIZES.small}
         />

         <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
         }}>
            <LikeCount count={data.price}/>
            <RectButton 
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("WebView", {url: 'https://www.s-vfu.ru/universitet/rukovodstvo-i-struktura/instituty/bgf/bs/virtual-garden/detail.php?ID=152841'})}/>
         </View>
      </View>
    </View>
  )
}

export default NewsCard