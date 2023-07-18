import { useState } from "react";
import { View, Alert, Image, Text, StyleSheet } from "react-native";

import { Camera } from "expo-camera";

import CameraBtn from "../ui/CameraBtn";
//import OutlinedBtn from "../ui/OutlinedBtn";
import { COLORS } from "../../common/constants";

export default function ImageTaker({ onTakePicture }) {
	const [takenImage, setTakenImage] = useState();

	/* 	async function onTakeImage() {
		console.log("take photo>>pressed");
	} */

	/* 	const preview = takenImage ? (
		<Image source={{ uri: takenImage }} style={styles.image} />
	) : (
		<Text>No image yet</Text>
	);
 */

	return (
		<View style={styles.container}>
			<Camera style={styles.camera}>
				<CameraBtn dark={true} onPress={onTakePicture} />
			</Camera>
		</View>
	);

	/* 	return (
		<View style={styles.container}>
			<Camera
				style={styles.camera}
				type={CameraType.back}
				ration="16:9"
			></Camera>
			<OutlinedBtn icon="camera" onPress={onTakeImage}>
				Take image
			</OutlinedBtn>
		</View>
	); */
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	camera: {
		width: "100%",
		height: 240,
		borderRadius: 40,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	/* 	container: {
		width: "100%",
		height: 300,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.inactiveBkg,
		borderRadius: 4,
		overflow: "hidden",
	},

	camera: {
		flex: 1,
  }, */

	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});
