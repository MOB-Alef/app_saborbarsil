import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import CategoryButton from "../../components/CategoryButton";
import { categoryPageStyles as styles } from "../../styles/styles";

export default function PratosPrincipais() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pratos Principais</Text>
      <View style={styles.buttonContainer}>
        <CategoryButton title="Feijoada" image={require("../../assets/images/pratos_principais/feijoada.png")} onPress={() => {}} />
        <CategoryButton title="Moqueca" image={require("../../assets/images/pratos_principais/moqueca.png")} onPress={() => {}} />
        <CategoryButton title="Churrasco" image={require("../../assets/images/pratos_principais/churrasco.png")} onPress={() => {}} />
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/tabs/categorias")}>
        <Text style={styles.backButtonText}>Voltar para Categorias</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}