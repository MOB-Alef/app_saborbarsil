import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasSobremesas() {
  const router = useRouter();

  const receitas = [
    {
      id: "pudim",
      nome: "Pudim",
      imagem: require("../../assets/images/img_sobremesas/pudim.png"),
      descricao: "Sobremesa clássica brasileira, cremosa e deliciosa.",
    },
    {
      id: "pave",
      nome: "Pavê",
      imagem: require("../../assets/images/img_sobremesas/pave.png"),
      descricao: "Sobremesa gelada com camadas de biscoito e creme.",
    },
    {
      id: "torta_limao",
      nome: "Torta de Limão",
      imagem: require("../../assets/images/img_sobremesas/torta_limao.png"),
      descricao: "Torta cítrica e refrescante, perfeita para sobremesa.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🍰 Sobremesas</Text>
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
