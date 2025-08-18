import { ScrollView, View } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { tabScreenStyles as styles } from "../../styles";

export default function Categorias() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <CategoryButton
          title="Pizzas"
          image={require("../../assets/images/pizza.jpg")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Cafés"
          image={require("../../assets/images/cafe.jpg")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Sucos"
          image={require("../../assets/images/suco.png")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Sobremesas"
          image={require("../../assets/images/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg")}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}
