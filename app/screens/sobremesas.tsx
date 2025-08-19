import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CategoryButton from "../../components/CategoryButton";
import { categoryPageStyles as styles } from "../../styles/styles";

export default function Sobremesas() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobremesas</Text>
      <View style={styles.buttonContainer}>
        <CategoryButton title="Pavê" image={require("../../assets/images/img_sobremesas/pave.png")} onPress={() => {}} />
        <CategoryButton title="Pudim" image={require("../../assets/images/img_sobremesas/pudim.png")} onPress={() => {}} />
        <CategoryButton title="Torta Limão" image={require("../../assets/images/img_sobremesas/torta_limao.png")} onPress={() => {}} />
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