import { Image, ScrollView, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { carouselStyles as cStyles, tabScreenStyles as styles } from "../../styles/styles";

export default function Home() {
  const destaques = [
    {
      titulo: "🍲 Pratos da Semana",
      descricao: "Confira nossas novidades fresquinhas!",
      imagem: "https://picsum.photos/800/400?random=1",
    },
    {
      titulo: "⭐ Destaque do Mês",
      descricao: "O prato mais pedido pelos clientes.",
      imagem: "https://picsum.photos/800/400?random=2",
    },
    {
      titulo: "🌍 Pratos Típicos",
      descricao: "Sabores do mundo inteiro em um só lugar.",
      imagem: "https://picsum.photos/800/400?random=3",
    },
  ];

  const receitas = [
  {
    titulo: "Feijoada Completa",
    imagem: require("../../assets/images/img_pratos_principais/feijoada.png"),
  },
  {
    titulo: "Moqueca de Peixe",
    imagem: require("../../assets/images/img_telas/comidas/Moqueca_peixe.jpg"),
  },
  {
    titulo: "Pão de Queijo",
    imagem: require("../../assets/images/img_telas/comidas/Pão_de_Queijo.jpg"),
  },
];


  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        🍲 Receitas em Destaque
      </Text>

      {/* Carrossel de Destaques */}
      <View style={cStyles.container}>
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination
          dotStyle={cStyles.dot}
          activeDotStyle={cStyles.activeDot}
        >
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

      {/* Lista de Receitas */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>
        📌 Receitas Populares
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {receitas.map((receita, index) => (
          <View key={index} style={{ width: "48%", marginBottom: 15 }}>
            <Image
              style={{ width: "100%", height: 120, borderRadius: 10 }}
            />
            <Text style={{ marginTop: 5, fontWeight: "600" }}>{receita.titulo}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
