import { Text, TouchableOpacity, Image } from "react-native";
import { categoryButtonStyles as styles } from "../styles/styles";

interface Props {
  title: string;
  onPress: () => void;
  image: any;
}

export default function CategoryButton({ title, onPress, image }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
