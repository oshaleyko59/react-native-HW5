import { FlatList, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../common/constants";
import PostCard from "./PostCard";

function PostsList({ posts }) {
	if (!posts || posts.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No posts yet - start creating some!
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <PostCard post={item} />}
		/>
	);
}

export default PlacesList;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallbackText: {
		fontSize: 16,
		color: COLORS.mainText,
	},
});
