import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../styles";
import CategoryButton from "./components/CategoryButton";

export default function Favoritos() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.marromEscuro, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: COLORS.marromAvermelhado, marginBottom: 20 }}>
        Receitas Favoritas
      </Text>

      <View style={{ gap: 15 }}>
        <CategoryButton title="Feijoada" onPress={() => {}} />
        <CategoryButton title="Brigadeiro" onPress={() => {}} />
        <CategoryButton title="Caipirinha" onPress={() => {}} />
      </View>

      <TouchableOpacity
        style={{ marginTop: 30, backgroundColor: COLORS.laranjaQueimado, padding: 15, borderRadius: 10 }}
        onPress={() => router.push("/")}
      >
        <Text style={{ color: COLORS.branco, textAlign: "center", fontWeight: "bold" }}>
          Voltar para Início
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
