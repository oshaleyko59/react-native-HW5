import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export default function MapScreen() {
  const route = useRoute();
  const { lat, lng } = route.params.location;
	return (
		<View style={styles.container}>
			<Text>
				Map Screen for {lat}, {lng}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
