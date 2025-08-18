import { Text, TouchableOpacity, Image } from "react-native";
import { categoryButtonStyles as styles } from "../styles";

interface Props {
 title: string;
 onPress: () => void;
 image: any;
}

export default function CategoryButton({ title, onPress, image }: Props) {
 return (
  <TouchableOpacity style={styles.container} onPress={onPress}>
   <Image
     source={image}
     style={styles.image}
     resizeMode="cover" // Garante que a imagem preencha o espaço sem distorcer
   />
   <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
 );
}
