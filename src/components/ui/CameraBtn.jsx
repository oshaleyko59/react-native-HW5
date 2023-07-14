/*
<Plus stroke={COLORS.accent} fill="#fff" width={20} height={20} />
*/
import {
	Pressable,
	StyleSheet,
} from "react-native";
import { Camera } from "react-native-feather";
import { COLORS } from "../../common/constants";

export default function CameraBtn({dark, onPress}) {

  return (
		<Pressable
			style={({ pressed }) => [
				styles.cameraBtnContainer,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			{dark ? (
				<Camera
					stroke={COLORS.secondaryText}
					fill={COLORS.inactive}
					width={24}
					height={24}
				/>
			) : (
				<Camera
					stroke={COLORS.inactive}
					fill={COLORS.secondaryText}
					width={24}
					height={24}
				/>
			)}
		</Pressable>
	);
}

			{/*<MaterialCommunityIcons name="camera" size={24} color={COLORS.inactive} />
			 MaterialCommunityIcons name="camera-outline" */}
const styles = StyleSheet.create({
	cameraBtnContainer: {
		width: 60,
		height: 60,
		backgroundColor: COLORS.mainBkg,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
  },
  pressed: {
		opacity: 0.1,
		backgroundColor: COLORS.accent,
	},
/* 	btnTrash: {
		position: "absolute",
		right: "50%",
		transform: [{ translateX: 20 }],
		bottom: 14,
		marginBottom: 34,
		borderRadius: 20,
		backgroundColor: COLORS.inactiveBkg,
		width: 70,
		height: 40,
		alignItems: "center",
		alignSelf: "center",
	}, */


});
