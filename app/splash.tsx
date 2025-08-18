import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { splashStyles as styles } from "../styles";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/tabs"); 
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require("../assets/images/cafe.jpg")} style={styles.logo} />
        <Text style={styles.text}>Sabor Brasil</Text>
        <Text style={styles.text}>Cada prato, uma história</Text>
      </View>
    </View>
  );
}
