import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#d97d3b', tabBarInactiveTintColor: '#5a5a5a', tabBarStyle: { backgroundColor: '#FFFFFF' } }}>
      <Tabs.Screen name="index" options={{ title: "Início", tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} /> }} />
      <Tabs.Screen name="categorias" options={{ title: "Categorias", tabBarIcon: ({ color }) => <FontAwesome name="list-ul" size={24} color={color} /> }} />
      <Tabs.Screen name="favoritos" options={{ title: "Favoritos", tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color={color} /> }} />
    </Tabs>
  );
}
