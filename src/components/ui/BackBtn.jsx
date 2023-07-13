import IconButton from "./IconButton";
import { COLORS } from "../../common/constants";

export default function BackBtn({onPress}) {
  return (
		<IconButton
			icon="arrow-left"
			color={COLORS.icon}
			size={24}
			onPress={onPress}
		/>
	);
}
/*
						<Pressable
							onPress={() => navigation.navigate("Публикации")}
							style={{ marginLeft: 16 }}
						>
							<Feather name="arrow-left" size={24} color={COLORS.icon} />
						</Pressable> */
