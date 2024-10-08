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
		if (quantity < 0) {
			setQuantity(0);
		}
		if (hydration < 60) {
			setHydration(60);
		}
	}
	useEffect(() => {
		calculate();
	}, [quantity, hydration]);
	return (
		<View style={styles.container}>
			<Text style={styles.headline}>Pizza Calculator 🍕</Text>
			<View>
				<View style={styles.option}>
					<Text>Menge</Text>
					<Text>{quantity >= 0 ? quantity : 0}</Text>
					<View style={styles.button}>
						<Button style={styles.button} title="-" onPress={() => setQuantity(quantity - 1)}/>
					</View>
					<View style={styles.button}>
						<Button style={styles.button} title="+" onPress={() => setQuantity(quantity + 1)}/>
					</View>

				</View>
				<View style={styles.option}>
					<Text>Hydration (%)</Text>
					<Text>{hydration >= 60 ? hydration : 60}</Text>
					<View style={styles.button}>
						<Button title="-" onPress={() => setHydration(hydration - 1)}/>
					</View>
					<View style={styles.button}>
						<Button style={styles.button} title="+" onPress={() => setHydration(hydration + 1)}/>
					</View>
				</View>
			</View>
			<View>
				<Text>Mehl: {flour.toFixed(2)}g</Text>
				<Text>Wasser: {water.toFixed(2)}g</Text>
				<Text>Salz: {salt.toFixed(2)}g</Text>
				<Text>Hefe: {yeast.toFixed(2)}g</Text>
				<StatusBar style="auto"/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 70,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		display: 'flex',
		gap: 20,
	},
	headline: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
	},
	option: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
		marginBottom: 12,
	},
	button: {
		borderRadius: 4,
		backgroundColor: 'lightgray',
		borderColor: 'red',
		borderWidth: 1,
	},
});