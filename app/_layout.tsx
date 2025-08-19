import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/register" options={{ headerShown: false }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      {/* As telas de categorias específicas não precisam estar aqui, pois serão acessadas via router.push() */}
      {/* Ex: "/screens/bebidas", "/screens/pratosprincipais", "/screens/sobremesas" */}
    </Stack>
  );
}
