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

			const downloadRes = await update.download();
			console.log('Download result:', downloadRes);

			setStatus('Installing OTA update...');

			const result = await codePush.sync(
				{ installMode: codePush.InstallMode.IMMEDIATE },
				(status) => console.log('CodePush status:', status),
				(progress) => console.log('CodePush progress:', progress.receivedBytes, progress.totalBytes)
			);

			console.log('CodePush result:', result);

			Alert.alert('Updated', 'The app will reload with the latest update.');
		} catch (error) {
			console.error(error);
			setStatus('Update check failed');
			Alert.alert('Update failed', 'Could not check or install OTA update.');
		}
	};

	return (
		<View style={styles.container}>
			<Text>Edit src/app/index.tsx to edit this screen</Text>

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

