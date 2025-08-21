import { Stack } from "expo-router";

export default function RootLayout() {
  
  return (
  <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/register" />
      <Stack.Screen name="tabs" />
      {/* Agora todas as telas (inclusive categorias) virão SEM header */}
    </Stack>
  );
}
