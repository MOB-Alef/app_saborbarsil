export const bebidas = {
  caipirinha: {
    nome: "Caipirinha",
    imagem: require("../../assets/images/img_telas/comidas/Caipirinha.jpg"),
    descricao: "Bebida típica brasileira feita com cachaça, limão e açúcar.",
    ingredientes: [
      { nome: "Cachaça", quantidade: "50 ml" },
      { nome: "Limão", quantidade: "1 unidade" },
      { nome: "Açúcar", quantidade: "2 colheres de sopa" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Macere o limão com o açúcar, adicione a cachaça e complete com gelo."
  },
  mojito: {
    nome: "Mojito",
    imagem: require("../../assets/images/img_bebidas/Mojito.png"),
    descricao: "Drink cubano refrescante feito com rum, hortelã e limão.",
    ingredientes: [
      { nome: "Rum branco", quantidade: "50 ml" },
      { nome: "Hortelã", quantidade: "10 folhas" },
      { nome: "Açúcar", quantidade: "2 colheres de sopa" },
      { nome: "Água com gás", quantidade: "100 ml" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Macere hortelã com açúcar, adicione rum, gelo e complete com água com gás."
  },
  margarita: {
    nome: "Margarita",
    imagem: require("../../assets/images/img_bebidas/Margarita.jpg"),
    descricao: "Clássico mexicano com tequila e licor de laranja.",
    ingredientes: [
      { nome: "Tequila", quantidade: "50 ml" },
      { nome: "Licor de laranja", quantidade: "25 ml" },
      { nome: "Suco de limão", quantidade: "25 ml" },
      { nome: "Sal", quantidade: "para borda do copo" },
    ],
    preparo: "Bata tequila, licor e limão no shaker, sirva em copo com borda de sal."
  },
  pinaColada: {
    nome: "Piña Colada",
    imagem: require("../../assets/images/img_bebidas/Piña_Colada.png"),
    descricao: "Coquetel tropical de rum, abacaxi e leite de coco.",
    ingredientes: [
      { nome: "Rum branco", quantidade: "60 ml" },
      { nome: "Suco de abacaxi", quantidade: "100 ml" },
      { nome: "Leite de coco", quantidade: "50 ml" },
      { nome: "Gelo", quantidade: "a gosto" },
    ],
    preparo: "Bata todos os ingredientes no liquidificador e sirva decorado com abacaxi."
  },
  bloodyMary: {
    nome: "Bloody Mary",
    imagem: require("../../assets/images/img_bebidas/Blood_Mary.png"),
    descricao: "Drink de vodka, suco de tomate e especiarias.",
    ingredientes: [
      { nome: "Vodka", quantidade: "50 ml" },
      { nome: "Suco de tomate", quantidade: "100 ml" },
      { nome: "Molho inglês", quantidade: "algumas gotas" },
      { nome: "Pimenta", quantidade: "a gosto" },
      { nome: "Aipo", quantidade: "1 talo" },
    ],
    preparo: "Misture tudo em copo alto com gelo e decore com talo de aipo."
  },
  negroni: {
    nome: "Negroni",
    imagem: require("../../assets/images/img_bebidas/Piña_Colada.png"),
    descricao: "Drink italiano amargo com gin, Campari e vermute.",
    ingredientes: [
      { nome: "Gin", quantidade: "30 ml" },
      { nome: "Campari", quantidade: "30 ml" },
      { nome: "Vermute tinto", quantidade: "30 ml" },
      { nome: "Laranja", quantidade: "1 fatia" },
    ],
    preparo: "Misture todos os ingredientes em copo baixo com gelo e mexa suavemente."
  },
  aperolSpritz: {
    nome: "Aperol Spritz",
    imagem: require("../../assets/images/img_bebidas/Aperol_Spritz.png"),
    descricao: "Drink refrescante com Aperol, espumante e água com gás.",
    ingredientes: [
      { nome: "Aperol", quantidade: "60 ml" },
      { nome: "Espumante", quantidade: "90 ml" },
      { nome: "Água com gás", quantidade: "30 ml" },
      { nome: "Laranja", quantidade: "1 fatia" },
    ],
    preparo: "Monte diretamente no copo com gelo e finalize com fatia de laranja."
  },
  cosmopolitan: {
    nome: "Cosmopolitan",
    imagem: require("../../assets/images/img_bebidas/Cosmopolitan.png"),
    descricao: "Drink sofisticado com vodka, licor de laranja e cranberry.",
    ingredientes: [
      { nome: "Vodka", quantidade: "45 ml" },
      { nome: "Licor de laranja", quantidade: "15 ml" },
      { nome: "Suco de cranberry", quantidade: "30 ml" },
      { nome: "Suco de limão", quantidade: "15 ml" },
    ],
    preparo: "Bata todos os ingredientes com gelo no shaker e sirva coado em taça."
  },
  ginTonica: {
    nome: "Gin Tônica",
    imagem: require("../../assets/images/img_bebidas/Gin_Tônica.jpg"),
    descricao: "Drink simples e refrescante com gin e água tônica.",
    ingredientes: [
      { nome: "Gin", quantidade: "50 ml" },
      { nome: "Água tônica", quantidade: "100 ml" },
      { nome: "Limão siciliano", quantidade: "1 fatia" },
    ],
    preparo: "Sirva gin com gelo, complete com água tônica e finalize com limão."
  },
};
