import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	TextInput,
} from "react-native";
import { COLORS } from "../../common/constants";
import IconButton from "../../components/ui/IconButton";
import AuthMainBtn from "../../components/ui/AuthMainBtn";
import AuthContent from "../../components/auth/AuthContent";

export default function CreatePostsScreen({ navigation }) {
	const [kbdStatus, setKbdStatus] = useState(false);

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
					{!kbdStatus && (
						<View style={styles.photo}>
							<View style={styles.cameraBtnContainer}>
								<IconButton name="camera" size={24} color={COLORS.inactive} />
							</View>
						</View>
					)}
					<Text style={styles.text}>Завантажте фото</Text>
					<TextInput
						placeholder="Назва..."
						placeholderTextColor={COLORS.inactive}
						style={[styles.input, styles.titleInput]}
					/>
					<TextInput
						placeholder="Місцевість..."
						placeholderTextColor={COLORS.inactive}
						style={[styles.input, { marginBottom: 32 }]}
					/>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
			<AuthMainBtn title={"Опубліковати"} />
			<View style={styles.btn}>
				<IconButton icon="trash-2" size={24} color={COLORS.inactive} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.mainBkg,
		paddingHorizontal: 16,
		paddingTop: 28,
	},
	photo: {
		width: "100%",
		height: 240,
		backgroundColor: COLORS.inactiveBkg,
		borderWidth: 1,
		borderColor: COLORS.borderGray,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	cameraBtnContainer: {
		width: 60,
		height: 60,
		backgroundColor: COLORS.mainBkg,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	text: {
		marginTop: 8,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: COLORS.inactive,
		lineHeight: 19,
	},
	titleInput: {
		marginTop: 32,
	},
	input: {
		marginTop: 16,
		width: "100%",
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.borderGray,
	},
	btn: {
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
	},
});
