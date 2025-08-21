import { ScrollView, View, Text, Image } from "react-native";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasBebidas() {
  const receitas = [
    {
      nome: "Pudim",
      imagem: "/assets/images/img_sobremesas/pudim.png",
      descricao: "A bebida mais famosa do Brasil, feita com cachaça e limão.",
    },
    {
      nome: "Suco de Abacaxi",
      imagem: "/assets/images/img_bebidas/suco_abacaxi.jpg",
      descricao: "Refrescante e energético, típico da região amazônica.",
    },
    {
      nome: "Café Brasileiro",
      imagem: "/assets/images/img_telas/comidas/Café_Brasileiro.jpg",
      descricao: "Forte e encorpado, conhecido mundialmente.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🥤 Sobremesas</Text>
      {receitas.map((item, index) => (
        <View key={index} style={recipeCardStyles.card}>
          <Image source={{ uri: item.imagem }} style={recipeCardStyles.imagem} />
          <View style={recipeCardStyles.conteudo}>
            <Text style={recipeCardStyles.nome}>{item.nome}</Text>
            <Text style={recipeCardStyles.descricao}>{item.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
