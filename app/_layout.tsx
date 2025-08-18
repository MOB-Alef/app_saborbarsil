import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { loginStyles as styles } from "../styles";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [opcao, setOpcao] = useState("login");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulário de Login</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => setOpcao("pular")}>
            <Text style={opcao === "pular" ? styles.optionSelected : styles.option}>
              ● Sim, pular login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpcao("login")}>
            <Text style={opcao === "login" ? styles.optionSelected : styles.option}>
              ● Não, quero fazer login
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/tabs")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}