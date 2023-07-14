import { useState, useEffect, useRef } from "react";
import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import MainBtn from "../../components/ui/MainBtn";
import CameraBtn from "../../components/ui/CameraBtn";
import TrashBtn from "../../components/ui/TrashBtn";
import { COLORS } from "../../common/constants";

export default function CreatePostsScreen({ navigation }) {
	const [kbdStatus, setKbdStatus] = useState(false);
	const [cameraIconDark, setCameraDark] = useState("true");

	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
	const [picture, setPicture] = useState(null);

	async function takePicture() {
		if (cameraRef) {
			const { uri } = await cameraRef.takePictureAsync();
			setPicture(uri);

			await MediaLibrary.createAssetAsync(uri); //???
			/* let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    const photoLocation = await Location.getCurrentPositionAsync({});

    const coords = {
      latitude: photoLocation.coords.latitude,
      longitude: photoLocation.coords.longitude,
    };

    setPhotoLocation(coords); */
		}
	}

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	function onPress() {
		//TODO:
		console.log("Pressed!");
	}
	function onPublish() {
		//TODO:
		console.log("Publish!");
	}
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
					{!kbdStatus && (
							<Camera style={styles.camera} ref={setCameraRef}>
								<CameraBtn dark={cameraIconDark} onPress={takePicture} />
							</Camera>
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
			<MainBtn title={"Опубліковати"} />
			<View style={styles.positionTrash}>
				<TrashBtn active={false} onPress={onPublish} />
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

	positionTrash: {
		position: "absolute",
		right: "50%",
		transform: [{ translateX: 20 }],
		bottom: 14,
		marginBottom: 34,
	},

	camera: {
		width: "100%",
		height: 200,
		backgroundColor: COLORS.inactiveBkg,
		borderWidth: 1,
		borderColor: COLORS.borderGray,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
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
});
