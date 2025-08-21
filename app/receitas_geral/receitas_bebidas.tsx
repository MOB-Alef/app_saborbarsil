import { ScrollView, View, Text, Image } from "react-native";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasBebidas() {
  const receitas = [
    {
       id: "caipirinha",
      nome: "Caipirinha",
      imagem: "/assets/images/img_telas/comidas/Caipirinha.jpg",
      descricao: "A bebida mais famosa do Brasil, feita com cachaça e limão.",
    },
    {
       id: "suco_acai",
      nome: "Suco de Açaí",
      imagem: "/assets/images/img_telas/comidas/Suco_de_Açaí.jpg",
      descricao: "Refrescante e energético, típico da região amazônica.",
    },
    {
      id: "cafe",
      nome: "Café",
      imagem: "/assets/images/img_telas/comidas/Café_Brasileiro.jpg",
      descricao: "Forte e encorpado, conhecido mundialmente.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🥤 Bebidas</Text>
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
