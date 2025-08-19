import { ScrollView, Text } from "react-native";
import { tabScreenStyles as styles } from "../../styles/styles";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>🍲 Receitas em Destaque</Text>
    </ScrollView>
  );
}
