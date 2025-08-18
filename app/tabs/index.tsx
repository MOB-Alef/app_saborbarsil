import { ScrollView, View } from "react-native";
import CategoryButton from "../../components/CategoryButton";
import { tabScreenStyles as styles } from "../../styles";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <CategoryButton
          title="Pizza"
          image={require("../../assets/images/pizza.jpg")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Café"
          image={require("../../assets/images/cafe.jpg")}
          onPress={() => {}}
        />
        <CategoryButton
          title="Suco"
          image={require("../../assets/images/suco.png")}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}
