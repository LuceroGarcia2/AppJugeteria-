// src/screens/ProductDetailScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { getToyById, deleteToyById } from "../api/toyService";

export default function ProductDetailScreen({ route, navigation }: any) {
  const { id } = route.params;
  const [toy, setToy] = useState<any>(null);

  useEffect(() => {
    getToyById(id).then(setToy).catch(console.error);
  }, [id]);

  if (!toy) return <Text style={styles.loading}>Cargando...</Text>;

  const handleDelete = async () => {
    try {
      await deleteToyById(id);
      navigation.goBack();
    } catch (error) {
      console.error("Error eliminando juguete:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagen del juguete */}
      <Image
        source={require("../../assets/images/juguete.png")} // tu imagen local
        style={styles.image}
      />

      {/* Nombre y precio */}
      <Text style={styles.name}>{toy.name}</Text>
      <Text style={styles.price}>${toy.price}</Text>
      <Text style={styles.category}>Categoría: {toy.categoryName || "N/A"}</Text>

      {/* Botones de acción */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate("UpdateToy", { toy })}
        >
          <Text style={styles.buttonText}>✏️ Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>🗑️ Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1F5FE", // 💙 Azul pastel
    padding: 20,
    alignItems: "center",
  },
  loading: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#01579B",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0288D1",
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    color: "#0277BD",
    marginBottom: 30,
  },
  actions: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  editButton: {
    backgroundColor: "#cf8adbff", // ✅ Verde para editar
  },
  deleteButton: {
    backgroundColor: "#357ee5ff", // ❌ Rojo para eliminar
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
