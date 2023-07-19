import { View, ScrollView, FlatList, StyleSheet } from "react-native"; //
import { useAuthContext } from "../../../store/auth-context";

import UserCard from "../../../components/UserCard";
import { COLORS } from "../../../common/constants";

import dummyPosts from "../../../models/dummyPost";
function getPosts() {
  return dummyPosts;
}

export default function PostsScreen() {
	const { getUser } = useAuthContext();
	const user = getUser();

	return (
		<ScrollView
			style={{
				flex: 1,
				//justifyContent: "space-between",
				backgroundColor: COLORS.mainBkg,
			}}
		>
			<View>
				<UserCard user={user} />
      </View>
      <FlatList />
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
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
