import { useState, useEffect } from "react";
import {
	Text,
	TextInput,
	View,
	ScrollView,
	StyleSheet,
	Alert,
	TouchableOpacity,
} from "react-native";

import { Camera } from "expo-camera";

import MainBtn from "../ui/MainBtn";

import TrashBtn from "../ui/TrashBtn";
import { COLORS } from "../../common/constants";
import ImageTaker from "./ImageTaker";
import Loading from "../ui/Loading";

export default function PostForm() {
	const [title, setTitle] = useState("");
	const [place, setPlace] = useState("");
	const [cameraIconDark, setCameraDark] = useState(true); //TODO:

	const [hasPermission, setHasPermission] = useState(null);

	function toTrashHandler() {
		console.log("To trash pressed!");
  }

	function publishHandler() {
		console.log("Publish pressed!");
  }

  function takePictureHandler() {
		console.log("Take image pressed!");
  }

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			console.log("useEffect>>status", status);
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <Loading msg="Checking camera permissions..." />;
	}

	if (hasPermission === false) {
		Alert.alert(
			"Insufficient Permissions!",
			"Please grant camera permissions to use this app."
		);
		return <Text>No access to camera</Text>;
	}
	//TODO: is Upload photo a button? Nothing about it in Tech specs...

	return (
		<ScrollView style={styles.form}>
			<View style={styles.container}>
				<ImageTaker onTakePicture={takePictureHandler} />
				<Text style={styles.text}>Завантажте фото</Text>
				<TextInput
					value={title}
					placeholder="Назва..."
					placeholderTextColor={COLORS.inactive}
					style={[styles.input, { marginTop: 32 }]}
					onChangeText={(value) => setTitle(value)}
				/>
				<TextInput
					value={place}
					placeholder="Місцевість..."
					placeholderTextColor={COLORS.inactive}
					style={[styles.input, { marginBottom: 32 }]}
					onChangeText={(value) => setPlace(value)}
				/>
			</View>
			<View style={styles.controlsContainer}>
				<MainBtn title={"Опубліковати"} onPress={publishHandler} />
				<TrashBtn style={styles.positionTrash} onPress={toTrashHandler} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		backgroundColor: COLORS.mainBkg,
		paddingHorizontal: 16,
		paddingTop: 32,
		paddingBottom: 34,
	},
	text: {
		marginTop: 8,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: COLORS.inactive,
		lineHeight: 19,
	},
	input: {
		marginTop: 16,
		width: "100%",
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.borderGray,
	},
	container: { flex: 1 },
	controlsContainer: {
		flex: 2,
		justifyContent: "flex-end",
	},

	positionTrash: {
		/* 		position: "absolute",
		right: "50%",
		transform: [{ translateX: 20 }],
		bottom: 14, */
		alignSelf: "center",
		marginBottom: 34,
	},
});
