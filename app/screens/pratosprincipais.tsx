import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasPratosPrincipais() {
  const router = useRouter();

  const receitas = [
    {
      id: "feijoada",
      nome: "Feijoada Completa",
      imagem: require("../../assets/images/img_pratos_principais/feijoada.png"),
      descricao: "Prato tradicional brasileiro à base de feijão preto e carnes.",
    },
    {
      id: "moqueca",
      nome: "Moqueca de Peixe",
      imagem: require("../../assets/images/img_telas/comidas/Moqueca_peixe.jpg"),
      descricao: "Deliciosa moqueca com peixe fresco e leite de coco.",
    },
    {
      id: "churrasco",
      nome: "Churrasco",
      imagem: require("../../assets/images/img_pratos_principais/churrasco.png"),
      descricao: "Carnes grelhadas ao estilo brasileiro.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🍖 Pratos Principais</Text>
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
