import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../common/constants";
import IconButton from "../ui/IconButton";

export default function PostCard(post) {
  const { title, place, location, pictureUri, comments } = post;
  function commentsPressHandler() {
		console.log("Comments pressed!");
	}

	function locationPressHandler() {
		console.log("location pressed!>>", location);
	}

	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<Image source={{ pictureUri }} style={styles.img} />
			</View>
			<Text style={[styles.text, styles.colorMain]}>{title}</Text>
			<View style={styles.btnsContainer}>
				<View style={styles.btnContainer}>
					<IconButton
						icon={"message-circle"}
						size={24}
						color={COLORS.icon}
						onPress={commentsPressHandler}
					/>
					<Text style={[styles.text, styles.colorInactive]}>
						{comments.length}
					</Text>
				</View>
				<View style={styles.btnContainer}>
					<IconButton icon={"map-pin"} size={24} color={COLORS.icon} onPress={locationPressHandler} />
					<Text style={[styles.text, styles.colorMain, styles.underlined]}>
						{place}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 299,
		gap: 8,
	},
	imgContainer: {
		width: "100%",
		height: 240,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "green", //TODO:
	},
	img: {},
	btnContainer: { flexDirection: "row", gap: 6 },
	btnsContainer: { flexDirection: "row", justifyContent: "space-between" },
	text: {
		fontSize: 16,
		lineHeight: 19,
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},
	underlined: {
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
	colorInactive: {
		color: COLORS.inactive,
	},
	colorMain: {
		color: COLORS.mainText,
	},
});
