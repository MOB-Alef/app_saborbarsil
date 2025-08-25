import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";

export default function ReceitasPratosPrincipais() {
  const router = useRouter();

  const receitas = [
    {
      id: "feijoada",
      nome: "Feijoada Completa",
      imagem: require("../../assets/images/img_pratos_principais/feijoada-Completa.jpg"),
      descricao: "Prato tradicional brasileiro à base de feijão preto e carnes.",
    },
    {
      id: "moqueca",
      nome: "Moqueca de Peixe",
      imagem: require("../../assets/images/img_pratos_principais/Moqueca_peixe.jpg"),
      descricao: "Deliciosa moqueca com peixe fresco e leite de coco.",
    },
    {
      id: "churrasco",
      nome: "Churrasco",
      imagem: require("../../assets/images/img_pratos_principais/churrasco.png"),
      descricao: "Carnes grelhadas ao estilo brasileiro.",
    },
    {
      id: "bobozinho",
      nome: "Bobozinho",
      imagem: require("../../assets/images/img_pratos_principais/Bobó_de_Camarão.jpg"),
      descricao: "Prato típico da Bahia, feito com peixe e camarão.",
    },
    {
      id: "estrogonofe",
      nome: "Escondidinho de Carne Seca",
      imagem: require("../../assets/images/img_pratos_principais/Estrogonofe_Carne.png"),
      descricao: "Prato cremoso com carne, cogumelos e molho especial.",
    },
    {
      id: "escondidinho",
      nome: "Escondidinho",
      imagem: require("../../assets/images/img_pratos_principais/Escondidinho_de_Carne_Seca.png"),
      descricao: "Prato de camadas com purê de batata e carne desfiada.",
    },
  ];

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🍖 Pratos Principais</Text>
      {receitas.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/screens/receitas_geral/ReceitaDetalhada_pratosprincipais?id=${item.id}`)}>
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
