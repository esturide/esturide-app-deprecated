import {Text, TouchableOpacity} from "react-native";

interface MyButtonProps {
  onPress: () => void;
  content: string;
}

export default function TouchableText({onPress, content}: MyButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{content}</Text>
    </TouchableOpacity>
  )
}
