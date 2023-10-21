import { View, Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.press}
        onPress={() => navigation.navigate("Chat")}
      >
        Go To chat
      </Pressable>
      <Pressable
        style={styles.press}
        onPress={() => navigation.navigate("Products")}
      >
        Go To Products
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  press: {
    backgroundColor: "cyan",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});

export default Home;
