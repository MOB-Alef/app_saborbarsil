import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { categoryPageStyles as styles } from "../../styles";

export default function PratosPrincipais() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Pratos Principais
      </Text>

      <View style={styles.buttonContainer}>
        <CategoryButton
          title="Feijoada"
          image={require("../../assets/images/feijoada.png")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Moqueca"
          image={require("../../assets/images/moqueca.png")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Churrasco"
          image={require("../../assets/images/churrasco.png")}
          onPress={() => {}}
        />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/tabs/categorias")}
      >
        <Text style={styles.backButtonText}>
          Voltar para Categorias
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}