import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useAuthContext } from "../../store/auth-context";
import PostsScreen from '../Tabs/PostsScreen';
import ProfileScreen from "../Tabs/ProfileScreen";
import CreatePostsScreen from "../Tabs/CreatePostsScreen";

import LogoutBtn from "../../components/ui/LogoutBtn";
import BackBtn from "../../components/ui/BackBtn";
import { COLORS } from "../../common/constants";

const BottomTab = createBottomTabNavigator();

const Grid = () => <Feather name="grid" size={24} color={COLORS.icon} />;
const User = () => <Feather name="user" size={24} color={COLORS.icon} />;
const New = () => (
	<View style={styles.newBtn}>
		<Feather name="plus" size={24} color={COLORS.secondaryText} />
	</View>
);

export default function HomeScreen({ navigation }) {
  const { logout } = useAuthContext();

	return (
		<BottomTab.Navigator
			initialRouteName="Publications"
			screenOptions={{
				headerTitleAlign: "center",
				headerStyle: styles.header,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
				headerTitleStyle: styles.headerTitle,
			}}
		>
			<BottomTab.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					title: "Публікації",
					tabBarIcon: ({ focused, size, color }) => <Grid />,
					headerRight: () => <LogoutBtn onPress={logout} />,
				}}
			/>
			<BottomTab.Screen
				name="CreatePosts"
				component={CreatePostsScreen}
				options={{
					title: "Створити публікацію",
					tabBarIcon: ({ focused, size, color }) => <New />,
					headerLeft: () => <BackBtn onPress={() => navigation.navigate("Posts")} />,
					tabBarStyle: { display: "none" },
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, size, color }) => <User/>,
					headerShown: false,
				}}
			/>
		</BottomTab.Navigator>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 88,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.inactive,
	},

	tabBar: {
		justifyContent: "center",
		alignItems: "center",
		height: 83,
		borderTopWidth: 1,
		borderTopColor: COLORS.inactive,
	},
	newBtn: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.accent,
		width: 70,
		height: 40,
		borderRadius: 20,
	},
});

