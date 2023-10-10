import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function FirstScreen({route,navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          style={{ height: "100%", width: "90%" }}
          source={require(`../img/${route.params?route.params:"blue"}.jpg`)}
        />
      </View>
      <View style={styles.containerBody}>
        <Text style={styles.textInfo}>
          Điện thoại vsmart Joy 3 - Chính Hãng
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
            marginRight: 30,
          }}
        >
          <View style={styles.star}>
            <FontAwesome
              style={styles.eleStar}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={styles.eleStar}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={styles.eleStar}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={styles.eleStar}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={styles.eleStar}
              name="star"
              size={24}
              color="#E0E41A"
            />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>1.790.000 đ</Text>
          <Text
            style={{
              textDecorationLine: "line-throutegh",
              marginBottom: 5,
              color: "gray",
              fontSize: 17,
              marginLeft: 30,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, alignItems:"flex-end", }}>
          <Text style={{ fontWeight: "bold", color: "red", marginRight:20 }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <AntDesign name="questioncircleo" size={24} color="black" />
        </View>
        <TouchableOpacity
          style={styles.selectColor}
          onPress={() => {
            navigation.navigate("SecondScreen",route.params?route.params:"blue");

          }}
        >
          <Text>4 MÀU-CHỌN MÀU</Text>
          <MaterialIcons
            style={{ marginLeft: 100 }}
            name="navigate-next"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            marginTop: 30,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Chọn Mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  containerBody: {
    flex: 4,
    backgroutendColor: "white",
    paddingHorizontal: 20,
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 18,
  },
  star: {
    flexDirection: "row",
  },
  eleStar: {
    marginRight: 10,
  },
  selectColor: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "C4C4C4",
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
