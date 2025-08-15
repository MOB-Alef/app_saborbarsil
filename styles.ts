import { StyleSheet } from "react-native";

export const COLORS = {
  amareloMostarda: "#f0c94a",
  laranjaQueimado: "#d97d3b",
  cinzaEscuro: "#5a5a5a",
  preto: "#000000",
  branco: "#FFFFFF",
  marromEscuro: "#2e2521",
  creme: "#fef5d9",
  marromAvermelhado: "#8c3b00",
  cinzaClaro: "#8a8a8a",
};

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.amareloMostarda,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 24,
    color: COLORS.cinzaEscuro,
    fontWeight: "bold",
  },
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.marromEscuro,
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.marromAvermelhado,
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.cinzaClaro,
    marginBottom: 20,
  },
});
