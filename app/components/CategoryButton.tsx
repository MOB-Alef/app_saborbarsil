import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../styles";

interface Props {
  title: string;
  onPress: () => void;
}

export default function CategoryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.creme,
        padding: 20,
        borderRadius: 12,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.preto, fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
}
