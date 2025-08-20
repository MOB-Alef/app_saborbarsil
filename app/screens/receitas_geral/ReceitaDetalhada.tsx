import { ScrollView, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Corrigido
import { recipeCardStyles, categoryPageStyles } from "../../../styles/styles";

const receitasDetalhadas = {
  feijoada: {
    nome: "Feijoada Completa",
    imagem: require("../../../assets/images/img_pratos_principais/feijoada.png"),
    ingredientes: [
      { nome: "Feijão preto", quantidade: "500g" },
      { nome: "Carne seca", quantidade: "300g" },
      { nome: "Linguiça", quantidade: "200g" },
      { nome: "Bacon", quantidade: "100g" },
      { nome: "Cebola", quantidade: "1 unidade" },
      { nome: "Alho", quantidade: "3 dentes" },
      { nome: "Louro", quantidade: "2 folhas" },
    ],
    preparo: "Deixe o feijão de molho por 12h. Cozinhe as carnes separadamente. Refogue alho e cebola, junte o feijão, depois as carnes. Cozinhe por 1h30 e sirva com arroz branco e couve.",
  },
  moqueca: {
    nome: "Moqueca de Peixe",
    imagem: require("../../../assets/images/img_telas/comidas/Moqueca_peixe.jpg"),
    ingredientes: [
      { nome: "Peixe branco", quantidade: "1kg" },
      { nome: "Leite de coco", quantidade: "400ml" },
      { nome: "Azeite de dendê", quantidade: "50ml" },
      { nome: "Tomate", quantidade: "3 unidades" },
      { nome: "Pimentão", quantidade: "2 unidades" },
      { nome: "Cebola", quantidade: "1 unidade" },
      { nome: "Coentro", quantidade: "a gosto" },
    ],
    preparo: "Tempere o peixe com sal e limão. Refogue cebola, tomate e pimentão. Coloque o peixe, cubra com leite de coco e azeite de dendê. Cozinhe por 20 minutos. Finalize com coentro.",
  },
  caipirinha: {
    nome: "Caipirinha",
    imagem: require("../../../assets/images/img_telas/comidas/Caipirinha.jpg"),
    ingredientes: [
      { nome: "Cachaça", quantidade: "50ml" },
      { nome: "Limão", quantidade: "1 unidade" },
      { nome: "Açúcar", quantidade: "2 colheres de chá" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Corte o limão em pedaços e macere com o açúcar. Adicione a cachaça e o gelo. Misture bem e sirva.",
  },
};

export default function ReceitaDetalhada() {
  const params = useLocalSearchParams();
  const receitaId = params.id as keyof typeof receitasDetalhadas;
  const receita = receitasDetalhadas[receitaId];

  if (!receita) {
    return (
      <View style={categoryPageStyles.container}>
        <Text>Receita não encontrada!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={recipeCardStyles.nome}>{receita.nome}</Text>
      <Image source={receita.imagem} style={recipeCardStyles.imagem} />

      <Text style={[recipeCardStyles.nome, { marginTop: 15 }]}>Ingredientes</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index} style={recipeCardStyles.descricao}>
          • {item.nome}: {item.quantidade}
        </Text>
      ))}

      <Text style={[recipeCardStyles.nome, { marginTop: 15 }]}>Modo de Preparo</Text>
      <Text style={recipeCardStyles.descricao}>{receita.preparo}</Text>
    </ScrollView>
  );
}
