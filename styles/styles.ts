import { StyleSheet } from "react-native";

export const COLORS = {
  amareloMostarda: "#f0c94a",
  laranjaQueimado: "#d97d3b",
  cinzaEscuro: "#5a5a5a",
  preto: "#000000",
  branco: "#FFFFFF",
  creme: "#fef5d9",
  marromAvermelhado: "#8c3b00",
  cinzaClaro: "#8a8a8a",
  verde: "#67c64a",
  azulPetroleo: "#457B9D",
  inputBackground: "#FFFFFF",
};

// --------------------
// Splash / Welcome
// --------------------
export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.branco,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contentContainer: { alignItems: "center" },
  logo: { width: 150, height: 150, marginBottom: 20, borderRadius: 75 },
  text: { fontSize: 24, color: COLORS.preto, fontWeight: "bold", marginBottom: 30 },
  button: {
    backgroundColor: COLORS.verde,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.branco,
    fontSize: 18,
    fontWeight: "bold",
  },
  // --- CORREÇÃO APLICADA AQUI ---
  // Adicionei os estilos do botão circular diretamente aqui
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.cinzaEscuro,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.preto,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  circleButtonText: {
    fontSize: 28,
    color: COLORS.branco,
  },
});

// --------------------
// Login / Register
// --------------------
export const loginStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, color: COLORS.preto, fontWeight: "bold", textAlign: "center", marginBottom: 30 },
  label: { fontSize: 16, color: COLORS.preto, marginTop: 10 },
  input: { backgroundColor: COLORS.inputBackground, color: COLORS.preto, borderRadius: 8, padding: 10, marginTop: 5 },
  optionsContainer: { marginVertical: 20 },
  option: { fontSize: 16, color: COLORS.cinzaClaro, marginVertical: 5 },
  optionSelected: { fontSize: 16, color: COLORS.preto, fontWeight: "bold", marginVertical: 5 },
  button: { backgroundColor: COLORS.verde, padding: 15, borderRadius: 8, marginTop: 10 },
  buttonText: { color: COLORS.branco, textAlign: "center", fontWeight: "bold", fontSize: 18 },
});

// --------------------
// Página de Categorias
// --------------------
export const categoryPageStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: COLORS.preto, marginBottom: 20 },
  buttonContainer: { gap: 15 },
  backButton: { marginTop: 30, backgroundColor: COLORS.laranjaQueimado, padding: 15, borderRadius: 10 },
  backButtonText: { color: COLORS.branco, textAlign: "center", fontWeight: "bold" },
});

// --------------------
// Estilo para Receitas (Cards)
// --------------------
export const recipeCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  imagem: {
    width: "100%",
    height: 180,
  },
  conteudo: {
    padding: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: COLORS.preto,
  },
  descricao: {
    fontSize: 14,
    color: COLORS.cinzaEscuro,
  },
});

// --------------------
// Telas das abas (Início / Categorias / Favoritos)
// --------------------
export const tabScreenStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco, padding: 20 },
  buttonContainer: { gap: 15 },
});

// --------------------
// Botão de Categoria Reutilizável
// --------------------
export const categoryButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.creme,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
  },
  title: { color: COLORS.preto, fontSize: 18, fontWeight: "bold" },
});

// --------------------
// Carrossel de Destaques (Home)
// --------------------
export const carouselStyles = StyleSheet.create({
  container: { height: 250, marginBottom: 20 },
  slide: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 250, borderRadius: 12 },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 8,
  },
  titulo: { color: COLORS.branco, fontSize: 18, fontWeight: "bold", marginBottom: 4 },
  descricao: { color: COLORS.branco, fontSize: 14 },
  dot: { backgroundColor: "rgba(255,255,255,0.3)", width: 8, height: 8, borderRadius: 4, margin: 3 },
  activeDot: { backgroundColor: COLORS.branco, width: 10, height: 10, borderRadius: 5, margin: 3 },
});


// --------------------
// Estilos de Modal
// --------------------
export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: COLORS.branco,
    padding: 20,
    borderRadius: 12,
    width: 250,
    alignItems: "center",
  },
  optionButton: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: COLORS.azulPetroleo,
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    color: COLORS.branco,
    fontSize: 16,
  },
});

// --------------------
// Perfil (aba de usuário)
// --------------------
export const perfilStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco },
  header: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8, alignItems: "center" },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: COLORS.preto },
  logo: { width: 30, height: 50, resizeMode: "contain", position: "absolute", right: 20, top: 16 },
  listContainer: { borderTopWidth: 1, borderColor: "#e5e7eb" },
  listItem: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: COLORS.branco,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemLast: { borderBottomWidth: 0 },
  itemTextContainer: { flex: 1, paddingRight: 12 },
  itemTitle: { fontSize: 16, fontWeight: "bold", color: COLORS.preto },
  itemDescription: { fontSize: 14, color: "#555", marginTop: 4 },
  arrow: { fontSize: 18, color: "#555" },
});

// --------------------
// Receitas (geral)
// --------------------
export const receitasStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.branco, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: COLORS.preto },
  description: { fontSize: 16, color: COLORS.cinzaEscuro, textAlign: "center" },
});

// --------------------
// Assinatura
// --------------------
export const assinaturaStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco, paddingBottom: 24 },
  header: { flexDirection: "row", alignItems: "center", padding: 16 },
  backButton: { fontSize: 24 },
  headerTitle: { flex: 1, textAlign: "center", fontSize: 20, fontWeight: "bold", color: COLORS.preto },
  spacer: { width: 24 },
  benefitsContainer: { marginHorizontal: 16, backgroundColor: "#f7d86c", borderRadius: 8, padding: 16, marginBottom: 16 },
  benefitText: { fontSize: 16, marginVertical: 4 },
  trialContainer: { alignItems: "center", marginBottom: 16 },
  trialButton: { backgroundColor: "#88c053", paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20 },
  trialText: { color: COLORS.branco, fontWeight: "bold" },
  plansContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 16 },
  planButton: { borderWidth: 1, borderColor: "#88c053", borderRadius: 8, padding: 16, width: "45%" },
  planTitle: { fontWeight: "bold", marginBottom: 4, color: "#88c053" },
  planDescription: { fontWeight: "bold" },
  planPrice: { color: "#555", marginTop: 4 },
  subscribeButton: { backgroundColor: "#88c053", borderRadius: 8, paddingVertical: 16, alignItems: "center", marginHorizontal: 16 },
  subscribeText: { color: COLORS.branco, fontWeight: "bold", fontSize: 16 },
});