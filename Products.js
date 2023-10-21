import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  useEffect(() => {
    navigation.setOptions({
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
              style={{
                width: 20,
                height: 20,
                marginLeft: 5,
                marginBottom: -50,
              }}
              source={require("./img/search.png")}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Tìm kiếm"
              style={{
                backgroundColor: "#fff",
                padding: 10,
                paddingLeft: 30,
                marginTop: 20,
              }}
              onChangeText={(text) => setSearchText(text)}
            ></TextInput>
          </View>

          <Image
            style={{ width: 26, height: 26, marginLeft: 30 }}
            source={require("./img/bi_cart-check.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              backgroundColor: "#f31111",
              width: 15,
              height: 15,
              borderRadius: 50,
              color: "#f31111",
              textAlign: "center",
              marginLeft: -15,
              marginTop: -10,
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        </View>
      ),
    });
    if (searchText) {
      const filteredProducts = require("./data/productsData.json").filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(require("./data/productsData.json"));
    }
    
  }, [searchText]);

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
    padding: 5,
  },
});

export default Products;
