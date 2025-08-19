// styles/styles.ts
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
// Páginas de Categorias
// --------------------
export const categoryPageStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.branco, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: COLORS.preto, marginBottom: 20 },
  buttonContainer: { gap: 15 },
  backButton: { marginTop: 30, backgroundColor: COLORS.laranjaQueimado, padding: 15, borderRadius: 10 },
  backButtonText: { color: COLORS.branco, textAlign: "center", fontWeight: "bold" },
});

// --------------------
// Telas das abas (Início / Categorias / Favoritos)
// --------------------
export const tabScreenStyles = StyleSheet.create({
  container: { flex: 1,backgroundColor: COLORS.branco, padding: 20 },
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
