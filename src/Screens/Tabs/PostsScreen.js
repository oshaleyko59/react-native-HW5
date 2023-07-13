import { View, } from "react-native";//StyleSheet
import { useAuthContext } from "../../store/auth-context";

import UserCard from "../../components/UserCard";
import { COLORS } from "../../common/constants";


export default function PostsScreen() {
		const { getUser } = useAuthContext();
  const user = getUser();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: COLORS.mainBkg,
			}}
		>
			<View>
				<UserCard user={user} />
			</View>

		</View>
	);
}

/* const styles = StyleSheet.create({

}); */

