import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CategoryButton from "../../components/CategoryButton";
import { categoryPageStyles as styles } from "../../styles/styles";

export default function Bebidas() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bebidas</Text>
      <View style={styles.buttonContainer}>
        <CategoryButton title="Café" image={require("../../assets/images/img_bebidas/cafe.jpg")} onPress={() => {}} />
        <CategoryButton title="Suco Abacaxi" image={require("../../assets/images/img_bebidas/suco_abacaxi.jpg")} onPress={() => {}} />
        <CategoryButton title="Suco Maracujá" image={require("../../assets/images/img_bebidas/suco_maracuja.png")} onPress={() => {}} />
        <CategoryButton title="Vitaminada Banana" image={require("../../assets/images/img_bebidas/vitaminada_banana.jpg")} onPress={() => {}} />
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/tabs/categorias")}>
        <Text style={styles.backButtonText}>Voltar para Categorias</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// Remove o header padrão do Expo Router
export const options = {
  headerShown: false,
}