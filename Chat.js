import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";

export default function ListProducts() {
  const products = require("./data/data.json");
  const renderItems = ({ item }) => {
    return (
    <View style={styles.items}>
      <View style={styles.itemImg}>
        <Image
          style={styles.img}
          source={require("./img/"+ item.image +".png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.itemName}>
        <Text>{item.name}</Text>
        <Text style={{ color: "#f31111", fontWeight: "bold" }}>
          {item.shop}
        </Text>
      </View>
      <View>
        <Button title="Chat ngay" color="#F31111" />
      </View>
    </View>
  )};
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>
          Bạn có thắc mắc về sản phẩm vừa xem, Đừng ngại chat ngay với shop !
        </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList data={products} renderItem={renderItems} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
  content: {
    marginHorizontal: 35,
    marginVertical: 20,
  },
  header: {
    width: "100%",
    height: 80,
    paddingHorizontal: 35,
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 26,
    height: 26,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemImg: {
    width: 80,
    height: 80,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  itemName: {
    width: "45%",
    height: 80,
    justifyContent: "space-evenly",
    marginLeft: 20,
    overflow: "hidden"
  },
});
