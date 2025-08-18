import { ScrollView } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { tabScreenStyles as styles } from "../../styles";

export default function Favoritos() {
  return (
    <ScrollView style={styles.container}>
      <CategoryButton
        title="Pizza Calabresa"
        image={require("../../assets/images/pizza.jpg")}
        onPress={() => {}}
      />
      <CategoryButton
        title="Café Expresso"
        image={require("../../assets/images/cafe.jpg")}
        onPress={() => {}}
      />
      <CategoryButton
        title="Suco de Laranja"
        image={require("../../assets/images/suco.png")}
        onPress={() => {}}
      />
    </ScrollView>
  );
}
