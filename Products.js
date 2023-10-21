import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
const Products = ({ navigation }) => {
  const products = require("./data/products.json");
  const renderItems = ({ item }) => {
    const stars = [];
    for (let i = 0; i < item.rate; i++) {
      stars.push(
        <Image
          style={{ width: 13, height: 13, marginRight: 5 }}
          source={require("./img/Star.png")}
          resizeMode="contain"
        />
      );
    }
    return (
      <View style={styles.items}>
        <View>
          <Image
            style={styles.img}
            source={require("./img/" + item.image + ".png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.description}>
          <Text>{item.name}</Text>
          <View style={styles.rate}>
            {stars}
            <Text>({item.totalRate})</Text>
          </View>
          <View style={styles.price}>
            <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
            <Text style={{ color: "#ccc", fontWeight: "bold" }}>
              {item.discount}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList data={products} renderItem={renderItems} numColumns={2} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "space-between",
  },
  items: {
    width: "50%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 10,
  },
  items: {
    width: "50%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 10,
  },
  img: {
    width: 155,
    height: 90,
  },
  description: {
    marginLeft: 20,
    marginTop: 10,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding : 5
  },
});

export default Products;
