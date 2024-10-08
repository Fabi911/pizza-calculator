import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
	const [salt, setSalt] = useState(3.33333);
	const [water, setWater] = useState(1.66667);
	const [flour, setFlour] = useState(166.66667);
	const [yeast, setYeast] = useState(0.33333);
	const [quantity, setQuantity] = useState(6);
	const [hydration, setHydration] = useState(60);
	const calculate = () => {
		setFlour(166.66667 * quantity);
		setWater(1.66667 * quantity * hydration);
		setSalt(3.33333 * quantity);
		setYeast(0.33333 * quantity);
	}
	useEffect(() => {
		calculate();
	}, [quantity, hydration]);
	return (
		<View style={styles.container}>
			<Text style={styles.headline}>Pizza Calculator</Text>
			<View>
				<View style={styles.option}>
					<Text>Menge (Quantity)</Text>
					<Text>{quantity}</Text>
					<Button title="+" onPress={() => setQuantity(quantity + 1)}/>
					<Button title="-" onPress={() => setQuantity(quantity - 1)}/>
				</View>
				<View style={styles.option}>
					<Text>Hydration (%)</Text>
					<Text>{hydration}</Text>
					<Button title="+" onPress={() => setHydration(hydration + 1)}/>
					<Button title="-" onPress={() => setHydration(hydration - 1)}/>
				</View>
			</View>
			<View>
				<Text>Flour: {flour.toFixed(2)}g</Text>
				<Text>Water: {water.toFixed(2)}g</Text>
				<Text>Salt: {salt.toFixed(2)}g</Text>
				<Text>Yeast: {yeast.toFixed(2)}g</Text>
				<StatusBar style="auto"/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		gap: 20,
	},
	headline: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
		width: '80%',
		textAlign: 'center',
	},
	option: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
	},
});