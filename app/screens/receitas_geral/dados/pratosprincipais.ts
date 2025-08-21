export const pratosPrincipais = {
  feijoada: {
    nome: "Feijoada Completa",
    imagem: require("../../../../assets/images/img_pratos_principais/feijoada.png"),
    descricao: "Prato tradicional brasileiro à base de feijão preto e carnes.",
    ingredientes: [
      { nome: "Feijão preto", quantidade: "500g" },
      { nome: "Carne seca", quantidade: "300g" },
      { nome: "Linguiça", quantidade: "200g" },
      { nome: "Bacon", quantidade: "100g" },
      { nome: "Cebola", quantidade: "1 unidade" },
      { nome: "Alho", quantidade: "3 dentes" },
      { nome: "Louro", quantidade: "2 folhas" },
    ],
    preparo: "Deixe o feijão de molho por 12h. Cozinhe as carnes separadamente. Refogue alho e cebola, junte o feijão, depois as carnes. Cozinhe por 1h30 e sirva com arroz branco e couve.",
  },
  moqueca: {
    nome: "Moqueca de Peixe",
    imagem: require("../../../../assets/images/img_telas/comidas/Moqueca_peixe.jpg"),
    descricao: "Deliciosa moqueca com peixe fresco e leite de coco.",
    ingredientes: [
      { nome: "Peixe branco", quantidade: "1kg" },
      { nome: "Leite de coco", quantidade: "400ml" },
      { nome: "Azeite de dendê", quantidade: "50ml" },
      { nome: "Tomate", quantidade: "3 unidades" },
      { nome: "Pimentão", quantidade: "2 unidades" },
      { nome: "Cebola", quantidade: "1 unidade" },
      { nome: "Coentro", quantidade: "a gosto" },
    ],
    preparo: "Tempere o peixe com sal e limão. Refogue cebola, tomate e pimentão. Coloque o peixe, cubra com leite de coco e azeite de dendê. Cozinhe por 20 minutos. Finalize com coentro.",
  },
  churrasco: {
    nome: "Churrasco",
    imagem: require("../../../../assets/images/img_pratos_principais/churrasco.png"),
    descricao: "Carnes grelhadas ao estilo brasileiro.",
    ingredientes: [
      { nome: "Carne bovina", quantidade: "1kg" },
      { nome: "Sal grosso", quantidade: "a gosto" },
    ],
    preparo: "Tempere a carne com sal grosso e grelhe até o ponto desejado.",
  },
};
