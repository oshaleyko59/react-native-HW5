import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../common/constants";

import DUMMY from "../../models/dummy";
console.log("DUMMY>>", DUMMY);

function getAvatar(authorId) {
	//TODO:
	return Number.parseInt(authorId) < 0.5 ? DUMMY.avatar28 : DUMMY.avatar28_1;
}

export default function CommentCard({ authorId, text, dateTimeStamp }) {
	console.log("CommentCard>>", authorId, text, dateTimeStamp);
	const ava = getAvatar(authorId);
	return (
		<View
			style={[
				styles.container,
				ava === DUMMY.avatar28
					? { flexDirection: "row" }
					: { flexDirection: "row-reverse" },
			]}
		>
			<View style={styles.avatar}>
				<Image source={ava} />
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.text}>{text}</Text>
				<Text style={styles.date}>{dateTimeStamp.toString()}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginBottom: 24,
		gap: 16,
	},
	avatar: {
		width: 28,
		height: 28,
		flexShrink: 0,
		borderRadius: 14,
		overflow: "hidden",
	},
	contentContainer: {
		padding: 16,
	},
	text: {
		fontSize: 13,
		lineHeight: 18,
		color: COLORS.mainText,
		fontFamily: "Roboto-Regular",
		marginBottom: 8,
	},
	date: {
		fontSize: 11,
		lineHeight: 18,
		color: COLORS.inactive,
		fontFamily: "Roboto-Regular",
		marginBottom: 8,
	},
});
