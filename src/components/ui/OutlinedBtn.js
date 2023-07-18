import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../common/constants";

export default function OutlinedBtn({ onPress, icon, children }) {
	return (
    <Pressable onPress={onPress} style={(pressed)=>[styles.button, pressed && styles.pressed]}>
      <Ionicons name={icon} size={24} color={COLORS.accent} style={styles.icon} />
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.mainText,
  },
  pressed: {opacity:0.7},
  icon: {marginRight:6},
  text:{color:COLORS.mainText},
});
