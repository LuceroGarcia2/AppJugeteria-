
// src/screens/CreateToyScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker"; // 👈 IMPORTANTE
import { createToy } from "../api/toyService";

export default function CreateToyScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleCreate = async () => {
    if (!name || !price || !categoryName) {
      Alert.alert("⚠️ Campos incompletos", "Por favor complete todos los campos");
      return;
    }

    try {
      const newToy = {
        name,
        price: parseFloat(price),
        categoryName,
      };

      await createToy(newToy);

      Alert.alert("✅ Éxito", "El juguete se creó correctamente");
      navigation.goBack();
    } catch (err) {
      console.error("Error creando juguete:", err);
      Alert.alert("❌ Error", "No se pudo crear el juguete");
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

      <Text style={styles.label}>Categoría</Text>
      <Picker
        selectedValue={categoryName}
        onValueChange={(itemValue) => setCategoryName(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Seleccione una categoría" value="" />
        <Picker.Item label="Peluches" value="Peluches" />
        <Picker.Item label="Educativos" value="Educativos" />
        <Picker.Item label="Otros" value="Otros" />
      </Picker>

      <Button title="Crear" onPress={handleCreate} />
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
