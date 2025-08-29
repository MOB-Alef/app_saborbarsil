import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
// --- CORREÇÃO 1: Importar ambos os conjuntos de estilos ---
import { modalStyles, splashStyles } from "../styles/styles";

export default function Welcome() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={splashStyles.container}>
      <Text style={splashStyles.text}>🍲 Bem-vindo ao Sabor Brasil!</Text>

      {/* Botão circular */}
      <TouchableOpacity
        style={splashStyles.circleButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={splashStyles.circleButtonText}>👤</Text>
      </TouchableOpacity>

      {/* Modal com as opções */}
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* --- CORREÇÃO 2: Usar modalStyles aqui --- */}
        <View style={modalStyles.container}>
          <View style={modalStyles.content}>
            <TouchableOpacity
              style={modalStyles.optionButton}
              onPress={() => {
                setMenuVisible(false);
                router.push("/auth/login");
              }}
            >
              <Text style={modalStyles.optionText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={modalStyles.optionButton}
              onPress={() => {
                setMenuVisible(false);
                router.push("/auth/register");
              }}
            >
              <Text style={modalStyles.optionText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={modalStyles.optionButton}
              onPress={() => {
                setMenuVisible(false);
                router.replace("/tabs");
              }}
            >
              <Text style={modalStyles.optionText}>Pular Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[modalStyles.optionButton, { backgroundColor: "#aaa" }]}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={modalStyles.optionText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
