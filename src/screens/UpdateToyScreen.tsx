// src/screens/UpdateToyScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { updateToy } from "../api/toyService";

export default function UpdateToyScreen({ route, navigation }: any) {
  const toy = route.params?.toy;

  if (!toy) {
    return (
      <View style={styles.container}>
        <Text>❌ No se recibió el juguete a editar</Text>
      </View>
    );
  }

  const [name, setName] = useState(toy.name);
  const [price, setPrice] = useState(String(toy.price));
  const [categoryId, setCategoryId] = useState(String(toy.categoryId || ""));

  const handleUpdate = async () => {
    try {
      const updatedToy = {
        id: toy.id,
        name,
        price: parseFloat(price),
        categoryId: Number(categoryId), // ✅ enviar categoryId numérico
      };

      console.log("🟢 Intentando actualizar juguete...");
      console.log("➡️ URL:", `/Toys/${updatedToy.id}`);
      console.log("📦 Payload:", updatedToy);

      await updateToy(updatedToy);

      Alert.alert("✅ Éxito", "El juguete se actualizó correctamente");
      navigation.goBack();
    } catch (err: any) {
      console.error("❌ Error actualizando juguete:", err.message || err);
      Alert.alert("❌ Error", "No se pudo actualizar el juguete");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Categoría (Id)</Text>
      <TextInput
        style={styles.input}
        value={categoryId}
        onChangeText={setCategoryId}
        keyboardType="numeric"
      />

      <Button title="Actualizar" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
