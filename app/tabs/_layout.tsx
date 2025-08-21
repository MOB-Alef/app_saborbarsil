import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#d97d3b',
        tabBarInactiveTintColor: '#5a5a5a',
        tabBarStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      {/* Aba Início */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            // Aqui você pode usar FontAwesome ou trocar por ícone local
           <Image source={require('../../assets/images/incons/Inicio-48.png')} style={{width:24, height:24}} />
          ),
        }}
      />

      {/* Aba Categorias */}
      <Tabs.Screen
        name="categorias"
        options={{
          title: "Categorias",
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/incons/list-64.png')} style={{width:24, height:24}} />
          ),
        }}
      />

      {/* Aba Favoritos */}
      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/incons/heart-100.png')} style={{width:24, height:24}} />
          ),
        }}
      />

      {/* Aba Receitas */}
      <Tabs.Screen
        name="receitas"
        options={{
          title: "Receitas",
          tabBarIcon: ({ color }) => (
            <Image source={require('../../assets/images/incons/Receitas-100.png')} style={{width:24, height:24}} />
          ),
        }}
      />

      {/* Aba Opções */}
      <Tabs.Screen
        name="opções"
        options={{
          title: "Opções",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/incons/Opções_96.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
