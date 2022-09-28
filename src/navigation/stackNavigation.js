import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/Home";
import TScreen from "../pages/QR";
import WebViewScreen from "../pages/WebView";

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"
    }
  }

const Navigation = () => {
    return <NavigationContainer theme = {theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName = "Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="QR" component={TScreen}/>
            <Stack.Screen name="WebView" component={WebViewScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default Navigation;