import { ScrollView } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { tabScreenStyles as styles } from "../../styles/styles";

export default function Favoritos() {
  return (
    <ScrollView style={styles.container}>
      <CategoryButton title="Pizza Calabresa" image={require("../../assets/images/pratos_principais/pizza.jpg")} onPress={() => {}} />
      <CategoryButton title="Café Expresso" image={require("../../assets/images/img_bebidas/cafe.jpg")} onPress={() => {}} />
      <CategoryButton title="Suco de Maracuja" image={require("../../assets/images/img_bebidas/suco_maracuja.png")} onPress={() => {}} />
    </ScrollView>
  );
}
