import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { categoryPageStyles as styles } from "../../styles";

export default function Sobremesas() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobremesas</Text>

      <View style={styles.buttonContainer}>
        <CategoryButton
          title="Pudim"
          image={require("../../assets/images/pudim.png")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Pavê"
          image={require("../../assets/images/pave.png")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Torta de Limão"
          image={require("../../assets/images/torta_limao.png")}
          onPress={() => {}}
        />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/tabs/categorias")}
      >
        <Text style={styles.backButtonText}>Voltar para Categorias</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
