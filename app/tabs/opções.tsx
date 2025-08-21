import { View, Text, TouchableOpacity, ScrollView, Image, Alert, Share } from "react-native";
import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  const itens = [
    {
      titulo: "Login",
      descricao: "Faça login para salvar, criar e compartilhar suas receitas.",
      onPress: () => router.push("/auth/login"),
    },
    {
      titulo: "Assinatura",
      descricao: "Aproveite as funções adicionais da assinatura.",
      onPress: () => router.push("/auth/assinatura"),
    },
    {
      titulo: "Criar receita",
      descricao: "Crie uma receita e compartilhe com os seus amigos.",
      onPress: () => Alert.alert("Criar receita", "Tela de criação de receita ainda não implementada."),
    },
    {
      titulo: "Minhas coleções",
      descricao: "Consulte todas as coleções e adicione receitas.",
      onPress: () => Alert.alert("Minhas coleções", "Tela de coleções ainda não implementada."),
    },
    {
      titulo: "Compartilhe nosso App",
      descricao: "Indique a minha receita e mostre nosso app para amigos.",
      onPress: async () => {
        try {
          await Share.share({
            message: "Conheça o app Sabor Brasil! 🍲",
          });
        } catch {}
      },
    },
    {
      titulo: "Sair",
      descricao: "Sair da sua conta e voltar para a tela de login.",
      onPress: () => router.replace("/auth/login"),
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Cabeçalho */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Perfil</Text>
        {/* Opcional: seu logotipo no canto superior direito */}
        <Image
          source={require("../../assets/images/incons/cook-90.png")} // ajuste o caminho se necessário
          style={{ width: 30, height: 50, resizeMode: "contain", position: "absolute", right: 20, top: 16 }}
        />
      </View>

      {/* Lista */}
      <View style={{ borderTopWidth: 1, borderColor: "#e5e7eb" }}>
        {itens.map((item, index) => (
          <TouchableOpacity
            key={item.titulo}
            onPress={item.onPress}
            activeOpacity={0.7}
            style={{
              paddingVertical: 17,
              paddingHorizontal: 16,
              borderBottomWidth: index === itens.length - 1 ? 0 : 1,
              borderColor: "#e5e7eb",
              backgroundColor: "#fff",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.titulo}</Text>
              <Text style={{ fontSize: 14, color: "#555", marginTop: 4 }}>{item.descricao}</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#555" }}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
