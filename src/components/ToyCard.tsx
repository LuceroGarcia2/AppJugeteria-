
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ToyCard({ toy, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{toy.name}</Text>
      <Text style={styles.price}>${toy.price}</Text>
      <Text style={styles.category}>{toy.category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFD93D",
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  price: {
    fontSize: 16,
    color: "#4DB6E7",
    marginTop: 5,
  },
  category: {
    fontSize: 14,
    marginTop: 5,
    color: "#6BCB77",
  },
});
