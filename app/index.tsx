import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { splashStyles as styles } from "../styles/styles";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍲 Bem-vindo ao Sabor Brasil!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/auth/login")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#457B9D" }]} onPress={() => router.push("/auth/register")}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#168d91ff" }]} onPress={() => router.replace("/tabs")}>
        <Text style={styles.buttonText}>Pular Login</Text>
      </TouchableOpacity>
    </View>
  );
}
