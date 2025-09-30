// src/screens/ProductListScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { getAllToys } from "../api/toyService";

export default function ProductListScreen({ navigation }: any) {
  const [toys, setToys] = useState<any[]>([]);

  useEffect(() => {
    getAllToys().then(setToys).catch(console.error);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      // 👇 aquí pasamos SOLO el id hacia ProductDetailScreen
      onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={toys}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E1F5FE",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#01579B",
  },
  price: {
    fontSize: 16,
    color: "gray",
  },
});
