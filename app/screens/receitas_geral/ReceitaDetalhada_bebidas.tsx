import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categoryPageStyles, receitaDetalheStyles } from "../../../styles/styles";
import { bebidas } from "../../dados/bebidas";

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
      {/* Título da receita */}
      <View style={{
        margin: 25,
        padding: 16,
        backgroundColor: "#d9c4a1",
        borderRadius: 20,
        marginBottom: 16,
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#8c3b00",
          textAlign: "center",
        }}>
          {receita.nome}
        </Text>
      </View>

      {/* Conteúdo da receita */}
      <ScrollView
        style={receitaDetalheStyles.container}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 16 }}
      >
        <Image
          source={receita.imagem}
          style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 16 }}
        />

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

      {/* Botão voltar */}
      <TouchableOpacity
        style={[categoryPageStyles.backButton, { position: "absolute", bottom: 16, left: 16, right: 16 }]}
        onPress={() => router.back()}
      >
        <Text style={categoryPageStyles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
