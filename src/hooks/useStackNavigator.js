import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "../store/auth-context";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegistrationScreen from "../Screens/Auth/RegistrationScreen";
import HomeScreen from "../Screens/Protected/HomeScreen";
import MapScreen from "../Screens/Protected/MapScreen";
import CommentsScreen from "../Screens/Protected/CommentsScreen";
import LogoutBtn from "../components/ui/LogoutBtn";
import Loading from "../components/ui/Loading";
import { COLORS } from "../common/constants";

const MainStack = createStackNavigator();

export function useStackNavigator() {
	function Busy() {
		console.log("RENDER Loading");
		return <Loading msg="Loading..." />;
	}

	function AuthStack() {
		console.log("RENDER AuthStack");
		return (
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				<MainStack.Screen name="Login" component={LoginScreen} />
				<MainStack.Screen name="Signup" component={RegistrationScreen} />
			</MainStack.Navigator>
		);
	}

	function ProtectedStack({ onLogout }) {
		console.log("RENDER ProtectedStack");
		return (
			<MainStack.Navigator
				screenOptions={{
					headerTitleAlign: "center",
					headerStyle: styles.header,
					headerTitleStyle: styles.headerTitle,
					headerRight: () => <LogoutBtn onPress={onLogout} />,
				}}
			>
				<MainStack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name="Map"
					component={MapScreen}
					options={{ title: "Карта" }}
				/>
				<MainStack.Screen
					name="Comments"
					component={CommentsScreen}
					options={{ title: "Коментарі" }}
				/>
			</MainStack.Navigator>
		);
	}

	//NB! transferring isLoading down here in props allowed
	//to get rid of error of inconsistent use of hooks
	function getStackNavigator(isLoading) {
		const { isAuthenticated, logout } = useAuthContext();
		/* console.debug(
			`getStackNavigator>>isAuthenticated=${isAuthenticated}/isLoading=${isLoading}`
		); */

		return isLoading ? (
			<Busy />
		) : isAuthenticated ? (
			<ProtectedStack onLogout={logout} />
		) : (
			<AuthStack />
		);
	}

	return { getStackNavigator };
}

const styles = StyleSheet.create({
	header: {
		height: 88,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.inactive,
	},
	headerTitle: {
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
		fontSize: 17,
	},
});
