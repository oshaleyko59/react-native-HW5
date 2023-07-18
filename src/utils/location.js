import { COLORS } from "../common/constants";
const GOOGLE_API_KEY = "AIzaSyArxRmovioh9GVM-Vqk3o9YzSuBHrr-RMk"; //TODO: make ENV!!! should not go out

export default function getMapPreview(lat, lng) {
	//TODO: ??? &signature=YOUR_SIGNATURE`
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

	console.log("mapPreviewUrl>>", imagePreviewUrl);
	return imagePreviewUrl;
}
