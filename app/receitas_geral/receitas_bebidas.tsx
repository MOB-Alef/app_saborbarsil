import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { categoryPageStyles, recipeCardStyles } from "../../styles/styles";
import { bebidas } from "../dados/bebidas";

export default function ReceitasBebidas() {
  const router = useRouter();

  return (
    <ScrollView style={categoryPageStyles.container}>
      <Text style={categoryPageStyles.title}>🥤 Bebidas</Text>

      {Object.entries(bebidas).map(([id, bebida]) => (
        <TouchableOpacity
          key={id}
          onPress={() => router.push(`/screens/receitas_geral/ReceitaDetalhada_bebidas?id=${id}`)}
        >
          <View style={recipeCardStyles.card}>
            <Image source={bebida.imagem} style={recipeCardStyles.imagem} />
            <View style={recipeCardStyles.conteudo}>
              <Text style={recipeCardStyles.nome}>{bebida.nome}</Text>
              <Text style={recipeCardStyles.descricao}>{bebida.descricao}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
