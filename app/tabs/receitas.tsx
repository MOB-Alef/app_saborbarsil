import { StyleSheet, Text, View } from "react-native";

export default function Receitas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <Text>Aqui você verá a lista de receitas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
