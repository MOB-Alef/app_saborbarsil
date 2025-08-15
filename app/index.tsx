import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles, COLORS } from "../styles";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.homeContainer}>
      <Text style={styles.welcomeTitle}>Bem-vindo ao Sabor Brasil!</Text>
      <Text style={styles.welcomeSubtitle}>
        Descubra deliciosas receitas brasileiras.
      </Text>

      <View style={{ gap: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.laranjaQueimado,
            padding: 15,
            borderRadius: 10,
          }}
          onPress={() => router.push("/categorias")} // Navega para Categorias
        >
          <Text style={{ color: COLORS.branco, textAlign: "center" }}>
            Categorias
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.laranjaQueimado,
            padding: 15,
            borderRadius: 10,
          }}
          onPress={() => router.push("/favoritos")} // Navega para Favoritos
        >
          <Text style={{ color: COLORS.branco, textAlign: "center" }}>
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
