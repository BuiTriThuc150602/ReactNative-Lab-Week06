import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import { Image, TextInput, View,Text } from "react-native";
import Home from "./Home";
import Products from "./Products";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle : "Home",
          headerTitleAlign : "center",
          headerTintColor : "white",
          headerStyle : {
            backgroundColor : "cyan",
            fontWeight : "bold",
          }
        }}/>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerTitle: "Chat",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerRight: () => (
              <Image
                style={{ width: 26, height: 26, marginRight: 20 }}
                source={require("./img/bi_cart-check.png")}
                resizeMode="contain"
              />
            ),
            headerStyle: {
              backgroundColor: "cyan",
            },
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            
            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View>
                <Image
                  style={{ width: 20, height: 20, marginRight: -25, marginBottom:-30 }}
                  source={require("./img/search.png")}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder="Tìm kiếm"
                  style={{ backgroundColor: "#fff",padding: 10, paddingLeft:30 }}

                ></TextInput>
                
                </View>
                
                <Image
                  style={{ width: 26, height: 26, marginLeft: 30 }}
                  source={require("./img/bi_cart-check.png")}
                  resizeMode="contain"
                />
                <Text style={{backgroundColor:"#f31111",width:15,height:15,borderRadius:50,color:"#f31111",textAlign:"center", marginLeft:-10,marginTop:-10}}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              </View>
            ),
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "cyan",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
