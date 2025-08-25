import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasBebidas() {
  const router = useRouter();

  const receitas = [
    {
      id: "caipirinha",
      nome: "Caipirinha",
      imagem: require("../../assets/images/img_telas/comidas/Caipirinha.jpg"),
      descricao: "Bebida típica do Brasil feita com limão e cachaça.",
    },
    {
      id: "pinaColada",
      nome: "Piña Colada",
      imagem: require("../../assets/images/img_bebidas/Piña_Colada.png"),
      descricao: "Coquetel tropical de rum, abacaxi e leite de coco.",
    },
    {
      id: "cosmopolitan",
      nome: "Cosmopolitan",
      imagem: require("../../assets/images/img_bebidas/Cosmopolitan.png"),
      descricao: "Forte e encorpado, conhecido mundialmente.",
    },
    {
      id: "margarita",
      nome: "Margarita",
      imagem: require("../../assets/images/img_bebidas/Margarita.jpg"),
      descricao: "Clássico coquetel mexicano com tequila e limão.",
    },
    {
      id: "mojito",
      nome: "Mojito",
      imagem: require("../../assets/images/img_bebidas/Mojito.png"),
      descricao: "Refrescante coquetel cubano com hortelã e limão.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🥤 Bebidas</Text>
      {receitas.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/screens/receitas_geral/ReceitaDetalhada_bebidas?id=${item.id}`)}>
          <View style={recipeCardStyles.card}>
            <Image source={item.imagem} style={recipeCardStyles.imagem} />
            <View style={recipeCardStyles.conteudo}>
              <Text style={recipeCardStyles.nome}>{item.nome}</Text>
              <Text style={recipeCardStyles.descricao}>{item.descricao}</Text>
            </View>
          </View>
        <Text style={categoryPageStyles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
