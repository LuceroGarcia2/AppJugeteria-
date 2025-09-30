// src/screens/HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/images/fondo2.png")} // 👈 tu fondo local
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Logo / Icono juguetería */}
        <Image
  source={require("../../assets/images/iconno.png")} // 👈 icono local de juguetería
  style={styles.logo}
/>

        {/* Título */}
        <Text style={styles.title}>TOYSHOP</Text>
        <Text style={styles.subtitle}>¡Bienvenido a la diversión! 🧸</Text>

        {/* Botón */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ver Juguetes 🎲</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // La imagen cubre toda la pantalla
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)", // 👈 capa translúcida para mejorar la visibilidad
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff1493", // 💖 Rosa juguetería
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff69b4", // 💗 Rosa vibrante
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
