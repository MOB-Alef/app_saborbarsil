import { Stack } from "expo-router";

export default function ReceitasLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="receitas_sobremesas/index" options={{ title: "Sobremesas" }} />
      <Stack.Screen name="receitas_pratosprincipais/index" options={{ title: "Pratos Principais" }} />
      <Stack.Screen name="receitas_bebidas/index" options={{ title: "Bebidas" }} />
    </Stack>
  );
}
