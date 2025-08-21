import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { assinaturaStyles as styles } from "../../styles/styles";

export default function Assinatura() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assinatura</Text>
        <View style={styles.spacer} />
      </View>

      {/* Benefícios */}
      <View style={styles.benefitsContainer}>
        {[
          "Receitas avançadas com mais variedade",
          "Sem anuncios",
          "Suporte com IA",
          "Planejador de receitas semanais(IA)",
          "Informações nutricionais de cada receita",
          "Coleções de livros e-boocks",
          "Dieta específica",
        ].map((beneficio, i) => (
          <Text key={i} style={styles.benefitText}>✅ {beneficio}</Text>
        ))}
      </View>

      {/* Teste gratuito */}
      <View style={styles.trialContainer}>
        <View style={styles.trialButton}>
          <Text style={styles.trialText}>3 dias para testar</Text>
        </View>
      </View>

      {/* Planos */}
      <View style={styles.plansContainer}>
        <TouchableOpacity style={styles.planButton}>
          <Text style={styles.planTitle}>Mais Popular</Text>
          <Text style={styles.planDescription}>Plano Mensal + de 2000 receitas</Text>
          <Text style={styles.planPrice}>R$ 9,90/mês</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.planButton}>
          <Text style={styles.planDescription}>Plano Anual + de 5000 receitas</Text>
          <Text style={styles.planPrice}>R$ 99,90/ano</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Assinar */}
      <View>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>Assinar por 9,90/mês</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
