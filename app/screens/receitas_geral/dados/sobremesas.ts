export const sobremesas = {
  pudim: {
    nome: "Pudim",
    imagem: require("../../../../assets/images/img_sobremesas/pudim.png"),
    descricao: "Sobremesa clássica brasileira, cremosa e deliciosa.",
    ingredientes: [
      { nome: "Leite condensado", quantidade: "1 lata" },
      { nome: "Leite", quantidade: "2 xícaras" },
      { nome: "Ovos", quantidade: "3 unidades" },
      { nome: "Açúcar", quantidade: "1 xícara" },
    ],
    preparo: "Bata os ingredientes e asse em banho-maria. Deixe esfriar antes de servir.",
  },
  pave: {
    nome: "Pavê",
    imagem: require("../../../../assets/images/img_sobremesas/pave.png"),
    descricao: "Sobremesa gelada com camadas de biscoito e creme.",
    ingredientes: [
      { nome: "Biscoito", quantidade: "200g" },
      { nome: "Creme de leite", quantidade: "400ml" },
      { nome: "Chocolate", quantidade: "100g" },
    ],
    preparo: "Monte camadas de biscoito e creme, finalize com chocolate e refrigere por 2h.",
  },
  torta_limao: {
    nome: "Torta de Limão",
    imagem: require("../../../../assets/images/img_sobremesas/torta_limao.png"),
    descricao: "Torta cítrica e refrescante, perfeita para sobremesa.",
    ingredientes: [
      { nome: "Massa de biscoito", quantidade: "200g" },
      { nome: "Creme de limão", quantidade: "300g" },
      { nome: "Gelatina", quantidade: "1 pacote" },
    ],
    preparo: "Monte a massa, adicione o creme e gelatina, e leve à geladeira por 3h.",
  },
};
