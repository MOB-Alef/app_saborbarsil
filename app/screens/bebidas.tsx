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
      id: "suco_acai",
      nome: "Suco de Açaí",
      imagem: require("../../assets/images/img_telas/comidas/Suco_de_Açaí.jpg"),
      descricao: "Refrescante e energético, típico da região amazônica.",
    },
    {
      id: "cafe",
      nome: "Café Brasileiro",
      imagem: require("../../assets/images/img_telas/comidas/Café_Brasileiro.jpg"),
      descricao: "Forte e encorpado, conhecido mundialmente.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🥤 Bebidas</Text>
      {receitas.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/screens/receitas_geral/ReceitaDetalhada?id=${item.id}`)}
        >
          <View style={recipeCardStyles.card}>
            <Image source={item.imagem} style={recipeCardStyles.imagem} />
            <View style={recipeCardStyles.conteudo}>
              <Text style={recipeCardStyles.nome}>{item.nome}</Text>
              <Text style={recipeCardStyles.descricao}>{item.descricao}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
