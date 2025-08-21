import { View, Text } from "react-native";
import { receitasStyles as styles } from "../../styles/styles";

export default function Receitas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas as Receitas</Text>
      <Text style={styles.description}>
        Aqui você poderá ver detalhes de bebidas, pratos principais e sobremesas.
      </Text>
    </View>
  );
}
