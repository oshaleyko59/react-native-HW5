import { useState, useEffect } from "react";
import {
	Text,
	TextInput,
	View,
	ScrollView,
	StyleSheet,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from "expo-location";
import { Feather } from "@expo/vector-icons";

import MainBtn from "../ui/MainBtn";
import TrashBtn from "../ui/TrashBtn";
import { COLORS } from "../../common/constants";
import ImageTaker from "./ImageTaker";

//TODO: verify both camera and location permissions at the beginning? here..,

export default function PostForm() {
	const navigation = useNavigation();
	const [title, setTitle] = useState("");
	const [place, setPlace] = useState("");
	const [location, setLocation] = useState(null);
	const [picture, setPicture] = useState(null);

	const [cameraIconDark, setCameraDark] = useState(true); //TODO:
	const [locationPermission, requestPermission] = useForegroundPermissions();

	function clearPost() {
		setPicture(null);
		setPlace("");
		setTitle("");
		setLocation(null);
	}

	function toTrashHandler() {
		clearPost();
	}

	async function verifyLocationPermissions() {
		if (locationPermission.status === PermissionStatus.GRANTED) {
			return true;
    }

		// PermissionStatus.UNDETERMINED ||	 PermissionStatus.DENIED
		const permissionResponse = await requestPermission();
		if (permissionResponse.granted) {
			return true;
		}

		Alert.alert(
			"Location use is not permitted!",
			"Pls grant location permissions to enjoy full functionality of the app."
		);
		return false;
	}

	async function publishHandler() {
		const newPostReady = !!title && !!place && !!location && !!picture;
		if (!newPostReady) {
			Alert.alert(
				"New post not completed!",
				" Pls take picture and fill in required fields, then press Publish, or discard the post"
      );
      return;
    }

    const newPost = { title, place, location, picture, comments:[]};

    console.info("Publish>>post", newPostReady, newPost); //TODO: upload

    clearPost();
		navigation.navigate("Posts");
	}

	async function takePictureHandler(uri) {
		setPicture(uri);
		const hasPermission = await verifyLocationPermissions();

		if (!hasPermission) {
			setLocation({ lat: 999, lng: 999 }); //location denied
		} else {
			const location = await getCurrentPositionAsync();
			setLocation({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			});
		}
	}

	//TODO: is Upload photo a button? Nothing about it in Tech specs...

	return (
		<ScrollView style={styles.form}>
			<View style={styles.container}>
				<ImageTaker picture={picture} onTakePicture={takePictureHandler} />
				<Text style={styles.text}>Завантажте фото</Text>
				<TextInput
					value={title}
					placeholder="Назва..."
					placeholderTextColor={COLORS.inactive}
					style={[styles.input, { marginTop: 32 }]}
					onChangeText={(value) => setTitle(value)}
        />
        <View style={styles.inputContainer}>
				<Feather
					name="map-pin"
					size={24}
					color={COLORS.inactive}
					style={styles.icon}
				/>
				<TextInput
					value={place}
					placeholder="Місцевість..."
					placeholderTextColor={COLORS.inactive}
					style={[styles.input, { marginBottom: 32 }]}
					onChangeText={(value) => setPlace(value)}
				/></View>
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
  inputContainer: {
    flex:1,
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: COLORS.borderGray,
	},
	icon: { marginRight: 4 },

	positionTrash: {
		/* 		position: "absolute",
		right: "50%",
		transform: [{ translateX: 20 }],
		bottom: 14, */
		alignSelf: "center",
		marginBottom: 34,
	},
});
