import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { receitaDetalheStyles, categoryPageStyles } from "../../../styles/styles";
import { bebidas } from "./dados/bebidas";

export default function ReceitaDetalhadaBebidas() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const receitaId = params.id as keyof typeof bebidas;
  const receita = bebidas[receitaId];

  if (!receita) {
    return (
      <View style={receitaDetalheStyles.container}>
        <Text>Receita não encontrada!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={receitaDetalheStyles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        <Image source={receita.imagem} style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 16 }} />
        <Text style={receitaDetalheStyles.titulo}>{receita.nome}</Text>

        <Text style={receitaDetalheStyles.subtitulo}>Ingredientes</Text>
        <View style={receitaDetalheStyles.card}>
          {receita.ingredientes.map((item, index) => (
            <Text key={index} style={receitaDetalheStyles.listaItem}>
              • {item.nome}: {item.quantidade}
            </Text>
          ))}
        </View>

        <Text style={receitaDetalheStyles.subtitulo}>Modo de Preparo</Text>
        <View style={receitaDetalheStyles.card}>
          <Text style={receitaDetalheStyles.passo}>{receita.preparo}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[categoryPageStyles.backButton, { position: "absolute", bottom: 16, left: 16, right: 16 }]}
        onPress={() => router.back()}
      >
        <Text style={categoryPageStyles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
