import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { splashStyles as styles  } from "..//styles/styles";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/"), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍲 Sabor Brasil</Text>
      <ActivityIndicator size="large" color="#E63946" style={{ marginTop: 20 }} />
    </View>
  );
}
