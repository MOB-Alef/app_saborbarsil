export const bebidas = {
  caipirinha: {
    nome: "Caipirinha",
    imagem: require("../../../../assets/images/img_telas/comidas/Caipirinha.jpg"),
    descricao: "Bebida típica do Brasil feita com limão e cachaça.",
    ingredientes: [
      { nome: "Cachaça", quantidade: "50ml" },
      { nome: "Limão", quantidade: "1 unidade" },
      { nome: "Açúcar", quantidade: "2 colheres de chá" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Corte o limão em pedaços e macere com o açúcar. Adicione a cachaça e o gelo. Misture bem e sirva.",
  },
  suco_acai: {
    nome: "Suco de Açaí",
    imagem: require("../../../../assets/images/img_telas/comidas/Suco_de_Açaí.jpg"),
    descricao: "Refrescante e energético, típico da região amazônica.",
    ingredientes: [
      { nome: "Polpa de Açaí", quantidade: "200g" },
      { nome: "Banana", quantidade: "1 unidade" },
      { nome: "Mel", quantidade: "2 colheres de sopa" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Bata todos os ingredientes no liquidificador e sirva gelado.",
  },
  cafe: {
    nome: "Café Brasileiro",
    imagem: require("../../../../assets/images/img_telas/comidas/Café_Brasileiro.jpg"),
    descricao: "Forte e encorpado, conhecido mundialmente.",
    ingredientes: [
      { nome: "Café em pó", quantidade: "2 colheres de sopa" },
      { nome: "Água", quantidade: "200ml" },
      { nome: "Açúcar", quantidade: "a gosto" },
    ],
    preparo: "Prepare o café normalmente e adoce a gosto.",
  },
};
