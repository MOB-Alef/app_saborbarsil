import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { carouselStyles as cStyles, tabScreenStyles as styles } from "../../styles/styles";

export default function Home() {
  const destaques = [
    { titulo: "🍲 Pratos da Semana", descricao: "Confira nossas novidades fresquinhas!", imagem: "https://picsum.photos/800/400?random=1" },
    { titulo: "⭐ Destaque do Mês", descricao: "O prato mais pedido pelos clientes.", imagem: "https://picsum.photos/800/400?random=2" },
    { titulo: "🌍 Pratos Típicos", descricao: "Sabores do mundo inteiro em um só lugar.", imagem: "https://picsum.photos/800/400?random=3" },
  ];

  const categorias = [
    { nome: "Carnes", imagem: require("../../assets/images/img_telas/comidas/carnes.jpg") },
    { nome: "Peixes", imagem: require("../../assets/images/img_telas/comidas/peixe-assado.jpg") },
    { nome: "Sobremesas", imagem: require("../../assets/images/img_telas/comidas/sobremesas.png") },
    { nome: "Bebidas", imagem: require("../../assets/images/img_telas/comidas/bebidas.jpg") },
  ];

  const novidades = [
    { titulo: "Risoto de Cogumelos", imagem: require("../../assets/images/img_telas/comidas/telacogumeslos.png") },
    { titulo: "Brigadeiro Gourmet", imagem: require("../../assets/images/img_sobremesas/Brigadeiro.jpg") },
  ];

  const receitas = [
    { titulo: "Feijoada Completa", imagem: require("../../assets/images/img_telas/comidas/feijoada-Completa.jpg") },
    { titulo: "Moqueca de Peixe", imagem: require("../../assets/images/img_telas/comidas/Moqueca_peixe.jpg") },
    { titulo: "Pão de Queijo", imagem: require("../../assets/images/img_telas/comidas/Pão_de_Queijo.jpg") },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Título das Receitas em Destaque */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>🍲 Receitas em Destaque</Text>

      {/* Carrossel de Destaques */}
      <View style={cStyles.container}>
        <Swiper autoplay autoplayTimeout={4} showsPagination dotStyle={cStyles.dot} activeDotStyle={cStyles.activeDot}>
          {destaques.map((item, index) => (
            <View key={index} style={cStyles.slide}>
              <Image source={{ uri: item.imagem }} style={cStyles.image} />
              <View style={cStyles.overlay}>
                <Text style={cStyles.titulo}>{item.titulo}</Text>
                <Text style={cStyles.descricao}>{item.descricao}</Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      {/* Categorias */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>📂 Categorias</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {categorias.map((cat, index) => (
          <TouchableOpacity key={index} style={{ width: "48%", marginBottom: 15 }}>
            <Image source={cat.imagem} style={{ width: "100%", height: 100, borderRadius: 10 }} />
            <Text style={{ marginTop: 5, fontWeight: "600", textAlign: "center" }}>{cat.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Novidades */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>🆕 Novidades</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {novidades.map((novo, index) => (
          <View key={index} style={{ width: "48%", marginBottom: 15 }}>
            <Image source={novo.imagem} style={{ width: "100%", height: 120, borderRadius: 10 }} />
            <Text style={{ marginTop: 5, fontWeight: "600" }}>{novo.titulo}</Text>
          </View>
        ))}
      </View>

      {/* Lista de Receitas */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>📌 Receitas Populares</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {receitas.map((receita, index) => (
          <View key={index} style={{ width: "48%", marginBottom: 15 }}>
            <Image source={receita.imagem} style={{ width: "100%", height: 120, borderRadius: 10 }} />
            <Text style={{ marginTop: 5, fontWeight: "600" }}>{receita.titulo}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
