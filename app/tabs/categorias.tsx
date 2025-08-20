import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import CategoryButton from "../../components/CategoryButton";
import { tabScreenStyles as styles } from "../../styles/styles";

export default function Categorias() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <CategoryButton
          title="Bebidas"
          image={require("../../assets/images/img_bebidas/cafe.jpg")}
          onPress={() => router.push("/screens/bebidas")}
        />
        <CategoryButton
          title="Pratos Principais"
          image={require("../../assets/images/img_pratos_principais/pizza.jpg")}
          onPress={() => router.push("/screens/pratosprincipais")}
        />
        <CategoryButton
          title="Sobremesas"
          image={require("../../assets/images/img_sobremesas/pudim.png")}
          onPress={() => router.push("/screens/sobremesas")}
        />
      </View>
    </ScrollView>
  );
}
