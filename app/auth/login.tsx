
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* A tela (tabs) é a sua tela principal com a navegação por abas */}
      <Stack.Screen 
        name="tabs" 
        options={{ headerShown: false }}
      />
      
      {/* A tela de login */}
      <Stack.Screen 
        name="auth/login" 
        options={{ 
          title: "Login",
          headerShown: false,
        }} 
      />

      {/* --- ADICIONE ESTA PARTE --- */}
      {/* A nova tela de registro */}
      <Stack.Screen 
        name="auth/register" 
        options={{ 
          title: "Registro",
          headerShown: false, // Também sem cabeçalho
        }} 
      />
      {/* --- FIM DA ADIÇÃO --- */}

      {/* A tela de splash é a primeira a ser vista */}
      <Stack.Screen 
        name="splash" 
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
