import codePush from '@code-push-next/react-native-code-push';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from "react-native";

function App() {
	const [status, setStatus] = useState('Idle');

	const checkOtaUpdate = async () => {
		try {
			setStatus('Checking for OTA update...');

			const update = await codePush.checkForUpdate();

			if (!update) {
				setStatus('No OTA update available');
				Alert.alert('No update', 'Your app is already up to date.');
				return;
			}

			setStatus('Downloading OTA update...');

			await update.download();

			setStatus('Installing OTA update...');

			await codePush.sync({
				installMode: codePush.InstallMode.IMMEDIATE,
			});

			Alert.alert('Updated', 'The app will reload with the latest update.');
		} catch (error) {
			console.error(error);
			setStatus('Update check failed');
			Alert.alert('Update failed', 'Could not check or install OTA update.');
		}
	};

	return (
		<View style={styles.container}>
			<Text>Edit src/app/index.tsx to edit this screen. Hello World!</Text>

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>{status}</Text>
				<Button title="Check OTA Update" onPress={checkOtaUpdate} />
			</View>
		</View>
	);
}

export default codePush(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});


// bitwat_c_eHRyqh6_W2d32y_sfxhePccRCXTNeRfFywXK4dX1PZk5uZyIJm8DZ12zzzo-pPzUeS5qj3h_fbggcukbLc7w_3TyZFf

// curl -H "Authorization: bitwat_c_eHRyqh6_W2d32y_sfxhePccRCXTNeRfFywXK4dX1PZk5uZyIJm8DZ12zzzo-pPzUeS5qj3h_fbggcukbLc7w_3TyZFf" "https://api.bitrise.io/release-management/v1/connected-apps/f3646b32-4750-411d-8658-85d4134ccd80/installable-artifacts/4ff3293a-dcd2-410d-a902-96767134e4a5/upload-url?file_name=test-1&file_size_bytes=101719394"

// curl -X "PUT" -H "Content-Type: application/vnd.android.package-archive" -H "X-Goog-Content-Length-Range: 0,101719394" --upload-file ~/Downloads/test-1.apk "https://storage.googleapis.com/installable-artifacts-storage-prod/platforms/android/apps/f3646b32-4750-411d-8658-85d4134ccd80/artifacts/4ff3293a-dcd2-410d-a902-96767134e4a5/test-1.apk?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=rm-storage-service-sa%40ip-release-automation-prod.iam.gserviceaccount.com%2F20260602%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260602T110130Z&X-Goog-Expires=3599&X-Goog-Signature=0b1c29024473fa4077c4d9ca826d7a26ec4a6cb59d139cf2e33ba51037c11d1aff88b20db8128754a1b2ee9f201039b841ec960cdff06339116e7929f39c926aab782d0d7af13a2387d623b4509a6213b23e30963ea971aa6281fa7a91a16b3df91ef562e77d2caf8913e39e7c400209cd14aebdb87f0abc3899484048123210472e5cb083c2efd8908c9ae7dc4250894f31718718d9ca5d9c22037cea6be9db4ae5fc269401b2423dc3d97aae17f416809c77a064acdd25b36049a240e9fbca0489d01d400fcf1c8d9ce969b460ec7a390244d67abd8f39a654b0c52e9f3beb57d211a93c8760104771c00a45b6eb04732fd730aa1bc087b2d7b116b9800041&X-Goog-SignedHeaders=content-type%3Bhost%3Bx-goog-content-length-range"

// curl -H "Authorization: bitwat_c_eHRyqh6_W2d32y_sfxhePccRCXTNeRfFywXK4dX1PZk5uZyIJm8DZ12zzzo-pPzUeS5qj3h_fbggcukbLc7w_3TyZFf" "https://api.bitrise.io/release-management/v1/connected-apps/f3646b32-4750-411d-8658-85d4134ccd80/installable-artifacts/4ff3293a-dcd2-410d-a902-96767134e4a5/status"