import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginStyles as styles } from "../../styles/styles";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [opcao, setOpcao] = useState("login");

  const handleEnviar = () => {
    if (opcao === "pular") {
      router.replace("/tabs");
      return;
    }
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }
    router.replace("/tabs");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        {opcao === "login" && (
          <>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="example@example.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry value={senha} onChangeText={setSenha} />
          </>
        )}

        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => setOpcao("pular")}>
            <Text style={opcao === "pular" ? styles.optionSelected : styles.option}>● Entrar sem login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpcao("login")}>
            <Text style={opcao === "login" ? styles.optionSelected : styles.option}>● Quero fazer login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.option}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
