import { ScrollView, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { recipeCardStyles, categoryPageStyles } from "../../../styles/styles";
import { pratosPrincipais } from "./dados/pratosprincipais";

export default function ReceitaDetalhadaPratosPrincipais() {
  const params = useLocalSearchParams();
  const receitaId = params.id as keyof typeof pratosPrincipais;
  const receita = pratosPrincipais[receitaId];

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
