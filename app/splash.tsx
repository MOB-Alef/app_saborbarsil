import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { styles } from "../styles";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // eslint-ignore está ok aqui

  return (
    <View style={styles.splashContainer}>
      {/* View que contém logo e textos */}
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/images/icon.png")} style={styles.logo} />
        <Text style={styles.splashText}>Sabor Brasil</Text>
        <Text style={styles.splashText}>Cada prato, uma história</Text>
      </View>
    </View>
  );
}
