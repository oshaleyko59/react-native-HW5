import { View, ScrollView, StyleSheet } from "react-native"; //
import { useAuthContext } from "../../../store/auth-context";

import UserCard from "../../../components/UserCard";
import PostsList from "../../../components/Posts/PostsList";
import { COLORS } from "../../../common/constants";

import dummyPosts from "../../../models/dummyPost";
function getPosts() {
  return dummyPosts;
}

export default function PostsScreen() {
	const { getUser } = useAuthContext();
	const user = getUser();

	return (
		<View
      style={{
        paddingHorizontal:16,
				flex: 1,
				backgroundColor: COLORS.mainBkg,
			}}
		>
			<View>
				<UserCard user={user} />
			</View>
			<PostsList posts={dummyPosts} />
		</View>
	);
}

const styles = StyleSheet.create({

});
/* const styles = StyleSheet.create({
	container: { flex: 1 },
	camera: { flex: 1 },
	photoView: {
		flex: 1,
		backgroundColor: "transparent",
		justifyContent: "flex-end",
	},

	flipContainer: {
		flex: 0.1,
		alignSelf: "flex-end",
	},

	button: { alignSelf: "center" },

	takePhotoOut: {
		borderWidth: 2,
		borderColor: "white",
		height: 50,
		width: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},

	takePhotoInner: {
		borderWidth: 2,
		borderColor: "white",
		height: 40,
		width: 40,
		backgroundColor: "white",
		borderRadius: 50,
	},
});
 */
